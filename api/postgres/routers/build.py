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
        "userid": row[1],
        "Name": row[2],
        "color": row[3],
        "size": row[4],
        "picture": row[5],
        "gpu": {
            "id": row[6],
            "manufacturer": row[7],
            "chipset": row[8],
        },
        "hdd": {
            "id": row[9],
            "brand": row[10],
            "capacity": row[11],
        },
        "ram": {
            "id": row[12],
            "brand": row[13],
        },
        "mobo": {
            "id": row[14],
            "brand": row[15],
            "socket_type": row[16],
            "max_memory": row[17],
        },
        "cpu": {
            "id": row[18],
            "processor": row[19],
            "cores": row[20],
            "socket_type": row[21],
        },
        "psu": {
            "id": row[22],
            "brand": row[23],
        },
    }
    return build

def row_to_build(row):
    build = {
        "id": row[0],
        "userid": row[1],
        "name": row[2],
        "Private": row[3],
        "color": row[4],
        "size": row[5],
        "picture": row[6],
        "gpu": {
            "id": row[7],
            "card_count": row[8],
            "manufacturer": row[9],
            "chipset": row[10],
            "core_clock_speed": row[11],
            "video_memory": row[12],
            "memory_type": row[13],
            "height": row[14],
            "length": row[15],
            "width": row[16],
            "hdmi": row[17],
            "display_port": row[18],
        },
        "hdd": {
            "id": row[19],
            "hddcount": row[20],
            "brand": row[21],
            "capacity": row[22],
            "interface": row[23],
            "cache": row[24],
            "rpm": row[25],
        },
        "ram": {
            "id": row[26],
            "ramcount": row[27],
            "brand": row[28],
            "memory_type": row[29],
            "memory_speed": row[30],
            "memory_channels": row[31],
            "pin_configuration": row[32],
        },
        "mobo": {
            "id": row[33],
            "brand": row[34],
            "socket_type": row[35],
            "max_memory": row[36],
            "max_memory_per_slot": row[37],
            "pcie_slots": row[38],
            "memory_slots": row[39],
        },
        "cpu": {
            "id": row[40],
            "processor": row[41],
            "cores": row[42],
            "threads": row[43],
            "speed": row[44],
            "socket_type": row[45],
        },
        "psu": {
            "id": row[46],
            "brand": row[47],
            "wattage": row[48],
            "atx_connector": row[49],
            "atx_12v_connector": row[50],
            "graphics_connector": row[51],
            "molex_connector": row[52],
            "sata_connector": row[53]
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
def my_build_list(query=Depends(BuildsQueries), current_user: User = Depends(get_current_active_user)):
    rows = query.get_build_by_user(current_user["id"])
    return {
        "builds": [row_to_build(row) for row in rows],
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
