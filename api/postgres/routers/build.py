from ctypes import Union
from turtle import title
from ..models.build import Build, InsertBuild, OutBuild
from fastapi import APIRouter, Response, status, Depends
from ..db import BuildsQueries
from ..models.common import ErrorMessage
from .accounts import User, get_current_active_user

router = APIRouter()
def row_to_create_build(row):
    build ={
        "id": row[0],
        "Name": row[1],
        "moboid": row[2],
        "cpuid": row[3],
        "psuid": row[4],
        "Private": row[5],
    }
    return build


def row_to_build(row):
    build = {
        "id": row[0],
        "name": row[1],
        "color": row[2],
        "size": row[3],
        "gpu": {
            "id": row[4],
            "card_count": row[5],
            "manufacturer": row[6],
            "core_clock_speed": row[7],
            "video_memory": row[8],
            "memory_type": row[9],
            "height": row[10],
            "length": row[11],
            "width": row[12],
            "hdmi": row[13],
            "display_port": row[14],
        },
        "hdd": {
            "id": row[15],
            "hddcount": row[16],
            "capacity": row[17],
            "interface": row[18],
            "cache": row[19],
            "rpm": row[20],
        },
        "ram": {
            "id": row[21],
            "ramcount": row[22],
            "memory_type": row[23],
            "memory_speed": row[24],
            "memory_channels": row[25],
            "pin_configuration": row[26],
        },
        "mobo": {
            "id": row[27],
            "socket_type": row[28],
            "max_memory": row[29],
            "max_memory_per_slot": row[30],
            "pcie_slots": row[31],
            "memory_slots": row[32],
        },
        "cpu": {
            "id": row[33],
            "processor": row[34],
            "cores": row[35],
            "threads": row[36],
            "speed": row[37],
            "socket_type": row[38],
        },
        "psu": {
            "id": row[39],
            "wattage": row[40],
            "atx_connector": row[41],
            "atx_12v_connector": row[42],
            "graphics_connector": row[43],
            "molex_connector": row[44],
            "sata_connector": row[45],
            "floppy_connector": row[46]
        }
    }
    return build

@router.get("/api/builds", response_model=Build)
def gpu_list(query=Depends(BuildsQueries)):
    rows = query.get_all_builds()
    return {
        "builds": [row_to_build(row) for row in rows],
    }

# Example of how to get the current user for an endpoint
@router.get("/api/builds/mine", response_model=Build)
def gpu_list(query=Depends(BuildsQueries), current_user: User = Depends(get_current_active_user)):
    rows = query.get_user_builds(current_user)
    return {
        "gpus": [row_to_build(row) for row in rows],
    }

@router.post(
    "/api/build/create",
    response_model = OutBuild,
    responses = {
        200: {"model": OutBuild},
    },
)
def create_build(
    build: InsertBuild,
    query = Depends(BuildsQueries),
):

    row = query.create_build(build.Name, build.moboid, build.cpuid, build.psuid)
    print("row:", row)
    return row_to_create_build(row)
