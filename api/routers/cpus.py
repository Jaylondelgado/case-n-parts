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
