import logging
from sqlalchemy.orm import Session
from augur.application.db.engine import get_augur_db_session
from augur.application.config import AugurConfig
from augur.application.db.session import AugurDbEngine

def get_redis_conn_values():

    logger = logging.getLogger(__name__)

    with get_augur_db_session() as session:

        config = AugurConfig(logger, session)

    redis_db_number = config.get_value("Redis", "cache_group") * 3
    redis_conn_string = config.get_value("Redis", "connection_string")

    if redis_conn_string[-1] != "/":
        redis_conn_string += "/"

    return redis_db_number, redis_conn_string

def get_rabbitmq_conn_string():
    logger = logging.getLogger(__name__)

    with get_augur_db_session() as session:
        config = AugurConfig(logger, session)
    
        rabbbitmq_conn_string = config.get_value("RabbitMQ", "connection_string")

    return rabbbitmq_conn_string
