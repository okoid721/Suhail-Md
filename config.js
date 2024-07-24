const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="okoid721@gmail.com"
global.location="Nigeria,lagos."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://okoid721:okoid721@cluster0.kplr4hx.mongodb.net/?retrywrites=true&w=majority&appname=cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/L7IbXqksbCN2kewjWhI1Uz";
global.website=process.env.GURL || "https://chat.whatsapp.com/L7IbXqksbCN2kewjWhI1Uz" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "welcome" 


global.devs = "2348058406594" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348058406594";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348058406594,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_04_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNhNzRJeFBkN1FwZmFhVDZBdjZSS3FYNE5RVWp1V25paXU0MVJ6U2dmcWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZfblkzTVRWUkkyTzl5Z1hwbjRRTXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTMxZTRhZmQtZDdiZi00OWMzLWIyZmUtYjg2YzUwZDRiMmIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDEzNSxcbiAgICAgIDY2LFxuICAgICAgMTcsXG4gICAgICA2LFxuICAgICAgMTAzLFxuICAgICAgMTUyLFxuICAgICAgMTc1LFxuICAgICAgMTEsXG4gICAgICAyMTQsXG4gICAgICAxOTUsXG4gICAgICAyNDMsXG4gICAgICAxNDcsXG4gICAgICAxMTUsXG4gICAgICAxMzMsXG4gICAgICA2MyxcbiAgICAgIDM4LFxuICAgICAgMjcsXG4gICAgICA4NSxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTU5LFxuICAgICAgMTIzLFxuICAgICAgMjEyLFxuICAgICAgNDcsXG4gICAgICAxMzUsXG4gICAgICAxNDYsXG4gICAgICAyNDMsXG4gICAgICAxMDAsXG4gICAgICAxNTYsXG4gICAgICAyMTYsXG4gICAgICAxMTEsXG4gICAgICAxMDQsXG4gICAgICAyNDQsXG4gICAgICA0MixcbiAgICAgIDEzNSxcbiAgICAgIDEzNyxcbiAgICAgIDExOSxcbiAgICAgIDE2OSxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFh2NVpBQkVLV0VoYlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFVHVLVFM2dEU5SnBUTkdXZmdTYUJIU1JTWGRIT01sZXI0d2FialF4WVdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtFMUN6WnUxa2pBalVxdG9YTXlrZ0pjaUdLZlFyL1lMWG5ESFZBcFpsaDg3RWlXUzFsNDVmNk5Jc2E5emxxNHFPaG5IVno1c0NWQlZlNXZHdUg3ZkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNISCtHVTdNNW9NTGsxTU1POFE5TVhDR2RzQkVHM0FnNEorVExXYUhlSlBQVXp2QmtNMG1XV09oRlVMWU1xM0wwRHB1TFBnUFVyWllscU9HeHNUV2h3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1ODQwNjU5NDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29kZXIgdGVjaFwiLFxuICAgIFwibGlkXCI6IFwiNDEwODYxMjY5MTU2NTA6N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTg0MDY1OTQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg0NDI2N1xufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "King-dave",
  packname: process.env.PACK_NAME || "😎",
  botname : process.env.BOT_NAME  || "Bug",
  ownername:process.env.OWNER_NAME|| "David",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
