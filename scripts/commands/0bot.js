module.exports.config = {
  'name': "Obot",
 prefix: true, 
  'version': "1.0.1",
  'permssion': 0x0,
  'credits': "Mod by John Lester",
  'description': "goibot",
  'category': 'Noprefix',
  'usages': "noprefix",
  'cooldowns': 0x5
};
module.exports.handleEvent = async function ({
  api: _0x4ad7dc,
  event: _0x35601e,
  args: _0x49ccc3,
  Threads: _0x2f490f,
  Users: _0x414455
}) {
  var _0x30a8b5 = await _0x414455.getNameUser(_0x35601e.senderID);
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
    return _0x4ad7dc.sendMessage("
