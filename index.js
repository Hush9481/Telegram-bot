const { Telegraf, Markup } = require('telegraf')
// npm run dev
require('dotenv').config()//1
const text = require('./const')
const bot = new Telegraf('5503766550:AAGyeNyFciD9PqcNRpvmWK-UHT8oP_LoquM')
bot.start((ctx) => ctx.reply(`Привіт ${ctx.message.from.first_name, 'Я чат-бот створенний щоб веселити чат,жми /help щоб дізнатись що я можу'}`))
bot.help((ctx) => ctx.reply('Пропишіть команду: /what'))
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
bot.hears('Пон', (ctx) => ctx.reply('тампон'))
bot.hears('пон', (ctx) => ctx.reply('гандон'))
bot.hears('сука', (ctx) => ctx.reply('собака жіночого роду'))
bot.hears('йдіть нахуй', (ctx) => ctx.reply('на чий ?'))
bot.hears('йди нахуй', (ctx) => ctx.reply('нахуй не в моді піздуй по природі🙄'))
bot.hears('На мій', (ctx) => ctx.reply('замалий'))
bot.hears('на мій', (ctx) => ctx.reply('замалий'))
bot.hears('Я в ахуе', (ctx) => ctx.reply('+++'))
bot.hears('Я в ахує', (ctx) => ctx.reply('+++'))
bot.hears('Це жопа', (ctx) => ctx.reply('згод'))
bot.hears('це жопа', (ctx) => ctx.reply('згод'))
bot.hears('нахуя', (ctx) => ctx.reply('сам хз'))
bot.hears('Нахуя', (ctx) => ctx.reply('сам хз'))
bot.hears('Бот,як на смак рашн кідс?', (ctx) => ctx.reply('Смакота, їм кожного ранку'))
bot.hears('Бот,де ти був 8 років назад?', (ctx) => ctx.reply('Домбив бобмас, ем'))
bot.hears('Бот,чий крим?', (ctx) => ctx.reply('Можливо найдуться розумніші питання ?'))
bot.hears('Бот,хто такий Бандера?', (ctx) => ctx.reply('Батько наш'))
bot.hears('Росія топ', (ctx) => ctx.reply('нахуй з чату'))
bot.hears('Україна топ', (ctx) => ctx.reply('А як інакше ?'))
bot.hears('путін', (ctx) => ctx.reply('Хуйло'))
bot.hears('жоска', (ctx) => ctx.reply('не то слово'))
bot.hears('Жиза', (ctx) => ctx.reply('згод'))
bot.hears('жиза', (ctx) => ctx.reply('згод'))
bot.hears('ем', (ctx) => ctx.reply('ну кагби чел..'))
bot.hears('Го в мафію', (ctx) => ctx.reply('го кнш'))
bot.hears('го в мафію', (ctx) => ctx.reply('го кнш'))
bot.hears('як так ?', (ctx) => ctx.reply('хзззз'))
bot.hears('Як так ?', (ctx) => ctx.reply('хзззз'))
bot.hears('відвал голови', (ctx) => ctx.reply('😶😶😶'))
bot.hears('Відвал голови', (ctx) => ctx.reply('😶😶😶'))
bot.hears('Чели', (ctx) => ctx.reply('шо'))
bot.hears('чели', (ctx) => ctx.reply('шо'))
bot.hears('Шо', (ctx) => ctx.reply('хуй в чоло'))
bot.hears('шо', (ctx) => ctx.reply('хуй в чоло'))
bot.hears('Хуй в чоло', (ctx) => ctx.reply('так його нема в тебе🤔'))
bot.hears('хуй в чоло', (ctx) => ctx.reply('так його нема в тебе🤔'))
bot.hears('Є', (ctx) => ctx.reply('Тоді добре'))
bot.hears('я не хочу', (ctx) => ctx.reply('чого це ?'))
bot.hears('Я не хочу', (ctx) => ctx.reply('чого це ?'))
bot.hears('жостка', (ctx) => ctx.reply('перший раз не жоска написали (・_・)'))
bot.hears('Жостка', (ctx) => ctx.reply('перший раз не жоска написали (・_・)'))
bot.hears('ага', (ctx) => ctx.reply('в сраці нога'))
bot.hears('Ага', (ctx) => ctx.reply('в сраці нога'))
bot.hears('ого', (ctx) => ctx.reply(':0'))
bot.hears('Ого', (ctx) => ctx.reply(':0'))
bot.hears('я в шоці', (ctx) => ctx.reply('+++'))
bot.hears('Я в шоці', (ctx) => ctx.reply('+++'))
bot.hears('Бадабум', (ctx) => ctx.reply('Бадабум, Бадубум БадаБиг, Бадабум - Это безумная любовь, параллельна музыка дворов. Бадабум, Бадабум Бадабиг, Бадабум - Это свобода для души моей и близких пацанов.Бадабум, Бадубум БадаБиг, Бадабум - Это безумная любовь, параллельна музыка дворов.Бадабум, Бадабум Бадабиг, Бадабум - Это свобода для души моей и близких пацанов.'))
bot.hears('По полям', (ctx) => ctx.reply('По полям, по полям Синий трактор едет к нам. У него в прицепе кто-то песенку поет! А ну, малыш, давай! Попробуй - отгадай, Кто же, кто же, кто же, кто же Песенку поет?!'))
bot.hears('Кидаю степ', (ctx) => ctx.reply('В моих глазах горит квазар Иду вперед, ни шагу назад Кидаю step, бегу на старт Весь твой профит идет на спад Стреляю метко, как солдат Мой step сияет — это факт И  я step ую прямо в такт Им не убить меня, so hard Кидаю step, лечу прям вверх Мой красный сет убил их всех У них в башке один preset Я  покажу тоннельный свет Им не найти меня, я скрылся Я пропавший в dissmilate Я не оставлю им и следа Из ниоткуда выйду в late'))
bot.hears('Головы сияют', (ctx) => ctx.reply('Головы сияют на моей едкой катане Голоса этих ублюдков по пятам бегут за нами Погруженный в Изанами, все колёса под глазами Её взгляд убьёт любого, её взгляд убьёт цунами Похоронный марш гулей, на часах последний тик Моя thottie — Бравл Шелли, я несу ей дробовик Ваши головы — мишени, я снесу их в один миг Никаких резких движений, ваш хилбар на один  (А-а) Диномайк, триплл килл (Ха), нервы на пределе Войс в моих ушах, я позабыл все дни недели Я убийца по природе всех амбиций в твоём лобби'))
bot.hears('Начинаеться игра', (ctx) => ctx.reply('Начинается игра, я открываю тетрадь смерти Вписал пять никнеймов в строчку Все умрут от реквиема Взял сф а первым пиком Ни о чем не сожалея Ваши слезы и страданья Делают меня сильнее Залетаю на mid Летит койл за койлом ты настолько бездарный Что и не понял как помер Моя клетка necromastery Забита до краёв Если ты ещё не понял Твоя team уже проёб У моей чакры нет границ Твоя чакра на пределе Твои клоны мой чидори Давай глянем кто сильнее Зверь сидит внутри меня Внутри тебя лишь боль и горе Я не понял Какого х*я ты на коре, бро'))
bot.hears('Гімн України', (ctx) => ctx.reply('Ще не вмерла України ні слава, ні воля.Ще нам, браття молодії, усміхнеться доля. Згинуть наші вороженьки, як роса на сонці, Запануєм і ми, браття, у своїй сторонці. Душу й тіло ми положим за нашу свободу, І покажем, що ми, браття, козацького роду. Станем, браття, в бій кривавий від Сяну до Дону, В ріднім краю панувати не дамо нікому. Чорне море ще всміхнеться, дід Дніпро зрадіє,Ще у нашій Україні доленька наспіє. Душу й тіло ми положим за нашу свободу, І покажем, що ми, браття, козацького роду.А завзяття, праця щира свого ще докаже, Ще ся волі в Україні піснь гучна розляже, За Карпати відобється, згомонить степами,України слава стане поміж народами. Душу й тіло ми положим за нашу свободу, І покажем, що ми, браття, козацького роду.'))
bot.hears('Батько наш бандера', (ctx) => ctx.reply('Батько наш - Бандера, Україна - мати Ми за Україну будем воювати! Батько наш - Бандера, Україна - мати Ми за Україну будем воювати Ой, у лісі, лісі, під дубом зеленим Там лежить повстанець тяженько ранений Ой, у лісі, лісі, під дубом зеленим Там лежить повстанець тяженько ранений Ой, лежить він, лежить, терпить тяжкі муки Без лівої ноги, без правої руки Ой, лежить він, лежить, терпить тяжкі муки Без лівої ноги, без правої руки Як прийшла до нього рідна мати його Плаче і ридає, жалує його Ой, сину ж мій, сину, вже навоювався Без правої ручки, без ніжки зостався Мами ж наші, мами, не плачте за нами Не плачте за нами гіркими сльозами Мами ж наші, мами, не плачте за нами Не плачте за нами гіркими сльозами Батько наш - Бандера, Україна - мати Ми за Україну будем воювати! Батько наш - Бандера, Україна - мати Ми за Україну будем воювати! А ми з москалями та й не в згоді жили На самого Петра у бій ми вступили Москалі тікали, аж лапті губили А наші за ними постріли били Москалі тікали, аж лапті губили А наші за ними постріли били Батько наш - Бандера, Україна - мати Ми за Україну будем воювати! Батько наш - Бандера, Україна - мати Ми за Україну будем воювати! Ой, як мати сина свого поховала На його могилі слова написала Ой, як мати сина свого поховала На його могилі слова написала На його могилі слова написала: Слава Україні! Всім героям слава! На його могилі слова написала: Слава Україні! Всім героям слава!'))
bot.hears('Я убийца Killua,Killua,Killua', (ctx) => ctx.reply('Я убийца Killua, Killua, KilluaЯ убийца Killua, Killua, Killua Небесная арена, будто мы сцепились в лобби Я эксперт в потоке нена, вечно слышу твои вопли Нету времени страдать, бегу вокруг касаний молний Мое лицо залито кровью, быть свирепым — мое хобби Уровень меж нами теперь слишком различен Эта душа в твоем теле так обычна Бьется головой о стены, психика так вышла Туша в черном худи для меня безразлична  Основной инстинкт — пое * ать, я psychokilla Кинул цепи — всех убило В телефоне triple zero, твои рофлы — очень мило Я убийца Killua, Killua, Killua Я убийца Killua, Killua, Killua(Э - эй) Psycho Ghoul, я кинул пулю этим с * кам между глаз Достаю свою катану, в моих легких only газ они кричат мне: «Ах * енный», вызвал в них ажиотаж Визор вниз, вошедший в мрак, он звал меня в последний раз Вижу копии себя, как будто след от эхо ритма Мои когти веном - питан, их удар неотразим Я не возлюблен в этом мире без нормального режима С * ка, да, я в этой маске — main причина эгоизма Ten, ren, hatsu, бум! Моя харизма — порождение садизма Эта тати Неферпита, чейзит вайб идеализм На мне линк no кд, моя позиция закрыта Мувы в тени под smokами, я не Варден, это шиза В моей власти элементы, много крови на костюм Этих б*ядей поразил и я уже не слышу шум Облик мрака, вечно в стате я стреляю наобум Я юзаю — ten, ren, hatsu, бум!'))

bot.command('what', (ctx) => {
   ctx.replyWithHTML('<b>Це фрази з якими я знайомий і можу на них відповісти</b>', Markup.inlineKeyboard(
      [
         [Markup.button.callback('Фрази', 'btn_1'), Markup.button.callback('Матюки', 'btn_2'), Markup.button.callback('Пісні', 'btn_3')],
      ]
   ))

})
bot.action('btn_1', (ctx) => {
   ctx.reply(text.commands)
})
bot.action('btn_2', (ctx) => {
   ctx.reply(text.matys)
})
bot.action('btn_3', (ctx) => {
   ctx.reply(text.songs)
})

//kkomentariyvrevev
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

