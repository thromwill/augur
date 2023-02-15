def requires_db_session(logger):
    def inner_decorator(fun):
        def wrapper(*args, **kwargs):

            from augur.application.db.engine import get_db_session

            # create DB session
            with get_db_session() as session:

                return fun(session, *args, **kwargs)
        
        return wrapper
    return inner_decorator
