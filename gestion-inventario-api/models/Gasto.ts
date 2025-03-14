import { Document, Schema, model } from 'mongoose';

export interface IGastos extends Document{
  fecha_gasto: Date;
  descripcion?: string;
  monto: number;
  categoria: string;
  proveedor: string;
  empleado: string;
}
const GastoSchema = new Schema<IGastos>({
  fecha_gasto: { type: Date, default: Date.now },
  descripcion: { type: String, required: true },
  monto: { type: Number, required: true },
  categoria: { type: String, required: true },
  proveedor: { type: String },
  empleado: { type: String, required: true },
});

export default model<IGastos>('Gastos', GastoSchema);