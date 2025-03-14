import { Document, Schema, model } from 'mongoose';

export interface IIngreso extends Document {
  fecha_ingreso: Date;
  descripcion?: string;
  monto: number;
  categoria: string;
  empleado: string

}

const IngresoSchema = new Schema<IIngreso>({
  fecha_ingreso: { type: Date, default: Date.now },
  descripcion: { type: String, required: true },
  monto: { type: Number, required: true },
  categoria: { type: String, required: true },
  empleado: { type: String, required: true },
});

export default model<IIngreso>('Ingreso', IngresoSchema);