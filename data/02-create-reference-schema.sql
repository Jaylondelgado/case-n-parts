CREATE TABLE IF NOT EXISTS public.mobos
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Socket_type CHARACTER VARYING(5) NOT NULL,
    Max_memory CHARACTER VARYING(10) NOT NULL,
    Max_memory_per_slot CHARACTER VARYING(10) NOT NULL,
    Mcie_slots INT NOT NULL,
    Memory_slots INT NOT NULL
);

ALTER TABLE IF EXISTS public.mobos
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.case
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Color INT NOT NULL REFERENCES Color (id),
    Size INT NOT NULL REFERENCES Size (id)
);

ALTER TABLE IF EXISTS public.case
    OWNER to "great-value";
