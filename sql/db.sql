-- Script BD FeriApp

-- CUENTA, en esta tabla se guarda toda la información personal de una persona, ya sea usuario o cliente
CREATE TABLE IF NOT EXISTS cuenta
(
    id_cuenta integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre text NOT NULL CHECK (nombre <> ''),
    apellido text NOT NULL CHECK (apellido <> ''),
    correo_cuenta text NOT NULL CHECK (correo_cuenta <> ''),
    password_cuenta text NOT NULL CHECK (password_cuenta <> '')
-- RECORDAR PONER LAS COMAS
 --   imagen_cuenta bytea, 
 --   activo_cuenta boolean NOT NULL,
 --   fecha_alta timestamp
);

-- USUARIO, aquí va el puntaje que tiene acumulado el usuario
CREATE TABLE IF NOT EXISTS usuario
(
    id_usuario integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    puntaje_usuario integer NOT NULL,
    FK_id_cuenta integer REFERENCES cuenta(id_cuenta)
);

-- CLIENTE, en esta tabla se guarda la fecha de inicio y fin del plan de suscripcion
CREATE TABLE IF NOT EXISTS cliente
(
    id_cliente integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    inicioplan_cliente timestamp,
    terminoplan_cliente timestamp,
    FK1_id_cuenta integer REFERENCES cuenta(id_cuenta)
);

-- PERMISO_PUESTO_CLIENTE
CREATE TABLE permiso_puesto_cliente
(
    id_permiso_puesto_cliente integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    imagen_permiso bytea, -- falta agregar que no sea null
    FK_id_cliente integer REFERENCES cliente(id_cliente)
)

-- FERIA
CREATE TABLE feria
(
    id_feria integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    geo_feria lseg,
    nombre_feria text,
    descripcion_feria text
)

-- PUESTO
-- En el futuro agregar una ID de este estilo:
-- ID de local F0000L000
-- id_local integer NOT NULL CHECK(LIKE 'F[0-9][0-9][0-9][0-9]L[0-9][0-9][0-9]'
CREATE TABLE puesto
(
    id_puesto integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    --codigoqr_puesto bytea,
    --geo_puesto point,
    nombre_puesto text,
    descripcion_puesto text,
    fk_id_feria integer REFERENCES feria(id_feria)
    --FK_id_permiso_puesto_cliente integer REFERENCES permiso_puesto_cliente(id_permiso_puesto_cliente)
)

-- PRODUCTO
CREATE TABLE producto
(
    id_producto integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre_producto text,
    descripcion_producto text
    --,foto_producto bytea
)

-- PUESTO_PRODUCTO
CREATE TABLE puestoproducto
(
    id_puesto_producto integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    FK_id_puesto integer REFERENCES puesto(id_puesto),
    FK_id_producto integer REFERENCES producto(id_producto)
)

-- PRECIO_PRODUCTO
CREATE TABLE precio_producto
(
    fecha_precio timestamp,
    valor_precio integer,
    FK1_id_puesto integer REFERENCES puesto(id_puesto),
    FK1_id_producto integer REFERENCES producto(id_producto)
)

---------------------------------------------------------------------------------------------


-- POBLADO INICIAL

-- CUENTA
INSERT INTO cuenta(nombre, apellido, correo_cuenta, password_cuenta, imagen_cuenta, activo_cuenta, fecha_alta)
    VALUES('Daniel', 'Morales','daniel.morales@usach.cl','pw123','imagen_daniel.jpg',true,'2019-06-04 18:18:00');

INSERT INTO cuenta(nombre, apellido, correo_cuenta, password_cuenta, imagen_cuenta, activo_cuenta, fecha_alta)
    VALUES('Usuario1', 'Morales','daniel@gmail.cl','pw111','imagen_daniel.jpg',true,'2019-06-04 18:18:00');

-- CLIENTE

INSERT INTO cliente(FK1_id_cuenta, inicioplan_cliente, terminoplan_cliente)
    VALUES(1,'2004-10-19 10:23:54','2020-10-19 10:23:54');

-- USUARIO

 INSERT INTO usuario(FK_id_cuenta, puntaje_usuario)
    VALUES(2,'500');

-- PERMISO_LOCAL_CLIENTE
INSERT INTO permiso_local_cliente(FK_id_cliente)
    VALUES(1);


-- DE AQUI PARA ARRIBA ESTA BIEN EL POBLADO INICIAL DE PRUEBA

-- PRODUCTO
INSERT INTO producto(nombre_producto, descripcion_producto)
    VALUES ('Palta Hass', 'Alimento rico en grasas saludables');

INSERT INTO public.producto(nombre_producto, descripcion_producto)
	VALUES ('Nuez', 'Rica en aceites saludables');

INSERT INTO public.producto(nombre_producto, descripcion_producto)
	VALUES ('Manzana', 'Rica vitaminas');

INSERT INTO public.producto(nombre_producto, descripcion_producto)
	VALUES ('Limon', 'Rico vitamina C');

INSERT INTO public.producto(nombre_producto, descripcion_producto)
    VALUES('Platano', 'Alimento rico en potasio');

INSERT INTO public.producto(nombre_producto, descripcion_producto)
    VALUES('Naranja', 'Mucha vitamina C');

INSERT INTO public.producto(nombre_producto, descripcion_producto)
    VALUES('Cebolla', 'Rica en antioxidantes');

INSERT INTO public.producto(nombre_producto, descripcion_producto)
    VALUES('Aji verde', 'Ideal para pebre');

-- FERIA
INSERT INTO feria(geo_feria, nombre_feria, descripcion_feria)
	VALUES ('10,-10 ,-3,-4', 'Feria Luis Matte viernes', 'La primera feria');

INSERT INTO feria(geo_feria, nombre_feria, descripcion_feria)
	VALUES ('10, 2,-3,-0', 'Feria Coquimbo Sábados', 'La segunda feria');

-- LOCAL
INSERT INTO puesto(descripcion_puesto, fk_id_feria)
	VALUES ('primer puesto de la feria n°1', 1);

INSERT INTO puesto(descripcion_puesto, fk_id_feria)
	VALUES ('segundo puesto de la feria n°1', 1);

INSERT INTO puesto(descripcion_puesto, fk_id_feria)
	VALUES ('tercer puesto de la feria n°1', 1);



INSERT INTO local(codigo_qr_local, geolocalizacion, descripcion_local)
    VALUES('F01L01', (9,1),'El primer local de FeriApp');

-- PUESTO_PRODUCTO

INSERT INTO puestoproducto(fk_id_puesto, fk_id_producto)
	VALUES (1, 1);

INSERT INTO puestoproducto(fk_id_puesto, fk_id_producto)
	VALUES (1, 2);
	
INSERT INTO puestoproducto(fk_id_puesto, fk_id_producto)
	VALUES (1, 3);

INSERT INTO puesto_producto(fk_id_puesto, fk_id_producto)
	VALUES (2, 2);


-- CUENTA

-- PERMISO_LOCAL_CLIENTE

-- PRECIO_PRODUCTO
