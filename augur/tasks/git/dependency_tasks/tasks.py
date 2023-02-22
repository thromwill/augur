import logging
import traceback

from augur.tasks.git.dependency_tasks.core import *
from augur.tasks.init.celery_app import celery_app as celery
from augur.application.db.util import execute_session_query
from augur.tasks.github.util.github_task_session import GithubTaskManifest


@celery.task
def process_dependency_metrics(repo_git):
    #raise NotImplementedError

    logger = logging.getLogger(process_dependency_metrics.__name__)

    with GithubTaskManifest(logger) as manifest:

        query = manifest.session.query(Repo).filter(Repo.repo_git == repo_git)
        repo = execute_session_query(query,'one')

        deps_model(manifest.facade_db, logger, repo.repo_id)
        