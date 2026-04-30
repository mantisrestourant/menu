/* menu-data.js — Mantis Homemade QR menu
   Fixed package: clean product data, image paths, prices and multilingual labels. */
(() => {
  const MENU = [
  {
    "key": "breakfast",
    "icon": "🍳",
    "title": {
      "sq": "MËNGJESİ",
      "tr": "Kahvaltı",
      "en": "Breakfast",
      "mk": "Појадок"
    },
    "items": [
      {
        "id": "breakfast-manti-s-mengjesi",
        "cat": "breakfast",
        "name": {
          "sq": "Manti’s Mëngjesi",
          "tr": "Mantis Kahvaltısı",
          "en": "Mantis Breakfast",
          "mk": "Mantis Појадок"
        },
        "price": "530 DEN",
        "desc": {
          "sq": "Vezë në sy me sëzdërm, djath, kaçkavall, djath të fortë në gjalpë, ullinj të zi dhe të gjelbër, domate, kastravec, gjalpë, speca të marinuara, gjizë, ajvar, pallaçinka, dy lloje reçel shtëpije, mjaltë, çoko krem, bukë shtëpije, çaji pakufi.",
          "tr": "Kavurmalı sahanda yumurta, peynir, kaşar, tereyağında sert peynir, siyah/yeşil zeytin, domates, salatalık, tereyağı, marine biber, lor, ajvar, krep, 2 çeşit ev reçeli, bal, çoko krem, ev ekmeği, sınırsız çay.",
          "en": "Sunny-side eggs with roasted beef, cheese, kashkaval, aged cheese in butter, black/green olives, tomato, cucumber, butter, marinated peppers, curd, ajvar, pancake, 2 homemade jams, honey, choco cream, homemade bread, unlimited tea.",
          "mk": "Јајца на око со суздерм, сирење, кашкавал, зрело сирење во путер, црни/зелени маслинки, домат, краставица, путер, маринирани пиперки, урда, ајвар, палачинка, 2 домашни џема, мед, чоко крем, домашен леб, неограничен чај."
        },
        "img": "assets/products/kahvalti.jpg"
      },
      {
        "id": "breakfast-mengjesi-ne-porcion",
        "cat": "breakfast",
        "name": {
          "sq": "Mëngjesi në Porcion",
          "tr": "Kahvaltı Porsiyon",
          "en": "Breakfast Plate",
          "mk": "Појадок во порција"
        },
        "price": "",
        "desc": {
          "sq": "Djath, kaçkavall, ullinj të zi dhe të gjelbër, domate, kastravec, reçel, çoko krem, bukë shtëpije dhe çaj. (extra çaj 10 den)",
          "tr": "Peynir, kaşar, siyah ve yeşil zeytin, domates, salatalık, reçel, çoko krem, ev ekmeği ve çay. (ekstra çay 10 den)",
          "en": "Cheese, kashkaval, black and green olives, tomato, cucumber, jam, choco cream, homemade bread and tea. (extra tea 10 den)",
          "mk": "Сирење, кашкавал, црни и зелени маслинки, домат, краставица, џем, чоко крем, домашен леб и чај. (екстра чај 10 ден)"
        },
        "img": "assets/products/kahvaltı-porsiyon.png"
      },
      {
        "id": "breakfast-menemen",
        "cat": "breakfast",
        "name": {
          "sq": "Menemen",
          "tr": "Menemen",
          "en": "Menemen",
          "mk": "Менемен"
        },
        "price": "290 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/menemen.jpg"
      },
      {
        "id": "breakfast-veze-ne-sy",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë në sy",
          "tr": "Sahanda Yumurta",
          "en": "Sunny-side Eggs",
          "mk": "Јајца на око"
        },
        "price": "230 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/sahanda-yumurta.jpg"
      },
      {
        "id": "breakfast-omlet",
        "cat": "breakfast",
        "name": {
          "sq": "Omlet",
          "tr": "Omlet",
          "en": "Omelette",
          "mk": "Омлет"
        },
        "price": "160 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/omlet.jpg"
      },
      {
        "id": "breakfast-veze-te-zier",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë të zier",
          "tr": "Haşlanmış Yumurta",
          "en": "Boiled Eggs",
          "mk": "Варени јајца"
        },
        "price": "230 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/haslanmis-yumurta.jpg"
      },
      {
        "id": "breakfast-veze-me-sezderm",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me sëzdërm",
          "tr": "Kavurmalı Yumurta",
          "en": "Eggs with Roasted Beef",
          "mk": "Јајца со суздерм"
        },
        "price": "320 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/suzdurmlu-yumurta.jpg"
      },
      {
        "id": "breakfast-veze-me-suxhuk",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me suxhuk",
          "tr": "Sucuklu Yumurta",
          "en": "Eggs with Sucuk",
          "mk": "Јајца со суџук"
        },
        "price": "280 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/sucuklu-yumurta.jpg"
      },
      {
        "id": "breakfast-veze-me-kackavall",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me kaçkavall",
          "tr": "Kaşarlı Yumurta",
          "en": "Eggs with Kashkaval",
          "mk": "Јајца со кашкавал"
        },
        "price": "260 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/kasarlı-omlet.png"
      },
      {
        "id": "breakfast-veze-me-djath",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me djath",
          "tr": "Peynirli Yumurta",
          "en": "Eggs with Cheese",
          "mk": "Јајца со сирење"
        },
        "price": "260 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/peynirli-yumurta.jpg"
      },
      {
        "id": "breakfast-veze-me-mish-te-tymosur",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me mish të tymosur",
          "tr": "Füme Etli Yumurta",
          "en": "Eggs with Smoked Beef",
          "mk": "Јајца со чадено месо"
        },
        "price": "280 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/fume-omlet.png"
      },
      {
        "id": "breakfast-veze-me-speca",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me speca",
          "tr": "Biberli Yumurta",
          "en": "Eggs with Peppers",
          "mk": "Јајца со пиперки"
        },
        "price": "240 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/biberli-yumurta.jpg"
      },
      {
        "id": "breakfast-veze-me-kepurdha-te-fresketa",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me këpurdha të freskëta",
          "tr": "Mantarlı Yumurta",
          "en": "Eggs with Mushrooms",
          "mk": "Јајца со печурки"
        },
        "price": "240 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mantarli-yumurta.jpg"
      },
      {
        "id": "breakfast-veze-me-spinaq-sezonale",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë me spinaq (sezonale)",
          "tr": "Ispanaklı Yumurta (Sezonluk)",
          "en": "Eggs with Spinach (Seasonal)",
          "mk": "Јајца со спанаќ (сезонски)"
        },
        "price": "260 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/ispanakli-yumurta.jpg"
      },
      {
        "id": "breakfast-veze-e-perzier-mund-te-zgjidhni-perzierjen-sipas-shijes-tuaj-nga-opcionet-e-mesiperme",
        "cat": "breakfast",
        "name": {
          "sq": "Vezë e përzier (mund të zgjidhni përzierjen sipas shijes tuaj nga opcionet e mësipërme)",
          "tr": "Karışık Yumurta (üst seçeneklerden seçim)",
          "en": "Mixed Eggs (choose from options above)",
          "mk": "Мешани јајца (избор од опциите погоре)"
        },
        "price": "230 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/karisik-yumurta.jpg"
      },
      {
        "id": "breakfast-kujmak",
        "cat": "breakfast",
        "name": {
          "sq": "Kujmak",
          "tr": "Kuymak",
          "en": "Kuymak",
          "mk": "Кујмак"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "Specialitetet për të shijuar",
          "tr": "Özel lezzet",
          "en": "Special to enjoy",
          "mk": "Специјалитет"
        },
        "img": "assets/products/kuymak.jpg"
      },
      {
        "id": "breakfast-speca-me-sos-beshamel-dhe-kashkavall",
        "cat": "breakfast",
        "name": {
          "sq": "Speca me sos beshamel dhe kashkavall",
          "tr": "Beşamel & Kaşarlı Biber",
          "en": "Peppers with Bechamel & Kashkaval",
          "mk": "Пиперки со бешамел и кашкавал"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "Specialitetet për të shijuar",
          "tr": "Özel lezzet",
          "en": "Special to enjoy",
          "mk": "Специјалитет"
        },
        "img": "assets/products/besamelli-biber.jpg"
      }
    ]
  },
  {
    "key": "lahmaxhuna-gozleme-pide",
    "icon": "🥙",
    "title": {
      "sq": "LAHMAXHUNA • GOZLEME • PIDE",
      "tr": "Lahmacun • Gözleme • Pide",
      "en": "Lahmacun • Gozleme • Pide",
      "mk": "Лахмаџун • Гозлеме • Пиде"
    },
    "items": [
      {
        "id": "lahmaxhuna-gozleme-pide-lahmaxhuna-djegese",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Lahmaxhuna (Djegëse)",
          "tr": "Lahmacun (Acılı)",
          "en": "Lahmacun (Spicy)",
          "mk": "Лахмаџун (луто)"
        },
        "price": "100 DEN",
        "desc": {
          "sq": "Marullë, Magdanoz, Limon, Qep",
          "tr": "Marul, maydanoz, limon, soğan",
          "en": "Lettuce, parsley, lemon, onion",
          "mk": "Марула, магдонос, лимон, кромид"
        },
        "img": "assets/products/lahmacun.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-lahmaxhuna-jo-djegese",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Lahmaxhuna (Jo djegëse)",
          "tr": "Lahmacun (Acısız)",
          "en": "Lahmacun (Mild)",
          "mk": "Лахмаџун (не луто)"
        },
        "price": "100 DEN",
        "desc": {
          "sq": "Marullë, Magdanoz, Limon, Qep",
          "tr": "Marul, maydanoz, limon, soğan",
          "en": "Lettuce, parsley, lemon, onion",
          "mk": "Марула, магдонос, лимон, кромид"
        },
        "img": "assets/products/lahmacun.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-gozleme-sezderm-dhe-kackavall",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Gozleme — Sëzdërm dhe kaçkavall",
          "tr": "Gözleme — Kavurma & Kaşar",
          "en": "Gozleme — Roasted Beef & Kashkaval",
          "mk": "Гозлеме — суздерм и кашкавал"
        },
        "price": "180 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/gozleme.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-gozleme-me-patate-dhe-presh",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Gozleme — Me patate dhe presh",
          "tr": "Gözleme — Patates & Pırasa",
          "en": "Gozleme — Potato & Leek",
          "mk": "Гозлеме — компир и праз"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/gozleme.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-gozleme-veze-dhe-gjize",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Gozleme — Vezë dhe gjizë",
          "tr": "Gözleme — Yumurta & Lor",
          "en": "Gozleme — Egg & Curd",
          "mk": "Гозлеме — јајце и урда"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/gozleme.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-gozleme-spinaq-dhe-qep-sezonale",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Gozleme — Spinaq dhe qep (Sezonale)",
          "tr": "Gözleme — Ispanak & Soğan (Sezonluk)",
          "en": "Gozleme — Spinach & Onion (Seasonal)",
          "mk": "Гозлеме — спанаќ и кромид (сезонски)"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/gozleme.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-gozleme-djath",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Gozleme — Djath",
          "tr": "Gözleme — Peynir",
          "en": "Gozleme — Cheese",
          "mk": "Гозлеме — сирење"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/gozleme.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-gozleme-mish-grim",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Gozleme — Mish grim",
          "tr": "Gözleme — Kıyma",
          "en": "Gozleme — Minced Meat",
          "mk": "Гозлеме — мелено месо"
        },
        "price": "170 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/gozleme.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-manti-s",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Manti’s",
          "tr": "Pide — Mantis",
          "en": "Pide — Mantis",
          "mk": "Пиде — Mantis"
        },
        "price": "300 DEN",
        "desc": {
          "sq": "Sëzdërm, Kaçkavall",
          "tr": "Kavurma, kaşar",
          "en": "Beef suet, kashkaval",
          "mk": "Суздерм, кашкавал"
        },
        "img": "assets/products/pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-trabzon",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Trabzon",
          "tr": "Pide — Trabzon",
          "en": "Pide — Trabzon",
          "mk": "Пиде — Trabzon"
        },
        "price": "280 DEN",
        "desc": {
          "sq": "3 lloje djathrash, vezë",
          "tr": "3 çeşit peynir, yumurta",
          "en": "3 cheeses, egg",
          "mk": "3 сирења, јајце"
        },
        "img": "assets/products/trabzon-pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-klasike",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Klasike",
          "tr": "Pide — Klasik",
          "en": "Pide — Classic",
          "mk": "Пиде — Класик"
        },
        "price": "220 DEN",
        "desc": {
          "sq": "Kaçkavall",
          "tr": "Kaşar",
          "en": "Kashkaval",
          "mk": "Кашкавал"
        },
        "img": "assets/products/pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-me-suxhuk",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Me suxhuk",
          "tr": "Pide — Sucuklu",
          "en": "Pide — Sucuk",
          "mk": "Пиде — Со суџук"
        },
        "price": "250 DEN",
        "desc": {
          "sq": "Suxhuk viçi, Kaçkavall",
          "tr": "Dana sucuk, kaşar",
          "en": "Beef sucuk, kashkaval",
          "mk": "Говедски суџук, кашкавал"
        },
        "img": "assets/products/pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-me-mish-te-grire-dhe-kackavall",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Me mish të grirë dhe kaçkavall",
          "tr": "Pide — Kıymalı & Kaşarlı",
          "en": "Pide — Minced meat & Kashkaval",
          "mk": "Пиде — Мелено и кашкавал"
        },
        "price": "270 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-me-perime",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Me perime",
          "tr": "Pide — Sebzeli",
          "en": "Pide — Veggie",
          "mk": "Пиде — Зеленчук"
        },
        "price": "240 DEN",
        "desc": {
          "sq": "Qep, speca, domate, kaçkavall",
          "tr": "Soğan, biber, domates, kaşar",
          "en": "Onion, peppers, tomato, kashkaval",
          "mk": "Кромид, пиперки, домат, кашкавал"
        },
        "img": "assets/products/pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-me-patate",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Me patate",
          "tr": "Pide — Patatesli",
          "en": "Pide — Potato",
          "mk": "Пиде — Компир"
        },
        "price": "250 DEN",
        "desc": {
          "sq": "Patate, kaçkavall",
          "tr": "Patates, kaşar",
          "en": "Potato, kashkaval",
          "mk": "Компир, кашкавал"
        },
        "img": "assets/products/pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-pidexhiun",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — Pidexhiun",
          "tr": "Pide — Pidexhiun",
          "en": "Pide — Pidexhiun",
          "mk": "Пиде — Pidexhiun"
        },
        "price": "270 DEN",
        "desc": {
          "sq": "Sallcë lahmaxhuni, kaçkavall",
          "tr": "Lahmacun sosu, kaşar",
          "en": "Lahmacun sauce, kashkaval",
          "mk": "Лахмаџун сос, кашкавал"
        },
        "img": "assets/products/pide.jpg"
      },
      {
        "id": "lahmaxhuna-gozleme-pide-pide-e-perzier",
        "cat": "lahmaxhuna-gozleme-pide",
        "name": {
          "sq": "Pide — E përzier",
          "tr": "Pide — Karışık",
          "en": "Pide — Mixed",
          "mk": "Пиде — Мешано"
        },
        "price": "270 DEN",
        "desc": {
          "sq": "Zgjedhja e juaj nga opcionet e mësipërme",
          "tr": "Yukarıdaki seçeneklerden seçiminiz",
          "en": "Your choice from the options above",
          "mk": "Ваш избор од опциите погоре"
        },
        "img": "assets/products/pide.jpg"
      }
    ]
  },
  {
    "key": "pizza",
    "icon": "🍕",
    "title": {
      "sq": "PIZZA",
      "tr": "Pizza",
      "en": "Pizza",
      "mk": "Пица"
    },
    "items": [
      {
        "id": "pizza-manti-s",
        "cat": "pizza",
        "name": {
          "sq": "Manti’s",
          "tr": "Mantis",
          "en": "Mantis",
          "mk": "Mantis"
        },
        "price": "210/320/640 DEN",
        "desc": {
          "sq": "Sëzdërm, vezë, kaçkavall, salcë domate",
          "tr": "Kavurma, yumurta, kaşar, domates sosuu",
          "en": "Beef suet, egg, kashkaval, tomato sauce",
          "mk": "Суздерм, јајце, кашкавал, доматен сос"
        },
        "img": "assets/products/mantis-pizza.jpg"
      },
      {
        "id": "pizza-margarita",
        "cat": "pizza",
        "name": {
          "sq": "Margarita",
          "tr": "Margherita",
          "en": "Margherita",
          "mk": "Маргерита"
        },
        "price": "110/180/390 DEN",
        "desc": {
          "sq": "Kaçkavall, salcë domate",
          "tr": "Kaşar, domates sosu",
          "en": "Kashkaval, tomato sauce",
          "mk": "Кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-margherita.jpg"
      },
      {
        "id": "pizza-fungi",
        "cat": "pizza",
        "name": {
          "sq": "Fungi",
          "tr": "Fungi",
          "en": "Fungi",
          "mk": "Фунги"
        },
        "price": "140/210/450 DEN",
        "desc": {
          "sq": "Këpurdha të freskëta, kaçkavall, salcë domate",
          "tr": "Taze mantar, kaşar, domates sosu",
          "en": "Fresh mushrooms, kashkaval, tomato sauce",
          "mk": "Свежи печурки, кашкавал, доматен сос"
        },
        "img": "assets/products/fungi-pizza.jpg"
      },
      {
        "id": "pizza-prosciutto",
        "cat": "pizza",
        "name": {
          "sq": "Prosciutto",
          "tr": "Prosciutto",
          "en": "Prosciutto",
          "mk": "Проскуто"
        },
        "price": "160/270/550 DEN",
        "desc": {
          "sq": "Mish viçi i tymosur, qep, këpurdha të freskëta, kaçkavall, salcë domate",
          "tr": "Füme dana, soğan, taze mantar, kaşar, domates sosu",
          "en": "Smoked beef, onion, fresh mushrooms, kashkaval, tomato sauce",
          "mk": "Чадено говедско, кромид, свежи печурки, кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-prosciutto.jpg"
      },
      {
        "id": "pizza-quattro-formaggi",
        "cat": "pizza",
        "name": {
          "sq": "Quattro Formaggi",
          "tr": "4 Peynir",
          "en": "Quattro Formaggi",
          "mk": "Четири сирења"
        },
        "price": "150/270/550 DEN",
        "desc": {
          "sq": "Mozzarella, gorgonzola, krem djathi, kaçkavall, salcë domate",
          "tr": "Mozzarella, gorgonzola, krem peynir, kaşar, domates sosu",
          "en": "Mozzarella, gorgonzola, cream cheese, kashkaval, tomato sauce",
          "mk": "Моцарела, горгонзола, крем сирење, кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-quattro-formaggi.jpg"
      },
      {
        "id": "pizza-la-rucola",
        "cat": "pizza",
        "name": {
          "sq": "La Rucola",
          "tr": "La Rucola",
          "en": "La Rucola",
          "mk": "La Rucola"
        },
        "price": "170/270/570 DEN",
        "desc": {
          "sq": "Rukolla, mish viçi i tymosur, parmezan, kaçkavall, salcë domate",
          "tr": "Roka, füme dana, parmesan, kaşar, domates sosu",
          "en": "Arugula, smoked beef, parmesan, kashkaval, tomato sauce",
          "mk": "Рукола, чадено говедско, пармезан, кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-la-ruko.jpg"
      },
      {
        "id": "pizza-quattro-stagioni",
        "cat": "pizza",
        "name": {
          "sq": "Quattro Stagioni",
          "tr": "Quattro Stagioni",
          "en": "Quattro Stagioni",
          "mk": "Quattro Stagioni"
        },
        "price": "200/300/630 DEN",
        "desc": {
          "sq": "Mish viçi i tymosur, suxhuk viçi, mish pule i tymosur, këpurdha të freskëta, kaçkavall, salcë domate",
          "tr": "Füme dana, dana sucuk, füme tavuk, taze mantar, kaşar, domates sosu",
          "en": "Smoked beef, beef sucuk, smoked chicken, fresh mushrooms, kashkaval, tomato sauce",
          "mk": "Чадено говедско, говедски суџук, чадено пилешко, свежи печурки, кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-quattro-stagione.jpg"
      },
      {
        "id": "pizza-vegetarian",
        "cat": "pizza",
        "name": {
          "sq": "Vegetarian",
          "tr": "Vejetaryen",
          "en": "Vegetarian",
          "mk": "Вегетаријанска"
        },
        "price": "150/250/530 DEN",
        "desc": {
          "sq": "Domate të freskëta, brokoli, këpurdha të freskëta, speca, misër, qep, kaçkavall, salcë domate",
          "tr": "Taze domates, brokoli, taze mantar, biber, mısır, soğan, kaşar, domates sosu",
          "en": "Fresh tomato, broccoli, fresh mushrooms, peppers, corn, onion, kashkaval, tomato sauce",
          "mk": "Свеж домат, брокула, свежи печурки, пиперки, пченка, кромид, кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-vegetarian.jpg"
      },
      {
        "id": "pizza-mediterranean",
        "cat": "pizza",
        "name": {
          "sq": "Mediterranean",
          "tr": "Akdeniz",
          "en": "Mediterranean",
          "mk": "Медитеранска"
        },
        "price": "150/250/530 DEN",
        "desc": {
          "sq": "Djath, domate të freskëta, qep, ullinj, misër, këpurdha të freskëta, kaçkavall, salcë domate",
          "tr": "Peynir, taze domates, soğan, zeytin, mısır, taze mantar, kaşar, domates sosu",
          "en": "Cheese, fresh tomato, onion, olives, corn, fresh mushrooms, kashkaval, tomato sauce",
          "mk": "Сирење, свеж домат, кромид, маслинки, пченка, свежи печурки, кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-mediterranean.jpg"
      },
      {
        "id": "pizza-tuna",
        "cat": "pizza",
        "name": {
          "sq": "Tuna",
          "tr": "Ton Balıklı",
          "en": "Tuna",
          "mk": "Туна"
        },
        "price": "150/250/530 DEN",
        "desc": {
          "sq": "Tuna, kaçkavall, qep, salcë domate",
          "tr": "Ton, kaşar, soğan, domates sosu",
          "en": "Tuna, kashkaval, onion, tomato sauce",
          "mk": "Туна, кашкавал, кромид, доматен сос"
        },
        "img": "assets/products/pizza-tuna.jpg"
      },
      {
        "id": "pizza-chicken",
        "cat": "pizza",
        "name": {
          "sq": "Chicken",
          "tr": "Tavuklu",
          "en": "Chicken",
          "mk": "Пилешка"
        },
        "price": "150/250/530 DEN",
        "desc": {
          "sq": "Mish pule i tymosur, kaçkavall, salcë domate",
          "tr": "Füme tavuk, kaşar, domates sosu",
          "en": "Smoked chicken, kashkaval, tomato sauce",
          "mk": "Чадено пилешко, кашкавал, доматен сос"
        },
        "img": "assets/products/pizza-chicken.jpg"
      },
      {
        "id": "pizza-bbq-chicken",
        "cat": "pizza",
        "name": {
          "sq": "BBQ Chicken",
          "tr": "Barbekü Tavuk",
          "en": "BBQ Chicken",
          "mk": "BBQ пилешка"
        },
        "price": "170/270/570 DEN",
        "desc": {
          "sq": "Copa mishi pule, salcë barbecue, qepë, djathë, salcë domate",
          "tr": "Tavuk parçaları, barbekü sos, soğan, peynir, domates sosuu",
          "en": "Chicken pieces, BBQ sauce, onion, cheese, tomato sauce",
          "mk": "Пилешки парчиња, BBQ сос, кромид, сирење, доматен сос"
        },
        "img": "assets/products/pizza-barbecue-chicken.jpg"
      },
      {
        "id": "pizza-suxhuk",
        "cat": "pizza",
        "name": {
          "sq": "Suxhuk",
          "tr": "Sucuklu",
          "en": "Suxuk",
          "mk": "Со суџук"
        },
        "price": "170/270/560 DEN",
        "desc": {
          "sq": "Suxhuk viçi, kaçkavall, këpurdha të freskëta, salcë domate",
          "tr": "Dana sucuk, kaşar, taze mantar, domates sosu",
          "en": "Beef sucuk, kashkaval, fresh mushrooms, tomato sauce",
          "mk": "Говедски суџук, кашкавал, свежи печурки, доматен сос"
        },
        "img": "assets/products/pizza-sucuklu.jpg"
      }
    ]
  },
  {
    "key": "sandwich-wrap",
    "icon": "🥪",
    "title": {
      "sq": "SANDVİÇ • HOMEMADE WRAP",
      "tr": "Sandviç • Dürüm",
      "en": "Sandwich • Wrap",
      "mk": "Сендвич • Врап"
    },
    "items": [
      {
        "id": "sandwich-wrap-sandvic-mish-vici-i-tymosur",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Sandviç — Mish viçi i tymosur",
          "tr": "Sandviç — Füme Dana",
          "en": "Sandwich — Smoked Beef",
          "mk": "Сендвич — чадено говедско"
        },
        "price": "180 DEN",
        "desc": {
          "sq": "Mish viçi i tymosur, kaçkavall, rukolla, domate, kastravec, sos, patate të skuqura",
          "tr": "Füme dana, kaşar, roka, domates, salatalık, sos, patates",
          "en": "Smoked beef, kashkaval, arugula, tomato, cucumber, sauce, fries",
          "mk": "Чадено говедско, кашкавал, рукола, домат, краставица, сос, помфрит"
        },
        "img": "assets/products/sandwich.jpg"
      },
      {
        "id": "sandwich-wrap-sandvic-suxhuk-bosne",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Sandviç — Suxhuk Bosne",
          "tr": "Sandviç — Bosna Sucuk",
          "en": "Sandwich — Bosna Sucuk",
          "mk": "Сендвич — Босна суџук"
        },
        "price": "180 DEN",
        "desc": {
          "sq": "Suxhuk Bosne, kaçkavall, marull, domate, kastravec, sos, patate të skuqura",
          "tr": "Bosna sucuk, kaşar, marul, domates, salatalık, sos, patates",
          "en": "Bosna sucuk, kashkaval, lettuce, tomato, cucumber, sauce, fries",
          "mk": "Босна суџук, кашкавал, марула, домат, краставица, сос, помфрит"
        },
        "img": "assets/products/sandwich.jpg"
      },
      {
        "id": "sandwich-wrap-sandvic-stek-pule",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Sandviç — Stek Pule",
          "tr": "Sandviç — Izgara Tavuk",
          "en": "Sandwich — Chicken Steak",
          "mk": "Сендвич — пилешки стек"
        },
        "price": "180 DEN",
        "desc": {
          "sq": "Stek pule, kaçkavall, marull, domate, kastravec, curry sos, patate të skuqura",
          "tr": "Izgara tavuk, kaşar, marul, domates, salatalık, köri sos, patates",
          "en": "Chicken steak, kashkaval, lettuce, tomato, cucumber, curry sauce, fries",
          "mk": "Пилешки стек, кашкавал, марула, домат, краставица, кари сос, помфрит"
        },
        "img": "assets/products/sandwich.jpg"
      },
      {
        "id": "sandwich-wrap-sandvic-tuna",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Sandviç — Tuna",
          "tr": "Sandviç — Ton",
          "en": "Sandwich — Tuna",
          "mk": "Сендвич — туна"
        },
        "price": "170 DEN",
        "desc": {
          "sq": "Tuna, qepë, misër i ëmbël, marull, domate, sos, patate të skuqura",
          "tr": "Ton, soğan, mısır, marul, domates, sos, patates",
          "en": "Tuna, onion, sweet corn, lettuce, tomato, sauce, fries",
          "mk": "Туна, кромид, пченка, марула, домат, сос, помфрит"
        },
        "img": "assets/products/sandwich.jpg"
      },
      {
        "id": "sandwich-wrap-sandvic-sezderm",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Sandviç — Sëzdërm",
          "tr": "Sandviç — Kavurma",
          "en": "Sandwich — Roasted Beef",
          "mk": "Сендвич — суздерм"
        },
        "price": "200 DEN",
        "desc": {
          "sq": "Sëzdërm, kaçkavall, marull, domate, kastravec, patate të skuqura",
          "tr": "Kavurma, kaşar, marul, domates, salatalık, patates",
          "en": "Beef suet, kashkaval, lettuce, tomato, cucumber, fries",
          "mk": "Суздерм, кашкавал, марула, домат, краставица, помфрит"
        },
        "img": "assets/products/sandwich.jpg"
      },
      {
        "id": "sandwich-wrap-homemade-wrap-sezderm",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Homemade Wrap — Sëzdërm",
          "tr": "Dürüm — Kavurma",
          "en": "Wrap — Roasted Beef",
          "mk": "Врап — суздерм"
        },
        "price": "260 DEN",
        "desc": {
          "sq": "Sëzdërm, kaçkavall, patate të skuqura",
          "tr": "Kavurma, kaşar, patates",
          "en": "Beef suet, kashkaval, fries",
          "mk": "Суздерм, кашкавал, помфрит"
        },
        "img": "assets/products/wrap.jpg"
      },
      {
        "id": "sandwich-wrap-homemade-wrap-chicken",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Homemade Wrap — Chicken",
          "tr": "Dürüm — Tavuk",
          "en": "Wrap — Chicken",
          "mk": "Врап — пилешко"
        },
        "price": "240 DEN",
        "desc": {
          "sq": "Copa mish pule, sallcë barbeque, kaçkavall, patate të skuqura",
          "tr": "Tavuk parçaları, barbekü sos, kaşar, patates",
          "en": "Chicken pieces, BBQ sauce, kashkaval, fries",
          "mk": "Пилешки парчиња, BBQ сос, кашкавал, помфрит"
        },
        "img": "assets/products/wrap.jpg"
      },
      {
        "id": "sandwich-wrap-homemade-wrap-prosciutto",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Homemade Wrap — Prosciutto",
          "tr": "Dürüm — Füme Dana",
          "en": "Wrap — Prosciutto",
          "mk": "Врап — Prosciutto"
        },
        "price": "250 DEN",
        "desc": {
          "sq": "Mish viçi i tymosur, majonez, kaçkavall, patate të skuqura",
          "tr": "Füme dana, mayonez, kaşar, patates",
          "en": "Smoked beef, mayo, kashkaval, fries",
          "mk": "Чадено говедско, мајонез, кашкавал, помфрит"
        },
        "img": "assets/products/wrap.jpg"
      },
      {
        "id": "sandwich-wrap-homemade-wrap-vegetarian",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Homemade Wrap — Vegetarian",
          "tr": "Dürüm — Vejetaryen",
          "en": "Wrap — Vegetarian",
          "mk": "Врап — вегетаријански"
        },
        "price": "200 DEN",
        "desc": {
          "sq": "Domate, speca, misër, këpurdha, fasule të kuqe, kaçkavall, patate të skuqura",
          "tr": "Domates, biber, mısır, mantar, kırmızı fasulye, kaşar, patates",
          "en": "Tomato, peppers, corn, mushrooms, red beans, kashkaval, fries",
          "mk": "Домат, пиперки, пченка, печурки, црвен грав, кашкавал, помфрит"
        },
        "img": "assets/products/wrap.jpg"
      },
      {
        "id": "sandwich-wrap-homemade-wrap-mexicana",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Homemade Wrap — Mexicana",
          "tr": "Dürüm — Meksika",
          "en": "Wrap — Mexicana",
          "mk": "Врап — Mexicana"
        },
        "price": "240 DEN",
        "desc": {
          "sq": "Mish të grirë, sallcë domate, chilli sos, fasule të kuqe, kaçkavall, patate të skuqura",
          "tr": "Kıyma, domates sosu, acı sos, kırmızı fasulye, kaşar, patates",
          "en": "Minced meat, tomato sauce, chili sauce, red beans, kashkaval, fries",
          "mk": "Мелено месо, доматен сос, чили сос, црвен грав, кашкавал, помфрит"
        },
        "img": "assets/products/wrap.jpg"
      },
      {
        "id": "sandwich-wrap-homemade-wrap-bermuda-triangle",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Homemade Wrap — Bermuda Triangle",
          "tr": "Dürüm — Bermuda Üçgeni",
          "en": "Wrap — Bermuda Triangle",
          "mk": "Врап — Bermuda Triangle"
        },
        "price": "260 DEN",
        "desc": {
          "sq": "Mish viçi i tymosur, suxhuk viçi, mish pule i tymosur, majonez, kaçkavall, patate të skuqura",
          "tr": "Füme dana, dana sucuk, füme tavuk, mayonez, kaşar, patates",
          "en": "Smoked beef, beef sucuk, smoked chicken, mayo, kashkaval, fries",
          "mk": "Чадено говедско, говедски суџук, чадено пилешко, мајонез, кашкавал, помфрит"
        },
        "img": "assets/products/wrap.jpg"
      },
      {
        "id": "sandwich-wrap-homemade-wrap-patate",
        "cat": "sandwich-wrap",
        "name": {
          "sq": "Homemade Wrap — Patate",
          "tr": "Dürüm — Patates",
          "en": "Wrap — Potato",
          "mk": "Врап — компир"
        },
        "price": "200 DEN",
        "desc": {
          "sq": "Patate, kaçkavall, patate të skuqura",
          "tr": "Patates, kaşar, patates",
          "en": "Potato, kashkaval, fries",
          "mk": "Компир, кашкавал, помфрит"
        },
        "img": "assets/products/wrap.jpg"
      }
    ]
  },
  {
    "key": "pasta-sallata",
    "icon": "🥗",
    "title": {
      "sq": "PASTA • SALLATA",
      "tr": "Makarna • Salata",
      "en": "Pasta • Salads",
      "mk": "Паста • Салати"
    },
    "items": [
      {
        "id": "pasta-sallata-bolognese",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Bolognese",
          "tr": "Bolonez",
          "en": "Bolognese",
          "mk": "Болоњезе"
        },
        "price": "240 DEN",
        "desc": {
          "sq": "Mish i grirë, salcë domatesh",
          "tr": "Kıyma, domates sosu",
          "en": "Minced meat, tomato sauce",
          "mk": "Мелено месо, доматен сос"
        },
        "img": "assets/products/makarna-bolonez.jpg"
      },
      {
        "id": "pasta-sallata-al-forno",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Al Forno",
          "tr": "Al Forno",
          "en": "Al Forno",
          "mk": "Ал Форно"
        },
        "price": "240 DEN",
        "desc": {
          "sq": "Krem paste domate, mish pule, kërpudha të freskëta, cheddar, salcë domatesh",
          "tr": "Krem domates, tavuk, taze mantar, cheddar, domates sosu",
          "en": "Creamy tomato paste, chicken, fresh mushrooms, cheddar, tomato sauce",
          "mk": "Крем доматна паста, пилешко, свежи печурки, чедар, доматен сос"
        },
        "img": "assets/products/alforno.jpg"
      },
      {
        "id": "pasta-sallata-lazanja",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Lazanja",
          "tr": "Lazanya",
          "en": "Lasagna",
          "mk": "Лазања"
        },
        "price": "260 DEN",
        "desc": {
          "sq": "Mish i grirë, kackavall",
          "tr": "Kıyma, kaşar",
          "en": "Minced meat, kashkaval",
          "mk": "Мелено месо, кашкавал"
        },
        "img": "assets/products/lazanya.jpg"
      },
      {
        "id": "pasta-sallata-mantija-20-min",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Mantija (20 min.)",
          "tr": "Mantı (20 dk.)",
          "en": "Manti (20 min.)",
          "mk": "Манти (20 мин.)"
        },
        "price": "150/300 DEN",
        "desc": {
          "sq": "Me mish, shërbyer me kos, me ose pa hudër, me salcë gjalpi",
          "tr": "Etli, yoğurt (sarımsaklı/sarımsaksız) ve tereyağ sos ile",
          "en": "With meat, served with yogurt (with/without garlic) and butter sauce",
          "mk": "Со месо, со јогурт (со/без лук) и путер сос"
        },
        "img": "assets/products/manti.jpg"
      },
      {
        "id": "pasta-sallata-manti-s-urban",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Manti’s Urban",
          "tr": "Mantis Urban",
          "en": "Mantis Urban",
          "mk": "Mantis Urban"
        },
        "price": "100/200 DEN",
        "desc": {
          "sq": "Thjerrëza, qepë, majdanoz, turshi, nenexhik, kopër, arra, salcë",
          "tr": "Mercimek, soğan, maydanoz, turşu, nane, dereotu, ceviz, sos",
          "en": "Lentils, onion, parsley, pickles, mint, dill, walnuts, dressing",
          "mk": "Леќа, кромид, магдонос, туршија, нане, копар, ореви, сос"
        },
        "img": "assets/products/mantis-urban-salata.jpg"
      },
      {
        "id": "pasta-sallata-tuna",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Tuna",
          "tr": "Ton",
          "en": "Tuna",
          "mk": "Туна"
        },
        "price": "100/200 DEN",
        "desc": {
          "sq": "Ton, marule, misër, ullinj të zi, qepë",
          "tr": "Ton, marul, mısır, siyah zeytin, soğan",
          "en": "Tuna, lettuce, corn, black olives, onion",
          "mk": "Туна, марула, пченка, црни маслинки, кромид"
        },
        "img": "assets/products/salata-tuna.jpg"
      },
      {
        "id": "pasta-sallata-cesar",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Cesar",
          "tr": "Sezar",
          "en": "Caesar",
          "mk": "Цезар"
        },
        "price": "130/260 DEN",
        "desc": {
          "sq": "Zarzavate të përziera, mish pule, parmezani i grirë, domate chery, copa buke, salcë",
          "tr": "Karışık yeşillik, tavuk, rendelenmiş parmesan, cherry domates, kruton, sos",
          "en": "Mixed greens, chicken, grated parmesan, cherry tomatoes, croutons, dressing",
          "mk": "Мешана салата, пилешко, рендан пармезан, чери домати, крутони, сос"
        },
        "img": "assets/products/cezar-salata.jpg"
      },
      {
        "id": "pasta-sallata-sallate-shope",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Sallatë Shope",
          "tr": "Şopska Salata",
          "en": "Shopska Salad",
          "mk": "Шопска салата"
        },
        "price": "90/180 DEN",
        "desc": {
          "sq": "Domate, krastavec, djath",
          "tr": "Domates, salatalık, peynir",
          "en": "Tomato, cucumber, cheese",
          "mk": "Домат, краставица, сирење"
        },
        "img": "assets/products/shope.jpg"
      },
      {
        "id": "pasta-sallata-sallate-rukole",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Sallatë Rukole",
          "tr": "Rokalı Salata",
          "en": "Arugula Salad",
          "mk": "Салата со рукола"
        },
        "price": "100/200 DEN",
        "desc": {
          "sq": "Rukola, misër, fruta të thata, domate thatë, parmezan i grirë",
          "tr": "Roka, mısır, kuruyemiş, kuru domates, rendelenmiş parmesan",
          "en": "Arugula, corn, nuts, sun-dried tomato, grated parmesan",
          "mk": "Рукола, пченка, јаткасти, сушен домат, рендан пармезан"
        },
        "img": "assets/products/salata-rukola.jpg"
      },
      {
        "id": "pasta-sallata-sallate-e-perzier",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Sallatë e Përzier",
          "tr": "Karışık Salata",
          "en": "Mixed Salad",
          "mk": "Мешана салата"
        },
        "price": "100/200 DEN",
        "desc": {
          "sq": "Zarzavate të përziera, misër, ullinj të zinj, krastavec, domate, qepë",
          "tr": "Karışık yeşillik, mısır, siyah zeytin, salatalık, domates, soğan",
          "en": "Mixed greens, corn, black olives, cucumber, tomato, onion",
          "mk": "Мешана салата, пченка, црни маслинки, краставица, домат, кромид"
        },
        "img": "assets/products/karisik-salata.jpg"
      },
      {
        "id": "pasta-sallata-sallate-greke",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Sallatë Greke",
          "tr": "Yunan Salatası",
          "en": "Greek Salad",
          "mk": "Грчка салата"
        },
        "price": "100/200 DEN",
        "desc": {
          "sq": "Gjath, domate, krastavec, specë, qepë",
          "tr": "Peynir, domates, salatalık, biber, soğan",
          "en": "Cheese, tomato, cucumber, pepper, onion",
          "mk": "Сирење, домат, краставица, пиперка, кромид"
        },
        "img": "assets/products/salata-grek.jpg"
      },
      {
        "id": "pasta-sallata-biftek-sallate",
        "cat": "pasta-sallata",
        "name": {
          "sq": "Biftek Sallatë",
          "tr": "Biftek Salata",
          "en": "Steak Salad",
          "mk": "Салата со бифтек"
        },
        "price": "200/370 DEN",
        "desc": {
          "sq": "Zarzavate të përziera, mish vici, parmezan i grirë, domate, copa buke, salcë",
          "tr": "Karışık yeşillik, dana eti, rendelenmiş parmesan, domates, kruton, sos",
          "en": "Mixed greens, beef, grated parmesan, tomato, croutons, dressing",
          "mk": "Мешана салата, говедско, рендан пармезан, домат, крутони, сос"
        },
        "img": "assets/products/salata-biftek.jpg"
      }
    ]
  },
  {
    "key": "supa-parahaje",
    "icon": "🍲",
    "title": {
      "sq": "SUPA • PARAHAJE",
      "tr": "Çorbalar • Başlangıçlar",
      "en": "Soups • Starters",
      "mk": "Супа • Предјадења"
    },
    "items": [
      {
        "id": "supa-parahaje-supa-vici",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Supa (Viçi)",
          "tr": "Dana Çorbası",
          "en": "Beef Soup",
          "mk": "Говедска супа"
        },
        "price": "60/120 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/corba.jpg"
      },
      {
        "id": "supa-parahaje-kashkavall-te-skuqura-4-cope-x-25gr",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Kashkavall të skuqura (4 copë x 25gr)",
          "tr": "Kızarmış Kaşar (4 adet x 25gr)",
          "en": "Fried Kashkaval (4 pcs x 25g)",
          "mk": "Пржен кашкавал (4 x 25г)"
        },
        "price": "120 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/kizarmis-kasar.jpg"
      },
      {
        "id": "supa-parahaje-zdenka-te-skuqura-4-cope-x-20gr",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Zdenka të skuqura (4 copë x 20gr)",
          "tr": "Kızarmış Zdenka (4 adet x 20gr)",
          "en": "Fried Zdenka (4 pcs x 20g)",
          "mk": "Пржена Зденка (4 x 20г)"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/kizarmis-zdenka.jpg"
      },
      {
        "id": "supa-parahaje-kungelleshe-te-skuqura",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Kungëlleshë të skuqura",
          "tr": "Kızarmış Kabak",
          "en": "Fried Zucchini",
          "mk": "Пржени тиквички"
        },
        "price": "100 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/kabak.jpg"
      },
      {
        "id": "supa-parahaje-burek-me-djath-dhe-spinaq-ne-furre-4-cope",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Burek me djath dhe spinaq në furrë (4 copë)",
          "tr": "Fırında Peynirli-İspanaklı Börek (4 adet)",
          "en": "Oven Burek w/ Cheese & Spinach (4 pcs)",
          "mk": "Бурек со сирење и спанаќ (4 парчиња)"
        },
        "price": "100 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/borek.jpg"
      },
      {
        "id": "supa-parahaje-onion-ring-s",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Onion Ring’s",
          "tr": "Soğan Halkası",
          "en": "Onion Rings",
          "mk": "Кромид прстени"
        },
        "price": "60/120 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/sogan-halkasi.jpg"
      },
      {
        "id": "supa-parahaje-kepurdha-ne-furre-me-kashkavall",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Këpurdha në furrë me kashkavall",
          "tr": "Fırında Mantarlı Kaşar",
          "en": "Oven Mushrooms w/ Kashkaval",
          "mk": "Печурки во рерна со кашкавал"
        },
        "price": "120 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mantar.jpg"
      },
      {
        "id": "supa-parahaje-djath-te-bardhe-lope-100gr",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Djath të bardhë (lope) 100gr",
          "tr": "Beyaz Peynir (inek) 100gr",
          "en": "White Cheese (cow) 100g",
          "mk": "Бело сирење (кравјо) 100г"
        },
        "price": "120 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/beyaz-peynir.jpg"
      },
      {
        "id": "supa-parahaje-ajvar-shtepie-200gr",
        "cat": "supa-parahaje",
        "name": {
          "sq": "Ajvar shtëpie 200gr",
          "tr": "Ev Yapımı Ajvar 200gr",
          "en": "Homemade Ajvar 200g",
          "mk": "Домашен ајвар 200г"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/ajvar.jpg"
      }
    ]
  },
  {
    "key": "beef",
    "icon": "🥩",
    "title": {
      "sq": "PRODUKTE TË VIÇIT • NË ZGARE",
      "tr": "Dana Ürünleri • Izgara",
      "en": "Beef • Grill",
      "mk": "Говедско • Скара"
    },
    "items": [
      {
        "id": "beef-fileto-vici-220gr-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Fileto Viçi (220gr) + perime + patate",
          "tr": "Dana Fileto (220gr) + sebze + patates",
          "en": "Beef Fillet (220g) + veggies + fries",
          "mk": "Говедско филе (220г) + зеленчук + помфрит"
        },
        "price": "660 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/fileto-vici.jpg"
      },
      {
        "id": "beef-biftek-vici-250gr-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Biftek Viçi (250gr) + perime + patate",
          "tr": "Dana Biftek (250gr) + sebze + patates",
          "en": "Beef Steak (250g) + veggies + fries",
          "mk": "Говедски бифтек (250г) + зеленчук + помфрит"
        },
        "price": "1250 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/biftek.jpg"
      },
      {
        "id": "beef-sote-vici-150gr",
        "cat": "beef",
        "name": {
          "sq": "Sote Viçi (150gr)",
          "tr": "Dana Sote (150gr)",
          "en": "Beef Saute (150g)",
          "mk": "Говедско соте (150г)"
        },
        "price": "550 DEN",
        "desc": {
          "sq": "Këpurdha, karot, spec, qepë, krem të bardh, sos domate, kashkavall",
          "tr": "Mantar, havuç, biber, soğan, beyaz krema, domates sosu, kaşar",
          "en": "Mushrooms, carrot, pepper, onion, white cream, tomato sauce, kashkaval",
          "mk": "Печурки, морков, пиперка, кромид, бел крем, доматен сос, кашкавал"
        },
        "img": "assets/products/tavuk-dana-sote.jpg"
      },
      {
        "id": "beef-brinje-vici-300gr-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Brinjë viçi (300gr) + perime + patate",
          "tr": "Dana Kaburga (300gr) + sebze + patates",
          "en": "Beef Ribs (300g) + veggies + fries",
          "mk": "Говедски ребра (300г) + зеленчук + помфрит"
        },
        "price": "1100 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/pirzola.jpg"
      },
      {
        "id": "beef-kotlet-vici-240gr-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Kotlet viçi (240gr) + perime + patate",
          "tr": "Dana Kotlet (240gr) + sebze + patates",
          "en": "Beef Cutlet (240g) + veggies + fries",
          "mk": "Говедски котлет (240г) + зеленчук + помфрит"
        },
        "price": "680 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/dana-kotlet.jpg"
      },
      {
        "id": "beef-mish-vici-ne-furre-250gr-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Mish viçi në furrë (250gr) + perime + patate",
          "tr": "Fırında Dana (250gr) + sebze + patates",
          "en": "Oven Beef (250g) + veggies + fries",
          "mk": "Говедско во рерна (250г) + зеленчук + помфрит"
        },
        "price": "560 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mish-na-furr.jpg"
      },
      {
        "id": "beef-pleskavic-sharri-220gr-me-kashkavall-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Pleskavic Sharri (220gr) me kashkavall + perime + patate",
          "tr": "Şarri Pleskavica (220gr) kaşarlı + sebze + patates",
          "en": "Sharri Pleskavica (220g) w/ kashkaval + veggies + fries",
          "mk": "Шарри плескавица (220г) со кашкавал + зеленчук + помфрит"
        },
        "price": "300 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/pleskavica.jpg"
      },
      {
        "id": "beef-qofte-shtepie-300gr-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Qofte shtëpie (300gr) + perime + patate",
          "tr": "Ev Köftesi (300gr) + sebze + patates",
          "en": "Homemade Meatballs (300g) + veggies + fries",
          "mk": "Домашни ќофтиња (300г) + зеленчук + помфрит"
        },
        "price": "300 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/kofte.jpg"
      },
      {
        "id": "beef-suxhuk-shtepie-220gr-perime-patate",
        "cat": "beef",
        "name": {
          "sq": "Suxhuk shtëpie (220gr) + perime + patate",
          "tr": "Ev Sucuğu (220gr) + sebze + patates",
          "en": "Homemade Suxuk (220g) + veggies + fries",
          "mk": "Домашен суџук (220г) + зеленчук + помфрит"
        },
        "price": "300 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/sucuk.jpg"
      },
      {
        "id": "beef-extra-sos-kepurdhash",
        "cat": "beef",
        "name": {
          "sq": "Extra — Sos këpurdhash",
          "tr": "Ekstra — Mantarlı Sos",
          "en": "Extra — Mushroom Sauce",
          "mk": "Екстра — сос од печурки"
        },
        "price": "40 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mantar-sos.jpg"
      }
    ]
  },
  {
    "key": "chicken-burger",
    "icon": "🍗",
    "title": {
      "sq": "PRODUKTE TË PULËS • HAMBURGER",
      "tr": "Tavuk Ürünleri • Burgerler",
      "en": "Chicken • Burgers",
      "mk": "Пилешко • Бургери"
    },
    "items": [
      {
        "id": "chicken-burger-fileto-pule-220gr-perime-patate",
        "cat": "chicken-burger",
        "name": {
          "sq": "Fileto Pule (220gr) + perime + patate",
          "tr": "Tavuk Fileto (220gr) + sebze + patates",
          "en": "Chicken Fillet (220g) + veggies + fries",
          "mk": "Пилешко филе (220г) + зеленчук + помфрит"
        },
        "price": "280 DEN",
        "desc": {
          "sq": "Stek në zgarë",
          "tr": "Izgara tavuk",
          "en": "Grilled steak",
          "mk": "Стек на скара"
        },
        "img": "assets/products/fileto.png"
      },
      {
        "id": "chicken-burger-shish-pule-220gr-perime-patate",
        "cat": "chicken-burger",
        "name": {
          "sq": "Shish Pule (220gr) + perime + patate",
          "tr": "Tavuk Şiş (220gr) + sebze + patates",
          "en": "Chicken Skewer (220g) + veggies + fries",
          "mk": "Пилешки ражничи (220г) + зеленчук + помфрит"
        },
        "price": "300 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/shish-pule.jpg"
      },
      {
        "id": "chicken-burger-sote-pule-150gr",
        "cat": "chicken-burger",
        "name": {
          "sq": "Sote Pule (150gr)",
          "tr": "Tavuk Sote (150gr)",
          "en": "Chicken Saute (150g)",
          "mk": "Пилешко соте (150г)"
        },
        "price": "250 DEN",
        "desc": {
          "sq": "Këpurdha, karot, spec, qepë, krem të bardh, sos domate, kashkavall",
          "tr": "Mantar, havuç, biber, soğan, beyaz krema, domates sosu, kaşar",
          "en": "Mushrooms, carrot, pepper, onion, white cream, tomato sauce, kashkaval",
          "mk": "Печурки, морков, пиперка, кромид, бел крем, доматен сос, кашкавал"
        },
        "img": "assets/products/tavuk-dana-sote.jpg"
      },
      {
        "id": "chicken-burger-chicken-fingers-220gr-patate-2-sos",
        "cat": "chicken-burger",
        "name": {
          "sq": "Chicken Fingers (220gr) + patate + 2 sos",
          "tr": "Çıtır Tavuk (220gr) + patates + 2 sos",
          "en": "Chicken Fingers (220g) + fries + 2 sauces",
          "mk": "Chicken Fingers (220г) + помфрит + 2 соса"
        },
        "price": "200 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/chicken-finger.jpg"
      },
      {
        "id": "chicken-burger-chicken-wings-8-cope-patate-2-sos",
        "cat": "chicken-burger",
        "name": {
          "sq": "Chicken Wings (8 copë) + patate + 2 sos",
          "tr": "Tavuk Kanat (8 adet) + patates + 2 sos",
          "en": "Chicken Wings (8 pcs) + fries + 2 sauces",
          "mk": "Пилешки крилца (8) + помфрит + 2 соса"
        },
        "price": "280 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/tavuk-kanat.jpg"
      },
      {
        "id": "chicken-burger-burger-klasik",
        "cat": "chicken-burger",
        "name": {
          "sq": "Burger Klasik",
          "tr": "Klasik Burger",
          "en": "Classic Burger",
          "mk": "Класичен бургер"
        },
        "price": "200 DEN",
        "desc": {
          "sq": "Pleskavic (100gr), marule, qepë, domate, kornishon, kashkavall, patate të skuqura, sos",
          "tr": "Pleskavica (100gr), marul, soğan, domates, kornişon, kaşar, patates, sos",
          "en": "Pleskavica (100g), lettuce, onion, tomato, pickles, kashkaval, fries, sauce",
          "mk": "Плескавица (100г), марула, кромид, домат, кисели краставички, кашкавал, помфрит, сос"
        },
        "img": "assets/products/burger.jpg"
      },
      {
        "id": "chicken-burger-chicken-burger",
        "cat": "chicken-burger",
        "name": {
          "sq": "Chicken Burger",
          "tr": "Tavuk Burger",
          "en": "Chicken Burger",
          "mk": "Пилешки бургер"
        },
        "price": "180 DEN",
        "desc": {
          "sq": "Stek në zgarë (100gr), marule, qepë, domate, kornishon, kashkavall, patate të skuqura, sos",
          "tr": "Izgara steak (100gr), marul, soğan, domates, kornişon, kaşar, patates, sos",
          "en": "Grilled steak (100g), lettuce, onion, tomato, pickles, kashkaval, fries, sauce",
          "mk": "Стек на скара (100г), марула, кромид, домат, кисели краставички, кашкавал, помфрит, сос"
        },
        "img": "assets/products/tavuk-burger.jpg"
      },
      {
        "id": "chicken-burger-mantis-nuclear-burger",
        "cat": "chicken-burger",
        "name": {
          "sq": "Mantis Nuclear Burger",
          "tr": "Mantis Nuclear Burger",
          "en": "Mantis Nuclear Burger",
          "mk": "Mantis Nuclear Burger"
        },
        "price": "320 DEN",
        "desc": {
          "sq": "Pleskavic (100gr), mish sëzdërm (100gr), marule, qepë, domate, kornishon, kashkavall, mish të thatë, patate të skuqura, sos",
          "tr": "Pleskavica (100gr) + kavurma et (100gr), marul, soğan, domates, kornişon, kaşar, kurutulmuş et, patates, sos",
          "en": "Pleskavica (100g) + roasted beef meat (100g) + lettuce, onion, tomato, pickles, kashkaval, dried meat, fries, sauce",
          "mk": "Плескавица (100г) + суздерм месо (100г) + марула, кромид, домат, кисели краставички, кашкавал, сушено месо, помфрит, сос"
        },
        "img": "assets/products/burger.jpg"
      },
      {
        "id": "chicken-burger-extra-sos",
        "cat": "chicken-burger",
        "name": {
          "sq": "Extra — Sos",
          "tr": "Ekstra — Sos",
          "en": "Extra — Sauce",
          "mk": "Екстра — сос"
        },
        "price": "20 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mantar-sos.jpg"
      },
      {
        "id": "chicken-burger-extra-sos-kepurdhash",
        "cat": "chicken-burger",
        "name": {
          "sq": "Extra — Sos këpurdhash",
          "tr": "Ekstra — Mantarlı Sos",
          "en": "Extra — Mushroom Sauce",
          "mk": "Екстра — сос од печурки"
        },
        "price": "40 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mantar-sos.jpg"
      },
      {
        "id": "chicken-burger-extra-kackavall-veze-djathe-kerpudha-perime-te-ferguara-mish-te-thate",
        "cat": "chicken-burger",
        "name": {
          "sq": "Extra — Kaçkavall / vezë / djathë / kërpudha / perime të fërguara / mish të thatë",
          "tr": "Ekstra — Kaşar / yumurta / peynir / mantar / kızarmış sebze / kurutulmuş et",
          "en": "Extra — Kashkaval / egg / cheese / mushrooms / fried veggies / dried meat",
          "mk": "Екстра — кашкавал / јајце / сирење / печурки / пржен зеленчук / сушено месо"
        },
        "price": "30 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mantar-sos.jpg"
      }
    ]
  },
  {
    "key": "desserts-juices",
    "icon": "🍰",
    "title": {
      "sq": "ËMBËLSİRA • LËNGJE",
      "tr": "Tatlılar • Meyve Suları",
      "en": "Desserts • Juices",
      "mk": "Десерти • Сокови"
    },
    "items": [
      {
        "id": "desserts-juices-mantis-chocolate",
        "cat": "desserts-juices",
        "name": {
          "sq": "Mantis Chocolate",
          "tr": "Mantis Çikolata",
          "en": "Mantis Chocolate",
          "mk": "Mantis Chocolate"
        },
        "price": "120 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mantis-chocolate.jpg"
      },
      {
        "id": "desserts-juices-sutliac-ne-furre",
        "cat": "desserts-juices",
        "name": {
          "sq": "Sutliaç në furrë",
          "tr": "Fırın Sütlaç",
          "en": "Baked Rice Pudding",
          "mk": "Оризов пудинг (печен)"
        },
        "price": "70 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/sutlac.png"
      },
      {
        "id": "desserts-juices-kajmacin",
        "cat": "desserts-juices",
        "name": {
          "sq": "Kajmaçin",
          "tr": "Kaymaçin",
          "en": "Kajmacin",
          "mk": "Кајмачин"
        },
        "price": "70 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/kaymacin.jpg"
      },
      {
        "id": "desserts-juices-ashure",
        "cat": "desserts-juices",
        "name": {
          "sq": "Ashure",
          "tr": "Aşure",
          "en": "Ashure",
          "mk": "Ашуре"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/asure.jpg"
      },
      {
        "id": "desserts-juices-palacinka",
        "cat": "desserts-juices",
        "name": {
          "sq": "Palaçinka",
          "tr": "Pankek / Krep",
          "en": "Pancake / Crepe",
          "mk": "Палачинка"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "Nutella, Dredhëza, Banana",
          "tr": "Nutella, çilek, muz",
          "en": "Nutella, strawberry, banana",
          "mk": "Нутела, јагода, банана"
        },
        "img": "assets/products/palacinka.jpg"
      },
      {
        "id": "desserts-juices-vishne",
        "cat": "desserts-juices",
        "name": {
          "sq": "Vishne",
          "tr": "Vişne",
          "en": "Sour Cherry",
          "mk": "Вишна"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/juice-sour-cherry.jpg"
      },
      {
        "id": "desserts-juices-molle",
        "cat": "desserts-juices",
        "name": {
          "sq": "Mollë",
          "tr": "Elma",
          "en": "Apple",
          "mk": "Јаболко"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/juice-apple.jpg"
      },
      {
        "id": "desserts-juices-pjeshke",
        "cat": "desserts-juices",
        "name": {
          "sq": "Pjeshkë",
          "tr": "Şeftali",
          "en": "Peach",
          "mk": "Праска"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/juice-peach.jpg"
      },
      {
        "id": "desserts-juices-portokall",
        "cat": "desserts-juices",
        "name": {
          "sq": "Portokall",
          "tr": "Portakal",
          "en": "Orange",
          "mk": "Портокал"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/juice-orange.jpg"
      },
      {
        "id": "desserts-juices-shege",
        "cat": "desserts-juices",
        "name": {
          "sq": "Shegë",
          "tr": "Nar",
          "en": "Pomegranate",
          "mk": "Калинка (нар)"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/juice-pomegranate.jpg"
      },
      {
        "id": "desserts-juices-multi-vitamin",
        "cat": "desserts-juices",
        "name": {
          "sq": "Multi Vitamin",
          "tr": "Multivitamin",
          "en": "Multi Vitamin",
          "mk": "Мултивитамин"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/juice-multivitamin.jpg"
      },
      {
        "id": "desserts-juices-fresh-juice-dy-perzierje-te-frutave",
        "cat": "desserts-juices",
        "name": {
          "sq": "Fresh Juice — Dy përzierje të frutave",
          "tr": "Taze Meyve Suyu — 2 meyve karışımı",
          "en": "Fresh Juice — 2 fruit mix",
          "mk": "Fresh Juice — 2 овошја"
        },
        "price": "120 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/fresh-juice.jpg"
      },
      {
        "id": "desserts-juices-fresh-juice-tre-e-me-shume-perzierje",
        "cat": "desserts-juices",
        "name": {
          "sq": "Fresh Juice — Tre e më shumë përzierje",
          "tr": "Taze Meyve Suyu — 3+ meyve karışımı",
          "en": "Fresh Juice — 3+ fruit mix",
          "mk": "Fresh Juice — 3+ овошја"
        },
        "price": "130 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/fresh-juice.jpg"
      },
      {
        "id": "desserts-juices-smoothie-dy-perzierje-te-frutave",
        "cat": "desserts-juices",
        "name": {
          "sq": "Smoothie — Dy përzierje të frutave",
          "tr": "Smoothie — 2 meyve karışımı",
          "en": "Smoothie — 2 fruit mix",
          "mk": "Смути — 2 овошја"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/smoothie.jpg"
      },
      {
        "id": "desserts-juices-smoothie-tre-e-me-shume-perzierje",
        "cat": "desserts-juices",
        "name": {
          "sq": "Smoothie — Tre e më shumë përzierje",
          "tr": "Smoothie — 3+ meyve karışımı",
          "en": "Smoothie — 3+ fruit mix",
          "mk": "Смути — 3+ овошја"
        },
        "price": "150 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/smoothie.jpg"
      }
    ]
  },
  {
    "key": "drinks",
    "icon": "🥤",
    "title": {
      "sq": "PİJE TË FTOHTA • PİJE TË NXEHTA",
      "tr": "Soğuk İçecekler • Sıcak İçecekler",
      "en": "Cold Drinks • Hot Drinks",
      "mk": "Ладни • Топли пијалоци"
    },
    "items": [
      {
        "id": "drinks-coca-cola",
        "cat": "drinks",
        "name": {
          "sq": "Coca Cola",
          "tr": "Coca Cola",
          "en": "Coca Cola",
          "mk": "Coca Cola"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/coca-cola-can.jpg"
      },
      {
        "id": "drinks-fanta",
        "cat": "drinks",
        "name": {
          "sq": "Fanta",
          "tr": "Fanta",
          "en": "Fanta",
          "mk": "Fanta"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/fanta-orange-can.jpg"
      },
      {
        "id": "drinks-coca-cola-zero",
        "cat": "drinks",
        "name": {
          "sq": "Coca Cola Zero",
          "tr": "Coca Cola Zero",
          "en": "Coca Cola Zero",
          "mk": "Coca Cola Zero"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/coca-cola-zero-can.jpg"
      },
      {
        "id": "drinks-sprite",
        "cat": "drinks",
        "name": {
          "sq": "Sprite",
          "tr": "Sprite",
          "en": "Sprite",
          "mk": "Sprite"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/sprite-can.jpg"
      },
      {
        "id": "drinks-schweppes-lemon",
        "cat": "drinks",
        "name": {
          "sq": "Schweppes Lemon",
          "tr": "Schweppes Limon",
          "en": "Schweppes Lemon",
          "mk": "Schweppes Lemon"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/schweppes-lemon-can.jpg"
      },
      {
        "id": "drinks-schweppes-tangerin",
        "cat": "drinks",
        "name": {
          "sq": "Schweppes Tangerin",
          "tr": "Schweppes Mandalina",
          "en": "Schweppes Tangerine",
          "mk": "Schweppes Tangerine"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/schweppes-tangerine-can.jpg"
      },
      {
        "id": "drinks-strumka",
        "cat": "drinks",
        "name": {
          "sq": "Strumka",
          "tr": "Strumka",
          "en": "Strumka",
          "mk": "Strumka"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/strumka-bottle.jpg"
      },
      {
        "id": "drinks-ice-tea-limon",
        "cat": "drinks",
        "name": {
          "sq": "Ice Tea Limon",
          "tr": "Soğuk Çay Limon",
          "en": "Ice Tea Lemon",
          "mk": "Ice Tea Lemon"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/ice-tea-lemon.jpg"
      },
      {
        "id": "drinks-ice-tea-pjeshke",
        "cat": "drinks",
        "name": {
          "sq": "Ice Tea Pjeshkë",
          "tr": "Soğuk Çay Şeftali",
          "en": "Ice Tea Peach",
          "mk": "Ice Tea Peach"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/ice-tea-peach.jpg"
      },
      {
        "id": "drinks-lacin-mandarina",
        "cat": "drinks",
        "name": {
          "sq": "Laçin Mandarina",
          "tr": "Laçin Mandalina",
          "en": "Laçin Mandarin",
          "mk": "Laçin Mandarin"
        },
        "price": "60 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/lacin-mandarina.jpg"
      },
      {
        "id": "drinks-lacin-maline-rrush",
        "cat": "drinks",
        "name": {
          "sq": "Laçin Malinë - Rrush",
          "tr": "Laçin Ahududu - Üzüm",
          "en": "Laçin Raspberry - Grape",
          "mk": "Laçin Raspberry - Grape"
        },
        "price": "60 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/lacin-maline-rrush.jpg"
      },
      {
        "id": "drinks-lacin-limon",
        "cat": "drinks",
        "name": {
          "sq": "Laçin Limon",
          "tr": "Laçin Limon",
          "en": "Laçin Lemon",
          "mk": "Laçin Lemon"
        },
        "price": "60 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/lacin-limon.jpg"
      },
      {
        "id": "drinks-uje",
        "cat": "drinks",
        "name": {
          "sq": "Ujë",
          "tr": "Su",
          "en": "Water",
          "mk": "Вода"
        },
        "price": "50/100 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/aqua-viziana-large.jpg"
      },
      {
        "id": "drinks-uje-i-tharte",
        "cat": "drinks",
        "name": {
          "sq": "Ujë i thartë",
          "tr": "Maden Suyu",
          "en": "Sparkling Water",
          "mk": "Газирана вода"
        },
        "price": "60/110 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/mg-viziana-large.jpg"
      },
      {
        "id": "drinks-ajran",
        "cat": "drinks",
        "name": {
          "sq": "Ajran",
          "tr": "Ayran",
          "en": "Ayran",
          "mk": "Ајран"
        },
        "price": "60 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/ayran.jpg"
      },
      {
        "id": "drinks-ice-coffe",
        "cat": "drinks",
        "name": {
          "sq": "Ice Coffe",
          "tr": "Buzlu Kahve",
          "en": "Iced Coffee",
          "mk": "Ледено кафе"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/ice-coffee.jpg"
      },
      {
        "id": "drinks-neskafe-ice",
        "cat": "drinks",
        "name": {
          "sq": "Neskafe Ice",
          "tr": "Buzlu Nescafe",
          "en": "Iced Nescafe",
          "mk": "Nescafe Ice"
        },
        "price": "110 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/ice-nescafe.jpg"
      },
      {
        "id": "drinks-limonade-shtepije",
        "cat": "drinks",
        "name": {
          "sq": "Limonadë shtëpije",
          "tr": "Ev Limonata",
          "en": "Homemade Lemonade",
          "mk": "Домашна лимонада"
        },
        "price": "60/90 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/lacin-lemonade-green.jpg"
      },
      {
        "id": "drinks-borovnice",
        "cat": "drinks",
        "name": {
          "sq": "Borovnice",
          "tr": "Yaban Mersini",
          "en": "Blueberry",
          "mk": "Боровинка"
        },
        "price": "50/80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/borovnica.jpg"
      },
      {
        "id": "drinks-espresso-08-10h",
        "cat": "drinks",
        "name": {
          "sq": "Espresso",
          "tr": "Espresso",
          "en": "Espresso",
          "mk": "Еспресо"
        },
        "price": "50 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/espresso.jpg"
      },
      {
        "id": "drinks-macchiato",
        "cat": "drinks",
        "name": {
          "sq": "Macchiato",
          "tr": "Macchiato",
          "en": "Macchiato",
          "mk": "Макијато"
        },
        "price": "50/70 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/machiato.jpg"
      },
      {
        "id": "drinks-cappuccino",
        "cat": "drinks",
        "name": {
          "sq": "Cappuccino",
          "tr": "Cappuccino",
          "en": "Cappuccino",
          "mk": "Капучино"
        },
        "price": "60 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/machiato.jpg"
      },
      {
        "id": "drinks-kafe-turke",
        "cat": "drinks",
        "name": {
          "sq": "Kafe Turke",
          "tr": "Türk Kahvesi",
          "en": "Turkish Coffee",
          "mk": "Турско кафе"
        },
        "price": "60 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/kafe-turke.png"
      },
      {
        "id": "drinks-caj-filter",
        "cat": "drinks",
        "name": {
          "sq": "Caj Filter",
          "tr": "Filtre Çay",
          "en": "Filter Tea",
          "mk": "Филтер чај"
        },
        "price": "60 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/cay-filtre.jpg"
      },
      {
        "id": "drinks-caj-shtepie",
        "cat": "drinks",
        "name": {
          "sq": "Caj Shtëpie",
          "tr": "Ev Çayı",
          "en": "House Tea",
          "mk": "Домашен чај"
        },
        "price": "30/50 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/cay.jpg"
      },
      {
        "id": "drinks-cokollade-e-nxehte",
        "cat": "drinks",
        "name": {
          "sq": "Cokollade e Nxehte",
          "tr": "Sıcak Çikolata",
          "en": "Hot Chocolate",
          "mk": "Топло чоколадо"
        },
        "price": "100 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/hot-chocolate.jpg"
      },
      {
        "id": "drinks-neskafe-e-nxehte",
        "cat": "drinks",
        "name": {
          "sq": "Neskafe e Nxehte",
          "tr": "Sıcak Nescafe",
          "en": "Hot Nescafe",
          "mk": "Топол Нескафе"
        },
        "price": "80 DEN",
        "desc": {
          "sq": "",
          "tr": "",
          "en": "",
          "mk": ""
        },
        "img": "assets/products/nescafe.jpg"
      }
    ]
  }
];
  const LANGS = ["sq", "tr", "en", "mk"];
  const pick = (obj) => (obj && (obj.sq || obj.tr || obj.en || obj.mk)) || "";
  for (const c of MENU) {
    c.title = c.title || {};
    for (const L of LANGS) c.title[L] = c.title[L] || pick(c.title);
    c.items = (c.items || []).map((it) => {
      it.name = it.name || {};
      it.desc = it.desc || {};
      for (const L of LANGS) {
        it.name[L] = it.name[L] || pick(it.name);
        it.desc[L] = it.desc[L] || "";
      }
      it.price = it.price || "";
      it.img = it.img || "";
      return it;
    });
  }
  window.MANTIS_MENU = MENU;
})();
