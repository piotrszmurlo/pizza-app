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

insert into products_order(order_id, is_completed, order_date, user_id)
values(1010,false,'12-12-12', '10002');
--
--insert into basket_product(id,name,price,username,quantity, order_id)
--values(10001, 'margharita', 10,'pepe', 4, 1010);
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
