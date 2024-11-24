"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cycle_router_1 = require("./app/moduler/create-cycle/cycle-router");
const order_router_1 = require("./app/moduler/create-order/order-router");
const totaleRevenue_1 = require("./app/moduler/totaleRevenue/totaleRevenue");
const config_1 = require("./app/config/config");
const app = (0, express_1.default)();
// JSON body parser and url-encoded middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// CORS middleware
app.use((0, cors_1.default)());
// Router connection middleware
app.use('/api/products', cycle_router_1.cycleRouter.router);
app.use('/api/orders', order_router_1.orderRouter.router);
app.use('/api/orders/revenue', totaleRevenue_1.totaleRevenue.router);
// demo router for testing
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World',
        success: true,
        data: 'Welcome Our Site',
    });
});
// global generic error handel middleware
app.use((err, req, res, next) => {
    const isValidationError = err.name === 'ValidationError';
    const statusCode = isValidationError ? 400 : err.statusCode || 500;
    const errorResponse = {
        message: isValidationError
            ? 'Validation failed'
            : err.message || 'An unexpected error occurred',
        success: false,
        error: isValidationError ? err : { name: err.name || 'Error' },
        stack: config_1.config.node_env === 'development' ? err.stack : undefined,
    };
    res.status(statusCode).json(errorResponse);
});
exports.default = app;
