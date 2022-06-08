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
        "color": row[2],
        "size": row[3],
        "picture": row[4],
        "gpu": {
            "id": row[5],
            "card_count": row[6],
            "manufacturer": row[7],
            "chipset": row[8],
            "core_clock_speed": row[9],
            "video_memory": row[10],
            "memory_type": row[11],
            "height": row[12],
            "length": row[13],
            "width": row[14],
            "hdmi": row[15],
            "display_port": row[16],
        },
        "hdd": {
            "id": row[17],
            "hddcount": row[18],
            "brand": row[19],
            "capacity": row[20],
            "interface": row[21],
            "cache": row[22],
            "rpm": row[23],
        },
        "ram": {
            "id": row[24],
            "ramcount": row[25],
            "brand": row[26],
            "memory_type": row[27],
            "memory_speed": row[26],
            "memory_channels": row[29],
            "pin_configuration": row[30],
        },
        "mobo": {
            "id": row[31],
            "brand": row[32],
            "socket_type": row[33],
            "max_memory": row[34],
            "max_memory_per_slot": row[35],
            "pcie_slots": row[36],
            "memory_slots": row[37],
        },
        "cpu": {
            "id": row[38],
            "processor": row[39],
            "cores": row[40],
            "threads": row[41],
            "speed": row[42],
            "socket_type": row[43],
        },
        "psu": {
            "id": row[44],
            "brand": row[45],
            "wattage": row[46],
            "atx_connector": row[47],
            "atx_12v_connector": row[48],
            "graphics_connector": row[49],
            "molex_connector": row[50],
            "sata_connector": row[51]
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
):

    row = query.create_build(build.Name, build.moboid, build.cpuid, build.psuid, build.gpuid, build.cardcount, build.hddid, build.hddcount, build.ramid, build.ramcount, build.color, build.size, build.picture)
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
