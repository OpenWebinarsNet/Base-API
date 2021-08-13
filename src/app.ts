import express from 'express';

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use(express.json()); //recibe jsons
    this.app.use(express.urlencoded({ extended: true })); //permite que los json sean nested
    this.app.route('/status').get((req, res) => {
      res.status(200).send({ status: 'success' })
    })
  }
}

export default new App().app;