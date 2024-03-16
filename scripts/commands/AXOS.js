module.exports.config = {
  name: "axis",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Anik")==0 || event.body.indexOf("@Crush King")==0 || event.body.indexOf("onik")==0) {
		var msg = {
				body: "~ আমি এখন ব্যস্ত আছি যা বলার আমার রোবটকে বলো..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/amiekonbg.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
