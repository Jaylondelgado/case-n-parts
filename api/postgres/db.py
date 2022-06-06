from psycopg_pool import ConnectionPool

pool = ConnectionPool()


class DuplicateTitle(RuntimeError):
    pass

class UsersQueries:
    def get_user(self, username: str):
        # TODO: Replace this with real SQL
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                        SELECT username, password, email
                        FROM "user"
                        WHERE "user".username = %s
                    """,
                        [username]
                )
                rows = cursor.fetchone()
                return rows

    def create_user(self, username: str, hashed_password: str, email: str = None):
        # TODO: Replace this with real SQL
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                        INSERT INTO "user"(Username, Password, Email)
                        VALUES (%s, %s, %s)
                        RETURNING id, Username, Password, Email
                    """,
                    [username, hashed_password, email]
                )
                rows = cursor.fetchone()
                return list(rows)

class PartsQueries:
    def get_all_gpus(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, manufacturer, chipset, core_clock_speed, video_memory,
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

    def get_all_rams(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, brand, memory_type, memory_speed, memory_channels, pin_configuration
                    FROM ram
                    """
                )
                rows = cursor.fetchall()
                return list(rows)

    def get_all_psus(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, brand, wattage,atx_connector, atx_12v_connector,
                    graphics_connector, molex_connector, sata_connector
                    from psu
                    """
                )
                rows = cursor.fetchall()
                return list(rows)

    def get_all_hdds(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, brand, capacity, interface, cache,
                    rpm
                    from hdd
                    """
                )
                rows = cursor.fetchall()
                return list(rows)

    def get_all_mobos(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT id, brand, socket_type, max_memory, max_memory_per_slot,
                    pcie_slots, memory_slots
                    FROM mobos
                    """
                )
                rows = cursor.fetchall()
                return list(rows)

class BuildsQueries:
    def get_all_builds(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    SELECT
                        build.id,
                        build."Name",
                        color.name,
                        "size".name,
                        buildgpus.gpuid,
                        buildgpus.cardcount,
                        gpu.manufacturer,
                        gpu.chipset,
                        gpu.core_clock_speed,
                        gpu.video_memory,
                        gpu.memory_type,
                        gpu.height,
                        gpu.length,
                        gpu.width,
                        gpu.hdmi,
                        gpu.display_port,
                        buildhdds.hddid,
                        buildhdds.hddcount,
                        hdd.brand,
                        hdd.capacity,
                        hdd.interface,
                        hdd.cache,
                        hdd.rpm,
                        buildram.ramid,
                        buildram.ramcount,
                        ram.brand,
                        ram.memory_type,
                        ram.memory_speed,
                        ram.memory_channels,
                        ram.pin_configuration,
                        mobos.id,
                        mobos.brand,
                        mobos.socket_type,
                        mobos.max_memory,
                        mobos.max_memory_per_slot,
                        mobos.pcie_slots,
                        mobos.memory_slots,
                        cpu.id,
                        cpu.processor,
                        cpu.cores,
                        cpu.threads,
                        cpu.speed,
                        cpu.socket_type,
                        psu.id,
                        psu.brand,
                        psu.wattage,
                        psu.atx_connector,
                        psu.atx_12v_connector,
                        psu.graphics_connector,
                        psu.molex_connector,
                        psu.sata_connector
                    FROM public.build

                    -- Join case information
                    INNER JOIN public.case
                    INNER JOIN public.size
                        ON "size".id = "case".size
                    INNER JOIN public.color
                        ON color.id = "case".color
                    ON "case".buildid = build.id

                    -- Join GPU info
                    INNER JOIN public.BuildGpus
                    INNER JOIN public.gpu
                        ON gpu.id = BuildGpus.gpuid
                    ON BuildGpus.BuildId = build.id

                    -- Join HDD information.
                    INNER JOIN public.buildhdds
                    INNER JOIN public.hdd
                        ON hdd.id = buildhdds.hddid
                    ON buildhdds.id = build.id

                    -- Join RAM information
                    INNER JOIN public.buildram
                    INNER JOIN public.ram
                        ON ram.id = buildram.ramid
                    ON build.id = buildram.id

                    -- Join simple information.
                    INNER JOIN public.mobos
                    ON mobos.id = build.moboid
                    INNER JOIN public.cpu
                    ON cpu.id = build.cpuid
                    INNER JOIN public.psu
                    ON psu.id = build.psuid;
                    """
                )
                rows = cursor.fetchall()
                print("rows:", rows)
                return list(rows)
    
    def create_build(self, Name, moboid, cpuid, psuid, gpuid, cardcount, hddid, hddcount, ramid, ramcount, color, size):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                with connection.transaction():
                    cursor.execute(
                        """
                        INSERT INTO build("Name", moboid, cpuid, psuid)
                        VALUES(%s, %s, %s, %s)
                        RETURNING id 
                    """,
                        [Name, moboid, cpuid, psuid]
                    )
                    new_build_id = cursor.fetchone()[0]
                    cursor.execute(
                        """
                        INSERT INTO buildgpus(buildid, gpuid, cardcount)
                        VALUES(%s, %s, %s)
                    """,
                        [new_build_id, gpuid, cardcount]
                    
                    )
                    cursor.execute(
                        """
                        INSERT INTO buildhdds(buildid, hddid, hddcount)
                        VALUES(%s, %s, %s)
                    """,
                        [new_build_id, hddid, hddcount]
                    )
                    cursor.execute(
                        """
                        INSERT INTO buildram(buildid, ramid, ramcount)
                        VALUES(%s, %s, %s)
                    """,
                        [new_build_id, ramid, ramcount]
                    )
                    cursor.execute(
                        """
                        INSERT INTO "case"(buildid, color, size)
                        VALUES(%s, %s, %s)
                    """,
                        [new_build_id, color, size]
                    )
                cursor.execute(
                    """
                    SELECT build.id, build."Name", build.moboid, build.cpuid, build.psuid, build."Private"
                    FROM build
                    
                """,
                    
                )
                rows = cursor.fetchone()
                print("rows:", rows)
                return list(rows)

    
    # def create_build(self, Name, moboid, cpuid, psuid, gpuid, cardcount):
    #     with pool.connection() as connection:
    #         with connection.cursor() as cursor
    #             cursor.execute(
    #                 """
    #                 WITH ins1 AS(
    #                 INSERT INTO build("Name", moboid, cpuid, psuid)
    #                 VALUES(%s, %s, %s, %s)
    #                 RETURNING id AS build_id
    #                     )
    #                 INSERT INTO buildgpus(buildid, gpuid, cardcount)
    #                 SELECT build_id, %s , %s FROM ins1
                    
    #                 """,
    #                     [Name, moboid, cpuid, psuid, gpuid, cardcount]
    #                 )
    #             cursor.execute(
    #                 """
    #                 SELECT build.id, build."Name", build.moboid, build.cpuid, build.psuid, build."Private"
    #                 FROM build
                    
    #             """,
                    
    #             )

    #             rows = cursor.fetchone()
    #             print("rows:", rows)
    #             return list(rows)
        

    # def create_build(self, Name, moboid, cpuid, psuid):
    #     with pool.connection() as connection:
    #         with connection.cursor() as cursor:
    #             cursor.execute(
    #                 """
    #                 INSERT INTO build("Name", moboid, cpuid, psuid)
    #                 VALUES (%s, %s, %s, %s)
    #                 RETURNING id, "Name", moboid, cpuid, psuid, "Private"
    #             """,
    #                 [Name, moboid, cpuid, psuid]
    #             )
    #             rows = cursor.fetchone()
    #             print("rows:", rows)
    #             return list(rows)


class BuildPartsQueries:
    def create_build_(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """

                    """
                )
                rows = cursor.fetchall()
                print("rows:", rows)
                return list(rows)