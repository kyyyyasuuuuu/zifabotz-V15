let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 7282,
    status: 1,
    surface : 1,
    message: `Broadcast Zifabot,`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'BZ')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = (/bc|broadcast/i.test(text) ? text : text)
  for (let id of chats) conn.relayWAMessage(conn.prepareMessageFromContent(id, {
        "listMessage": {
          "title": `──────❏ *Broadcast Zifabotz* ❏──────`.trim(),
          "description": content.trim(),
          "footerText": 
global.botdate,
          "buttonText": "🎐PILIHAN",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": '🧒» MY OWNER',
                                         "rowId": ".owner"
                                    }, {
                                         "title": '🗃️» LIST MENU',
                                         "rowId": ".menu2"
                                    }, {
                                         "title": '🔖» SCRIPT',
                                         "rowId": ".sc"
                       }],
                                "title": global.wm
                  }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                      }
                     }, {quoted: ftroli}), {waitForAck: true})
  conn.reply(m.chat, `📨Mengirim pesan broadcast ke ${chats.length} chat...`, m)
}
handler.help = ['broadcastlist','bclist','bcl'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastlist|bclist|bcl)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
