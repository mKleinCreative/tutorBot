require('dotenv').load();

var config = {};

config.app = {};
config.api = {};
config.caldav = {};
config.slack = {};

/* App Settings */
config.app.name = "tutorBot";

/* calDav Settings */
config.caldav.url = "";
config.caldav.username = "";
config.caldav.password = "";
config.caldav.timeFormat = "YYYYMMDDTHHmms";

/* API Settings */
config.api.port = 3000;

/* Slack WebHook Settings */
config.slack.username = config.app.name;
config.slack.emoji = ":calendar:";
config.slack.channel = "";
config.slack.webhook_url = "";
config.slack.eventColor = "good"; // can either be one of good, warning, danger, or any hex color code (eg. #439FE0).

config.slack.token = process.env.VERIFICATION_TOKEN
config.slack.clientID = process.env.CLIENT_ID
config.slack.clientSecret = process.env.CLIENT_SECRET
config.slack.slackOauth = process.env.SLACK_OAUTH_ACCESS_TOKEN
config.slack.botAuth = process.env.SLACK_BOT_ACCESS_TOKEN
config.slack.userGroup = process.env.SLACK_TUTOR_USER_GROUP
/* Do Not edit the following code */
module.exports = config;