import * as log4js from 'log4js';
import { get } from 'nconf';

export function configure() {
  const loggingConfig = get('logging') || {
    appenders: {
      app: { type: 'console' }
    },
    categories: {
      default: { appenders: ['app'], level: 'INFO' }
    }
  };
  log4js.configure(loggingConfig);
}
