"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const logdna = require("logdna");
const options = {
    app: "default-app",
    env: "default-env",
    index_meta: true,
    handleExceptions: true,
};
const defaultLevels = { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 };
const prodLevels = { error: 0, warn: 1, info: 2 };
class Logging {
    /**
     * constructor. Create and configure logging params
     *
     * @constructor
     */
    constructor() {
    }
    init(config, environnement) {
        console.log(Object.assign({}, options, config, { hostname: environnement }));
        winston.add(logdna.WinstonTransport, Object.assign({}, options, config, { hostname: environnement }));
        if (environnement == "production") {
            winston.setLevels(prodLevels);
        }
        else {
            winston.setLevels(defaultLevels);
        }
    }
    error(message, title) {
        winston.level = 'error';
        if (title) {
            winston.log('error', "--> ", title || '', " <--", message);
        }
        else {
            winston.log('error', message);
        }
    }
    warn(message, title) {
        winston.level = 'warn';
        if (title) {
            winston.log('warn', "--> ", title || '', " <--", message);
        }
        else {
            winston.log('warn', message);
        }
    }
    info(message, title) {
        winston.level = 'info';
        if (title) {
            winston.log('info', "--> ", title || '', " <--", message);
        }
        else {
            winston.log('info', message);
        }
    }
    verbose(message, title) {
        winston.level = 'verbose';
        if (title) {
            winston.log('verbose', "--> ", title || '', " <--", message);
        }
        else {
            winston.log('verbose', message);
        }
    }
    debug(message, title) {
        winston.level = 'debug';
        if (title) {
            winston.log('debug', "--> ", title || '', " <--", message);
        }
        else {
            winston.log('debug', message);
        }
    }
    silly(message, title) {
        winston.level = 'silly';
        if (title) {
            winston.log('silly', "--> ", title || '', " <--", message);
        }
        else {
            winston.log('silly', message);
        }
    }
}
exports.logging = new Logging();

//# sourceMappingURL=logging.js.map
