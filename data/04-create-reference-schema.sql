CREATE TABLE IF NOT EXISTS public.gpu_slots
(
    id SERIAL NOT NULL PRIMARY KEY,
    motherboard INT NOT NULL REFERENCES motherboard (sku),
    gpu INT NOT NULL REFERENCES gpu (id)
);

ALTER TABLE IF EXISTS public.build
    OWNER to "great-value";
