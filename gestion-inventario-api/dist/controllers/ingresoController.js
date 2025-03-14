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
exports.eliminarIngreso = exports.actualizarIngreso = exports.obtenerIngreso = exports.crearIngreso = void 0;
const Ingreso_1 = __importDefault(require("../models/Ingreso"));
//crear ingreso
const crearIngreso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingreso = new Ingreso_1.default(req.body);
        yield ingreso.save();
        res.status(201).json(ingreso);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.crearIngreso = crearIngreso;
// obtener ingreso
const obtenerIngreso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ingreso = yield Ingreso_1.default.find();
        res.status(200).json(ingreso);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.obtenerIngreso = obtenerIngreso;
// actualizar ingreso
const actualizarIngreso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ingresoActualizado = yield Ingreso_1.default.findByIdAndUpdate(id, req.body, {
            new: true, // Devuelve el producto actualizado
        });
        if (!ingresoActualizado) {
            res.status(404).json({ error: 'Ingreso no encontrado' });
            return;
        }
        res.status(200).json(ingresoActualizado);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.actualizarIngreso = actualizarIngreso;
// eliminar ingreso
const eliminarIngreso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ingresoEliminado = yield Ingreso_1.default.findByIdAndDelete(id);
        if (!ingresoEliminado) {
            res.status(404).json({ error: 'Ingreso no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Ingreso eliminado correctamente' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.eliminarIngreso = eliminarIngreso;
