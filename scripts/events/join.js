module.exports.config = {
  'name': "joinNoti",
  'eventType': ["log:subscribe"],
  'version': "1.0.1",
  'credits': "CatalizCS",
  'description': "Notify bot or group member with random gif/photo/video",
  'dependencies': {
    'fs-extra': '',
    'path': '',
    'pidusage': ''
  }
};
module.exports.onLoad = function () {
  const {
    existsSync: _0x51cd91,
    mkdirSync: _0x2fc1bc
  } = global.nodemodule["fs-extra"];
  const {
    join: _0x4f144f
  } = global.nodemodule.path;
  const _0x30dc6a = _0x4f144f(__dirname, "cache", 'joinGif');
  if (_0x51cd91(_0x30dc6a)) {
    _0x2fc1bc(_0x30dc6a, {
      'recursive': true
    });
  }
  const _0x34f0af = _0x4f144f(__dirname, "cache", "joinGif", "randomgif");
  if (!_0x51cd91(_0x34f0af)) {
    _0x2fc1bc(_0x34f0af, {
      'recursive': true
    });
  }
  return;
};
module.exports.run = async function ({
  api: _0x232968,
  event: _0x410899
}) {
  const {
    join: _0x49eae6
  } = global.nodemodule.path;
  const {
    threadID: _0x5ecf5d
  } = _0x410899;
  if (_0x410899.logMessageData.addedParticipants.some(_0x429033 => _0x429033.userFbId == _0x232968.getCurrentUserID())) {
    _0x232968.changeNickname('[' + global.config.PREFIX + " ]  " + (!global.config.BOTNAME ? 'bot' : global.config.BOTNAME), _0x5ecf5d, _0x232968.getCurrentUserID());
    const _0x102089 = require('fs');
    return _0x232968.sendMessage('', _0x410899.threadID, () => _0x232968.sendMessage({
      'body': "আসসালামুআলাইকুম 💖\n____________________________________\n🤖\nBOT CONNECTED!!! \nadding in the group chat successfully!!!\n😈 কিরে বাঁদর গুলা শয়তানি করার জন্য অ্যাড দিছস 😈\n____________________________________\n\nযেকোনো কমান্ড দেখতে " + global.config.PREFIX + "help ব্যবহার করুন\n\nউদাহারণ:\n" + global.config.PREFIX + "mark (text)\n" + global.config.PREFIX + "lexi (text)\n" + global.config.PREFIX + "trump (text)\n" + global.config.PREFIX + "info\n____________________________________\nযেকোনো অভিযোগ অথবা হেল্প এর জন্য আমার BOSS \n🇦 🇳 🇮 🇰  কে নক করতে পারেন \n👉FB link: https://www.facebook.com/tomago.king.vaya\n-\n",
      'attachment': _0x102089.createReadStream(__dirname + '/cache/joinmp4/emon1.mp4')
    }, _0x5ecf5d));
  } else {
    try {
      const {
        createReadStream: _0x2037da,
        existsSync: _0x109700,
        mkdirSync: _0x29b273,
        readdirSync: _0xf1a901
      } = global.nodemodule["fs-extra"];
      let {
        threadName: _0xee35a9,
        participantIDs: _0x36023f
      } = await _0x232968.getThreadInfo(_0x5ecf5d);
      const _0x4620ec = global.data.threadData.get(parseInt(_0x5ecf5d)) || {};
      const _0x2774ab = _0x49eae6(__dirname, "cache", "joinGif");
      const _0x2b9f88 = _0x49eae6(_0x2774ab, _0x5ecf5d + ".gif");
      var _0x4ccabb = [];
      var _0x46dc66 = [];
      var _0x420185 = [];
      var _0x5aa335 = 0x0;
      for (id in _0x410899.logMessageData.addedParticipants) {
        const _0x460518 = _0x410899.logMessageData.addedParticipants[id].fullName;
        _0x46dc66.push(_0x460518);
        _0x4ccabb.push({
          'tag': _0x460518,
          'id': id
        });
        _0x420185.push(_0x36023f.length - _0x5aa335++);
      }
      _0x420185.sort((_0xfcb520, _0x587f25) => _0xfcb520 - _0x587f25);
      if (typeof _0x4620ec.customJoin == "undefined") {
        msg = "আসসালামু আলাইকুম🌺 🥀༊🤗😻🤗 {name}  😍.\n\n🌸༊🥀۞Wellcome-!!-🌻🥀 To {threadName}\n{type} You are the {soThanhVien} member of this group🌻.\n\n𝄞❤️⋆⃝⑅⑅⃝•BOT OWNER♥🖤 𝔸ℕ𝕀𝕂 ℂℍ𝕆𝕎𝔻𝕌ℝ𝕐 and 𝕊𝔸𝔻𝕀𝕂𝕌ℝℝ𝔸ℍ𝕄𝔸ℕ-𝕊𝔸ℍ𝕀𝔻❤️😇Never Try To Spam Here🚫\n\n 『𝐀𝐍𝐈𝐊 𝐂𝐇𝐎𝐖𝐃𝐔𝐑𝐘♥ 𝐒𝐀𝐃𝐈𝐊𝐔𝐑𝐑𝐀𝐇𝐌𝐀𝐍 𝐒𝐀𝐇𝐈𝐃 』\n\n🥰 Follow Our Group Rules✅\n\n🤖 Hi I'm CYBER-CAT bot messenger use help to see command 🤖.";
      } else {
        msg = _0x4620ec.customJoin;
      }
      msg = msg.replace(/\{name}/g, _0x46dc66.join(", ")).replace(/\{type}/g, _0x420185.length > 0x1 ? "You" : 'Friend').replace(/\{soThanhVien}/g, _0x420185.join(", ")).replace(/\{threadName}/g, _0xee35a9);
      if (_0x109700(_0x2774ab)) {
        _0x29b273(_0x2774ab, {
          'recursive': true
        });
      }
      const _0x111817 = _0xf1a901(_0x49eae6(__dirname, "cache", "joinGif"));
      if (_0x109700(_0x2b9f88)) {
        formPush = {
          'body': msg,
          'attachment': _0x2037da(_0x2b9f88),
          'mentions': _0x4ccabb
        };
      } else {
        if (_0x111817.length != 0x0) {
          const _0x1fef9f = _0x49eae6(__dirname, "cache", "joinGif', '' + _0x111817[Math.floor(Math.random() * _0x111817.length)]);
          formPush = {
            'body': msg,
            'attachment': _0x2037da(_0x1fef9f),
            'mentions': _0x4ccabb
          };
        } else {
          formPush = {
            'body': msg,
            'mentions': _0x4ccabb
          };
        }
      }
      return _0x232968.sendMessage(formPush, _0x5ecf5d);
    } catch (_0x4f79ff) {
      return console.log(_0x4f79ff);
    }
    ;
  }
};
