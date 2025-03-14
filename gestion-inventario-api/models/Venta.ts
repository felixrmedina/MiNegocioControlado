import { Document, Schema, model, Types } from 'mongoose';

// Interfaz para el subdocumento de productos vendidos
interface IProductoVendido {
  producto_id: Types.ObjectId;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

// Interfaz para el documento de venta
export interface IVenta extends Document {
  fecha_venta: Date;
  productos_vendidos: IProductoVendido[];
  total_venta: number;
  metodo_pago: string;
  empleado: string;
}

// Esquema de venta
const VentaSchema = new Schema<IVenta>({
  fecha_venta: { type: Date, default: Date.now },
  productos_vendidos: [
    {
      producto_id: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true },
      precio_unitario: { type: Number, required: true },
      subtotal: { type: Number, required: true },
    },
  ],
  total_venta: { type: Number, required: true },
  metodo_pago: { type: String, required: true },
  empleado: { type: String, required: true },
});

// Exportar el modelo
export const Venta = model<IVenta>('Venta', VentaSchema);