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
exports.iniciarSesion = exports.registrarUsuario = void 0;
const Usuario_1 = require("../models/Usuario");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Registro de un nuevo usuario
const registrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, rol, email, password } = req.body;
        // Verificar si el usuario ya existe
        const usuarioExistente = yield Usuario_1.Usuario.findOne({ email });
        if (usuarioExistente) {
            res.status(400).json({ error: 'El usuario ya existe' });
            return;
        }
        // Crear un nuevo usuario
        const usuario = new Usuario_1.Usuario({ nombre, rol, email, password });
        yield usuario.save();
        // Generar un token JWT
        const token = jsonwebtoken_1.default.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '1h',
        });
        res.status(201).json({ token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.registrarUsuario = registrarUsuario;
// Inicio de sesión de un usuario
const iniciarSesion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Verificar si el usuario existe
        const usuario = yield Usuario_1.Usuario.findOne({ email });
        if (!usuario) {
            res.status(400).json({ error: 'Credenciales inválidas' });
            return;
        }
        // Comparar contraseñas
        const esPasswordValido = yield usuario.compararPassword(password);
        if (!esPasswordValido) {
            res.status(400).json({ error: 'Credenciales inválidas' });
            return;
        }
        // Generar un token JWT
        const token = jsonwebtoken_1.default.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.iniciarSesion = iniciarSesion;
