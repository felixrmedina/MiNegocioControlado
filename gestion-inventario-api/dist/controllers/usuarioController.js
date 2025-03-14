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
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.obtenerUsuario = exports.crearUsuario = void 0;
const Usuario_1 = require("../models/Usuario");
// Crear usuario
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = new Usuario_1.Usuario(req.body);
        yield usuario.save();
        res.status(201).json(usuario);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.crearUsuario = crearUsuario;
// Obtener usuarios
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield Usuario_1.Usuario.find();
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.obtenerUsuario = obtenerUsuario;
// Actualizar usuario
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarioActualizado = yield Usuario_1.Usuario.findByIdAndUpdate(id, req.body, {
            new: true, // Devuelve el usuario actualizado
        });
        if (!usuarioActualizado) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json(usuarioActualizado);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.actualizarUsuario = actualizarUsuario;
// Eliminar usuario
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarioEliminado = yield Usuario_1.Usuario.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.eliminarUsuario = eliminarUsuario;
