let handler = async (m, { command, conn, usedPrefix, args }) => {
const items = {
   buy: {
        exp: { eleksirb: 3 }, 
        limit: { money: 400 },
        diamond: { berlian: 5 },
        joincount: { limit: 15 },
        emerald: { emasbatang: 5 },
        berlian: { kyubi: 25 },
        kyubi: { trash: 15 },  
        gold: {  diamond: 35 },
        money: { kaleng: 2 },
        tiketcoin: { joincount: 3 },
        
        potion: { money: 550 },
        aqua: { botol: 2 },
        trash: { eleksirb: 5 },
        wood: { string: 5 },
        rock: { kardus: 6 },
        batu: { coal: 25 },
        string: { kaleng: 4 },
        iron: { kyubi: 20 },
        coal: { trash: 20 },
        botol: { wood: 4 },
        kaleng: { potion: 2 },
        kardus: { trash: 20 },
        
        eleksirb: { healtmonster: 2},
        emasbatang: { kayu: 30},
        emasbiasa: { diamond: 18 },
        rubah: { berlian: 40 },
        sampah: { trash: 70 },
        serigala: { kaleng: 125 },
        kayu: { wood: 40 },
        sword: { gold: 2 },
        umpan: { string: 8 },
        healtmonster: { kyubi: 19 },
        pancingan: { iron: 2 },
        emas: { berlian: 20 },
        
        common: { aqua: 40 },
        uncoommon: { kyubi: 55 },
        mythic: { tiketcoin: 17 },
        pet: { kayu: 45 },
        gardenboxs: { healtmonster: 25 },
        legendary: { emerald: 75 },
        
        anggur: { emerald: 3 },
        apel: { emerald: 3 },
        jeruk: { emerald: 3 },
        mangga: { emerald: 3 },
        pisang: { emerald: 3 },
        
        bibitanggur: { aqua: 15 },
        bibitapel: { aqua: 15 },
        bibitjeruk: { aqua: 15 },
        bibitmangga: { aqua: 15 },
        bibitpisang: { aqua: 15 },
        
        centaur: { limit:45 },
        griffin: { limit: 55 },
        kucing: { limit: 70 },
        naga: { limit: 85 },
        fox: { limit: 100 },
        kuda: { limit: 125 },
        phonix: { limit: 140 },
        wolf: { limit: 155 },
        
        petFood: { tiketcoin: 4 },
        makanancentaur: { tiketcoin: 6 },
        makanangriffin: { tiketcoin: 8 },
        makanankyubi: { tiketcoin: 10 },
        makanannaga: { tiketcoin: 12 },
        makananpet: { tiketcoin: 14 },
        makananphonix: { tiketcoin: 16 }
    },
   
    sell: {
        exp: { trash: pickRandom([0, 1, 2, 0]) },
        limit: { eleksirb: pickRandom([0, 4, 1, 0]) },
        diamond: { tiketcoin: pickRandom([0, 1, 2, 0]) },
        joincount: { emasbatang: pickRandom([0, 1, 2, 0]) },
        emerald: { money: pickRandom([10, 500, 1, 0]) },
        berlian: { sword: pickRandom([1, 1, 2, 0]) },
        kyubi: { aqua: pickRandom([1, 1, 2, 0]) },
        gold: { exp: pickRandom([0, 20, 800, 1]) },
        money: { aqua: pickRandom([0, 1, 2, 0]) },
        tiketcoin: { kyubi: pickRandom([0, 1, 2, 0]) },
        
        potion: { botol: pickRandom([0, 1, 3, 0]) },
        aqua: { kaleng: pickRandom([0, 1, 2, 0]) },
        trash: { umpan: pickRandom([0, 1, 2, 0]) },
        wood: { coal: pickRandom([0, 1, 2, 0]) },
        rock: { string: pickRandom([0, 1, 2, 0]) },
        batu: { joincount: pickRandom([0, 1, 2, 0]) },
        string: { kardus: pickRandom([0, 1, 2, 0]) },
        iron: { healtmonster: pickRandom([0, 1, 3, 0]) },
        coal: { money: pickRandom([0, 3, 30, 0]) },
        botol: { aqua: pickRandom([0, 1, 2, 0]) },
        kaleng: { batu: pickRandom([0, 1, 2, 0]) },
        kardus: { pancingan: pickRandom([0, 1, 2, 0]) },
        
        eleksirb: { rubah: pickRandom([0, 1, 2, 0]) },
        emasbatang: { emasbiasa: pickRandom([0, 1, 3, 0]) },
        emasbiasa: { potion: pickRandom([0, 1, 2, 0]) },
        rubah: { petFood: pickRandom([0, 1, 4, 0]) },
        sampah: { trash: pickRandom([0, 2, 20, 0]) },
        serigala: { petFood: pickRandom([0, 2, 22, 0]) },
        kayu: { wood: pickRandom([0, 3, 5, 0]) },
        sword: { berlian: pickRandom([0, 1, 2, 0]) },
        umpan: { exp: pickRandom([0, 5, 40, 0]) },
        healtmonster: { diamond: pickRandom([0, 1, 2, 0]) },
        pancingan: { money: pickRandom([0, 10, 30, 0]) },
        emas: { berlian: pickRandom([0, 1, 3, 0]) },
        
        common: { limit: pickRandom([0, 3, 10, 0]) },
        uncoommon: { diamond: pickRandom([0, 4, 15, 0]) },
        mythic: { berlian: pickRandom([0, 3, 13, 0]) },
        pet: { money: pickRandom([0, 500, 1500, 0]) },
        gardenboxs: { gold: pickRandom([0, 1, 3, 0]) },
        legendary: { emerald: pickRandom([0, 4, 20, 0]) },
        
        anggur: { joincount: pickRandom([0, 1, 2, 0]) },
        apel: { tiketcoin: pickRandom([0, 1, 2, 0]) },
        jeruk: { berlian: pickRandom([0, 1, 2, 0]) },
        mangga: { gold: pickRandom([0, 1, 2, 0]) },
        pisang: { diamond: pickRandom([0, 1, 2, 0]) },
        
        bibitanggur: { potion: pickRandom([0, 1, 2, 0]) },
        bibitapel: { umpan: pickRandom([0, 1, 3, 0]) },
        bibitjeruk: { healtmonster: pickRandom([0, 1, 2, 0]) },
        bibitmangga: { pancingan: pickRandom([0, 1, 3, 0]) },
        bibitpisang: { wood: pickRandom([0, 2, 4, 0]) },
        
        centaur: { anggur: pickRandom([0, 3, 5, 0]) },
        griffin: { apel: pickRandom([0, 2, 4, 0]) },
        kucing: { jeruk: pickRandom([0, 3, 6, 0]) },
        naga: { mangga: pickRandom([0, 4, 8, 0]) },
        fox: { pisang: pickRandom([0, 5, 9, 0]) },
        kuda: { anggur: pickRandom([0, 6, 10, 0]) },
        phonix: { apel: pickRandom([0, 7, 12, 0]) },
        wolf: { jeruk: pickRandom([0, 8, 15, 0]) },
        
        petFood: { money: pickRandom([0, 400, 1400, 0]) },
        makanancentaur: { diamond: pickRandom([0, 1, 2, 0]) },
        makanangriffin: { diamond: pickRandom([0, 1, 3, 0]) },
        makanankyubi: { diamond: pickRandom([0, 2, 4, 0]) },
        makanannaga: { diamond: pickRandom([0, 2, 4, 0]) },
        makananpet: { diamond: pickRandom([0, 3, 5, 0]) },
        makananphonix: { diamond: pickRandom([0, 3, 5, 0]) },
    }
}   
   
let imgr = flaaa.getRandom()
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
${htki} *COMPRAR : BUY* ${htka}
`.trim()) : 
(`
${htki} *VENDER : SELL* ${htka}
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🔖 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝙍𝙏𝙄𝘾𝙐𝙇𝙊𝙎 : 𝙇𝙄𝙎𝙏 𝙊𝙁 𝘼𝙍𝙏𝙄𝘾𝙇𝙀𝙎
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `*» 1 ⇢ ${global.rpgshop.emoticon(v)}*\n*Cuesta:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*Compra* ${global.rpgshopp.emoticon(v)} Usando ${usedPrefix + command} ${v} *Cantidad*\n*---------------------------------------------------*\n`.trim()
    }).join('\n')}
✨ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 : 𝙎𝘼𝙈𝙋𝙇𝙀 𝙏𝙊 𝘽𝙐𝙔
*Use el comando de la siguiente forma:*
*» ${usedPrefix}${command} (articulo) (cantidad)*
*» ${usedPrefix}${command} (item) (quantity)*

*★ Ejemplo : Example*
*» ${usedPrefix}${command} potion 5*
`.trim()) : 
(`
🔖 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘼𝙍𝙏𝙄𝘾𝙐𝙇𝙊𝙎 : 𝙇𝙄𝙎𝙏 𝙊𝙁 𝘼𝙍𝙏𝙄𝘾𝙇𝙀𝙎
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `*» 1 ⇢ ${global.rpgshop.emoticon(v)}*\n*Ganancia:* ${listItems[v][paymentMethod]} ${global.rpgshop.emoticon(paymentMethod)}\n*Venda* ${global.rpgshopp.emoticon(v)} Usando ${usedPrefix + command} ${v} *Cantidad*\n*---------------------------------------------------*\n`.trim()
    }).join('\n')}
✨ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝙋𝘼𝙍𝘼 𝙑𝙀𝙉𝘿𝙀𝙍 : 𝙎𝘼𝙈𝙋𝙇𝙀 𝙏𝙊 𝙎𝙀𝙇𝙇
*Use el comando de la siguiente forma:*
*» ${usedPrefix}${command} (articulo) (cantidad)*
*» ${usedPrefix}${command} (item) (quantity)*

*★ Ejemplo : Example*
*» ${usedPrefix}${command} potion 5*
`.trim())
)
    image = (command.toLowerCase() == 'buy' ?
(imgr + 'COMPRAR : BUY') : 
(imgr + 'VENDER : SELL')
)
    buttons = (command.toLowerCase() == 'buy' ?
([
[`🏪 𝙏𝙄𝙀𝙉𝘿𝘼 𝙋𝘼𝙍𝘼 𝙑𝙀𝙉𝘿𝙀𝙍`, `${usedPrefix}sell`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
]) : 
([
[`🏪 𝙏𝙄𝙀𝙉𝘿𝘼 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍`, `${usedPrefix}buy`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
])
)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return conn.sendButton(m.chat, text, footer, image, buttons, m)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.sendButton(m.chat,
`*–『 INSUFFICIENT CREDIT 』–*`, 
`Necesitas *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} Compra *${total}* ${global.rpg.emoticon(item)}${item}.
Tienes *${user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} en túinventario.
–––––––––––––––––––––––––
ᴛɪᴩ :
ᴏᴩᴇɴ ᴄʀᴀᴛᴇs & ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs.
⮕ ᴛᴏ ᴏᴩᴇɴ ᴄʀᴀᴛᴇs:
.open crate
⮕ ᴛᴏ ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs:
.adventure | .daily | .monthly
`.trim(), imgr + 'RECURSOS BAJOS : LOW RESOURCES', [
[`𝙋𝙚𝙙𝙞𝙧 𝘼𝙮𝙪𝙙𝙖 | 𝘼𝙨𝙠 𝙛𝙤𝙧 𝙝𝙚𝙡𝙥 ☘️`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod}.
*» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} @${conn.getName(m.sender)}`]], m)
       
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
return conn.sendButton(m.chat,
`*––『 COMPRADO | BOUGHT 』––*`,
`${conn.getName(m.sender)} 
*𝙃𝙖𝙨 𝘾𝙤𝙢𝙥𝙧𝙖𝙙𝙤 ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
*--------------------------------------------*
*𝙂𝙖𝙨𝙩𝙤𝙨: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*
*𝘼𝙝𝙤𝙧𝙖 𝙩𝙞𝙚𝙣𝙚: ${user[item]} ${global.rpgshopp.emoticon(item)}*
`.trim(), imgr + 'COMPRA EXITOSA : DONE', [
[`👝 𝘾𝘼𝙍𝙏𝙀𝙍𝘼 | 𝙒𝘼𝙇𝙇𝙀𝙏`, `${usedPrefix}cartera`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
], m)
} else {
        if (user[item] < total) return m.reply(`No tienes suficiente *${global.rpg.emoticon(item)}${item}* para vender solo tienes ${user[item]} Recursos\n\nYou don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]}`)
       
      let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        user[item] -= total
        user[paymentMethod] += listItems[item][paymentMethod] * total
    
return conn.sendButton(m.chat,
`*––『 VENDIDO | SOLD 』––*`,
`${conn.getName(m.sender)} 
*𝙃𝙖𝙨 𝙑𝙚𝙣𝙙𝙞𝙙𝙤 ${item} » ${total} ${global.rpgshop.emoticon(item)}*.
*--------------------------------------------*
*𝙂𝙖𝙣𝙖𝙣𝙘𝙞𝙖𝙨: ${(listItems[item][paymentMethod] * total)} ${global.rpgshop.emoticon(paymentMethod)}*
*𝘼𝙝𝙤𝙧𝙖 𝙩𝙞𝙚𝙣𝙚: ${user[paymentMethod]} ${global.rpgshopp.emoticon(paymentMethod)}*
`.trim(), imgr + 'VENTA EXITOSA : DONE', [
[`👝 𝘾𝘼𝙍𝙏𝙀𝙍𝘼 | 𝙒𝘼𝙇𝙇𝙀𝙏`, `${usedPrefix}cartera`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]
], m)
}}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
