from re import S
from pydantic import BaseModel
from .parts import Cpu, CpuOut, Gpu, GpuOut, Hdd, HddOut, Mobo, MoboOut, Psu, PsuOut, Ram, RamOut

class BuildOut(BaseModel):
    id: int
    name: str
    color: str
    size: str
    gpu: list[Gpu]
    hdd: list[Hdd]
    ram: list[Ram]
    mobo: list[Mobo]
    cpu: list[Cpu]
    psu: list[Psu]

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

class OutBuild(BaseModel):
    id: int
    Name: str
    moboid: int
    cpuid: int
    psuid: int
    Private: bool

