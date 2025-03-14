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
exports.eliminarVenta = exports.actualizarVenta = exports.obtenerVentas = exports.crearVenta = void 0;
const Venta_1 = require("../models/Venta");
// Crear una venta
const crearVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const venta = new Venta_1.Venta(req.body);
        yield venta.save();
        res.status(201).json(venta);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.crearVenta = crearVenta;
// Obtener todas las ventas
const obtenerVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ventas = yield Venta_1.Venta.find().populate('productos_vendidos.producto_id');
        res.status(200).json(ventas);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.obtenerVentas = obtenerVentas;
// Actualizar una venta
const actualizarVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ventaActualizada = yield Venta_1.Venta.findByIdAndUpdate(id, req.body, {
            new: true, // Devuelve la venta actualizada
        });
        if (!ventaActualizada) {
            res.status(404).json({ error: 'Venta no encontrada' });
            return;
        }
        res.status(200).json(ventaActualizada);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.actualizarVenta = actualizarVenta;
// Eliminar una venta
const eliminarVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ventaEliminada = yield Venta_1.Venta.findByIdAndDelete(id);
        if (!ventaEliminada) {
            res.status(404).json({ error: 'Venta no encontrada' });
            return;
        }
        res.status(200).json({ message: 'Venta eliminada correctamente' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.eliminarVenta = eliminarVenta;
