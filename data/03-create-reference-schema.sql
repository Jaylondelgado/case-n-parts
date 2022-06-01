CREATE TABLE IF NOT EXISTS public.motherboard
(
    sku SERIAL NOT NULL PRIMARY KEY,
    socket_type CHARACTER VARYING(5) NOT NULL,
    max_memory CHARACTER VARYING(10) NOT NULL REFERENCES,
    max_memory_per_slot CHARACTER VARYING(10) NOT NULL,
    pci_slots INT NOT NULL REFERENCES,
    memory_slots INT NOT NULL REFERENCES,
);

ALTER TABLE IF EXISTS public.motherboard
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.case
(
    id SERIAL NOT NULL PRIMARY KEY,
    color INT NOT NULL REFERENCES color (id),
    size INT NOT NULL REFERENCES size (id)
);

ALTER TABLE IF EXISTS public.case
    OWNER to "great-value";