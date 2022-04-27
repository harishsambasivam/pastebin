const byjusLogger = require('byjus-logger');

const { contextMiddleware, logger, httpLogger, pinoHttpLogger } = byjusLogger.init("dev", {
    pretty: true
});

module.exports = {
    contextMiddleware,
    logger,
    httpLogger,
    pinoHttpLogger
}