module.exports.config = {
  name: "/n",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "goibot",
  category: "noprefix",
  usages: "admin",
  cooldowns: 5
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  var tl = ["😹𝄞বেঁবিঁ আঁসোঁ এঁকঁটুঁ লুঁতুঁপুঁতুঁ খেঁলিঁ"𝄞🤢🥴🤏","‎❈🌺⋆⃝༎যৌ্ঁব্ঁনে্ঁর্ঁ||ক্ঁস্ঁম্ঁ||কে্ঁউ্ঁ|🤸😒আ্ঁমা্ঁরে্ঁ__প্ঁটা্ঁ🥺🐸⋆⃝༎","jang hanga korba 🙂🖤","iss ato dako keno lojja lage to 🫦🙈"," আ্ঁই্ঁডি্ঁতে্ঁ স্ঁব্ঁ ও্ঁয়া্ঁক্ঁ থু্ঁ🤧 ও্ঁয়া্ঁক্ঁ থু্ঁ 🤧বু্ঁই্ঁড়া্ঁ বু্ঁই্ঁরা্ঁ বে্ঁডিঁ *💯🥹","⎯͢⎯⃝🍒 আ্ঁমি্ঁ ন্ঁষ্ট্ঁ ম্ঁনে্ঁ ন্ঁষ্ট্ঁ চো্ঁখে্ঁ দে্ঁখি্ঁ তো্ঁমা্ঁকে্ঁ ম্ঁন্ঁ আ্ঁমা্ঁর্ঁ কি্ঁ চা্ঁয়্ঁ বু্ঁঝা্ঁয়্ঁ কে্ঁম্ঁনে্ঁ? ⎯͢⎯⃝👅🥵🙈"," ❥︎⃝┄┉𝄟⃟≛⃝💙 তো্ঁমা্ঁরে্ঁ ভা্ঁল্লা্ঁগ্ঁছে্ঁ চো্ঁনা্ঁঁ আ্ঁই্ঁ লা্ঁভু্ঁ🥱 💙⃝⃝ꔹ⃟𝄟❈┉ꔹ– ⃝❥︎😁","⎯͢⎯⃝জি্ঁব্ঁন্ঁ সু্ঁন্দ্ঁর্ঁ জ্ঁদি্ঁ আ্ঁমা্ঁকে্ঁ প্ঁটি্ঁয়ে বি্ঁয়ে্ঁ ক্ঁর্ঁতে্ঁ পা্ঁরো্ঁ,🙈😾⎯͢⎯⃝😁😸","আৃঁমিৃঁ প্রৃঁচুৃঁরৃঁ লুৃঁচ্চাৃঁ 🥴____নিৃঁজেৃঁরৃঁ মুৃঁখেৃঁ পৃঁড়াৃঁরৃঁ জৃঁন্যৃঁ ধৃঁন্যৃঁবাৃৃঁদৃঁ 🙅😒"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  if (event.body.indexOf("/n") == 0 || (event.body.indexOf("/N") == 0)) {
    var msg = {
      body: `╭────────────❍\n╰➤ 👤 𝐃𝐞𝐚𝐫 『 ${name} 』,\n╰➤ 🗣️${rand}\n╰─────────────────➤`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}
module.exports.run = function({ api, event, client, __GLOBAL }) { }
