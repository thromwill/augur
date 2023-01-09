import logging

from augur.tasks.github.util.github_task_session import GithubTaskSession
from augur.util.repo_load_controller import RepoLoadController

logger = logging.getLogger(__name__)

def get_all_repos(page=0, page_size=25, sort="repo_id", direction="ASC"):

    with GithubTaskSession(logger) as session:

        controller = RepoLoadController(session)

        result = controller.paginate_repos("all", page, page_size, sort, direction)

        return result

def get_all_repos_count():

    with GithubTaskSession(logger) as session:

        controller = RepoLoadController(session)

        result = controller.get_repo_count(source="all")

        return result
       

