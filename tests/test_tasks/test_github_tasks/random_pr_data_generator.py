import random
from faker import Faker
from datetime import date


class GithubDataGenerator():

    def __init__():
        self.fake = Faker()

    def user_name():
        return self.fake.user_name()

    def repo_name():
        return self.fake.user_name()

    def owner_name():
        return self.fake.user_name()

    def description(length=200):
        return self.fake.text(max_nb_chars=length)

    def title(length=50):
        return self.fake.text(max_nb_chars=length)

    def number(max = 999999999):
        return self.fake.pyint(0, max)

    def boolean():
        return self.fake.pybool()

    def node_id():
        return self.fake.pystr()

    def sha():
        return self.fake.sha256(raw_output=False)

    def date(start = datetime.datetime(1970, 1, 1), end = date.today()):

        return self.fake.date_object(start, end)

    def hex_color():
        return self.fake.color()

    def word():
        return self.fake.word()

    def uuid():
        return self.fake.uuid4()


    def generate_random_github_contributor(self, username = None):

        if not username:
            username = self.user_name()

        return {
            "login": username,
            "id": self.number(), 
            "node_id": self.node_id(),
            "avatar_url": "https://avatars.githubusercontent.com/u/260331?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/{}".format(username),
            "html_url": "https://github.com/{}".format(username),
            "followers_url": "https://api.github.com/users/{}/followers".format(username),
            "following_url": "https://api.github.com/users/{}/following{{/other_user}}".format(username),
            "gists_url": "https://api.github.com/users/{}/gists{{/gist_id}}".format(username),
            "starred_url": "https://api.github.com/users/{}/starred{{/owner}}{{/repo}}".format(username),
            "subscriptions_url": "https://api.github.com/users/{}/subscriptions".format(username),
            "organizations_url": "https://api.github.com/users/{}/orgs".format(username),
            "repos_url": "https://api.github.com/users/{}/repos".format(username),
            "events_url": "https://api.github.com/users/{}/events{{/privacy}}".format(username),
            "received_events_url": "https://api.github.com/users/{}/received_events".format(username),
            "type": "User",
            "site_admin": self.boolean()
        }


class PrDataGenerator(GithubDataGenerator):


    def pr_url(owner_name, repo_name, pr_number):
        return f"https://api.github.com/repos/{owner_name}/{repo_name}/pulls/{pr_number}"

    def html_url(owner_name, repo_name, pr_number): 
        return f"https://github.com/{owner_name}/{repo_name}/pull/{pr_number}"

    def diff_url(owner_name, repo_name, pr_number): 
        return f"https://github.com/{owner_name}/{repo_name}/pull/{pr_number}.diff"

    def patch_url(owner_name, repo_name, pr_number): 
        return f"https://github.com/{owner_name}/{repo_name}/pull/{pr_number}.patch"

    def issue_url(owner_name, repo_name, pr_number): 
        return f"https://api.github.com/repos/{owner_name}/{repo_name}/issues/{pr_number}"

    def commits_url(owner_name, repo_name, pr_number): 
        return f"https://api.github.com/repos/{owner_name}/{repo_name}/pulls/{pr_number}/commits"

    def review_comments_url(owner_name, repo_name, pr_number): 
        return f"https://api.github.com/repos/{owner_name}/{repo_name}/pulls/{pr_number}/comments"

    def review_comment_url(owner_name, repo_name):
        return "https://api.github.com/repos/{}/{}/pulls/comments{{/number}}".format(owner_name, repo_name)

    def comments_url(owner_name, repo_name, pr_number): 
        return f"https://api.github.com/repos/{owner_name}/{repo_name}/issues/{pr_number}/comments",

    def statuses_url(owner_name, repo_name, sha):
        return f"https://api.github.com/repos/{owner_name}/{repo_name}/statuses/{sha}"


    def generate_dates(self):

        created_date = self.date()
        updated_date = self.date(created_date)
        closed_and_merged_date = self.date(updated_date)

        created_date_str = f"{updated_date.year}-{updated_date.month}-{updated_date.day}T07:25:34Z",
        updated_date_str = f"{created_date.year}-{created_date.month}-{created_date.day}T07:25:34Z",
        closed_and_merged_date_str = f"{closed_and_merged_date.year}-{closed_and_merged_date.month}-{closed_and_merged_date.day}T07:25:34Z"

        return created_date_str, updated_date_str, closed_and_merged_date_str



    def generate_random_pr_label(owner_name = None, repo_name=None):

        if not owner_name:
            owner_name = self.owner_name()

        if not repo_name:
            repo_name = self.repo_name()

        return {
            "id": self.number(),
            "node_id": self.node_id(),
            "url": f"fhttps://api.github.com/repos/{owner_name}/{repo_name}/labels/documentation",
            "name": self.word(),
            "color": self.color(),
            "default": self.boolean(),
            "description": self.description()
        }


    def generate_random_simple_pr_metadata(owner_name = None):

        if not owner_name:
            owner_name = self.owner_name()

        branch = self.word()

        return {
            "label": f"{owner_name}:{branch}",
            "ref": branch,
            "sha": self.sha(),
            "user": generate_random_github_contributor()
        }

    def genreate_pr_milestone(owner_name = None, repo_name = None):

        if not owner_name:
            owner_name = self.owner_name()

        if not repo_name:
            repo_name = self.repo_name()

        milestone_number = self.number(9999)

        created_date, updated_date, _  = generate_dates()

        milestone_data = {
            'url': f'https://api.github.com/repos/{owner_name}/{repo_name}/milestones/{milestone_number}',
            'html_url': f'https://github.com/{owner_name}/{repo_name}/milestone/{milestone_number}',
            'labels_url': f'https://api.github.com/repos/{owner_name}/{repo_name}/milestones/{milestone_number}/labels',
            'id': self.number(),
            'node_id': self.node_id(),
            'number': milestone_number,
            'title': self.title(),
            'description': self.description(),
            'creator': generate_random_github_contributor(),
            'open_issues': self.number(99999),
            'closed_issues': self.number(99999),
            'state': random.choice(["open", "closed"]),
            'created_at': created_date,
            'updated_at': updated_date,
            'due_on': None,
            'closed_at': random.choice([None, '2022-11-09T14:41:37Z'])
        }

        return random.choice([None, milestone_data])

    def generate_pr_requested_team(owner_name = None):

        if not owner_name:
            owner_name = self.owner_name()

        requested_team_id = self.number(99999999)

        slug = self.title()

        return {
                'name': self.title(),
                'id': requested_team_id,
                'node_id': self.node_id(),
                'slug': slug,
                'description': self.description(),
                'privacy': 'closed',
                'url': f'https://api.github.com/organizations/1147473/team/{requested_team_id}',
                'html_url': f'https://github.com/orgs/{owner_name}/teams/{slug}',
                'members_url': 'https://api.github.com/organizations/1147473/team/{}/members{{/member}}'.format(requested_team_id),
                'repositories_url': f'https://api.github.com/organizations/1147473/team/{requested_team_id}/repos',
                'permission': 'pull',
                'parent': None
        }   



    def generate_random_pr_data(owner_name = None, repo_name = None):

        username = self.user_name()

        if not repo_name:
            repo_name = self.repo_name()

        if not owner_name:
            owner_name = self.owner_name()

        label_count = self.number(10)
        assignee_count = self.number(10)
        reviewer_count = self.number(10)
        requested_teams_count = self.number(10)
        contributor_count = assignee_count + reviewer_count + 3

        labels = [generate_random_pr_label(owner_name, repo_name) for i in range(label_count)]
        assignees = [generate_random_github_contributor() for i in range(assignee_count)]
        requested_reviewers = [generate_random_github_contributor() for i in range(reviewer_count)]
        requested_teams = [generate_pr_requested_team(owner_name) for i in range(requested_teams_count)]

        pr_number = self.number(999999)
        head = generate_random_simple_pr_metadata()

        created_date, updated_date, closed_and_merged_date = self.generate_dates()

        pr = {
            "url": self.pr_url(),
            "id": self.number(9999999),
            "node_id": self.node_id(),
            "html_url": self.html_url(),
            "diff_url": self.diff_url(),
            "patch_url": self.path_url(),
            "issue_url": self.issue_url(),
            "number": pr_number,
            "state": random.choice(["open", "closed"]),
            "locked": self.boolean(),
            "title": self.title(),
            "user": generate_random_github_contributor(),
            "body": random.choice([None, self.description()]),
            "created_at": created_date,
            "updated_at": fupdated_date,
            "closed_at": random.choice([None, closed_and_merged_date]),
            "merged_at": random.choice([None, closed_and_merged_date]),
            "merge_commit_sha": self.sha(),
            "assignee": assignees[0] if len(assignees) > 0 else None,
            "assignees": assignees,
            "requested_reviewers": requested_reviewers,
            "requested_teams": requested_teams,
            "labels": labels,
            "milestone": genreate_pr_milestone(owner_name, repo_name),
            "draft": self.boolean(),
            "commits_url": self.commits_url(),
            "review_comments_url": self.review_comments_url(),
            "review_comment_url": self.review_comment_url(),
            "comments_url": self.comments_url(),
            "statuses_url": self.statuses_url(),
            "head": head,
            "base": generate_random_simple_pr_metadata(),
            "author_association": random.choice(["OWNER", "MEMBER", "NONE", "CONTRIBUTOR", "COLLABORATOR"]),
            "auto_merge": None,
            "active_lock_reason": None
        }

        return pr, label_count, assignee_count, reviewer_count, requested_teams_count, contributor_count



    def generate_insertable_pr_data(repo_id):

        created_date, updated_date, closed_and_merged_date = self.generate_dates()

        return {
            'repo_id': repo_id,
            'pr_url': self.pr_url(),
            'pr_src_id': self.number(999999999),
            'pr_src_node_id': self.node_id(),
            'pr_html_url': self.html_url(owner_name, repo_name, pr_number),
            'pr_diff_url': self.diff_url(owner_name, repo_name, pr_number),
            'pr_patch_url': self.patch_url(owner_name, repo_name, pr_number),
            'pr_issue_url': self.issue_url(owner_name, repo_name, pr_number),
            'pr_augur_issue_id': None,
            'pr_src_number': pr_number,
            'pr_src_state': random.choice(["open", "closed"]),
            'pr_src_locked': self.boolean(),
            'pr_src_title': self.title(),
            'pr_augur_contributor_id': self.uuid(),
            'pr_body': random.choice([None, self.description()]),
            'pr_created_at': created_date,
            'pr_updated_at': updated_date,
            'pr_closed_at': random.choice([None, closed_and_merged_date]),
            'pr_merged_at': random.choice([None, closed_and_merged_date]),
            'pr_merge_commit_sha': self.sha(),
            'pr_teams': None,
            'pr_milestone': None,
            'pr_commits_url': self.commits_url(owner_name, repo_name, pr_number),
            'pr_review_comments_url': self.review_comments_url(owner_name, repo_name, pr_number),
            'pr_review_comment_url': self.review_comment_url(owner_name, repo_name, pr_number),
            'pr_comments_url': self.comments_url(owner_name, repo_name, pr_number),
            'pr_statuses_url': self.statuses_url(owner_name, repo_name, pr_number),
            'pr_meta_head_id': random.choice([None, f"{self.owner_name}:{self.word}"])
            'pr_meta_base_id': random.choice([None, f"{self.owner_name}:{self.word}"])
            'pr_src_issue_url': self.issue_url(),
            'pr_src_comments_url': self.comments_url(),
            'pr_src_review_comments_url': self.review_comments_url(),
            'pr_src_commits_url': self.commits_url(),
            'pr_src_statuses_url': self.statuses_url(),
            'pr_src_author_association': random.choice(["OWNER", "MEMBER", "NONE", "CONTRIBUTOR", "COLLABORATOR"]),
            'tool_source': tool_source,
            'tool_version': tool_version,
            'data_source': 'GitHub API'
        }

