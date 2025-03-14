import { Document, Schema, Model, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Interfaz para el documento de usuario
export interface IUsuario extends Document {
  nombre: string;
  rol: 'admin' | 'usuario';
  email: string;
  password: string;
  fecha_creacion: Date;
  fecha_actualizacion: Date;
  compararPassword(password: string): Promise<boolean>;
  generarToken(): string;
}

// Interfaz para el modelo de usuario
interface IUsuarioModel extends Model<IUsuario> {
  // Aquí puedes agregar métodos estáticos si los necesitas
}

// Esquema de usuario
const UsuarioSchema = new Schema<IUsuario, IUsuarioModel>({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ['admin', 'usuario'],
    default: 'usuario',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un email válido'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  fecha_creacion: {
    type: Date,
    default: Date.now,
  },
  fecha_actualizacion: {
    type: Date,
    default: Date.now,
  },
});

// Encriptar la contraseña antes de guardar el usuario
UsuarioSchema.pre<IUsuario>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Método para comparar contraseñas
UsuarioSchema.methods.compararPassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

// Método para generar un token JWT
UsuarioSchema.methods.generarToken = function (): string {
  return jwt.sign({ id: this._id, rol: this.rol }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1h',
  });
};

// Excluir la contraseña al convertir el usuario a JSON
UsuarioSchema.methods.toJSON = function (): Partial<IUsuario> {
  const usuario = this.toObject();
  delete usuario.password;
  return usuario;
};

// Actualizar la fecha de actualización antes de guardar
UsuarioSchema.pre<IUsuario>('save', function (next) {
  this.fecha_actualizacion = new Date();
  next();
});

// Exportar el modelo
export const Usuario: IUsuarioModel = model<IUsuario, IUsuarioModel>('Usuario', UsuarioSchema);