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
values(10003, 'logotyp','$2a$10$No1YXn7x.0pd6TM8iGfHGeIyv0G3EI88sRKrmHe/eZERKwr3iVthm', 'Ziotr', 'Pagorski', '123123123', 'Warszawa', 'ZWM', '7');

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
values(10010, 'Hazardzista23','$2a$10$0NVs/zo5fdOVgzXHf62raOy/nD/tg0Zh1.R7x1hjcETLFt52RqcoC', 'Piotr', 'Wasiluk', '123451234', 'Warszawa', 'Curie', '19');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10011, 'guest','$2a$10$ukUVBZd2PT08tGBh8jXIYOrNi3U4ohdzarq/kWtI2FpT4ebmsDgS.', '', '', '', '', '', '');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10012, 'dzikus12PL','$2a$10$No1YXn7x.0pd6TM8iGfHGeIyv0G3EI88sRKrmHe/eZERKwr3iVthm', 'Bartosz', 'Grabowiecki', '513513425', 'Warszawa', 'Lodowa', '13');

insert into jwt_user_details(user_id, username, password, name, surname, number,city, street, street_number)
values(10013, 'dzikus12PL','$2a$10$0NVs/zo5fdOVgzXHf62raOy/nD/tg0Zh1.R7x1hjcETLFt52RqcoC', 'Michal', 'Wysocki', '983745454', 'Warszawa', 'Walki Zwiazku Mlodych', '66');



insert into products_order(order_id, is_completed, order_date, user_id)
values(1010,false,'12-12-12', '10002');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1011,true,'2021-5-18, 22:55:31','10002');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1012,false,'2021-5-19, 20:55:35','10002');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1013,false,'2021-4-13, 20:35:35','10003');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1014,false,'2021-3-23, 22:55:35','10005');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1015,false,'2021-6-19, 22:55:35','10006');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1016,false,'2021-5-11, 22:55:35','10010');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1017,false,'2021-5-29, 22:55:35','10008');

insert into products_order(order_id, is_completed, order_date, user_id)
values(1018,false,'2021-5-09, 22:55:35','10009');



insert into sold_product(id,name,price,quantity,username, order_id)
values(10001, 'hawaii', 10, 4,'pepe', 1010);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10002, 'greek', 10, 4,'pepe', 1010);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10003, 'camberetti', 10, 4,'pepe', 1011);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10004, 'margharita', 10, 4,'pepe', 1012);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10005, 'hawaii', 10, 4,'pepe', 1012);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10006, 'margharita', 10, 4,'logotyp', 1013);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10007, 'capriciosa', 10, 4,'Byczeq', 1014);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10008, 'hawaii', 10, 4,'Majoness', 1015);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10009, 'capriciosa', 10, 4,'Hazardzista23', 1016);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10010, 'greek', 10, 4,'Hazardzista23', 1016);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10011, 'margharita', 10, 4,'Spaslak333', 1017);

insert into sold_product(id,name,price,quantity,username, order_id)
values(10012, 'capriciosa', 10, 4,'Wysoooki', 1018);

--insert into basket_product(id,name,price,username,quantity)
--values(10002, 'pepperoni', 10,'in28minutes', 4);
--
--insert into basket_product(id,name,price,username,quantity)
--values(10003, 'prosciutto', 10,'in28minutes', 4);
--
--insert into jwt_user_details(id, username, password, name, surname, number,city, street, street_number)
--values(10001, 'matikurcze','$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e', 'Mati', 'Roszko', '123123123', 'Grodno', 'Bialostocka', '11');
--
