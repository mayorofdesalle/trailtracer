import pino from 'pino';

const logger = pino({
    level: import.meta.env.DEV ? 'debug' : 'info',
});

export default logger;