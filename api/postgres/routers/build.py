from ctypes import Union
from turtle import title
from urllib import response
from ..models.build import Build, BuildOut, InsertBuild, OutBuild
from fastapi import APIRouter, Response, status, Depends
from ..db import BuildsQueries, DuplicateTitle
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
            "manufacturer": row[5],
            "chipset": row[6],
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
            "brand": row[16],
            "capacity": row[17],
            "interface": row[18],
            "cache": row[19],
            "rpm": row[20],
        },
        "ram": {
            "id": row[21],
            "brand": row[22],
            "memory_type": row[23],
            "memory_speed": row[24],
            "memory_channels": row[25],
            "pin_configuration": row[26],
        },
        "mobo": {
            "id": row[27],
            "brand": row[28],
            "socket_type": row[29],
            "max_memory": row[30],
            "max_memory_per_slot": row[31],
            "pcie_slots": row[32],
            "memory_slots": row[33],
        },
        "cpu": {
            "id": row[34],
            "processor": row[35],
            "cores": row[36],
            "threads": row[37],
            "speed": row[38],
            "socket_type": row[39],
        },
        "psu": {
            "id": row[40],
            "brand": row[41],
            "wattage": row[42],
            "atx_connector": row[43],
            "atx_12v_connector": row[44],
            "graphics_connector": row[45],
            "molex_connector": row[46],
            "sata_connector": row[47],
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

@router.get(
    "/api/build/{build_id}",
    response_model=BuildOut,
)
def get_build(build_id: int, query=Depends(BuildsQueries)):
    row = query.get_build(build_id)
    return row_to_build(row)

    
# @router.put(
#     "/api/build/create/{build_id}",
#     response_model=OutBuild,
#     responses={
#         200: {"model": OutBuild},
#         404: {"model": ErrorMessage},
#         409: {"model": ErrorMessage},


@router.put(
    "/api/builds{build_id}",
    response_model = OutBuild,
    responses = {
        200: {"model": OutBuild},
        404: {"model": ErrorMessage},
        409: {"model": ErrorMessage},
    },
)
def update_build(
    build_id: int,
    build: InsertBuild,
    response: Response,
    query=Depends(BuildsQueries),
):
    try:
        row = query.update_build(build_id,build.Name, build.moboid, build.cpuid, build.psuid, build.gpuid, build.hddid, build.ramid, build.color, build.size)
        if row is None:
            response.status_code = status.HTTP_404_NOT_FOUND
            return {"message": "Build not found"}
        return row_to_build(row)
    except DuplicateTitle:
        response.status_code = status.HTTP_409_CONFLICT
        return {"message": f"Duplicate build name: {build.Name}"}

    # query=Depends(BuildsQueries),
    # row = query.update_build(build_id,build.Name, build.moboid, build.cpuid, build.psuid, build.gpuid, build.hddid, build.ramid, build.color, build.size)
    # return row_to_create_build(row)
