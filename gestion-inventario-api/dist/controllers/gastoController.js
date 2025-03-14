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
exports.eliminarGasto = exports.actualizarGasto = exports.obtenerGasto = exports.crearGasto = void 0;
const Gasto_1 = __importDefault(require("../models/Gasto"));
// crear gasto
const crearGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gasto = new Gasto_1.default(req.body);
        yield gasto.save();
        res.status(201).json(gasto);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.crearGasto = crearGasto;
//obtener gasto
const obtenerGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gasto = yield Gasto_1.default.find();
        res.status(200).json(gasto);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.obtenerGasto = obtenerGasto;
// actualizar gasto
const actualizarGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const gastoActualizado = yield Gasto_1.default.findByIdAndUpdate(id, req.body, {
            new: true, // Devuelve el gasto actualizado
        });
        if (!gastoActualizado) {
            res.status(404).json({ error: 'Gasto no encontrado' });
            return;
        }
        res.status(200).json(gastoActualizado);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.actualizarGasto = actualizarGasto;
// eliminar gasto
const eliminarGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const gastoEliminado = yield Gasto_1.default.findByIdAndDelete(id);
        if (!gastoEliminado) {
            res.status(404).json({ error: 'Gasto no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Gasto eliminado correctamente' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.eliminarGasto = eliminarGasto;
