module.exports.config = {
  name: "Obot",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "goibot",
  prefix: false,
  category: "noprifix",
  usages: "noprifix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  
  var _0x4f8f33 = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 ", "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺", "আমি আবাল দের সাথে কথা বলি না,ok😒", "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈", "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 ", "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?", "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬", "I love you janu🥰", "আরে Bolo আমার জান ,কেমন আছো?😚 ", "Bot বলে অসম্মান করছি,😰😿", "Hop beda😾,Boss বল boss😼", "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু", "Bot না , জানু বল জানু 😘 ", "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋", "বোকাচোদা এতো ডাকিস কেন🤬", "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 ", "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒", "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘", "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣", "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 ", "আমাকে ডেকো না,আমি ব্যাস্ত আছি", "কি হলো , মিস্টেক করচ্ছিস নাকি🤣", "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏", "কালকে দেখা করিস তো একটু 😈", "হা বলো, শুনছি আমি 😏", "আর কত বার ডাকবি ,শুনছি তো", "হুম বলো কি বলবে😒", "বলো কি করতে পারি তোমার জন্য", "আমি তো অন্ধ কিছু দেখি না🐸 😎", "Bot না জানু,বল 😌", "বলো জানু 🌚", "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒", "হুম জান তোমার ওই খানে উম্মহ😑😘", "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘", " jang hanga korba😒😬", "হুম জান তোমার অইখানে উম্মমাহ😷😘", "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰", "আমাকে এতো না ডেকে বস অনিক কে একটা Gf দে 🙄", "যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস অনিক এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗", "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈", " জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂"];
  var _0x3b9962 = _0x4f8f33[Math.floor(Math.random() * _0x4f8f33.length)];
  if (_0x35601e.body.toLowerCase() == "miss you bot" || _0x35601e.body.toLowerCase() == "miss you") {
    return _0x4ad7dc.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  : ) 🎀 🍒:))", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == '😘' || _0x35601e.body.toLowerCase() == '😽') {
    return _0x4ad7dc.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == '👍🏼' || _0x35601e.body.toLowerCase() == '👍') {
    return _0x4ad7dc.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "sim" || _0x35601e.body.toLowerCase() == 'simsimi') {
    return _0x4ad7dc.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'hi' || _0x35601e.body.toLowerCase() == 'hello' || _0x35601e.body.toLowerCase() == "hlw" || _0x35601e.body.toLowerCase() == 'helo') {
    return _0x4ad7dc.sendMessage("এত হাই-হ্যালো চুদাছ কেনো ..!🍆⛏️🐸🤣", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'bc' || _0x35601e.body.toLowerCase() == 'mc') {
    return _0x4ad7dc.sendMessage("SAME TO YOU😊 ", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "pro" || _0x35601e.body.toLowerCase() == 'lol') {
    return _0x4ad7dc.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'morning' || _0x35601e.body.toLowerCase() == "good morning") {
    return _0x4ad7dc.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "/bot link" || _0x35601e.body.toLowerCase() == "/bot file ") {
    return _0x4ad7dc.sendMessage(" (botlink) _:  (https://replit.com/@sadikurrahmansa/Mein-bot#.replit) (extension link)_ (https://www.mediafire.com/file/3xfw3al3pe47hfl/c3c-fbstate-1.3.zip/file )কোনো সমস্যা হলে আমার বস অনিক কে নক করুন 👉🏻👇🏻https://www.facebook.com/tomago.king vaya", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "anik vai" || _0x35601e.body.toLowerCase() == "অনিক ভাই" || _0x35601e.body.toLowerCase() == "অনিক" || _0x35601e.body.toLowerCase() == 'anik') {
    return _0x4ad7dc.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'owner' || _0x35601e.body.toLowerCase() == "ceo") {
    return _0x4ad7dc.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐒𝐀𝐃𝐈𝐊𝐔𝐑𝐑𝐀𝐇𝐌𝐀𝐍 𝐒𝐀𝐇𝐈𝐃(✷‿✷)☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐓𝐎𝐌.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/tomago.king.vaya\nতার সাতে যোগা যোগ করবেন WhatsApp :- +60 11-6**** 3803", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "tor boss ke" || _0x35601e.body.toLowerCase() == "admin ke ") {
    return _0x4ad7dc.sendMessage("My Creator:𝐒𝐀𝐃𝐈𝐊𝐔𝐑𝐑𝐀𝐇𝐌𝐀𝐍 𝐒𝐀𝐇𝐈𝐃 ❤️/n হাই আমি মেছেন্জার ROBOT  আামার বস অনিক আমাকে আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য/n আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "adbmin" || _0x35601e.body.toLowerCase() == "bolr admin") {
    return _0x4ad7dc.sendMessage("He is 𝐌𝐀𝐓𝐀 𝐓𝐎𝐌 ❤️/n তাকে সবাই 𝐓𝐎𝐌(✷‿✷)নামে  চিনে🤙", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'bhabi' || _0x35601e.body.toLowerCase() == "vabi") {
    return _0x4ad7dc.sendMessage("এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'chup' || _0x35601e.body.toLowerCase() == "stop" || _0x35601e.body.toLowerCase() == "চুপ কর" || _0x35601e.body.toLowerCase() == "chup kor") {
    return _0x4ad7dc.sendMessage("তুই চুপ তোর ১৪ গুষ্টি চুপ😼", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "আসসালামু আলাইকুম" || _0x35601e.body.toLowerCase() == "Assalamualaikum" || _0x35601e.body.toLowerCase() == "Assalamu alaikum" || _0x35601e.body.toLowerCase() == "salam ") {
    return _0x4ad7dc.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'dhur' || _0x35601e.body.toLowerCase() == "baler robot" || _0x35601e.body.toLowerCase() == "kpl" || _0x35601e.body.toLowerCase() == "opoman korli") {
    return _0x4ad7dc.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "sumaiya" || _0x35601e.body.toLowerCase() == "megla borsha") {
    return _0x4ad7dc.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস অনিক এর বউ এর নাম..!😠🥰⛏️", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "KISS ME" || _0x35601e.body.toLowerCase() == "kiss me") {
    return _0x4ad7dc.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "tnx" || _0x35601e.body.toLowerCase() == "ধন্যবাদ" || _0x35601e.body.toLowerCase() == "thank you" || _0x35601e.body.toLowerCase() == "thanks") {
    return _0x4ad7dc.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == '😡' || _0x35601e.body.toLowerCase() == '😤' || _0x35601e.body.toLowerCase() == '😠' || _0x35601e.body.toLowerCase() == '🤬' || _0x35601e.body.toLowerCase() == '😾') {
    return _0x4ad7dc.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'hm' || _0x35601e.body.toLowerCase() == "hmm") {
    return _0x4ad7dc.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "name" || _0x35601e.body.toLowerCase() == "name" || _0x35601e.body.toLowerCase() == "tumar nam ki") {
    return _0x4ad7dc.sendMessage("️MY NAME IS °_>👅-✘ robot🤖 : ) 🎀 🍒", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "BOT ER BACCHA" || _0x35601e.body.toLowerCase() == "বট এর বাচ্চা বট") {
    return _0x4ad7dc.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "pic de" || _0x35601e.body.toLowerCase() == "ss dew") {
    return _0x4ad7dc.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "moriom" || _0x35601e.body.toLowerCase() == 'ex') {
    return _0x4ad7dc.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "cudi" || _0x35601e.body.toLowerCase() == "tor nani re xudi") {
    return _0x4ad7dc.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == '🙂' || _0x35601e.body.toLowerCase() == '🙃') {
    return _0x4ad7dc.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == '😒' || _0x35601e.body.toLowerCase() == '🙄') {
    return _0x4ad7dc.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "AMAKE KEW VALOBASHE NA" || _0x35601e.body.toLowerCase() == "amake kew valobashe na" || _0x35601e.body.toLowerCase() == "Aj kew nai bole") {
    return _0x4ad7dc.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'gf' || _0x35601e.body.toLowerCase() == 'bf') {
    return _0x4ad7dc.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == '😂' || _0x35601e.body.toLowerCase() == '😁' || _0x35601e.body.toLowerCase() == '😆' || _0x35601e.body.toLowerCase() == '🤣' || _0x35601e.body.toLowerCase() == '😸' || _0x35601e.body.toLowerCase() == '😹') {
    return _0x4ad7dc.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == '🥰' || _0x35601e.body.toLowerCase() == '😍' || _0x35601e.body.toLowerCase() == '😻' || _0x35601e.body.toLowerCase() == '❤️') {
    return _0x4ad7dc.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে অনিক এর ইনবক্সে চলে যাও‌ ভক্ত এখানে কি 🌚🐸🌶️🍆", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "কেমন আছো" || _0x35601e.body.toLowerCase() == "কেমন আছেন" || _0x35601e.body.toLowerCase() == "Kemon acho" || _0x35601e.body.toLowerCase() == "how are you" || _0x35601e.body.toLowerCase() == "how are you?") {
    return _0x4ad7dc.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "mon kharap" || _0x35601e.body.toLowerCase() == "tmr ki mon kharap") {
    return _0x4ad7dc.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "i love you" || _0x35601e.body.toLowerCase() == "Love you" || _0x35601e.body.toLowerCase() == "I Love You" || _0x35601e.body.toLowerCase() == "ভালোবাসি" || _0x35601e.body.toLowerCase() == "i love you") {
    return _0x4ad7dc.sendMessage("হুম আমার বস ANIK ও তেমাকে ভালোবাসে🥰🥱", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == 'by' || _0x35601e.body.toLowerCase() == "bye" || _0x35601e.body.toLowerCase() == "jaiga" || _0x35601e.body.toLowerCase() == 'বাই' || _0x35601e.body.toLowerCase() == "pore kotha hbe" || _0x35601e.body.toLowerCase() == "যাই গা") {
    return _0x4ad7dc.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "tmi khaiso" || _0x35601e.body.toLowerCase() == "kheyeso") {
    return _0x4ad7dc.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "tumi ki amake bhalobaso" || _0x35601e.body.toLowerCase() == "tmi ki amake vlo basho") {
    return _0x4ad7dc.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", _0x3f458b);
  }
  ;
  if (_0x35601e.body.toLowerCase() == "ami sohag" || _0x35601e.body.toLowerCase() == "kire") {
    return _0x4ad7dc.sendMessage("হ্যাঁ অনিক কলিজা ভালো আছো?", _0x3f458b);
  }
  ;
  mess = "{name}";
  if (_0x35601e.body.indexOf("Bot") == 0x0 || _0x35601e.body.indexOf("bot") == 0x0) {
    var _0x448a2c = {
      'body': _0x30a8b5 + ", " + _0x3b9962
    };
    return _0x4ad7dc.sendMessage(_0x448a2c, _0x3f458b, _0x5015c0);
  }
  ;
};
module.exports.run = function ({
  api: _0x1f35de,
  event: _0x4e3744,
  client: _0x2367e5,
  __GLOBAL: _0x27722b
}) {};
