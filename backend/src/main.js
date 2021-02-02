import express from 'express';
import flash from 'connect-flash';
import helmet from 'helmet';
import csrf from 'csurf';
import Home from './routes/Home';
import myMiddleware from './middlewares/myMiddleware';
import checkCsrfError from './middlewares/csrfError';
import csrfMiddleware from './middlewares/csrfMiddleware';
import sessionOptions from './config/sessionOptions';

const path = require('path');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(sessionOptions);
    this.app.use(flash());
    this.app.use(helmet());
    this.app.use(csrf());
    this.app.use(myMiddleware);
    this.app.use(csrfMiddleware);
    this.app.use(checkCsrfError);
    this.app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
    this.app.use(
      '/css',
      express.static(
        path.join(__dirname, '..', '..', 'node_modules/bootstrap/dist/css')
      )
    );
    this.app.use(
      '/js',
      express.static(
        path.join(__dirname, '..', '..', 'node_modules/bootstrap/dist/js')
      )
    );
    this.app.use(
      '/js',
      express.static(
        path.join(__dirname, '..', '..', 'node_modules/jquery/dist')
      )
    );
    this.app.set('views', path.resolve(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
  }

  routes() {
    this.app.use('/', Home);
  }
}

export default new App().app;
