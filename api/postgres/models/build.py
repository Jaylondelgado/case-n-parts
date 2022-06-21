from re import S
from .ratings import RatingOut
from pydantic import BaseModel
from .parts import BuildCpu, BuildHdd, BuildMobo, BuildPsu, BuildRam, Cpu, CpuOut, Gpu, GpuOut, GpuOutDetail, Hdd, HddOut, HddOutDetail, Mobo, MoboOut, Psu, PsuOut, Ram, RamOut, BuildGpu, RamOutDetail

class BuildOut(BaseModel):
    id: int
    userid: int
    username: str
    Name: str
    Private: bool
    color: str
    size: str
    picture: str
    gpu: GpuOutDetail
    hdd: HddOutDetail
    ram: RamOutDetail
    mobo: MoboOut
    cpu: CpuOut
    psu: PsuOut
    likes: int

class Build(BaseModel):
    builds: list[BuildOut]





class InsertBuild(BaseModel):
    Name: str
    moboid: int
    cpuid: int
    psuid: int
    gpuid: int
    cardcount: int
    hddid: int
    hddcount: int
    ramid: int
    ramcount: int
    color: int
    size: int
    picture: int

class InBuild(BaseModel):
    Name: str
    moboid: int
    cpuid: int
    psuid: int
    Private: bool
    gpuid: int
    cardcount: int
    hddid: int
    hddcount: int
    ramid: int
    ramcount: int
    color: int
    size: int
    picture: int

class OutBuild(BaseModel):
    id: int
    Name: str
    moboid: int
    cpuid: int
    psuid: int
    Private: bool
    userid: int



class BuildOutList(BaseModel):
    id: int
    userid: int
    username: str
    Name: str
    color: str
    size: str
    picture: str
    gpu: BuildGpu
    hdd: BuildHdd
    ram: BuildRam
    mobo: BuildMobo
    cpu: BuildCpu
    psu: BuildPsu
    likes: int


class BuildA(BaseModel):
    builds: list[BuildOutList]

class BuildDeleteOpertion(BaseModel):
    result: bool