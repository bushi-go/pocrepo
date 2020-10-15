import "reflect-metadata";
import { InversifyExpressServer } from 'inversify-express-utils';
import { config as configDotEnv } from 'dotenv';
import * as express from 'express';
import * as compression from 'compression';
import * as nconf from 'nconf';
import * as path from 'path';
import { getLogger } from 'log4js';
import { configure as configureLogger } from './app/util';
import {DI_CONTAINER} from './app/util';

console.log("Loading conf");
configDotEnv();

nconf.use('memory').argv().env();

const env = nconf.get('NODE_ENV');

if(env){
    nconf.file(`config/env/${env}.json`);
}

const configFile = nconf.get('CONFIG_FILE');
if (configFile) {
    // Load config passed as argument
    nconf.file('config', configFile);
  }
  
  configureLogger();
  const logger = getLogger('app')
  
async function startUp(){
    const server = new InversifyExpressServer(DI_CONTAINER, null, { rootPath: '/'});
    server.setConfig(expApp => {
        expApp.use(express.json());
        expApp.use(express.urlencoded());
    });

    const app = server.build();
    const networkConfig = nconf.get('network');
    if (networkConfig && networkConfig.trustProxy) {
        app.set('trust proxy', networkConfig.trustProxy);
      }
    app.use(compression());
    app.use(
        express.static(path.resolve(__dirname, 'public'), {
          maxAge: 365 * 24 * 60 * 60 * 1000,
          setHeaders: (res, filePath) => {
            if (filePath.endsWith('.json')) {
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.setHeader('Cache-Control', 'public, max-age=0');
            }
          }
        })
      );
      app.get('/*', (req, res, next) => {
        if (req.url.startsWith('/api')) {
          return next();
        }
        res.sendFile(path.resolve(__dirname, 'public/index.html'));
      });
    
      const port = nconf.get('NODE_PORT');
      app.listen(port, () => {
        logger.info('[Express] Listening on port %s', port);
      });
}

startUp();