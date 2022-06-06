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
            "chipset": row[7],
            "core_clock_speed": row[8],
            "video_memory": row[9],
            "memory_type": row[10],
            "height": row[11],
            "length": row[12],
            "width": row[13],
            "hdmi": row[14],
            "display_port": row[15],
        },
        "hdd": {
            "id": row[16],
            "hddcount": row[17],
            "brand": row[18],
            "capacity": row[19],
            "interface": row[20],
            "cache": row[21],
            "rpm": row[22],
        },
        "ram": {
            "id": row[23],
            "ramcount": row[24],
            "brand": row[25],
            "memory_type": row[26],
            "memory_speed": row[27],
            "memory_channels": row[28],
            "pin_configuration": row[29],
        },
        "mobo": {
            "id": row[30],
            "brand": row[31],
            "socket_type": row[32],
            "max_memory": row[33],
            "max_memory_per_slot": row[34],
            "pcie_slots": row[35],
            "memory_slots": row[36],
        },
        "cpu": {
            "id": row[37],
            "processor": row[38],
            "cores": row[39],
            "threads": row[40],
            "speed": row[41],
            "socket_type": row[42],
        },
        "psu": {
            "id": row[43],
            "brand": row[44],
            "wattage": row[45],
            "atx_connector": row[46],
            "atx_12v_connector": row[47],
            "graphics_connector": row[48],
            "molex_connector": row[49],
            "sata_connector": row[50],
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

    row = query.create_build(build.Name, build.moboid, build.cpuid, build.psuid, build.gpuid, build.cardcount, build.hddid, build.hddcount, build.ramid, build.ramcount, build.color, build.size)
    return row_to_create_build(row)

