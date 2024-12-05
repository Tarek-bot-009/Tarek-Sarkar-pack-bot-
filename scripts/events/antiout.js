module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Nazrul",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস😞😞😞😞\n${name}\nব্লক করছে অথবা তার আইডিতে মেসেজ অপশন নাই তাই এড করতে পারলাম না😞😞\n✢━━━━━━━━━━━━━━━✢\n ----❖----- Tarek -----❖----`, event.threadID)
   } else api.sendMessage(`lift নেওয়া  ${name}  কে  পুনরায় এ্যাড করা হইছে\n✢━━━━━━━━━━━━━━━✢\n ----❖----- Tarek -----❖----`,

 event.threadID);
  })
 }
                     }
