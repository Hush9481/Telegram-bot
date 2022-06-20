const { Telegraf } = require('telegraf')
// npm run dev
require('dotenv').config()//1
const text = require('./const')
const bot = new Telegraf('5503766550:AAGyeNyFciD9PqcNRpvmWK-UHT8oP_LoquM')
bot.start((ctx) => ctx.reply(`Привіт ${ctx.message.from.first_name}`))
bot.help((ctx) => ctx.reply(text.commands))
//bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hi'))
bot.hears('ку бот', (ctx) => ctx.reply('Ку,ку'))
bot.hears('бот що робиш ?', (ctx) => ctx.reply('Пахаю на @Xiol1k'))
bot.hears('бот шо ти ?', (ctx) => ctx.reply('Потихоньку,а ти ?'))
bot.hears('бот як справи ?', (ctx) => ctx.reply('Як для бота нормально'))
bot.hears('Всім привіт', (ctx) => ctx.reply('Привіт привіт!'))
bot.hears('Блять', (ctx) => ctx.reply('Ти матюкнувся чи мені побачилось ?'))
bot.hears('бот ти бот ха', (ctx) => ctx.reply('Зато розумніший за тебе)'))
bot.hears('похуй', (ctx) => ctx.reply('Підбирай гарніші слова'))
bot.hears('хуй', (ctx) => ctx.reply('Ти матюкнувся чи мені побачилось ?'))
bot.hears('пізда', (ctx) => ctx.reply('Твоя ?'))
bot.hears('бот', (ctx) => ctx.reply('Не клич не допоможу сам в рабстві'))
bot.hears('ксіомі фу', (ctx) => ctx.reply('Еее ви на мого боса не гоніть'))
bot.hears('ксіомі лох', (ctx) => ctx.reply('Сама така'))
bot.hears('заєбісь', (ctx) => ctx.reply('Доречніше прекрасно)'))
bot.hears('єбать', (ctx) => ctx.reply('Без мата бо підпалю телефон!'))
bot.hears('бот коли в тебе буде жена ?', (ctx) => ctx.reply('Коли мій бос створить мені красунечку(..'))
/*bot.command('math', (ctx) => {
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
})*/
//kkomentariyvrevev
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

