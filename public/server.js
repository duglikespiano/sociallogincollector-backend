"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendServerStart = void 0;
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
const env_1 = require("./env");
const backendServer = http_1.default.createServer(app_1.app);
const backendServerStart = () => {
    backendServer.listen(env_1.backendServerPort, () => {
        if (!env_1.backendServerPort) {
            throw new Error('PORT INVALID');
        }
        else {
            console.log(`Ready to roll out!\nBackend server is ready on port ${env_1.backendServerPort}!`);
        }
    });
};
exports.backendServerStart = backendServerStart;
