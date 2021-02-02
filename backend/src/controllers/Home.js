class HomeController {
  async index(req, res) {
    res.render('index', {
      title: 'Formulário',
    });
  }

  async store(req, res) {
    res.send(req.body);
  }
}

export default new HomeController();
