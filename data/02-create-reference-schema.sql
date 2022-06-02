CREATE TABLE IF NOT EXISTS public.mobos
(
    id SERIAL NOT NULL PRIMARY KEY,
    socket_type CHARACTER VARYING(5) NOT NULL,
    max_memory CHARACTER VARYING(10) NOT NULL,
    max_memory_per_slot CHARACTER VARYING(10) NOT NULL,
    pcie_slots INT NOT NULL,
    memory_slots INT NOT NULL
);

ALTER TABLE IF EXISTS public.mobos
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.case
(
    id SERIAL NOT NULL PRIMARY KEY,
    color INT NOT NULL REFERENCES color (id),
    size INT NOT NULL REFERENCES size (id)
);

ALTER TABLE IF EXISTS public.case
    OWNER to "great-value";
