"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Esquema de usuario
const UsuarioSchema = new mongoose_1.Schema({
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
UsuarioSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified('password')) {
            this.password = yield bcryptjs_1.default.hash(this.password, 8);
        }
        next();
    });
});
// Método para comparar contraseñas
UsuarioSchema.methods.compararPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(password, this.password);
    });
};
// Método para generar un token JWT
UsuarioSchema.methods.generarToken = function () {
    return jsonwebtoken_1.default.sign({ id: this._id, rol: this.rol }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '1h',
    });
};
// Excluir la contraseña al convertir el usuario a JSON
UsuarioSchema.methods.toJSON = function () {
    const usuario = this.toObject();
    delete usuario.password;
    return usuario;
};
// Actualizar la fecha de actualización antes de guardar
UsuarioSchema.pre('save', function (next) {
    this.fecha_actualizacion = new Date();
    next();
});
// Exportar el modelo
exports.Usuario = (0, mongoose_1.model)('Usuario', UsuarioSchema);
