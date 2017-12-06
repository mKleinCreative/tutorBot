var config = require('./config');
var https = require("https");
var xmljs = require("libxmljs");
var express = require('express');
var caldav = require("node-caldav-mod");
var moment = require('moment-timezone');

Slack = require('node-slackr');
slack = new Slack(config.slack.webhook_url, {
  channel: config.slack.channel,
  username: config.slack.username,
  icon_emoji: config.slack.emoji
});


const app = express()
const index = require('./api/index')

const PORT = process.env.PORT || 8675;

app.use(index)

app.listen(3000, function () {
  console.log(`${config.app.name} listening on port ${config.api.port}`);
});