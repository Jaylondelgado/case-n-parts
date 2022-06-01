from re import S
from fastapi import APIRouter, Response, status
from pydantic import BaseModel
import psycopg

router = APIRouter()

class CpuOut(BaseModel):
    id: int
    processor: str
    cores: str
    threads: str
    speed: str
    socket_type: str

class Cpu(BaseModel):
    cpus: list[CpuOut]

class GpuOut(BaseModel):
    id: int
    manufacturer: str
    core_clock_speed: str
    video_memory: str
    memory_type: str
    height: str
    length: str
    width: str
    hdmi: str
    display_port: str

class Gpu(BaseModel):
    gpus: list[GpuOut]

@router.get("/api/gpus", response_model=Gpu)
def cpu_list():
    with psycopg.connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT id, manufacturer, core_clock_speed, video_memory,
                    memory_type, height, length, width, hdmi, display_port
                FROM gpu
            """
            )
            gpus = cur.fetchall()
            gpu_list = []
            for gpu in gpus:
                list = {
                    "id": gpu[0],
                    "manufacturer": gpu[1],
                    "core_clock_speed": gpu[2],
                    "video_memory": gpu[3],
                    "memory_type": gpu[4],
                    "height": gpu[5],
                    "length": gpu[6],
                    "width": gpu[7],
                    "hdmi": gpu[8],
                    "display_port": gpu[9]
                }
                gpu_list.append(list)
            print (gpu_list)
            return Gpu(gpus=gpu_list)


@router.get("/api/cpus", response_model=Cpu)
def cpu_list():
    with psycopg.connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT id, processor, cores, threads, speed, socket_type
                FROM cpu
            """
            )
            cpus = cur.fetchall()
            cpu_list = []
            for cpu in cpus:
                list = {
                    "id": cpu[0],
                    "processor": cpu[1],
                    "cores": cpu[2],
                    "threads": cpu[3],
                    "speed": cpu[4],
                    "socket_type": cpu[5],
                }
                cpu_list.append(list)
            return Cpu(cpus=cpu_list)
