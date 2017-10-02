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
        winston.log('error', "--> ", title, " <--", message);
    }
    warn(message, title) {
        winston.level = 'warn';
        winston.log('warn', "--> ", title, " <--", message);
    }
    info(message, title) {
        winston.level = 'info';
        winston.log('info', "--> ", title, " <--", message);
    }
    verbose(message, title) {
        winston.level = 'verbose';
        winston.log('verbose', "--> ", title, " <--", message);
    }
    debug(message, title) {
        winston.level = 'debug';
        winston.log('debug', "--> ", title, " <--", message);
    }
    silly(message, title) {
        winston.level = 'silly';
        winston.log('silly', "--> ", title, " <--", message);
    }
}
exports.logging = new Logging();

//# sourceMappingURL=logging.js.map
