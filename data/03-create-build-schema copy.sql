CREATE TABLE IF NOT EXISTS public.build
(
    id SERIAL NOT NULL PRIMARY KEY,
    "name" CHARACTER VARYING(200) NOT NULL,
    "Case" INTEGER REFERENCES "case",
    MoboId INTEGER REFERENCES mobos,
    CpuId INTEGER REFERENCES cpu,
    PsuId INTEGER REFERENCES psu ,
    "private" BOOLEAN NOT NULL DEFAULT false,

    UNIQUE(CpuId, PsuId, MoboId)
);

ALTER TABLE IF EXISTS public.build
    OWNER to "great-value";