"use strict";
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

    public init(config: any, environnement: string) {
        console.log(Object.assign({}, options, config, { hostname: environnement }))
        winston.add(logdna.WinstonTransport, Object.assign({}, options, config, { hostname: environnement }));
        if (environnement == "production") {
            winston.setLevels(prodLevels)
        } else {
            winston.setLevels(defaultLevels)
        }
    }

    public error(message: any, title?: any) {
        winston.level = 'error';
        if (title) {
            winston.log('error', "--> ", title || '', " <--", message);
        }
        else{
            winston.log('error', message)
        }
    }
    public warn(message: any, title?: any) {
        winston.level = 'warn';
        if (title) {
            winston.log('warn', "--> ", title || '', " <--", message);
        }
        else{
            winston.log('warn', message)
        }
    }
    public info(message: any, title?: any) {
        winston.level = 'info';
        if (title) {
            winston.log('info', "--> ", title || '', " <--", message);
        }
        else{
            winston.log('info', message)
        }
    }
    public verbose(message: any, title?: any) {
        winston.level = 'verbose';
        if (title) {
            winston.log('verbose', "--> ", title || '', " <--", message);
        }
        else{
            winston.log('verbose', message)
        }
    }
    public debug(message: any, title?: any) {
        winston.level = 'debug';
        if (title) {
            winston.log('debug', "--> ", title || '', " <--", message);
        }
        else{
            winston.log('debug', message)
        }
    }
    public silly(message: any, title?: any) {
        winston.level = 'silly';
        if (title) {
            winston.log('silly', "--> ", title || '', " <--", message);
        }
        else{
            winston.log('silly', message)
        }
    }

}

export let logging = new Logging();
