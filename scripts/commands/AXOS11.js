const fs = require("fs");
module.exports.config = {
	name: "😍",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😍",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("🥰")==0 || event.body.indexOf("😍")==0) {
		var msg = {
				body: "~ ওমা তুমি কি আমার পর ক্রাশ খেয়েছো নাকি..!🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/crashkaisonigo.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }