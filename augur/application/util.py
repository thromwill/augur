import logging

from augur.application.db.engine import get_augur_db_session
from augur.util.repo_load_controller import RepoLoadController
from sqlalchemy.orm import Session

logger = logging.getLogger(__name__)

def get_all_repos(page=0, page_size=25, sort="repo_id", direction="ASC"):

    with get_augur_db_session() as session:

        controller = RepoLoadController(session)

        result = controller.paginate_repos("all", page, page_size, sort, direction)

        return result

def get_all_repos_count():

   with get_augur_db_session() as session:

        controller = RepoLoadController(session)

        result = controller.get_repo_count(source="all")

        return result
       


