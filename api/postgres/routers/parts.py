from fastapi import APIRouter, Response, status, Depends
from typing import Union
from ..models.parts import (
    Gpu,
    GpuOut,
    Cpu,
    CpuOut,
    Ram,
    RamOut
)
from ..db import PartsQueries


router = APIRouter()

def row_to_gpu(row):
    gpu = {
        "id": row[0],
        "manufacturer": row[1],
        "core_clock_speed": row[2],
        "video_memory": row[3],
        "memory_type": row[4],
        "height": row[5],
        "length": row[6],
        "width": row[7],
        "hdmi": row[8],
        "display_port": row[9]
    }
    return gpu
def row_to_cpu(row):
    cpu = {
        "id": row[0],
        "processor": row[1],
        "cores": row[2],
        "threads": row[3],
        "speed": row[4],
        "socket_type": row[5],
    }
    return cpu

def row_to_ram(row):
    ram = {
        "id": row[0],
        "memory_type": row[1],
        'memory_speed': row[2],
        'memory_channel': row[3],
        'pin_configuration': row[4],
    }
    return ram

@router.get("/api/gpus", response_model=Gpu)
def gpu_list(query=Depends(PartsQueries)):
    rows = query.get_all_gpus()
    return {
        "gpus": [row_to_gpu(row) for row in rows],
    }

@router.get("/api/cpus", response_model=Cpu)
def cpu_list(query=Depends(PartsQueries)):
    rows = query.get_all_cpus()
    return {
        "cpus": [row_to_cpu(row) for row in rows],
    }

@router.get("/api/rams", response_model=Ram)
def ram_list(query=Depends(PartsQueries)):
    rows = query.get_all_rams()
    return {
        "rams": [row_to_ram(row) for row in rows],
    }