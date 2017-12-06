const config = require('../../config.js');
const Queue = require('../../utilities/queue')
const request = require('request-promise')

const fetchTutors = async () => {
  let tutors = await request({
      uri: `https://slack.com/api/usergroups.users.list?token=${config.slack.slackOauth}&usergroup=${config.slack.userGroup}`,
      method: 'GET',
      json: true,
      headers: {'Content-Type': 'application/json'}
    })
  return tutors
}

fetchTutors().then((tutors) => {
  console.log('---===tutors.usergroups===---', tutors)
})
