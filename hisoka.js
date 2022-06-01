require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@danielteodoro/baileys-md')
const fs = require('fs')
const util = require('util')
const cheerio = require('cheerio')
const chalk = require('chalk')
const yts = require('yt-search')
const kbbi = require('kbbi-scraper')
const fetch = require('node-fetch')
const ggs = require('google-it')
const axios = require('axios')
const path = require('path')
const os = require('os')
const Math_js = require('mathjs')
const moment = require('moment-timezone')
const speed = require('performance-now')
const stres = require('./lib/stres.js')
//━━━━━━━━━━━━━━━[ MODULE ]━━━━━━━━━━━━━━━━━//
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { Primbon } = require('scrape-primbon')
const { maker, photooxy, ephoto } = require('./lib/photooxy.js')
const { ep } = require('./lib/ephoto.js')
const primbon = new Primbon()
const { exec, spawn, execSync } = require("child_process")
const { JSDOM } = require('jsdom')
const { performance } = require('perf_hooks')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { namaninja, blackpill, purba, typewriter, castle, sans } = require('./lib/generator')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { gempa,
covid,
upload,
tiktoksearch,
linkwa,
trendtwit,
igstalk,
webp2gifFile,
playstore,
wiki,
artinama,
merdeka,
pinterest,
quotesAnime,
katabijak,
mediafire,
sfilesearch,
stickersearch,
kompas,
antaranews,
suaracom,
wallpaper,
wallpaperv2,
liputan6,
cnbid,
googleImage,
stickerTelegram,
lirikLagu,
tsunami,
textmaker,
apkmiror,
happymod,
inews,
jadwalbola,
surahscrap } = require('./lib/scraper')
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
apikey = JSON.parse(fs.readFileSync('./src/apikey.json'))
hit_today = []
global.hit = {}
modelmenu = 'image'
fake = 'Steal - Bot'
ley = apikey.ley
chipa = apikey.chipa
bsbt = apikey.bsbt
viko = apikey.viko
viko2 = apikey.viko2
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//
module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.includes(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "-"
const botNumber = await hisoka.decodeJid(hisoka.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const sender = m.sender
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
//━━━━━━━━━━━━━━━[ GROUP ]━━━━━━━━━━━━━━━━━//
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
//━━━━━━━━━━━━━━━[ AFK ]━━━━━━━━━━━━━━━━━//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}
//━━━━━━━━━━━━━━━[ AUTOBIO ]━━━━━━━━━━━━━━━━━//
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
}
} catch (err) {
console.error(err)
}
//━━━━━━━━━━━━━━━[ SELF/PUBLIC ]━━━━━━━━━━━━━━━━━//
if (!hisoka.public) {
if (!m.key.fromMe) return
}
//━━━━━━━━━━━━━━━[ FUNCTION2 ]━━━━━━━━━━━━━━━━━//
hisoka.createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: hisoka.authState.creds.me.id,upload: hisoka.waUploadToServer})
}

if (m.message) {
hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
        
if (isCmd) {
axios.get('https://api.countapi.xyz/hit/StealBot/visits').then(({data}) => hit.all = data.value)
}

hit_today.push(command)     

const sendFileFromUrl = async (from, url, caption, m, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return hisoka.sendMessage(from, { image: await getBuffer(url), caption: caption, thumbnail: Buffer.alloc(0), mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "video"){
return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "audio"){
return hisoka.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
} else {
return hisoka.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
}
}

const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})

function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}



myMonths = ["1","2","3","4","5","6","7","8","9","10","11","12"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${day}-${myMonths[bulan]}-${year}`    

const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

function waktu(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDis = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDis = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDis = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDis = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDis + hDis + mDis + sDis;
}
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
      
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}

if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
        
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: hisoka.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
hisoka.ev.emit('messages.upsert', msg)
}
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.includes('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    

if (budy.includes('Assalamualaikum')) {  
hisoka.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('Asalamualaikum')) {  
hisoka.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('asalamualaikum')) {  
hisoka.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('Asalammualaikum')) {  
hisoka.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}

const sendButton55 = async (id, text1, desc1, yo) => {
var buatpesan = await generateWAMessageFromContent(from, {
"templateMessage": {
"hydratedTemplate": {
...yo.message,
"hydratedContentText": text1,
"hydratedFooterText": desc1,
"hydratedButtons": [
{
"urlButton": {
"displayText": "My Website",
"url": "Gaada"
}
},
{
"callButton": {
"displayText": "Call Me",
"phoneNumber": "6281290565513"
}
},
{
"quickReplyButton": {
"displayText": "PING",
"id": `${prefix}ping`
}
},
{
"quickReplyButton": {
"displayText": "Script Bot",
"id": `${prefix}sc`,
}
},
{
"quickReplyButton": {
"displayText": "Owner",
"id": `${prefix}owner`
}
}
]
}
}
}, {})
hisoka.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
let ucapan = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let jumlahCommand = require('util').inspect(hit.all)
let stamp = speed()
let sped = speed() - stamp
let limitMu = global.db.data.users[m.sender].limit
try {
let bio_nya =  await hisoka.fetchStatus(m.sender)
bio = `${bio_nya.status}`
} catch {
bio = `-`
}
anuy = `
*${ucapan}, ${pushname}* 👋

──⭓ *BOT INFORMATION*
👑 Creator : WandyGans
🤖 Bot Name : Steal - Bot
📍 Prefix : 「 Multi Prefix 」
🌝 Hit Today : ${hit_today.length}
🌎 Hit All : ${jumlahCommand}
📶 Speed : ${sped.toFixed(4)} _Second_

──⭓ *DATE INFORMATION*
📆 Hari : ${week} ${weton}
📆 Tanggal : ${tanggal}
⏰ Time : ${wib} *WIB*
⏰ Time : ${wita} *WITA*
⏰ Time : ${wit} *WIT*

──⭓ *USER INFORMATION*
▢ *Name* : *${pushname}*
▢ *Bio* : *${bio}*
▢ *Limit*: *${limitMu}${isPremium ? '' : '/100'}*
▢ *Status* : *${isPremium ? 'Premium' : 'Free'}*

┌──⭓ *Search Menu*
│
│⭔ ${prefix}google
│⭔ ${prefix}herolist
│⭔ ${prefix}herodetail
│⭔ ${prefix}shoppe
│⭔ ${prefix}sfile
│⭔ ${prefix}stickersearch
│⭔ ${prefix}lirik
│⭔ ${prefix}chord
│⭔ ${prefix}ringtone
│⭔ ${prefix}wikimedia
│⭔ ${prefix}wikipedia
│⭔ ${prefix}wallpaperflare
│⭔ ${prefix}wallpaperhd
│⭔ ${prefix}tiktoksearch
│⭔ ${prefix}happymod
│⭔ ${prefix}wallpapersearch
│⭔ ${prefix}zerochansearch
│⭔ ${prefix}alphacoders
│⭔ ${prefix}igstalk
│⭔ ${prefix}playstore
│⭔ ${prefix}pinterest
│⭔ ${prefix}ytsearch
│⭔ ${prefix}linkwa
│⭔ ${prefix}kbbi
│⭔ ${prefix}ytdesc
│⭔ ${prefix}apkmiror
│⭔ ${prefix}googleimage
│
└───────⭓

┌──⭓ *Convert Menu*
│
│⭔ ${prefix}sticker
│⭔ ${prefix}toimg
│⭔ ${prefix}emojimix
│⭔ ${prefix}semoji
│⭔ ${prefix}ttp
│⭔ ${prefix}attp
│⭔ ${prefix}toaudio
│⭔ ${prefix}tomp3
│⭔ ${prefix}tomp4
│⭔ ${prefix}tovn
│⭔ ${prefix}togif
│⭔ ${prefix}smeme
│
└───────⭓

┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}artinama
│⭔ ${prefix}artimimpi
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓

┌──⭓ *Tools Menu*
│
│⭔ ${prefix}tinyurl
│⭔ ${prefix}tourl
│⭔ ${prefix}tti
│⭔ ${prefix}tts
│⭔ ${prefix}styletext
│⭔ ${prefix}ytstalk
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}ssweb
│⭔ ${prefix}removebg
│⭔ ${prefix}qrcode
│⭔ ${prefix}cutly
│⭔ ${prefix}bitly
│⭔ ${prefix}base64enc
│⭔ ${prefix}base64dec
│⭔ ${prefix}kalkulator
│⭔ ${prefix}namaninja
│⭔ ${prefix}bahasapurba
│
└───────⭓

┌──⭓ *Changer Menu*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓

┌──⭓ *Canvas Menu*
│
│⭔ ${prefix}patrickmaker
│⭔ ${prefix}spongebobmaker
│⭔ ${prefix}deletemaker
│⭔ ${prefix}yasinimage
│⭔ ${prefix}wanted
│⭔ ${prefix}wasted
│⭔ ${prefix}fakepalm
│⭔ ${prefix}captcha
│⭔ ${prefix}circle
│⭔ ${prefix}rip
│⭔ ${prefix}glass
│⭔ ${prefix}lolice
│⭔ ${prefix}gay
│⭔ ${prefix}sepia
│⭔ ${prefix}shit
│⭔ ${prefix}blur
│⭔ ${prefix}invert
│⭔ ${prefix}beatutiful
│⭔ ${prefix}jokeoverhead
│⭔ ${prefix}hitler
│⭔ ${prefix}xnxx
│⭔ ${prefix}triggered
│
└───────⭓

┌──⭓ *Magernulis Menu*
│
│⭔ ${prefix}nuliskanan
│⭔ ${prefix}nuliskiri
│
└───────⭓

┌──⭓ *News Menu*
│
│⭔ ${prefix}trendtwit
│⭔ ${prefix}infogempa
│⭔ ${prefix}kompas
│⭔ ${prefix}covid
│⭔ ${prefix}infotsunami
│⭔ ${prefix}detik
│⭔ ${prefix}beritanasional
│⭔ ${prefix}merdeka
│⭔ ${prefix}antaranews
│⭔ ${prefix}suaracom
│⭔ ${prefix}liputan6
│⭔ ${prefix}cnbindonesia
│
└───────⭓

┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm
│⭔ ${prefix}play
│⭔ ${prefix}ytmp3
│⭔ ${prefix}ytmp4
│
└───────⭓

┌──⭓ *Cecan Menu*
│
│⭔ ${prefix}cecan
│⭔ ${prefix}cecanhijab
│
└───────⭓

┌──⭓ *Random Menu*
│
│⭔ ${prefix}katabucin
│⭔ ${prefix}quotes
│⭔ ${prefix}ceritahoror
│⭔ ${prefix}coffe
│⭔ ${prefix}meme
│⭔ ${prefix}meme2
│⭔ ${prefix}cerpen
│⭔ ${prefix}cerpencinta
│⭔ ${prefix}patrick
│⭔ ${prefix}gura
│⭔ ${prefix}doge
│⭔ ${prefix}katagalau
│⭔ ${prefix}dog
│⭔ ${prefix}floof
│⭔ ${prefix}joke
│⭔ ${prefix}wallpaperml
│⭔ ${prefix}cosplay
│⭔ ${prefix}ppcouple
│⭔ ${prefix}asupan
│⭔ ${prefix}asupanbocil
│⭔ ${prefix}asupanghea
│⭔ ${prefix}asupansantuy
│⭔ ${prefix}asupanukhty
│⭔ ${prefix}katabijak
│⭔ ${prefix}nickff
│⭔ ${prefix}katasenja
│⭔ ${prefix}faktaunik
│⭔ ${prefix}fuckmylife
│⭔ ${prefix}darkjoke
│⭔ ${prefix}quotesmotivasi
│⭔ ${prefix}quotesnasehat
│
└───────⭓

┌──⭓ *Anime Menu*
│
│⭔ ${prefix}quotesanime
│⭔ ${prefix}animestick
│⭔ ${prefix}wallpaper
│⭔ ${prefix}kodenuklir
│⭔ ${prefix}neko
│⭔ ${prefix}neko2
│⭔ ${prefix}anime
│⭔ ${prefix}hentai
│⭔ ${prefix}husbu
│⭔ ${prefix}megumin
│⭔ ${prefix}cum
│⭔ ${prefix}solo
│⭔ ${prefix}bdsm
│⭔ ${prefix}loli
│⭔ ${prefix}ahegao
│⭔ ${prefix}ass
│⭔ ${prefix}yuri
│⭔ ${prefix}cuckold
│⭔ ${prefix}gangbang
│⭔ ${prefix}orgy
│⭔ ${prefix}femdom
│⭔ ${prefix}foot
│⭔ ${prefix}ero
│⭔ ${prefix}glasses
│⭔ ${prefix}pussy
│⭔ ${prefix}trap
│⭔ ${prefix}panties
│⭔ ${prefix}masturbation
│⭔ ${prefix}waifu
│⭔ ${prefix}shinobu
│
└───────⭓

┌──⭓ *Islam Menu*
│
│⭔ ${prefix}quotesislami
│⭔ ${prefix}quran
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}juzamma
│⭔ ${prefix}asmaulhusna
│⭔ ${prefix}kisahnabi
│⭔ ${prefix}niatshalat
│⭔ ${prefix}ayatkursi
│⭔ ${prefix}doaharian
│⭔ ${prefix}surah
│
└───────⭓

┌──⭓ *Fun Menu*
│
│⭔ ${prefix}dare
│⭔ ${prefix}truth
│⭔ ${prefix}simi
│⭔ ${prefix}simp
│⭔ ${prefix}nenen
│⭔ ${prefix}wangy
│⭔ ${prefix}wangy2
│⭔ ${prefix}sherk
│⭔ ${prefix}tebak
│⭔ ${prefix}family100
│⭔ ${prefix}kuismath
│⭔ ${prefix}dadu
│⭔ ${prefix}ttt
│⭔ ${prefix}suitpvp
│⭔ ${prefix}delttt
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}hilih
│⭔ ${prefix}halah
│⭔ ${prefix}heleh
│⭔ ${prefix}huluh
│⭔ ${prefix}holoh
│⭔ ${prefix}watak
│⭔ ${prefix}hobby
│⭔ ${prefix}persengay
│⭔ ${prefix}persenganteng
│⭔ ${prefix}persenbucin
│⭔ ${prefix}persencantik
│⭔ ${prefix}sangecek
│⭔ ${prefix}kapankah
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}bagaimanakah
│⭔ ${prefix}slot
│⭔ ${prefix}cekmati
│⭔ ${prefix}cekme
│⭔ ${prefix}ceklesbi
│⭔ ${prefix}suitbot
│
└───────⭓

┌──⭓ *Group Menu*
│
│⭔ ${prefix}tagall
│⭔ ${prefix}tagme
│⭔ ${prefix}kick
│⭔ ${prefix}mute
│⭔ ${prefix}ephemeral
│⭔ ${prefix}listonline
│⭔ ${prefix}listadmin
│⭔ ${prefix}antilink
│⭔ ${prefix}promote
│⭔ ${prefix}demote
│⭔ ${prefix}group
│⭔ ${prefix}linkgc
│⭔ ${prefix}editinfo
│⭔ ${prefix}add
│⭔ ${prefix}setname
│⭔ ${prefix}setdesc
│⭔ ${prefix}hidetag
│⭔ ${prefix}revoke
│⭔ ${prefix}vote
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓

┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓

┌──⭓ *Logo Menu*
│
│⭔ ${prefix}logo1
│⭔ ${prefix}logo2
│⭔ ${prefix}logo3
│⭔ ${prefix}logo4
│⭔ ${prefix}epepserti
│⭔ ${prefix}tololserti
│
└───────⭓

┌──⭓ *TextPro Menu*
│
│⭔ ${prefix}whitelogo
│⭔ ${prefix}giraffe
│⭔ ${prefix}lightglow
│⭔ ${prefix}arcane
│⭔ ${prefix}batman
│⭔ ${prefix}neon
│⭔ ${prefix}brickwall
│⭔ ${prefix}light
│⭔ ${prefix}cloud
│⭔ ${prefix}acient
│⭔ ${prefix}newyear
│⭔ ${prefix}ledmaker
│⭔ ${prefix}blood
│⭔ ${prefix}glitch2
│⭔ ${prefix}harry
│⭔ ${prefix}bear
│⭔ ${prefix}glue
│⭔ ${prefix}galaxy
│⭔ ${prefix}equalizer
│⭔ ${prefix}glitch2
│⭔ ${prefix}demon
│⭔ ${prefix}fiction
│⭔ ${prefix}retro
│⭔ ${prefix}spooky
│⭔ ${prefix}space
│⭔ ${prefix}stone
│⭔ ${prefix}marvel
│⭔ ${prefix}greenneon
│⭔ ${prefix}thor
│⭔ ${prefix}happynewyear
│⭔ ${prefix}future
│⭔ ${prefix}america
│⭔ ${prefix}rainbow3d
│⭔ ${prefix}biscuit
│⭔ ${prefix}hallowen
│⭔ ${prefix}pencil
│⭔ ${prefix}circuit
│
└───────⭓

┌──⭓ *Photooxy Menu*
│
│⭔ ${prefix}naruto
│⭔ ${prefix}tahta
│⭔ ${prefix}glitch
│⭔ ${prefix}rainbow
│⭔ ${prefix}devil
│⭔ ${prefix}futuris
│⭔ ${prefix}blackpink
│⭔ ${prefix}steel
│⭔ ${prefix}matrix
│⭔ ${prefix}winter
│⭔ ${prefix}sky
│⭔ ${prefix}luxury
│⭔ ${prefix}gradient
│⭔ ${prefix}breakwall
│⭔ ${prefix}minion
│⭔ ${prefix}christmas
│⭔ ${prefix}metalic
│⭔ ${prefix}shadow
│⭔ ${prefix}cup
│⭔ ${prefix}romantic
│⭔ ${prefix}army
│⭔ ${prefix}glowing
│⭔ ${prefix}mintake
│⭔ ${prefix}dropwater
│⭔ ${prefix}toxic
│⭔ ${prefix}lava
│⭔ ${prefix}joker
│⭔ ${prefix}pornhub
│
└───────⭓

┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}deletemsg
│⭔ ${prefix}getmsg
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}public
│⭔ ${prefix}self
│⭔ ${prefix}leavegc
│⭔ ${prefix}join
│⭔ ${prefix}block
│⭔ ${prefix}unblock
│⭔ ${prefix}eval
│⭔ ${prefix}nano
│⭔ ${prefix}setexif
│⭔ >
│⭔ $
│
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}speedtest
│⭔ ${prefix}afk
│⭔ ${prefix}donasi
│⭔ ${prefix}quoted
│⭔ ${prefix}infochat
│⭔ ${prefix}listgc
│⭔ ${prefix}listpc
│⭔ ${prefix}fetch
│⭔ ${prefix}sc
│⭔ ${prefix}owner
│⭔ ${prefix}report
│⭔ ${prefix}broadcast
│
└───────⭓
*🔖SewaBot🔖*
- *1 minggu = 5K*
- *1 bulan = 10K*
- *Permanen = 25K*

*🔖Up to Premium🔖*
*Unlimited limit = 10K*

*👑THANKS TO👑*
- DikaArdnt (Yang punya base)
- WandyGans (Recode)
- CAF (others)
- Yuda Xwer (others)
- Rio (others)
`
//━━━━━━━━━━━━━━━[ COMMAND ]━━━━━━━━━━━━━━━━━//
switch(command) {
case 'menu':
case 'help':
case 'tes':
case 'p':
if (modelmenu == 'gif') {
await sendButton5(from, anuy, fake, await hisoka.createMessage(from, {video: {url: "./lib/hisokam.mp4", caption: anuy}, gifPlayback: true, gifAttribution: "GIPHY"}))
} 
else if (modelmenu == 'image') 
{
await sendButton55(from, anuy, fake, await hisoka.createMessage(from, {image: {url: "./lib/hisoka.jpg", caption: anuy}}))
}
break
case 'report':
if (!q) return m.reply(`Query missing!\nExample: ${prefix + command}Error fiture smeme`)
if (q.length > 300) return m.reply(`Teks terlalu panjang\nThe text is too long!`)
nomor = m.sender
let ress = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${q}`
var options = {
text: ress,
contextInfo: {mentionedJid:[nomor]},
}
hisoka.sendMessage('6281290565513@s.whatsapp.net', options, text, {quoted:m})
m.reply('Succes!')
break
case 'smeme': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
if (!text) throw `Kirim/reply image dengan caption ${prefix + command} teks1|teks2`
if (!/image/.test(mime)) throw `Kirim/reply image/sticker dengan caption ${prefix + command} teks1|teks2`
let [teks1, teks2] = text.split`|`
let dwnld = await hisoka.downloadAndSaveMediaMessage(quoted)
let fatGans = await TelegraPh(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${fatGans}`
let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} else {
throw `Kirim/reply image dengan caption ${prefix + command} teks1|teks2`
}
break
case 'speedtest': {
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
case 'simp': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
stress = await stres.simp(q)
m.reply(stress)
break
case 'nenen': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
stress = await stres.nenen(q)
m.reply(stress)
break
case 'wangy': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
stress = await stres.wangy(q)
m.reply(stress)
break
case 'wangy2': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
stress = await stres.wangy2(q)
m.reply(stress)
break
case 'sherk': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
stress = await stres.sherk(q)
m.reply(stress)
break
case 'apkmiror':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await apkmiror(q)
tekss = `「 *APKMIROR* 」\n`
for (let i of data.data) {
tekss += ` \n*⭔Title*: ${i.judul}\n*⭔ Dev*: ${i.dev}\n*⭔ Link*: ${i.link}\n`
}
m.reply(tekss.trim())
break
case 'happymod':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await happymod(q)
tekss = `「 *HAPPYMOD* 」\n`
for (let i of data.data) {
tekss += ` \n*⭔Title*: ${i.judul}\n*⭔ Rating*: ${i.rating}\n*⭔ Link*: ${i.link}\n`
}
m.reply(tekss.trim())
break
case 'triggered':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anust = await TelegraPh(media)
hisoka.sendImageAsSticker(m.chat, `https://some-random-api.ml/canvas/triggered?avatar=${anust}`, m, { packname: global.packname, author: global.author })
} else {
throw `Kirim Gambar Dengan Caption ${prefix + command}`
}
break
case 'glitch2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-glitch-text-effect-online-free-1026.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'thor':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-thor-logo-style-text-effect-online-1064.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'spooky':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'space':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-space-3d-text-effect-online-985.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'stone':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-stone-text-effect-online-982.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'marvel':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-logo-style-marvel-studios-online-971.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'retro':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-3d-retro-text-effect-online-free-1065.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'horror':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-cinematic-horror-text-effect-1045.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'pornhub':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/pornhub-style-logo-online-generator-free-977.html`, [`${tahtar}`, `${tahtar2}`])
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'blackpink':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-blackpink-logo-style-online-1001.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'fiction':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-science-fiction-text-effect-online-free-1038.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'circuit':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'hallowen':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'cloud':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'demon':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-green-horror-style-text-effect-online-1036.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'matrix':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/matrix-style-text-effect-online-884.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'equalizer':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/rainbow-equalizer-text-effect-902.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'future':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'pencil':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-sketch-text-effect-online-1044.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'metal':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/glossy-blue-metal-text-effect-967.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'america':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-american-flag-3d-text-effect-online-1051.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'biscuit':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/biscuit-text-effect-858.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'greenneon':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/green-neon-text-effect-874.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'minion':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/minion-text-effect-3d-online-978.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'galaxy':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'glue':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'gradient':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/3d-gradient-text-effect-online-free-1002.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'rainbow3d':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'happynewyear':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/happy-new-year-2022-greeting-3d-card-1058.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'futuris':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'bear':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'harry':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-harry-potter-text-effect-online-1025.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'devil':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'glitch2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-impressive-glitch-text-effects-online-1027.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'blood':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/blood-text-on-the-frosted-glass-941.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'lirik':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limi
if (!q) return m.reply(`Example : ${prefix}lirik asede kon`)
hasils = await lirikLagu(q)
m.reply(hasils)
break
case 'whitelogo':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
textpro =  await maker(`https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'luxury':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'batman':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/make-a-batman-logo-online-free-1066.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'giraffe':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-3d-giraffe-text-effect-online-1069.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'lightglow':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'arcane':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'neon':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/neon-light-glitch-text-generator-online-1063.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'brickwall':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-neon-light-on-brick-wall-online-1062.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'light':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'acient':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'ledmaker':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/color-led-display-screen-text-effect-1059.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'newyear':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker(`https://textpro.me/happy-new-year-2022-greeting-3d-card-1058.html`, `${q}`)
hisoka.sendMessage(m.chat, { image: { url: textpro }, caption: `Done` }, { quoted: m })
break
case 'antaranews':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await antaranews()
tekss = `「 *ANTARANEWS* 」\n`
for (let i of data) {
tekss += ` \n*⭔ Title* : ${i.title}\n*⭔ Url* : ${i.link}\n*⭔ Img* : ${i.image}\n*⭔ Waktu* : ${i.date}\n\n`
}
m.reply(tekss.trim())
break
case 'suaracom':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await suaracom()
tekss = `「 *SUARACOM* 」\n`
for (let i of data) {
tekss += ` \n*⭔ Title* : ${i.title}\n*⭔ Url* : ${i.link}\n*⭔ Img* : ${i.image}\n*⭔ Waktu* : ${i.date}\n*⭔ Desc*: ${i.description}\n\n`
}
m.reply(tekss.trim())
break
case 'cnbindonesia':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await cnbid()
tekss = `「 *CNBINDONESIA* 」\n`
for (let i of data) {
tekss += ` \n*⭔ Title* : ${i.title}\n*⭔ Url* : ${i.link}\n*⭔ Img* : ${i.image}\n*⭔ Waktu* : ${i.date}\n*⭔ Subtitle*: ${i.desc}\n\n`
}
m.reply(tekss.trim())
break
case 'liputan6':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await liputan6()
tekss = `「 *LIPUTAN6* 」\n`
for (let i of data) {
tekss += ` \n*⭔ Title* : ${i.title}\n*⭔ Url* : ${i.link}\n*⭔ Img* : ${i.image}\n*⭔ Waktu* : ${i.date}\n*⭔ Desc*: ${i.description}\n\n`
}
m.reply(tekss.trim())
break
case 'ytstalk':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} https://youtu.be/g7hMIhn5wyE#`)
try {
uhuy = await fetchJson(`http://hadi-api.herokuapp.com/api/aboutyt?url=${q}`)
t = uhuy.result;
teks = `
⭔ Judul: ${t.judul}
⭔ Channel: ${t.channel}
⭔ Views: ${t.view}
⭔ Like: ${t.like}
⭔ Dislike: ${t.dislike}
⭔ Kategori: ${t.kategori}
⭔ Upload: ${t.tanggalupload}
⭔ Desc: ${t.desc}`
hisoka.sendMessage(m.chat, { image: { url: t.album }, caption: teks }, { quoted: m })
} catch (e) {
m.reply(`_Error, input yang anda masukan salah!_`)
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\nâ­” Packname : ${global.packname}\nâ­” Author : ${global.author}`)
}
break
case 'lava':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/lava?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'ceklesbi':
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
hisoka.sendMessage(from, { text: `Nama : ${command} ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
case 'tomp4': case 'tovideo': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'cekme':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const ganteng = ['Cakep ✔️','Jelek Anjrit ❌']
const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]
const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}`
var but = [{buttonId: `${prefix}valuey`, buttonText: { displayText: 'Cocok' }, type: 1 }, {buttonId: `${prefix}valuen`, buttonText: { displayText: 'Gak Cocok' }, type: 1 }]
hisoka.sendMessage(from, { caption: cek, image: { url: `https://telegra.ph/file/a169d1590d64b142d30b5.jpg` }, buttons: but, footer: '© Steal - Bot' }, { quoted: m })
break
case 'valuey':
m.reply("Yey Prediksi Bot Benar")
break
case 'valuen':
m.reply("Yah Maaf Ya kak:(")
break
case 'romantic':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/romantic-messages?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'cup':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/teks-cup?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'shadow':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/shadow-sky?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'army':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/army-camouflage-fabric?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'glowing':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/3d-glowing?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'vintage':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/vintage-text?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'christmas':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/christmas?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'metalic':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/metalic-gold?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'winter':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/winter?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'sky':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`example : ${prefix + command} wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/sky?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'tololserti':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://yx-api.herokuapp.com/api/sertifikat/tololserti?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'breakwall':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/break-wall?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'epepserti':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://yx-api.herokuapp.com/api/sertifikat/epepserti?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'toxic':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/toxic?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'dropwater':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/dropwater?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'tahta':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/harta?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'glitch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/textpro/tiktok?teks1=${tahtar}&teks2=${tahtar2}` }, caption: `Done` }, { quoted: m })
break
case 'steel':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
tahtar3 = args.join(" ")
tahtar = tahtar3.split("/")[0];
tahtar2 = tahtar3.split("/")[1];
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/steel?text=${tahtar}&text2=${tahtar2}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'flaming':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/photoxy/flaming-fire?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'joker':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.chipa.xyz/api/textpro/joker?text=${q}&apikey=${chipa}` }, caption: `Done` }, { quoted: m })
break
case 'logo1':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://yx-api.herokuapp.com/api/canvas/gfx1?nama=${q}` }, caption: `Done` }, { quoted: m })
break
case 'logo2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://yx-api.herokuapp.com/api/canvas/gfx2?nama=${q}` }, caption: `Done` }, { quoted: m })
break
case 'logo3':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
m.reply(mess.wait)
textn = args.join(" ")
text1 = textn.split("/")[0];
text2  = textn.split("/")[1];
hisoka.sendMessage(m.chat, { image: { url: `https://yx-api.herokuapp.com/api/canvas/gfx3?text1=${text1}&text2=${text2}` }, caption: `Done` }, { quoted: m })
break
case 'logo4':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy/Gans`)
m.reply(mess.wait)
textn = args.join(" ")
text1 = textn.split("/")[0];
text2  = textn.split("/")[1];
hisoka.sendMessage(m.chat, { image: { url: `https://yx-api.herokuapp.com/api/canvas/gfx4?text1=${text1}&text2=${text2}` }, caption: `Done` }, { quoted: m })
break
case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/aper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case 'tovn': case 'toptt': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'deletemaker': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/canvas/delete?url=${anu}` }, caption: `Done` }, { quoted: m })
} else {
throw `Kirim Gambar Dengan Caption ${prefix + command}`
}
break
case 'tomp3': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
case 'ytmp3': case 'ytaudio': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
	m.reply(mess.wait)
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'tts':
asss = `
Example: ${prefix + command} id Wandy

List kode bahasa:
af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh`
if (args.length < 2) return m.reply(asss)
const gtts = require('./lib/gtts')(args[0])
dtt = body.slice(6)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? m.reply('Textnya kebanyakan gan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return m.reply('Gagal gan:(')
							m.reply(mess.wait)
							hisoka.sendMessage(m.chat, { audio: buff }, { quoted: m})
							fs.unlinkSync(rano)
						})
					})
					break  
            case 'ytmp4': case 'ytvideo': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            	m.reply(mess.wait)
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
case 'ebinary': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            if (!q) return m.reply(`Example : ${prefix + command} Indonesia`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            if (!q) return m.reply(`Example : ${prefix + command} Indonesia`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
case 'family100': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
case 'darkjoke':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
data = fs.readFileSync('./lib/drak.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
const darkjoke = [{buttonId: `${prefix}darkjoke`, buttonText: {displayText: `Next`}, type: 1}]
const dark = {
image: {url: randKey.result },
caption: "*DarkJoke*",
footer: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: darkjoke,
headerType: 1
}
hisoka.sendMessage(m.chat, dark)
break
case 'cosplay':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
anuss = await pinterest(`Cosplay`)
result = anuss[Math.floor(Math.random(), anuss.length)]
const cos = [{buttonId: `${prefix}cosplay`, buttonText: {displayText: `Next⏩`}, type: 1}]
const plays = {
image: {url: result },
caption: "*Cosplay*",
footer: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: cos,
headerType: 1
}
hisoka.sendMessage(m.chat, plays)
break
case 'tebak': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'suitpvp': case 'suit': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.includes('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.includes('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                }
                break
case 'donasi':
m.reply(`Donasi seiklasnya\nPulsa : 082125039170`)
break
case 'get':
case 'fetch':
if (!q) return m.reply(`Example : #fetch https://youtube.com`)
fetch(`${q}`).then(res => res.text())  
.then(bu =>{
m.reply(bu)
})   
break
case 'donasi':
m.reply(`Donasi seiklasnya\nPulsa : 082125039170`)
break
case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
case 'delete': case 'del': case 'd': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'nano':
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!q) return reply(`Example : ${prefix + command} index.js`)
anus = fs.readFileSync(`${q}`)
m.reply(String(anus))
break
case 'eval': {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator && !m.key.fromMe) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'ping': case 'botstatus': case 'statusbot': {
let timestamp = speed()
let latensi = speed() - timestamp
let all = require('util').inspect(hit.all)
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'owner': case 'creator': {
let vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'N:;Wandy;;;'
+ 'FN:WandyGunawan\n'
+ 'ORG:WandyGans;\n'
+ 'TEL;type=CELL;type=VOICE;waid=6281290565513:+62 812-9056-5513\n' // WhatsApp ID + phone number
+ 'END:VCARD'
hisoka.sendMessage(m.chat, { contacts: { displayName: 'Owner - StealBot', contacts: [{ vcard }] } }, { quoted: m })
}
break
case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
case 'leavegc':
if (!isCreator && !m.key.fromMe) throw mess.owner
hisoka.groupLeave(from)
break
case 'public': {
if (!isCreator && !m.key.fromMe) throw mess.owner
hisoka.public = true
m.reply('*_Succes Change To Public - Mode_*')
}
break
case 'self': {
if (!isCreator && !m.key.fromMe) throw mess.owner
hisoka.public = false
m.reply('*_Succes Change To Self - Mode_*')
}
break
case 'sc': {
                m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃??'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)
}
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw `Example: ${prefix + command} Welcome`
await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
let response = await hisoka.groupInviteCode(m.chat)
hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw `Masukkan value open/close\nContoh : #grup buka`
if (args[0].toLowerCase() === 'close') {
await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'tagme':
if (!m.isGroup) throw mess.group
var num = m.sender
hisoka.sendMessage(m.chat, {text: `@${num.split("@")[0]} Tag!`, contextInfo: { mentionedJid: [num]}}, {quoted: m})
break
case 'listadmins':
case 'listadmin':
case 'admin':
if (!m.isGroup) return m.reply(mess.group)
teks2 = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks2 += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
hisoka.sendTextWithMentions(m.chat, teks2, m)
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!q) throw `Example : ${prefix + command} Wibu`
await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'kick':
if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      hisoka.groupParticipantsUpdate(m.chat, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      hisoka.groupParticipantsUpdate(m.chat, [number], "remove")
      .then( res => m.reply(jsonformat(res)))
      .catch( err =>m. reply(jsonformat(err)))
    } else {
    m.reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break
case 'add':
if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
    var number;
    if (args[1]) {
      number = mentioned[0]
      var cek = await hisoka.onWhatsApp(number)
      if (cek.length == 0) return m.reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
      hisoka.groupParticipantsUpdate(m.chat, [number], "add")
      .then( res => m.reply(jsonformat(res)))
      .catch( err => m.reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      var cek = await hisoka.onWhatsApp(number)
      if (cek.length == 0) return m.reply(`Member yang kamu balas pesannya sudah tidak terdaftar di WhatsApp`)
      hisoka.groupParticipantsUpdate(m.chat, [number], "add")
      .then( res => m.reply(jsonformat(res)))
      .catch( err => m.reply(jsonformat(err)))
    } else {
      m.reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan kedalam grup`)
    }
    break
case 'revoke':
if (!m.isGroup) throw mess.group
if (!isAdmins && !m.key.fromMe) throw mess.admin                                               
let link = await hisoka.groupRevokeInvite(m.chat)
await m.reply( `*New Link For ${groupName}* :\n https://chat.whatsapp.com/${link}`)
break
case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
case 'slot':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
  const pepekk = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : ?? : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🥑 : 🥑 : 🥑 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🌶️ : 🌶️ : 🌶️ Win👑',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
  const kalah = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : ??', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
 const kalah2 = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
        const selot = pepekk[Math.floor(Math.random() * pepekk.length)]
        const kalahnya = kalah[Math.floor(Math.random() * kalah.length)]
        const kalahnya2 = kalah2[Math.floor(Math.random() * kalah2.length)]
        var slotnya = `*[ 🎰 GAME SLOT 🎰 ]*

${kalahnya}
${selot}
${kalahnya2}

Note : Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!!!
Contoh : 🔔 : 🔔 : 🔔`
var but = [{buttonId: `${prefix}${command}`, buttonText: { displayText: "Kembali Slot" }, type: 1 }]
hisoka.sendMessage(from, { text: slotnya, buttons: but, footer: "© Steal - Bot", templateButtons: but }, {quoted: m })
break
case 'suitbot':
var but = [{buttonId: `${prefix}sbatu`, buttonText: { displayText: "Batu ✊" }, type: 1 }, {buttonId: `${prefix}sgunting`, buttonText: { displayText: "Gunting ✌️" }, type: 1 }, {buttonId: `${prefix}skertas`, buttonText: { displayText: "Kertas ✋" }, type: 1 }]
var sutit = `*[ GAME SUIT ]*\n\nNOTE : *KAMU MEMILIKI 3 BUTTON DAN 3 KESEMPATAN UNTUK MEMILIH ANTARA BATU GUNTING KERTAS\nJIKA KAMU MEMENANGKAN 3 KESEMPATAN PERMAINAN BATU GUNTING KERTAS\n*KAMU MENANG!!*`
hisoka.sendMessage(m.chat, { text: sutit, buttons: but, footer: "Pilih Button Di Bawah\n\n- _Jika Kamu Pakai WhatsApp Mod Langsung Saja Ketik /sgunting, /sbatu, /skertas_", templateButtons: but }, {quoted: m})
break
case 'sbatu':
const batu = [`Aku Memilih *Batu*\nKamu Memilih *Batu*\n\n!! KITA SERI !!`,`Aku Memilih *Gunting*\nKamu Memilih *Batu*\n\n!! KAMU MENANG:( !!`,`Aku Memilih *Kertas*\nKamu Memilih *Batu*\n\n!! AKU MENANG !!`]
const batuh = batu[Math.floor(Math.random() * batu.length)]
var batuh2 = `*[ GAME SUIT ]*\n\n${batuh}`
hisoka.sendMessage(m.chat, { text: batuh2 }, { quoted: m })
break
case 'sgunting':
  
  const gunting = [`Aku Memilih *Batu*\nKamu Memilih *Gunting*\n\n!! AKU MENANG !!`,`Aku Memilih *Gunting*\nKamu Memilih *Gunting*\n\n!! KITA SERI !!`,`Aku Memilih *Kertas*\nKamu Memilih *Gunting*\n\n!! KAMU MENANG :( !!`]
					const guntingh = gunting[Math.floor(Math.random() * gunting.length)]
					var guntingh2 = `*[ GAME SUIT ]*\n\n${guntingh}`
					hisoka.sendMessage(m.chat, { text: guntingh2 }, { quoted: m })

break
case 'skertas':
  
  const kertas = [`Aku Memilih *Batu*\nKamu Memilih *Kertas*\n\n!! KAMU MENANG :( !!`,`Aku Memilih *Gunting*\nKamu Memilih *Kertas*\n\n!! KAMU KALAH !!`,`Aku Memilih *Kertas*\nKamu Memilih *Kertas*\n\n!! KITA SERI !!`]
					const kertash = kertas[Math.floor(Math.random() * kertas.length)]
					var kertash2 = `*[ GAME SUIT ]*\n\n${kertash}`
					hisoka.sendMessage(m.chat, { text: kertash2 }, { quoted: m })

break
case 'cekmati':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix}cekmati Wandy`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case 'sangecek':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} wandy`)
const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const nge = sang[Math.floor(Math.random() * sang.length)]
m.reply(`*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${nge}%`)
break
case 'persenganteng':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} wandy`)
const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${teng}`)
break
case 'persencantik':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} wandu`)
const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${tik}`)
break
case 'jadian': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian ❤️ jangan lupa pajak jadiannya😘

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
}
break
case 'jodohku': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `😘Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
}
break
case 'watak':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Nama`)
wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
const tak = wa[Math.floor(Math.random() * wa.length)]
teks2 = `*Watak* : ${command} ${q}\n*Jawaban* : ${tak}`
m.reply(teks2)
break
case 'hobby':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} wandy`)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
m.reply(`*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${by}`)
break
case 'apakah':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} gw kaya`)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kah}`
m.reply(caption)
break
case 'kapankah':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} gw kaya`)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${koh}`
m.reply(caption)
break
case 'bisakah':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} gw kaya`)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${keh}`
m.reply(caption)
break
case 'persengay':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} wandu`)
persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
m.reply(`*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kl}`)
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'dare':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
hisoka.sendMessage(m.chat, { image: { url: `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`, }, caption: der}, { quoted: m })
break
case 'truth':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu mekatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah dimeket apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
hisoka.sendMessage(m.chat, { image: { url: `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`, }, caption: ttrth}, { quoted: m })
break
case 'bagaimanakah':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
hisoka.sendMessage(from, { text: `Pertanyaan : ${command} ${q}\nJawaban : ${ya}` }, { quoted: m })
break
case 'simi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} halo`)
hasilnya = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
m.reply(hasilnya.success)
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.includes('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('Error!')
            }
            }
            break
case 'surah':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Listsurah 1 - 100\nExample : ${prefix}surah 1`)
m.reply(mess.wait)
surah = await surahscrap(q)
console.log(surahscrap)
teks2 = `「 *SURAH* 」\n`
for (let i of surah) {
teks2 += `\n*Indo* : ${i.indo}\n*Arab* : ${i.arab}\n*Latin* : ${i.latin}\n`
}
m.reply(teks2.trim())
break
case 'toaud': case 'toaudio': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
case 'ayatkursi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/muslim/ayatkursi`)
y = hasilnya.data;
m.reply(`*Tafsir* : ${y.tafsir}\n*Arabic* : ${y.arabic}\n*Latin* : ${y.latin}`)
break
case 'asmaulhusna':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/muslim/asmaulhusna`)
hasilnya = hasilnya.result;
y = hasilnya[Math.floor(Math.random() * hasilnya.length)]
m.reply(`*Number* : ${y.number}\n*Latin* : ${y.latin}\n*Indonesia* : ${y.translate_id}\n*Inggris* : ${y.translate_en}`)
break
case 'kisahnabi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} muhammad`)
try { 
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/muslim/kisahnabi?nabi=${q}`)
m.reply(`*Nama* : ${hasilnya.name}\n*Kelahiran* : ${hasilnya.kelahiran}\n*Wafat* : ${hasilnya.wafat_usia}\n*Singgah* : ${hasilnya.singgah}\n*Kisah* : ${hasilnya.kisah}`)
} catch (e) {
m.reply(`Nama nabi ${q} tidak di temukan`)
}
break
case 'doaharian':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await fetchJson(`https://yx-api.herokuapp.com/api/muslim/doaharian`)
tekssss = `「 *DOA HARIAN* 」\n`
for (let i of data.data) {
tekssss += `\n*Title* : ${i.title}\n*Arabic* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translate* : ${i.translation}\n`
}
m.reply(tekssss.trim())
break
case 'niatshalat':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await fetchJson(`https://yx-api.herokuapp.com/api/muslim/niatshalat`)
const hasil = data[Math.floor(Math.random() * data.length)]
m.reply(`*Id* : ${hasil.id}\n*Nama* : ${hasil.name}\n*Arabic* : ${hasil.arabic}\n*Latin* : ${hasil.latin}\n*Terjemahan* : ${hasil.terjemahan}`)
break
case 'hadis': case 'hadist': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (args[0] === 'pdf') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'iqra': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
m.reply(mess.wait)
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'quran':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
anukok = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`)
quran = `${anukok.acak.ar.teks}\n\n${anukok.acak.id.teks}\nQ.S ${anukok.surat.nama} ayat ${anukok.acak.id.ayat}`
m.reply(quran)
break 
case 'quotesanime':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await quotesAnime()
datanya = data[Math.floor(Math.random() * data.length)]
hasilnya = `*Quote* : ${datanya.quotes}\n\n*By ${datanya.karakter}*`
const anime = [{buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'Try again'}, type: 1}]
const anim = {text: hasilnya, footer: `Quotes anime`, buttons: anime, headerType: 1}
hisoka.sendMessage(m.chat, anim)
break
case 'kodenuklir':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
kodenuk = `Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** kasar
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
m.reply(kodenuk)
break
case 'neko':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://nekos.life/api/v2/img/neko`)
const nek = [{buttonId: `${prefix}neko`, buttonText: {displayText: `Next`}, type: 1}]
const neko = {
image: {url: hasilnya.url },
caption: "*Neko Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: nek,
headerType: 1
}
hisoka.sendMessage(m.chat, neko)
break
case 'hentai':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://nekos.life/api/v2/img/hentai`)
const hen = [{buttonId: `${prefix}hentai`, buttonText: {displayText: `Next`}, type: 1}]
const hentai = {
image: {url: hasilnya.url },
caption: "*Hentai Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: hen,
headerType: 1
}
hisoka.sendMessage(m.chat, hentai)
break
case 'loli':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
data = fs.readFileSync('./lib/loli.json');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
const lol = [{buttonId: `${prefix}loli`, buttonText: {displayText: `Next`}, type: 1}]
const li = {
image: {url: randKey.result },
caption: "*Loli Anime*",
footer: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: lol,
headerType: 1
}
hisoka.sendMessage(m.chat, li)
break
case 'ahegao':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/ahegao`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Ahegao` }, { quoted: m })
break
case 'neko2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/neko2` }, caption: `Neko2` }, { quoted: m })
break
case 'husbu':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/randomimage/husbu` }, caption: `Done` }, { quoted: m })
break
case 'megumin':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://api.waifu.pics/sfw/megumin`)
const megu = [{buttonId: `${prefix}megumin`, buttonText: {displayText: `Next`}, type: 1}]
const megumin = {
image: {url: hasilnya.url },
caption: "*Megumin Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: megu,
headerType: 1
}
hisoka.sendMessage(m.chat, megumin)
break
case 'shinobu':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://api.waifu.pics/sfw/shinobu`)
const shino = [{buttonId: `${prefix}shinobu`, buttonText: {displayText: `Next`}, type: 1}]
const shinobu = {
image: {url: hasilnya.url },
caption: "*Shinobu Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: shino,
headerType: 1
}
hisoka.sendMessage(m.chat, shinobu)
break
case 'trap':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://api.waifu.pics/nsfw/trap`)
const tra = [{buttonId: `${prefix}trap`, buttonText: {displayText: `Next`}, type: 1}]
const trap = {
image: {url: hasilnya.url },
caption: "*Trap Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: tra,
headerType: 1
}
hisoka.sendMessage(m.chat, trap)
break
case 'waifu':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
const waif = [{buttonId: `${prefix}waifu`, buttonText: {displayText: `Next`}, type: 1}]
const waifu = {
image: {url: hasilnya.url },
caption: "*Waifu Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: waif,
headerType: 1
}
hisoka.sendMessage(m.chat, waifu)
break
case 'ero':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/ero`)
const er = [{buttonId: `${prefix}ero`, buttonText: {displayText: `Next`}, type: 1}]
const ero = {
image: {url: hasilnya },
caption: "*Ero Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: er,
headerType: 1
}
hisoka.sendMessage(m.chat, ero)
break
case 'ass':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/ass`)
const as = [{buttonId: `${prefix}ass`, buttonText: {displayText: `Next`}, type: 1}]
const ass = {
image: {url: hasilnya },
caption: "*Ass Anime*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: as,
headerType: 1
}
hisoka.sendMessage(m.chat, ass)
break
case 'bdsm':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/bdsm`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Bdsm` }, { quoted: m })
break
case 'cuckold':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/cuckold`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `CuckOld` }, { quoted: m })
break
case 'femdom':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/femdom`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Femdom` }, { quoted: m })
break
case 'foot':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/foot`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Foot` }, { quoted: m })
break
case 'gangbang':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/gangbang`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `GangBang` }, { quoted: m })
break
case 'glasses':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/glasses`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Glasses` }, { quoted: m })
break
case 'masturbation':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/masturbation`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Masturbation` }, { quoted: m })
break
case 'orgy':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/orgy`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Orgy` }, { quoted: m })
break
case 'panties':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/panties`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Panties` }, { quoted: m })
break
case 'pussy':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (isGroup) return m.reply(`Fitur ini hanya untuk privat chat!`)
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nsfw/pussy`)
hisoka.sendMessage(m.chat, { image: { url: hasilnya }, caption: `Pussy` }, { quoted: m })
break
case 'wallpaper':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/walpaperanime`, }, caption: `Done` }, { quoted: m })
break
case 'cecan':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
const ce = [{buttonId: `${prefix}cecan`, buttonText: {displayText: `Next`}, type: 1}]
const cantik = {
image: {url: `http://hadi-api.herokuapp.com/api/randomImage/cecan` },
caption: "*Cecan*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: ce,
headerType: 1
}
hisoka.sendMessage(m.chat, cantik)
break
case 'cecanhijab':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/asupan/hijab`)
const hijab = [{buttonId: `${prefix}cecan`, buttonText: {displayText: `Next`}, type: 1}]
const hija = {
image: {url: hasilnya.result.url },
caption: "*Cecan Hijab*",
footerText: 'Click button dibawah untuk menampilkan gambar berikutnya!',
buttons: hijab,
headerType: 1 
}
hisoka.sendMessage(m.chat, hija)
break
case 'ceritahoror':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/horor?apikey=${viko}`)
m.reply(hasilnya.result)
break
case 'cerpen':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/random?apikey=${viko}`)
m.reply(hasilnya.result)
break
case 'cerpencinta':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/cinta?apikey=${viko}`)
m.reply(hasilnya.result)
break
case 'coffe': case 'kopi': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `• Random Coffe`,
footer: hisoka.user.name,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'katagalau':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://rest-beni.herokuapp.com/api/galau`)
m.reply(hasilnya.result)
break
case 'joke':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
result = await fetchJson(`https://some-random-api.ml/joke`)
m.reply(result.joke)
break
case 'ppcouple':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let ppcp = fs.readFileSync('./lib/couple.js');
jsonData = JSON.parse(ppcp);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hisoka.sendMessage(m.chat, { image: { url: randKey.male }, caption: `Cowok` }, { quoted: m })
hisoka.sendMessage(m.chat, { image: { url: randKey.female }, caption: `Cewek` }, { quoted: m })
break
case 'asupan':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { video: { url: `https://api.zacros.my.id/asupan/random` }, caption: `Done` }, { quoted: m })
break
case 'asupanbocil':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/asupan/bocil`)
hisoka.sendMessage(m.chat, { video: { url: hasilnya.result.url }, caption: `Nih gan` }, { quoted: m })
break
case 'asupanghea':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/asupan/geayubi`)
hisoka.sendMessage(m.chat, { video: { url: hasilnya.result.url }, caption: `Nih gan` }, { quoted: m })
break
case 'asupansantuy':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/asupan/santuy`)
hisoka.sendMessage(m.chat, { video: { url: hasilnya.result.url }, caption: `Nih gan` }, { quoted: m })
break
case 'asupanukhty':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/asupan/ukhty`)
hisoka.sendMessage(m.chat, { video: { url: hasilnya.result.url }, caption: `Nih gan` }, { quoted: m })
break
case 'nickff':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/nickepep`)
m.reply(hasilnya.result)
break
case 'katabijak':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await katabijak()
result = hasilnya[Math.floor(Math.random(), hasilnya.length)]
katabi = `Quotes : ${result.quotes}\n\n*By : ${result.author.name}*`
const kata = [{buttonId: `${prefix}katabijak`, buttonText: {displayText: 'Try again'}, type: 1}]
const bijak = {text: katabi, footer: `Kata bijak`, buttons: kata, headerType: 1}
hisoka.sendMessage(m.chat, bijak)
break
case 'faktaunik':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya  = await fetchJson(`https://yx-api.herokuapp.com/api/faktaunik`)
const fakta = [{buttonId: `${prefix}faktaunik`, buttonText: {displayText: 'Next'}, type: 1}]
const unik = {text: hasilnya.result, footer: `Fakta Unik`, buttons: fakta, headerType: 1}
hisoka.sendMessage(m.chat, unik)
break
case 'katasenja':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/katasenja`)
const katasen = [{buttonId: `${prefix}katasenja`, buttonText: {displayText: 'Next'}, type: 1}]
const ja = {text: hasilnya.result.message, footer: `Kata Senja`, buttons: katasen, headerType: 1}
hisoka.sendMessage(m.chat, ja)
break
case 'fuckmylife':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/fml`)
const fuck = [{buttonId: `${prefix}fuckmylife`, buttonText: {displayText: 'Next'}, type: 1}]
const my = {text: hasilnya.result.fml, footer: `Fuck My Life`, buttons: fuck, headerType: 1}
hisoka.sendMessage(m.chat, my)
break
case 'wallpaperml':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
let wallml = fs.readFileSync('./lib/wallml.js');
jsonData = JSON.parse(wallml);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hisoka.sendMessage(m.chat, { image: { url: randKey.result }, caption: `Done` }, { quoted: m })
break
case 'dog':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
result = await fetchJson(`https://some-random-api.ml/img/dog`)
hisoka.sendMessage(m.chat, { image: { url: result.link }, caption: `Dog` }, { quoted: m })
} catch (e) {
m.reply(`Error bruh coba lagi`)
}
break
case 'floof':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
result = await fetchJson(`https://randomfox.ca/floof/`)
hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `Floof` }, { quoted: m })
} catch (e) {
m.reply(`Error bruh coba lagi`)
}
break
case 'meme':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
ressss = await googleImage(`meme`, google)
function google(error, result){
if (error){ return m.reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(m.chat, random,`Meme`, m)
}
break
case 'meme2':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
result = await fetchJson(`https://some-random-api.ml/meme`)
hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: result.caption }, { quoted: m })
break
case 'katabucin':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const katakata = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
]
const hata = katakata[Math.floor(Math.random() * katakata.length)]
const buttons = [{buttonId: `${prefix}katabucin`, buttonText: {displayText: 'Try again'}, type: 1}]
const buttonMessage = {text: hata, footer: `By Wandygans`, buttons: buttons, headerType: 1}
hisoka.sendMessage(m.chat, buttonMessage)
break
case 'quotesislami':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematahmad..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematahmad mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
const isl = islami[Math.floor(Math.random() * islami.length)]
const islam = [{buttonId: `${prefix}quotesislami`, buttonText: {displayText: 'Try again'}, type: 1}]
const islamm = {text: isl, footer: `Quotes Islami`, buttons: islam, headerType: 1}
hisoka.sendMessage(m.chat, islamm)
break	
case 'quotesnasehat':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujahmad bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatahmad jangan pernah mengabaikannya karena suatu saat perhatahmad sekecil itu kamu rindukan saat kamu kesepahmad.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergahmadmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastahmad.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudahmad patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
const nase = [{buttonId: `${prefix}quotesnasehat`, buttonText: {displayText: 'Try again'}, type: 1}]
const naseh = {text: nsh, footer: `Quotes Nasehat`, buttons: nase, headerType: 1}
hisoka.sendMessage(m.chat, naseh)
break
case 'quotesmotivasi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatahmad, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagahmad dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impahmad, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanahmad untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujahmad pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematahmad tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlahmad khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaahmad masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadahmad ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadahmad ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impahmadmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impahmadmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirahmad Ia datang bersama kesejukan, hal buruk tidak datang sendirahmad ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujahmad dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatahmad lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatahmad sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaahmad biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impahmad anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaahmad perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
const vasi = motiv[Math.floor(Math.random() * motiv.length)]
const motiva = [{buttonId: `${prefix}quotesmotivasi`, buttonText: {displayText: 'Try again'}, type: 1}]
const motivas = {text: vasi, footer: `Quotes Motivasi`, buttons: motiva, headerType: 1}
hisoka.sendMessage(m.chat, motivas)
break
case 'quotes':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = fs.readFileSync('./lib/quotes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
datanya = `Quotes : ${randKey.quotes}\n\n*By ${randKey.author}*`
const butt = [{buttonId: `${prefix}quotes`, buttonText: {displayText: 'Try again'}, type: 1}]
const button = {text: datanya, footer: `Quotes`, buttons: butt, headerType: 1}
hisoka.sendMessage(m.chat, button)
break
case 'play':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} story wa anime`
m.reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
anua = search.videos[Math.floor(Math.random() * search.videos.length)]
let { yta } = require('./lib/y2mate')
let media = await yta(anua.url, `128kbps`)
let { ytv } = require('./lib/y2mate')
let media2 = await ytv(anua.url, `360p`)
const sendButton5 = async (id, text1, desc1, yo) => {
var buatpesan = await generateWAMessageFromContent(from, {
"templateMessage": {
"hydratedTemplate": {
...yo.message,
"hydratedContentText": text1,
"hydratedFooterText": desc1,
"hydratedButtons": [
{
"urlButton": {
"displayText": `📺Go to YouTube`,
"url": anua.url,
}
},
{
"quickReplyButton": {
"displayText": `♫ Audio (${media.filesizeF})`,
"id": `ytmp3 ${anua.url}`,
}
},
{
"quickReplyButton": {
"displayText": `► Video (${media2.filesizeF})`,
"id": `ytmp4 ${anua.url}`
}
}
]
}
}
}, {})
hisoka.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
anuy2 = `⭔ Title : ${anua.title}
⭔ Ext : Search
⭔ ID : ${anua.videoId}
⭔ Duration : ${anua.timestamp}
⭔ Viewers : ${anua.views}
⭔ Upload At : ${anua.ago}
⭔ Author : ${anua.author.name}
⭔ Channel : ${anua.author.url}
⭔ Description : ${anua.description}
⭔ Url : ${anua.url}`
await sendButton5(from, anuy2, `Steal - Bot`, await hisoka.createMessage(from, {image: {url: anua.thumbnail, caption: anuy2}}))
break
case 'tiktoknowm':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} https://vm.tiktok.com/ZSebq6cCx/`)
try { 
if (!q.includes('tiktok')) return m.reply(`Url invalid!`)
m.reply(mess.wait)
result = await fetchJson(`https://rest-beni.herokuapp.com/api/tiktok?url=${q}`)
hisoka.sendMessage(m.chat, { video: { url: result.result.nowm }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Error!`)
}
break
case 'covid':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await fetchJson(`http://hadi-api.herokuapp.com/api/corohelp?negara=Indonesia`)
m.reply(`*Terkonfirmasi* : ${hasilnya.result.terkonfirmasi}\n*Meninggal* : ${hasilnya.result.meniggal}\n*Sembuh* : ${hasilnya.result.sembuh}\n*Update* : ${hasilnya.result.update}`)
break
case 'infotsunami':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
tsunami().then(bu =>{
m.reply(bu)
})   
break
case 'detik':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await fetchJson(`http://hadi-api.herokuapp.com/api/detik`)
teksss = `「 *DETIK* 」\n`
for (let i of data.result) {
teksss += `\n*Title* : ${i.title}\n*Img* : ${i.img_url}\n*Time* : ${i.Time}\n*Link* : ${i.link_url}\n`
}
m.reply(teksss.trim())
break
case 'merdeka':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await merdeka()
datanya = data[Math.floor(Math.random(), data.length)]
result = `*Title* : ${datanya.title}\n*Upload* : ${datanya.upload_date}\n*Link* : ${datanya.link}`
sendFileFromUrl(m.chat, datanya.thumb, result, m)
break
case 'beritanasional':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await fetchJson(`http://hadi-api.herokuapp.com/api/beritanasional`)
teks2 = `「 *BERITANASIONAL* 」\n`
for (let i of data.result) {
teks2 += ` \n*Title* : ${i.judul}\n*Kota* : ${i.kota}\n*Foto* : ${i.image}\n*Desc* : ${i.desc}\n*Waktu* : ${i.date_created}\n*Link* : ${i.articleUrl}\n*Isiberita* : ${i.body}\n━━━━━━━━━━━━━━━━━━━━━━\n\n`
}
m.reply(teks2.trim())
break
case 'kalkulator':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`: untuk pembagian\n* untuk perkalian\n- untuk pengurangan\n+ untuk pertambahan\n\nExample : #kalkulator 1+1`)
try {
teks2 = `${q} = ${Math_js.evaluate(q)}`
m.reply(teks2)
} catch (e) {
m.reply(`${e}`)
}
break
case 'kompas':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await kompas()
tekss = `「 *KOMPAS* 」\n`
for (let i of data) {
tekss += ` \n*⭔ Title* : ${i.title}\n*⭔ Url* : ${i.link}\n*⭔ Img* : ${i.image}\n*⭔ Waktu* : ${i.date}\n\n`
}
m.reply(tekss.trim())
break
case 'base64enc':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example ${prefix}base64enc Waduh`)
hasilnya = await fetchJson(`http://hadi-api.herokuapp.com/api/base64?teks=${q}&method=enc`)
m.reply(hasilnya.result.enc)
break
case 'base64dec':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example ${prefix}base64dec V2FuZHk=`)
hasilnya = await fetchJson(`http://hadi-api.herokuapp.com/api/base64?teks=${q}&method=enc`)
m.reply(hasilnya.result.dec)
break
case 'wanted': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/wanted?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'rip': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/rip?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'sepia': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/sepia?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'beatutiful': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/beautiful?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'blur': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/blur?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'invert': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/invert?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'shit': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/shit?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'jokeoverhead': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/jokeOverHead?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'hitler': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/hitler?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'fakepalm': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/facepalm?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'circle': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/circle?url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'infogempa':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await gempa()
teks2 = `*INFO GEMPA*
*Wilayah* : ${hasilnya.Wilayah}
*Lintang* : ${hasilnya.Lintang}
*Bujur* : ${hasilnya.Bujur}
*Magnitudo* : ${hasilnya.Magnitudo}
*Kedalaman* : ${hasilnya.Kedalaman}
*Map* : ${hasilnya.Map}`
sendFileFromUrl(m.chat, hasilnya.Map, teks2, m)
break
case 'trendtwit':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
trend = await trendtwit()
console.log(trend)
teks2 = `「 *TRENDTWITTER* 」\n`
for (let i of trend.result) {
teks2 += `\n*Rank* : ${i.rank}\n*Hastag* : ${i.hastag}\n*Tweet* : ${i.tweet}\n`
}
m.reply(teks2.trim())
break
case 'nuliskanan':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Babi adalah hewan`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/canvas/nulis?text=${q}` }, caption: `Jangan malas pak:v` }, { quoted: m })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'patrickmaker': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/patrick?image=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'spongebobmaker': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/spongebob?image=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'namaninja':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
hasilnya = await namaninja(q)
m.reply(hasilnya)
break
case 'bahasapurba':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Indonesia`)
hasilnya = await purba(q)
m.reply(hasilnya)
break
case 'nuliskiri':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Babi adalah hewan`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/canvas/nulis2?text=${q}` }, caption: `Jangan malas pak:v` }, { quoted: m })
break
case 'gay': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/gay?avatar=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'glass': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/glass?avatar=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'lolice': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/lolice?avatar=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'wasted': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://some-random-api.ml/canvas/wasted?avatar=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'captcha': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://yx-api.herokuapp.com/api/canvas/captcha?img=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command}`)
}
break
case 'xnxx': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
if (!q) return m.reply(`Example : ${prefix + command} Bokep bocah`)
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/xnxx?pp=${anu}&username=${q}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command} Bokep anak`)
}
break
case 'yasinimage': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
if (!q) return m.reply(`Example : ${prefix + command} Bokep bocah`)
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
hisoka.sendMessage(m.chat, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/yasin?name=${q}&url=${anu}` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Reply image dengan caption ${prefix + command} Bokep anak`)
}
break
case 'ssweb':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
if (!q) return m.reply(`Example : ${prefix + command} https://google.com`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=phone&full=on` }, caption: `Done` }, { quoted: m })
} catch (e) {
m.reply(`Url invalid`)
}
break
case 'qrcode':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.zacros.my.id/other/qrcode?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'tourl': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
m.reply(anu)
} else {
throw `Kirim Gambar Dengan Caption ${prefix + command}`
}
break
case 'tti':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Wandy`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://leyscoders-api.herokuapp.com/api/textto-image?text=${q}` }, caption: `Done` }, { quoted: m })
break
case 'tinyurl':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].includes('www')) return m.reply('Url harus berupa https://url')
m.reply(mess.wait)
anus = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
m.reply(`${anus.data}`)
console.log(anus.data)
break
case 'cutly':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].includes('www')) return m.reply('Url harus berupa https://url')
m.reply(mess.wait)
anus = await fetchJson(`http://hadi-api.herokuapp.com/api/cuttly?url=${q}`)
m.reply(anus.result)
console.log(anus.result)
break
case 'bitly':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].includes('www')) return m.reply('Url harus berupa https://url')
m.reply(mess.wait)
anus = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${q}`)
m.reply(anus.result)
console.log(anus.result)
break
case 'artinama': 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} wandy`)
m.reply(mess.wait)
data = await artinama(q)
m.reply(data)
break
case 'artimimpi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} salto`)
hasilnya = await fetchJson(`https://yx-api.herokuapp.com/api/primbon/artimimpi?mimpi=${q}`)
m.reply(hasilnya.result)
break
case 'kecocokannama': case 'cocoknama': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix+ command} 2000 9 18`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ttp':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example: ${prefix + command} Hai`)
m.reply(mess.wait)
hisoka.sendImageAsSticker(m.chat, `http://hadi-api.herokuapp.com/api/canvas/ttp?text=${q}`, m, { packname: global.packname, author: global.author })
break
case 'attp':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example: ${prefix + command} Hai`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { sticker: { url: `https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`, }, gifPlayback: true }, { quoted: m })
break
case 'semoji':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 😂`
m.reply(mess.wait)
emoji.get(`${q}`).then(emoji => {
linknya = `${emoji.images[10].url}`
hisoka.sendImageAsSticker(m.chat, linknya, m, { packname: global.packname, author: global.author })
})
break
case 'gura':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
data = fs.readFileSync('./lib/gura.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hisoka.sendImageAsSticker(m.chat, randKey.result, m, { packname: global.packname, author: global.author })
break
case 'dadu':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let rend = randomNomor(6)
damdu = fs.readFileSync(`./sticker/${rend}.webp`)
hisoka.sendMessage(m.chat, { sticker: damdu }, { quoted: m})
break
case 'anime':
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/anime` }, caption: `Done` }, { quoted: m })
break
case 'emojimix':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} 😂+😭`
m.reply(mess.wait)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
break
case 'animestick':
case 'stickeranime':
case 'stikeranime':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
data = fs.readFileSync('./lib/animestick.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hisoka.sendImageAsSticker(m.chat, randKey.result, m, { packname: global.packname, author: global.author })
break
case 'patrick':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
data = fs.readFileSync('./lib/patrick.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hisoka.sendImageAsSticker(m.chat, randKey.result, m, { packname: global.packname, author: global.author })
break
case 'doge':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
data = fs.readFileSync('./lib/doge.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hisoka.sendImageAsSticker(m.chat, randKey.result, m, { packname: global.packname, author: global.author })
break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'toimage': case 'toimg':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
} catch (e) {
m.reply(`Reply sticker dengan caption : ${prefix + command}`)
}
break
case 'ytdesc':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} https://youtu.be/JT7xQsHDmYk`)
m.reply(mess.wait)
res = await yts(q)
m.reply(res.all[0].description)
break
case 'yts':
case 'ytsearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Aci game spot`)
const ytsearch = require('yt-search')
m.reply(mess.wait)
ytsearch(q).then( data => {
let yt = data.videos
var jumlah = 15
if (yt.length < jumlah) jumlah = yt.length
var no = 0
let txt = `*YOUTUBE SEARCH*`
for (let i = 0; i < jumlah; i++) {
no += 1
txt += `\n──────────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
}
hisoka.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: m })
}).catch(() => m.reply(`Error / video tidak di temukan!`))
break
case 'wallpapersearch': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Naruto`)
m.reply(mess.wait)
anus = await wallpaper(q)
result = anus[Math.floor(Math.random(), anus.length)]
hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
.catch((err) => {
m.reply(`Maaf, tidak ada hasil wallpapersearch untuk ${q}`)
})
}
break
case 'alphacoders': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Naruto`)
m.reply(mess.wait)
anus = await wallpaperv2(q)
result = anus[Math.floor(Math.random(), anus.length)]
hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
.catch((err) => {
m.reply(`Maaf, tidak ada hasil wallpapersearch untuk ${q}`)
})
}
break
case 'zerochansearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} azur_lane`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `https://api.zacros.my.id/search/konachan?query=${q}` }, caption: `*Hasil dari : ${q}*` }, { quoted: m })
break
case 'kbbi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} anjing`)
m.reply(mess.wait)
hasilnya = await kbbi(q)
m.reply(hasilnya.data.arti)
break
case 'tiktoksearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix}tiktoksearch wandy_gan`)
m.reply(mess.wait)
data = await tiktoksearch(q)
teks2 = `「 *TIKTOKSEARCH* 」\n`
for (let i of data.result) {
teks2 += `\n*User* : ${i.user}\n*Username* : ${i.username}\n*Url* : ${i.user_url}\n`
}
m.reply(teks2.trim())
break
case 'linkwa':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix}${command} wibu`)
m.reply(mess.wait)
linkwaa = await linkwa(`${q}`)
f = `*GROUP WHATSAPP*`
for (let i of linkwaa) {
f += `\n
*Nama : ${i.nama}
*Link* : ${i.link}\n\n`
}
veler = f.trim()
m.reply(veler)
break
case 'pinterest': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} ayam`)
m.reply(mess.wait)
anus = await pinterest(q)
result = anus[Math.floor(Math.random(), anus.length)]
hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
.catch((err) => {
m.reply(`Maaf, tidak ada hasil pinterest untuk ${q}`)
})
}
break
case 'igstalk':
try {
if (!q) return m.reply(`Example : ${prefix + command} Aci game spot`)
m.reply(mess.wait)
 Y = await igstalk(`${args.join(' ')}`)
console.log(Y)
ten = `${Y.profile_pic_url_hd}`
teks2 = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendFileFromUrl(m.chat, ten, teks2, m)
} catch (e) {
m.reply(util.format(e))
}
break
case 'wallpaperhd':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
if (!q) return m.reply(`Example : ${prefix + command} Genshin`)
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: `http://hadi-api.herokuapp.com/api/wallpaperhd?q=${q}` }, caption: `*Hasil dari : ${q}*` }, { quoted: m })
} catch (e) {
m.reply(`Result tidak di temukan`)
}
break
case 'wallpaperflare':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} naruto`)
try {
m.reply(mess.wait)
hasilnya = await fetchJson(`http://hadi-api.herokuapp.com/api/wallpaperflare?query=${q}`)
hasilnya = hasilnya.result;
const result = hasilnya[Math.floor(Math.random() * hasilnya.length)]
hisoka.sendMessage(m.chat, { image: { url: result }, caption: `Hasil dari : ${q}` }, { quoted: m })
} catch (e) {
m.reply(`Result tidak di temukan`)
}
break
case 'wikipedia':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Example : ${prefix}${command} anjing`)
m.reply(mess.wait)
ressss = await wiki(q).catch(e => {
return m.reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${ressss[0].judul}
*Wiki :* ${ressss[0].wiki}`
sendFileFromUrl(m.chat, ressss[0].thumb, result, m).catch(e => {
m.reply(result)
})
break
case 'playstore':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Example : ${prefix}${command} ff`)
m.reply(mess.wait)
let play = await playstore(q)
let store2 = '\n'
for (let i of play){
store2 += `\n*[ _PLAY STORE_ ] *\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n`
}
m.reply(store2)
break
case 'ringtone': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} black rover`
m.reply(mess.wait)
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'wikimedia': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
if (!text) throw `Example: ${prefix + command} Ayam`
let { wikimedia } = require('./lib/scraper')
anus = await wikimedia(text)
result = anus[Math.floor(Math.random() * anus.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}`,
footer: fake,
buttons: buttons,
headerType: 4
}
hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'chord':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} melukis senja`)
try {
hasilnya = await fetchJson(`http://hadi-api.herokuapp.com/api/chord?q=${q}`)
m.reply(hasilnya.result)
} catch (e) {
m.reply(hasilnya.msg)
}
break
case 'stickersearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix}stickersearch patrick`)
stik = await stickersearch(q)
m.reply(mess.wait)
m.reply(`*Title* : ${stik.title}\n*Author* : ${stik.author}\n*Author_link* : ${stik.author_link}\n\n_Tunggu sedang mengirim sticker!_`)
let linkstic = stik.sticker[Math.floor(Math.random(), stik.sticker.length)]
hisoka.sendImageAsSticker(m.chat, linkstic, m, { packname: global.packname, author: global.author })
break
case 'stickertelegram':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix}stickertelegram patrick`)
stik = await stickerTelegram(q)
m.reply(mess.wait)
for (let i of stik) {
teks = `Title: ${i.title}\nSticker: ${i.stickers}`
}
m.reply(teks.trim())
break
case 'sfile':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix}sfile mod ml`)
sfile = await sfilesearch(q)
teks2 = `「 *SFILE* 」\n`
for (let i of sfile) {
teks2 += `\n*Nama* : ${i.nama}\n*Size* : ${i.size}\n*Link* : ${i.link}\n`
}
m.reply(teks2.trim())
break
case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 812-9056-5513'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 812-9056-5513'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'shoppe':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} Vivo y30`)
m.reply(mess.wait)
shop = await fetchJson(`https://x-restapi.herokuapp.com/api/shopee-search?q=${q}&apikey=BETA`)
capt = `
「 *SHOOPE* 」
*Nama product* : ${shop.name}
*Mata uang* : ${shop.currency}
*Stok* : ${shop.stock}
*Pembeli* : ${shop.historical_sold}
*Like* : ${shop.liked_count}
*View* : ${shop.view_count}
*Item status* : ${shop.item_status}
*Price* : ${shop.price}
*Rate* : ${shop.item_rating}
*Lokasi* : ${shop.shop_location}`
hisoka.sendMessage(m.chat, { image: { url: shop.image }, caption: capt }, { quoted: m })
break
case 'gimage': 
case 'ggs':
case 'googleimage':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : ${prefix + command} ayam`)
m.reply(mess.wait)
anus = await googleImage(q)
result = anus[Math.floor(Math.random(), anus.length)]
hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
.catch((err) => {
m.reply(`Maaf, tidak ada hasil ${command} untuk ${q}`)
})
break
case 'google':
case 'googlesearch':
case 'ggs':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Contoh penggunaan: ${prefix + command} Bot WhatsApp`)
m.reply(mess.wait)
resss = await ggs({'query' : `${q}`})
kant = ``
for (let i of resss) {
kant += `\n*▢ Judul* : ${i.title}
*▢ Link* : ${i.link}
*▢ Keterangan* : ${i.snippet}\n\n───────────────────────\n`
}
var akhir = kant.trim()
m.reply(akhir)
break
case 'herolist':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
m.reply(listt)
})
break
case 'herodetail':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`Example : #herodetail Aldous`)
res = await herodetails(q)
her = `*Hero Details ${q}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
m.reply(her)
break

default:

if (budy.includes('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.includes('>')) {
if (!isCreator) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.includes('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
 hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}

}
} catch (err) {
m.reply(util.format(err))
console.log(err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
