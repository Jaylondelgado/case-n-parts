from psycopg_pool import ConnectionPool

pool = ConnectionPool()


class DuplicateTitle(RuntimeError):
    pass

class PartsQueries:
    def get_all_gpus(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, manufacturer, core_clock_speed, video_memory,
                    memory_type, height, length, width, hdmi, display_port
                FROM gpu
                """
                )
                rows = cursor.fetchall()
                return list(rows)
    def get_all_cpus(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, processor, cores, threads, speed, socket_type
                FROM cpu
                """
                )
                rows = cursor.fetchall()
                return list(rows)