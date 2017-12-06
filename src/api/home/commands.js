module.exports = {
  Home: (app) => {
    token = PROCESS.ENV.VERIFICATION_TOKEN
    app.get('/https://slack.com/api/usergroups.list', function (req, res) {
      res.send('Hi, I\'m ' + config.app.name + "!");
    });
  }
}