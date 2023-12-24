"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
exports.routes = routes;
const rate_js_1 = require("../Controllers/rate.js");
const hardware_js_1 = require("../Controllers/hardware.js");
const products_js_1 = require("../Controllers/products.js");
const parts_js_1 = require("../Controllers/parts.js");
routes.route('/parts').get(parts_js_1.getAllPart).post(parts_js_1.postPart);
routes.route('/parts/:id').get(parts_js_1.getPart).patch(parts_js_1.patchPart).post(parts_js_1.addToProduct);
routes.route('/rate/:sap').get(rate_js_1.getRate).patch(rate_js_1.patchtRate);
routes.route("/hardware").get(hardware_js_1.getAllHardware).post(hardware_js_1.postHardware);
routes.route('/hardware/:id').get(hardware_js_1.getHardware).patch(hardware_js_1.patchHardware).post(hardware_js_1.addHardwareToProduct);
routes.route('/').get(products_js_1.getAllProduct).post(products_js_1.postProduct);
routes.route('/:sap').get(products_js_1.getProduct).patch(products_js_1.patchProduct);
