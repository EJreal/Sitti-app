create table perfil
(
    ID_PERFIL int auto_increment
        primary key,
    NOMBRE    varchar(13) null
);

create index PERFIL_ID_PERFIL_index
    on perfil (ID_PERFIL);

create table productos
(
    ID             int auto_increment
        primary key,
    NOMBRE         varchar(100) null,
    ESTADO         varchar(45)  null,
    VALOR_UNITARIO int          null
);

create table tipos_identificaciones
(
    TIPO_IDENTIFICACION int auto_increment
        primary key,
    ABREVIATURA         varchar(3)   null,
    DESCRIPCION         varchar(100) null
);

create table clientes
(
    CLIENTE             int auto_increment
        primary key,
    IDENTIFICACION      varchar(100) null,
    RAZON_SOCIAL        varchar(100) null,
    FECHA_REGISTRO      date         null,
    ESTADO              varchar(1)   null,
    TIPO_IDENTIFICACION int          null,
    constraint TIPO_IDENTIFICACION_SK
        foreign key (TIPO_IDENTIFICACION) references tipos_identificaciones (TIPO_IDENTIFICACION)
);

create table facturas
(
    CONSECUTIVO int auto_increment
        primary key,
    FECHA       date null,
    CLIENTE     int  null,
    constraint CLIENTE_SK
        foreign key (CLIENTE) references clientes (CLIENTE)
);

create table factura_detalle
(
    CONSECUTIVO    int not null,
    ID_PRODUCTO    int not null,
    CANTIDAD       int null,
    VALOR_UNITARIO int null,
    id             int auto_increment
        primary key,
    constraint factura_detalle_facturas_CONSECUTIVO_fk
        foreign key (CONSECUTIVO) references facturas (CONSECUTIVO),
    constraint factura_detalle_productos_ID_fk
        foreign key (ID_PRODUCTO) references productos (ID)
);

create table usuario
(
    ID_USUARIO int auto_increment
        primary key,
    NOMBRE     varchar(45) not null,
    APELLIDO   varchar(45) null,
    USUARIO    varchar(45) not null,
    CONTRASEÑA varchar(45) not null,
    ID_PERFIL  int         not null,
    constraint USUARIO_USUARIO_uindex
        unique (USUARIO),
    constraint ID_PERFIL_FK
        foreign key (ID_PERFIL) references perfil (ID_PERFIL)
);

create index USUARIO_ID_PERFIL_index
    on usuario (ID_PERFIL);


