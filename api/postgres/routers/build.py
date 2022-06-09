from ctypes import Union
from turtle import title
from urllib import response
from ..models.build import Build, BuildA, BuildOut, InBuild, InsertBuild, OutBuild
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
        "userid": row[6],
    }
    return build

def row_to_list_build(row):
    build ={
        "id": row[0],
        "Name": row[1],
        "color": row[2],
        "size": row[3],
        "picture": row[4],
        "gpu": {
            "id": row[5],
            "manufacturer": row[6],
            "chipset": row[7],
        },
        "hdd": {
            "id": row[8],
            "brand": row[9],
            "capacity": row[10],
        },
        "ram": {
            "id": row[11],
            "brand": row[12],
        },
        "mobo": {
            "id": row[13],
            "brand": row[14],
            "socket_type": row[15],
            "max_memory": row[16],
        },
        "cpu": {
            "id": row[17],
            "processor": row[18],
            "cores": row[19],
            "socket_type": row[20],
        },
        "psu": {
            "id": row[21],
            "brand": row[22],
        },
    }
    return build

def row_to_build(row):
    build = {
        "id": row[0],
        "name": row[1],
        "Private": row[2],
        "color": row[3],
        "size": row[4],
        "picture": row[5],
        "gpu": {
            "id": row[6],
            "card_count": row[7],
            "manufacturer": row[8],
            "chipset": row[9],
            "core_clock_speed": row[10],
            "video_memory": row[11],
            "memory_type": row[12],
            "height": row[13],
            "length": row[14],
            "width": row[15],
            "hdmi": row[16],
            "display_port": row[17],
        },
        "hdd": {
            "id": row[18],
            "hddcount": row[19],
            "brand": row[20],
            "capacity": row[21],
            "interface": row[22],
            "cache": row[23],
            "rpm": row[24],
        },
        "ram": {
            "id": row[25],
            "ramcount": row[26],
            "brand": row[27],
            "memory_type": row[28],
            "memory_speed": row[29],
            "memory_channels": row[30],
            "pin_configuration": row[31],
        },
        "mobo": {
            "id": row[32],
            "brand": row[33],
            "socket_type": row[34],
            "max_memory": row[35],
            "max_memory_per_slot": row[36],
            "pcie_slots": row[37],
            "memory_slots": row[38],
        },
        "cpu": {
            "id": row[39],
            "processor": row[40],
            "cores": row[41],
            "threads": row[42],
            "speed": row[43],
            "socket_type": row[44],
        },
        "psu": {
            "id": row[45],
            "brand": row[46],
            "wattage": row[47],
            "atx_connector": row[48],
            "atx_12v_connector": row[49],
            "graphics_connector": row[50],
            "molex_connector": row[51],
            "sata_connector": row[52]
        }
    }
    return build

@router.get("/api/builds", response_model=BuildA)
def build_list(query=Depends(BuildsQueries)):
    rows = query.get_all_builds()
    return {
        "builds": [row_to_list_build(row) for row in rows],
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
    current_user: User = Depends(get_current_active_user)
):

    row = query.create_build(build.Name, build.moboid, build.cpuid, build.psuid, current_user["id"], build.gpuid, build.cardcount, build.hddid, build.hddcount, build.ramid, build.ramcount, build.color, build.size, build.picture)
    return row_to_create_build(row)

@router.get(
    "/api/build/{build_id}",
    response_model=BuildOut,
)
def get_build(build_id: int, query=Depends(BuildsQueries)):
    row = query.get_build(build_id)
    return row_to_build(row)

@router.put(
    "/api/build/{build_id}",
    response_model = OutBuild,
    responses = {
        200: {"model": OutBuild}
    },
)
def update_build(
    build_id: int,
    build: InBuild,
    query=Depends(BuildsQueries),
):
    row = query.update_build(build_id,build.Name, build.moboid, build.cpuid, build.psuid,build.Private, build.gpuid, build.cardcount, build.hddid, build.hddcount, build.ramid, build.ramcount, build.color, build.size, build.picture)
    return row_to_create_build(row)
