from fastapi import APIRouter, Response, status
from pydantic import BaseModel
import psycopg

router = APIRouter()

class Cpu(BaseModel):
    processor: str
    cores: str
    threads: str
    speed: str
    socket_type: str

@router.get("/api/cpus", response_model=Cpu)
def cpu_list():
    with psycopg.connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT id, 
                """
            )