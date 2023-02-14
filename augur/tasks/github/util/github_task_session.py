from logging import Logger
from sqlalchemy.orm import Session

from augur.tasks.github.util.github_random_key_auth import GithubRandomKeyAuth
# from augur.application.db.session import DatabaseSession


# class GithubTaskSession(DatabaseSession):
#     """ORM session used in github tasks.
#         This class adds the platform_id and the github key authentication class,
#         to the already existing DatabaseSession so there is a central location to access
#         api keys and a single platform_id reference

#     Attributes:
#         oauths (GithubRandomKeyAuth): Class that handles randomly assigning github api keys to httpx requests
#         platform_id (int): The id that refers to the Github platform
#     """

#     def __init__(self, logger: Logger, engine=None):

#         super().__init__(logger, engine=engine)

#         self.oauths = GithubRandomKeyAuth(self, logger)
#         self.platform_id = 1


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

        
