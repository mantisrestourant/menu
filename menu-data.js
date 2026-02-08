/* menu-data.js
   Source: MANTIS MENU finish(Recovered).pdf
   - Languages: sq (Albanian), tr, en, mk
   - Deterministic IDs for stable product links
   - img:"" placeholders for later uploads
*/

(() => {
  const LANGS = ["sq", "tr", "en", "mk"];

  const slug = (s = "") =>
    String(s)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const pick = (obj, lang) => (obj && (obj[lang] || obj.sq || obj.tr || obj.en || obj.mk)) || "";

  const mkI18n = (sq, tr, en, mk) => ({ sq, tr, en, mk });

  // Ensures stable unique IDs even if same name repeats
  const makeIdFactory = () => {
    const seen = new Map();
    return (catKey, baseName) => {
      const base = `${catKey}-${slug(baseName)}` || `${catKey}-item`;
      const n = (seen.get(base) || 0) + 1;
      seen.set(base, n);
      return n === 1 ? base : `${base}-${n}`;
    };
  };
  const makeId = makeIdFactory();

  // Helper: build item with multilingual fields
  const item = ({ catKey, name, price = "", desc = null, img = "" }) => {
    const baseName = pick(name, "sq") || pick(name, "tr") || pick(name, "en") || pick(name, "mk") || "item";
    const id = makeId(catKey, baseName);
    const safeDesc =
      desc ||
      mkI18n(
        "", // sq
        "", // tr
        "", // en
        ""  // mk
      );

    return {
      id,
      cat: catKey,
      name,
      price,
      desc: safeDesc,
      img
    };
  };

  // -----------------------------
  // MENU DATA (FULL)
  // -----------------------------
  const MENU = [
    // 01 — Breakfast
    {
      key: "breakfast",
      icon: "🍳",
      title: mkI18n("MËNGJESİ", "Kahvaltı", "Breakfast", "Појадок"),
      items: [
        item({
          catKey: "breakfast",
          name: mkI18n("Menemen", "Menemen", "Menemen", "Менемен"),
          price: "290 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë në sy", "Sahanda Yumurta", "Sunny-side Eggs", "Јајца на око"),
          price: "230 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Omlet", "Omlet", "Omelette", "Омлет"),
          price: "230 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë të zier", "Haşlanmış Yumurta", "Boiled Eggs", "Варени јајца"),
          price: "150 DEN"
        }),

        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me sëzdërm", "Süzdürm’lü Yumurta", "Eggs with Beef Suet", "Јајца со суздерм"),
          price: "320 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me suxhuk", "Sucuklu Yumurta", "Eggs with Sucuk", "Јајца со суџук"),
          price: "280 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me kaçkavall", "Kaşarlı Yumurta", "Eggs with Kashkaval", "Јајца со кашкавал"),
          price: "260 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me djath", "Peynirli Yumurta", "Eggs with Cheese", "Јајца со сирење"),
          price: "260 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me mish të tymosur", "Füme Etli Yumurta", "Eggs with Smoked Beef", "Јајца со чадено месо"),
          price: "280 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me speca", "Biberli Yumurta", "Eggs with Peppers", "Јајца со пиперки"),
          price: "240 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me këpurdha të freskëta", "Mantarlı Yumurta", "Eggs with Mushrooms", "Јајца со печурки"),
          price: "240 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n("Vezë me spinaq (sezonale)", "Ispanaklı Yumurta (Sezonluk)", "Eggs with Spinach (Seasonal)", "Јајца со спанаќ (сезонски)"),
          price: "260 DEN"
        }),
        item({
          catKey: "breakfast",
          name: mkI18n(
            "Vezë e përzier (mund të zgjidhni përzierjen sipas shijes tuaj nga opcionet e mësipërme)",
            "Karışık Yumurta (üst seçeneklerden seçim)",
            "Mixed Eggs (choose from options above)",
            "Мешани јајца (избор од опциите погоре)"
          ),
          price: "230 DEN"
        }),

        item({
          catKey: "breakfast",
          name: mkI18n("Mëngjesi në porcion", "Kahvaltı (Porsiyon)", "Breakfast Plate", "Појадок (порција)"),
          price: "", // PDF'te bu satırda fiyat net görünmüyor
          desc: mkI18n(
            "Djath, kaçkavall, ullinj të zi dhe të gjelbër, domate, kastravec, reçel, çoko krem, bukë shtëpije dhe çaj. (extra çaj 10 den)",
            "Peynir, kaşar, siyah/yeşil zeytin, domate, salatalık, reçel, çoko krem, ev ekmeği ve çay. (ekstra çay 10 den)",
            "Cheese, kashkaval, black/green olives, tomato, cucumber, jam, choco cream, homemade bread & tea. (extra tea 10 den)",
            "Сирење, кашкавал, црни/зелени маслинки, домат, краставица, џем, чоко крем, домашен леб и чај. (доп. чај 10 ден)"
          )
        }),

        item({
          catKey: "breakfast",
          name: mkI18n("Manti’s Mëngjesi", "Mantis Kahvaltısı", "Mantis Breakfast", "Mantis Појадок"),
          price: "530 DEN",
          desc: mkI18n(
            "Vezë në sy me sëzdërm, djath, kaçkavall, djath të fortë në gjalpë, ullinj të zi dhe të gjelbër, domate, kastravec, gjalpë, speca të marinuara, gjizë, ajvar, pallaçinka, dy lloje reçel shtëpije, mjaltë, çoko krem, bukë shtëpije, çaji pakufi.",
            "Süzdürm’lü sahanda yumurta, peynir, kaşar, tereyağında sert peynir, siyah/yeşil zeytin, domate, salatalık, tereyağı, marine biber, lor, ajvar, krep, 2 çeşit ev reçeli, bal, çoko krem, ev ekmeği, sınırsız çay.",
            "Sunny-side eggs with beef suet, cheese, kashkaval, aged cheese in butter, black/green olives, tomato, cucumber, butter, marinated peppers, curd, ajvar, pancake, 2 homemade jams, honey, choco cream, homemade bread, unlimited tea.",
            "Јајца на око со суздерм, сирење, кашкавал, зрело сирење во путер, црни/зелени маслинки, домат, краставица, путер, маринирани пиперки, урда, ајвар, палачинка, 2 домашни џема, мед, чоко крем, домашен леб, неограничен чај."
          )
        }),

        item({
          catKey: "breakfast",
          name: mkI18n("Kujmak", "Kuymak", "Kuymak", "Кујмак"),
          price: "150 DEN",
          desc: mkI18n("Specialitetet për të shijuar", "Özel lezzet", "Special to enjoy", "Специјалитет")
        }),
        item({
          catKey: "breakfast",
          name: mkI18n(
            "Speca me sos beshamel dhe kashkavall",
            "Beşamel & Kaşarlı Biber",
            "Peppers with Bechamel & Kashkaval",
            "Пиперки со бешамел и кашкавал"
          ),
          price: "150 DEN",
          desc: mkI18n("Specialitetet për të shijuar", "Özel lezzet", "Special to enjoy", "Специјалитет")
        }),
      ]
    },

    // 02 — Lahmaxhuna / Gozleme / Pide
    {
      key: "lahmaxhuna-gozleme-pide",
      icon: "🥙",
      title: mkI18n("LAHMAXHUNA • GOZLEME • PIDE", "Lahmacun • Gözleme • Pide", "Lahmacun • Gozleme • Pide", "Лахмаџун • Гозлеме • Пиде"),
      items: [
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Lahmaxhuna (Djegëse)", "Lahmacun (Acılı)", "Lahmacun (Spicy)", "Лахмаџун (луто)"),
          price: "100 DEN",
          desc: mkI18n("Marullë, Magdanoz, Limon, Qep", "Marul, maydanoz, limon, soğan", "Lettuce, parsley, lemon, onion", "Марула, магдонос, лимон, кромид")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Lahmaxhuna (Jo djegëse)", "Lahmacun (Acısız)", "Lahmacun (Mild)", "Лахмаџун (не луто)"),
          price: "100 DEN",
          desc: mkI18n("Marullë, Magdanoz, Limon, Qep", "Marul, maydanoz, limon, soğan", "Lettuce, parsley, lemon, onion", "Марула, магдонос, лимон, кромид")
        }),

        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Gozleme — Sëzdërm dhe kaçkavall", "Gözleme — Süzdürm & Kaşar", "Gozleme — Beef suet & Kashkaval", "Гозлеме — суздерм и кашкавал"),
          price: "180 DEN"
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Gozleme — Me patate dhe presh", "Gözleme — Patates & Pırasa", "Gozleme — Potato & Leek", "Гозлеме — компир и праз"),
          price: "150 DEN"
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Gozleme — Vezë dhe gjizë", "Gözleme — Yumurta & Lor", "Gozleme — Egg & Curd", "Гозлеме — јајце и урда"),
          price: "150 DEN"
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Gozleme — Spinaq dhe qep (Sezonale)", "Gözleme — Ispanak & Soğan (Sezonluk)", "Gozleme — Spinach & Onion (Seasonal)", "Гозлеме — спанаќ и кромид (сезонски)"),
          price: "150 DEN"
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Gozleme — Djath", "Gözleme — Peynir", "Gozleme — Cheese", "Гозлеме — сирење"),
          price: "150 DEN"
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Gozleme — Mish grim", "Gözleme — Kıyma", "Gozleme — Minced Meat", "Гозлеме — мелено месо"),
          price: "170 DEN"
        }),

        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Manti’s", "Pide — Mantis", "Pide — Mantis", "Пиде — Mantis"),
          price: "300 DEN",
          desc: mkI18n("Sëzdërm, Kaçkavall", "Süzdürm, kaşar", "Beef suet, kashkaval", "Суздерм, кашкавал")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Trabzon", "Pide — Trabzon", "Pide — Trabzon", "Пиде — Trabzon"),
          price: "280 DEN",
          desc: mkI18n("3 lloje djathrash, vezë", "3 çeşit peynir, yumurta", "3 cheeses, egg", "3 сирења, јајце")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Klasike", "Pide — Klasik", "Pide — Classic", "Пиде — Класик"),
          price: "220 DEN",
          desc: mkI18n("Kaçkavall", "Kaşar", "Kashkaval", "Кашкавал")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Me suxhuk", "Pide — Sucuklu", "Pide — Sucuk", "Пиде — Со суџук"),
          price: "250 DEN",
          desc: mkI18n("Suxhuk viçi, Kaçkavall", "Dana sucuk, kaşar", "Beef sucuk, kashkaval", "Говедски суџук, кашкавал")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Me mish të grirë dhe kaçkavall", "Pide — Kıymalı & Kaşarlı", "Pide — Minced meat & Kashkaval", "Пиде — Мелено и кашкавал"),
          price: "270 DEN"
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Me perime", "Pide — Sebzeli", "Pide — Veggie", "Пиде — Зеленчук"),
          price: "240 DEN",
          desc: mkI18n("Qep, speca, domate, kaçkavall", "Soğan, biber, domates, kaşar", "Onion, peppers, tomato, kashkaval", "Кромид, пиперки, домат, кашкавал")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Me patate", "Pide — Patatesli", "Pide — Potato", "Пиде — Компир"),
          price: "250 DEN",
          desc: mkI18n("Patate, kaçkavall", "Patates, kaşar", "Potato, kashkaval", "Компир, кашкавал")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — Pidexhiun", "Pide — Pidexhiun", "Pide — Pidexhiun", "Пиде — Pidexhiun"),
          price: "270 DEN",
          desc: mkI18n("Sallcë lahmaxhuni, kaçkavall", "Lahmacun sosu, kaşar", "Lahmacun sauce, kashkaval", "Лахмаџун сос, кашкавал")
        }),
        item({
          catKey: "lahmaxhuna-gozleme-pide",
          name: mkI18n("Pide — E përzier", "Pide — Karışık", "Pide — Mixed", "Пиде — Мешано"),
          price: "270 DEN",
          desc: mkI18n("Zgjedhja e juaj nga opcionet e mësipërme", "Yukarıdaki seçeneklerden seçiminiz", "Your choice from the options above", "Ваш избор од опциите погоре")
        }),
      ]
    },

    // 03-04 — Pizza (full)
    {
      key: "pizza",
      icon: "🍕",
      title: mkI18n("PIZZA", "Pizza", "Pizza", "Пица"),
      items: [
        item({
          catKey: "pizza",
          name: mkI18n("Manti’s", "Mantis", "Mantis", "Mantis"),
          price: "210/320/640 DEN",
          desc: mkI18n("Sëzdërm, vezë, kaçkavall, salcë domate", "Süzdürm, yumurta, kaşar, domates sos", "Beef suet, egg, kashkaval, tomato sauce", "Суздерм, јајце, кашкавал, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Margarita", "Margherita", "Margherita", "Маргерита"),
          price: "110/180/390 DEN",
          desc: mkI18n("Kaçkavall, salcë domate", "Kaşar, domates sos", "Kashkaval, tomato sauce", "Кашкавал, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Fungi", "Fungi", "Fungi", "Фунги"),
          price: "140/210/450 DEN",
          desc: mkI18n("Këpurdha të freskëta, kaçkavall, salcë domate", "Taze mantar, kaşar, domates sos", "Fresh mushrooms, kashkaval, tomato sauce", "Свежи печурки, кашкавал, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Prosciutto", "Prosciutto", "Prosciutto", "Проскуто"),
          price: "160/270/550 DEN",
          desc: mkI18n("Mish viçi i tymosur, qep, këpurdha të freskëta, kaçkavall, salcë domate", "Füme dana, soğan, taze mantar, kaşar, domates sos", "Smoked beef, onion, fresh mushrooms, kashkaval, tomato sauce", "Чадено говедско, кромид, свежи печурки, кашкавал, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Quattro Formaggi", "4 Peynir", "Quattro Formaggi", "Четири сирења"),
          price: "150/270/550 DEN",
          desc: mkI18n("Mozzarella, gorgonzola, krem djathi, kaçkavall, salcë domate", "Mozzarella, gorgonzola, krem peynir, kaşar, domates sos", "Mozzarella, gorgonzola, cream cheese, kashkaval, tomato sauce", "Моцарела, горгонзола, крем сирење, кашкавал, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("La Rucola", "La Rucola", "La Rucola", "La Rucola"),
          price: "170/270/570 DEN",
          desc: mkI18n("Rukolla, mish viçi i tymosur, parmezan, kaçkavall, salcë domate", "Roka, füme dana, parmesan, kaşar, domates sos", "Arugula, smoked beef, parmesan, kashkaval, tomato sauce", "Рукола, чадено говедско, пармезан, кашкавал, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Quattro Stagioni", "Quattro Stagioni", "Quattro Stagioni", "Quattro Stagioni"),
          price: "200/300/630 DEN",
          desc: mkI18n(
            "Mish viçi i tymosur, suxhuk viçi, mish pule i tymosur, këpurdha të freskëta, kaçkavall, salcë domate",
            "Füme dana, dana sucuk, füme tavuk, taze mantar, kaşar, domates sos",
            "Smoked beef, beef sucuk, smoked chicken, fresh mushrooms, kashkaval, tomato sauce",
            "Чадено говедско, говедски суџук, чадено пилешко, свежи печурки, кашкавал, доматен сос"
          )
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Vegetarian", "Vejetaryen", "Vegetarian", "Вегетаријанска"),
          price: "150/250/530 DEN",
          desc: mkI18n(
            "Domate të freskëta, brokoli, këpurdha të freskëta, speca, misër, qep, kaçkavall, salcë domate",
            "Taze domates, brokoli, taze mantar, biber, mısır, soğan, kaşar, domates sos",
            "Fresh tomato, broccoli, fresh mushrooms, peppers, corn, onion, kashkaval, tomato sauce",
            "Свеж домат, брокула, свежи печурки, пиперки, пченка, кромид, кашкавал, доматен сос"
          )
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Mediterranean", "Akdeniz", "Mediterranean", "Медитеранска"),
          price: "150/250/530 DEN",
          desc: mkI18n(
            "Djath, domate të freskëta, qep, ullinj, misër, këpurdha të freskëta, kaçkavall, salcë domate",
            "Peynir, taze domates, soğan, zeytin, mısır, taze mantar, kaşar, domates sos",
            "Cheese, fresh tomato, onion, olives, corn, fresh mushrooms, kashkaval, tomato sauce",
            "Сирење, свеж домат, кромид, маслинки, пченка, свежи печурки, кашкавал, доматен сос"
          )
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Tuna", "Ton Balıklı", "Tuna", "Туна"),
          price: "150/250/530 DEN",
          desc: mkI18n("Tuna, kaçkavall, qep, salcë domate", "Ton, kaşar, soğan, domates sos", "Tuna, kashkaval, onion, tomato sauce", "Туна, кашкавал, кромид, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Chicken", "Tavuklu", "Chicken", "Пилешка"),
          price: "150/250/530 DEN",
          desc: mkI18n("Mish pule i tymosur, kaçkavall, salcë domate", "Füme tavuk, kaşar, domates sos", "Smoked chicken, kashkaval, tomato sauce", "Чадено пилешко, кашкавал, доматен сос")
        }),
        item({
          catKey: "pizza",
          name: mkI18n("BBQ Chicken", "BBQ Tavuk", "BBQ Chicken", "BBQ пилешка"),
          price: "170/270/570 DEN",
          desc: mkI18n(
            "Copa mishi pule, salcë barbecue, qepë, djathë, salcë domate",
            "Tavuk parçaları, BBQ sos, soğan, peynir, domates sos",
            "Chicken pieces, BBQ sauce, onion, cheese, tomato sauce",
            "Пилешки парчиња, BBQ сос, кромид, сирење, доматен сос"
          )
        }),
        item({
          catKey: "pizza",
          name: mkI18n("Suxhuk", "Sucuklu", "Suxuk", "Со суџук"),
          price: "170/270/560 DEN",
          desc: mkI18n(
            "Suxhuk viçi, kaçkavall, këpurdha të freskëta, salcë domate",
            "Dana sucuk, kaşar, taze mantar, domates sos",
            "Beef sucuk, kashkaval, fresh mushrooms, tomato sauce",
            "Говедски суџук, кашкавал, свежи печурки, доматен сос"
          )
        }),
      ]
    },

    // 05 — Sandwich & Homemade Wrap
    {
      key: "sandwich-wrap",
      icon: "🥪",
      title: mkI18n("SANDVİÇ • HOMEMADE WRAP", "Sandviç • Wrap", "Sandwich • Wrap", "Сендвич • Врап"),
      items: [
        // Sandwich
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Sandviç — Mish viçi i tymosur", "Sandviç — Füme Dana", "Sandwich — Smoked Beef", "Сендвич — чадено говедско"),
          price: "180 DEN",
          desc: mkI18n(
            "Mish viçi i tymosur, kaçkavall, rukolla, domate, kastravec, sos, patate të skuqura",
            "Füme dana, kaşar, roka, domates, salatalık, sos, patates",
            "Smoked beef, kashkaval, arugula, tomato, cucumber, sauce, fries",
            "Чадено говедско, кашкавал, рукола, домат, краставица, сос, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Sandviç — Suxhuk Bosne", "Sandviç — Bosna Sucuk", "Sandwich — Bosna Sucuk", "Сендвич — Босна суџук"),
          price: "180 DEN",
          desc: mkI18n(
            "Suxhuk Bosne, kaçkavall, marull, domate, kastravec, sos, patate të skuqura",
            "Bosna sucuk, kaşar, marul, domates, salatalık, sos, patates",
            "Bosna sucuk, kashkaval, lettuce, tomato, cucumber, sauce, fries",
            "Босна суџук, кашкавал, марула, домат, краставица, сос, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Sandviç — Stek Pule", "Sandviç — Tavuk Steak", "Sandwich — Chicken Steak", "Сендвич — пилешки стек"),
          price: "180 DEN",
          desc: mkI18n(
            "Stek pule, kaçkavall, marull, domate, kastravec, curry sos, patate të skuqura",
            "Tavuk steak, kaşar, marul, domates, salatalık, köri sos, patates",
            "Chicken steak, kashkaval, lettuce, tomato, cucumber, curry sauce, fries",
            "Пилешки стек, кашкавал, марула, домат, краставица, кари сос, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Sandviç — Tuna", "Sandviç — Ton", "Sandwich — Tuna", "Сендвич — туна"),
          price: "170 DEN",
          desc: mkI18n(
            "Tuna, qepë, misër i ëmbël, marull, domate, sos, patate të skuqura",
            "Ton, soğan, mısır, marul, domates, sos, patates",
            "Tuna, onion, sweet corn, lettuce, tomato, sauce, fries",
            "Туна, кромид, пченка, марула, домат, сос, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Sandviç — Sëzdërm", "Sandviç — Süzdürm", "Sandwich — Beef Suet", "Сендвич — суздерм"),
          price: "200 DEN",
          desc: mkI18n(
            "Sëzdërm, kaçkavall, marull, domate, kastravec, patate të skuqura",
            "Süzdürm, kaşar, marul, domates, salatalık, patates",
            "Beef suet, kashkaval, lettuce, tomato, cucumber, fries",
            "Суздерм, кашкавал, марула, домат, краставица, помфрит"
          )
        }),

        // Homemade Wrap
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Homemade Wrap — Sëzdërm", "Wrap — Süzdürm", "Wrap — Beef Suet", "Врап — суздерм"),
          price: "260 DEN",
          desc: mkI18n("Sëzdërm, kaçkavall, patate të skuqura", "Süzdürm, kaşar, patates", "Beef suet, kashkaval, fries", "Суздерм, кашкавал, помфрит")
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Homemade Wrap — Chicken", "Wrap — Tavuk", "Wrap — Chicken", "Врап — пилешко"),
          price: "240 DEN",
          desc: mkI18n(
            "Copa mish pule, sallcë barbeque, kaçkavall, patate të skuqura",
            "Tavuk parçaları, BBQ sos, kaşar, patates",
            "Chicken pieces, BBQ sauce, kashkaval, fries",
            "Пилешки парчиња, BBQ сос, кашкавал, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Homemade Wrap — Prosciutto", "Wrap — Prosciutto", "Wrap — Prosciutto", "Врап — Prosciutto"),
          price: "250 DEN",
          desc: mkI18n(
            "Mish viçi i tymosur, majonez, kaçkavall, patate të skuqura",
            "Füme dana, mayonez, kaşar, patates",
            "Smoked beef, mayo, kashkaval, fries",
            "Чадено говедско, мајонез, кашкавал, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Homemade Wrap — Vegetarian", "Wrap — Vejetaryen", "Wrap — Vegetarian", "Врап — вегетаријански"),
          price: "200 DEN",
          desc: mkI18n(
            "Domate, speca, misër, këpurdha, fasule të kuqe, kaçkavall, patate të skuqura",
            "Domates, biber, mısır, mantar, kırmızı fasulye, kaşar, patates",
            "Tomato, peppers, corn, mushrooms, red beans, kashkaval, fries",
            "Домат, пиперки, пченка, печурки, црвен грав, кашкавал, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Homemade Wrap — Mexicana", "Wrap — Mexicana", "Wrap — Mexicana", "Врап — Mexicana"),
          price: "240 DEN",
          desc: mkI18n(
            "Mish të grirë, sallcë domate, chilli sos, fasule të kuqe, kaçkavall, patate të skuqura",
            "Kıyma, domates sos, chilli sos, kırmızı fasulye, kaşar, patates",
            "Minced meat, tomato sauce, chili sauce, red beans, kashkaval, fries",
            "Мелено месо, доматен сос, чили сос, црвен грав, кашкавал, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Homemade Wrap — Bermuda Triangle", "Wrap — Bermuda Triangle", "Wrap — Bermuda Triangle", "Врап — Bermuda Triangle"),
          price: "260 DEN",
          desc: mkI18n(
            "Mish viçi i tymosur, suxhuk viçi, mish pule i tymosur, majonez, kaçkavall, patate të skuqura",
            "Füme dana, dana sucuk, füme tavuk, mayonez, kaşar, patates",
            "Smoked beef, beef sucuk, smoked chicken, mayo, kashkaval, fries",
            "Чадено говедско, говедски суџук, чадено пилешко, мајонез, кашкавал, помфрит"
          )
        }),
        item({
          catKey: "sandwich-wrap",
          name: mkI18n("Homemade Wrap — Patate", "Wrap — Patates", "Wrap — Potato", "Врап — компир"),
          price: "200 DEN",
          desc: mkI18n("Patate, kaçkavall, patate të skuqura", "Patates, kaşar, patates", "Potato, kashkaval, fries", "Компир, кашкавал, помфрит")
        }),
      ]
    },

    // 06 — Pasta & Sallata
    {
      key: "pasta-sallata",
      icon: "🥗",
      title: mkI18n("PASTA • SALLATA", "Makarna • Salata", "Pasta • Salads", "Паста • Салати"),
      items: [
        // Pasta
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Bolognese", "Bolonez", "Bolognese", "Болоњезе"),
          price: "240 DEN",
          desc: mkI18n("Mish i grirë, salcë domatesh", "Kıyma, domates sos", "Minced meat, tomato sauce", "Мелено месо, доматен сос")
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Al Forno", "Al Forno", "Al Forno", "Ал Форно"),
          price: "240 DEN",
          desc: mkI18n(
            "Krem paste domate, mish pule, kërpudha të freskëta, cheddar, salcë domatesh",
            "Krem domates, tavuk, taze mantar, cheddar, domates sos",
            "Creamy tomato paste, chicken, fresh mushrooms, cheddar, tomato sauce",
            "Крем доматна паста, пилешко, свежи печурки, чедар, доматен сос"
          )
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Lazanja", "Lazanya", "Lasagna", "Лазања"),
          price: "260 DEN",
          desc: mkI18n("Mish i grirë, kackavall", "Kıyma, kaşar", "Minced meat, kashkaval", "Мелено месо, кашкавал")
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Mantija (20 min.)", "Mantı (20 dk.)", "Manti (20 min.)", "Манти (20 мин.)"),
          price: "150/300 DEN",
          desc: mkI18n(
            "Me mish, shërbyer me kos, me ose pa hudër, me salcë gjalpi",
            "Etli, yoğurt (sarımsaklı/sarımsaksız) ve tereyağ sos ile",
            "With meat, served with yogurt (with/without garlic) and butter sauce",
            "Со месо, со јогурт (со/без лук) и путер сос"
          )
        }),

        // Salads
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Manti’s Urban", "Mantis Urban", "Mantis Urban", "Mantis Urban"),
          price: "100/200 DEN",
          desc: mkI18n(
            "Thjerrëza, qepë, majdanoz, turshi, nenexhik, kopër, arra, salcë",
            "Mercimek, soğan, maydanoz, turşu, nane, dereotu, ceviz, sos",
            "Lentils, onion, parsley, pickles, mint, dill, walnuts, dressing",
            "Леќа, кромид, магдонос, туршија, нане, копар, ореви, сос"
          )
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Tuna", "Ton", "Tuna", "Туна"),
          price: "100/200 DEN",
          desc: mkI18n("Ton, marule, misër, ullinj të zi, qepë", "Ton, marul, mısır, siyah zeytin, soğan", "Tuna, lettuce, corn, black olives, onion", "Туна, марула, пченка, црни маслинки, кромид")
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Cesar", "Sezar", "Caesar", "Цезар"),
          price: "130/260 DEN",
          desc: mkI18n(
            "Zarzavate të përziera, mish pule, parmezani i grirë, domate chery, copa buke, salcë",
            "Karışık yeşillik, tavuk, rendelenmiş parmesan, cherry domates, kruton, sos",
            "Mixed greens, chicken, grated parmesan, cherry tomatoes, croutons, dressing",
            "Мешана салата, пилешко, рендан пармезан, чери домати, крутони, сос"
          )
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Sallatë Shope", "Şopska Salata", "Shopska Salad", "Шопска салата"),
          price: "90/180 DEN",
          desc: mkI18n("Domate, krastavec, djath", "Domates, salatalık, peynir", "Tomato, cucumber, cheese", "Домат, краставица, сирење")
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Sallatë Rukole", "Rokalı Salata", "Arugula Salad", "Салата со рукола"),
          price: "100/200 DEN",
          desc: mkI18n(
            "Rukola, misër, fruta të thata, domate thatë, parmezan i grirë",
            "Roka, mısır, kuruyemiş, kuru domates, rendelenmiş parmesan",
            "Arugula, corn, nuts, sun-dried tomato, grated parmesan",
            "Рукола, пченка, јаткасти, сушен домат, рендан пармезан"
          )
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Sallatë e Përzier", "Karışık Salata", "Mixed Salad", "Мешана салата"),
          price: "100/200 DEN",
          desc: mkI18n(
            "Zarzavate të përziera, misër, ullinj të zinj, krastavec, domate, qepë",
            "Karışık yeşillik, mısır, siyah zeytin, salatalık, domates, soğan",
            "Mixed greens, corn, black olives, cucumber, tomato, onion",
            "Мешана салата, пченка, црни маслинки, краставица, домат, кромид"
          )
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Sallatë Greke", "Yunan Salatası", "Greek Salad", "Грчка салата"),
          price: "100/200 DEN",
          desc: mkI18n("Gjath, domate, krastavec, specë, qepë", "Peynir, domates, salatalık, biber, soğan", "Cheese, tomato, cucumber, pepper, onion", "Сирење, домат, краставица, пиперка, кромид")
        }),
        item({
          catKey: "pasta-sallata",
          name: mkI18n("Biftek Sallatë", "Biftek Salata", "Steak Salad", "Салата со бифтек"),
          price: "200/370 DEN",
          desc: mkI18n(
            "Zarzavate të përziera, mish vici, parmezan i grirë, domate, copa buke, salcë",
            "Karışık yeşillik, dana eti, rendelenmiş parmesan, domates, kruton, sos",
            "Mixed greens, beef, grated parmesan, tomato, croutons, dressing",
            "Мешана салата, говедско, рендан пармезан, домат, крутони, сос"
          )
        }),
      ]
    },

    // 07 — Supa & Parahaje
    {
      key: "supa-parahaje",
      icon: "🍲",
      title: mkI18n("SUPA • PARAHAJE", "Çorba • Başlangıç", "Soup • Starters", "Супа • Предјадења"),
      items: [
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Supa (Viçi)", "Dana Çorbası", "Beef Soup", "Говедска супа"),
          price: "60/120 DEN"
        }),

        // Hot starters
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Kashkavall të skuqura (4 copë x 25gr)", "Kızarmış Kaşar (4 adet x 25gr)", "Fried Kashkaval (4 pcs x 25g)", "Пржен кашкавал (4 x 25г)"),
          price: "120 DEN"
        }),
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Zdenka të skuqura (4 copë x 20gr)", "Kızarmış Zdenka (4 adet x 20gr)", "Fried Zdenka (4 pcs x 20g)", "Пржена Зденка (4 x 20г)"),
          price: "80 DEN"
        }),
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Kungëlleshë të skuqura", "Kızarmış Kabak", "Fried Zucchini", "Пржени тиквички"),
          price: "100 DEN"
        }),
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Burek me djath dhe spinaq në furrë (4 copë)", "Fırında Peynirli-İspanaklı Börek (4 adet)", "Oven Burek w/ Cheese & Spinach (4 pcs)", "Бурек со сирење и спанаќ (4 парчиња)"),
          price: "100 DEN"
        }),
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Burek me djath dhe spinaq në furrë (6 copë)", "Fırında Peynirli-İspanaklı Börek (6 adet)", "Oven Burek w/ Cheese & Spinach (6 pcs)", "Бурек со сирење и спанаќ (6 парчиња)"),
          price: "120 DEN"
        }),
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Onion Ring’s", "Soğan Halkası", "Onion Rings", "Кромид прстени"),
          price: "60/120 DEN"
        }),
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Këpurdha në furrë me kashkavall", "Fırında Mantarlı Kaşar", "Oven Mushrooms w/ Kashkaval", "Печурки во рерна со кашкавал"),
          price: "120 DEN"
        }),

        // Cold starters
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Djath të bardhë (lope) 100gr", "Beyaz Peynir (inek) 100gr", "White Cheese (cow) 100g", "Бело сирење (кравјо) 100г"),
          price: "120 DEN"
        }),
        item({
          catKey: "supa-parahaje",
          name: mkI18n("Ajvar shtëpie 200gr", "Ev Yapımı Ajvar 200gr", "Homemade Ajvar 200g", "Домашен ајвар 200г"),
          price: "150 DEN"
        }),
      ]
    },

    // 08 — Produkte të Viçit (Beef)
    {
      key: "beef",
      icon: "🥩",
      title: mkI18n("PRODUKTE TË VIÇIT • NË ZGARE", "Dana Ürünleri • Izgara", "Beef • Grill", "Говедско • Скара"),
      items: [
        item({
          catKey: "beef",
          name: mkI18n("Fileto Viçi (220gr) + perime + patate", "Dana Fileto (220gr) + sebze + patates", "Beef Fillet (220g) + veggies + fries", "Говедско филе (220г) + зеленчук + помфрит"),
          price: "660 DEN"
        }),
        item({
          catKey: "beef",
          name: mkI18n("Biftek Viçi (250gr) + perime + patate", "Dana Biftek (250gr) + sebze + patates", "Beef Steak (250g) + veggies + fries", "Говедски бифтек (250г) + зеленчук + помфрит"),
          price: "1250 DEN"
        }),
        item({
          catKey: "beef",
          name: mkI18n("Sote Viçi (150gr)", "Dana Sote (150gr)", "Beef Saute (150g)", "Говедско соте (150г)"),
          price: "550 DEN",
          desc: mkI18n(
            "Këpurdha, karot, spec, qepë, krem të bardh, sos domate, kashkavall",
            "Mantar, havuç, biber, soğan, beyaz krema, domates sos, kaşar",
            "Mushrooms, carrot, pepper, onion, white cream, tomato sauce, kashkaval",
            "Печурки, морков, пиперка, кромид, бел крем, доматен сос, кашкавал"
          )
        }),
        item({
          catKey: "beef",
          name: mkI18n("Brinjë viçi (300gr) + perime + patate", "Dana Kaburga (300gr) + sebze + patates", "Beef Ribs (300g) + veggies + fries", "Говедски ребра (300г) + зеленчук + помфрит"),
          price: "1100 DEN"
        }),
        item({
          catKey: "beef",
          name: mkI18n("Kotlet viçi (240gr) + perime + patate", "Dana Kotlet (240gr) + sebze + patates", "Beef Cutlet (240g) + veggies + fries", "Говедски котлет (240г) + зеленчук + помфрит"),
          price: "680 DEN"
        }),
        item({
          catKey: "beef",
          name: mkI18n("Mish viçi në furrë (250gr) + perime + patate", "Fırında Dana (250gr) + sebze + patates", "Oven Beef (250g) + veggies + fries", "Говедско во рерна (250г) + зеленчук + помфрит"),
          price: "560 DEN"
        }),

        item({
          catKey: "beef",
          name: mkI18n("Pleskavic Sharri (220gr) me kashkavall + perime + patate", "Şarri Pleskavica (220gr) kaşarlı + sebze + patates", "Sharri Pleskavica (220g) w/ kashkaval + veggies + fries", "Шарри плескавица (220г) со кашкавал + зеленчук + помфрит"),
          price: "300 DEN"
        }),
        item({
          catKey: "beef",
          name: mkI18n("Qofte shtëpie (300gr) + perime + patate", "Ev Köftesi (300gr) + sebze + patates", "Homemade Meatballs (300g) + veggies + fries", "Домашни ќофтиња (300г) + зеленчук + помфрит"),
          price: "300 DEN"
        }),
        item({
          catKey: "beef",
          name: mkI18n("Suxhuk shtëpie (220gr) + perime + patate", "Ev Sucuğu (220gr) + sebze + patates", "Homemade Suxuk (220g) + veggies + fries", "Домашен суџук (220г) + зеленчук + помфрит"),
          price: "300 DEN"
        }),
        item({
          catKey: "beef",
          name: mkI18n("Extra — Sos këpurdhash", "Ekstra — Mantarlı Sos", "Extra — Mushroom Sauce", "Екстра — сос од печурки"),
          price: "40 DEN"
        }),
      ]
    },

    // 09 — Produkte të Pulës + Hamburger
    {
      key: "chicken-burger",
      icon: "🍗",
      title: mkI18n("PRODUKTE TË PULËS • HAMBURGER", "Tavuk Ürünleri • Burger", "Chicken • Burgers", "Пилешко • Бургери"),
      items: [
        item({
          catKey: "chicken-burger",
          name: mkI18n("Fileto Pule (220gr) + perime + patate", "Tavuk Fileto (220gr) + sebze + patates", "Chicken Fillet (220g) + veggies + fries", "Пилешко филе (220г) + зеленчук + помфрит"),
          price: "280 DEN",
          desc: mkI18n("Stek në zgarë", "Izgarada steak", "Grilled steak", "Стек на скара")
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n("Shish Pule (220gr) + perime + patate", "Tavuk Şiş (220gr) + sebze + patates", "Chicken Skewer (220g) + veggies + fries", "Пилешки ражничи (220г) + зеленчук + помфрит"),
          price: "300 DEN"
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n("Sote Pule (150gr)", "Tavuk Sote (150gr)", "Chicken Saute (150g)", "Пилешко соте (150г)"),
          price: "250 DEN",
          desc: mkI18n(
            "Këpurdha, karot, spec, qepë, krem të bardh, sos domate, kashkavall",
            "Mantar, havuç, biber, soğan, beyaz krema, domates sos, kaşar",
            "Mushrooms, carrot, pepper, onion, white cream, tomato sauce, kashkaval",
            "Печурки, морков, пиперка, кромид, бел крем, доматен сос, кашкавал"
          )
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n("Chicken Fingers (220gr) + patate + 2 sos", "Chicken Fingers (220gr) + patates + 2 sos", "Chicken Fingers (220g) + fries + 2 sauces", "Chicken Fingers (220г) + помфрит + 2 соса"),
          price: "200 DEN"
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n("Chicken Wings (8 copë) + patate + 2 sos", "Chicken Wings (8 adet) + patates + 2 sos", "Chicken Wings (8 pcs) + fries + 2 sauces", "Пилешки крилца (8) + помфрит + 2 соса"),
          price: "280 DEN"
        }),

        // Burgers
        item({
          catKey: "chicken-burger",
          name: mkI18n("Burger Klasik", "Klasik Burger", "Classic Burger", "Класичен бургер"),
          price: "200 DEN",
          desc: mkI18n(
            "Pleskavic (100gr), marule, qepë, domate, kornishon, kashkavall, patate të skuqura, sos",
            "Pleskavica (100gr), marul, soğan, domates, kornişon, kaşar, patates, sos",
            "Pleskavica (100g), lettuce, onion, tomato, pickles, kashkaval, fries, sauce",
            "Плескавица (100г), марула, кромид, домат, кисели краставички, кашкавал, помфрит, сос"
          )
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n("Chicken Burger", "Tavuk Burger", "Chicken Burger", "Пилешки бургер"),
          price: "180 DEN",
          desc: mkI18n(
            "Stek në zgarë (100gr), marule, qepë, domate, kornishon, kashkavall, patate të skuqura, sos",
            "Izgara steak (100gr), marul, soğan, domates, kornişon, kaşar, patates, sos",
            "Grilled steak (100g), lettuce, onion, tomato, pickles, kashkaval, fries, sauce",
            "Стек на скара (100г), марула, кромид, домат, кисели краставички, кашкавал, помфрит, сос"
          )
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n("Mantis Nuclear Burger", "Mantis Nuclear Burger", "Mantis Nuclear Burger", "Mantis Nuclear Burger"),
          price: "320 DEN",
          desc: mkI18n(
            "Pleskavic (100gr), mish sëzdërm (100gr), marule, qepë, domate, kornishon, kashkavall, mish të thatë, patate të skuqura, sos",
            "Pleskavica (100gr) + süzdürm et (100gr) + marul, soğan, domates, kornişon, kaşar, kurutulmuş et, patates, sos",
            "Pleskavica (100g) + beef suet meat (100g) + lettuce, onion, tomato, pickles, kashkaval, dried meat, fries, sauce",
            "Плескавица (100г) + суздерм месо (100г) + марула, кромид, домат, кисели краставички, кашкавал, сушено месо, помфрит, сос"
          )
        }),

        // Extras
        item({
          catKey: "chicken-burger",
          name: mkI18n("Extra — Sos", "Ekstra — Sos", "Extra — Sauce", "Екстра — сос"),
          price: "20 DEN"
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n("Extra — Sos këpurdhash", "Ekstra — Mantarlı Sos", "Extra — Mushroom Sauce", "Екстра — сос од печурки"),
          price: "40 DEN"
        }),
        item({
          catKey: "chicken-burger",
          name: mkI18n(
            "Extra — Kaçkavall / vezë / djathë / kërpudha / perime të fërguara / mish të thatë",
            "Ekstra — Kaşar / yumurta / peynir / mantar / kızarmış sebze / kurutulmuş et",
            "Extra — Kashkaval / egg / cheese / mushrooms / fried veggies / dried meat",
            "Екстра — кашкавал / јајце / сирење / печурки / пржен зеленчук / сушено месо"
          ),
          price: "30 DEN"
        }),
      ]
    },

    // 10 — Desserts & Juices
    {
      key: "desserts-juices",
      icon: "🍰",
      title: mkI18n("ËMBËLSİRA • LËNGJE", "Tatlı • Meyve Suyu", "Desserts • Juices", "Десерти • Сокови"),
      items: [
        // Desserts
        item({
          catKey: "desserts-juices",
          name: mkI18n("Mantis Chocolate", "Mantis Chocolate", "Mantis Chocolate", "Mantis Chocolate"),
          price: "120 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Sutliaç në furrë", "Fırın Sütlaç", "Baked Rice Pudding", "Оризов пудинг (печен)"),
          price: "70 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Kajmaçin", "Kaymaçin", "Kajmacin", "Кајмачин"),
          price: "70 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Ashure", "Aşure", "Ashure", "Ашуре"),
          price: "80 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Palaçinka", "Pankek / Krep", "Pancake / Crepe", "Палачинка"),
          price: "150 DEN",
          desc: mkI18n("Nutella, Dredhëza, Banana", "Nutella, çilek, muz", "Nutella, strawberry, banana", "Нутела, јагода, банана")
        }),

        // Juices (Lëngje)
        item({
          catKey: "desserts-juices",
          name: mkI18n("Vishne", "Vişne", "Sour Cherry", "Вишна"),
          price: "80 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Mollë", "Elma", "Apple", "Јаболко"),
          price: "80 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Pjeshkë", "Şeftali", "Peach", "Праска"),
          price: "80 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Portokall", "Portakal", "Orange", "Портокал"),
          price: "80 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Shegë", "Nar", "Pomegranate", "Калинка (нар)"),
          price: "80 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Multi Vitamin", "Multi Vitamin", "Multi Vitamin", "Мултивитамин"),
          price: "80 DEN"
        }),

        // Fresh juice
        item({
          catKey: "desserts-juices",
          name: mkI18n("Fresh Juice — Dy përzierje të frutave", "Fresh Juice — 2 meyve karışımı", "Fresh Juice — 2 fruit mix", "Fresh Juice — 2 овошја"),
          price: "120 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Fresh Juice — Tre e më shumë përzierje", "Fresh Juice — 3+ meyve karışımı", "Fresh Juice — 3+ fruit mix", "Fresh Juice — 3+ овошја"),
          price: "130 DEN"
        }),

        // Smoothie
        item({
          catKey: "desserts-juices",
          name: mkI18n("Smoothie — Dy përzierje të frutave", "Smoothie — 2 meyve karışımı", "Smoothie — 2 fruit mix", "Смути — 2 овошја"),
          price: "150 DEN"
        }),
        item({
          catKey: "desserts-juices",
          name: mkI18n("Smoothie — Tre e më shumë përzierje", "Smoothie — 3+ meyve karışımı", "Smoothie — 3+ fruit mix", "Смути — 3+ овошја"),
          price: "150 DEN"
        }),
      ]
    },

    // 11 — Drinks (cold & hot)
    {
      key: "drinks",
      icon: "🥤",
      title: mkI18n("PİJE TË FTOHTA • PİJE TË NXEHTA", "Soğuk İçecek • Sıcak İçecek", "Cold Drinks • Hot Drinks", "Ладни • Топли пијалоци"),
      items: [
        // Cold drinks
        item({ catKey:"drinks", name: mkI18n("Coca Cola", "Coca Cola", "Coca Cola", "Coca Cola"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Fanta", "Fanta", "Fanta", "Fanta"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Coca Cola Zero", "Coca Cola Zero", "Coca Cola Zero", "Coca Cola Zero"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Sprite", "Sprite", "Sprite", "Sprite"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Schweppes Lemon", "Schweppes Limon", "Schweppes Lemon", "Schweppes Lemon"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Schweppes Tangerin", "Schweppes Mandalina", "Schweppes Tangerine", "Schweppes Tangerine"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Strumka", "Strumka", "Strumka", "Strumka"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Ice Tea Limon", "Ice Tea Limon", "Ice Tea Lemon", "Ice Tea Lemon"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Ice Tea Pjeshkë", "Ice Tea Şeftali", "Ice Tea Peach", "Ice Tea Peach"), price:"80 DEN" }),

        item({ catKey:"drinks", name: mkI18n("Laçin Mandarina", "Laçin Mandalina", "Laçin Mandarin", "Laçin Mandarin"), price:"60 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Laçin Malinë - Rrush", "Laçin Ahududu - Üzüm", "Laçin Raspberry - Grape", "Laçin Raspberry - Grape"), price:"60 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Laçin Limon", "Laçin Limon", "Laçin Lemon", "Laçin Lemon"), price:"60 DEN" }),

        item({ catKey:"drinks", name: mkI18n("Ujë", "Su", "Water", "Вода"), price:"50/100 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Ujë i thartë", "Maden Suyu", "Sparkling Water", "Газирана вода"), price:"60/110 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Ajran", "Ayran", "Ayran", "Ајран"), price:"60 DEN" }),

        item({ catKey:"drinks", name: mkI18n("Ice Coffe", "Ice Coffee", "Iced Coffee", "Ледено кафе"), price:"80 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Neskafe Ice", "Nescafe Ice", "Nescafe Ice", "Nescafe Ice"), price:"110 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Limonadë shtëpije", "Ev Limonata", "Homemade Lemonade", "Домашна лимонада"), price:"60/90 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Borovnice", "Yaban Mersini", "Blueberry", "Боровинка"), price:"50/80 DEN" }),

        // Hot drinks
        item({ catKey:"drinks", name: mkI18n("Espresso (08-10H)", "Espresso (08-10)", "Espresso (08-10)", "Еспресо (08-10)"), price:"40 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Espresso (10-24H)", "Espresso (10-24)", "Espresso (10-24)", "Еспресо (10-24)"), price:"60 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Macchiato", "Macchiato", "Macchiato", "Макијато"), price:"60/70 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Cappuccino", "Cappuccino", "Cappuccino", "Капучино"), price:"60 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Kafe Turke", "Türk Kahvesi", "Turkish Coffee", "Турско кафе"), price:"60 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Caj Filter", "Filtre Çay", "Filter Tea", "Филтер чај"), price:"60 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Caj Shtëpie", "Ev Çayı", "House Tea", "Домашен чај"), price:"30/50 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Cokollade e Nxehte", "Sıcak Çikolata", "Hot Chocolate", "Топло чоколадо"), price:"100 DEN" }),
        item({ catKey:"drinks", name: mkI18n("Neskafe e Nxehte", "Sıcak Nescafe", "Hot Nescafe", "Топол Нескафе"), price:"80 DEN" }),
      ]
    }
  ];

  // Final normalize: ensure all objects have all languages
  for (const c of MENU) {
    c.title = c.title || {};
    for (const L of LANGS) c.title[L] = c.title[L] || pick(c.title, "sq") || pick(c.title, "tr") || "";
    c.items = (c.items || []).map((it) => {
      it.name = it.name || {};
      it.desc = it.desc || {};
      for (const L of LANGS) {
        it.name[L] = it.name[L] || pick(it.name, "sq") || pick(it.name, "tr") || "";
        it.desc[L] = it.desc[L] || ""; // empty desc allowed
      }
      it.price = it.price || "";
      it.img = it.img || "";
      return it;
    });
  }

  // Export
  window.MANTIS_MENU = MENU;
})();