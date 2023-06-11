let handler = async (m, { conn, text }) => {
   if (!text) throw `QUAL E A NOVA BIO?`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, 'INFO ALTERADA COM SUCESSO✅️', m)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler
