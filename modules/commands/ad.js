module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Thông Tin Admin.",
  commandCategory: "Tiện Ích",
  usages: "Admin",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://scontent.xx.fbcdn.net/v/t1.15752-9/291692657_746777806649260_2089783649527698650_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=yO0DB2sSUGcAX_-153e&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIQEo1tROgPIuhL7xko3EAKiDzbkxD4_5HV0oD5Ze-qgQ&oe=62EC9502",
    ];
  var callback = () => api.sendMessage({body:`𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗔𝗱𝗺𝗶𝗻 𝗥𝘆𝗼
  👀 𝗧𝗲̂𝗻: Dương Tấn Phát
  ❎ 𝗧𝘂𝗼̂̉𝗶: 13
  👤 𝗚𝗶𝗼̛́𝗶 𝗧𝗶́𝗻𝗵: 𝗡𝗮𝗺
  🙄 𝗦𝗶𝗻𝗵 𝗡𝗴𝗮̀𝘆: 5/4/2009
  💫 𝗖𝗵𝗶𝗲̂̀𝘂 𝗖𝗮𝗼 1m64
  😈 𝗖𝗮̂𝗻 𝗡𝗮̣̆𝗻𝗴 55𝗸𝗴
  💘 𝗠𝗼̂́𝗶 𝗤𝘂𝗮𝗻 𝗛𝗲̣̂ :  𝗞𝗵𝗼̂𝗻𝗴 𝗠𝗼̣̂𝘁 𝗔𝗶
  😎 𝗤𝘂𝗲̂ 𝗤𝘂𝗮́𝗻 Trái Đất
  ✨ 𝗡𝗼̛𝗶 𝗢̛̉ Tây Ninh
  🌸 𝗖𝘂𝗻𝗴:  𝗞𝗵𝗼̂𝗻𝗴 𝗡𝗵𝗼̛́
  👫 𝗚𝘂: 𝗖𝘂𝘁𝗲  /  𝗗𝗲̂̃ 𝗖𝗵𝗶𝗲̂̀𝘂 / 𝗞𝗵𝗼̂𝗻𝗴 𝗤𝘂𝗮́ 𝗡𝗴𝘂 =)))
  😎 𝗦𝗼̛̉ 𝗧𝗵𝗶́𝗰𝗵: ....
  🌸 𝗧𝗶́𝗻𝗵 𝗖𝗮́𝗰𝗵: quen lâu rồi bic
  📱 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: dtphat0504
[ 🎊 ]=== [ ℝ𝕪𝕠 𝔹𝕠𝕥 ] ===[ 🎊 ]
➣𝗡𝗲̂́𝘂 𝗕𝗮̣𝗻 𝗧𝗵𝗶́𝗰𝗵 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 𝗕𝗼𝘁 𝗖𝘂̉𝗮 𝗥𝘆𝗼 
➣𝗖𝗼́ 𝗧𝗵𝗲̂̉ 𝗗𝗼𝗻𝗮𝘁𝗲 𝗢̛̉ 𝗗𝘂̛𝗼̛́𝗶𝗶
💳𝐌𝐁:    𝐍𝐞𝐱𝐭
💳𝐕𝐂𝐁:    𝐍𝐞𝐱𝐭
🪙𝐌𝐎𝐌𝐎: 0762913726
[ 🎊 ]=== [ ℝ𝕪𝕠 𝔹𝕠𝕥 ] ===[ 🎊 ]`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tphat.mp4")).on("close",() => callback());
   };
 