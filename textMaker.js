const { bot, textMaker } = require('../lib')

bot(
	{
		pattern: 'sed ?(.*)',
		fromMe: true,
		desc: 'Sad text effect',
		type: 'textmaker',
	},
	async (message, match) => {
		if (!match) return await message.sendMessage('Give me text')
		const effect_url =
			'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
		const { status, url } = await textMaker(effect_url, match)
		if (url) return await message.sendFromUrl(url)
	}
)
bot(
	{
		pattern: 'steel ?(.*)',
		fromMe: true,
		desc: 'Steel text effect',
		type: 'textmaker',
	},
	async (message, match) => {
		if (!match)
			return await message.sendMessage(
				'Give me text\nExample .steel steel;effect'
			)
		const [text1, text2] = match.split(';')
		if (!text1 || !text2)
			return await message.sendMessage(
				'Give me text\nExample .steel steel;effect'
			)
		const effect_url = 'https://en.ephoto360.com/steel-text-effect-66.html'
		const { status, url } = await textMaker(effect_url, match)
		if (url) return await message.sendFromUrl(url)
	}
)

bot(
	{
		pattern: 'metallic ?(.*)',
		fromMe: true,
		desc: 'Matallic text effect',
		type: 'textmaker',
	},
	async (message, match) => {
		if (!match) return await message.sendMessage('Give me text')
		const effect_url =
			'https://textpro.me/create-a-metallic-text-effect-free-online-1041.html'
		const { status, url } = await textMaker(effect_url, match)
		if (url) return await message.sendFromUrl(url)
	}
)
bot(
	{
		pattern: 'glitch ?(.*)',
		fromMe: true,
		desc: 'Glitch text effect',
		type: 'textmaker',
	},
	async (message, match) => {
		if (!match)
			return await message.sendMessage(
				'Give me text\nExample .glitch steel;effect'
			)
		const [text1, text2] = match.split(';')
		if (!text1 || !text2)
			return await message.sendMessage(
				'Give me text\nExample .glitch steel;effect'
			)
		const effect_url =
