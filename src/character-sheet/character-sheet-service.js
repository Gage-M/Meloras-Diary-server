/**deep breaths...you can do this**/

/*                                                        Table "public.character_sheet"
                Column                 |  Type   | Collation | Nullable |             Default              | Storage  | Stats target | Description
---------------------------------------+---------+-----------+----------+----------------------------------+----------+--------------+-------------
 id                                    | integer |           | not null | generated by default as identity | plain    |              |
 character_id                          | integer |           | not null |                                  | plain    |              |
 experience_points                     | integer |           | not null |                                  | plain    |              |
 proficiency                           | integer |           | not null |                                  | plain    |              |
 strength                              | integer |           | not null | 10                               | plain    |              |
 strength_saving_throws_proficiency    | boolean |           | not null | false                            | plain    |              |
 dexterity                             | integer |           | not null | 10                               | plain    |              |
 dexterity_saving_throws_proficiency   | boolean |           | not null | false                            | plain    |              |
 constitution                          | integer |           | not null | 10                               | plain    |              |
 constitution_saving_throws_proficiency| boolean |           | not null | false                            | plain    |              |
 intelligence                          | integer |           | not null | 10                               | plain    |              |
 intelligence_saving_throws_proficiency| boolean |           | not null | false                            | plain    |              |
 wisdom                                | integer |           | not null | 10                               | plain    |              |
 wisdom_saving_throws_proficiency      | boolean |           | not null | false                            | plain    |              |
 charisma                              | integer |           | not null | 10                               | plain    |              |
 charisma_saving_throws_proficiency    | boolean |           | not null | false                            | plain    |              |
 acrobatics_proficiency                | boolean |           | not null | false                            | plain    |              |
 animal_handling_proficiency           | boolean |           | not null | false                            | plain    |              |
 arcana_proficiency                    | boolean |           | not null | false                            | plain    |              |
 athletics_proficiency                 | boolean |           | not null | false                            | plain    |              |
 deception_proficiency                 | boolean |           | not null | false                            | plain    |              |
 history_proficiency                   | boolean |           | not null | false                            | plain    |              |
 insight_proficiency                   | boolean |           | not null | false                            | plain    |              |
 intimidation_proficiency              | boolean |           | not null | false                            | plain    |              |
 investigation_proficiency             | boolean |           | not null | false                            | plain    |              |
 medicine_proficiency                  | boolean |           | not null | false                            | plain    |              |
 nature_proficiency                    | boolean |           | not null | false                            | plain    |              |
 perception_proficiency                | boolean |           | not null | false                            | plain    |              |
 performance_proficiency               | boolean |           | not null | false                            | plain    |              |
 persuasion_proficiency                | boolean |           | not null | false                            | plain    |              |
 religion_proficiency                  | boolean |           | not null | false                            | plain    |              |
 sleight_of_hand_proficiency           | boolean |           | not null | false                            | plain    |              |
 stealth_proficiency                   | boolean |           | not null | false                            | plain    |              |
 survival_proficiency                  | boolean |           | not null | false                            | plain    |              |
 other_proficiencies_and_languages     | text    |           |          |                                  | extended |              |
 armor_class                           | integer |           | not null |                                  | plain    |              |
 speed                                 | integer |           | not null |                                  | plain    |              |
 max_hit_points                        | integer |           | not null |                                  | plain    |              |
 temporary_hit_points                  | integer |           | not null | 0                                | plain    |              |
 current_hit_points                    | integer |           | not null |                                  | plain    |              |
 hit_dice                              | text    |           | not null |                                  | extended |              |
 death_saves_successe                  | integer |           | not null | 0                                | plain    |              |
 death_saves_failures                  | integer |           | not null | 0                                | plain    |              |
 attack_and_spellcasting_info          | text    |           | not null |                                  | extended |              |
 copper_prices                         | integer |           | not null | 0                                | plain    |              |
 silver_prices                         | integer |           | not null | 0                                | plain    |              |
 electrum_prices                       | integer |           | not null | 0                                | plain    |              |
 gold_prices                           | integer |           | not null | 0                                | plain    |              |
 platinum_prices                       | integer |           | not null | 0                                | plain    |              |

 this might need to be update.... 
*/

const CharacterSheetService = {
    getCharSheetById(db,id){
        .from('character_sheet AS cs')
        .select(
            
        )
    }

};

module.exports = CharacterSheetService;