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
exports.eliminarProducto = exports.actualizarProducto = exports.obtenerProductos = exports.crearProducto = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
// crear producto
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = new Producto_1.default(req.body);
        yield producto.save();
        res.status(201).json(producto);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.crearProducto = crearProducto;
// obtener producto
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield Producto_1.default.find();
        res.status(200).json(productos);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.obtenerProductos = obtenerProductos;
// actualizar producto
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productoActualizado = yield Producto_1.default.findByIdAndUpdate(id, req.body, {
            new: true, // Devuelve el producto actualizado
        });
        if (!productoActualizado) {
            res.status(404).json({ error: 'Producto no encontrado' });
            return;
        }
        res.status(200).json(productoActualizado);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.actualizarProducto = actualizarProducto;
// eliminar producto
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productoEliminado = yield Producto_1.default.findByIdAndDelete(id);
        if (!productoEliminado) {
            res.status(404).json({ error: 'Producto no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.eliminarProducto = eliminarProducto;
