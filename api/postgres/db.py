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
                    SELECT id, wattage,atx_connector, atx_12v_connector,
                    graphics_connector, molex_connector, sata_connector,
                    floppy_connector
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
                    SELECT id, capacity, interface, cache,
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
                    SELECT id, socket_type, max_memory, max_memory_per_slot,
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
                    SELECT build.id, build."Name", color.name, "size".name, buildgpus.gpuid, buildgpus.cardcount,
                    gpu.manufacturer, gpu.chipset, gpu.core_clock_speed, gpu.video_memory, gpu.memory_type,
                    gpu.height, gpu.length, gpu.width, gpu.hdmi, gpu.display_port, buildhdds.hddid,
                    buildhdds.hddcount, hdd.capacity, hdd.interface, hdd.cache, hdd.rpm, buildram.ramid,
                    buildram.ramcount, ram.brand, ram.memory_type, ram.memory_speed, ram.memory_channels, ram.pin_configuration,
                    mobos.id, mobos.socket_type, mobos.max_memory, mobos.max_memory_per_slot, mobos.pcie_slots,
                    mobos.memory_slots, cpu.id, cpu.processor, cpu.cores, cpu.threads, cpu.speed, cpu.socket_type,
                    psu.id, psu.wattage, psu.atx_connector, psu.atx_12v_connector, psu.graphics_connector,
                    psu.molex_connector, psu.sata_connector, psu.floppy_connector
                    FROM public.build
                    INNER JOIN public.case ON(build.id="case".buildid)
                    INNER JOIN public.size ON("size".id="case".size)
                    INNER JOIN public.color ON(color.id="case".color)
                    INNER JOIN public.buildgpus ON(build.id=buildgpus.buildid)
                    INNER JOIN public.gpu ON(gpu.id=buildgpus.gpuid)
                    INNER JOIN public.buildhdds ON(build.id=buildhdds.id)
                    INNER JOIN public.hdd ON(hdd.id=buildhdds.hddid)
                    INNER JOIN public.buildram ON(build.id=buildram.id)
                    INNER JOIN public.ram ON(ram.id=buildram.ramid)
                    INNER JOIN public.mobos ON(build.moboid=mobos.id)
                    INNER JOIN public.cpu ON(build.cpuid=cpu.id)
                    INNER JOIN public.psu ON(build.psuid=psu.id);
                    """
                )
                rows = cursor.fetchall()
                print("rows:", rows)
                return list(rows)
