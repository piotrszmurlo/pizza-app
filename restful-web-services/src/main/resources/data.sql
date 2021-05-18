insert into product(id,name,price)
values(10001, 'margharita', 10);

insert into product(id,name,price)
values(10002, 'pepperoni', 10);

insert into product(id,name,price)
values(10003, 'capriciosa', 10);

insert into product(id,name,price)
values(10004, 'hawaii', 13);

insert into product(id,name,price)
values(10005, 'greek', 13);

insert into product(id,name,price)
values(10006, 'camberetti', 13);

insert into product(id,name,price)
values(10007, 'prosciutto', 15);

insert into product(id,name,price)
values(10008, 'diavola', 15);

insert into product(id,name,price)
values(10009, 'frutti di mare', 15);

insert into product(id,name,price)
values(10010, 'quattro formaggi', 15);

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10002, 'pepe','$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e', 'Piotr', 'Zagorski', '123123123', 'Grodno', 'Bialostocka', '12');
insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10003, 'admin','$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e', 'Piotr', 'Zagorski', '123123123', 'Grodno', 'Bialostocka', '12');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10003, 'logotyp','$2a$10$No1YXn7x.0pd6TM8iGfHGeIyv0G3EI88sRKrmHe/eZERKwr3iVthm', 'Ziotr', 'Pagorski', '123123123', 'Warszawa', 'ZWM', '7');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10004, 'matikurcze','$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e', 'Mateusz', 'Roszkowski', '420420420', 'Bialystok', 'Papowska', '12');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10005, 'Byczeq','$2a$10$8EemVCVboNRtkZWUwWuWHu1JiTt4y87jKF66LUmH.HLHZwVkX2RUe', 'Maciej', 'Swiech', '59595959591', 'Lublin', 'Spocona', '4');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10006, 'Majoness','$2a$10$unBSwmTj0yzMMjS4Sx5cIOlcgFhrgDlp3EeXGq9IM.j4nGxm9/y/C', 'Janusz', 'Kuc', '123321321', 'Kielce', 'Widelcowa', '9');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10007, 'admin','$2a$10$9VlGdjwSMuEzwrgooSy/i.lKMG3MlKOFavUmYf/PffIvWDT/dP.2S', 'admin', 'admin', 'admin', 'Warszawa', 'Zwiazku Walki Mlodych', '5');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10008, 'Spaslak333','$2a$10$0NVs/zo5fdOVgzXHf62raOy/nD/tg0Zh1.R7x1hjcETLFt52RqcoC', 'Grzegorz', 'Czarnopys', '428824515', 'Bialystok', 'Stoklosow', '1');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10009, 'Wysoooki','$2a$10$Uyx3zQfPG0Q0/osJnY.qnu1ADQk9N7ph.narS2ufOSUE4qnZ5c/sm', 'Piotr', 'Wyszynski', '929292928', 'Wroclaw', 'Wyspiarska', '93');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(100010, 'Hazardzista23','$2a$10$0NVs/zo5fdOVgzXHf62raOy/nD/tg0Zh1.R7x1hjcETLFt52RqcoC', 'Piotr', 'Wasiluk', '123451234', 'Warszawa', 'Curie', '19');




insert into products_order(order_id, is_completed, order_date, user_id)
values(1010,false,'12-12-12', '10002');
--
insert into sold_product(id,name,price,username,quantity, order_id)
values(10001, 'margharita', 10,'pepe', 4, 1010);
----
--insert into basket_product(id,name,price,username,quantity)
--values(10002, 'pepperoni', 10,'in28minutes', 4);
--
--insert into basket_product(id,name,price,username,quantity)
--values(10003, 'prosciutto', 10,'in28minutes', 4);
--
--insert into jwt_user_details(id, username, password, name, surname, number,city, street, street_number)
--values(10001, 'matikurcze','$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e', 'Mati', 'Roszko', '123123123', 'Grodno', 'Bialostocka', '11');
--
