"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res) => {
    return res.status(404).json({ msg: "Route doesn't exist" });
};
exports.notFound = notFound;
