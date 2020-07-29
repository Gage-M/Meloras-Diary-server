/**deep breaths...you can do this**/

/*                                                           Table "public.character_sheet"
                 Column                 |  Type   | Collation | Nullable |             Default              | Storage  | Stats target | Description
----------------------------------------+---------+-----------+----------+----------------------------------+----------+--------------+-------------
 id                                     | integer |           | not null | generated by default as identity | plain    |              |
 character_id                           | integer |           | not null |                                  | plain    |              |
 experience_points                      | integer |           | not null |                                  | plain    |              |
 proficiency                            | integer |           | not null |                                  | plain    |              |
 strength                               | integer |           | not null | 10                               | plain    |              |
 strength_saving_throws_proficiency     | boolean |           | not null | false                            | plain    |              |
 dexterity                              | integer |           | not null | 10                               | plain    |              |
 dexterity_saving_throws_proficiency    | boolean |           | not null | false                            | plain    |              |
 constitution                           | integer |           | not null | 10                               | plain    |              |
 constitution_saving_throws_proficiency | boolean |           | not null | false                            | plain    |              |
 intelligence                           | integer |           | not null | 10                               | plain    |              |
 intelligence_saving_throws_proficiency | boolean |           | not null | false                            | plain    |              |
 wisdom                                 | integer |           | not null | 10                               | plain    |              |
 wisdom_saving_throws_proficiency       | boolean |           | not null | false                            | plain    |              |
 charisma                               | integer |           | not null | 10                               | plain    |              |
 charisma_saving_throws_proficiency     | boolean |           | not null | false                            | plain    |              |
 acrobatics_proficiency                 | boolean |           | not null | false                            | plain    |              |
 animal_handling_proficiency            | boolean |           | not null | false                            | plain    |              |
 arcana_proficiency                     | boolean |           | not null | false                            | plain    |              |
 athletics_proficiency                  | boolean |           | not null | false                            | plain    |              |
 deception_proficiency                  | boolean |           | not null | false                            | plain    |              |
 history_proficiency                    | boolean |           | not null | false                            | plain    |              |
 insight_proficiency                    | boolean |           | not null | false                            | plain    |              |
 intimidation_proficiency               | boolean |           | not null | false                            | plain    |              |
 investigation_proficiency              | boolean |           | not null | false                            | plain    |              |
 medicine_proficiency                   | boolean |           | not null | false                            | plain    |              |
 nature_proficiency                     | boolean |           | not null | false                            | plain    |              |
 perception_proficiency                 | boolean |           | not null | false                            | plain    |              |
 performance_proficiency                | boolean |           | not null | false                            | plain    |              |
 persuasion_proficiency                 | boolean |           | not null | false                            | plain    |              |
 religion_proficiency                   | boolean |           | not null | false                            | plain    |              |
 sleight_of_hand_proficiency            | boolean |           | not null | false                            | plain    |              |
 stealth_proficiency                    | boolean |           | not null | false                            | plain    |              |
 survival_proficiency                   | boolean |           | not null | false                            | plain    |              |
 other_proficiencies_and_languages      | text    |           |          |                                  | extended |              |
 armor_class                            | integer |           | not null |                                  | plain    |              |
 speed                                  | integer |           | not null |                                  | plain    |              |
 max_hit_points                         | integer |           | not null |                                  | plain    |              |
 temporary_hit_points                   | integer |           | not null | 0                                | plain    |              |
 current_hit_points                     | integer |           | not null |                                  | plain    |              |
 hit_dice                               | text    |           | not null |                                  | extended |              |
 death_saves_successe                   | integer |           | not null | 0                                | plain    |              |
 death_saves_failures                   | integer |           | not null | 0                                | plain    |              |
 attack_and_spellcasting_info           | text    |           |          |                                  | extended |              |
 copper_prices                          | integer |           | not null | 0                                | plain    |              |
 silver_prices                          | integer |           | not null | 0                                | plain    |              |
 electrum_prices                        | integer |           | not null | 0                                | plain    |              |
 gold_prices                            | integer |           | not null | 0                                | plain    |              |
 platinum_prices                        | integer |           | not null | 0                                | plain    |              |
 acrobatics_expertise                   | boolean |           | not null | false                            | plain    |              |
 animal_handling_expertise              | boolean |           | not null | false                            | plain    |              |
 arcana_expertise                       | boolean |           | not null | false                            | plain    |              |
 athletics_expertise                    | boolean |           | not null | false                            | plain    |              |
 deception_expertise                    | boolean |           | not null | false                            | plain    |              |
 history_expertise                      | boolean |           | not null | false                            | plain    |              |
 insight_expertise                      | boolean |           | not null | false                            | plain    |              |
 intimidation_expertise                 | boolean |           | not null | false                            | plain    |              |
 investigation_expertise                | boolean |           | not null | false                            | plain    |              |
 medicine_expertise                     | boolean |           | not null | false                            | plain    |              |
 nature_expertise                       | boolean |           | not null | false                            | plain    |              |
 perception_expertise                   | boolean |           | not null | false                            | plain    |              |
 performance_expertise                  | boolean |           | not null | false                            | plain    |              |
 persuasion_expertise                   | boolean |           | not null | false                            | plain    |              |
 religion_expertise                     | boolean |           | not null | false                            | plain    |              |
 sleight_of_hand_expertise              | boolean |           | not null | false                            | plain    |              |
 stealth_expertise                      | boolean |           | not null | false                            | plain    |              |
 survival_expertise                     | boolean |           | not null | false                            | plain    |              |
*/


/*
SELECT 
diary_users.user_name, 
info.user_name,
 classes_and_levels.*,
 class_details.*,
 character_sheet.*,
 weapon_inventory.*,
 features_and_traits.*,
 feature_trait_details.*,
 weapon_details.*,
 item_details.*,
 item_inventory.*


FROM diary_users AS users,
 character_info AS info,
 classes_and_levels AS levels,
 class_details AS class-d,
 character_sheet AS char-s,
 weapon_inventory AS wep-inv,
 features_and_traits AS fat,
  feature_trait_details AS ftd,
  weapon_details AS wep-d,
  item_details AS item-d,
  item_inventory AS item-inv


WHERE 
	character_info.player_id = diary_users.id
	AND diary_users.id = classes_and_levels.id
	AND diary_users.id = class_details.id
	AND diary_users.id = character_sheet.id <= char-s = ${ id }
	AND diary_users.id = weapon_inventory.id
	AND diary_users.id = features_and_traits.id
	AND diary_users.id = feature_trait_details.id
	AND diary_users.id = weapon_details.id
	AND diary_users.id = item_details.id
	AND diary_users.id = item_inventory.id
*/
const CharacterSheetService = {
  getCharSheetById(db,id){
    return db
      .from(
        'diary_users AS users',
        'character_info AS info',
        'classes_and_levels AS levels',
        'class_details AS class-d',
        'character_sheet AS char-s',
        'weapon_inventory AS wep-inv',
        'features_and_traits AS fat',
        'feature_trait_details AS ftd',
        'weapon_details AS wep-d',
        'item_details AS item-d',
        'item_inventory AS item-inv'
      )
      .select(
        'char_s.experience_points',
        'char_s.proficiency',
        'char_s.strength',
        'char_s.strength_saving_throws_proficiency',
        'char_s.dexterity',
        'char_s.dexterity_saving_throws_proficiency',
        'char_s.constitution',
        'char_s.constitution_saving_throws_proficiency',
        'char_s.intelligence',
        'char_s.intelligence_saving_throws_proficiency',
        'char_s.wisdom',
        'char_s.wisdom_saving_throws_proficiency',
        'char_s.charisma',
        'char_s.charisma_saving_throws_proficiency',
        'char_s.acrobatics_proficiency',
        'char_s.animal_handling_proficiency',
        'char_s.arcana_proficiency',
        'char_s.athletics_proficiency',
        'char_s.deception_proficiency',
        'char_s.history_proficiency',
        'char_s.insight_proficiency',
        'char_s.intimidation_proficiency',
        'char_s.investigation_proficiency',
        'char_s.medicine_proficiency',
        'char_s.nature_proficiency',
        'char_s.perception_proficiency',
        'char_s.performance_proficiency',
        'char_s.persuasion_proficiency',
        'char_s.religion_proficiency',
        'char_s.sleight_of_hand_proficiency',
        'char_s.stealth_proficiency',
        'char_s.survival_proficiency',
        'char_s.other_proficiencies_and_languages',
        'char_s.armor_class',
        'char_s.speed',
        'char_s.max_hit_points',
        'char_s.temporary_hit_points',
        'char_s.current_hit_points',
        'char_s.hit_dice',
        'char_s.death_saves_successe',
        'char_s.death_saves_failures',
        'char_s.attack_and_spellcasting_info',
        'char_s.copper_prices',
        'char_s.silver_prices',
        'char_s.electrum_prices',
        'char_s.gold_prices',
        'char_s.platinum_prices',
        'char_s.acrobatics_expertise',
        'char_s.animal_handling_expertise',
        'char_s.arcana_expertise',
        'char_s.athletics_expertise',
        'char_s.deception_expertise',
        'char_s.history_expertise',
        'char_s.insight_expertise',
        'char_s.intimidation_expertise',
        'char_s.investigation_expertise',
        'char_s.medicine_expertise',
        'char_s.nature_expertise',
        'char_s.perception_expertise',
        'char_s.performance_expertise',
        'char_s.persuasion_expertise',
        'char_s.religion_expertise',
        'char_s.sleight_of_hand_expertise',
        'char_s.stealth_expertise',
        'char_s.survival_expertise',
        db.raw(
          `json_strip_nulls(
                json_build_object(

                )
            )AS weapons_inventory`
        ),
        db.raw(
          `json_strip_nulls(
                json_build_object(

                )
            )AS item_inventory`
        ),
        db.raw(
          `json_strip_nulls(
               json_build_object(

               )
           )AS feats_and_traits` 
        )
       

      )
      .where('char_s.id',id )
      .join(
        /*[join user => char-info]user.id = info.player_id*/'diary_users AS users',
        'user.id',

        /*[ join info <= class ] info.id = levels.character_id*/ 'character_info AS info',


        /*[getting {array} from class-d]  */'classes_and_levels AS levels',


        /* class.id = levels.class_id*/'class_details AS class-d',


        /*[join char-s to char-info] char-s.character_id = info.id  */'character_sheet AS char-s',


        /*[join wep-d {array} to char-s] wep-inv.character_id = char-s.id */'weapon_inventory AS wep-inv',


        /*wep-d.id = wep-inv.weapon_id */'weapon_details AS wep-d',
        
        
        /*[joins ftd {array} to char-s] fat.character_id = char-s.id*/'features_and_traits AS fat',
        
        
        /* ftd.id = fat.feature_trait_id */'feature_trait_details AS ftd',

        
        /*[joining item-d {array} to char-s] item-inv.character_id = char-s.id */'item_inventory AS item-inv',
        
        
        /*item-inv.item_id = item-d.id */'item_details AS item-d'
      )
      .groupBy();
  }

};



module.exports = CharacterSheetService;