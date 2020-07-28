CREATE TABLE IF NOT EXISTS character_sheet (
id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
character_id INTEGER 
    REFERENCES character_info(id) ON DELETE CASCADE NOT NULL,
experience_points INTEGER CHECK (experience_points > 0 ) NOT NULL,
proficency INTEGER CHECK (proficency > 0 ) NOT NULL,
strength INTEGER CHECK (strength > 0 AND strength <= 30) DEFAULT 10 NOT NULL,
strength_saving_throws_proficency BOOLEAN DEFAULT false NOT NULL, 
dexterity INTEGER CHECK (dexterity > 0 AND dexterity <= 30) DEFAULT 10 NOT NULL,
decterity_saving_throws_proficency BOOLEAN DEFAULT false NOT NULL, 
constitution INTEGER CHECK (constitution > 0 AND constitution <= 30) DEFAULT 10 NOT NULL,
constitution_saving_throws_proficency BOOLEAN DEFAULT false NOT NULL, 
intelligence INTEGER CHECK (intelligence > 0 AND intelligence <= 30) DEFAULT 10 NOT NULL,
intelligence_saving_throws_proficency BOOLEAN DEFAULT false NOT NULL, 
wisdom INTEGER CHECK (wisdom > 0 AND wisdom <= 30) DEFAULT 10 NOT NULL,
wisdom_saving_throws_proficency BOOLEAN DEFAULT false NOT NULL, 
charisma INTEGER CHECK (charisma > 0 AND charisma <= 30) DEFAULT 10 NOT NULL,
charisma_saving_throws_proficency BOOLEAN DEFAULT false NOT NULL, 
acrobatics_proficency BOOLEAN DEFAULT false NOT NULL,
animal_handling_proficency BOOLEAN DEFAULT false NOT NULL,
arcana_proficency BOOLEAN DEFAULT false NOT NULL,
athletics_proficency BOOLEAN DEFAULT false NOT NULL,
deception_proficency BOOLEAN DEFAULT false NOT NULL,
history_proficency BOOLEAN DEFAULT false NOT NULL,
insight_proficency BOOLEAN DEFAULT false NOT NULL,
intimidation_proficency BOOLEAN DEFAULT false NOT NULL,
investigation_proficency BOOLEAN DEFAULT false NOT NULL,
medicine_proficency BOOLEAN DEFAULT false NOT NULL,
nature_proficency BOOLEAN DEFAULT false NOT NULL,
perception_proficency BOOLEAN DEFAULT false NOT NULL,
performance_proficency BOOLEAN DEFAULT false NOT NULL,
persuasion_proficency BOOLEAN DEFAULT false NOT NULL,
religon_proficency BOOLEAN DEFAULT false NOT NULL,
sleight_of_hand_proficency BOOLEAN DEFAULT false NOT NULL,
stealth_proficency BOOLEAN DEFAULT false NOT NULL,
survival_proficency BOOLEAN DEFAULT false NOT NULL,
other_proficiencies_and_languages TEXT ,
armor_class INTEGER CHECK (armor_class > 0) NOT NULL,
speed INTEGER CHECK (speed > 0) NOT NULL,
max_hit_points INTEGER CHECK ( max_hit_points > 0) NOT NULL,
temporary_hit_points INTEGER CHECK (temporary_hit_points >= 0 ) DEFAULT 0 NOT NULL, 
current_hit_points INTEGER CHECK (current_hit_points >= 0 ) NOT NULL,
hit_dice TEXT NOT NULL,
death_saves_successe INTEGER CHECK (death_saves_successe >= 0 AND death_saves_successe <= 3) DEFAULT 0 NOT NULL,
death_saves_failures INTEGER CHECK (death_saves_failures >= 0 AND death_saves_failures <= 3) DEFAULT 0 NOT NULL,
attack_and_spellcasting_info TEXT NOT NULL,
copper_prices INTEGER CHECK (copper_prices > 0) DEFAULT 0 NOT NULL,  
silver_prices INTEGER CHECK (silver_prices > 0) DEFAULT 0 NOT NULL, 
electrum_prices INTEGER CHECK (electrum_prices > 0) DEFAULT 0 NOT NULL, 
gold_prices INTEGER CHECK (gold_prices > 0) DEFAULT 0 NOT NULL, 
platinum_prices INTEGER CHECK (platinum_prices > 0) DEFAULT 0 NOT NULL
);