ALTER TABLE character_sheet 
ALTER COLUMN attack_and_spellcasting_info TEXT NULL,
ADD COLUMN acrobatics_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN animal_handling_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN arcana_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN athletics_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN deception_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN history_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN insight_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN intimidation_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN investigation_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN medicine_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN nature_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN perception_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN performance_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN persuasion_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN religon_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN sleight_of_hand_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN stealth_expertise BOOLEAN DEFAULT false NOT NULL,
ADD COLUMN survival_expertise BOOLEAN DEFAULT false NOT NULL;

CREATE TYPE skill_types AS ENUM (
    'STR',
    'DEX',
    'CON',
    'INT',
    'WIS',
    'CHA'
)

ALTER TABLE weapon_details
ALTER COLUMN attack_bonus skill_types DEFAULT 'STR' NOT NULL ; 
