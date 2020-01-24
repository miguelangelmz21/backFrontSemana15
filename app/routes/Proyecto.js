"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Proyecto_1 = require("./../controllers/Proyecto");
const utils_1 = require("../utils/utils");
exports.proyecto_router = express_1.Router();
exports.proyecto_router.get("/proyecto", utils_1.wachiman, Proyecto_1.getProyectos);
exports.proyecto_router.post("/proyecto", Proyecto_1.postProyecto);
exports.proyecto_router.put("/proyecto/:id_proyecto", Proyecto_1.updateProyecto);
exports.proyecto_router.delete("/proyecto/:id_proyecto", utils_1.wachiman, Proyecto_1.deleteProyecto);
exports.proyecto_router.get("/proyecto/:id_proyecto", Proyecto_1.getProyectobyId);
