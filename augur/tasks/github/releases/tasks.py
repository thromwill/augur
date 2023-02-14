from augur.tasks.github.util.github_task_session import GithubTaskManifest
from augur.tasks.github.releases.core import *
from augur.tasks.init.celery_app import celery_app as celery
from augur.application.db.util import execute_session_query
import traceback

@celery.task
def collect_releases(repo_git):

    logger = logging.getLogger(collect_releases.__name__)
    with GithubTaskManifest(logger) as manifest:

        query = manifest.session.query(Repo).filter(Repo.repo_git == repo_git)
        repo_obj = execute_session_query(query, 'one')
        repo_id = repo_obj.repo_id

        releases_model(manifest.session, repo_git, repo_id, manifest.key_auth, manifest.augur_db_engine, logger)