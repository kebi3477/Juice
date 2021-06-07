CREATE TABLE user(
    user_id varchar(255) primary key,
    user_password varchar(255) not null,
    user_email varchar(255) not null,
    user_name varchar(255) not null,
    user_pic varchar(255)
)

CREATE TABLE groups(
    group_id int primary key auto_increment,
    group_pic varchar(255),
    group_name varchar(255),
    group_date datetime,
    user_id varchar(255),
    type_id int
)

CREATE TABLE type(
    type_id int primary key auto_increment,
    type_name varchar(255),
    type_ename varchar(255)
)