from fastapi import APIRouter, Response, status, Depends
from typing import Union
from ..models.parts import (
    Gpu,
    Cpu,
    Hdd,
    Psu,
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

def row_to_hdd(row):
    hdd = {
        "id": row[0],
        "capacity": row[1],
        "interface": row[2],
        "cache": row[3],
        "rpm": row[4]
    }
    return hdd

def row_to_psu(row):
    psu= {
        "id": row[0],
        "wattage": row[1],
        "atx_connector": row[2],
        "atx_12v_connector": row[3],
        "graphics_connector": row[4],
        "molex_connector": row[5],
        "sata_connector": row[6],
        "floppy_connector": row[7]
    }
    return psu

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
    
@router.get("/api/psus", response_model=Psu)
def psu_list(query=Depends(PartsQueries)):
    rows = query.get_all_psus()
    return {
        "psus": [row_to_psu(row) for row in rows],
    }

@router.get("/api/hdds", response_model=Hdd)
def psu_list(query=Depends(PartsQueries)):
    rows = query.get_all_psus()
    return {
        "hdds": [row_to_hdd(row) for row in rows],
    }