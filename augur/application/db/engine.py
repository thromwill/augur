"""Logic to create sqlalchemy database engine."""
import os
import json
import sys
import logging
import inspect
from sqlalchemy import create_engine, event
from sqlalchemy.engine.base import Engine
from sqlalchemy.pool import NullPool
from augur.application.db.util import catch_operational_error
from contextlib import contextmanager



def get_database_string() -> str:
    """Get database string from env or file

    Note:
        If environment variable is defined the function 
            will use that as the database string. And if the 
            environment variable is not defined, it will use the 
            db.config.json file to get the database string

    Returns:
        postgres database string
    """

    augur_db_environment_var = os.getenv("AUGUR_DB")

    try:
        current_dir = os.getcwd()
    except FileNotFoundError:
        print("\n\nPlease run augur commands in the root directory\n\n")
        sys.exit()

    db_json_file_location = current_dir + "/db.config.json"
    db_json_exists = os.path.exists(db_json_file_location)

    if not augur_db_environment_var and not db_json_exists:

        print("ERROR no way to get connection to the database. \n\t\t\t\t\t\t    There is no db.config.json and the AUGUR_DB environment variable is not set\n\t\t\t\t\t\t    Please run make install or set the AUGUR_DB environment then run make install")
        sys.exit()

    if augur_db_environment_var:
        return augur_db_environment_var


    with open("db.config.json", 'r') as f:
        db_config = json.load(f)

    db_conn_string = f"postgresql+psycopg2://{db_config['user']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database_name']}"

    return db_conn_string


def create_database_engine(url, **kwargs):  
    """Create sqlalchemy database engine 

    Note:
        A new database engine is created each time the function is called

    Returns:
        sqlalchemy database engine
    """ 

    # curframe = inspect.currentframe()
    # calframe = inspect.getouterframes(curframe, 2)
    # print('file name:', calframe[1][1])
    # print('function name:', calframe[1][3])

    engine = create_engine(url, **kwargs)

    @event.listens_for(engine, "connect", insert=True)
    def set_search_path(dbapi_connection, connection_record):
        existing_autocommit = dbapi_connection.autocommit
        dbapi_connection.autocommit = True
        cursor = dbapi_connection.cursor()
        cursor.execute("SET SESSION search_path=public,augur_data,augur_operations,spdx")
        cursor.close()
        dbapi_connection.autocommit = existing_autocommit

    return engine


@contextmanager
def get_db_engine(**kwargs):

    if not kwargs.get("pool_size"):
        kwargs["pool_size"] = 3

    if not kwargs.get("max_overflow"):
        kwargs["max_overflow"] = 0

    db_conn_string = get_database_string()
    engine = create_database_engine(db_conn_string, **kwargs)

    try:
        yield engine
    finally:
        engine.dispose()

@contextmanager
def get_db_session(engine=None):
    from sqlalchemy.orm import Session

    engine_created = False
    if not engine:
        engine_created = True
        db_conn_string = get_database_string()
        engine = create_database_engine(db_conn_string, pool_size=3, max_overflow=0)
        
    session = Session(engine)

    try:
        yield session
    finally:
        session.close()
        if engine_created:
            engine.dispose()


# class EngineConnection():

#     def __init__(self, engine):
#         self.connection = self.get_connection(engine)

#     def __enter__(self):
#         return self.connection

#     def __exit__(self, exception_type, exception_value, exception_traceback):

#         self.connection.close()

#     def get_connection(self, engine):

#         func = engine.connect

#         return catch_operational_error(func)

        



