"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pingpongRouter_1 = __importDefault(require("./pingpongRouter"));
const kakaoRouter_1 = __importDefault(require("./kakaoRouter"));
const router = (0, express_1.Router)();
router.use('/ping', pingpongRouter_1.default);
router.use('/kakao', kakaoRouter_1.default);
exports.default = router;
