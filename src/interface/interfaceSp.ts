export interface Sp_GraficaMesCantidadVentas {
    Mes: string
    CantidadPedidos: number
}

export interface Sp_GraficaProductosMasVendidos {
    IdProducto: number
    Nombre: string
    Imagen: string
    Cantidad: number
    Precio: number
}

export interface Sp_GraficaProductosPorCategoria {
    categoria: string
    TotalVenta: number
    CantidadPedidos: number
}

export interface Sp_GraficaClientesFrecuentes {
    Cliente: string
    CantidadPedidos: number
    TotalGastado: number
}

export interface Sp_GraficaDiasVenta {
    DiaSemana: string
    CantidadPedido: number
}

export interface Sp_traerInventario {
    ID: number
    Nombre: string
    Cantidad: number
    NombreCategoria: string
    Descuento: number
    FechaInicioDesc: Date
    FechaFinDesc: Date
    Precio: number
    NombreMarca: string
    Descripcion: string
    Imagen: string
    Activo: string
}

export interface Sp_InformacionPedido {
    IdPedido: number
    NombreCompleto: string
    Direccion: string
    Correo: string
    Celular: number
    FechaPedido: Date
    ValorCompra: number
    Estado: string
    DiaEntrega : string
}

export interface Sp_Informacionfactura {
    IdPedido: number
    Nombre: string
    Imagen: string
    Cantidad: number
    DiaEntrega: string
    Precio : number
}