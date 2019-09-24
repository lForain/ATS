import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as path from 'path';
import config from './config';

const options: cors.CorsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:5002',
  preflightContinue: false,
};

export default () => {
  const app = express();

  for (const model of config.globFiles(config.models)) {
    require(path.resolve(model));
  }

  mongoose.set('useNewUrlParser', true);
  mongoose
    .connect(config.mongodb, {
      promiseLibrary: global.Promise,
    })
    .catch(() => {
      console.log('Error connecting to mongo');
    });

  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5002' );
  //   next();
  // });

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../../src/public')));
  app.use(cors(options));

  for (const route of config.globFiles(config.routes)) {
    console.log(route);
    require(path.resolve(route)).default(app);
  }

  app.use(
    (req: express.Request, res: express.Response, next: Function): void => {
      res.json({
        message: 'Url not found',
        status: false,
      });
      next();
    },
  );

  return app;
};
