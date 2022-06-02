
ALTER TABLE IF EXISTS public.build
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.case
(
    Id SERIAL NOT NULL PRIMARY KEY,
    BuildId INT NOT NULL REFERENCES build,
    Color INT NOT NULL REFERENCES color,
    Size INT NOT NULL REFERENCES size,

    UNIQUE(BuildId)
);

ALTER TABLE IF EXISTS public.case
    OWNER to "great-value";