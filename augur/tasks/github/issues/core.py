import time
import logging

from typing import Dict, List, Tuple, Optional


# from augur.tasks.init.celery_app import celery_app as celery, engine
# from augur.application.db.data_parse import *
# from augur.tasks.github.util.github_paginator import GithubPaginator, hit_api
# from augur.tasks.github.util.github_task_session import GithubTaskSession
# from augur.tasks.github.util.util import add_key_value_pair_to_dicts, get_owner_repo
# from augur.tasks.util.worker_util import remove_duplicate_dicts
# from augur.application.db.models import PullRequest, Message, PullRequestReview, PullRequestLabel, PullRequestReviewer, PullRequestEvent, PullRequestMeta, PullRequestAssignee, PullRequestReviewMessageRef, Issue, IssueEvent, IssueLabel, IssueAssignee, PullRequestMessageRef, IssueMessageRef, Contributor, Repo
# from augur.application.config import get_development_flag
# development = get_development_flag()


from augur.application.db.data_parse import *
from augur.application.db.session import DatabaseSession
from augur.tasks.init.celery_app import engine
from augur.tasks.github.util.github_task_session import GithubTaskSession
from augur.tasks.github.util.util import add_key_value_pair_to_dicts
from augur.tasks.util.worker_util import remove_duplicate_dicts
from augur.application.db.models import PullRequest, Message, PullRequestReview, PullRequestLabel, PullRequestReviewer, PullRequestEvent, PullRequestMeta, PullRequestAssignee, PullRequestReviewMessageRef, PullRequestMessageRef, Contributor, Repo

PLATFORM_ID = 1

#TODO: Document tool_source, tool_source, data_source

def extract_data_from_issue(issue: dict, 
                        repo_id: int, 
                        tool_source: str, 
                        tool_version: str, 
                        data_source: str) -> Tuple[dict, List[dict], List[dict], List[dict], List[dict], List[dict]]:
    """Extract needed data from single pull request.

    Args:
        pr_data: a pull request from the github api
        repo_id: an integer representing the repo a repo in the repos table

    Returns:
        A tuples that includes
            The needed data from the pr
            The needed data for pr labels
            The needed data for pr assignees
            The needed data for pr reviewers
            The needed data for pr meatadata
            The contributors found amongst all the pull request data
    """
    # calls is_valid_pr_block to see if the data is a pr.
    # if it is a pr we skip it because we don't need prs 
    # in the issues table
    if is_valid_pr_block(issue) is True:
        issue_total-=1
        continue

    issue, contributor_data = process_issue_contributors(issue, tool_source, tool_version, data_source)

    contributors += contributor_data

    
    # get only the needed data for the issues table
    issue_dict = extract_needed_issue_data(issue, repo_id, tool_source, tool_version, data_source)
    

        # get only the needed data for the issue_labels table
    issue_labels = extract_needed_issue_label_data(issue["labels"], repo_id,
                                                    tool_source, tool_version, data_source)

    # get only the needed data for the issue_assignees table
    issue_assignees = extract_needed_issue_assignee_data(issue["assignees"], repo_id,
                                                            tool_source, tool_version, data_source)

    
    return issue_dict, issue_labels, issue_assignees, contributor_data


def extract_data_from_issue_list(issues: List[dict], 
                                repo_id: int, 
                                tool_source: str, 
                                tool_version: str, 
                                data_source: str) -> Tuple[List[dict], 
                                                            Dict[str, Dict[str, List[dict]]], 
                                                            List[int], 
                                                            List[dict]
                                                        ]:
    """Extract needed data from list of pull requests

    Note:
        This also organizes the other pull request data like labels and assignees, in a way that will make it easy to map them to the pull requests after the pull request has been inserted

    Args:
        pull_requests: list of pr dicts
        repo_id: an integer representing the repo a repo in the repos table

    Returns:
        A tuple containing
            A list of pull requests with the data needed for insertion
            A dictionairy with the keys being pr urls and the value being 
                a dict containing labels, assignees, reviewers, and metadata. 
                This is structured in this way to allow for easy mapping back 
                to the prs after they are inserted
            A list of pr numbers to pass to the pr reviews task
            A list of contributors found amongst all the pull request data in the list
    """            
    issue_mapping_data = {}
    issue_dicts = [] 
    contributors = []
    
    for issue in issues:

        issue, labels, assignees, contributor_data = extract_data_from_issue(issue, repo_id, tool_source, tool_version, data_source)

        contributors += contributor_data

        issue_dicts.append(issue) 

        mapping_data_key = issue["url"]
        issue_mapping_data[mapping_data_key] = {
                                            "labels": labels,
                                            "assignees": assignees,
                                            }           
       


    return issue_dicts, issue_mapping_data, contributors


def insert_issue_contributors(contributors: List[dict], session: GithubTaskSession, task_name: str) -> None:
    """Insert pr contributors
    
    Args:
        contributors: the contributor data that is being inserted
        session: database session to insert the data with
        task_name: to differiante between log statements since there are multiple tasks of the same type
    """

    # remove duplicate contributors before inserting
    contributors = remove_duplicate_dicts(contributors)

    # insert contributors from these prs
    session.logger.info(f"{task_name}: Inserting {len(contributors)} contributors")
    session.insert_data(contributors, Contributor, ["cntrb_id"])


def insert_issues(pr_dicts: List[dict], session: GithubTaskSession, task_name: str) -> Optional[List[dict]]:
    """Insert pull requests
    
    Args:
        pr_dicts: the pull request data that is being inserted
        session: database session to insert the data with
        task_name: to differiante between log statements since there are multiple tasks of the same type

    Returns:
        list of dicts that contain a pr_url and a pull_request_id. 
            So we can determine what labels, assigness, and other data belong to each pr
    """

    # insert the issues into the issues table. 
    # issue_urls are gloablly unique across github so we are using it to determine whether an issue we collected is already in the table
    # specified in issue_return_columns is the columns of data we want returned. This data will return in this form; {"issue_url": url, "issue_id": id}
    logger.info(f"{task_name}: Inserting {len(issue_dicts)} issues")
    issue_natural_keys = ["repo_id", "gh_issue_id"]
    issue_return_columns = ["issue_url", "issue_id"]
    issue_string_columns = ["issue_title", "issue_body"]

    issue_return_data = session.insert_data(issue_dicts, Issue, issue_natural_keys, return_columns=issue_return_columns, string_fields=issue_string_columns)

    return pr_return_data

def map_other_issue_data_to_issue(
                            issue_return_data: List[dict], 
                            issue_mapping_data: Dict[str, Dict[str, List[dict]]], 
                            logger: logging.Logger) -> Tuple[List[dict], List[dict], List[dict], List[dict]]:
    """Map labels, assigness, reviewers, and metadata to their respecive prs
    
    Args:
        pr_return_data: list of dicts containing pr urls and pull request ids
        pr_mapping_data: dict containing pr urls as the keys and the values 
            being a dict containing other related pr data
        logger: handles logging

    Returns:
        A tuple containing
            list of labels that have pull request ids
            list of assignees that have pull request ids
            list of reviewers that have pull request ids
            list of metadata that have pull request ids
    """
    issue_label_dicts = []
    issue_assignee_dicts = []
    for data in issue_return_data:

        issue_url = data["issue_url"]
        issue_id = data["issue_id"]

        try:
            other_issue_data = issue_mapping_data[issue_url]
        except KeyError as e:
            logger.info(f"{task_name}: Cold not find other issue data. This should never happen. Error: {e}")


        # add the issue id to the lables and assignees, then add them to a list of dicts that will be inserted soon
        dict_key = "issue_id"
        issue_label_dicts += add_key_value_pair_to_dicts(other_issue_data["labels"], "issue_id", issue_id)
        issue_assignee_dicts += add_key_value_pair_to_dicts(other_issue_data["assignees"], "issue_id", issue_id)

    return issue_label_dicts, issue_assignee_dicts



def insert_issue_labels(labels: List[dict]) -> None:
    """Insert pull request labels

    Note:
        This assumes the labels have pull request ids and only the data needed for the database

    Args:
        labels: list of labels to insert
        logger: handles logging
    """
    with DatabaseSession(logger) as session:

        # we are using label_src_id and issue_id to determine if the label is already in the database.
        issue_label_natural_keys = ['label_src_id', 'issue_id']
        issue_label_string_fields = ["label_text", "label_description"]
        session.insert_data(issue_label_dicts, IssueLabel,
                            issue_label_natural_keys, string_fields=issue_label_string_fields)



def insert_issue_assignees(assignees: List[dict]) -> None:
    """Insert pull request assignees

    Note:
        This assumes the assignees have pull request ids and only the data needed for the database

    Args:
        assignees: list of assignees to insert
        logger: handles logging
    """
    with DatabaseSession(logger) as session:

        # we are using issue_assignee_src_id and issue_id to determine if the label is already in the database.
        issue_assignee_natural_keys = ['issue_assignee_src_id', 'issue_id']
        session.insert_data(issue_assignee_dicts, IssueAssignee, issue_assignee_natural_keys)



def process_issue_contributors(issue, tool_source, tool_version, data_source):

    contributors = []

    issue_cntrb = extract_needed_contributor_data(issue["user"], tool_source, tool_version, data_source)
    issue["cntrb_id"] = issue_cntrb["cntrb_id"]
    contributors.append(issue_cntrb)

    for assignee in issue["assignees"]:

        issue_assignee_cntrb = extract_needed_contributor_data(issue["user"], tool_source, tool_version, data_source)
        assignee["cntrb_id"] = issue_assignee_cntrb["cntrb_id"]
        contributors.append(issue_assignee_cntrb)

    return issue, contributors


def is_valid_pr_block(issue):
    return (
        'pull_request' in issue and issue['pull_request']
        and isinstance(issue['pull_request'], dict) and 'url' in issue['pull_request']
    )