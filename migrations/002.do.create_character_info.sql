CREATE TYPE alignment_choice AS ENUM (
    'Lawful-Good',
    'Neutral-Good',
    'Chaotic-Good',
    'Lawful-Neutral',
    'Neutral',
    'Chaotic-Neutral',
    'Lawful-Evil',
    'Neutral-Evil',
    'Chaotic-Evil'
);

CREATE TYPE gender_choice AS ENUM (
    'Male',
    'Female',
    'Other'
);

CREATE TABLE IF NOT EXISTS character_info (
id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
player_id INTEGER 
    REFERENCES diary_users(id) ON DELETE CASCADE NOT NULL,
date_created TIMESTAMPTZ DEFAULT now() NOT NULL,
character_name TEXT NOT NULL, 
race  TEXT NOT NULL, /* ENUM for update*/
background TEXT NOT NULL,
alignment alignment_choice NOT NULL DEFAULT 'Neutral',
gender gender_choice NOT NULL DEFAULT 'Female',
personality_traits TEXT NOT NULL,
ideals TEXT NOT NULL,
fears TEXT NOT NULL,
notes TEXT NOT NULL
);