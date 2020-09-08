create database landpage;
create table usuarios();
create table funcionarios();
create table enderecos();

alter table usuarios 
add column codigo SERIAL primary key,
add column nome VarChar (60) not null,
add column Whatsapp char (11) not null;

alter table enderecos 
add column codigo SERIAL primary key,
add column cep Char(8) not null,
add column rua VarChar (60) not null,
add column bairro VarChar(50) not null,
add column numero Integer not null,
add column cidade VarChar(40) not null,
add column estado VarChar(40) not null;

alter table funcionarios 
add column codigo SERIAL primary key,
add column nome VarChar (60) not null,
add column cpf char (11) unique not null,
add column email VarChar(100) not null,
add column senha VarChar(10) not null,
add column dataNascimento date not null,
add column salario float not null,
add column endereco Integer REFERENCES enderecos (codigo);

insert into usuarios (nome, whatsapp)
values('Gabriela Oliveira','21998452654'),
      ('Guilherme Henrique','21985462647'),
      ('Cícero Romão','21984543641'),
      ('Paulo Eduardo','21984218725');
     
insert into enderecos (cep, rua, bairro, numero, cidade, estado )
values('54268454','Rua das Bananeiras','Palmeiras', 25, 'São Paulo','São Paulo' );   

insert into funcionarios (nome, cpf, email, senha, dataNascimento, salario, endereco)
values('Iago Murilo Joaquim da Cruz','32842391543', 'iagomurilojoaquimdacruz-82@msn.com', '123456', '1956-06-10', 6000.00, 1); 
