import { defineStore } from 'pinia'

export const useTourStore = defineStore('tours', {
  state: () => ({
    tours: [
      {
        id: 1,
        title: 'Dubay mo\'jizalari',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop'
        ],
        location: 'Birlashgan Arab Amirliklari',
        days: '5 kun / 4 kecha',
        price: '$499',
        date: 'Har hafta',
        description: 'Dubayning eng mashhur joylari, Burj Xalifa, Jumeirah plyaji va ajoyib cho\'l safarisidan iborat to\'liq paket.',
        includes: ['Aviachipta (Toshkent-Dubay-Toshkent)', '4 yulduzli mehmonxona', 'Nonushta', 'Aeroportdan transfer', 'Viza yordami'],
        excludes: ['Tushlik va kechki ovqat', 'Shaxsiy xarajatlar', 'Pullik ekskursiyalar'],
        itinerary: [
          { day: 1, title: 'Kelish va joylashish', desc: 'Dubay aeroportida kutib olish, mehmonxonaga transfer. Kechki payt bo\'sh vaqt.' },
          { day: 2, title: 'Dubay shahar ekskursiyasi', desc: 'Burj Xalifa, Dubai Mall va musiqali favvoralar tomoshasi.' },
          { day: 3, title: 'Cho\'l safarisi', desc: 'Jip safari, tuya minish, milliy raqslar va barbekyu kechki ovqat.' },
          { day: 4, title: 'Marina va JBR', desc: 'Kema sayri va plyajda dam olish. Erkin xaridlar.' },
          { day: 5, title: 'Toshkentga qaytish', desc: 'Mehmonxonadan chiqish va aeroportga transfer.' }
        ]
      },
      {
        id: 2,
        title: 'Antaliya dam olishi',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop', // Maldives/Beach generic
        gallery: [
          'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1000&auto=format&fit=crop'
        ],
        location: 'Turkiya',
        days: '7 kun / 6 kecha',
        price: '$650',
        date: 'Iyun - Avgust',
        description: 'O\'rta dengiz sohillarida unutilmas hordiq. Barcha qulayliklarga ega 5 yulduzli mehmonxonalar.',
        includes: ['Aviachipta', '5* UAI Mehmonxona', 'Barcha ovqatlanish', 'Transfer', 'Sug\'urta'],
        excludes: ['Shaxsiy xarajatlar', 'Qo\'shimcha turlar'],
        itinerary: [
          { day: 1, title: 'Antaliyaga kelish', desc: 'Kutib olish, mehmonxonaga joylashish va plyaj bilan tanishish.' },
          { day: '2-6', title: 'Erkin dam olish', desc: 'Dengiz sohilida dam olish, mehmonxona xizmatlaridan foydalanish, ko\'ngilochar dasturlar.' },
          { day: 7, title: 'Qaytish', desc: 'Aeroportga transfer va uchish.' }
        ]
      },
      {
        id: 3,
        title: 'Parij romantikasi',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2000&auto=format&fit=crop', // Eiffel Tower
        gallery: [
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000&auto=format&fit=crop',
          'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
        ],
        location: 'Fransiya',
        days: '6 kun / 5 kecha',
        price: '$1200',
        date: 'Kuz mavsumi',
        description: 'Eyfel minorasi, Luvr va Sena daryosi. Sevishganlar uchun eng yaxshi taklif.',
        includes: ['Aviachipta', 'Markazdan mehmonxona', 'Ekskursiya', 'Shengen viza ko\'magi'],
        excludes: ['Tushlik va kechki ovqat', 'Muzey chiptalari'],
        itinerary: [
          { day: 1, title: 'Parijga xush kelibsiz', desc: 'Joylashish va shahar bo\'ylab erkin sayr.' },
          { day: 2, title: 'Eyfel va Sena', desc: 'Minoraga chiqish va daryoda kema sayri.' },
          { day: 3, title: 'Luvr va San\'at', desc: 'Luvr muzeyiga tashrif.' },
          { day: '4-5', title: 'Erkin kunlar', desc: 'Xaridlar, Versal saroyiga ixtiyoriy sayohat.' },
          { day: 6, title: 'Qaytish', desc: 'Aeroportga transfer.' }
        ]
      },
      {
        id: 4,
        title: 'Misr ehromlari',
        image: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop'
        ],
        location: 'Misr',
        days: '6 kun / 5 kecha',
        price: '$550',
        date: 'Oktyabr - Aprel',
        description: 'Qadimiy tarix va Qizil dengiz sohilidagi ajoyib dam olish.',
        includes: ['Aviachipta', '5 yulduzli mehmonxona', 'Hammasi kiritilgan', 'Transfer', 'Sharm el-Shayx sayri'],
        excludes: ['Qohira ekskursiyasi (ixtiyoriy)', 'Viza to\'lovi'],
        itinerary: [
          { day: 1, title: 'Sharm el-Shayxga kelish', desc: 'Mehmonxonaga joylashish.' },
          { day: 2, title: 'Dengiz safarisi', desc: 'Qizil dengizda yaxtada sayr va dayving.' },
          { day: 3, title: 'Erkin kunlar', desc: 'Qohiraga ixtiyoriy ekskursiya (Piramedalar).' },
          { day: 4, title: 'Cho\'l safarisi', desc: 'Kvadrotsikllarda safar va badaviylar qishlog\'i.' },
          { day: 5, title: 'Qaytish', desc: 'Uchish.' }
        ]
      },
      {
        id: 5,
        title: 'Makka va Madina ziyori',
        image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://upload.wikimedia.org/wikipedia/commons/3/3f/Great_Mosque_of_Mecca1.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Masjid_al-Haram_and_Kaaba.jpg/1000px-Masjid_al-Haram_and_Kaaba.jpg'
        ],
        location: 'Saudiya Arabistoni',
        days: '14 kun / 13 kecha',
        price: '$999',
        date: 'Har oy',
        description: 'Umra ziyorati uchun to\'liq paket. Madinada 3 kun, Makkada 10 kun.',
        includes: ['Aviachipta', 'Mehmonxonalar (50-100m)', 'Ikki mahal ovqat', 'Viza', 'Ellikboshi xizmati'],
        excludes: ['Qo\'shimcha shaxsiy xarajatlar'],
        itinerary: [
          { day: 1, title: 'Madinaga kelish', desc: 'Mehmonxonaga joylashish, Masjid an-Nabaviyni ziyorat qilish.' },
          { day: '2-3', title: 'Madina ziyoratlari', desc: 'Quba, Qiblatayn masjidlari, Uhud tog\'i.' },
          { day: 4, title: 'Makkaga yo\'l', desc: 'Ehhromga kirish, Makkaga yetib borish va Umra amalini bajarish.' },
          { day: '5-13', title: 'Makka', desc: 'Makka ziyoratgohlari: Hiro g\'ori, Savr tog\'i, Arafot, Muzdalifa va Mino.' },
          { day: 14, title: 'Qaytish', desc: 'Jidda aeroportidan Toshkentga parvoz.' }
        ]
      },
      {
        id: 6,
        title: 'Istanbul sayohati',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Istanbul_Hagia_Sophia.jpg/1000px-Istanbul_Hagia_Sophia.jpg'
        ],
        location: 'Turkiya',
        days: '5 kun / 4 kecha',
        price: '$450',
        date: 'Har hafta',
        description: 'Ikki qit\'ani birlashtirgan tarixiy shahar bo\'ylab ajoyib sayohat.',
        includes: ['Aviachipta', '4 yulduzli mehmonxona', 'Nonushta', 'Transfer', 'Shahar ekskursiyasi'],
        excludes: ['Muzey chiptalari', 'Bosfor bo\'g\'ozida kema sayri'],
        itinerary: [
          { day: 1, title: 'Kelish', desc: 'Istanbulga yetib kelish, mehmonxonaga joylashish.' },
          { day: 2, title: 'Tarixiy Istanbul', desc: 'Aya Sofiya, Moviy masjid, Topqapi saroyi.' },
          { day: 3, title: 'Bosfor va bozorlar', desc: 'Bosfor bo\'g\'ozida sayr (qo\'shimcha), Kapali Charshi.' },
          { day: 4, title: 'Erkin kun', desc: 'Xaridlar yoki Osiyo qismiga o\'tish.' },
          { day: 5, title: 'Qaytish', desc: 'Aeroportga transfer.' }
        ]
      },
      {
        id: 7,
        title: 'Tailand sarguzashtlari',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1000&auto=format&fit=crop',
          'https://upload.wikimedia.org/wikipedia/commons/0/02/Bangkok_Montage_2024_2.jpg'
        ],
        location: 'Tailand',
        days: '8 kun / 7 kecha',
        price: '$850',
        date: 'Qish mavsumi',
        description: 'Egzotik tabiat, fillar va budda ibodatxonalari.',
        includes: ['Aviachipta', 'Mehmonxona', 'Nonushta', 'Transfer'],
        excludes: ['Viza to\'lovi'],
        itinerary: [
          { day: 1, title: 'Pxuketga kelish', desc: 'Mehmonxonaga joylashish.' },
          { day: '2-7', title: 'Ekskursiyalar', desc: 'Orollarga sayohat, fillar parki.' },
          { day: 8, title: 'Qaytish', desc: 'Aeroportga transfer.' }
        ]
      },
      {
        id: 8,
        title: 'Kapadokiya osmoni',
        image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=1000&auto=format&fit=crop',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cappadocia_Balloon_Flights.jpg/1000px-Cappadocia_Balloon_Flights.jpg'
        ],
        location: 'Turkiya',
        days: '4 kun / 3 kecha',
        price: '$380',
        date: 'Mavsumiy',
        description: 'G\'orlardagi mehmonxonalar va havo sharlarida unutilmas parvoz.',
        includes: ['Ichki parvoz', 'G\'or mehmonxona', 'Nonushta'],
        excludes: ['Havo sharida uchish'],
        itinerary: [
          { day: 1, title: 'Kelish', desc: 'Kayseri aeroportidan transfer.' },
          { day: 2, title: 'Qizil tur', desc: 'Uchhisar qal\'asi.' },
          { day: 3, title: 'Havo shari', desc: 'Sahar tongida havo sharlarida uchish.' },
          { day: 4, title: 'Qaytish', desc: 'Aeroportga transfer.' }
        ]
      },
      {
        id: 9,
        title: 'Singapur va Malayziya',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1000&auto=format&fit=crop'
        ],
        location: 'Janubi-sharqiy Osiyo',
        days: '8 kun / 7 kecha',
        price: '$1100',
        date: 'Har oy',
        description: 'Osiyoning eng zamonaviy shaharlari bo\'ylab qiziqarli sayohat. Egizak minoralar va Marina Bay Sands.',
        includes: ['Aviachiptalar', '4* Mehmonxonalar', 'Nonushta', 'Transfer', 'Shahar ekskursiyalari'],
        excludes: ['Viza to\'lovlari (agar kerak bo\'lsa)', 'Shaxsiy xarajatlar'],
        itinerary: [
          { day: 1, title: 'Kuala Lumpurga kelish', desc: 'Aeroportda kutib olish va joylashish.' },
          { day: 2, title: 'Batu g\'orlari', desc: 'Batu g\'orlari va egizak minoralar tashrifi.' },
          { day: 3, title: 'Singapurga yo\'l', desc: 'Avtobusda Singapurga o\'tish va joylashish.' },
          { day: 4, title: 'Singapur mo\'jizalari', desc: 'Gardens by the Bay va Marina Bay.' },
          { day: '5-7', title: 'Erkin kunlar', desc: 'Sentosa oroli va Universal Studios (ixtiyoriy).' },
          { day: 8, title: 'Qaytish', desc: 'Singapur aeroportidan parvoz.' }
        ]
      },
      {
        id: 10,
        title: 'Gruziya sarguzashtlari',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg',
        gallery: [
          'https://upload.wikimedia.org/wikipedia/commons/4/45/Tbilisi_IMG_8846_1920.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/4/4c/Gergeti_Trinity_Church_09.23.jpg'
        ],
        location: 'Gruziya',
        days: '6 kun / 5 kecha',
        price: '$450',
        date: 'Bahor va Kuz',
        description: 'Kavkaz tog\'lari, qadimiy cherkovlar va mazali taomlar diyori - Tbilisi va Kazbegi.',
        includes: ['Aviachipta', 'Mehmonxona', 'Nonushta', 'Gid xizmati', 'Transfer'],
        excludes: ['Tushlik va kechki ovqat', 'Shaxsiy xarajatlar'],
        itinerary: [
          { day: 1, title: 'Tbilisiga kelish', desc: 'Kutib olish, mehmonxonaga joylashish.' },
          { day: 2, title: 'Tbilisi shahar sayri', desc: 'Eski shahar, Narikala qal\'asi va oltingugurtli hammomlar.' },
          { day: 3, title: 'Kazbegi safari', desc: 'Kavkaz tog\'lari manzaralari va Gergeti cherkovi.' },
          { day: 4, title: 'Mtsxeta', desc: 'Qadimiy poytaxt Mtsxetaga ekskursiya.' },
          { day: 5, title: 'Erkin kun', desc: 'Suvenirlar xaridi va shahar bo\'ylab erkin sayr.' },
          { day: 6, title: 'Qaytish', desc: 'Aeroportga transfer.' }
        ]
      },
      {
        id: 11,
        title: 'Boku go\'zalligi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Baku_Montage.jpg',
        gallery: [
          'https://upload.wikimedia.org/wikipedia/en/0/08/Flame_towers_baku.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/f/fc/Maiden_tower_IMG_8521.jpg'
        ],
        location: 'Ozarbayjon',
        days: '4 kun / 3 kecha',
        price: '$350',
        date: 'Har oy',
        description: 'Olovlar yurti Ozarbayjon poytaxti Boku bo\'ylab ajoyib dam olish.',
        includes: ['Aviachipta', '3-4* Mehmonxona', 'Nonushta', 'Transfer'],
        excludes: ['Qo\'shimcha ekskursiyalar'],
        itinerary: [
          { day: 1, title: 'Bokuga kelish', desc: 'Kutib olish va mehmonxonaga joylashish.' },
          { day: 2, title: 'Eski shahar', desc: 'Icherisheher, Qiz qal\'asi va Shirvonshohlar saroyi.' },
          { day: 3, title: 'Zamonaviy Boku', desc: 'Olovli minoralar, Haydar Aliyev markazi va bulvar.' },
          { day: 4, title: 'Qaytish', desc: 'Aeroportga transfer.' }
        ]
      },
      {
        id: 12,
        title: 'Italiya va Shveysariya',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1000&auto=format&fit=crop'
        ],
        location: 'Yevropa',
        days: '9 kun / 8 kecha',
        price: '$1800',
        date: 'Yoz mavsumi',
        description: 'Rim, Venetsiya, Milan va Alp tog\'lari bo\'ylab unutilmas Yevropa turnesi.',
        includes: ['Aviachiptalar', 'Mehmonxonalar', 'Nonushta', 'Poyezd chiptalari', 'Viza ko\'magi'],
        excludes: ['Tushlik va kechki ovqat', 'Shaxsiy xarajatlar'],
        itinerary: [
          { day: 1, title: 'Rimga kelish', desc: 'Joylashish va kechki Rim sayri.' },
          { day: 2, title: 'Tarixiy Rim', desc: 'Kolizey va Vatikan tashrifi.' },
          { day: 3, title: 'Florensiya', desc: 'Tezyurar poyezdda Florensiyaga o\'tish.' },
          { day: 4, title: 'Venetsiya romantikasi', desc: 'Kanallar bo\'ylab gondolada sayr.' },
          { day: 5, title: 'Milan', desc: 'Moda poytaxtida xaridlar va Duomo sobori.' },
          { day: '6-8', title: 'Shveysariya Alp tog\'lari', desc: 'Lyutsern va Syurixga poezdda sayohat, tog\' manzaralari.' },
          { day: 9, title: 'Qaytish', desc: 'Syurixdan uchish.' }
        ]
      }
    ]
  }),
  getters: {
    getTourById: (state) => (id) => {
      return state.tours.find(t => t.id === Number(id))
    }
  }
})
