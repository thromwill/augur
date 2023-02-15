from logging import Logger
from sqlalchemy.orm import Session

from augur.tasks.github.util.github_random_key_auth import GithubRandomKeyAuth


class GithubTaskManifest:

    def __init__(self, logger):

        from augur.tasks.init.celery_app import engine
        from augur.application.db.session import AugurDbEngine

        self.augur_db_engine = AugurDbEngine(logger, engine)
        self.session = Session(engine)
        self.key_auth = GithubRandomKeyAuth(self.session, logger)
        self.logger = logger
        self.platform_id = 1

    def __enter__(self):

        return self

    def __exit__(self, exception_type, exception_value, exception_traceback):

        self.session.close()

        
