module.exports.config = {
  'name': "janu",
  prefix: true,
  'version': "1.0.0",
  'permssion': 0x0,
  'credits': "Islamick Chat",
  'refix': false,
  'description': "Talk to sim",
  'category': "janu",
  'usages': "[ask]",
  'cooldowns': 0x2
};
module.exports.run = async function ({
  api: _0x4d50c4,
  event: _0x159437,
  args: _0x1a5813
}) {
  const _0x5b058e = require("axios");
  const _0x163062 = encodeURIComponent(_0x1a5813.join(" "));
  if (!_0x1a5813[0]) {
    return _0x4d50c4.sendMessage("হুম জান বলো কি বলবা-!!❤️✌️", _0x53d453, _0x32d098);
  }
  try {
    const _0x326148 = await _0x5b058e.get("https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=" + _0x163062 + "&filter=true");
    const _0x14ad25 = _0x326148.data.success;
    if (_0x326148.data.error) {
      _0x4d50c4.sendMessage("Error: " + _0x326148.data.error, _0x53d453, (_0x181f10, _0x31fbd7) => {
        if (_0x181f10) {
          console.error(_0x181f10);
        }
      }, _0x32d098);
    } else {
      _0x4d50c4.sendMessage(_0x14ad25, _0x53d453, (_0x54a9e1, _0x374d49) => {
        if (_0x54a9e1) {
          console.error(_0x54a9e1);
        }
      }, _0x32d098);
    }
  } catch (_0x47b0f8) {
    console.error(_0x47b0f8);
    _0x4d50c4.sendMessage("ki bolo kichui buji nah jan 😐", _0x53d453, _0x32d098);
  }
};
