ALTER TABLE character_sheet
DROP COLUMN acrobatics_expertise,
DROP COLUMN animal_handling_expertise,
DROP COLUMN arcana_expertise,
DROP COLUMN athletics_expertise,
DROP COLUMN deception_expertise,
DROP COLUMN history_expertise,
DROP COLUMN insight_expertise,
DROP COLUMN intimidation_expertise,
DROP COLUMN investigation_expertise,
DROP COLUMN medicine_expertise,
DROP COLUMN nature_expertise,
DROP COLUMN perception_expertise,
DROP COLUMN performance_expertise,
DROP COLUMN persuasion_expertise,
DROP COLUMN religion_expertise,
DROP COLUMN sleight_of_hand_expertise,
DROP COLUMN stealth_expertise,
DROP COLUMN survival_expertise;


ALTER TABLE weapon_details
DROP COLUMN attack_bonus,
ADD COLUMN attack_bonus INTEGER CHECK (attack_bonus > 0 ) NOT NULL; 

DROP TYPE skill_types;