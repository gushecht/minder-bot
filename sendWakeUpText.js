const accountSid = 'AC445182f6a2a34104270b240d77613665';
const authToken = '79171e6d8d8918c55d3f3720ba91f69d';

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

exports.sendWakeUpText = (req, res) => {
	client.messages.create({
		body: 'How did you sleep last night?',
		to: '+15105028935',
		from: '+15104221451',
	}).then(() => res.status(200).send());
};
