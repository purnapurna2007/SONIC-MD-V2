function _0x5f00(_0x32d8ee,_0x52d1dd){const _0x232599=_0x2325();return _0x5f00=function(_0x5f002e,_0xdc9229){_0x5f002e=_0x5f002e-0x1bf;let _0x292ea8=_0x232599[_0x5f002e];return _0x292ea8;},_0x5f00(_0x32d8ee,_0x52d1dd);}const _0x54291c=_0x5f00;(function(_0x161741,_0x4c3212){const _0x5961d0=_0x5f00,_0x415eff=_0x161741();while(!![]){try{const _0x1be011=parseInt(_0x5961d0(0x1d0))/0x1*(-parseInt(_0x5961d0(0x1e6))/0x2)+-parseInt(_0x5961d0(0x1c4))/0x3*(parseInt(_0x5961d0(0x1ce))/0x4)+parseInt(_0x5961d0(0x20a))/0x5+-parseInt(_0x5961d0(0x203))/0x6+parseInt(_0x5961d0(0x1f1))/0x7+-parseInt(_0x5961d0(0x1c0))/0x8+parseInt(_0x5961d0(0x204))/0x9*(parseInt(_0x5961d0(0x200))/0xa);if(_0x1be011===_0x4c3212)break;else _0x415eff['push'](_0x415eff['shift']());}catch(_0x3c7e79){_0x415eff['push'](_0x415eff['shift']());}}}(_0x2325,0x56163));function _0x2325(){const _0x1c74a2=['❌\x20Please\x20mention\x20any\x20user\x20','addnote','*A\x20bot\x20developed\x20by\x20KALINDU.*','53790CxiFet','true','url','3659136VooMGJ','2493DVQfcX','downloadAndSaveMediaMessage','\x0a}\x0aa()','*Translated\x20text:*\x0a','sendMessage','----\x0a\x0a','2093115ahtqdc','updateOne','util','save','name','general','\x27s\x20note\x20has\x20been\x20deleted\x20from\x20mongodb.','text','unban','format','log','\x20is\x20already\x20unbanned.','_\x0a\x0a*Owner:-*\x20_','../lib/scraper','Translate\x27s\x20given\x20text\x20in\x20desird\x20language.','All\x20Available\x20Notes\x20are:-\x0a\x0a','Secktor\x20Session','../lib','New\x20note\x20','4696608wPqIvH','toLowerCase','Shows\x20list\x20of\x20all\x20notes.','https://citel-x.herokuapp.com/session','6IfMYWc','reply','trt\x20en\x20Who\x20are\x20you_*','eval','Get\x20you\x20Session\x20ID','child_process','🔍\x20Please\x20provide\x20me\x20a\x20valid\x20gist\x20url.','ban','\x20Session','Please\x20mention\x20any\x20user.❌\x20','78916KrFxYJ','Unbans\x20banned\x20user\x20(from\x20using\x20bot).','16tmKYcx','auto','chat','Uhh\x20Please,\x20Reply\x20To\x20An\x20Image/Video','\x20from\x20Using\x20Commands._','misc','This\x20command\x20is\x20onlt\x20for\x20my\x20Owner','footer','imageMessage','Id:\x20','Your\x20session\x20is\x20over\x20now.','title','----','ownername','participant','*_Scan\x20Qr\x20within\x2015\x20seconds_*\x0aYou\x27ll\x20get\x20session\x20id\x20in\x20your\x20log\x20number.','Deletes\x20note\x20from\x20db.','unlinkSync','stringify','\x0a*Hello,\x20','replace','findOne','69774GoxjCS','const\x20a\x20=\x20async()=>{\x0a','pushName','object','mentionedJid','toString','delallnotes','videoMessage','owner','Deletes\x20all\x20notes\x20from\x20db.','greet','1670109gxnSgu','_Banned\x20','Please\x20mention\x20any\x20user.❌','split','quoted','Runs\x20command\x20in\x20Heroku(server)\x20shell.','is\x20bot\x20alive??','then','msg','Sends\x20CitelsVoid\x20Qr\x20code\x20to\x20scan\x20and\x20get\x20your\x20session\x20id.','translate','getName'];_0x2325=function(){return _0x1c74a2;};return _0x2325();}const {addnote,cmd,sck1,delnote,allnotes,delallnote,tlang,botpic,runtime,prefix,Config,sleep}=require(_0x54291c(0x21b)),{TelegraPh}=require(_0x54291c(0x217)),util=require(_0x54291c(0x20c));cmd({'pattern':_0x54291c(0x1fe),'category':_0x54291c(0x1ee),'desc':'Adds\x20a\x20note\x20on\x20db.','filename':__filename},async(_0x53d2fc,_0x34da8c,_0x589467,{isCreator:_0x4fa9a7})=>{const _0x3f47f6=_0x54291c;if(!_0x4fa9a7)return _0x34da8c[_0x3f47f6(0x1c5)](tlang()[_0x3f47f6(0x1ee)]);if(!_0x589467)return _0x34da8c['reply'](_0x3f47f6(0x1ca));return await addnote(_0x589467),_0x34da8c[_0x3f47f6(0x1c5)](_0x3f47f6(0x1bf)+_0x589467+'\x20added\x20in\x20mongodb.');}),cmd({'pattern':'qr','category':_0x54291c(0x1ee),'filename':__filename,'desc':_0x54291c(0x1fa)},async(_0x49c6ac,_0x3923a9,_0x2f9670)=>{const _0x3f6373=_0x54291c;if(_0x2f9670){let _0x5ed575=await getBuffer('https://api.qrserver.com/v1/create-qr-code/?size=500x500&data='+_0x2f9670);await _0x49c6ac['sendMessage'](_0x3923a9[_0x3f6373(0x1d2)],{'image':_0x5ed575});return;}let _0x25b8fc={'image':{'url':_0x3f6373(0x1c3)},'caption':_0x3f6373(0x1df),'footer':_0x3f6373(0x1cc),'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x3f6373(0x21a),'body':_0x3f6373(0x1c8),'thumbnail':log0,'mediaType':0x2,'mediaUrl':'','sourceUrl':''}}};return await _0x49c6ac[_0x3f6373(0x208)](_0x3923a9['chat'],_0x25b8fc,{'quoted':_0x3923a9}),await sleep(0x14*0x3e8),_0x3923a9[_0x3f6373(0x1c5)](_0x3f6373(0x1da));}),cmd({'pattern':_0x54291c(0x212),'category':'misc','filename':__filename,'desc':_0x54291c(0x1cf)},async(_0x326952,_0x339d94,_0x41718e,{isCreator:_0x4cec49})=>{const _0x514574=_0x54291c;if(!_0x4cec49)return _0x339d94[_0x514574(0x1c5)](_0x514574(0x1d6));try{let _0x53e7c0=_0x339d94[_0x514574(0x1ea)]?_0x339d94[_0x514574(0x1ea)][0x0]:_0x339d94[_0x514574(0x1f9)]['contextInfo'][_0x514574(0x1de)]||![];if(!_0x53e7c0)return _0x339d94[_0x514574(0x1c5)](_0x514574(0x1f3));let _0xa5b21b=_0x326952[_0x514574(0x1fc)](_0x53e7c0);sck1[_0x514574(0x1e5)]({'id':_0x53e7c0})[_0x514574(0x1f8)](async _0x3daf84=>{const _0xbd520c=_0x514574;if(!_0x3daf84)return console['log'](_0x3daf84['ban']),_0x339d94[_0xbd520c(0x1c5)](_0xa5b21b+'\x20is\x20unbanned.');else{console[_0xbd520c(0x214)](_0x3daf84[_0xbd520c(0x1cb)]);if(_0x3daf84[_0xbd520c(0x1cb)]!==_0xbd520c(0x201))return _0x339d94[_0xbd520c(0x1c5)](_0x3daf84[_0xbd520c(0x20e)]+_0xbd520c(0x215));return await sck1['updateOne']({'id':_0x53e7c0},{'ban':'false'}),_0x339d94[_0xbd520c(0x1c5)](_0x3daf84['name']+'\x20is\x20free\x20as\x20a\x20bird\x20now');}});}catch{return _0x339d94[_0x514574(0x1c5)](_0x514574(0x1f3));}}),cmd({'pattern':_0x54291c(0x202),'alias':['createurl'],'category':_0x54291c(0x1d5),'filename':__filename,'desc':'image\x20to\x20url.'},async(_0x332648,_0x474631,_0x2f20f8)=>{const _0x6ff799=_0x54291c;if(!_0x474631['quoted'])return await _0x474631[_0x6ff799(0x1c5)]('*Reply\x20To\x20Any\x20Image/Video\x20To\x20Get\x20Url*');let _0xb798f4=_0x474631['quoted']['mtype'];if(_0xb798f4!=_0x6ff799(0x1ed)&&_0xb798f4!=_0x6ff799(0x1d8))return await _0x474631['reply'](_0x6ff799(0x1d3));let _0x2e418e=await _0x332648[_0x6ff799(0x205)](_0x474631[_0x6ff799(0x1f5)]),_0x27f4a4=await TelegraPh(_0x2e418e);return await _0x474631[_0x6ff799(0x1c5)]('*Here\x20is\x20URL\x20of\x20your\x20media.\x0a'+util[_0x6ff799(0x213)](_0x27f4a4)),await fs[_0x6ff799(0x1e1)](_0x2e418e);}),cmd({'pattern':'trt','alias':[_0x54291c(0x1fb)],'category':_0x54291c(0x1d5),'filename':__filename,'desc':_0x54291c(0x218)},async(_0x22976a,_0x3259b7,_0x30e6fd)=>{const _0x4e4ec1=_0x54291c;if(!_0x30e6fd&&!_0x3259b7[_0x4e4ec1(0x1f5)])return await _0x3259b7[_0x4e4ec1(0x1c5)]('*Please\x20Give\x20Me\x20Text.\x20Example:\x20_'+prefix+_0x4e4ec1(0x1c6));const _0x492bce=require('translatte');let _0x1042cc=_0x30e6fd?_0x30e6fd[_0x4e4ec1(0x1f4)]('\x20')[0x0][_0x4e4ec1(0x1c1)]():'en';!_0x3259b7[_0x4e4ec1(0x1f5)]?_0x30e6fd=_0x30e6fd[_0x4e4ec1(0x1e4)](_0x1042cc,''):_0x30e6fd=_0x3259b7[_0x4e4ec1(0x1f5)]['text'];var _0x384713=await _0x492bce(_0x30e6fd,{'from':_0x4e4ec1(0x1d1),'to':_0x1042cc});if('text'in _0x384713)return await _0x3259b7[_0x4e4ec1(0x1c5)](_0x4e4ec1(0x207)+_0x384713[_0x4e4ec1(0x211)]);}),cmd({'pattern':'shell','category':_0x54291c(0x1ee),'filename':__filename,'desc':_0x54291c(0x1f6)},async(_0x44adae,_0x398730,_0xb94196,{isCreator:_0x4a0af0})=>{const _0x281ffa=_0x54291c;if(!_0x4a0af0)return _0x398730[_0x281ffa(0x1c5)](tlang()['owner']);const {exec:_0x2c0334}=require(_0x281ffa(0x1c9));_0x2c0334(_0xb94196,(_0xcbd15e,_0x1f8713)=>{const _0x4b34f3=_0x281ffa;if(_0xcbd15e)return _0x398730['reply']('----'+tlang()[_0x4b34f3(0x1db)]+_0x4b34f3(0x209)+_0xcbd15e);if(_0x1f8713)return _0x398730[_0x4b34f3(0x1c5)](_0x4b34f3(0x1dc)+tlang()[_0x4b34f3(0x1db)]+'----\x0a\x0a'+_0x1f8713);});}),cmd({'pattern':_0x54291c(0x1c7),'category':_0x54291c(0x1ee),'filename':__filename,'desc':'Runs\x20js\x20code\x20on\x20node\x20server.'},async(_0xf588ca,_0x5cfcf9,_0x18a107,{isCreator:_0x56cb4d})=>{const _0x3bdbd1=_0x54291c;if(!_0x56cb4d)return;try{let _0x16a0a1=eval(_0x3bdbd1(0x1e7)+_0x18a107+_0x3bdbd1(0x206));if(typeof _0x16a0a1===_0x3bdbd1(0x1e9))_0x5cfcf9[_0x3bdbd1(0x1c5)](JSON[_0x3bdbd1(0x1e2)](_0x16a0a1));else _0x5cfcf9[_0x3bdbd1(0x1c5)](_0x16a0a1[_0x3bdbd1(0x1eb)]());}catch(_0x56398e){return _0x5cfcf9['reply'](_0x56398e[_0x3bdbd1(0x1eb)]());}}),cmd({'pattern':'delnote','category':_0x54291c(0x1ee),'filename':__filename,'desc':_0x54291c(0x1e0)},async(_0x456f4b,_0x50893c,_0x4c1d8d,{isCreator:_0x363849})=>{const _0xee07ee=_0x54291c,{tlang:_0x4315cb}=require(_0xee07ee(0x217));if(!_0x363849)return _0x50893c['reply'](_0x4315cb()[_0xee07ee(0x1ee)]);return await delnote(_0x4c1d8d[_0xee07ee(0x1f4)]('\x20')[0x0]),_0x50893c['reply'](_0xee07ee(0x1d9)+_0x4c1d8d[_0xee07ee(0x1f4)]('\x20')[0x0]+_0xee07ee(0x210));}),cmd({'pattern':_0x54291c(0x1ec),'category':_0x54291c(0x1ee),'filename':__filename,'desc':_0x54291c(0x1ef)},async(_0x118c33,_0x457aaa,_0x6f2fed,_0xa83f8c)=>{const _0x33eba9=_0x54291c,{tlang:_0x35dcf4}=require(_0x33eba9(0x217));if(!_0xa83f8c)return _0x457aaa[_0x33eba9(0x1c5)](_0x35dcf4()[_0x33eba9(0x1ee)]);return await delallnote(),_0x457aaa[_0x33eba9(0x1c5)]('All\x20notes\x20deleted\x20from\x20mongodb.');}),cmd({'pattern':_0x54291c(0x1cb),'category':_0x54291c(0x1ee),'filename':__filename,'desc':'Bans\x20user\x20from\x20using\x20bot.'},async(_0x580643,_0x5f3482,_0x119001,{isCreator:_0x296c33})=>{const _0x4c3e2d=_0x54291c;if(!_0x296c33)return _0x5f3482[_0x4c3e2d(0x1c5)](tlang()[_0x4c3e2d(0x1ee)]);try{let _0x1aaadb=_0x5f3482['mentionedJid']?_0x5f3482[_0x4c3e2d(0x1ea)][0x0]:_0x5f3482[_0x4c3e2d(0x1f9)]['contextInfo'][_0x4c3e2d(0x1de)]||![];if(!_0x1aaadb)return _0x5f3482[_0x4c3e2d(0x1c5)](_0x4c3e2d(0x1fd)+tlang()[_0x4c3e2d(0x1f0)]+'.');let _0x290aaf=_0x580643[_0x4c3e2d(0x1fc)](_0x1aaadb);sck1[_0x4c3e2d(0x1e5)]({'id':_0x1aaadb})[_0x4c3e2d(0x1f8)](async _0x28665a=>{const _0x4ca24d=_0x4c3e2d;if(!_0x28665a)return await new sck1({'id':_0x1aaadb,'ban':_0x4ca24d(0x201)})[_0x4ca24d(0x20d)](),_0x5f3482[_0x4ca24d(0x1c5)](_0x4ca24d(0x1f2)+_0x28665a[_0x4ca24d(0x20e)]+_0x4ca24d(0x1d4));else{if(_0x28665a[_0x4ca24d(0x1cb)]==_0x4ca24d(0x201))return _0x5f3482[_0x4ca24d(0x1c5)](_0x290aaf+'\x20is\x20already\x20Banned\x20from\x20Using\x20Commands');return await sck1[_0x4ca24d(0x20b)]({'id':_0x1aaadb},{'ban':_0x4ca24d(0x201)}),_0x5f3482[_0x4ca24d(0x1c5)]('_Successfully\x20Banned\x20'+_0x28665a[_0x4ca24d(0x20e)]+_0x4ca24d(0x1d4));}});}catch(_0x5d3022){return console[_0x4c3e2d(0x214)](_0x5d3022),_0x5f3482[_0x4c3e2d(0x1c5)](_0x4c3e2d(0x1cd));}}),cmd({'pattern':'alive','category':_0x54291c(0x20f),'filename':__filename,'desc':_0x54291c(0x1f7)},async(_0x249d6b,_0x502006,_0x607381,_0xed7c2e)=>{const _0x5b0a58=_0x54291c;let _0x4559d1=Config['ALIVE_MESSAGE']||_0x5b0a58(0x1ff);const _0x41bef9=_0x5b0a58(0x1e3)+_0x502006[_0x5b0a58(0x1e8)]+',*\x0a\x0a*Version:-*\x20_0.0.1_\x0a\x0a*Uptime:-*\x20_'+runtime(process['uptime']())+_0x5b0a58(0x216)+Config[_0x5b0a58(0x1dd)]+'_\x0a\x0a▬▬▬▬▬▬▬▬▬▬▬▬\x0a\x0a\x20\x20\x20\x20\x20\x20\x20💚‿ʜᴇʟʟᴏ‿❤️\x0a\x20\x0a►\x20ɪ\x27ᴀᴍ\x20ᴏɴʟɪɴᴇ\x20ɴᴏᴡ...🦸‍♂️\x0a\x0a►\x20ᴍʏ\x20ɴᴀᴍᴇ\x20ɪꜱ\x20𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂𝟺𝟸\x20𝙱𝙾𝚃\x20...🤖\x0a\x0a►\x20ᴄʀᴀᴇᴛᴇᴅ\x20ʙʏ\x20𝙺𝚁𝙴𝚂𝚂𝚆𝙴𝙻𝙻...💗\x0a\x0a►\x20ʜᴏᴡ\x20ᴄᴀɴ\x20ɪ\x20ʜᴇʟᴘ\x20ʏᴏᴜ...💃\x0a\x0a►\x20ᴛʏᴘᴇ\x20.menu\x20ᴛᴏ\x20ɢᴇᴛ\x20ᴍʏ\x20ꜰᴜʟʟ\x20ᴄᴏᴍᴍᴀᴍᴅ\x20ʟɪꜱᴛ...🦚\x20\x0a\x0a▬▬▬▬▬▬▬▬▬▬▬▬\x0a\x0a';let _0x2cdabe={'image':{'url':await botpic()},'caption':_0x41bef9,'footer':tlang()[_0x5b0a58(0x1d7)],'headerType':0x4};return _0x249d6b[_0x5b0a58(0x208)](_0x502006[_0x5b0a58(0x1d2)],_0x2cdabe,{'quoted':_0x502006});}),cmd({'pattern':'allnotes','category':_0x54291c(0x1ee),'filename':__filename,'desc':_0x54291c(0x1c2)},async(_0x20346e,_0x3b1c4d,_0x8859de,{isCreator:_0x289620})=>{const _0x540d03=_0x54291c,{tlang:_0x272682}=require('../lib');if(!_0x289620)return _0x3b1c4d[_0x540d03(0x1c5)](_0x272682()['owner']);const _0x4d30e7=new Array();let _0x2c2b09=_0x540d03(0x219);return _0x2c2b09+=await allnotes(),_0x3b1c4d[_0x540d03(0x1c5)](_0x2c2b09);});
