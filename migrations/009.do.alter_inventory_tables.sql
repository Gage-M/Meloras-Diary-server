ALTER TABLE IF EXISTS item_inventory 
ADD COLUMN item_quantity INTEGER CHECK ( item_quantity >= 0 ) DEFAULT 1 NOT NULL; 


ALTER TABLE IF EXISTS weapon_inventory 
ADD COLUMN weapon_quantity INTEGER CHECK ( weapon_quantity > 0 ) DEFAULT 1 NOT NULL;