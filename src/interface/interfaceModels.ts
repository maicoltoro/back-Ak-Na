export interface InterCategorias {
    ID : number
    Nombre : string
    IdServicio : number | null
    Activa : number
    imagen : string
}

export interface InterServicios {
    Id : number
    Tipo : string
}

export interface InterInformacionPedidos {
    IdPedido : number
    NombreCompleto :string
    TipoIdentificacion : number
    NumeroIdentificacion : number
    Correo : string
    Direccion : string
    Celular : number
    SuscripcionNoticias : number
    ValorCompra : number
    IdEstado : number
}

export  interface InterProductos {
    ID : number
    IdCategoria : number
    Nombre : string
    IdMarca : number
    Precio : number
    Descuento : number
    Cantidaddescuento : number
    FechaInicioDesc : Date
    FechaFinDesc : Date
    IdServicio : number
    Descripcion : string
    Activo : number
    imagen : string
}

export interface InterDias {
    id : number
    dia: string
    activo : number
    envioGratis : number
}

export interface InterTipoIdentificacion {
    id : number
    tipo : string
}

export interface InterFactura {
    ID?: number
    Cantidad? : number
    DiaEntrega? : number
    Tiempo? : number
    HoraInicio? : string
    HoraFin? :string
}