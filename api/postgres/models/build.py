from re import S
from .review import RatingOut
from pydantic import BaseModel
from .parts import BuildCpu, BuildHdd, BuildMobo, BuildPsu, BuildRam, Cpu, CpuOut, Gpu, GpuOut, Hdd, HddOut, Mobo, MoboOut, Psu, PsuOut, Ram, RamOut, BuildGpu

class BuildOut(BaseModel):
    id: int
    userid: int
    name: str
    Private: bool
    color: str
    size: str
    picture: str
    gpu: GpuOut
    hdd: HddOut
    ram: RamOut
    mobo: MoboOut
    cpu: CpuOut
    psu: PsuOut

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

class BuildA(BaseModel):
    builds: list[BuildOutList]
