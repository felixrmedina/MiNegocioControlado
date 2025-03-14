import { Document, Schema, model } from 'mongoose';

export interface IProducto extends Document {
  nombre: string;
  descripcion?: string;
  categoria: string;
  precio: number;
  costo: number;
  stock: number;
  proveedor?: string;
  fecha_creacion: Date;
  fecha_actualizacion: Date;
}

const ProductoSchema = new Schema<IProducto>({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  categoria: { type: String, required: true },
  precio: { type: Number, required: true },
  costo: { type: Number, required: true },
  stock: { type: Number, required: true },
  proveedor: { type: String },
  fecha_creacion: { type: Date, default: Date.now },
  fecha_actualizacion: { type: Date, default: Date.now },
});

export default model<IProducto>('Producto', ProductoSchema);