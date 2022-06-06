from psycopg_pool import ConnectionPool

pool = ConnectionPool()


class DuplicateTitle(RuntimeError):
    pass

class UsersQueries:
    FAKE_USERS = []  # DELETE THIS AFTER REPLACING WITH SQL

    def get_user(self, username: str):
        # TODO: Replace this with real SQL
        for user in self.FAKE_USERS:
            if user["username"] == username:
                return user

    def create_user(self, username: str, hashed_password: str, email: str = None):
        # TODO: Replace this with real SQL
        user = {
            "id": len(self.FAKE_USERS),
            "username": username,
            "email": email,
            "hashed_password": hashed_password,
        }
        self.FAKE_USERS.append(user)
        return user


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
<<<<<<< HEAD
<<<<<<< HEAD
                    SELECT build.id, build."Name", color.name, "size".name, buildgpus.gpuid, buildgpus.cardcount,
                    gpu.manufacturer, gpu.chipset, gpu.core_clock_speed, gpu.video_memory, gpu.memory_type,
                    gpu.height, gpu.length, gpu.width, gpu.hdmi, gpu.display_port, buildhdds.hddid,
                    buildhdds.hddcount, hdd.brand, hdd.capacity, hdd.interface, hdd.cache, hdd.rpm, buildram.ramid,
                    buildram.ramcount, ram.brand, ram.memory_type, ram.memory_speed, ram.memory_channels, ram.pin_configuration,
                    mobos.id, mobos.brand, mobos.socket_type, mobos.max_memory, mobos.max_memory_per_slot, mobos.pcie_slots,
                    mobos.memory_slots, cpu.id, cpu.processor, cpu.cores, cpu.threads, cpu.speed, cpu.socket_type,
                    psu.id, psu.brand, psu.wattage, psu.atx_connector, psu.atx_12v_connector, psu.graphics_connector,
                    psu.molex_connector, psu.sata_connector
=======
                    SELECT 
                        build.id, 
                        build."Name", 
                        color.name, 
                        "size".name, 
                        buildgpus.gpuid, 
=======
                    SELECT
                        build.id,
                        build."Name",
                        color.name,
                        "size".name,
                        buildgpus.gpuid,
>>>>>>> 8014eea149a0327c483ebb8a1016475a671f1121
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
>>>>>>> b869e90cd83d328d2fc77a2d8abd6d7add9fecc9
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

    def create_build(self, Name, moboid, cpuid, psuid, gpuid):
        gpu_queries = PartsQueries()
        gpus = gpu_queries.get_all_gpus()
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(
                    """
                    INSERT INTO build("Name", moboid, cpuid, psuid)
                    VALUES (%s, %s, %s, %s)
                    RETURNING id, "Name", moboid, cpuid, psuid, "Private"
                """,
                    [Name, moboid, cpuid, psuid]
                )
                rows = cursor.fetchone()
                print("rows:", rows)
                return list(rows)


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
