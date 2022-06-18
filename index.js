const { Telegraf, Markup } = require('telegraf')
// npm run dev
require('dotenv').config()
const text = require('./const')
const bot = new Telegraf('5503766550:AAGyeNyFciD9PqcNRpvmWK-UHT8oP_LoquM')
bot.start((ctx) => ctx.reply(`Привіт ${ctx.message.from.first_name},Пропоную зіграти гру`))
bot.help((ctx) => ctx.reply(text.commands))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('math', (ctx) => {
   ctx.replyWithHTML('<b>Цифри</b>', Markup.inlineKeyboard(
      [
         [Markup.button.callback('1', 'btn_1'), Markup.button.callback('2', 'btn_2'), Markup.button.callback('3', 'btn_3')],
         [Markup.button.callback('4', 'btn_4'), Markup.button.callback('5', 'btn_5'), Markup.button.callback('6', 'btn_6')],
         [Markup.button.callback('7', 'btn_7'), Markup.button.callback('8', 'btn_8'), Markup.button.callback('9', 'btn_9')],
         [Markup.button.callback('Link Youtube', 'btn_0')],
      ]
   ))

})
bot.action('btn_1', (ctx) => {
   ctx.replyWithHTML('1')
})
bot.action('btn_2', (ctx) => {
   ctx.replyWithHTML('2')
})
bot.action('btn_3', (ctx) => {
   ctx.replyWithHTML('3')
})
bot.action('btn_4', (ctx) => {
   ctx.replyWithHTML('4')
})
bot.action('btn_5', (ctx) => {
   ctx.replyWithHTML('5')
})
bot.action('btn_6', (ctx) => {
   ctx.replyWithHTML('6')
})
bot.action('btn_7', (ctx) => {
   ctx.replyWithHTML('7')
})
bot.action('btn_8', (ctx) => {
   ctx.replyWithHTML('8')
})
bot.action('btn_9', (ctx) => {
   ctx.replyWithHTML('9')
})
bot.action('btn_0', (ctx) => {
   ctx.replyWithHTML('<a href="https://youtube.com/">Link</a>'
   )
})

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

