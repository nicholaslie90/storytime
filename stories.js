// 180 stories for 0-12 months: short sentences, sounds, repetition.
// 90 bedtime (no `tm`) and 90 morning (`tm: "am"`), listed bedtime first.
// Stories without a `src` are originals; the rest are retold from public-domain
// sources (Mother Goose, Aesop, Andersen, Grimm, Potter, folk tales) — see `src`.
//
// t   = title
// sc  = scene: dawn | day | night | rain | snow | water | garden (picks the
//       backdrop, the particles that float past, and how the hero moves)
// tm  = "am" for a morning story; leave it out for a bedtime one
// e   = [hero, friend, friend, friend, friend] emoji — 3 to 5, hero first
// src = public-domain source, shown as a credit line (optional)
// en / id = English / Indonesian, same number of lines
// v   = [[word, arti]] vocabulary, each word must sit inside one line of `en`
//
// Day of the year picks the story within its half: (dayOfYear - 1) % 90
const STORIES = [
{
  t: "Good Morning, Sun",
  sc: "day",
  e: ["☀️","🐦","🌼","🦋","🌱"],
  en: "The night is over now. Look at the sky.\nThe dark goes away. Pink and gold come in.\nUp comes the sun. Up, up, up it climbs.\nGood morning, sun! You are warm on my cheek.\nThe birds in the tree wake up together.\nTweet, tweet, tweet. Good morning, little birds.\nThe flowers open their faces. Slow, slow, slow.\nGood morning, flowers! You slept all night too.\nThe grass is wet. Drip, drip. Cold toes!\nAnd now you wake up in your bed.\nTwo arms up high. One big yawn. Aaah.\nGood morning, baby. Hello, new day. Hello, hello, hello.",
  id: "Malam sudah selesai. Lihat ke langit.\nGelapnya pergi. Merah muda dan emas datang.\nMatahari terbit. Naik, naik, naik ia memanjat.\nSelamat pagi, matahari! Kamu hangat di pipiku.\nBurung-burung di pohon bangun bersama.\nCuit, cuit, cuit. Selamat pagi, burung kecil.\nBunga-bunga membuka wajahnya. Perlahan, perlahan, perlahan.\nSelamat pagi, bunga! Kamu juga tidur sepanjang malam.\nRumputnya basah. Tes, tes. Kaki jadi dingin!\nDan sekarang kamu bangun di tempat tidurmu.\nDua tangan ke atas. Satu kuapan besar. Aaah.\nSelamat pagi, sayang. Halo, hari baru. Halo, halo, halo.",
  v: [["wake up", "bangun"], ["yawn", "menguap"], ["flowers", "bunga-bunga"], ["cheek", "pipi"]]
},
{
  t: "The Sleepy Cat",
  sc: "day",
  e: ["🐱","💤","🧶","🐟"],
  en: "A little cat sits in a warm spot of sun.\nHer fur is soft. Soft, soft, soft fur.\nStroke her back. Gentle hands. Very gentle.\nShe closes one eye. Then the other eye.\nPurr, purr, purr, says the happy cat.\nHer tail goes swish. Swish, swish, swish.\nShe tucks her nose under her paw.\nHer whiskers move a little. Twitch, twitch.\nNow the cat is dreaming of fish.\nShhh. Quiet, quiet. Do not wake her.\nThe sun moves along the floor. The cat sleeps on.\nSleep well, little cat. Sweet dreams.",
  id: "Seekor kucing kecil duduk di tempat yang hangat kena matahari.\nBulunya lembut. Bulu yang lembut, lembut, lembut.\nUsap punggungnya. Tangan yang lembut. Sangat lembut.\nIa memejamkan satu mata. Lalu mata yang lain.\nPrrr, prrr, prrr, dengkur si kucing yang senang.\nEkornya bergoyang. Goyang, goyang, goyang.\nIa menyelipkan hidungnya di bawah kakinya.\nKumisnya bergerak sedikit. Kedut, kedut.\nSekarang kucing itu bermimpi tentang ikan.\nSsst. Tenang, tenang. Jangan bangunkan dia.\nMatahari bergeser di lantai. Kucing tetap tidur.\nTidur yang nyaman, kucing kecil. Mimpi indah.",
  v: [["fur", "bulu hewan"], ["purr", "dengkuran kucing saat senang"], ["swish", "bergoyang melambai"], ["paw", "kaki hewan berbantalan"], ["whiskers", "kumis hewan"]]
},
{
  t: "Splash in the Bath",
  sc: "water",
  e: ["🛁","🦆","🫧","🧼"],
  en: "Warm water in the tub. Just right.\nIn go your toes. One foot. Splash!\nIn go your hands. Splash, splash, splash!\nThe yellow duck floats by. Quack, quack.\nPush the duck away. Off she goes. Bob, bob.\nBubbles on your tummy. Pop, pop, pop.\nSoap on your arms. Slippery, slippery baby!\nRub, rub, rub. Now you are clean.\nPour the water out of the cup. Glug, glug.\nUp you come, out of the warm water.\nA big soft towel. Wrap you up tight.\nRub your hair dry. All warm again.",
  id: "Air hangat di bak mandi. Pas sekali.\nJari kakimu masuk. Satu kaki. Ceburr!\nTanganmu masuk. Cebur, cebur, cebur!\nBebek kuning mengapung lewat. Kwek, kwek.\nDorong bebeknya. Ia pergi. Bob, bob.\nGelembung di perutmu. Pop, pop, pop.\nSabun di lenganmu. Bayi yang licin, licin!\nGosok, gosok, gosok. Sekarang kamu bersih.\nTuang airnya dari gelas. Glek, glek.\nNaik, yuk, keluar dari air hangat.\nHanduk besar yang lembut. Bungkus rapat-rapat.\nGosok rambutmu sampai kering. Hangat lagi.",
  v: [["tub", "bak mandi"], ["splash", "ceburan air"], ["bubbles", "gelembung"], ["tummy", "perut"], ["towel", "handuk"]]
},
{
  t: "Moo, Says the Cow",
  sc: "day",
  e: ["🐮","🐑","🐴","🐷","🐔"],
  en: "Come to the farm. Open the gate. Creak!\nThe big brown cow looks at us.\nMoo, says the cow. Moo, moo, moo.\nThe woolly sheep says baa. Baa, baa, baa.\nThe white duck says quack. Quack, quack.\nThe tall horse says neigh. Neigh, neigh!\nThe pink pig says oink. Oink, oink.\nThe little chick says peep, peep, peep.\nThe rooster shouts cock-a-doodle-doo! Wake up, everyone!\nAll the animals eat their breakfast together.\nAnd what do you say, little one?\nYou say hello. Hello, hello, farm!",
  id: "Ayo ke peternakan. Buka gerbangnya. Kriet!\nSapi cokelat yang besar memandang kita.\nMoo, kata sapi. Moo, moo, moo.\nKambing berbulu wol berkata mbee. Mbee, mbee, mbee.\nBebek putih berkata kwek. Kwek, kwek.\nKuda yang tinggi berkata hiii. Hiii, hiii!\nBabi merah muda berkata ngok. Ngok, ngok.\nAnak ayam kecil berkata ciap, ciap, ciap.\nAyam jago berteriak kukuruyuk! Bangun, semuanya!\nSemua hewan makan sarapan bersama.\nDan kamu bilang apa, sayang?\nKamu bilang halo. Halo, halo, peternakan!",
  v: [["farm", "peternakan"], ["cow", "sapi"], ["sheep", "kambing/biri-biri"], ["chick", "anak ayam"], ["rooster", "ayam jago"]]
},
{
  t: "Ten Little Toes",
  sc: "day",
  e: ["🦶","✨","🧦","🎈"],
  en: "Here is your foot. Hello, little foot.\nThis is one toe. The big toe.\nThis is two toes. Wiggle, wiggle, wiggle.\nCount with me: one, two, three, four, five.\nFive little toes on this foot!\nNow the other foot. Here we go.\nSix, seven, eight, nine, ten.\nTen little toes. All of them yours.\nTouch them. Warm and small and round.\nTickle, tickle, tickle under your foot!\nYou laugh out loud. Ha, ha, ha.\nTen happy toes. Ten happy little toes.",
  id: "Ini kakimu. Halo, kaki kecil.\nIni satu jari kaki. Jari yang besar.\nIni dua jari kaki. Gerak, gerak, gerak.\nHitung bersamaku: satu, dua, tiga, empat, lima.\nLima jari kaki kecil di kaki ini!\nSekarang kaki yang lain. Ayo mulai.\nEnam, tujuh, delapan, sembilan, sepuluh.\nSepuluh jari kaki kecil. Semuanya milikmu.\nSentuh. Hangat dan kecil dan bundar.\nCekikik, cekikik, cekikik di bawah kakimu!\nKamu tertawa terbahak-bahak. Ha, ha, ha.\nSepuluh jari bahagia. Sepuluh jari kaki kecil yang bahagia.",
  v: [["toe", "jari kaki"], ["wiggle", "menggoyang-goyang"], ["count", "menghitung"], ["tickle", "menggelitik"], ["laugh", "tertawa"]]
},
{
  t: "Rain, Rain, Tap Tap",
  sc: "rain",
  e: ["🌧️","☔","🍃","🐌"],
  en: "Look out the window. The sky is grey.\nThe clouds are heavy and full. Here comes the rain.\nTap, tap, tap on the glass.\nRain on the roof. Pitter, patter, pitter.\nRain on the leaves. Drip, drip, drip.\nThe puddles grow big and round and shiny.\nA little bird hides under a wide green leaf.\nWe stay inside, warm and dry and cosy.\nOur hands on the cold window. Ooh!\nThe rain sings a little song for us.\nTap, tap, tap. Slower now. Slower.\nGoodbye, rain. Come again another day.",
  id: "Lihat ke luar jendela. Langitnya kelabu.\nAwannya berat dan penuh. Hujan datang.\nTik, tik, tik di kaca.\nHujan di atap. Tik-tik-tik-tik.\nHujan di dedaunan. Tes, tes, tes.\nGenangan jadi besar dan bundar dan berkilau.\nSeekor burung kecil bersembunyi di bawah daun hijau yang lebar.\nKita di dalam, hangat dan kering dan nyaman.\nTangan kita di jendela yang dingin. Ooh!\nHujan menyanyikan lagu kecil untuk kita.\nTik, tik, tik. Makin lambat. Makin lambat.\nSelamat jalan, hujan. Datang lagi ya lain hari.",
  v: [["roof", "atap"], ["leaves", "dedaunan"], ["puddles", "genangan air"], ["dry", "kering"], ["clouds", "awan"]]
},
{
  t: "The Round Red Ball",
  sc: "day",
  e: ["🔴","⚽","🪑","🧸"],
  en: "Here is a ball. A big red ball.\nRound, round, round. No corners at all.\nHold it. Squeeze it. Soft and light.\nRoll the ball to me. Roll, roll, roll.\nNow I roll it back to you.\nBounce the ball. Bounce, bounce, bounce!\nUp high. Down low. Up high again.\nOh! Where did the ball go?\nIs it behind the door? No.\nIs it under the chair? Yes!\nFound it. Here is the red ball.\nRoll it one more time. Roll, roll, roll.",
  id: "Ini sebuah bola. Bola merah yang besar.\nBundar, bundar, bundar. Tidak ada sudutnya.\nPegang. Tekan. Lembut dan ringan.\nGulingkan bolanya ke aku. Guling, guling, guling.\nSekarang aku gulingkan kembali ke kamu.\nPantulkan bolanya. Pantul, pantul, pantul!\nNaik tinggi. Turun rendah. Naik tinggi lagi.\nOh! Ke mana perginya bolanya?\nApa di balik pintu? Bukan.\nApa di bawah kursi? Iya!\nDapat. Ini bola merahnya.\nGulingkan sekali lagi. Guling, guling, guling.",
  v: [["round", "bundar"], ["roll", "menggelinding"], ["bounce", "memantul"], ["under", "di bawah"], ["squeeze", "menekan/memeras"]]
},
{
  t: "Peekaboo Bunny",
  sc: "garden",
  e: ["🐰","🌿","👀","🥕"],
  en: "A little bunny hides behind the tree.\nWhere is bunny? I cannot see her.\nHop, hop, hop. I hear you, bunny.\nIs bunny in the tall grass? No.\nIs bunny under the flowers? No.\nIs bunny behind my back? No!\nWhere, oh where, can bunny be?\nPeekaboo! There you are, little bunny!\nSoft grey ears. A small pink nose.\nA fluffy white tail. Twitch, twitch.\nShe eats a green leaf. Nibble, nibble, nibble.\nHello, little bunny. I found you. Hooray!",
  id: "Seekor kelinci kecil bersembunyi di balik pohon.\nDi mana kelinci? Aku tak bisa melihatnya.\nHop, hop, hop. Aku mendengarmu, kelinci.\nApa kelinci di rumput yang tinggi? Bukan.\nApa kelinci di bawah bunga? Bukan.\nApa kelinci di belakangku? Bukan!\nDi mana, oh di mana kelinci berada?\nCilukba! Itu kamu, kelinci kecil!\nTelinga kelabu yang lembut. Hidung kecil merah muda.\nEkor putih berbulu halus. Kedut, kedut.\nIa makan daun hijau. Kriuk, kriuk, kriuk.\nHalo, kelinci kecil. Aku menemukanmu. Hore!",
  v: [["hides", "bersembunyi"], ["hop", "melompat kecil"], ["ears", "telinga"], ["fluffy", "berbulu halus"], ["nibble", "menggerogoti sedikit-sedikit"]]
},
{
  t: "Soft, Soft Blanket",
  sc: "night",
  e: ["🧸","🛏️","💤","🌙"],
  en: "Here is your blanket. Soft and blue.\nTouch it with your fingers. So soft.\nHold it near your face. Mmm.\nWrap it all around you. Snug, snug, snug.\nOne corner for your little hand.\nOne corner for your warm cheek.\nThe blanket smells like home and milk.\nIt keeps the cold night far away.\nWarm baby. Cosy baby. Sleepy baby.\nYour eyes are closing now. Slow, slow.\nThe blanket stays with you all night long.\nGood night, soft blanket. Good night, baby.",
  id: "Ini selimutmu. Lembut dan biru.\nSentuh dengan jarimu. Lembut sekali.\nDekatkan ke wajahmu. Mmm.\nSelimutkan ke seluruh badanmu. Rapat, rapat, rapat.\nSatu sudut untuk tangan kecilmu.\nSatu sudut untuk pipimu yang hangat.\nSelimut ini wanginya seperti rumah dan susu.\nIa menjauhkan malam yang dingin.\nBayi yang hangat. Bayi yang nyaman. Bayi yang mengantuk.\nMatamu mulai menutup sekarang. Perlahan, perlahan.\nSelimut menemanimu sepanjang malam.\nSelamat malam, selimut lembut. Selamat malam, sayang.",
  v: [["blanket", "selimut"], ["wrap", "membungkus/menyelimuti"], ["snug", "terbungkus rapat dan nyaman"], ["cheek", "pipi"], ["cosy", "hangat nyaman"]]
},
{
  t: "The Little Duck",
  sc: "water",
  e: ["🦆","💧","🪷","🐟"],
  en: "A little duck goes down to the pond.\nWaddle, waddle, waddle. Side to side.\nInto the water she goes. Splash!\nSwim, little duck, swim. Round and round.\nQuack, quack, quack, says the duck.\nHer flat feet paddle under the water.\nPaddle, paddle. Nobody can see them.\nDown goes her head. Up comes her tail!\nShe finds a green weed. Nibble, nibble.\nMother duck calls her. Quack! Come home.\nOut of the pond. Shake, shake, shake.\nWaddle, waddle. Home to bed. Good night.",
  id: "Seekor bebek kecil pergi ke kolam.\nJalan terkuak-kuak, terkuak-kuak. Ke kiri ke kanan.\nIa masuk ke air. Ceburr!\nBerenang, bebek kecil, berenang. Berputar-putar.\nKwek, kwek, kwek, kata bebek.\nKakinya yang lebar mengayuh di bawah air.\nKayuh, kayuh. Tak ada yang bisa melihatnya.\nKepalanya masuk ke bawah. Ekornya naik!\nIa menemukan rumput air hijau. Kriuk, kriuk.\nIbu bebek memanggilnya. Kwek! Pulang yuk.\nKeluar dari kolam. Kibas, kibas, kibas.\nJalan terkuak-kuak. Pulang untuk tidur. Selamat malam.",
  v: [["pond", "kolam"], ["waddle", "berjalan bergoyang seperti bebek"], ["swim", "berenang"], ["paddle", "mengayuh air"], ["shake", "mengibaskan/mengguncang"]]
},
{
  t: "Yum, Yum, Banana",
  sc: "day",
  e: ["🍌","😋","🥄","🐵"],
  en: "Look, a banana. A big yellow banana.\nIt is curved like a little smile.\nIt grew on a tall tree far away.\nHold the top. Peel it down. Zip!\nZip, zip. Three long yellow strips.\nInside it is soft and white and sweet.\nSmell it. Ahh. So good.\nTake a little bite. Mmm. Yum.\nChew, chew, chew. Yum, yum, yum.\nSoft on your tongue. Easy to eat.\nOne more bite. And one more bite.\nA monkey would eat it all in one go!\nAll gone now. Every last little bit.\nThank you, banana. That was very good.",
  id: "Lihat, pisang. Pisang kuning yang besar.\nBentuknya melengkung seperti senyum kecil.\nIa tumbuh di pohon tinggi yang jauh.\nPegang ujungnya. Kupas ke bawah. Srett!\nSrett, srett. Tiga lembar kuning yang panjang.\nDi dalamnya lembut dan putih dan manis.\nCium baunya. Ahh. Enak sekali.\nGigit sedikit. Mmm. Enak.\nKunyah, kunyah, kunyah. Enak, enak, enak.\nLembut di lidahmu. Mudah dimakan.\nSatu gigitan lagi. Dan satu gigitan lagi.\nKalau monyet, sekali telan habis semua!\nHabis semua sekarang. Sampai bersih.\nTerima kasih, pisang. Itu enak sekali.",
  v: [["peel", "mengupas"], ["bite", "gigitan"], ["chew", "mengunyah"], ["sweet", "manis"], ["tongue", "lidah"]]
},
{
  t: "Buzz, Little Bee",
  sc: "garden",
  e: ["🐝","🌻","🍯","🌷"],
  en: "A little bee flies out in the morning.\nBuzz, buzz, buzz. Off she goes.\nTo the tall yellow flower. Buzz.\nTo the small pink flower. Buzz, buzz.\nHer wings go so fast you cannot see them.\nHer legs are dusty with soft yellow pollen.\nShe is busy. Very, very busy.\nOver the grass. Under the leaf.\nRound the garden one more time.\nNow home she flies to the hive.\nBuzz, buzz. Hello, sisters. I am home.\nGood night, little bee. Sleep in the sweet honey.",
  id: "Seekor lebah kecil terbang keluar di pagi hari.\nNguing, nguing, nguing. Ia pergi.\nKe bunga kuning yang tinggi. Nguing.\nKe bunga merah muda yang kecil. Nguing, nguing.\nSayapnya bergerak sangat cepat sampai tak terlihat.\nKakinya berdebu serbuk bunga kuning yang lembut.\nIa sibuk. Sangat, sangat sibuk.\nDi atas rumput. Di bawah daun.\nBerkeliling taman sekali lagi.\nSekarang ia terbang pulang ke sarang.\nNguing, nguing. Halo, saudara-saudara. Aku pulang.\nSelamat malam, lebah kecil. Tidurlah di madu yang manis.",
  v: [["bee", "lebah"], ["buzz", "bunyi nguing lebah"], ["wings", "sayap"], ["hive", "sarang lebah"], ["pollen", "serbuk bunga"]]
},
{
  t: "Big Truck, Little Car",
  sc: "day",
  e: ["🚚","🚗","🛣️","🚦"],
  en: "Look at the road. Something is coming.\nHere comes a truck. A very big truck.\nRumble, rumble, rumble. The ground shakes.\nBeep, beep! says the big truck.\nIts wheels are taller than you are!\nIt carries wood and sand and stones.\nNow here comes a little car.\nZoom! It goes fast. So fast.\nThe wheels go round and round and round.\nA bus stops here. The door opens. Hiss!\nRed light. Stop, truck. Stop, car.\nWait, wait, wait. Everybody waits.\nGreen light! Go, go, go!\nGoodbye, big truck. Goodbye, little car.",
  id: "Lihat ke jalan. Ada yang datang.\nDatang sebuah truk. Truk yang besar sekali.\nGemuruh, gemuruh, gemuruh. Tanahnya bergetar.\nTin, tin! kata truk besar itu.\nRodanya lebih tinggi dari kamu!\nIa membawa kayu dan pasir dan batu.\nSekarang datang sebuah mobil kecil.\nWuuush! Ia melaju cepat. Cepat sekali.\nRodanya berputar dan berputar dan berputar.\nSebuah bus berhenti di sini. Pintunya terbuka. Ces!\nLampu merah. Berhenti, truk. Berhenti, mobil.\nTunggu, tunggu, tunggu. Semuanya menunggu.\nLampu hijau! Jalan, jalan, jalan!\nSelamat jalan, truk besar. Selamat jalan, mobil kecil.",
  v: [["truck", "truk"], ["rumble", "suara gemuruh"], ["wheels", "roda"], ["road", "jalan"], ["wait", "menunggu"]]
},
{
  t: "The Moon Is Awake",
  sc: "night",
  e: ["🌙","⭐","🦉","🌌"],
  en: "The sun goes down behind the hill.\nDown, down, down. Goodbye, sun.\nThe sky turns orange, then dark blue.\nNow look up. Something is coming.\nUp comes the moon. A big round moon.\nSo white. So bright. So quiet.\nThe moon shines on the tall tree.\nThe moon shines on the window.\nThe moon shines on your little bed.\nHello, moon. Hello, sleepy baby.\nAn owl says hoo, hoo. Good night, owl.\nSleep now. The moon is watching over you.",
  id: "Matahari terbenam di balik bukit.\nTurun, turun, turun. Selamat jalan, matahari.\nLangit berubah jingga, lalu biru gelap.\nSekarang lihat ke atas. Ada yang datang.\nBulan terbit. Bulan besar dan bundar.\nPutih sekali. Terang sekali. Tenang sekali.\nBulan bersinar di pohon yang tinggi.\nBulan bersinar di jendela.\nBulan bersinar di tempat tidur kecilmu.\nHalo, bulan. Halo, bayi yang mengantuk.\nSeekor burung hantu berkata hu, hu. Selamat malam, burung hantu.\nTidurlah sekarang. Bulan menjagamu.",
  v: [["moon", "bulan"], ["dark", "gelap"], ["bright", "terang"], ["night", "malam"], ["owl", "burung hantu"]]
},
{
  t: "Clap Your Hands",
  sc: "day",
  e: ["👏","🖐️","🎵","🥁"],
  en: "Are you ready? Stand up. Here we go!\nClap your hands together. Clap, clap, clap.\nNow clap them softly. Clap. Clap.\nPat your two knees. Pat, pat, pat.\nStamp your feet on the floor. Stamp, stamp!\nTurn around slowly. Round and round. Whee!\nWave hello to me. Wave, wave, wave.\nOne hand up. Now two hands up.\nAll the way up. So tall!\nReach for the sky. Higher, higher, higher.\nNow hands down. Down, down, down.\nTouch your toes. Can you reach them?\nOne big hug at the end. Squeeze!\nGood job, baby. Clap, clap, clap!",
  id: "Sudah siap? Berdiri. Ayo mulai!\nTepuk tanganmu bersama. Tepuk, tepuk, tepuk.\nSekarang tepuk perlahan. Tepuk. Tepuk.\nTepuk kedua lututmu. Tuk, tuk, tuk.\nHentakkan kakimu di lantai. Hentak, hentak!\nBerputar perlahan. Berputar dan berputar. Wii!\nLambaikan tangan padaku. Lambai, lambai, lambai.\nSatu tangan ke atas. Sekarang dua tangan ke atas.\nSetinggi mungkin. Tinggi sekali!\nJangkau langit. Lebih tinggi, lebih tinggi, lebih tinggi.\nSekarang tangan ke bawah. Turun, turun, turun.\nSentuh jari kakimu. Sampai tidak?\nSatu pelukan besar di akhir. Peluk erat!\nHebat, sayang. Tepuk, tepuk, tepuk!",
  v: [["clap", "bertepuk tangan"], ["pat", "menepuk lembut"], ["stamp", "menghentakkan kaki"], ["wave", "melambaikan tangan"], ["reach", "menjangkau"]]
},
{
  t: "Where Is Your Nose?",
  sc: "day",
  e: ["👃","👀","👂","😊"],
  en: "Let us find all the parts of you.\nWhere is your nose? Here it is!\nBoop! Right on your little nose.\nWhere are your eyes? Here they are.\nTwo bright eyes. Blink, blink, blink.\nWhere is your mouth? Here it is.\nA big wide smile. So happy.\nWhere are your ears? One. Two.\nTwo soft ears to hear my song.\nWhere is your hair? Right on top!\nWhere is your chin? Tickle, tickle.\nAll of you. Every bit. Hello, you.",
  id: "Ayo cari semua bagian tubuhmu.\nDi mana hidungmu? Ini dia!\nTuk! Tepat di hidung kecilmu.\nDi mana matamu? Ini dia.\nDua mata yang cerah. Kedip, kedip, kedip.\nDi mana mulutmu? Ini dia.\nSenyum yang lebar. Bahagia sekali.\nDi mana telingamu? Satu. Dua.\nDua telinga lembut untuk mendengar laguku.\nDi mana rambutmu? Di atas sana!\nDi mana dagumu? Cekikik, cekikik.\nSeluruh dirimu. Setiap bagian. Halo, kamu.",
  v: [["nose", "hidung"], ["blink", "berkedip"], ["mouth", "mulut"], ["ears", "telinga"], ["chin", "dagu"]]
},
{
  t: "The Puppy's Tail",
  sc: "garden",
  e: ["🐶","🦴","🐾","🥎"],
  en: "A little puppy runs over to play.\nHis tail goes wag, wag, wag.\nA happy tail. A very fast tail.\nHe sniffs your hand. Sniff, sniff.\nHe licks your fingers. Lick, lick, lick.\nWoof, woof! says the little puppy.\nThrow the stick. Run, puppy, run!\nHe brings it back to you. Good puppy.\nRound the garden. Round again. So fast.\nNow he is tired. Flop! Down he goes.\nHis eyes close. His tail slows down.\nWag. Wag. Good night, sleepy puppy.",
  id: "Seekor anak anjing berlari datang untuk bermain.\nEkornya bergoyang, goyang, goyang.\nEkor yang senang. Ekor yang cepat sekali.\nIa mengendus tanganmu. Endus, endus.\nIa menjilat jarimu. Jilat, jilat, jilat.\nGuk, guk! kata anak anjing kecil itu.\nLempar tongkatnya. Lari, anak anjing, lari!\nIa membawanya kembali kepadamu. Anak anjing yang baik.\nBerkeliling taman. Berkeliling lagi. Cepat sekali.\nSekarang ia lelah. Bruk! Ia terjatuh.\nMatanya menutup. Ekornya melambat.\nGoyang. Goyang. Selamat malam, anak anjing yang mengantuk.",
  v: [["puppy", "anak anjing"], ["wag", "menggoyangkan ekor"], ["lick", "menjilat"], ["tired", "lelah"], ["sniffs", "mengendus"]]
},
{
  t: "One Slow Turtle",
  sc: "water",
  e: ["🐢","🍃","🐌","🪨"],
  en: "Here is a turtle. A very slow turtle.\nStep, step, step. So slow.\nHe carries his house upon his back.\nA hard round shell. Tap, tap, tap.\nThe shell has pretty lines all over it.\nWhen he is shy, in goes his head.\nOut it comes again. Hello, turtle.\nWhere are you going, slow turtle?\nDown to the water. Slow, slow, slow.\nOver a stone. Under a leaf.\nA snail says hello. You are fast!\nAlmost there. Almost. Almost.\nSplish! Into the pond he goes.\nAnd now the turtle swims fast! So fast!",
  id: "Ini seekor kura-kura. Kura-kura yang lambat sekali.\nLangkah, langkah, langkah. Lambat sekali.\nIa membawa rumahnya di atas punggungnya.\nCangkang keras yang bundar. Tok, tok, tok.\nCangkangnya bergaris-garis cantik di seluruhnya.\nKalau ia malu, kepalanya masuk ke dalam.\nLalu keluar lagi. Halo, kura-kura.\nMau ke mana kamu, kura-kura yang lambat?\nTurun ke air. Lambat, lambat, lambat.\nMelewati batu. Di bawah daun.\nSeekor siput menyapa. Kamu cepat sekali!\nHampir sampai. Hampir. Hampir.\nCebur! Ia masuk ke kolam.\nDan sekarang kura-kura berenang cepat! Cepat sekali!",
  v: [["turtle", "kura-kura"], ["slow", "lambat"], ["shell", "cangkang"], ["carries", "membawa"], ["shy", "malu"]]
},
{
  t: "Windy Day",
  sc: "garden",
  e: ["🌬️","🍂","🪁","👒"],
  en: "Whoosh! Can you hear that sound?\nHere comes the wind. It has no colour.\nThe wind blows the leaves off the tree.\nThe leaves dance. Round and round and down.\nThe wind blows your hair. Tickle, tickle!\nHold your hat. Hold it tight!\nThe tall trees bend and sway. Sway, sway.\nThe kite goes up. Higher, higher, higher.\nThe washing on the line goes flap, flap.\nWhoosh, whoosh, says the busy wind.\nNow the wind is tired. It rests.\nGoodbye, wind. Come and play again.",
  id: "Wuuush! Kamu dengar suara itu?\nAngin datang. Ia tidak punya warna.\nAngin menerbangkan dedaunan dari pohon.\nDedaunan menari. Berputar dan berputar dan turun.\nAngin menerbangkan rambutmu. Geli, geli!\nPegang topimu. Pegang kuat-kuat!\nPohon-pohon tinggi melengkung dan berayun. Ayun, ayun.\nLayang-layang naik. Lebih tinggi, lebih tinggi, lebih tinggi.\nJemuran di tali berkibar, berkibar.\nWuush, wuush, kata angin yang sibuk.\nSekarang angin lelah. Ia beristirahat.\nSelamat jalan, angin. Datang bermain lagi ya.",
  v: [["wind", "angin"], ["blows", "meniup/menerbangkan"], ["sway", "berayun"], ["tight", "kuat/rapat"], ["kite", "layang-layang"]]
},
{
  t: "The Purple Flower",
  sc: "garden",
  e: ["🪻","🦋","🌿","🐞"],
  en: "In the green grass, one purple flower.\nSmall and pretty. All by itself.\nGreen leaves below. Soft petals above.\nCount the petals: one, two, three, four.\nTouch it. Very gentle fingers. Gentle.\nPut your nose close. Smell it. Ahh!\nA butterfly lands on it. Slowly, slowly.\nA bee comes to say hello. Buzz.\nThe warm sun shines on the flower.\nThe rain gives it a cool drink.\nGrow, little flower. Grow, grow, grow.\nTomorrow you will be a little taller.",
  id: "Di rumput hijau, satu bunga ungu.\nKecil dan cantik. Sendirian saja.\nDaun hijau di bawah. Kelopak lembut di atas.\nHitung kelopaknya: satu, dua, tiga, empat.\nSentuh. Dengan jari yang sangat lembut. Lembut.\nDekatkan hidungmu. Cium baunya. Ahh!\nSeekor kupu-kupu mendarat di atasnya. Perlahan, perlahan.\nSeekor lebah datang menyapa. Nguing.\nMatahari yang hangat bersinar pada bunga itu.\nHujan memberinya air minum yang sejuk.\nTumbuhlah, bunga kecil. Tumbuh, tumbuh, tumbuh.\nBesok kamu akan sedikit lebih tinggi.",
  v: [["purple", "ungu"], ["petals", "kelopak bunga"], ["gentle", "pelan dan lembut"], ["grow", "tumbuh"], ["butterfly", "kupu-kupu"]]
},
{
  t: "Sleepy Time Sheep",
  sc: "night",
  e: ["🐑","🌙","💤","⭐"],
  en: "It is bedtime now. Let us count the sheep.\nOne sheep, walking slowly. Baa.\nTwo sheep, side by side. Baa, baa.\nThree sheep, over the little hill.\nFour sheep. Five sheep. Baa, baa.\nTheir wool is white and thick and soft.\nSix sheep, seven sheep, eight sheep.\nNine sheep. Ten sleepy sheep.\nThe moon comes out to count them too.\nThe sheep lie down in the soft grass.\nThey put their heads down. All quiet now.\nThey close their eyes, one by one.\nYou are sleepy too. Yawn. Aaah.\nBaa, baa. Sleep well, little one.",
  id: "Sekarang waktunya tidur. Ayo hitung biri-biri.\nSatu biri-biri, berjalan perlahan. Mbee.\nDua biri-biri, bersebelahan. Mbee, mbee.\nTiga biri-biri, melewati bukit kecil.\nEmpat biri-biri. Lima biri-biri. Mbee, mbee.\nBulunya putih dan tebal dan lembut.\nEnam biri-biri, tujuh biri-biri, delapan biri-biri.\nSembilan biri-biri. Sepuluh biri-biri yang mengantuk.\nBulan keluar untuk ikut menghitung juga.\nBiri-biri berbaring di rumput yang lembut.\nMereka menaruh kepalanya ke bawah. Semua tenang sekarang.\nMereka memejamkan mata, satu per satu.\nKamu juga mengantuk. Menguap. Aaah.\nMbee, mbee. Tidur yang nyaman, sayang.",
  v: [["sheep", "biri-biri"], ["wool", "bulu wol"], ["count", "menghitung"], ["yawn", "menguap"], ["bedtime", "waktu tidur"]]
},
{
  t: "Two Warm Socks",
  sc: "snow",
  e: ["🧦","🦶","🧣","☃️"],
  en: "Brrr! It is cold today. Look outside.\nWhite snow on the ground. Cold, cold, cold.\nCome here, little feet. Time for socks.\nHere is one sock. A stripey sock.\nOn your foot it goes. Pull, pull, pull.\nHere is the other sock. Where is your foot?\nThere it is! On it goes. Pull!\nTwo warm socks. Two warm little feet.\nWiggle your toes inside. Can you feel them?\nNow your feet are snug and cosy.\nStomp, stomp, stomp. Warm feet dancing.\nNo more cold toes. Hooray for socks!",
  id: "Brrr! Hari ini dingin. Lihat ke luar.\nSalju putih di tanah. Dingin, dingin, dingin.\nSini, kaki kecil. Waktunya pakai kaus kaki.\nIni satu kaus kaki. Kaus kaki bergaris.\nDipakai ke kakimu. Tarik, tarik, tarik.\nIni kaus kaki yang satu lagi. Di mana kakimu?\nItu dia! Dipakai. Tarik!\nDua kaus kaki hangat. Dua kaki kecil yang hangat.\nGoyangkan jari kakimu di dalamnya. Terasa?\nSekarang kakimu rapat dan nyaman.\nHentak, hentak, hentak. Kaki hangat menari.\nTidak ada lagi kaki dingin. Hore untuk kaus kaki!",
  v: [["sock", "kaus kaki"], ["pull", "menarik"], ["warm", "hangat"], ["stomp", "menghentak kaki"], ["snow", "salju"]]
},
{
  t: "The Happy Frog",
  sc: "water",
  e: ["🐸","🪰","🌿","🪷"],
  en: "By the pond sits a small green frog.\nHis skin is smooth and shiny and wet.\nRibbit, ribbit, says the frog.\nHis eyes are big and round and gold.\nHis back legs are long and strong.\nHop! Onto a wide flat leaf.\nHop, hop! Onto a grey stone.\nA fly buzzes past his nose. Bzzz.\nSnap! The frog catches the fly. Gulp!\nNow into the water. Splash!\nSwim, frog, swim. Kick, kick, kick.\nDown to the bottom. Then up again.\nUp he comes for air. Blink, blink.\nHappy frog. Ribbit, ribbit, ribbit.",
  id: "Di tepi kolam duduk seekor katak hijau kecil.\nKulitnya halus dan berkilau dan basah.\nKrok, krok, kata katak.\nMatanya besar dan bundar dan keemasan.\nKaki belakangnya panjang dan kuat.\nHop! Ke atas daun lebar yang datar.\nHop, hop! Ke atas batu kelabu.\nSeekor lalat terbang lewat di depan hidungnya. Bzzz.\nHap! Katak menangkap lalat itu. Glek!\nSekarang masuk ke air. Ceburr!\nBerenang, katak, berenang. Kayuh, kayuh, kayuh.\nTurun ke dasar. Lalu naik lagi.\nIa muncul untuk ambil napas. Kedip, kedip.\nKatak yang senang. Krok, krok, krok.",
  v: [["frog", "katak"], ["hop", "melompat"], ["catches", "menangkap"], ["fly", "lalat"], ["smooth", "halus"]]
},
{
  t: "Grandma's Hug",
  sc: "day",
  e: ["👵","🤗","🍪","🚪"],
  en: "Listen. Someone is at the door.\nKnock, knock, knock. Who can it be?\nOpen the door. Look who is here!\nIt is Grandma! Hello, Grandma!\nShe puts down her bag and her hat.\nShe opens her arms very wide.\nIn you go. A big warm hug.\nSqueeze, squeeze. So soft. So warm.\nGrandma smells like flowers and soap.\nShe kisses the top of your head. Mwah!\nShe has warm cookies in her bag.\nShe sings you an old, old song.\nShe holds your hand the whole afternoon.\nStay a while, Grandma. We love you.",
  id: "Dengar. Ada seseorang di pintu.\nTok, tok, tok. Siapa ya?\nBuka pintunya. Lihat siapa yang datang!\nItu Nenek! Halo, Nenek!\nIa menaruh tas dan topinya.\nIa membuka lengannya lebar-lebar.\nMasuk ke pelukannya. Pelukan hangat yang besar.\nPeluk erat, erat. Lembut sekali. Hangat sekali.\nNenek wanginya seperti bunga dan sabun.\nIa mencium kepalamu. Mwah!\nIa membawa kue hangat di tasnya.\nIa menyanyikan lagu yang lama sekali untukmu.\nIa menggandeng tanganmu sepanjang siang.\nTinggal sebentar ya, Nenek. Kami sayang Nenek.",
  v: [["grandma", "nenek"], ["knock", "mengetuk"], ["hug", "pelukan"], ["squeeze", "memeluk erat"], ["kisses", "mencium"]]
},
{
  t: "Crunch, Crunch, Apple",
  sc: "day",
  e: ["🍎","😀","🧃","🌳"],
  en: "Look at this apple. Round and red.\nHold it in two hands. So heavy!\nWash it in the water. Splash, splash.\nNow it is shiny. So smooth.\nTurn it round and round. No bumps at all.\nOpen your mouth wide. Take a bite.\nCrunch! Oh, what a good sound.\nCrunch, crunch, crunch. White inside!\nSweet juice runs down your chin.\nWipe, wipe. All clean again.\nEat it all up. Down to the little core.\nApples are good. Crunch, crunch, crunch.",
  id: "Lihat apel ini. Bundar dan merah.\nPegang dengan dua tangan. Berat sekali!\nCuci di air. Kucur, kucur.\nSekarang berkilau. Halus sekali.\nPutar-putar. Tidak ada benjolnya.\nBuka mulutmu lebar-lebar. Gigit satu kali.\nKriuk! Oh, bunyinya enak sekali.\nKriuk, kriuk, kriuk. Putih di dalamnya!\nAir manisnya mengalir ke dagumu.\nUsap, usap. Bersih lagi.\nHabiskan semua. Sampai ke bijinya.\nApel itu enak. Kriuk, kriuk, kriuk.",
  v: [["apple", "apel"], ["crunch", "bunyi kriuk saat digigit"], ["juice", "air/sari buah"], ["wipe", "mengusap"], ["smooth", "halus"]]
},
{
  t: "The Tiny Ant",
  sc: "garden",
  e: ["🐜","🍞","🌱","🪨"],
  en: "Down on the ground, look very closely.\nDo you see it? A tiny ant.\nSo small. Smaller than your fingernail.\nShe walks in a long line with her friends.\nStep, step, step. Never stopping.\nShe carries a big crumb of bread.\nHeavy! It is bigger than she is!\nBut the little ant is strong. Very strong.\nOver a stone. Under a leaf.\nAround a puddle. Careful, little ant!\nHome she goes, into a small hole.\nWell done, tiny ant. Well done.",
  id: "Di atas tanah, lihat dari sangat dekat.\nKamu lihat? Seekor semut kecil.\nKecil sekali. Lebih kecil dari kukumu.\nIa berjalan dalam barisan panjang bersama teman-temannya.\nLangkah, langkah, langkah. Tidak pernah berhenti.\nIa membawa serpihan roti yang besar.\nBerat! Lebih besar dari badannya!\nTapi semut kecil itu kuat. Sangat kuat.\nMelewati batu. Di bawah daun.\nMengelilingi genangan. Hati-hati, semut kecil!\nIa pulang, masuk ke lubang kecil.\nHebat, semut kecil. Hebat sekali.",
  v: [["ant", "semut"], ["tiny", "kecil sekali"], ["crumb", "serpihan makanan"], ["strong", "kuat"], ["hole", "lubang"]]
},
{
  t: "Stars Come Out",
  sc: "night",
  e: ["⭐","🌌","🌙","🔭"],
  en: "The sky is dark now. All dark.\nCome to the window. Look up high.\nWhat is that? One little light.\nOne star. Twinkle, twinkle, twinkle.\nNow two stars. Now three stars.\nNow so many stars. Too many to count.\nThey shine so very far away.\nSome are bright. Some are very small.\nThey make pictures in the big sky.\nThat one looks like a little spoon.\nThe moon comes out too. Hello, moon.\nA cloud floats by and says good night.\nLittle lights, watching while you sleep.\nGood night, stars. Twinkle, twinkle.",
  id: "Langit sudah gelap sekarang. Gelap semua.\nMari ke jendela. Lihat ke atas.\nApa itu? Satu cahaya kecil.\nSatu bintang. Kelap, kelip, kelip.\nSekarang dua bintang. Sekarang tiga bintang.\nSekarang banyak sekali bintang. Terlalu banyak untuk dihitung.\nMereka bersinar jauh sekali.\nAda yang terang. Ada yang kecil sekali.\nMereka membuat gambar di langit yang besar.\nYang itu bentuknya seperti sendok kecil.\nBulan keluar juga. Halo, bulan.\nSebuah awan melintas dan berkata selamat malam.\nCahaya-cahaya kecil, menjagamu saat kamu tidur.\nSelamat malam, bintang. Kelap, kelip.",
  v: [["star", "bintang"], ["twinkle", "berkelap-kelip"], ["shine", "bersinar"], ["sky", "langit"], ["dark", "gelap"]]
},
{
  t: "The Chirpy Bird",
  sc: "day",
  e: ["🐦","🪶","🪺","🐛"],
  en: "A little bird sits on a high branch.\nChirp, chirp, chirp. Good morning!\nHer feathers are brown and grey and soft.\nHer beak is small and sharp and yellow.\nShe hops along the branch. Hop, hop.\nShe looks left. She looks right.\nFlap, flap, flap! Up she flies!\nHigh in the sky. Higher than the tree.\nRound and round. What can she see?\nShe finds a fat worm for her babies.\nBack to the nest she goes.\nChirp, chirp. Good night, little bird.",
  id: "Seekor burung kecil bertengger di dahan yang tinggi.\nCuit, cuit, cuit. Selamat pagi!\nBulunya cokelat dan kelabu dan lembut.\nParuhnya kecil dan tajam dan kuning.\nIa melompat di dahan. Hop, hop.\nIa melihat ke kiri. Ia melihat ke kanan.\nKepak, kepak, kepak! Ia terbang naik!\nTinggi di langit. Lebih tinggi dari pohon.\nBerputar-putar. Apa yang bisa ia lihat?\nIa menemukan ulat gemuk untuk anak-anaknya.\nIa kembali ke sarangnya.\nCuit, cuit. Selamat malam, burung kecil.",
  v: [["branch", "dahan"], ["chirp", "cuitan burung"], ["feathers", "bulu burung"], ["flap", "mengepakkan sayap"], ["nest", "sarang"]]
},
{
  t: "Bubbles Go Pop",
  sc: "water",
  e: ["🫧","💨","🌈","😮"],
  en: "Dip the little ring in the soapy water.\nTake a big breath in. Now blow!\nBlow, blow. Here come the bubbles!\nOne bubble. Two bubbles. Three!\nSo many bubbles. Round and shiny.\nEach one has a little rainbow inside.\nUp they float. Up, up, up.\nThis one is big. That one is tiny.\nTwo bubbles stick together. Hello, friend!\nCatch one. Gently, gently, gently.\nPop! Oh! It is gone.\nPop, pop, pop. All gone now.\nWhere did they go? Nowhere at all!\nBlow again. More bubbles, please!",
  id: "Celupkan cincin kecil ke air sabun.\nTarik napas panjang. Sekarang tiup!\nTiup, tiup. Gelembungnya datang!\nSatu gelembung. Dua gelembung. Tiga!\nBanyak sekali gelembung. Bundar dan berkilau.\nMasing-masing punya pelangi kecil di dalamnya.\nMereka melayang naik. Naik, naik, naik.\nYang ini besar. Yang itu kecil sekali.\nDua gelembung menempel. Halo, kawan!\nTangkap satu. Pelan-pelan, pelan-pelan, pelan-pelan.\nPop! Oh! Hilang sudah.\nPop, pop, pop. Habis semua sekarang.\nKe mana perginya? Tidak ke mana-mana!\nTiup lagi. Gelembung lagi, ya!",
  v: [["bubble", "gelembung"], ["blow", "meniup"], ["float", "melayang"], ["pop", "meletus/pecah"], ["rainbow", "pelangi"]]
},
{
  t: "Good Night, Everyone",
  sc: "night",
  e: ["🌜","🧸","😴","🕯️"],
  en: "The day is over. Time for bed.\nLet us say good night to everything.\nGood night, sun. Sleep well.\nGood night, birds up in the tree.\nGood night, cat asleep on the chair.\nGood night, ball there on the floor.\nGood night, socks. Good night, blanket.\nGood night, little duck beside the bath.\nGood night, flowers in the quiet garden.\nGood night, bee. Good night, bunny.\nGood night, moon. Good night, stars.\nThe whole wide world is going to sleep.\nOne last kiss upon your head.\nGood night, sweet baby. I love you.",
  id: "Hari sudah selesai. Waktunya tidur.\nMari ucapkan selamat malam untuk semuanya.\nSelamat malam, matahari. Tidur yang nyaman.\nSelamat malam, burung-burung di atas pohon.\nSelamat malam, kucing yang tertidur di kursi.\nSelamat malam, bola yang di lantai itu.\nSelamat malam, kaus kaki. Selamat malam, selimut.\nSelamat malam, bebek kecil di samping bak mandi.\nSelamat malam, bunga-bunga di taman yang sepi.\nSelamat malam, lebah. Selamat malam, kelinci.\nSelamat malam, bulan. Selamat malam, bintang.\nSeluruh dunia yang luas mau tidur.\nSatu kecupan terakhir di kepalamu.\nSelamat malam, bayi manis. Aku sayang kamu.",
  v: [["bed", "tempat tidur"], ["asleep", "tertidur"], ["floor", "lantai"], ["love", "sayang/cinta"], ["whole", "seluruh"]]
},

// ---------- retold from the public domain ----------
{
  t: "Twinkle, Twinkle, Little Star",
  sc: "night",
  e: ["⭐","🌙","💎","🌌"],
  src: "Jane Taylor, “The Star”, 1806",
  en: "Twinkle, twinkle, little star.\nHow I wonder what you are!\nUp above the world so high,\nlike a diamond in the sky.\nWhen the golden sun goes down,\nand the dark comes over town,\nthen you show your little light.\nTwinkle, twinkle, all the night.\nIn the dark blue sky you keep,\nand you look down while I sleep.\nYou never shut your little eye,\ntill the sun is in the sky.\nThank you for your tiny spark.\nTwinkle, twinkle, little star.",
  id: "Kelap, kelip, bintang kecil.\nAku heran kamu ini apa!\nDi atas dunia, tinggi sekali,\nseperti permata di langit.\nSaat matahari emas terbenam,\ndan gelap datang ke kota,\nkamu menyalakan cahaya kecilmu.\nKelap, kelip, sepanjang malam.\nDi langit biru gelap kamu tinggal,\ndan menengok ke bawah saat aku tidur.\nKamu tak pernah memejamkan matamu,\nsampai matahari ada di langit.\nTerima kasih untuk kerlip kecilmu.\nKelap, kelip, bintang kecil.",
  v: [["twinkle", "berkelap-kelip"], ["wonder", "penasaran/heran"], ["diamond", "permata"], ["spark", "kerlip cahaya kecil"], ["dark", "gelap"]]
},
{
  t: "Baa, Baa, Black Sheep",
  sc: "day",
  e: ["🐑","🧶","👦","✂️"],
  src: "Mother Goose",
  en: "Baa, baa, black sheep, have you any wool?\nYes sir, yes sir, three big bags full!\nOne bag for the master of the house.\nOne bag for the kind old dame.\nAnd one bag for the little boy\nwho lives far down the quiet lane.\nThe sheep gives his soft warm wool away.\nSnip, snip, snip go the shears.\nHis coat is short now. He does not mind.\nThe wool will make a hat and socks.\nThank you, black sheep. Thank you very much.\nBaa, baa. Goodbye! Come again next year.",
  id: "Mbee, mbee, biri-biri hitam, punya bulu wol?\nAda, tuan, ada, tuan, tiga karung penuh!\nSatu karung untuk tuan rumah.\nSatu karung untuk nyonya tua yang baik.\nDan satu karung untuk anak lelaki kecil\nyang tinggal jauh di ujung gang yang sepi.\nBiri-biri memberikan bulunya yang lembut dan hangat.\nKret, kret, kret bunyi gunting bulu.\nMantelnya jadi pendek. Ia tidak keberatan.\nWolnya akan jadi topi dan kaus kaki.\nTerima kasih, biri-biri hitam. Terima kasih banyak.\nMbee, mbee. Selamat jalan! Datang lagi tahun depan.",
  v: [["wool", "bulu wol"], ["shears", "gunting bulu"], ["lane", "gang kecil"], ["coat", "mantel/bulu penutup badan"]]
},
{
  t: "Hey Diddle Diddle",
  sc: "night",
  e: ["🐱","🎻","🐮","🐶","🌙"],
  src: "Mother Goose",
  en: "Hey diddle diddle! Listen to this.\nThe cat has a fiddle. Play, cat, play!\nThe little cow jumps over the moon.\nUp she goes! Right over the top!\nThe little dog laughs. Ha, ha, ha!\nHe has never seen such a thing.\nThe dish runs away with the spoon.\nRun, dish! Run, spoon! Run, run, run!\nWhat a silly, funny night this is.\nThe cat plays on. The moon shines down.\nEverybody dances. Round and round they go.\nHey diddle diddle. Good night, everyone.",
  id: "Hei didel didel! Dengar ini.\nSi kucing punya biola. Main, kucing, main!\nSapi kecil melompati bulan.\nNaik dia! Melewati puncaknya!\nAnjing kecil tertawa. Ha, ha, ha!\nIa belum pernah melihat yang seperti itu.\nPiring kabur bersama sendok.\nLari, piring! Lari, sendok! Lari, lari, lari!\nMalam ini lucu dan aneh sekali.\nKucing terus bermain. Bulan bersinar ke bawah.\nSemuanya menari. Berputar dan berputar.\nHei didel didel. Selamat malam, semuanya.",
  v: [["fiddle", "biola"], ["jumps", "melompat"], ["laughs", "tertawa"], ["spoon", "sendok"], ["silly", "lucu/konyol"]]
},
{
  t: "Hickory Dickory Dock",
  sc: "day",
  e: ["🐭","🕰️","🧱","🧀"],
  src: "Mother Goose",
  en: "Hickory dickory dock!\nA little brown mouse ran up the clock.\nUp, up, up. Little grey feet.\nTick, tock. Tick, tock, says the clock.\nThe big hand moves. The small hand moves.\nThen the clock says one! Bong!\nOh! The mouse is scared. Squeak!\nDown, down, down the mouse ran.\nHickory dickory dock. Away he goes!\nInto his tiny hole in the wall.\nHe peeps out one more time. Hello!\nGood night, little mouse. Sleep well.\nTick, tock. Tick, tock. Tick, tock.",
  id: "Hikori dikori dok!\nSeekor tikus cokelat kecil naik ke jam.\nNaik, naik, naik. Kaki kelabu yang kecil.\nTik, tok. Tik, tok, kata jam.\nJarum besar bergerak. Jarum kecil bergerak.\nLalu jam berbunyi satu kali! Bong!\nOh! Tikusnya takut. Cit!\nTurun, turun, turun tikus itu berlari.\nHikori dikori dok. Ia pergi!\nMasuk ke lubang kecilnya di dinding.\nIa menengok keluar sekali lagi. Halo!\nSelamat malam, tikus kecil. Tidur yang nyaman.\nTik, tok. Tik, tok. Tik, tok.",
  v: [["mouse", "tikus"], ["clock", "jam"], ["squeak", "bunyi cit tikus"], ["hole", "lubang"], ["scared", "takut"]]
},
{
  t: "Little Bo-Peep",
  sc: "garden",
  e: ["👧","🐑","🌳","🌾"],
  src: "Mother Goose",
  en: "Little Bo-Peep has lost her sheep.\nWhere can they be? She does not know.\nShe looks behind the big green tree.\nNo sheep. She looks under the hill.\nNo sheep there either. Oh dear, oh dear.\nBo-Peep sits down and has a little cry.\nThen she falls asleep in the soft grass.\nWhen she wakes up, she hears something.\nBaa! Baa! Baa! What is that sound?\nHere come her sheep, walking home again!\nOne, two, three, four, five, six.\nAll of them home. Hooray for Bo-Peep!\nHug them tight. Baa, baa, baa.",
  id: "Bo-Peep kecil kehilangan biri-birinya.\nDi mana ya mereka? Ia tidak tahu.\nIa mencari di balik pohon hijau yang besar.\nTidak ada. Ia mencari di bawah bukit.\nDi sana juga tidak ada. Aduh, aduh.\nBo-Peep duduk dan menangis sedikit.\nLalu ia tertidur di rumput yang lembut.\nSaat ia bangun, ia mendengar sesuatu.\nMbee! Mbee! Mbee! Suara apa itu?\nItu biri-birinya, berjalan pulang lagi!\nSatu, dua, tiga, empat, lima, enam.\nSemuanya pulang. Hore untuk Bo-Peep!\nPeluk mereka erat-erat. Mbee, mbee, mbee.",
  v: [["lost", "hilang/kehilangan"], ["cry", "menangis"], ["asleep", "tertidur"], ["sound", "suara"], ["hug", "memeluk"]]
},
{
  t: "Humpty Dumpty",
  sc: "day",
  e: ["🥚","🧱","🐴","👑"],
  src: "Mother Goose",
  en: "Humpty Dumpty sat on a wall.\nA high stone wall. Be careful, Humpty!\nHe was round like a big white egg.\nHe waved his little hand. Hello there!\nOh no! Humpty Dumpty had a great fall.\nDown, down, down. Crack!\nAll the king's horses came running. Clip, clop.\nAll the king's men came running too.\nThey tried and tried to put him together.\nBut they could not do it. Poor Humpty.\nSo they made him a soft new bed.\nSleep well, Humpty. Do not climb again.",
  id: "Humpty Dumpty duduk di atas dinding.\nDinding batu yang tinggi. Hati-hati, Humpty!\nBadannya bundar seperti telur putih besar.\nIa melambaikan tangan kecilnya. Halo!\nOh tidak! Humpty Dumpty terjatuh keras.\nJatuh, jatuh, jatuh. Krak!\nSemua kuda raja datang berlari. Tap, tap.\nSemua orang raja datang berlari juga.\nMereka mencoba dan mencoba menyatukannya kembali.\nTapi tidak bisa. Kasihan Humpty.\nJadi mereka membuatkan tempat tidur baru yang lembut.\nTidur yang nyaman, Humpty. Jangan memanjat lagi.",
  v: [["wall", "dinding"], ["fall", "jatuh"], ["crack", "bunyi/bekas pecah"], ["careful", "hati-hati"], ["climb", "memanjat"]]
},
{
  t: "Mary Had a Little Lamb",
  sc: "garden",
  e: ["🐐","👧","🏫","🌼"],
  src: "Sarah Josepha Hale, 1830",
  en: "Mary had a little lamb.\nIts wool was white as snow.\nEverywhere that Mary went,\nthe lamb was sure to go.\nIt followed her to school one day.\nOh! That was against the rule!\nThe children laughed and laughed to see\na little lamb inside the school.\nThe teacher sent the lamb outside.\nWait there, little lamb. Wait.\nSo the lamb waited by the gate,\nuntil Mary came out again.\nBaa, said the lamb. Hello, Mary!\nHome they went, side by side.",
  id: "Mary punya seekor anak kambing.\nBulunya putih seperti salju.\nKe mana pun Mary pergi,\nanak kambing itu pasti ikut.\nSuatu hari ia mengikuti Mary ke sekolah.\nOh! Itu melanggar peraturan!\nAnak-anak tertawa terus melihat\nanak kambing di dalam sekolah.\nBu guru menyuruh kambing itu keluar.\nTunggu di sana, kambing kecil. Tunggu.\nJadi kambing itu menunggu di gerbang,\nsampai Mary keluar lagi.\nMbee, kata kambing itu. Halo, Mary!\nMereka pulang, berjalan bersebelahan.",
  v: [["lamb", "anak kambing/domba"], ["wool", "bulu wol"], ["followed", "mengikuti"], ["school", "sekolah"], ["gate", "gerbang"]]
},
{
  t: "The Itsy Bitsy Spider",
  sc: "rain",
  e: ["🕷️","🌧️","☀️","🕸️"],
  src: "traditional nursery rhyme",
  en: "The itsy bitsy spider climbed up the spout.\nUp, up, up. Eight little legs.\nDown came the rain. Splash, splash!\nIt washed the spider out. Whoosh!\nDown, down, down. Oh dear.\nThen out came the sun. Warm and bright.\nIt dried up all the rain.\nThe puddles went away. All gone.\nSo the itsy bitsy spider climbed up again.\nUp, up, up. Slowly, slowly.\nAll the way to the very top.\nShe spins a shiny web. Round and round.\nWell done, little spider! Well done.",
  id: "Laba-laba kecil memanjat talang air.\nNaik, naik, naik. Delapan kaki kecil.\nHujan turun. Cebur, cebur!\nHujan menyapu laba-laba itu. Wuush!\nTurun, turun, turun. Aduh.\nLalu matahari keluar. Hangat dan terang.\nIa mengeringkan semua hujannya.\nGenangannya hilang. Habis semua.\nJadi laba-laba kecil memanjat lagi.\nNaik, naik, naik. Perlahan, perlahan.\nSampai ke paling atas.\nIa memintal jaring berkilau. Berputar-putar.\nHebat, laba-laba kecil! Hebat sekali.",
  v: [["spider", "laba-laba"], ["spout", "talang air"], ["rain", "hujan"], ["dried", "mengeringkan"], ["web", "jaring laba-laba"]]
},
{
  t: "Row, Row, Row Your Boat",
  sc: "water",
  e: ["🚣","🐟","🦆","🌊"],
  src: "traditional nursery rhyme",
  en: "Row, row, row your boat,\ngently down the stream.\nPull the oars. Pull, pull, pull.\nSplash go the oars in the water.\nMerrily, merrily, merrily, merrily,\nlife is but a dream.\nThe sun is warm upon our backs.\nLook! A fish swims by. Hello, fish.\nLook! A duck says quack, quack.\nThe water is smooth and cool and green.\nRow, row, row your boat.\nRound the bend and home again.\nTie up the boat. Step out. Careful!\nGoodbye, little boat. Sleep on the water.",
  id: "Kayuh, kayuh, kayuh perahumu,\nperlahan menyusuri sungai.\nTarik dayungnya. Tarik, tarik, tarik.\nDayungnya berbunyi cebur di air.\nDengan senang, senang, senang, senang,\nhidup hanyalah mimpi.\nMatahari hangat di punggung kita.\nLihat! Seekor ikan berenang lewat. Halo, ikan.\nLihat! Seekor bebek berkata kwek, kwek.\nAirnya halus dan sejuk dan hijau.\nKayuh, kayuh, kayuh perahumu.\nMelewati tikungan dan pulang lagi.\nTambatkan perahunya. Turun. Hati-hati!\nSelamat malam, perahu kecil. Tidurlah di air.",
  v: [["row", "mengayuh perahu"], ["boat", "perahu"], ["stream", "sungai kecil"], ["oars", "dayung"], ["merrily", "dengan riang"]]
},
{
  t: "Pat-a-Cake",
  sc: "day",
  e: ["🎂","👏","🧑‍🍳","🌾"],
  src: "Mother Goose",
  en: "Pat-a-cake, pat-a-cake, baker's man.\nBake me a cake as fast as you can.\nMix the flour. Stir, stir, stir.\nAdd the milk. Pour, pour, pour.\nPat it and roll it and mark it with B.\nB is for baby. And that is you!\nInto the oven it goes. Whoosh!\nWait a little while. Warm and sweet.\nOut comes the cake. Smell it! Mmm.\nPat-a-cake, pat-a-cake, clap, clap, clap.\nOne piece for me, one piece for you.\nThank you, baker's man. Thank you!",
  id: "Tepuk kue, tepuk kue, pak tukang kue.\nBuatkan aku kue secepat yang kau bisa.\nCampur tepungnya. Aduk, aduk, aduk.\nTambah susunya. Tuang, tuang, tuang.\nTepuk, gulung, dan beri tanda huruf B.\nB untuk bayi. Dan itu kamu!\nMasuk ke oven. Wuush!\nTunggu sebentar. Hangat dan manis.\nKuenya keluar. Cium baunya! Mmm.\nTepuk kue, tepuk kue, tepuk, tepuk, tepuk.\nSatu potong untukku, satu potong untukmu.\nTerima kasih, pak tukang kue. Terima kasih!",
  v: [["bake", "memanggang"], ["flour", "tepung"], ["stir", "mengaduk"], ["oven", "oven"], ["cake", "kue"]]
},
{
  t: "This Little Pig",
  sc: "day",
  e: ["🐷","🦶","🏠","🔥"],
  src: "Mother Goose",
  en: "This little pig went to the market.\nOff he goes. Trot, trot, trot.\nThis little pig stayed home instead.\nHe sat beside the warm fire.\nThis little pig had roast beef.\nMmm. Yum, yum, yum.\nThis little pig had none at all.\nOh dear. Poor little pig.\nAnd this little pig cried wee, wee, wee!\nAll the way home. Wee, wee, wee!\nFive little pigs. Five little toes.\nCount them with me: one, two, three, four, five.\nWiggle them all. Wiggle, wiggle, wiggle!",
  id: "Babi kecil ini pergi ke pasar.\nIa pergi. Tap, tap, tap.\nBabi kecil ini tinggal di rumah saja.\nIa duduk di samping api yang hangat.\nBabi kecil ini makan daging panggang.\nMmm. Enak, enak, enak.\nBabi kecil ini tidak dapat apa-apa.\nAduh. Kasihan babi kecil.\nDan babi kecil ini menangis wii, wii, wii!\nSepanjang jalan pulang. Wii, wii, wii!\nLima babi kecil. Lima jari kaki kecil.\nHitung bersamaku: satu, dua, tiga, empat, lima.\nGoyangkan semuanya. Goyang, goyang, goyang!",
  v: [["market", "pasar"], ["none", "tidak ada sama sekali"], ["cried", "menangis"], ["wiggle", "menggoyang-goyang"], ["fire", "api"]]
},
{
  t: "Old MacDonald Had a Farm",
  sc: "day",
  e: ["🧑‍🌾","🐮","🦆","🐷","🐔"],
  src: "traditional song",
  en: "Old MacDonald had a farm.\nEe-i-ee-i-oh!\nAnd on that farm he had a cow.\nEe-i-ee-i-oh!\nWith a moo, moo here and a moo, moo there.\nHere a moo, there a moo, everywhere a moo, moo.\nAnd on that farm he had a duck.\nWith a quack, quack here and a quack, quack there.\nAnd on that farm he had a pig.\nWith an oink, oink here and an oink, oink there.\nAll the animals sing together now.\nMoo, quack, oink! What a noisy song!\nOld MacDonald had a farm. Ee-i-ee-i-oh!",
  id: "Pak MacDonald punya peternakan.\nI-a-i-a-o!\nDan di peternakan itu ada seekor sapi.\nI-a-i-a-o!\nDengan moo, moo di sini dan moo, moo di sana.\nDi sini moo, di sana moo, di mana-mana moo, moo.\nDan di peternakan itu ada seekor bebek.\nDengan kwek, kwek di sini dan kwek, kwek di sana.\nDan di peternakan itu ada seekor babi.\nDengan ngok, ngok di sini dan ngok, ngok di sana.\nSemua hewan bernyanyi bersama sekarang.\nMoo, kwek, ngok! Lagu yang ramai sekali!\nPak MacDonald punya peternakan. I-a-i-a-o!",
  v: [["farm", "peternakan"], ["cow", "sapi"], ["pig", "babi"], ["noisy", "ramai/berisik"], ["together", "bersama"]]
},
{
  t: "Jack and Jill",
  sc: "day",
  e: ["👦","👧","🪣","⛰️"],
  src: "Mother Goose",
  en: "Jack and Jill went up the hill,\nto fetch a pail of water.\nUp, up, up the little path.\nThe pail was empty. Now it is full.\nHeavy! Careful, Jack. Careful, Jill.\nBut Jack fell down and bumped his head.\nTumble, tumble, bump!\nAnd Jill came tumbling after him.\nRoll, roll, roll down the hill.\nUp they get. They are not hurt.\nMother puts cool water on Jack's head.\nAll better now. Off they go again.\nUp the hill, one careful step at a time.",
  id: "Jack dan Jill mendaki bukit,\nuntuk mengambil seember air.\nNaik, naik, naik jalan kecil itu.\nEmbernya kosong. Sekarang penuh.\nBerat! Hati-hati, Jack. Hati-hati, Jill.\nTapi Jack terjatuh dan kepalanya terbentur.\nGuling, guling, bruk!\nDan Jill jatuh berguling menyusulnya.\nGuling, guling, guling menuruni bukit.\nMereka berdiri lagi. Tidak terluka.\nIbu menaruh air sejuk di kepala Jack.\nSudah baikan. Mereka pergi lagi.\nMendaki bukit, satu langkah hati-hati setiap kali.",
  v: [["hill", "bukit"], ["pail", "ember"], ["fetch", "mengambil"], ["empty", "kosong"], ["tumbling", "jatuh berguling"]]
},
{
  t: "Little Miss Muffet",
  sc: "garden",
  e: ["👧","🕷️","🥣","🌿"],
  src: "Mother Goose",
  en: "Little Miss Muffet sat on a tuffet.\nA tuffet is a little grassy seat.\nShe was eating her curds and whey.\nSpoon, spoon. Mmm, good.\nAlong came a spider. Big and black.\nEight long legs. Tip, tip, tip.\nIt sat down right beside her.\nHello, said the spider. Nice day!\nOh! Miss Muffet jumped up. Away she ran!\nRun, run, run. Goodbye, spider.\nShe was not scared for very long.\nThe spider ate the curds instead.\nMmm, said the spider. Thank you, Miss Muffet.",
  id: "Nona Muffet kecil duduk di gundukan rumput.\nGundukan rumput itu tempat duduk kecil yang berumput.\nIa sedang makan dadih dan air susunya.\nSuap, suap. Mmm, enak.\nDatanglah seekor laba-laba. Besar dan hitam.\nDelapan kaki panjang. Tip, tip, tip.\nIa duduk tepat di sebelahnya.\nHalo, kata laba-laba. Hari yang cerah!\nOh! Nona Muffet melompat berdiri. Ia kabur!\nLari, lari, lari. Selamat jalan, laba-laba.\nIa tidak takut lama-lama.\nLaba-laba itu malah makan dadihnya.\nMmm, kata laba-laba. Terima kasih, Nona Muffet.",
  v: [["tuffet", "gundukan rumput untuk duduk"], ["spider", "laba-laba"], ["legs", "kaki"], ["beside", "di sebelah"], ["scared", "takut"]]
},
{
  t: "Three Little Kittens",
  sc: "snow",
  e: ["🐱","🧤","🥧","❄️"],
  src: "Eliza Lee Follen, 1833",
  en: "Three little kittens lost their mittens.\nOh no! Where did they go?\nThe snow is cold. Their paws are cold.\nThey began to cry. Mew, mew, mew!\nMother Cat said, then you shall have no pie.\nSo the kittens looked and looked and looked.\nUnder the chair. Behind the door.\nThere they are! We found our mittens!\nOne, two, three pairs of warm mittens.\nMew, mew! Now we can have pie.\nPurr, purr, purr, said the happy kittens.\nWarm paws, full tummies. Good night, kittens.",
  id: "Tiga anak kucing kehilangan sarung tangannya.\nOh tidak! Ke mana perginya?\nSaljunya dingin. Kakinya dingin.\nMereka mulai menangis. Meong, meong, meong!\nIbu Kucing berkata, kalau begitu tidak ada pai.\nJadi anak-anak kucing mencari dan mencari.\nDi bawah kursi. Di balik pintu.\nItu dia! Kami menemukan sarung tangan kami!\nSatu, dua, tiga pasang sarung tangan hangat.\nMeong, meong! Sekarang kami boleh makan pai.\nPrrr, prrr, prrr, kata anak-anak kucing yang senang.\nKaki hangat, perut penuh. Selamat malam, anak kucing.",
  v: [["kittens", "anak kucing"], ["mittens", "sarung tangan"], ["mew", "suara meong anak kucing"], ["pie", "pai"], ["paws", "kaki hewan"]]
},
{
  t: "Rock-a-Bye, Baby",
  sc: "night",
  e: ["🛏️","🌳","⭐","🍃"],
  src: "Mother Goose",
  en: "Rock-a-bye, baby, up in the treetop.\nWhen the wind blows, the cradle will rock.\nRock, rock, rock. Slow and gentle.\nThe green leaves whisper all around you.\nShhh, shhh, say the leaves.\nA star peeps through the branches. Hello, star.\nThe moon is watching from the sky.\nThe wind sings a soft little song.\nRock, rock. Your eyes are heavy now.\nDown will come baby, cradle and all,\ninto my arms. Safe and warm.\nI will always catch you. Always.\nRock-a-bye, baby. Sleep, sleep, sleep.",
  id: "Timang, timang, sayang, di puncak pohon.\nSaat angin bertiup, ayunan akan berayun.\nAyun, ayun, ayun. Lambat dan lembut.\nDedaunan hijau berbisik di sekelilingmu.\nSsst, ssst, kata dedaunan.\nSebuah bintang menengok dari sela dahan. Halo, bintang.\nBulan mengawasi dari langit.\nAngin menyanyikan lagu kecil yang lembut.\nAyun, ayun. Matamu sudah berat sekarang.\nTurunlah sayang, ayunan dan semuanya,\nke dalam pelukanku. Aman dan hangat.\nAku akan selalu menangkapmu. Selalu.\nTimang, timang, sayang. Tidur, tidur, tidur.",
  v: [["cradle", "ayunan bayi"], ["rock", "berayun"], ["whisper", "berbisik"], ["treetop", "puncak pohon"], ["safe", "aman"]]
},
{
  t: "Five Little Ducks",
  sc: "water",
  e: ["🦆","🐤","💧","⛰️"],
  src: "traditional nursery rhyme",
  en: "Five little ducks went out one day,\nover the hill and far away.\nMother Duck said, quack, quack, quack, quack!\nBut only four little ducks came back.\nFour little ducks went out to play.\nQuack, quack! Only three came back.\nThree little ducks. Then two. Then one.\nWhere are all the little ducks?\nMother Duck was sad. Quack, quack.\nShe called and called across the pond.\nThen — quack! quack! quack! quack! quack!\nAll five little ducks came swimming back!\nHooray! Home for supper. Home for bed.",
  id: "Lima anak bebek pergi keluar suatu hari,\nmelewati bukit dan jauh sekali.\nIbu Bebek berkata, kwek, kwek, kwek, kwek!\nTapi hanya empat anak bebek yang kembali.\nEmpat anak bebek pergi bermain.\nKwek, kwek! Hanya tiga yang kembali.\nTiga anak bebek. Lalu dua. Lalu satu.\nDi mana semua anak bebeknya?\nIbu Bebek sedih. Kwek, kwek.\nIa memanggil dan memanggil ke seberang kolam.\nLalu — kwek! kwek! kwek! kwek! kwek!\nKelima anak bebek datang berenang kembali!\nHore! Pulang untuk makan malam. Pulang untuk tidur.",
  v: [["ducks", "bebek"], ["hill", "bukit"], ["sad", "sedih"], ["pond", "kolam"], ["supper", "makan malam"]]
},
{
  t: "Are You Sleeping?",
  sc: "night",
  e: ["😴","🔔","🛏️","🌙"],
  src: "“Frère Jacques”, traditional",
  en: "Are you sleeping? Are you sleeping,\nBrother John? Brother John?\nMorning bells are ringing.\nMorning bells are ringing.\nDing, dang, dong. Ding, dang, dong.\nWake up, sleepy one. The sun is up.\nBut Brother John does not move.\nHe pulls the blanket over his head.\nDing, dang, dong! The bells ring again.\nOne eye opens. Then the other one.\nHe yawns a very big yawn. Aaah.\nHe stretches his arms up high.\nGood morning, Brother John! At last!\nNow he is ready for the day.\nDing, dang, dong. Ding, dang, dong.",
  id: "Apa kamu tidur? Apa kamu tidur,\nKakak John? Kakak John?\nLonceng pagi berbunyi.\nLonceng pagi berbunyi.\nDing, dang, dong. Ding, dang, dong.\nBangun, si pengantuk. Matahari sudah naik.\nTapi Kakak John tidak bergerak.\nIa menarik selimut ke atas kepalanya.\nDing, dang, dong! Loncengnya berbunyi lagi.\nSatu mata terbuka. Lalu yang satunya.\nIa menguap sangat lebar. Aaah.\nIa meregangkan tangannya tinggi-tinggi.\nSelamat pagi, Kakak John! Akhirnya!\nSekarang ia siap menyambut hari.\nDing, dang, dong. Ding, dang, dong.",
  v: [["sleeping", "tidur"], ["bells", "lonceng"], ["ringing", "berbunyi"], ["blanket", "selimut"], ["stretches", "meregangkan badan"]]
},
{
  t: "Sing a Song of Sixpence",
  sc: "day",
  e: ["🐦","🥧","👑","🍯"],
  src: "Mother Goose",
  en: "Sing a song of sixpence, a pocket full of rye.\nFour and twenty blackbirds baked in a pie!\nWhen the pie was opened, the birds began to sing.\nTweet, tweet, tweet! Out they flew!\nUp to the ceiling. Round the room.\nWhat a lovely dish to set before the king!\nThe king was in his counting house,\ncounting out his shiny money.\nThe queen was in the kitchen,\neating bread and honey. Mmm.\nThe maid was in the garden,\nhanging out the clothes to dry.\nA little blackbird sat beside her and sang.\nWhat a merry, noisy day!",
  id: "Nyanyikan lagu enam sen, sekantong penuh gandum.\nDua puluh empat burung hitam dipanggang dalam pai!\nSaat pai itu dibuka, burung-burung mulai bernyanyi.\nCuit, cuit, cuit! Mereka terbang keluar!\nNaik ke langit-langit. Berkeliling ruangan.\nSajian yang indah untuk dihidangkan kepada raja!\nRaja ada di ruang hitungannya,\nmenghitung uangnya yang berkilau.\nRatu ada di dapur,\nmakan roti dan madu. Mmm.\nPelayan ada di taman,\nmenjemur pakaian supaya kering.\nSeekor burung hitam kecil duduk di sebelahnya dan bernyanyi.\nHari yang riang dan ramai!",
  v: [["sixpence", "uang enam sen"], ["blackbirds", "burung hitam"], ["pie", "pai"], ["counting", "menghitung"], ["honey", "madu"]]
},
{
  t: "Wee Willie Winkie",
  sc: "night",
  e: ["🕯️","🏘️","🪟","😴"],
  src: "William Miller, 1841",
  en: "Wee Willie Winkie runs through the town.\nUp the street and down the street,\nin his long nightgown.\nTap, tap, tap on the window.\nCall, call, call through the lock.\nAre the children in their beds?\nIt is past eight o'clock!\nHe has a little candle. Flicker, flicker.\nHe looks in every window. Sleeping? Good.\nOne little baby is still awake.\nShhh, says Willie. Close your eyes.\nWee Willie Winkie tiptoes away.\nGood night, town. Good night, everyone.\nSleep well until the morning comes.",
  id: "Willie Winkie kecil berlari melintasi kota.\nNaik ke ujung jalan dan turun lagi,\ndengan baju tidurnya yang panjang.\nTok, tok, tok di jendela.\nPanggil, panggil, panggil melalui lubang kunci.\nApakah anak-anak sudah di tempat tidur?\nSudah lewat jam delapan!\nIa membawa lilin kecil. Kelap, kelip.\nIa melihat ke setiap jendela. Sudah tidur? Bagus.\nSatu bayi kecil masih terjaga.\nSsst, kata Willie. Pejamkan matamu.\nWillie Winkie kecil berjingkat pergi.\nSelamat malam, kota. Selamat malam, semuanya.\nTidur yang nyaman sampai pagi datang.",
  v: [["town", "kota"], ["candle", "lilin"], ["lock", "lubang kunci"], ["awake", "terjaga/belum tidur"], ["tiptoes", "berjalan berjingkat"]]
},
{
  t: "The Owl and the Pussycat",
  sc: "water",
  e: ["🦉","🐱","⛵","🎸","🌙"],
  src: "Edward Lear, 1871",
  en: "The owl and the pussycat went to sea\nin a beautiful pea-green boat.\nThey took some honey and plenty of money,\nwrapped up in a five-pound note.\nThe owl looked up at the stars above,\nand sang to a small guitar.\nOh lovely pussy! Oh pussy, my love,\nwhat a beautiful pussy you are!\nThe waves went splash. The boat went rock.\nThe moon came up. So round, so white.\nThey danced on the sand, hand in hand,\nby the light of the silver moon.\nGood night, owl. Good night, pussycat.",
  id: "Burung hantu dan kucing berlayar ke laut\ndalam perahu hijau kacang yang indah.\nMereka membawa madu dan uang yang banyak,\ndibungkus dalam lembar lima pon.\nBurung hantu memandang bintang-bintang di atas,\ndan bernyanyi diiringi gitar kecil.\nOh kucing yang cantik! Oh kucing, sayangku,\nkamu kucing yang cantik sekali!\nOmbaknya berdebur. Perahunya berayun.\nBulan terbit. Bundar sekali, putih sekali.\nMereka menari di pasir, bergandengan tangan,\ndi bawah cahaya bulan yang keperakan.\nSelamat malam, burung hantu. Selamat malam, kucing.",
  v: [["owl", "burung hantu"], ["sea", "laut"], ["honey", "madu"], ["guitar", "gitar"], ["waves", "ombak"]]
},
{
  t: "Wynken, Blynken and Nod",
  sc: "night",
  e: ["👟","⭐","🌊","🌙"],
  src: "Eugene Field, 1889",
  en: "Wynken, Blynken and Nod one night\nsailed off in a wooden shoe.\nThey sailed on a river of misty light,\ninto a sea of dew.\nWhere are you going? asked the moon.\nWe are fishing for stars, they said.\nThey threw their nets up to the sky.\nSwish! Down came the little stars.\nSo they sailed all night, the three of them,\nrocking in the wooden shoe.\nAnd Wynken and Blynken are two little eyes,\nand Nod is a little head.\nAnd the wooden shoe is your own soft bed.\nShhh. Sail away, little one.",
  id: "Wynken, Blynken dan Nod suatu malam\nberlayar dengan sepatu kayu.\nMereka berlayar di sungai cahaya berkabut,\nmenuju laut embun.\nMau ke mana kalian? tanya bulan.\nKami memancing bintang, kata mereka.\nMereka melempar jaring ke langit.\nSyuut! Bintang-bintang kecil turun.\nJadi mereka berlayar sepanjang malam, mereka bertiga,\nberayun di dalam sepatu kayu.\nDan Wynken dan Blynken adalah dua mata kecil,\ndan Nod adalah kepala kecil.\nDan sepatu kayu itu adalah tempat tidurmu yang lembut.\nSsst. Berlayarlah, sayang.",
  v: [["sailed", "berlayar"], ["wooden", "dari kayu"], ["misty", "berkabut"], ["nets", "jaring"], ["dew", "embun"]]
},
{
  t: "The Tortoise and the Hare",
  sc: "garden",
  e: ["🐢","🐇","🏁","🌳"],
  src: "Aesop's Fables",
  en: "A hare could run very, very fast.\nA tortoise could only walk. Slow, slow, slow.\nI can beat you in a race, said the hare.\nLet us try, said the tortoise. Ready, steady, go!\nOff went the hare. Zoom! Away he ran.\nStep, step, step went the tortoise.\nThe hare looked back. Where is the tortoise?\nFar behind. I have time for a nap.\nSo the hare lay down and slept. Zzz.\nStep, step, step. The tortoise kept going.\nPast the sleeping hare. Almost there!\nThe hare woke up. Oh no! Too late!\nSlow and steady wins the race.",
  id: "Seekor kelinci bisa berlari sangat, sangat cepat.\nSeekor kura-kura hanya bisa berjalan. Lambat, lambat, lambat.\nAku bisa mengalahkanmu dalam lomba, kata kelinci.\nAyo coba, kata kura-kura. Siap, sedia, mulai!\nKelinci pun melesat. Wuush! Ia berlari jauh.\nLangkah, langkah, langkah kura-kura berjalan.\nKelinci melihat ke belakang. Di mana kura-kura?\nJauh di belakang. Aku ada waktu untuk tidur siang.\nJadi kelinci berbaring dan tertidur. Zzz.\nLangkah, langkah, langkah. Kura-kura terus berjalan.\nMelewati kelinci yang tidur. Hampir sampai!\nKelinci terbangun. Oh tidak! Sudah terlambat!\nLambat tapi tekun memenangkan lomba.",
  v: [["hare", "kelinci liar"], ["tortoise", "kura-kura darat"], ["race", "lomba lari"], ["nap", "tidur siang"], ["steady", "tekun dan mantap"]]
},
{
  t: "The Lion and the Mouse",
  sc: "day",
  e: ["🦁","🐭","🕸️","🌾"],
  src: "Aesop's Fables",
  en: "A big lion was fast asleep in the sun.\nA little mouse ran over his paw. Squeak!\nThe lion woke up. Roar! Who is that?\nHe caught the mouse in his big paw.\nPlease let me go, said the little mouse.\nOne day I may help you.\nHelp me? You are so small! Ha, ha!\nBut the lion opened his paw. Off ran the mouse.\nSome days later, the lion was caught in a net.\nRoar! Roar! He could not get out.\nThe little mouse heard him. Here I come!\nNibble, nibble, nibble. The net broke open.\nThank you, little friend, said the lion.\nEven a small friend can be a big help.",
  id: "Seekor singa besar tertidur pulas di bawah matahari.\nSeekor tikus kecil berlari di atas kakinya. Cit!\nSinga itu terbangun. Rrraum! Siapa itu?\nIa menangkap tikus itu dengan kakinya yang besar.\nTolong lepaskan aku, kata tikus kecil.\nSuatu hari mungkin aku bisa menolongmu.\nMenolongku? Kamu kecil sekali! Ha, ha!\nTapi singa membuka kakinya. Tikus itu berlari pergi.\nBeberapa hari kemudian, singa terjerat jaring.\nRrraum! Rrraum! Ia tidak bisa keluar.\nTikus kecil mendengarnya. Aku datang!\nKriuk, kriuk, kriuk. Jaringnya terbuka.\nTerima kasih, kawan kecil, kata singa.\nKawan yang kecil pun bisa jadi penolong besar.",
  v: [["lion", "singa"], ["mouse", "tikus"], ["roar", "auman"], ["net", "jaring"], ["nibble", "menggerogoti"]]
},
{
  t: "The Crow and the Pitcher",
  sc: "day",
  e: ["🐦‍⬛","🏺","🪨","💧"],
  src: "Aesop's Fables",
  en: "A thirsty crow flew over the hot fields.\nWater! I need water, said the crow.\nThen he saw a tall pitcher on the ground.\nInside was a little water. Just a little.\nHe put his beak in. Too far down!\nHe could not reach it. Caw! Caw!\nThen the clever crow had a good idea.\nHe picked up a small stone. Plop!\nAnother stone. Plop! And another. Plop, plop.\nThe water came up higher and higher.\nNow he could reach it. Sip, sip, sip.\nAhh. Thank you, little stones.\nA good idea is better than strong wings.",
  id: "Seekor gagak yang kehausan terbang di atas ladang yang panas.\nAir! Aku butuh air, kata gagak.\nLalu ia melihat kendi tinggi di tanah.\nDi dalamnya ada sedikit air. Sedikit saja.\nIa memasukkan paruhnya. Terlalu jauh ke bawah!\nIa tidak bisa menjangkaunya. Kaak! Kaak!\nLalu gagak yang cerdik itu punya ide bagus.\nIa mengambil sebutir batu kecil. Plung!\nSatu batu lagi. Plung! Dan satu lagi. Plung, plung.\nAirnya naik makin tinggi dan makin tinggi.\nSekarang ia bisa menjangkaunya. Seruput, seruput, seruput.\nAhh. Terima kasih, batu-batu kecil.\nIde yang bagus lebih baik daripada sayap yang kuat.",
  v: [["thirsty", "kehausan"], ["crow", "gagak"], ["pitcher", "kendi"], ["beak", "paruh"], ["clever", "cerdik"]]
},
{
  t: "The North Wind and the Sun",
  sc: "day",
  e: ["🌬️","☀️","🧥","🚶"],
  src: "Aesop's Fables",
  en: "The north wind and the sun had an argument.\nI am stronger than you, said the wind.\nNo, I am stronger, said the warm sun.\nLook. A man is walking down the road.\nWhoever takes off his coat is stronger.\nThe wind blew first. Whoosh! Whoosh!\nCold, cold, cold. Whooooosh!\nBut the man held his coat tight.\nThe colder it got, the tighter he held it.\nThen the sun shone. Warm and soft.\nWarmer. Warmer. Warmer still.\nThe man smiled and took off his coat.\nGentle is stronger than strong, said the sun.",
  id: "Angin utara dan matahari berdebat.\nAku lebih kuat darimu, kata angin.\nTidak, aku yang lebih kuat, kata matahari yang hangat.\nLihat. Ada orang berjalan di jalan itu.\nSiapa yang bisa membuatnya melepas mantel, dia yang lebih kuat.\nAngin bertiup lebih dulu. Wuush! Wuush!\nDingin, dingin, dingin. Wuuuush!\nTapi orang itu memegang mantelnya kuat-kuat.\nSemakin dingin, semakin kencang ia memegangnya.\nLalu matahari bersinar. Hangat dan lembut.\nLebih hangat. Lebih hangat. Makin hangat lagi.\nOrang itu tersenyum dan melepas mantelnya.\nLembut lebih kuat daripada keras, kata matahari.",
  v: [["wind", "angin"], ["argument", "perdebatan"], ["coat", "mantel"], ["tight", "kuat/rapat"], ["gentle", "lembut"]]
},
{
  t: "The Little Red Hen",
  sc: "day",
  e: ["🐔","🌾","🍞","🐱","🐶"],
  src: "English folk tale",
  en: "A little red hen found some grains of wheat.\nWho will help me plant this wheat?\nNot I, said the lazy cat.\nNot I, said the sleepy dog.\nNot I, said the noisy duck.\nThen I will do it myself, said the hen.\nShe planted the wheat. She watered it.\nThe wheat grew tall and golden.\nWho will help me bake the bread?\nNot I! Not I! Not I!\nSo she baked it herself. Mmm. Warm bread.\nNow who will help me eat it?\nMe! Me! Me! said the three friends.\nNo, said the hen. I will eat it myself.",
  id: "Seekor ayam merah kecil menemukan beberapa butir gandum.\nSiapa yang mau membantuku menanam gandum ini?\nBukan aku, kata kucing yang malas.\nBukan aku, kata anjing yang mengantuk.\nBukan aku, kata bebek yang berisik.\nKalau begitu aku kerjakan sendiri, kata si ayam.\nIa menanam gandumnya. Ia menyiraminya.\nGandumnya tumbuh tinggi dan keemasan.\nSiapa yang mau membantuku memanggang roti?\nBukan aku! Bukan aku! Bukan aku!\nJadi ia memanggangnya sendiri. Mmm. Roti hangat.\nSekarang siapa yang mau membantuku memakannya?\nAku! Aku! Aku! kata ketiga temannya.\nTidak, kata si ayam. Aku akan memakannya sendiri.",
  v: [["hen", "ayam betina"], ["wheat", "gandum"], ["plant", "menanam"], ["lazy", "malas"], ["bake", "memanggang"]]
},
{
  t: "The Enormous Turnip",
  sc: "garden",
  e: ["🥬","👨‍🌾","👩‍🌾","🐶","🐭"],
  src: "Russian folk tale",
  en: "A man planted a tiny turnip seed.\nGrow, little turnip, grow!\nAnd it grew. And grew. And grew!\nWhat an enormous turnip! Time to pull it.\nThe man pulled. Pull, pull, pull. It would not come.\nThe woman held the man. Pull, pull!\nThe girl held the woman. Pull, pull!\nThe dog held the girl. Pull, pull!\nThe cat held the dog. Pull, pull!\nThen one tiny mouse held the cat.\nPull! Pull! Pull!\nUp came the enormous turnip! Whoosh!\nEverybody fell down. Bump! And laughed.\nSoup for everyone tonight. Even the mouse.",
  id: "Seorang pria menanam sebutir benih lobak kecil.\nTumbuhlah, lobak kecil, tumbuh!\nDan ia tumbuh. Dan tumbuh. Dan tumbuh!\nLobak yang besar sekali! Waktunya dicabut.\nPria itu menarik. Tarik, tarik, tarik. Tidak mau keluar.\nWanita itu memegang pria itu. Tarik, tarik!\nAnak perempuan memegang wanita itu. Tarik, tarik!\nAnjing memegang anak perempuan itu. Tarik, tarik!\nKucing memegang anjing itu. Tarik, tarik!\nLalu seekor tikus kecil memegang kucing itu.\nTarik! Tarik! Tarik!\nLobak besar itu tercabut! Wuush!\nSemuanya terjatuh. Bruk! Dan tertawa.\nSup untuk semua malam ini. Termasuk si tikus.",
  v: [["turnip", "lobak"], ["seed", "benih"], ["enormous", "besar sekali"], ["pull", "menarik/mencabut"], ["soup", "sup"]]
},
{
  t: "Goldilocks and the Three Bears",
  sc: "day",
  e: ["🐻","👧","🥣","🪑","🛏️"],
  src: "Robert Southey, 1837",
  en: "Three bears lived in a little house in the woods.\nOne day they went out for a walk.\nA girl called Goldilocks came to the door.\nKnock, knock. Nobody home. She went inside.\nThree bowls of porridge on the table.\nToo hot! Too cold! This one is just right.\nShe ate it all up. Mmm.\nThree chairs. Too big! Too big! Crack!\nThree beds. Too hard! Too soft!\nThis little bed is just right. Zzz.\nHome came the bears. Who ate my porridge?\nWho is in my bed? Growl!\nGoldilocks woke up. Oh! Sorry, bears!\nOut the window and home she ran.",
  id: "Tiga ekor beruang tinggal di rumah kecil di hutan.\nSuatu hari mereka pergi berjalan-jalan.\nSeorang anak perempuan bernama Goldilocks datang ke pintu.\nTok, tok. Tidak ada orang. Ia masuk ke dalam.\nTiga mangkuk bubur di atas meja.\nTerlalu panas! Terlalu dingin! Yang ini pas.\nIa memakannya sampai habis. Mmm.\nTiga kursi. Terlalu besar! Terlalu besar! Krak!\nTiga tempat tidur. Terlalu keras! Terlalu lembut!\nTempat tidur kecil ini pas sekali. Zzz.\nBeruang-beruang pulang. Siapa yang makan buburku?\nSiapa yang ada di tempat tidurku? Grr!\nGoldilocks terbangun. Oh! Maaf, beruang!\nIa kabur lewat jendela dan pulang.",
  v: [["bears", "beruang"], ["porridge", "bubur"], ["bowls", "mangkuk"], ["chairs", "kursi"], ["growl", "geraman"]]
},
{
  t: "The Ugly Duckling",
  sc: "snow",
  e: ["🦢","🥚","🐤","❄️"],
  src: "Hans Christian Andersen, 1843",
  en: "In the reeds, five eggs began to crack.\nCrack, crack! Out came four yellow ducklings.\nThe last egg was big. Crack! Out came a grey bird.\nYou are not like us, said the others.\nThe grey bird was sad. He walked away.\nWinter came. Snow, snow, snow. So cold.\nHe slept alone in the white reeds.\nThen spring came. The ice melted. Drip, drip.\nHe went to the water and looked down.\nWho is that? A beautiful white swan!\nIt is me! I am a swan!\nThree big swans came swimming to him.\nWelcome, brother, they said. Come with us.\nAnd he was happy. So very happy.",
  id: "Di rerumputan air, lima telur mulai pecah.\nKrak, krak! Keluarlah empat anak bebek kuning.\nTelur terakhir besar. Krak! Keluarlah seekor burung kelabu.\nKamu tidak seperti kami, kata yang lain.\nBurung kelabu itu sedih. Ia berjalan pergi.\nMusim dingin datang. Salju, salju, salju. Dingin sekali.\nIa tidur sendirian di rerumputan yang putih.\nLalu musim semi datang. Esnya mencair. Tes, tes.\nIa pergi ke air dan menunduk melihat ke bawah.\nSiapa itu? Seekor angsa putih yang indah!\nItu aku! Aku seekor angsa!\nTiga angsa besar datang berenang ke arahnya.\nSelamat datang, saudara, kata mereka. Ikutlah dengan kami.\nDan ia pun bahagia. Bahagia sekali.",
  v: [["eggs", "telur"], ["ducklings", "anak bebek"], ["winter", "musim dingin"], ["melted", "mencair"], ["swan", "angsa"]]
},
{
  t: "Little Boy Blue",
  sc: "day",
  e: ["👦","📯","🐑","🐮","🌾"],
  src: "Mother Goose",
  en: "Little Boy Blue, come blow your horn!\nThe sheep are in the meadow, eating grass.\nThe cows are in the corn. Oh dear!\nWhere is the little boy who looks after them?\nHe is under the haystack, fast asleep.\nZzz. Zzz. What a sleepy boy.\nWake up, Boy Blue! The animals are hungry.\nHe opens one eye. Then two eyes.\nHe picks up his horn. Toot, toot, toot!\nThe sheep look up. Baa!\nThe cows look up. Moo!\nHome they all go, one behind the other.\nWell blown, Boy Blue. Now you may sleep.",
  id: "Anak Lelaki Biru, ayo tiup terompetmu!\nBiri-biri ada di padang, sedang makan rumput.\nSapi-sapi ada di ladang jagung. Aduh!\nDi mana anak lelaki yang menjaga mereka?\nIa di bawah tumpukan jerami, tertidur pulas.\nZzz. Zzz. Anak yang mengantuk sekali.\nBangun, Anak Biru! Hewan-hewan sedang lapar.\nIa membuka satu mata. Lalu dua mata.\nIa mengambil terompetnya. Tuut, tuut, tuut!\nBiri-biri menoleh ke atas. Mbee!\nSapi-sapi menoleh ke atas. Moo!\nMereka semua pulang, satu di belakang yang lain.\nBagus tiupanmu, Anak Biru. Sekarang kamu boleh tidur.",
  v: [["horn", "terompet"], ["meadow", "padang rumput"], ["haystack", "tumpukan jerami"], ["asleep", "tertidur"], ["hungry", "lapar"]]
},
{
  t: "Two Little Dickie Birds",
  sc: "garden",
  e: ["🐦","🐤","🧱","🌿"],
  src: "Mother Goose",
  en: "Two little dickie birds sat on a wall.\nOne named Peter, one named Paul.\nPeter has brown wings. Paul has grey.\nFly away, Peter! Whoosh! He is gone.\nFly away, Paul! Whoosh! Gone too.\nThe wall is empty. Where are they?\nUp in the sky. Round and round.\nCome back, Peter! Come back, Paul!\nHere they come. Flap, flap, flap.\nDown on the wall again. Hello, birds!\nThey sing a little song together.\nChirp, chirp. Tweet, tweet, tweet.\nTwo little dickie birds, side by side.",
  id: "Dua burung kecil bertengger di dinding.\nSatu bernama Peter, satu bernama Paul.\nPeter bersayap cokelat. Paul kelabu.\nTerbanglah, Peter! Wuush! Ia pergi.\nTerbanglah, Paul! Wuush! Pergi juga.\nDindingnya kosong. Di mana mereka?\nDi atas langit. Berputar dan berputar.\nKembalilah, Peter! Kembalilah, Paul!\nItu mereka datang. Kepak, kepak, kepak.\nTurun ke dinding lagi. Halo, burung!\nMereka menyanyikan lagu kecil bersama.\nCuit, cuit. Cit, cit, cit.\nDua burung kecil, bersebelahan.",
  v: [["wall", "dinding"], ["wings", "sayap"], ["empty", "kosong"], ["flap", "mengepakkan sayap"], ["together", "bersama"]]
},
{
  t: "Round and Round the Garden",
  sc: "garden",
  e: ["🧸","✋","🌼","🌿"],
  src: "traditional tickling rhyme",
  en: "Round and round the garden goes the teddy bear.\nThe teddy bear walks so slowly.\nRound and round. Round your little palm.\nSlowly, slowly. Tickle, tickle, tickle.\nOne step. Two steps. Up your arm!\nUp, up, up. Nearly there.\nTickle under there! Ooh!\nYou laugh and laugh. Ha, ha, ha!\nAgain? All right. Round and round.\nRound the garden one more time.\nOne step. Two steps. Here I come!\nTickle, tickle under your chin!\nMore! More! One more time!\nRound and round the garden. Tickle!",
  id: "Beruang teddy berjalan berkeliling taman.\nBeruang teddy berjalan sangat lambat.\nBerkeliling dan berkeliling. Di telapak tangan kecilmu.\nPerlahan, perlahan. Cekikik, cekikik, cekikik.\nSatu langkah. Dua langkah. Naik ke lenganmu!\nNaik, naik, naik. Hampir sampai.\nCekikik di bawah sini! Ooh!\nKamu tertawa dan tertawa. Ha, ha, ha!\nLagi? Baiklah. Berkeliling dan berkeliling.\nBerkeliling taman sekali lagi.\nSatu langkah. Dua langkah. Aku datang!\nCekikik, cekikik di bawah dagumu!\nLagi! Lagi! Sekali lagi!\nBerkeliling dan berkeliling taman. Cekikik!",
  v: [["garden", "taman"], ["slowly", "perlahan"], ["palm", "telapak tangan"], ["tickle", "menggelitik"], ["laugh", "tertawa"]]
},
{
  t: "Head, Shoulders, Knees and Toes",
  sc: "day",
  e: ["🧑‍🦱","🖐️","🦵","🦶"],
  src: "traditional song",
  en: "Head, shoulders, knees and toes,\nknees and toes!\nHead, shoulders, knees and toes,\nknees and toes!\nTouch your head. Pat, pat, pat.\nTouch your shoulders. Up so high.\nBend down low. Touch your knees.\nLower still. Touch your toes!\nAnd eyes and ears and mouth and nose.\nBlink your eyes. Wiggle your nose.\nCan you do it with your eyes shut?\nNow faster! Head, shoulders, knees, toes!\nFaster, faster! Oh, so silly!\nNow slowly. Head. Shoulders. Knees. Toes.\nAll done. Sit down. Well done!",
  id: "Kepala, bahu, lutut dan kaki,\nlutut dan kaki!\nKepala, bahu, lutut dan kaki,\nlutut dan kaki!\nSentuh kepalamu. Tepuk, tepuk, tepuk.\nSentuh bahumu. Tinggi sekali.\nMembungkuk ke bawah. Sentuh lututmu.\nLebih rendah lagi. Sentuh jari kakimu!\nDan mata dan telinga dan mulut dan hidung.\nKedipkan matamu. Goyangkan hidungmu.\nBisakah sambil memejamkan mata?\nSekarang lebih cepat! Kepala, bahu, lutut, kaki!\nLebih cepat, lebih cepat! Oh, lucu sekali!\nSekarang perlahan. Kepala. Bahu. Lutut. Kaki.\nSelesai. Duduk. Hebat!",
  v: [["head", "kepala"], ["shoulders", "bahu"], ["knees", "lutut"], ["bend", "membungkuk"], ["silly", "lucu/konyol"]]
},
{
  t: "Five Little Monkeys",
  sc: "night",
  e: ["🐵","🛏️","🩺","🍌"],
  src: "traditional nursery rhyme",
  en: "Five little monkeys jumping on the bed.\nBoing, boing, boing! Up and down!\nOne fell off and bumped his head.\nOh dear! Mama called the doctor.\nThe doctor said, no more monkeys jumping!\nFour little monkeys jumping on the bed.\nBoing, boing! One fell off. Bump!\nThree little monkeys. Then two. Then one.\nBoing! Off he goes. Bump!\nNo more monkeys jumping on the bed.\nNow they all lie down. Quiet, quiet.\nFive little monkeys, sleeping in the bed.\nGood night, monkeys. Sleep. No more jumping.",
  id: "Lima monyet kecil melompat-lompat di tempat tidur.\nBoing, boing, boing! Naik dan turun!\nSatu terjatuh dan kepalanya terbentur.\nAduh! Mama memanggil dokter.\nDokter berkata, tidak boleh melompat lagi!\nEmpat monyet kecil melompat di tempat tidur.\nBoing, boing! Satu terjatuh. Bruk!\nTiga monyet kecil. Lalu dua. Lalu satu.\nBoing! Ia jatuh juga. Bruk!\nTidak ada lagi monyet melompat di tempat tidur.\nSekarang mereka semua berbaring. Tenang, tenang.\nLima monyet kecil, tertidur di tempat tidur.\nSelamat malam, monyet. Tidurlah. Jangan melompat lagi.",
  v: [["monkeys", "monyet"], ["jumping", "melompat-lompat"], ["bumped", "terbentur"], ["doctor", "dokter"], ["bed", "tempat tidur"]]
},
{
  t: "Bye, Baby Bunting",
  sc: "night",
  e: ["👶","🔥","🫖","🌙"],
  src: "Mother Goose",
  en: "Bye, baby bunting.\nFather has gone hunting.\nMother has gone to milk the cow.\nSister has gone to pick berries.\nBrother has gone to fetch water.\nAnd baby stays right here with me.\nWrapped in a soft warm skin.\nRock, rock. So quiet in the house.\nThe fire is warm. Crackle, crackle.\nThe kettle sings a little song.\nSoon they will all come home.\nFather, mother, sister, brother. All of them.\nBut now it is just you and me.\nBye, baby bunting. Sleep, sleep, sleep.",
  id: "Selamat tidur, bayi kecil.\nAyah pergi berburu.\nIbu pergi memerah susu sapi.\nKakak perempuan pergi memetik buah beri.\nKakak lelaki pergi mengambil air.\nDan bayi tinggal di sini bersamaku.\nTerbungkus kulit lembut yang hangat.\nAyun, ayun. Sepi sekali di rumah.\nApinya hangat. Kretek, kretek.\nCerek menyanyikan lagu kecil.\nSebentar lagi mereka semua pulang.\nAyah, ibu, kakak perempuan, kakak lelaki. Semuanya.\nTapi sekarang hanya ada kamu dan aku.\nSelamat tidur, bayi kecil. Tidur, tidur, tidur.",
  v: [["hunting", "berburu"], ["berries", "buah beri"], ["rock", "berayun"], ["crackle", "bunyi kretek api"], ["kettle", "cerek"]]
},
{
  t: "Sleep, Baby, Sleep",
  sc: "night",
  e: ["🐑","🌙","⭐","🌳"],
  src: "traditional lullaby",
  en: "Sleep, baby, sleep.\nOutside the lambs are sleeping.\nThe big white sheep are keeping watch.\nThe little stars are the lambs of the sky.\nThe moon is the shepherd. Hello, moon.\nSleep, baby, sleep.\nThe tall trees stand so still.\nNot one leaf is moving now.\nThe wind has gone to bed as well.\nEven the river sleeps. Shhh.\nYour dreams are soft and warm.\nClose your eyes, my little one.\nI am here. I will stay.\nSleep, baby, sleep. Sleep, sleep, sleep.",
  id: "Tidurlah, sayang, tidurlah.\nDi luar anak-anak domba sudah tidur.\nDomba putih yang besar sedang berjaga.\nBintang-bintang kecil adalah anak domba di langit.\nBulan adalah gembalanya. Halo, bulan.\nTidurlah, sayang, tidurlah.\nPohon-pohon tinggi berdiri sangat diam.\nTak satu daun pun bergerak sekarang.\nAngin pun sudah pergi tidur.\nBahkan sungai ikut tidur. Ssst.\nMimpimu lembut dan hangat.\nPejamkan matamu, sayangku.\nAku di sini. Aku akan tinggal.\nTidurlah, sayang, tidurlah. Tidur, tidur, tidur.",
  v: [["lambs", "anak domba"], ["shepherd", "gembala"], ["still", "diam tak bergerak"], ["river", "sungai"], ["dreams", "mimpi"]]
},
{
  t: "Star Light, Star Bright",
  sc: "night",
  e: ["⭐","🌠","🏡","🌙"],
  src: "traditional nursery rhyme",
  en: "Star light, star bright,\nfirst star I see tonight.\nThere it is! Right above the tree.\nOne little light in all that dark.\nI wish I may, I wish I might,\nhave the wish I wish tonight.\nWhat shall we wish for, little one?\nA sunny day? A big red ball?\nOr just this: a happy home.\nThat wish came true already. Look around.\nThank you, first star. Thank you.\nMore stars are coming now. Two. Three.\nGood night, star light. Good night, star bright.",
  id: "Cahaya bintang, bintang terang,\nbintang pertama yang kulihat malam ini.\nItu dia! Tepat di atas pohon.\nSatu cahaya kecil di tengah gelap.\nAku berharap, aku memohon,\nsemoga permintaanku malam ini terwujud.\nKita mau minta apa, sayang?\nHari yang cerah? Bola merah besar?\nAtau ini saja: rumah yang bahagia.\nPermintaan itu sudah terwujud. Lihat sekeliling.\nTerima kasih, bintang pertama. Terima kasih.\nBintang lain mulai datang. Dua. Tiga.\nSelamat malam, cahaya bintang. Selamat malam, bintang terang.",
  v: [["wish", "harapan/permintaan"], ["tonight", "malam ini"], ["bright", "terang"], ["dark", "gelap"], ["true", "menjadi nyata"]]
},
{
  t: "Pussycat, Pussycat",
  sc: "day",
  e: ["🐈","👑","🐭","🥛"],
  src: "Mother Goose",
  en: "Pussycat, pussycat, where have you been?\nI have been to London to see the Queen.\nAll that way? On your four little paws?\nPussycat, pussycat, what did you there?\nI frightened a little mouse under her chair!\nSqueak! said the mouse. Away it ran.\nThe Queen laughed. Ha, ha, ha!\nShe gave the cat a bowl of cream.\nLick, lick, lick. All gone. Mmm.\nThen home came the cat. So far to walk.\nNow she sleeps beside the fire.\nPurr, purr, purr. What a day.\nGood night, travelling pussycat.",
  id: "Kucing, kucing, kamu dari mana?\nAku pergi ke London untuk menemui Ratu.\nSejauh itu? Dengan empat kaki kecilmu?\nKucing, kucing, apa yang kamu lakukan di sana?\nAku menakuti seekor tikus kecil di bawah kursinya!\nCit! kata tikus itu. Ia kabur.\nRatu tertawa. Ha, ha, ha!\nIa memberi kucing itu semangkuk krim.\nJilat, jilat, jilat. Habis semua. Mmm.\nLalu kucing itu pulang. Jauh sekali jalannya.\nSekarang ia tidur di samping api.\nPrrr, prrr, prrr. Hari yang luar biasa.\nSelamat malam, kucing petualang.",
  v: [["Queen", "Ratu"], ["paws", "kaki hewan"], ["frightened", "menakuti"], ["cream", "krim susu"], ["purr", "dengkuran kucing"]]
},
{
  t: "Ride a Cock Horse",
  sc: "day",
  e: ["🐴","👗","🔔","💍"],
  src: "Mother Goose",
  en: "Ride a cock horse to Banbury Cross.\nUp on my knee. Here we go!\nBumpety, bumpety, bump. Trot, trot, trot.\nTo see a fine lady upon a white horse.\nHer horse has bells upon its toes.\nRing, ring, ring. Can you hear them?\nShe has rings upon her fingers too.\nShine, shine. So pretty.\nShe shall have music wherever she goes.\nLa, la, la. Ring, ring, ring.\nFaster now! Bumpety, bumpety, bump!\nSlower. Slower. Whoa, horse. Stop.\nDown you come. What a good ride!",
  id: "Berkuda-kudaan ke Banbury Cross.\nNaik ke atas lututku. Ayo jalan!\nDug, dug, dug. Tap, tap, tap.\nMelihat nyonya cantik di atas kuda putih.\nKudanya punya lonceng di kakinya.\nKring, kring, kring. Kamu dengar?\nIa juga punya cincin di jarinya.\nBerkilau, berkilau. Cantik sekali.\nAda musik di mana pun ia pergi.\nLa, la, la. Kring, kring, kring.\nLebih cepat! Dug, dug, dug!\nLebih lambat. Lebih lambat. Wooo, kuda. Berhenti.\nTurun, yuk. Tunggangan yang menyenangkan!",
  v: [["ride", "menunggang/tunggangan"], ["trot", "berlari kecil seperti kuda"], ["bells", "lonceng"], ["rings", "cincin"], ["music", "musik"]]
},
{
  t: "One, Two, Buckle My Shoe",
  sc: "day",
  e: ["👟","🚪","🪵","🐔"],
  src: "Mother Goose",
  en: "One, two, buckle my shoe.\nThree, four, knock at the door.\nKnock, knock! Who is there?\nFive, six, pick up sticks.\nOne stick. Two sticks. A big pile!\nSeven, eight, lay them straight.\nStraight in a row. Just so.\nNine, ten, a big fat hen.\nCluck, cluck! Good morning, hen.\nCount them all again with me.\nOne, two, three, four, five.\nSix, seven, eight, nine, ten.\nTen little fingers. Ten little toes.\nWiggle them all. Wiggle, wiggle!\nWell counted, clever baby!",
  id: "Satu, dua, pasang gesper sepatuku.\nTiga, empat, ketuk pintunya.\nTok, tok! Siapa di sana?\nLima, enam, pungut kayu-kayunya.\nSatu kayu. Dua kayu. Tumpukan besar!\nTujuh, delapan, susun dengan lurus.\nLurus dalam satu baris. Nah, begitu.\nSembilan, sepuluh, seekor ayam yang gemuk.\nPetok, petok! Selamat pagi, ayam.\nHitung semuanya lagi bersamaku.\nSatu, dua, tiga, empat, lima.\nEnam, tujuh, delapan, sembilan, sepuluh.\nSepuluh jari tangan. Sepuluh jari kaki.\nGoyangkan semuanya. Goyang, goyang!\nHitungannya bagus, bayi cerdas!",
  v: [["buckle", "gesper"], ["knock", "mengetuk"], ["sticks", "kayu kecil"], ["straight", "lurus"], ["hen", "ayam betina"]]
},
{
  t: "Rain, Rain, Go Away",
  sc: "rain",
  e: ["🌧️","🧱","📖","🪣"],
  src: "Mother Goose",
  en: "Rain, rain, go away.\nCome again another day.\nLittle baby wants to play.\nRain, rain, go away.\nTap, tap, tap on the window.\nThe rain does not want to go.\nSo we play inside instead.\nBuild a tower. Up, up, up. Crash!\nRoll the ball across the floor.\nRead a book. Turn the pages.\nLook! The rain is slowing down.\nThe clouds are moving away now.\nDrip. Drip. Drip. Now nothing.\nOut comes the sun. A puddle to jump in!\nSplash! Thank you, rain. Goodbye.",
  id: "Hujan, hujan, pergilah.\nDatang lagi ya lain hari.\nBayi kecil ingin bermain.\nHujan, hujan, pergilah.\nTik, tik, tik di jendela.\nHujannya belum mau pergi.\nJadi kita bermain di dalam saja.\nBangun menara. Naik, naik, naik. Bruk!\nGulingkan bola melintasi lantai.\nBaca buku. Balik halamannya.\nLihat! Hujannya mulai reda.\nAwannya mulai bergerak menjauh.\nTes. Tes. Tes. Sekarang berhenti.\nMatahari keluar. Ada genangan untuk dilompati!\nCeburr! Terima kasih, hujan. Selamat jalan.",
  v: [["away", "pergi menjauh"], ["window", "jendela"], ["tower", "menara"], ["clouds", "awan"], ["puddle", "genangan air"]]
},
{
  t: "The Three Little Pigs",
  sc: "day",
  e: ["🐷","🌾","🪵","🧱","🌬️"],
  src: "Joseph Jacobs",
  en: "Three little pigs went out to build houses.\nThe first pig built a house of straw.\nQuick and easy! Now I can play.\nThe second pig built a house of sticks.\nTap, tap, tap. Done! Now I can play.\nThe third pig built a house of bricks.\nHeavy work. Slow work. All day long.\nAlong came a big wind. Whoosh!\nDown went the straw house. Whoosh!\nDown went the stick house too!\nThe two pigs ran to their brother.\nBut the brick house stood strong.\nKnock, knock. Come in, brothers. You are safe.\nThree little pigs, warm and snug inside.",
  id: "Tiga babi kecil pergi membangun rumah.\nBabi pertama membangun rumah dari jerami.\nCepat dan mudah! Sekarang aku bisa bermain.\nBabi kedua membangun rumah dari kayu.\nTok, tok, tok. Selesai! Sekarang aku bisa bermain.\nBabi ketiga membangun rumah dari batu bata.\nKerja berat. Kerja lambat. Sepanjang hari.\nDatanglah angin yang besar. Wuush!\nRumah jerami itu roboh. Wuush!\nRumah kayu itu roboh juga!\nKedua babi itu berlari ke rumah kakaknya.\nTapi rumah batu bata itu berdiri kuat.\nTok, tok. Masuklah, kakak-kakak. Kalian aman.\nTiga babi kecil, hangat dan nyaman di dalam.",
  v: [["build", "membangun"], ["straw", "jerami"], ["sticks", "kayu"], ["bricks", "batu bata"], ["strong", "kuat"]]
},
{
  t: "The Three Billy Goats Gruff",
  sc: "garden",
  e: ["🐐","🌉","👹","🌿"],
  src: "Asbjørnsen & Moe",
  en: "Three billy goats wanted to cross the bridge.\nOn the other side, sweet green grass!\nBut under the bridge lived a grumpy troll.\nTrip, trap, trip, trap. Here comes the small goat.\nWho is on my bridge? said the troll.\nWait for my big brother, said the small goat.\nTrip, trap. Here comes the middle goat.\nWait for my big brother, he said too.\nTrip, trap! Here comes the big billy goat.\nHis horns are long. His feet are heavy.\nOff you go, troll! Splash! Into the water.\nThe troll swam away and never came back.\nAnd the three goats ate the sweet grass.\nMunch, munch, munch. All day long.",
  id: "Tiga kambing jantan ingin melintasi jembatan.\nDi seberang ada rumput hijau yang manis!\nTapi di bawah jembatan hidup seekor troll yang pemarah.\nTap, tap, tap, tap. Datang kambing yang kecil.\nSiapa di jembatanku? kata troll.\nTunggu kakakku yang besar, kata kambing kecil.\nTap, tap. Datang kambing yang sedang.\nTunggu kakakku yang besar, katanya juga.\nTap, tap! Datang kambing jantan yang besar.\nTanduknya panjang. Kakinya berat.\nPergi kamu, troll! Ceburr! Masuk ke air.\nTroll itu berenang pergi dan tak pernah kembali.\nDan ketiga kambing itu makan rumput yang manis.\nKriuk, kriuk, kriuk. Sepanjang hari.",
  v: [["bridge", "jembatan"], ["cross", "melintasi"], ["troll", "troll, raksasa dalam cerita"], ["horns", "tanduk"], ["munch", "mengunyah dengan lahap"]]
},
{
  t: "The Gingerbread Man",
  sc: "day",
  e: ["🍪","👵","🐄","🐕","🦆"],
  src: "traditional English tale",
  en: "An old woman baked a gingerbread man.\nTwo currants for eyes. A cherry for a nose.\nInto the oven. Bake, bake, bake.\nShe opened the door and out he jumped!\nRun, run, as fast as you can!\nYou cannot catch me, said the gingerbread man.\nPast the cow. Moo! Too slow.\nPast the horse. Neigh! Too slow.\nPast the dog. Woof! Too slow.\nRun, run, run. Nobody can catch him.\nThen he came to a wide river.\nHow will I cross? Oh dear.\nA kind duck gave him a ride.\nQuack! Safe on the other side. Hooray!",
  id: "Seorang nenek memanggang kue orang-orangan.\nDua kismis untuk mata. Satu ceri untuk hidung.\nMasuk ke oven. Panggang, panggang, panggang.\nIa membuka pintunya dan kuenya melompat keluar!\nLari, lari, secepat yang kau bisa!\nKamu tidak bisa menangkapku, kata kue itu.\nMelewati sapi. Moo! Terlalu lambat.\nMelewati kuda. Hiii! Terlalu lambat.\nMelewati anjing. Guk! Terlalu lambat.\nLari, lari, lari. Tak ada yang bisa menangkapnya.\nLalu ia sampai di sungai yang lebar.\nBagaimana aku menyeberang? Aduh.\nSeekor bebek yang baik memberinya tumpangan.\nKwek! Sampai dengan aman di seberang. Hore!",
  v: [["baked", "memanggang"], ["currants", "kismis kecil"], ["oven", "oven"], ["catch", "menangkap"], ["river", "sungai"]]
},
{
  t: "Henny Penny",
  sc: "garden",
  e: ["🐔","🌰","🦉","🦆","🪿"],
  src: "English folk tale",
  en: "Henny Penny was eating in the garden.\nBonk! Something fell on her head.\nOh no! The sky is falling!\nI must go and tell the King.\nOff she went. Cluck, cluck, cluck.\nShe met Cocky Locky. The sky is falling!\nShe met Ducky Lucky. The sky is falling!\nShe met Goosey Loosey. The sky is falling!\nAll of them ran down the road together.\nThen a wise old owl looked down.\nWhat fell on your head? he asked.\nHenny Penny looked. Oh! An acorn.\nJust a little acorn from the tree.\nEverybody laughed. Cluck! Quack! Honk! Hoo!",
  id: "Henny Penny sedang makan di taman.\nDuk! Ada sesuatu jatuh di kepalanya.\nOh tidak! Langitnya runtuh!\nAku harus pergi memberi tahu Raja.\nIa pun pergi. Petok, petok, petok.\nIa bertemu Cocky Locky. Langitnya runtuh!\nIa bertemu Ducky Lucky. Langitnya runtuh!\nIa bertemu Goosey Loosey. Langitnya runtuh!\nMereka semua berlari di jalan bersama-sama.\nLalu seekor burung hantu tua yang bijak menengok ke bawah.\nApa yang jatuh di kepalamu? tanyanya.\nHenny Penny melihat. Oh! Sebuah biji ek.\nHanya biji ek kecil dari pohon.\nSemuanya tertawa. Petok! Kwek! Honk! Hu!",
  v: [["garden", "taman"], ["falling", "jatuh/runtuh"], ["road", "jalan"], ["wise", "bijak"], ["acorn", "biji pohon ek"]]
},
{
  t: "The Elves and the Shoemaker",
  sc: "night",
  e: ["🧝","👞","🧵","🕯️"],
  src: "Brothers Grimm",
  en: "A shoemaker had no more leather. Only enough for one pair.\nHe cut the pieces and went to bed.\nIn the night, tap, tap, tap.\nTiny elves came in. So small!\nSnip, stitch, tap. They worked all night.\nIn the morning: two beautiful shoes!\nWho did this? said the shoemaker.\nThe next night they came again. Tap, tap.\nAnd again. And again. So many shoes!\nOne night the shoemaker peeped and saw them.\nThank you, little elves! he whispered.\nHe made them tiny coats and tiny shoes.\nThe elves danced and laughed and skipped away.\nGood night, kind little elves.",
  id: "Seorang tukang sepatu tak punya kulit lagi. Hanya cukup untuk satu pasang.\nIa memotong bahannya lalu pergi tidur.\nDi tengah malam, tok, tok, tok.\nPeri-peri kecil masuk. Kecil sekali!\nKret, jahit, tok. Mereka bekerja sepanjang malam.\nPaginya: dua sepatu yang indah!\nSiapa yang membuat ini? kata tukang sepatu.\nMalam berikutnya mereka datang lagi. Tok, tok.\nDan lagi. Dan lagi. Banyak sekali sepatunya!\nSuatu malam tukang sepatu mengintip dan melihat mereka.\nTerima kasih, peri-peri kecil! bisiknya.\nIa membuatkan mereka mantel kecil dan sepatu kecil.\nPeri-peri itu menari dan tertawa dan melompat pergi.\nSelamat malam, peri kecil yang baik.",
  v: [["leather", "kulit bahan sepatu"], ["elves", "peri kecil"], ["stitch", "menjahit"], ["whispered", "berbisik"], ["danced", "menari"]]
},
{
  t: "The Ant and the Grasshopper",
  sc: "snow",
  e: ["🦗","🐜","❄️","🌾"],
  src: "Aesop's Fables",
  en: "All summer long the grasshopper sang.\nChirp, chirp! Come and play, ant!\nThe ant did not stop. She carried a seed.\nStep, step, step. Then another seed.\nWinter is coming, said the little ant.\nWinter? said the grasshopper. Not today! Sing!\nThe leaves fell. The days grew short.\nThen the snow came. Cold, cold, cold.\nThe grasshopper had nothing to eat.\nHe knocked on the ant's door. Please help.\nCome in, said the ant. Here is food.\nShare and be warm, little friend.\nNext summer we will work together.\nAnd we will sing together too.",
  id: "Sepanjang musim panas belalang bernyanyi.\nKrik, krik! Ayo bermain, semut!\nSemut itu tidak berhenti. Ia membawa sebutir biji.\nLangkah, langkah, langkah. Lalu satu biji lagi.\nMusim dingin akan datang, kata semut kecil.\nMusim dingin? kata belalang. Bukan hari ini! Bernyanyi saja!\nDedaunan berjatuhan. Harinya makin pendek.\nLalu salju datang. Dingin, dingin, dingin.\nBelalang itu tidak punya makanan.\nIa mengetuk pintu semut. Tolong aku.\nMasuklah, kata semut. Ini makanannya.\nMari berbagi dan hangat bersama, kawan kecil.\nMusim panas depan kita bekerja bersama.\nDan kita bernyanyi bersama juga.",
  v: [["summer", "musim panas"], ["grasshopper", "belalang"], ["seed", "biji"], ["winter", "musim dingin"], ["share", "berbagi"]]
},
{
  t: "The Fox and the Grapes",
  sc: "garden",
  e: ["🦊","🍇","🌿","🪜"],
  src: "Aesop's Fables",
  en: "A hungry fox walked through the garden.\nLook! Grapes on the vine. Big and purple.\nThey look so juicy. Mmm.\nBut they hang high above his head.\nHe jumped. Boing! Not high enough.\nHe jumped again. Boing! Still too high.\nHe ran and jumped. Boing, boing!\nHis legs got tired. His nose got hot.\nHe could not reach the grapes at all.\nSo he walked away and said,\nthose grapes are sour anyway!\nBut they were not sour. They were sweet.\nPoor silly fox. Try a ladder next time.",
  id: "Seekor rubah yang lapar berjalan melewati taman.\nLihat! Anggur di sulurnya. Besar dan ungu.\nKelihatannya berair sekali. Mmm.\nTapi anggurnya tergantung tinggi di atas kepalanya.\nIa melompat. Boing! Belum cukup tinggi.\nIa melompat lagi. Boing! Masih terlalu tinggi.\nIa berlari lalu melompat. Boing, boing!\nKakinya lelah. Hidungnya jadi panas.\nIa tidak bisa menjangkau anggurnya sama sekali.\nJadi ia pergi sambil berkata,\nanggur itu asam kok!\nPadahal tidak asam. Anggurnya manis.\nKasihan rubah konyol. Coba pakai tangga lain kali.",
  v: [["fox", "rubah"], ["grapes", "anggur"], ["vine", "sulur tanaman"], ["juicy", "berair banyak"], ["sour", "asam"]]
},
{
  t: "The Town Mouse and the Country Mouse",
  sc: "garden",
  e: ["🐭","🐁","🧀","🌽"],
  src: "Aesop's Fables",
  en: "A town mouse went to see his cousin.\nHis cousin lived in the quiet country.\nHere is my dinner, said the country mouse.\nCorn and roots and a little water.\nOh, said the town mouse. So plain!\nCome to town. We eat cake there!\nSo they went to the big town house.\nCake! Cheese! Jelly! What a feast!\nBut then, woof! A big dog barked.\nRun! Hide! Under the floor. Squeak!\nI am going home, said the country mouse.\nMy dinner is plain, but I eat it in peace.\nBack to the quiet country he went.\nCorn and roots and a good long sleep.",
  id: "Seekor tikus kota pergi menemui sepupunya.\nSepupunya tinggal di desa yang sepi.\nIni makan malamku, kata tikus desa.\nJagung dan akar-akaran dan sedikit air.\nOh, kata tikus kota. Sederhana sekali!\nAyo ke kota. Di sana kita makan kue!\nJadi mereka pergi ke rumah besar di kota.\nKue! Keju! Puding! Pesta yang luar biasa!\nTapi lalu, guk! Seekor anjing besar menyalak.\nLari! Sembunyi! Di bawah lantai. Cit!\nAku mau pulang, kata tikus desa.\nMakananku sederhana, tapi aku memakannya dengan tenang.\nIa kembali ke desa yang sepi.\nJagung dan akar-akaran dan tidur yang panjang.",
  v: [["cousin", "sepupu"], ["country", "desa/pedesaan"], ["feast", "pesta makan"], ["barked", "menyalak"], ["peace", "ketenangan"]]
},
{
  t: "The Tale of Peter Rabbit",
  sc: "garden",
  e: ["🐇","🥬","🥕","🚪"],
  src: "Beatrix Potter, 1902",
  en: "Peter Rabbit had a blue coat and no shoes.\nDo not go in the garden, said Mother.\nBut Peter went. Hop, hop, hop.\nUnder the gate. Squeeze, squeeze. In!\nLettuce! Beans! Radishes! Munch, munch, munch.\nHe ate and ate and ate.\nThen he felt rather sick. Oh dear.\nThe gardener saw him. Stop, little thief!\nRun, Peter, run! Round the pond.\nHe lost one shoe. Then the other.\nHe lost his little blue coat too.\nUnder the gate at last. Home!\nMother put him to bed with tea.\nSleep well, Peter. No more radishes today.",
  id: "Peter Kelinci punya mantel biru dan tidak pakai sepatu.\nJangan masuk ke kebun, kata Ibu.\nTapi Peter tetap pergi. Hop, hop, hop.\nLewat bawah gerbang. Selip, selip. Masuk!\nSelada! Buncis! Lobak! Kriuk, kriuk, kriuk.\nIa makan dan makan dan makan.\nLalu perutnya mulai tidak enak. Aduh.\nPak tukang kebun melihatnya. Berhenti, pencuri kecil!\nLari, Peter, lari! Mengelilingi kolam.\nIa kehilangan satu sepatu. Lalu yang satunya.\nMantel birunya yang kecil hilang juga.\nAkhirnya lewat bawah gerbang. Pulang!\nIbu menidurkannya dengan segelas teh.\nTidur yang nyaman, Peter. Jangan makan lobak lagi hari ini.",
  v: [["coat", "mantel"], ["garden", "kebun"], ["lettuce", "selada"], ["munch", "mengunyah lahap"], ["thief", "pencuri"]]
},
{
  t: "Kancil and the Crocodiles",
  sc: "water",
  e: ["🦌","🐊","🍉","🌴"],
  src: "Indonesian folk tale",
  en: "Kancil is a little mouse deer. Very clever.\nHe wants the sweet fruit across the river.\nBut the river is deep. And wide.\nAnd in the river live the crocodiles.\nSnap, snap! Hello, crocodiles, says Kancil.\nThe King wants me to count you all!\nLine up, please. Nose to tail.\nThe crocodiles line up across the river.\nOne, two, three, four, five, six!\nHop, hop, hop. Kancil counts on their backs.\nSeven, eight, nine, ten! Thank you!\nAnd there he is, safe on the other side.\nMunch, munch. What sweet fruit!\nClever little Kancil. Well done.",
  id: "Kancil itu hewan kecil. Cerdik sekali.\nIa ingin buah manis di seberang sungai.\nTapi sungainya dalam. Dan lebar.\nDan di sungai itu hidup buaya-buaya.\nKlap, klap! Halo, buaya, kata Kancil.\nRaja menyuruhku menghitung kalian semua!\nBerbaris ya. Hidung ke ekor.\nBuaya-buaya berbaris melintasi sungai.\nSatu, dua, tiga, empat, lima, enam!\nHop, hop, hop. Kancil menghitung di atas punggung mereka.\nTujuh, delapan, sembilan, sepuluh! Terima kasih!\nDan sampailah ia dengan aman di seberang.\nKriuk, kriuk. Buahnya manis sekali!\nKancil kecil yang cerdik. Hebat.",
  v: [["clever", "cerdik"], ["river", "sungai"], ["crocodiles", "buaya"], ["count", "menghitung"], ["safe", "aman"]]
},
{
  t: "The Monkey and the Crocodile",
  sc: "water",
  e: ["🐒","🐊","🍎","🌊"],
  src: "the Panchatantra",
  en: "A monkey lived in a tall fruit tree.\nEvery day he ate the sweet red fruit.\nA crocodile swam up. May I have one?\nOf course, said the kind monkey. Here!\nEvery day the monkey threw down fruit.\nThey became good friends. Splash! Munch!\nCome to my home across the water,\nsaid the crocodile. Sit on my back.\nSo off they swam. Splash, splash.\nBut halfway there the crocodile said something silly.\nOh! said the monkey. I left my heart in the tree!\nTake me back and I will get it.\nBack they swam. Up went the monkey. Safe!\nClever monkey. He stayed in his tree.",
  id: "Seekor monyet tinggal di pohon buah yang tinggi.\nSetiap hari ia makan buah merah yang manis.\nSeekor buaya berenang mendekat. Boleh aku minta satu?\nTentu, kata monyet yang baik hati. Ini!\nSetiap hari monyet itu melempar buah ke bawah.\nMereka jadi berteman baik. Ceburr! Kriuk!\nDatanglah ke rumahku di seberang air,\nkata buaya. Duduk di punggungku.\nJadi mereka pun berenang. Cebur, cebur.\nTapi di tengah jalan buaya berkata sesuatu yang konyol.\nOh! kata monyet. Hatiku tertinggal di pohon!\nAntar aku kembali, nanti aku ambil.\nMereka berenang kembali. Monyet naik ke pohon. Aman!\nMonyet yang cerdik. Ia tetap tinggal di pohonnya.",
  v: [["monkey", "monyet"], ["crocodile", "buaya"], ["friends", "berteman"], ["halfway", "di tengah jalan"], ["clever", "cerdik"]]
},
{
  t: "Momotaro, the Peach Boy",
  sc: "day",
  e: ["🍑","👦","🐕","🐒","🐦"],
  src: "Japanese folk tale",
  en: "An old woman found a giant peach in the river.\nBump, bump. It floated to her feet.\nShe took it home. Let us eat it!\nBut when she cut it open, surprise!\nInside was a little boy. Hello!\nWe will call you Momotaro, they said.\nPeach Boy grew big and strong and kind.\nOne day he walked out to help people.\nA dog came with him. Woof!\nA monkey came too. Ooh, ooh!\nAnd a bird flew above them. Caw!\nTogether they were brave. Together they were strong.\nAnd home they came with happy news.\nWell done, Momotaro. Well done, friends.",
  id: "Seorang nenek menemukan buah persik raksasa di sungai.\nDuk, duk. Buahnya mengapung sampai ke kakinya.\nIa membawanya pulang. Ayo kita makan!\nTapi saat dibelah, ternyata ada kejutan!\nDi dalamnya ada seorang anak lelaki. Halo!\nKami akan memanggilmu Momotaro, kata mereka.\nAnak Persik tumbuh besar dan kuat dan baik hati.\nSuatu hari ia pergi untuk menolong orang.\nSeekor anjing ikut dengannya. Guk!\nSeekor monyet ikut juga. Uu, uu!\nDan seekor burung terbang di atas mereka. Kaak!\nBersama mereka jadi berani. Bersama mereka jadi kuat.\nDan mereka pulang membawa kabar bahagia.\nHebat, Momotaro. Hebat, kawan-kawan.",
  v: [["peach", "buah persik"], ["floated", "mengapung"], ["strong", "kuat"], ["brave", "berani"], ["together", "bersama"]]
},
{
  t: "Milk Time",
  sc: "night",
  e: ["🍼","👶","🌙","💤"],
  en: "It is dark outside. You are awake.\nHungry? I know. I know.\nCome here, little one. Into my arms.\nWarm milk. Slow, slow. There you go.\nGlug, glug, glug. Little swallows.\nYour hand holds my finger. Tight.\nYour eyes look up at me.\nHello, you. Hello, hello.\nThe house is so quiet now.\nOnly you and me and the milk.\nSlower now. Glug. Glug.\nYour eyes are closing. Almost done.\nOne last sip. There.\nBack to bed. Sleep, sleep, sleep.",
  id: "Di luar masih gelap. Kamu terbangun.\nLapar? Aku tahu. Aku tahu.\nSini, sayang. Ke dalam pelukanku.\nSusu hangat. Perlahan, perlahan. Nah, begitu.\nGlek, glek, glek. Telanan kecil.\nTanganmu menggenggam jariku. Kuat.\nMatamu memandangku ke atas.\nHalo, kamu. Halo, halo.\nRumahnya sepi sekali sekarang.\nHanya kamu dan aku dan susunya.\nMakin lambat sekarang. Glek. Glek.\nMatamu mulai menutup. Hampir habis.\nSatu seruputan terakhir. Nah.\nKembali ke tempat tidur. Tidur, tidur, tidur.",
  v: [["hungry", "lapar"], ["milk", "susu"], ["swallows", "telanan"], ["tight", "kuat/erat"], ["quiet", "sepi/tenang"]]
},
{
  t: "Sweet, Sweet Mango",
  sc: "garden",
  e: ["🥭","🌳","🔪","😋"],
  en: "Look at this mango. Green and gold.\nHold it. Heavy and smooth and cool.\nSmell the skin. Ahh! So sweet.\nCut it open. The knife goes shk.\nInside it is orange. Bright orange!\nSo juicy. Look, it drips.\nA little piece for you. Mmm!\nSoft on your gums. Suck, suck.\nJuice on your chin. Juice on your hands.\nJuice everywhere! What a mess.\nWipe, wipe, wipe. All clean.\nOne more piece? Yes, please.\nThe mango tree gave us this.\nThank you, mango tree. Thank you.",
  id: "Lihat mangga ini. Hijau dan keemasan.\nPegang. Berat dan halus dan sejuk.\nCium kulitnya. Ahh! Manis sekali.\nBelah. Pisaunya berbunyi srek.\nDi dalamnya oranye. Oranye cerah!\nBerair sekali. Lihat, menetes.\nSepotong kecil untukmu. Mmm!\nLembut di gusimu. Sedot, sedot.\nAirnya di dagumu. Airnya di tanganmu.\nAirnya di mana-mana! Belepotan sekali.\nUsap, usap, usap. Bersih semua.\nSatu potong lagi? Iya, boleh.\nPohon mangga memberi kita ini.\nTerima kasih, pohon mangga. Terima kasih.",
  v: [["mango", "mangga"], ["smooth", "halus"], ["juicy", "berair banyak"], ["drips", "menetes"], ["mess", "belepotan/berantakan"]]
},
{
  t: "The Fan Goes Round",
  sc: "day",
  e: ["🌀","🪟","🍃","📄"],
  en: "Look up at the ceiling. What is that?\nThe fan! Round and round it goes.\nWhirr, whirr, whirr. Do you hear it?\nOne blade. Two blades. Three. Four.\nToo fast to count them now!\nThe wind comes down on your face.\nCool wind. Whoosh. It moves your hair.\nThe curtain moves too. Sway, sway.\nA paper on the table lifts up. Flap!\nRound and round. It never stops.\nWhirr, whirr. Such a busy fan.\nNow we turn it slower. Slow, slow.\nGood night, little fan. Keep us cool.",
  id: "Lihat ke atas, ke langit-langit. Apa itu?\nKipasnya! Berputar dan berputar.\nNguing, nguing, nguing. Kamu dengar?\nSatu bilah. Dua bilah. Tiga. Empat.\nTerlalu cepat untuk dihitung sekarang!\nAnginnya turun ke wajahmu.\nAngin yang sejuk. Wuush. Rambutmu bergerak.\nGordennya bergerak juga. Ayun, ayun.\nSelembar kertas di meja terangkat. Kepak!\nBerputar dan berputar. Tidak pernah berhenti.\nNguing, nguing. Kipas yang sibuk sekali.\nSekarang kita perlambat. Lambat, lambat.\nSelamat malam, kipas kecil. Jaga kami tetap sejuk.",
  v: [["ceiling", "langit-langit"], ["fan", "kipas"], ["blade", "bilah kipas"], ["curtain", "gorden"], ["cool", "sejuk"]]
},
{
  t: "Shoes On, Let's Go",
  sc: "day",
  e: ["👟","🚪","🦶","🌳"],
  en: "Where are we going? Outside!\nFirst we need your shoes. Where are they?\nUnder the chair. Found them!\nGive me one foot. In it goes.\nPush, push. Toes all the way in.\nNow the strap. Rrrip! Done.\nGive me the other foot. In it goes.\nPush, push, push. There!\nTwo shoes on two little feet.\nStand up. Stamp, stamp. Do they fit?\nThey fit! Now the door.\nTurn the handle. Click. Open!\nOut we go. Bye, house!\nHold my hand. Off we walk.",
  id: "Kita mau ke mana? Ke luar!\nPertama kita butuh sepatumu. Di mana ya?\nDi bawah kursi. Ketemu!\nBerikan satu kakimu. Masuk.\nDorong, dorong. Jari kaki masuk semua.\nSekarang perekatnya. Krek! Selesai.\nBerikan kaki yang lain. Masuk.\nDorong, dorong, dorong. Nah!\nDua sepatu di dua kaki kecil.\nBerdiri. Hentak, hentak. Pas tidak?\nPas! Sekarang pintunya.\nPutar pegangannya. Klik. Terbuka!\nKita keluar. Selamat tinggal, rumah!\nPegang tanganku. Ayo jalan.",
  v: [["shoes", "sepatu"], ["strap", "tali/perekat sepatu"], ["stamp", "menghentak kaki"], ["fit", "pas ukurannya"], ["handle", "pegangan pintu"]]
},
{
  t: "Fireflies",
  sc: "night",
  e: ["✨","🌳","🌙","🪴"],
  en: "The sun is gone. The garden is dark.\nSit with me here on the step.\nWait. Watch. Very quiet now.\nThere! A little green light.\nOn. Off. On. Off.\nA firefly! Hello, little light.\nThere is another one. And another.\nMany little lights now, floating slowly.\nUp and down. Left and right.\nThey blink to say hello to each other.\nOne comes close to your hand. Ooh!\nOff it goes again. Goodbye.\nThe fireflies dance in the dark garden.\nGood night, little lights. Good night.",
  id: "Mataharinya sudah pergi. Tamannya gelap.\nDuduk bersamaku di tangga sini.\nTunggu. Perhatikan. Tenang sekali sekarang.\nItu! Sebuah cahaya hijau kecil.\nNyala. Mati. Nyala. Mati.\nKunang-kunang! Halo, cahaya kecil.\nAda satu lagi. Dan satu lagi.\nBanyak cahaya kecil sekarang, melayang perlahan.\nNaik dan turun. Kiri dan kanan.\nMereka berkedip untuk saling menyapa.\nSatu mendekat ke tanganmu. Ooh!\nIa terbang lagi. Selamat jalan.\nKunang-kunang menari di taman yang gelap.\nSelamat malam, cahaya kecil. Selamat malam.",
  v: [["dark", "gelap"], ["firefly", "kunang-kunang"], ["blink", "berkedip"], ["floating", "melayang"], ["dance", "menari"]]
},
{
  t: "The Big Blue Umbrella",
  sc: "rain",
  e: ["☂️","🌧️","🐌","🪣"],
  en: "Listen. Rain on the roof again.\nBut today we are going out!\nHere is the big blue umbrella.\nPush it up. Whoosh! It opens.\nSo big! A little roof for us.\nUnder we go. You and me.\nOut the door. Into the rain.\nTap, tap, tap on the umbrella.\nThe rain cannot reach us. Dry feet!\nLook at the puddles. Jump! Splash!\nA snail on the wall. Hello, snail.\nHome again. Shake the umbrella. Shake, shake.\nDown it comes. Click. Closed.\nThank you, big blue umbrella.",
  id: "Dengar. Hujan di atap lagi.\nTapi hari ini kita mau keluar!\nIni payung biru yang besar.\nDorong ke atas. Wuush! Terbuka.\nBesar sekali! Seperti atap kecil untuk kita.\nMasuk ke bawahnya. Kamu dan aku.\nKeluar pintu. Masuk ke hujan.\nTik, tik, tik di payungnya.\nHujannya tidak bisa mengenai kita. Kaki tetap kering!\nLihat genangannya. Lompat! Ceburr!\nAda siput di dinding. Halo, siput.\nPulang lagi. Kibaskan payungnya. Kibas, kibas.\nDitutup ke bawah. Klik. Tertutup.\nTerima kasih, payung biru yang besar.",
  v: [["umbrella", "payung"], ["roof", "atap"], ["dry", "kering"], ["puddles", "genangan air"], ["snail", "siput"]]
},

// ---------- morning stories: tm "am" ----------
{
  t: "Wake Up, Little One",
  sc: "dawn",
  tm: "am",
  e: ["👶","☀️","🐦","🧸"],
  en: "Shhh. It is very early. The house is quiet.\nOutside, the sky is turning soft and pink.\nA little bird sits on the window. Tweet.\nHe is saying, wake up, wake up.\nHere comes the light through the curtain.\nWarm on your face. Warm on your hands.\nOne eye opens. Then the other eye.\nHello, little one. Good morning to you.\nStretch your arms up high. Up, up, up.\nWiggle your fingers. Wiggle your toes.\nOne big yawn. Aaaah. All done.\nThe day is new. Nothing has happened yet.\nLet us go and see. Come with me.",
  id: "Ssst. Masih pagi-pagi sekali. Rumahnya tenang.\nDi luar, langitnya berubah jadi lembut dan merah muda.\nSeekor burung kecil hinggap di jendela. Cuit.\nDia bilang, bangun, bangun.\nCahayanya masuk lewat tirai.\nHangat di wajahmu. Hangat di tanganmu.\nSatu mata terbuka. Lalu mata yang lain.\nHalo, sayang. Selamat pagi untukmu.\nRentangkan tanganmu tinggi-tinggi. Ke atas, atas, atas.\nGoyangkan jari tanganmu. Goyangkan jari kakimu.\nSatu kuapan besar. Aaaah. Sudah.\nHarinya baru. Belum ada apa-apa yang terjadi.\nAyo kita lihat. Ikut aku.",
  v: [["early", "pagi-pagi sekali"], ["quiet", "tenang"], ["stretch", "meregangkan badan"], ["wiggle", "menggoyangkan"]]
},
{
  t: "The Rooster Says Good Morning",
  sc: "dawn",
  tm: "am",
  e: ["🐓","🌅","🐔","🐤","🌾"],
  src: "Mother Goose, “Cock-a-Doodle-Doo”",
  en: "Cock a doodle doo! Who is that?\nIt is the rooster on the fence.\nHe stands up tall. He puffs his chest.\nCock a doodle doo! He calls again.\nWake up, wake up, everyone. It is morning.\nThe hens hear him. Cluck, cluck, cluck.\nThe little chicks hear him. Peep, peep, peep.\nThe farmer hears him and opens the door.\nThe sun hears him and climbs the sky.\nCock a doodle doo! One more time.\nWhat a loud bird. What a proud bird.\nGood morning, rooster. We are all awake now.",
  id: "Kukuruyuk! Siapa itu?\nItu ayam jago di atas pagar.\nDia berdiri tegak. Dadanya dibusungkan.\nKukuruyuk! Dia berkokok lagi.\nBangun, bangun, semuanya. Sudah pagi.\nAyam-ayam betina mendengarnya. Petok, petok, petok.\nAnak-anak ayam mendengarnya. Ciap, ciap, ciap.\nPak tani mendengarnya lalu membuka pintu.\nMataharinya mendengarnya lalu naik ke langit.\nKukuruyuk! Sekali lagi.\nBurung yang keras sekali. Burung yang bangga.\nSelamat pagi, ayam jago. Kami semua sudah bangun.",
  v: [["rooster", "ayam jago"], ["fence", "pagar"], ["chicks", "anak ayam"], ["loud", "keras"], ["awake", "terjaga"]]
},
{
  t: "Time to Rise",
  sc: "dawn",
  tm: "am",
  e: ["🐦","🪟","🌞","👶"],
  src: "Robert Louis Stevenson, 1885",
  en: "A little birdie with a yellow bill\nhopped up on the window sill.\nHop, hop, hop. Tap, tap, tap.\nHe turned his head and looked inside.\nHis eye was small and bright and shiny.\nHe looked at you, still in your bed.\nAre you still sleeping, sleepy head?\nThe sun is up. The grass is wet.\nThe worms are out. The day is here.\nCome and see, said the little bird.\nHe shook his wings and flew away.\nSo up you get. It is time to rise.",
  id: "Seekor burung kecil berparuh kuning\nhinggap di ambang jendela.\nLoncat, loncat, loncat. Tok, tok, tok.\nDia menoleh dan melihat ke dalam.\nMatanya kecil, cerah, dan berkilau.\nDia melihatmu, masih di tempat tidur.\nMasih tidur, ya, si tukang tidur?\nMatahari sudah naik. Rumputnya basah.\nCacing-cacing sudah keluar. Harinya sudah datang.\nAyo lihat, kata burung kecil itu.\nDia mengibaskan sayapnya lalu terbang pergi.\nJadi ayo bangun. Waktunya bangun.",
  v: [["bill", "paruh"], ["window sill", "ambang jendela"], ["bright", "cerah"], ["shook", "mengibaskan"]]
},
{
  t: "Lazy Mary, Will You Get Up?",
  sc: "dawn",
  tm: "am",
  e: ["🛏️","🥞","🌅","🐈"],
  src: "traditional song",
  en: "Lazy Mary, will you get up,\nwill you get up, will you get up?\nLazy Mary, will you get up,\nwill you get up today?\nNo, no, mother, I will not get up.\nIt is warm here under my blanket.\nSo mother makes some pancakes. Sizzle, sizzle.\nThe smell goes up the stairs. Mmmm.\nLazy Mary, will you get up today?\nYes, yes, mother, I will get up!\nUp she jumps. Down the stairs she runs.\nGood morning, Mary. Here is your breakfast.",
  id: "Mary si pemalas, mau bangun tidak,\nmau bangun tidak, mau bangun tidak?\nMary si pemalas, mau bangun tidak,\nmau bangun tidak hari ini?\nTidak, tidak, ibu, aku tidak mau bangun.\nDi bawah selimutku hangat sekali.\nJadi ibu membuat panekuk. Cesss, cesss.\nBaunya naik ke tangga. Mmmm.\nMary si pemalas, mau bangun tidak hari ini?\nMau, mau, ibu, aku mau bangun!\nDia melompat. Dia lari turun tangga.\nSelamat pagi, Mary. Ini sarapanmu.",
  v: [["lazy", "malas"], ["blanket", "selimut"], ["pancakes", "panekuk"], ["breakfast", "sarapan"]]
},
{
  t: "Bed in Summer",
  sc: "dawn",
  tm: "am",
  e: ["🕯️","🛏️","🌳","🧒"],
  src: "Robert Louis Stevenson, 1885",
  en: "In the winter I get up at night.\nI dress by yellow candle light.\nIt is dark outside. The stars are still out.\nBut in the summer it is not the same.\nIn summer, quite the other way,\nI have to go to bed by day.\nThe sun is still up in the sky.\nI hear the birds still hopping in the tree.\nI hear feet going by in the street.\nGoodnight, says mother. But it is so bright!\nDoes it not seem hard to you,\nwhen the sky is blue, to sleep?",
  id: "Di musim dingin aku bangun saat masih gelap.\nAku berpakaian dengan cahaya lilin kuning.\nDi luar gelap. Bintangnya masih ada.\nTapi di musim panas tidak begitu.\nDi musim panas, malah sebaliknya,\naku harus tidur saat masih siang.\nMatahari masih ada di langit.\nAku dengar burung masih meloncat di pohon.\nAku dengar langkah kaki lewat di jalan.\nSelamat tidur, kata ibu. Tapi masih terang sekali!\nApa tidak terasa sulit juga buatmu,\ntidur saat langitnya masih biru?",
  v: [["winter", "musim dingin"], ["candle", "lilin"], ["summer", "musim panas"], ["street", "jalan"]]
},
{
  t: "The Sky Turns Pink",
  sc: "dawn",
  tm: "am",
  e: ["🌅","☁️","🐦","⛰️"],
  en: "Look out of the window with me.\nThe sky is not blue yet. Not yet.\nFirst it is grey. Soft and grey.\nThen a line of pink comes up.\nPink like a peach. Pink like a shell.\nThen orange. Then gold. Then yellow.\nThe clouds catch the colour on their backs.\nThe hills go from black to green.\nOne bird flies across. Then two. Then many.\nAnd here is the sun at last.\nRound and bright over the far hills.\nThe sky is blue now. Good morning, world.",
  id: "Lihat ke luar jendela bersamaku.\nLangitnya belum biru. Belum.\nMula-mula abu-abu. Lembut dan abu-abu.\nLalu segaris merah muda muncul.\nMerah muda seperti buah persik. Seperti kerang.\nLalu jingga. Lalu emas. Lalu kuning.\nAwan-awan menangkap warna itu di punggungnya.\nBukit-bukit berubah dari hitam jadi hijau.\nSatu burung melintas. Lalu dua. Lalu banyak.\nDan akhirnya mataharinya datang.\nBulat dan cerah di atas bukit jauh.\nLangitnya biru sekarang. Selamat pagi, dunia.",
  v: [["grey", "abu-abu"], ["peach", "buah persik"], ["clouds", "awan"], ["hills", "bukit"]]
},
{
  t: "One Misty Moisty Morning",
  sc: "dawn",
  tm: "am",
  e: ["🌫️","🧥","🐄","🌾"],
  src: "Mother Goose",
  en: "One misty, moisty morning, when it was cloudy weather,\nI met an old man dressed all in leather.\nHis coat was grey. His hat was grey.\nThe fog was soft. It touched my face.\nHe began to bow. I began to bow.\nHow do you do, and how do you do,\nand how do you do again?\nWe laughed. The cows looked over the wall.\nMoo, said the cows in the mist.\nThe sun came up and burned the fog away.\nEverything was wet and shiny and new.\nGood morning, old man. Good morning, misty day.",
  id: "Suatu pagi yang berkabut dan lembap, saat cuacanya mendung,\naku bertemu pak tua berpakaian kulit dari atas sampai bawah.\nMantelnya abu-abu. Topinya abu-abu.\nKabutnya lembut. Menyentuh wajahku.\nDia membungkuk. Aku ikut membungkuk.\nApa kabar, dan apa kabar,\ndan apa kabar lagi?\nKami tertawa. Sapi-sapi mengintip dari balik tembok.\nMoo, kata sapi-sapi di dalam kabut.\nMataharinya naik dan mengusir kabutnya.\nSemuanya basah, berkilau, dan baru.\nSelamat pagi, pak tua. Selamat pagi, hari berkabut.",
  v: [["misty", "berkabut"], ["leather", "kulit"], ["fog", "kabut"], ["bow", "membungkuk"]]
},
{
  t: "The Bremen Town Musicians",
  sc: "dawn",
  tm: "am",
  e: ["🐓","🐕","🐈","🫏"],
  src: "Brothers Grimm",
  en: "A donkey walked down the road at sunrise.\nI will go and make music, he said.\nHee haw! Hee haw!\nA dog joined him. Woof, woof, woof.\nA cat joined him. Meow, meow, meow.\nA rooster joined him. Cock a doodle doo.\nFour friends, four voices, one long road.\nAt night they found a little house.\nThey all sang together, very very loud.\nWhat a noise! The robbers ran away.\nSo the four friends stayed in the house.\nAnd every morning the rooster woke them up.\nHee haw, woof, meow, cock a doodle doo.",
  id: "Seekor keledai berjalan di jalan saat matahari terbit.\nAku mau pergi bermain musik, katanya.\nHik hok! Hik hok!\nSeekor anjing ikut. Guk, guk, guk.\nSeekor kucing ikut. Meong, meong, meong.\nSeekor ayam jago ikut. Kukuruyuk.\nEmpat teman, empat suara, satu jalan panjang.\nMalamnya mereka menemukan sebuah rumah kecil.\nMereka menyanyi bersama, keras sekali.\nRibut sekali! Para perampok lari ketakutan.\nJadi empat teman itu tinggal di rumah itu.\nDan setiap pagi ayam jago membangunkan mereka.\nHik hok, guk, meong, kukuruyuk.",
  v: [["donkey", "keledai"], ["sunrise", "matahari terbit"], ["music", "musik"], ["noise", "suara ribut"]]
},
{
  t: "The Cockerel and the Bean",
  sc: "dawn",
  tm: "am",
  e: ["🐓","🫘","🐔","🐄","🌾"],
  src: "Russian folk tale",
  en: "A little cockerel was eating too fast.\nPeck, peck, peck. Gulp!\nOh no. A bean is stuck in his throat.\nThe hen ran to the cow. Please, some butter!\nThe cow said, bring me some fresh grass.\nThe hen ran to the field for grass.\nThe field said, bring me some water.\nThe hen ran to the well for water.\nWater for the field. Grass for the cow.\nButter from the cow, and back she ran.\nGulp. Down goes the bean. He can breathe!\nCock a doodle doo, sang the little cockerel.\nThank you, busy hen. Good morning, everyone.",
  id: "Seekor ayam jago kecil makan terlalu cepat.\nPatuk, patuk, patuk. Gluk!\nAduh. Sebutir kacang tersangkut di tenggorokannya.\nSi ayam betina lari ke sapi. Tolong, mentega!\nSapinya bilang, bawakan aku rumput segar.\nSi ayam betina lari ke ladang minta rumput.\nLadangnya bilang, bawakan aku air.\nSi ayam betina lari ke sumur ambil air.\nAir untuk ladang. Rumput untuk sapi.\nMentega dari sapi, lalu dia lari kembali.\nGluk. Kacangnya turun. Dia bisa bernapas!\nKukuruyuk, nyanyi si ayam jago kecil.\nTerima kasih, ayam betina yang rajin. Selamat pagi, semuanya.",
  v: [["bean", "kacang"], ["throat", "tenggorokan"], ["butter", "mentega"], ["well", "sumur"], ["breathe", "bernapas"]]
},
{
  t: "Why the Sun and the Moon Live in the Sky",
  sc: "dawn",
  tm: "am",
  e: ["☀️","🌙","🌊","🐟"],
  src: "Nigerian folk tale",
  en: "Long ago the sun lived on the ground.\nHis best friend was the water.\nCome and visit me, said the sun.\nI am very big, said the water.\nSo the sun built a very big house.\nThen the water came in. Splash, splash.\nFish came too. And frogs. And crabs.\nHigher and higher came the water. Up, up.\nThe sun climbed onto the roof. Still it came.\nSo the sun jumped up into the sky.\nThe moon jumped up beside him.\nAnd there they stay to this day.\nThat is why the sky is their home.",
  id: "Dahulu kala matahari tinggal di tanah.\nSahabatnya adalah air.\nMain ke rumahku, kata matahari.\nAku besar sekali, kata air.\nJadi matahari membangun rumah yang sangat besar.\nLalu airnya masuk. Byur, byur.\nIkan ikut masuk. Dan katak. Dan kepiting.\nAirnya makin tinggi. Naik, naik.\nMatahari naik ke atap. Airnya masih naik.\nJadi matahari melompat ke langit.\nBulan melompat ke sampingnya.\nDan di sanalah mereka sampai sekarang.\nItu sebabnya langit jadi rumah mereka.",
  v: [["ground", "tanah"], ["visit", "berkunjung"], ["crabs", "kepiting"], ["roof", "atap"]]
},
{
  t: "Stretch, Stretch, Stretch",
  sc: "dawn",
  tm: "am",
  e: ["👶","🧸","🐈","🐕"],
  en: "Good morning, body. Time to wake up.\nLet us start with your two arms.\nUp they go. High, high, high. Stretch!\nNow let them flop down. Flop. So heavy.\nNow your legs. Push them out long.\nLong legs, long legs. Stretch, stretch, stretch.\nNow your fingers. Open. Close. Open. Close.\nNow your feet. Circle one way. Circle back.\nNow a big breath in through your nose.\nAnd out through your mouth. Whooo.\nRoll to one side. Now sit up.\nWell done, body. You are ready now.",
  id: "Selamat pagi, badan. Waktunya bangun.\nKita mulai dari dua tanganmu.\nAngkat ke atas. Tinggi, tinggi, tinggi. Regangkan!\nSekarang jatuhkan. Plok. Berat sekali.\nSekarang kakimu. Julurkan panjang-panjang.\nKaki panjang, kaki panjang. Regang, regang, regang.\nSekarang jarimu. Buka. Tutup. Buka. Tutup.\nSekarang telapak kakimu. Putar ke sini. Putar balik.\nSekarang tarik napas panjang lewat hidung.\nLalu keluarkan lewat mulut. Whuuu.\nBerguling ke samping. Sekarang duduk.\nBagus, badan. Kamu sudah siap.",
  v: [["stretch", "meregangkan"], ["heavy", "berat"], ["breath", "napas"], ["roll", "berguling"]]
},
{
  t: "The First Bird",
  sc: "dawn",
  tm: "am",
  e: ["🐦","🌳","🌅","🪺"],
  en: "Who sings first in the morning?\nIt is still dark. Everyone is asleep.\nThen one small bird opens her beak.\nTweet. Just one. Just her.\nShe sings to the empty grey sky.\nThen another bird answers from the next tree.\nTweet tweet. And another. And another.\nSoon the whole garden is singing.\nCheep, chirp, whistle, coo.\nThe sky hears them and turns pink.\nThe sun hears them and comes up.\nEvery morning she does it again.\nWell done, first bird. You started the day.",
  id: "Siapa yang menyanyi pertama di pagi hari?\nMasih gelap. Semua orang masih tidur.\nLalu satu burung kecil membuka paruhnya.\nCuit. Cuma satu. Cuma dia.\nDia menyanyi untuk langit abu-abu yang kosong.\nLalu burung lain menjawab dari pohon sebelah.\nCuit cuit. Dan satu lagi. Dan satu lagi.\nSebentar saja seluruh taman ikut menyanyi.\nCiap, cicit, siul, kuku.\nLangit mendengar mereka lalu berubah merah muda.\nMatahari mendengar mereka lalu naik.\nSetiap pagi dia melakukannya lagi.\nBagus, burung pertama. Kamu memulai harinya.",
  v: [["beak", "paruh"], ["empty", "kosong"], ["garden", "taman"], ["whistle", "siulan"]]
},
{
  t: "Open the Curtains",
  sc: "dawn",
  tm: "am",
  e: ["🪟","☀️","🐈","🪴"],
  en: "The room is dim. Let us change that.\nHold the curtain. Ready? Pull!\nSwish! The light comes running in.\nOh! So bright. Blink, blink, blink.\nThe whole room is yellow now.\nLook at the dust dancing in the sunbeam.\nUp and down. Round and round. Tiny stars.\nThe cat walks straight into the warm patch.\nShe lies down and closes her eyes.\nThe window is cold but the light is warm.\nPut your hand on the glass. Brrr!\nNow put it in the sun. Aaah.\nGood morning, room. Good morning, light.",
  id: "Kamarnya remang-remang. Ayo kita ubah.\nPegang tirainya. Siap? Tarik!\nSrek! Cahayanya berlari masuk.\nOh! Terang sekali. Kedip, kedip, kedip.\nSeluruh kamarnya jadi kuning.\nLihat debu menari di dalam sinar matahari.\nNaik dan turun. Berputar-putar. Bintang-bintang kecil.\nSi kucing berjalan lurus ke tempat yang hangat.\nDia berbaring dan memejamkan mata.\nJendelanya dingin tapi cahayanya hangat.\nTaruh tanganmu di kacanya. Brrr!\nSekarang taruh di bawah matahari. Aaah.\nSelamat pagi, kamar. Selamat pagi, cahaya.",
  v: [["curtain", "tirai"], ["blink", "berkedip"], ["dust", "debu"], ["glass", "kaca"]]
},
{
  t: "Good Morning, Toes",
  sc: "dawn",
  tm: "am",
  e: ["👶","🧦","🦶","🧸"],
  en: "Here are your feet under the blanket.\nLet me find them. Where are they?\nThere they are! Ten little toes.\nGood morning, big toe. Good morning, small toe.\nThis one is cold. Let me rub it.\nRub, rub, rub. Warm now.\nNow a sock. One foot in. Pull.\nNow the other sock. Two feet in.\nStamp on the floor. Stamp, stamp, stamp.\nCan you hear that? Your feet can walk.\nUp the hall and back again.\nGood morning, feet. Thank you for carrying me.",
  id: "Ini kakimu di bawah selimut.\nBiar kucari. Di mana ya?\nItu dia! Sepuluh jari kaki kecil.\nSelamat pagi, jempol. Selamat pagi, jari kecil.\nYang ini dingin. Biar kugosok.\nGosok, gosok, gosok. Hangat sekarang.\nSekarang kaus kaki. Satu kaki masuk. Tarik.\nSekarang kaus kaki satunya. Dua kaki masuk.\nHentakkan ke lantai. Hentak, hentak, hentak.\nDengar itu? Kakimu bisa berjalan.\nKe ujung lorong lalu kembali lagi.\nSelamat pagi, kaki. Terima kasih sudah membawaku.",
  v: [["toes", "jari kaki"], ["rub", "menggosok"], ["sock", "kaus kaki"], ["stamp", "menghentak"]]
},
{
  t: "The Milkmaid and Her Pail",
  sc: "dawn",
  tm: "am",
  e: ["🥛","🐄","👧","🐔"],
  src: "Aesop's Fables",
  en: "A girl walked to market at first light.\nOn her head she carried a pail of milk.\nStep, step, step. The milk went slosh.\nI will sell this milk, she thought.\nThen I will buy some eggs.\nThe eggs will make many little chicks.\nI will sell the chicks and buy a dress.\nA fine dress! I will dance in it.\nAnd she tossed her head, just like this.\nOh no. Down came the pail. Splash!\nThe milk ran away into the grass.\nPoor girl. Count your eggs when they come.\nTomorrow she will walk more slowly.",
  id: "Seorang gadis berjalan ke pasar saat fajar.\nDi atas kepalanya dia membawa seember susu.\nLangkah, langkah, langkah. Susunya bergoyang.\nAku akan menjual susu ini, pikirnya.\nLalu aku akan membeli telur.\nTelurnya akan jadi banyak anak ayam.\nAku akan menjual anak ayam dan membeli gaun.\nGaun yang bagus! Aku akan menari memakainya.\nDan dia menyentakkan kepalanya, begini.\nAduh. Embernya jatuh. Byur!\nSusunya mengalir hilang ke rumput.\nKasihan. Hitung telurmu kalau sudah ada.\nBesok dia akan berjalan lebih pelan.",
  v: [["market", "pasar"], ["pail", "ember"], ["sell", "menjual"], ["tossed", "menyentakkan"]]
},
{
  t: "Where Are You Going, My Pretty Maid?",
  sc: "dawn",
  tm: "am",
  e: ["🪣","🐄","👩","🌾"],
  src: "Mother Goose",
  en: "Where are you going, my pretty maid?\nI am going milking, sir, she said.\nThe morning was cool. The grass was wet.\nHer bucket swung beside her. Clank, clank.\nMay I go with you, my pretty maid?\nYes, if you like, sir, she said.\nSo they walked to the field together.\nThe cow was waiting by the gate.\nMoo, said the cow. Good morning, cow.\nSquirt, squirt went the warm white milk.\nThe bucket filled right up to the top.\nThank you, cow. Thank you, pretty maid.\nNow there is milk for everyone.",
  id: "Mau ke mana kamu, gadis manis?\nSaya mau memerah susu, pak, katanya.\nPaginya sejuk. Rumputnya basah.\nEmbernya berayun di sampingnya. Klang, klang.\nBoleh saya ikut, gadis manis?\nBoleh, kalau bapak mau, katanya.\nJadi mereka berjalan ke ladang bersama.\nSapinya sudah menunggu di dekat gerbang.\nMoo, kata sapi itu. Selamat pagi, sapi.\nCrot, crot bunyi susu putih yang hangat.\nEmbernya penuh sampai ke atas.\nTerima kasih, sapi. Terima kasih, gadis manis.\nSekarang ada susu untuk semua orang.",
  v: [["milking", "memerah susu"], ["bucket", "ember"], ["gate", "gerbang"], ["squirt", "menyemprot"]]
},
{
  t: "The Morning Star",
  sc: "dawn",
  tm: "am",
  e: ["⭐","🌅","🐦","🌙"],
  en: "One star is still awake in the sky.\nAll the other stars have gone to bed.\nBut this one stays. Bright and white.\nWe call it the morning star.\nIt watches the night pack up and go.\nIt watches the dark turn into blue.\nHello, morning star. Are you tired?\nThe sky gets lighter. The star gets fainter.\nSmaller and smaller. Softer and softer.\nAnd then, quietly, it is gone.\nGoodbye, morning star. Sleep well.\nSee you again tomorrow, before the sun.\nNow the day belongs to us.",
  id: "Satu bintang masih terjaga di langit.\nBintang-bintang lain sudah tidur.\nTapi yang satu ini tetap ada. Cerah dan putih.\nKita menyebutnya bintang pagi.\nDia melihat malam berkemas lalu pergi.\nDia melihat gelap berubah jadi biru.\nHalo, bintang pagi. Kamu capek?\nLangitnya makin terang. Bintangnya makin samar.\nMakin kecil. Makin lembut.\nLalu, dengan tenang, dia hilang.\nSelamat jalan, bintang pagi. Tidur yang nyenyak.\nSampai jumpa besok, sebelum matahari.\nSekarang harinya milik kita.",
  v: [["star", "bintang"], ["bright", "cerah"], ["fainter", "makin samar"], ["quietly", "dengan tenang"]]
},
{
  t: "Five More Minutes",
  sc: "dawn",
  tm: "am",
  e: ["⏰","🛏️","🐈","🧸"],
  en: "Beep, beep, beep, says the little clock.\nNo, says the sleepy head. Five more minutes.\nThe blanket goes up over the nose.\nOnly the hair is showing now.\nThe cat jumps up on the bed.\nShe walks across the sleepy lump.\nPat, pat, pat, go her four paws.\nThen a cold nose on a warm ear.\nAah! Go away, cat! Ha ha ha.\nThe blanket comes down. Two eyes look out.\nAll right, all right. I am getting up.\nGood morning, cat. Thank you for the help.",
  id: "Bip, bip, bip, bunyi jam kecil.\nTidak, kata si tukang tidur. Lima menit lagi.\nSelimutnya ditarik sampai menutupi hidung.\nCuma rambutnya yang kelihatan sekarang.\nSi kucing melompat ke atas tempat tidur.\nDia berjalan di atas gundukan yang mengantuk itu.\nTap, tap, tap, bunyi empat cakarnya.\nLalu hidung dingin menempel di telinga hangat.\nAah! Pergi sana, kucing! Ha ha ha.\nSelimutnya turun. Dua mata mengintip keluar.\nIya, iya. Aku bangun sekarang.\nSelamat pagi, kucing. Terima kasih bantuannya.",
  v: [["clock", "jam"], ["minutes", "menit"], ["paws", "cakar"], ["ear", "telinga"]]
},
{
  t: "The Sleepy Village Wakes",
  sc: "dawn",
  tm: "am",
  e: ["🏘️","🐓","🚲","🥖"],
  en: "The little village is still asleep.\nThen one light goes on in a window.\nThen another. Then another. Blink, blink.\nThe baker is first. His oven is hot.\nWarm bread smell floats down the street.\nThe milkman comes with clinking bottles.\nA bicycle goes past. Ring, ring!\nA door opens. Good morning! Good morning!\nA dog runs out to say hello.\nThe shop shutters go up. Rattle, rattle.\nChildren walk by with their bags.\nThe village is awake. What a busy sound.\nAnd it all began with one small light.",
  id: "Desa kecil itu masih tidur.\nLalu satu lampu menyala di sebuah jendela.\nLalu satu lagi. Lalu satu lagi. Kedip, kedip.\nTukang roti yang pertama. Ovennya sudah panas.\nBau roti hangat melayang di sepanjang jalan.\nTukang susu datang dengan botol-botol yang berdenting.\nSebuah sepeda lewat. Kring, kring!\nSebuah pintu terbuka. Selamat pagi! Selamat pagi!\nSeekor anjing lari keluar untuk menyapa.\nPenutup toko dibuka. Kerontang, kerontang.\nAnak-anak lewat sambil membawa tas.\nDesanya sudah bangun. Ramai sekali bunyinya.\nDan semuanya dimulai dari satu lampu kecil.",
  v: [["village", "desa"], ["baker", "tukang roti"], ["oven", "oven"], ["bicycle", "sepeda"], ["shutters", "penutup toko"]]
},
{
  t: "Hello, New Day",
  sc: "dawn",
  tm: "am",
  e: ["🌅","👶","🎈","🐦"],
  en: "Today has never happened before. Not once.\nIt is brand new, just for you.\nNobody knows what will be in it.\nMaybe a bird. Maybe a puddle.\nMaybe a friend. Maybe a song.\nMaybe something you have never seen.\nMaybe a big yellow bus. Beep beep.\nPut on your shoes. Open the door.\nBreathe the cool air. Mmm, so fresh.\nThe road goes off around the corner.\nLet us go and find out together.\nHold my hand. Ready? One, two, three.\nHello, new day. Here we come.",
  id: "Hari ini belum pernah ada sebelumnya. Sekali pun.\nBenar-benar baru, khusus untukmu.\nTidak ada yang tahu isinya nanti apa.\nMungkin seekor burung. Mungkin genangan air.\nMungkin seorang teman. Mungkin sebuah lagu.\nMungkin sesuatu yang belum pernah kamu lihat.\nMungkin bus kuning besar. Tin tin.\nPakai sepatumu. Buka pintunya.\nHirup udara sejuknya. Mmm, segar sekali.\nJalannya membelok di tikungan sana.\nAyo kita cari tahu bersama.\nPegang tanganku. Siap? Satu, dua, tiga.\nHalo, hari baru. Kami datang.",
  v: [["today", "hari ini"], ["nobody", "tidak ada yang"], ["fresh", "segar"], ["corner", "tikungan"]]
},
{
  t: "Milk in a Cup",
  sc: "day",
  tm: "am",
  e: ["🥛","🍼","👶","🐄"],
  en: "Are you hungry? I think you are.\nHere comes your milk. Warm and white.\nToday it is in a cup, not a bottle.\nTwo hands on the cup. Hold it tight.\nUp it goes. Careful now. Slow.\nGlug, glug, glug. Little sips.\nOh! A white line on your lip.\nA milk moustache! Ha ha ha.\nWipe it away. All gone.\nOne more sip. Two more sips.\nThe cup is empty. Look inside. Nothing!\nGood drinking, little one. Big and strong.\nNow your tummy is full and warm.",
  id: "Kamu lapar? Sepertinya iya.\nIni susumu. Hangat dan putih.\nHari ini di cangkir, bukan di botol.\nDua tangan memegang cangkirnya. Pegang yang kuat.\nAngkat ke atas. Hati-hati. Pelan-pelan.\nGluk, gluk, gluk. Teguk sedikit-sedikit.\nOh! Ada garis putih di bibirmu.\nKumis susu! Ha ha ha.\nDilap dulu. Sudah hilang.\nSatu teguk lagi. Dua teguk lagi.\nCangkirnya kosong. Lihat ke dalam. Tidak ada!\nPintar minumnya, sayang. Biar besar dan kuat.\nSekarang perutmu penuh dan hangat.",
  v: [["hungry", "lapar"], ["cup", "cangkir"], ["sips", "tegukan kecil"], ["empty", "kosong"], ["tummy", "perut"]]
},
{
  t: "Sweet Porridge",
  sc: "day",
  tm: "am",
  e: ["🍲","👧","🥄","🏠"],
  src: "Brothers Grimm",
  en: "A little girl had a magic pot.\nCook, little pot, cook! she said.\nAnd the pot made sweet warm porridge.\nBubble, bubble, bubble. Mmm, so good.\nStop, little pot, stop! she said.\nAnd the pot stopped at once.\nOne day her mother wanted breakfast.\nCook, little pot, cook! said the mother.\nBut she did not know the stop words.\nPorridge, porridge, porridge, all over the floor.\nOut the door and down the street!\nThen the girl came home. Stop, little pot, stop!\nAnd everyone had porridge for a week.",
  id: "Seorang gadis kecil punya panci ajaib.\nMasak, panci kecil, masak! katanya.\nDan pancinya membuat bubur manis yang hangat.\nBlup, blup, blup. Mmm, enak sekali.\nBerhenti, panci kecil, berhenti! katanya.\nDan pancinya langsung berhenti.\nSuatu hari ibunya ingin sarapan.\nMasak, panci kecil, masak! kata ibunya.\nTapi dia tidak tahu kata untuk berhenti.\nBubur, bubur, bubur, tumpah ke seluruh lantai.\nKeluar pintu dan turun ke jalan!\nLalu gadis itu pulang. Berhenti, panci kecil, berhenti!\nDan semua orang makan bubur selama seminggu.",
  v: [["pot", "panci"], ["porridge", "bubur"], ["bubble", "menggelegak"], ["breakfast", "sarapan"]]
},
{
  t: "Pease Porridge Hot",
  sc: "day",
  tm: "am",
  e: ["🍲","🥄","🧒","👧"],
  src: "Mother Goose",
  en: "Pease porridge hot, pease porridge cold,\npease porridge in the pot, nine days old.\nClap your hands with me. Clap, clap!\nSome like it hot. Blow on it. Whoo.\nSome like it cold. Straight from the pot.\nSome like it nine days old!\nOh no. Nine days? Too old!\nOur porridge is fresh and hot today.\nHere is a spoon. Here is a bowl.\nStir it round. Round and round.\nBlow again. Whoo. Now taste it. Mmm.\nClap, clap, clap. Pease porridge hot.",
  id: "Bubur kacang panas, bubur kacang dingin,\nbubur kacang dalam panci, umur sembilan hari.\nTepuk tangan bersamaku. Tepuk, tepuk!\nAda yang suka panas. Tiup dulu. Fuuh.\nAda yang suka dingin. Langsung dari panci.\nAda yang suka umur sembilan hari!\nAduh. Sembilan hari? Terlalu lama!\nBubur kita segar dan panas hari ini.\nIni sendoknya. Ini mangkuknya.\nAduk memutar. Putar dan putar.\nTiup lagi. Fuuh. Sekarang cicipi. Mmm.\nTepuk, tepuk, tepuk. Bubur kacang panas.",
  v: [["porridge", "bubur"], ["clap", "bertepuk tangan"], ["blow", "meniup"], ["spoon", "sendok"], ["bowl", "mangkuk"]]
},
{
  t: "Hot Cross Buns",
  sc: "day",
  tm: "am",
  e: ["🥐","🧺","🔔","🪙"],
  src: "traditional street cry",
  en: "Hot cross buns! Hot cross buns!\nOne a penny, two a penny, hot cross buns!\nHear the man calling down the street.\nHis basket is warm under a cloth.\nLift the cloth. Ooh, look! Steam!\nRound buns with a cross on top.\nThey smell of sugar and spice.\nOne for you, one for me.\nBreak it open. Careful, it is hot.\nBlow on it. Whoo, whoo. Now bite.\nSoft and sweet and still warm.\nHot cross buns! Come and get them!\nAll gone. Come again tomorrow.",
  id: "Roti salib panas! Roti salib panas!\nSatu sen satu, dua sen dua, roti salib panas!\nDengar orangnya berteriak di jalan.\nKeranjangnya hangat di bawah kain.\nAngkat kainnya. Ooh, lihat! Uap!\nRoti bulat dengan tanda silang di atasnya.\nBaunya seperti gula dan rempah.\nSatu untukmu, satu untukku.\nBelah dua. Hati-hati, masih panas.\nTiup dulu. Fuuh, fuuh. Sekarang gigit.\nLembut dan manis dan masih hangat.\nRoti salib panas! Ayo dibeli!\nHabis. Datang lagi besok.",
  v: [["buns", "roti manis"], ["penny", "sen"], ["basket", "keranjang"], ["steam", "uap"], ["spice", "rempah"]]
},
{
  t: "Polly, Put the Kettle On",
  sc: "day",
  tm: "am",
  e: ["🫖","☕","👧","🐈"],
  src: "Mother Goose",
  en: "Polly, put the kettle on,\nPolly, put the kettle on,\nPolly, put the kettle on,\nwe will all have tea.\nSo Polly fills it at the tap.\nSplash. Then onto the stove it goes.\nWait. Wait. Listen. Can you hear?\nA small sound. Then a bigger sound.\nThen a whistle! Wheeee! The water is ready.\nCups on the table. One, two, three.\nMilk in first. Then the hot tea.\nSukey, take it off again,\nSukey, take it off again,\nand we will all have tea.",
  id: "Polly, taruh ceretnya di kompor,\nPolly, taruh ceretnya di kompor,\nPolly, taruh ceretnya di kompor,\nkita semua mau minum teh.\nJadi Polly mengisinya di keran.\nByur. Lalu ditaruh di atas kompor.\nTunggu. Tunggu. Dengar. Kedengaran tidak?\nBunyi kecil. Lalu bunyi yang lebih besar.\nLalu siulan! Wiiing! Airnya sudah siap.\nCangkir di meja. Satu, dua, tiga.\nSusu dulu. Baru tehnya yang panas.\nSukey, angkat lagi ceretnya,\nSukey, angkat lagi ceretnya,\ndan kita semua minum teh.",
  v: [["kettle", "ceret"], ["tap", "keran"], ["stove", "kompor"], ["whistle", "siulan"], ["tea", "teh"]]
},
{
  t: "The Muffin Man",
  sc: "day",
  tm: "am",
  e: ["🧁","🧺","👨","🔔"],
  src: "traditional song",
  en: "Do you know the muffin man,\nthe muffin man, the muffin man?\nDo you know the muffin man\nwho lives down Drury Lane?\nYes, I know the muffin man!\nHe comes each morning with his tray.\nIt sits on top of his head.\nHow does he keep it up there?\nRing, ring, goes his little bell.\nHere are the muffins, warm in a cloth.\nOne for you. One for you. One for me.\nThank you, muffin man. See you tomorrow.\nOff he goes down Drury Lane.",
  id: "Kenalkah kamu si tukang muffin,\nsi tukang muffin, si tukang muffin?\nKenalkah kamu si tukang muffin\nyang tinggal di Gang Drury?\nYa, aku kenal si tukang muffin!\nDia datang setiap pagi membawa nampan.\nNampannya ditaruh di atas kepala.\nBagaimana caranya supaya tidak jatuh?\nKring, kring, bunyi lonceng kecilnya.\nIni muffinnya, hangat dibungkus kain.\nSatu untukmu. Satu untukmu. Satu untukku.\nTerima kasih, tukang muffin. Sampai jumpa besok.\nDia pergi lagi menyusuri Gang Drury.",
  v: [["muffin", "muffin"], ["tray", "nampan"], ["bell", "lonceng"], ["lane", "gang"]]
},
{
  t: "To Market, To Market",
  sc: "day",
  tm: "am",
  e: ["🐷","🧺","🍅","🥖"],
  src: "Mother Goose",
  en: "To market, to market, to buy a fat pig.\nHome again, home again, jiggety jig!\nHold my hand. Here we go.\nThe market is loud and full of colour.\nRed tomatoes. Green beans. Yellow bananas.\nFish on ice. Shiny and cold.\nA lady calls out. Fresh bread! Fresh bread!\nTo market, to market, to buy a fat hog.\nHome again, home again, jiggety jog!\nThe basket is heavy now. Both hands.\nUp the hill and through the gate.\nHome again, home again, jiggety jig!\nWhat a good morning at the market.",
  id: "Ke pasar, ke pasar, beli babi gemuk.\nPulang lagi, pulang lagi, jigeti jig!\nPegang tanganku. Ayo jalan.\nPasarnya ramai dan penuh warna.\nTomat merah. Buncis hijau. Pisang kuning.\nIkan di atas es. Berkilau dan dingin.\nSeorang ibu berteriak. Roti segar! Roti segar!\nKe pasar, ke pasar, beli babi besar.\nPulang lagi, pulang lagi, jigeti jog!\nKeranjangnya berat sekarang. Pakai dua tangan.\nNaik bukit lalu lewat gerbang.\nPulang lagi, pulang lagi, jigeti jig!\nPagi yang menyenangkan di pasar.",
  v: [["market", "pasar"], ["pig", "babi"], ["basket", "keranjang"], ["heavy", "berat"]]
},
{
  t: "Little Jack Horner",
  sc: "day",
  tm: "am",
  e: ["🥧","🧒","🫐","👍"],
  src: "Mother Goose",
  en: "Little Jack Horner sat in a corner\neating his Christmas pie.\nThe pie was big. The pie was warm.\nHe was all by himself. Very quiet.\nHe put in his thumb. Push!\nDeep into the middle of it.\nAnd he pulled out a plum!\nA big purple plum on his thumb.\nOh! Look at that, he said.\nWhat a good boy am I!\nAnd he ate it in one bite.\nMmm. Then he looked for another one.\nThumb in again. Any more plums?",
  id: "Jack Horner kecil duduk di sudut\nsambil makan pai Natalnya.\nPainya besar. Painya hangat.\nDia sendirian saja. Tenang sekali.\nDia memasukkan ibu jarinya. Tekan!\nMasuk jauh ke bagian tengahnya.\nDan dia menarik keluar sebuah buah plum!\nBuah plum ungu besar di ibu jarinya.\nOh! Lihat itu, katanya.\nAku anak yang pintar!\nDan dia memakannya dalam satu gigitan.\nMmm. Lalu dia mencari satu lagi.\nIbu jari masuk lagi. Ada plum lagi?",
  v: [["corner", "sudut"], ["pie", "pai"], ["thumb", "ibu jari"], ["plum", "buah plum"]]
},
{
  t: "The Queen of Hearts",
  sc: "day",
  tm: "am",
  e: ["👑","🥧","❤️","🤴"],
  src: "Mother Goose",
  en: "The Queen of Hearts, she made some tarts,\nall on a summer day.\nShe rolled the pastry. Roll, roll, roll.\nShe put in jam. Red and sweet.\nInto the oven. Wait, wait, wait.\nOut they came, all golden brown.\nShe put them on the window to cool.\nThe Knave of Hearts, he stole those tarts,\nand took them clean away!\nCrumbs on his chin. Oh dear.\nThe King of Hearts called for those tarts.\nSorry, said the Knave. Very sorry.\nSo they all made tarts together instead.",
  id: "Ratu Hati membuat beberapa kue tar,\npada suatu hari di musim panas.\nDia menggilas adonannya. Gilas, gilas, gilas.\nDia mengisinya dengan selai. Merah dan manis.\nMasuk oven. Tunggu, tunggu, tunggu.\nKeluarlah kuenya, cokelat keemasan.\nDitaruhnya di jendela supaya dingin.\nJack Hati mencuri kue-kue tar itu,\ndan membawanya pergi semua!\nAda remah di dagunya. Aduh.\nRaja Hati menanyakan kue tar itu.\nMaaf, kata Jack. Maaf sekali.\nJadi mereka membuat kue tar bersama-sama.",
  v: [["tarts", "kue tar"], ["pastry", "adonan kue"], ["jam", "selai"], ["crumbs", "remah"]]
},
{
  t: "Simple Simon",
  sc: "day",
  tm: "am",
  e: ["🥧","🧒","🎣","🪣"],
  src: "Mother Goose",
  en: "Simple Simon met a pieman going to the fair.\nSaid Simple Simon to the pieman,\nlet me taste your pie!\nSaid the pieman to Simple Simon,\nfirst show me your penny.\nSimple Simon turned his pockets out.\nNothing. Not one coin. Oh dear.\nSo he went fishing in a bucket.\nFor a whale! In a bucket!\nSilly Simon. There are none in there.\nBut the pieman laughed and laughed.\nHere, he said. Take half of mine.\nAnd they ate it in the sun.",
  id: "Simon si Lugu bertemu tukang pai yang mau ke pasar malam.\nKata Simon si Lugu pada tukang pai,\nboleh aku cicipi paimu!\nKata tukang pai pada Simon si Lugu,\ntunjukkan dulu uangmu.\nSimon si Lugu membalik sakunya.\nKosong. Tidak ada satu koin pun. Aduh.\nJadi dia pergi memancing di dalam ember.\nMau menangkap ikan paus! Di dalam ember!\nSimon yang konyol. Tidak ada apa-apa di situ.\nTapi tukang pai itu tertawa terbahak-bahak.\nIni, katanya. Ambil separuh punyaku.\nDan mereka memakannya di bawah matahari.",
  v: [["fair", "pasar malam"], ["pie", "pai"], ["penny", "sen"], ["pockets", "saku"], ["whale", "ikan paus"]]
},
{
  t: "Jack Sprat",
  sc: "day",
  tm: "am",
  e: ["🍽️","👨","👩","🐈"],
  src: "Mother Goose",
  en: "Jack Sprat could eat no fat.\nHis wife could eat no lean.\nSo between the two of them,\nthey licked the platter clean!\nHere is Jack sitting down with his plate.\nOnly the lean for him, please. Thank you.\nHere is his wife sitting down with hers.\nOnly the fat for her, please. Thank you.\nThey eat together and they talk and laugh.\nMunch, munch. Chew, chew. Yum, yum.\nAnd when the whole meal is over,\nthere is nothing left at all.\nNot one crumb. Two clean plates!",
  id: "Jack Sprat tidak bisa makan lemak.\nIstrinya tidak bisa makan daging tanpa lemak.\nJadi berdua saja mereka,\nmenghabiskan piring besarnya sampai bersih!\nIni Jack duduk dengan piringnya.\nHanya bagian tanpa lemak untuknya. Terima kasih.\nIni istrinya duduk dengan piringnya.\nHanya bagian lemak untuknya. Terima kasih.\nMereka makan bersama sambil mengobrol dan tertawa.\nNyam, nyam. Kunyah, kunyah. Enak, enak.\nDan ketika makanannya sudah habis,\ntidak ada yang tersisa sama sekali.\nSatu remah pun tidak. Dua piring bersih!",
  v: [["fat", "lemak"], ["lean", "daging tanpa lemak"], ["platter", "piring besar"], ["crumb", "remah"]]
},
{
  t: "Little Tommy Tucker",
  sc: "day",
  tm: "am",
  e: ["🧒","🍞","🧈","🎵"],
  src: "Mother Goose",
  en: "Little Tommy Tucker sings for his supper.\nBut this morning he sings for his breakfast.\nLa la la! What shall we give him?\nBrown bread and butter, thick and soft.\nSpread it on. Smooth, smooth, smooth.\nHow shall he cut it without a knife?\nHow shall he eat it without a plate?\nNever mind. Use your two hands.\nSing again, Tommy. La la la!\nOne more song and one more slice.\nCrumbs everywhere. On the floor. On his chin.\nThe birds will come and eat them.\nThank you for the song, Tommy Tucker.",
  id: "Tommy Tucker kecil menyanyi untuk makan malamnya.\nTapi pagi ini dia menyanyi untuk sarapannya.\nLa la la! Kita beri dia apa?\nRoti cokelat dan mentega, tebal dan lembut.\nOleskan. Rata, rata, rata.\nBagaimana dia memotongnya tanpa pisau?\nBagaimana dia memakannya tanpa piring?\nTidak apa-apa. Pakai dua tangan saja.\nNyanyi lagi, Tommy. La la la!\nSatu lagu lagi dan satu potong lagi.\nRemah di mana-mana. Di lantai. Di dagunya.\nNanti burung-burung datang memakannya.\nTerima kasih untuk lagunya, Tommy Tucker.",
  v: [["supper", "makan malam"], ["butter", "mentega"], ["knife", "pisau"], ["slice", "potong"]]
},
{
  t: "Old Mother Hubbard",
  sc: "day",
  tm: "am",
  e: ["🐕","👵","🦴","🥖"],
  src: "Mother Goose",
  en: "Old Mother Hubbard went to the cupboard\nto get her poor dog a bone.\nBut when she got there, the cupboard was bare,\nand so the poor dog had none.\nThe dog looked up with big sad eyes.\nWait here, she said. Wait here.\nOn went her coat. On went her hat.\nOff to the shop. Ding, ding!\nBack she came with a big bag.\nA bone! And bread! And milk!\nThe dog jumped up. Woof, woof, woof!\nHe danced around on his two legs.\nGood morning again, said Mother Hubbard.",
  id: "Nenek Hubbard pergi ke lemari\nmau mengambil tulang untuk anjingnya.\nTapi setibanya di sana, lemarinya kosong,\njadi anjing malang itu tidak dapat apa-apa.\nAnjingnya menatap dengan mata sedih yang besar.\nTunggu di sini, katanya. Tunggu di sini.\nMantelnya dipakai. Topinya dipakai.\nPergi ke toko. Ding, ding!\nDia kembali membawa kantong besar.\nSebuah tulang! Dan roti! Dan susu!\nAnjingnya melompat. Guk, guk, guk!\nDia menari dengan dua kakinya.\nSelamat pagi lagi, kata Nenek Hubbard.",
  v: [["cupboard", "lemari"], ["bone", "tulang"], ["bare", "kosong"], ["coat", "mantel"]]
},
{
  t: "Here We Go Round the Mulberry Bush",
  sc: "day",
  tm: "am",
  e: ["🌳","🧒","🧼","👕"],
  src: "traditional song",
  en: "Here we go round the mulberry bush,\nthe mulberry bush, the mulberry bush.\nHere we go round the mulberry bush,\nso early in the morning.\nThis is the way we wash our face,\nwash our face, wash our face.\nSplash! This is the way we brush our hair,\nbrush our hair, brush our hair.\nThis is the way we put on our clothes,\none arm, two arms, head through the hole.\nThis is the way we eat our toast,\ncrunch, crunch, crunch.\nAll so early in the morning.",
  id: "Ayo kita kelilingi pohon murbei,\npohon murbei, pohon murbei.\nAyo kita kelilingi pohon murbei,\npagi-pagi sekali.\nBegini caranya kita mencuci muka,\nmencuci muka, mencuci muka.\nByur! Begini caranya kita menyisir rambut,\nmenyisir rambut, menyisir rambut.\nBegini caranya kita memakai baju,\nsatu tangan, dua tangan, kepala lewat lubangnya.\nBegini caranya kita makan roti panggang,\nkriuk, kriuk, kriuk.\nSemuanya pagi-pagi sekali.",
  v: [["bush", "semak"], ["wash", "mencuci"], ["brush", "menyisir"], ["clothes", "baju"]]
},
{
  t: "Wash the Dishes",
  sc: "day",
  tm: "am",
  e: ["🍽️","🧽","🫧","🔔"],
  src: "traditional rhyme",
  en: "Wash the dishes, wipe the dishes,\nring the bell for tea.\nBreakfast is over. Look at the mess!\nPlates and cups and spoons and bowls.\nInto the warm water they go.\nBubbles! So many bubbles. Pop, pop.\nWash. Wipe. Put away. Wash. Wipe. Put away.\nYour job is the spoons. Careful now.\nRub them till they shine like little mirrors.\nCan you see your face in there?\nA funny long face! Ha ha.\nAll done. The kitchen is tidy.\nRing the bell. Ding, ding, ding.",
  id: "Cuci piringnya, lap piringnya,\nbunyikan lonceng untuk minum teh.\nSarapan sudah selesai. Lihat berantakannya!\nPiring dan cangkir dan sendok dan mangkuk.\nSemua masuk ke air hangat.\nGelembung! Banyak sekali gelembungnya. Pop, pop.\nCuci. Lap. Simpan. Cuci. Lap. Simpan.\nTugasmu bagian sendok. Hati-hati ya.\nGosok sampai berkilau seperti cermin kecil.\nKelihatan tidak wajahmu di situ?\nWajah panjang yang lucu! Ha ha.\nSelesai. Dapurnya sudah rapi.\nBunyikan loncengnya. Ding, ding, ding.",
  v: [["dishes", "piring"], ["wipe", "mengelap"], ["bubbles", "gelembung"], ["shine", "berkilau"], ["tidy", "rapi"]]
},
{
  t: "Cobbler, Cobbler, Mend My Shoe",
  sc: "day",
  tm: "am",
  e: ["👞","🔨","👨","🧵"],
  src: "Mother Goose",
  en: "Cobbler, cobbler, mend my shoe.\nGet it done by half past two.\nHere is the hole. Look, my toe!\nIt says hello every time I walk.\nThe cobbler smiles. Sit down, he says.\nHe has a little hammer. Tap, tap, tap.\nHe has thick thread and a big needle.\nIn and out. In and out. Pull tight.\nA piece of new leather on the bottom.\nTap, tap, tap. There. All mended.\nStitch it up and stitch it down.\nNow a nail on the heel.\nThank you, cobbler. My shoe is new again.",
  id: "Tukang sepatu, tukang sepatu, perbaiki sepatuku.\nSelesaikan sebelum pukul setengah tiga.\nIni lubangnya. Lihat, jari kakiku!\nDia menyapa setiap kali aku berjalan.\nTukang sepatu tersenyum. Duduklah, katanya.\nDia punya palu kecil. Tok, tok, tok.\nDia punya benang tebal dan jarum besar.\nMasuk dan keluar. Masuk dan keluar. Tarik kencang.\nSepotong kulit baru di bagian bawahnya.\nTok, tok, tok. Nah. Sudah diperbaiki.\nJahit ke atas dan jahit ke bawah.\nSekarang satu paku di tumitnya.\nTerima kasih. Sepatuku jadi baru lagi.",
  v: [["cobbler", "tukang sepatu"], ["mend", "memperbaiki"], ["hammer", "palu"], ["needle", "jarum"], ["leather", "kulit"]]
},
{
  t: "The Grand Old Duke of York",
  sc: "day",
  tm: "am",
  e: ["🥁","🪖","🎺","⛰️"],
  src: "traditional song",
  en: "Oh, the grand old Duke of York,\nhe had ten thousand men.\nHe marched them up to the top of the hill,\nand he marched them down again.\nLeft, right. Left, right. Up we go.\nUp, up, up. Puff, puff. So high!\nAnd when they were up, they were up.\nAnd when they were down, they were down.\nAnd when they were only halfway up,\nthey were neither up nor down.\nCan you march with me? Stamp, stamp.\nUp on the sofa. Down on the floor.\nUp. Down. Up. Down. Ha ha ha.",
  id: "Oh, Adipati Tua York yang hebat,\ndia punya sepuluh ribu prajurit.\nDia membawa mereka berbaris ke puncak bukit,\nlalu membawa mereka turun lagi.\nKiri, kanan. Kiri, kanan. Ayo naik.\nNaik, naik, naik. Hah, hah. Tinggi sekali!\nDan waktu di atas, ya di atas.\nDan waktu di bawah, ya di bawah.\nDan waktu baru setengah jalan ke atas,\nmereka tidak di atas dan tidak di bawah.\nBisa berbaris bersamaku? Hentak, hentak.\nNaik ke sofa. Turun ke lantai.\nNaik. Turun. Naik. Turun. Ha ha ha.",
  v: [["marched", "berbaris"], ["thousand", "seribu"], ["hill", "bukit"], ["halfway", "setengah jalan"]]
},
{
  t: "Pop Goes the Weasel",
  sc: "day",
  tm: "am",
  e: ["🐒","🪡","🧵","🎶"],
  src: "traditional song",
  en: "Half a pound of tuppenny rice,\nhalf a pound of sweet dark treacle.\nThat is the way the money goes.\nPop! goes the weasel.\nUp and down the City Road we walk,\nin and out the Eagle we go.\nThat is the way the money goes.\nPop! goes the weasel.\nCan you jump when you hear the pop?\nWait for it. Wait for it. Wait.\nPop! Jump! Ha ha ha. You did it.\nAgain? All right. One more time then.\nPop! goes the weasel.",
  id: "Setengah pon beras seharga dua sen,\nsetengah pon sirup gula yang manis dan gelap.\nBegitulah uangnya habis.\nPop! bunyi si musang.\nNaik turun Jalan Kota kita berjalan,\nkeluar masuk kedai Eagle kita pergi.\nBegitulah uangnya habis.\nPop! bunyi si musang.\nBisa melompat waktu dengar bunyi pop?\nTunggu ya. Tunggu ya. Tunggu.\nPop! Lompat! Ha ha ha. Kamu bisa.\nLagi? Baiklah. Sekali lagi ya.\nPop! bunyi si musang.",
  v: [["pound", "pon"], ["rice", "beras"], ["treacle", "sirup gula"], ["money", "uang"]]
},
{
  t: "This Is the Way the Ladies Ride",
  sc: "day",
  tm: "am",
  e: ["🐴","👶","👩","🤠"],
  src: "Mother Goose",
  en: "Come and sit up here on my knees.\nThis is the way the ladies ride,\nnim, nim, nim, nim, all the way to town.\nSoft and slow and very neat.\nThis is the way the gentlemen ride,\ntrot, trot, trot, trot, off to the fair.\nA little faster now. Bounce, bounce.\nAnd this is the way the farmer rides,\ngallop, gallop, gallop, over the field!\nHold on tight! Faster! Faster!\nAnd down, down, down into the ditch!\nWhoops! Ha ha ha ha. Are you safe?\nAgain? Up you come. Nim, nim, nim.",
  id: "Ayo duduk di atas lututku.\nBegini caranya para nyonya menunggang,\nnim, nim, nim, nim, sampai ke kota.\nLembut dan pelan dan rapi sekali.\nBegini caranya para tuan menunggang,\nderap, derap, derap, derap, pergi ke pasar malam.\nSedikit lebih cepat. Guncang, guncang.\nDan begini caranya pak tani menunggang,\nkencang, kencang, kencang, melintasi ladang!\nPegangan yang kuat! Lebih cepat! Lebih cepat!\nDan turun, turun, turun ke dalam parit!\nUpsss! Ha ha ha ha. Kamu tidak apa-apa?\nLagi? Naik sini. Nim, nim, nim.",
  v: [["knees", "lutut"], ["trot", "berlari kecil"], ["gallop", "berlari kencang"], ["ditch", "parit"]]
},
{
  t: "Brush, Brush, Brush",
  sc: "day",
  tm: "am",
  e: ["🪥","😁","🚰","🪞"],
  en: "Open wide. Let me see your teeth.\nOne, two, three, four. Little white teeth.\nHere is the brush. It is soft.\nA tiny bit of paste. Just a dot.\nNow up and down. Scrub, scrub, scrub.\nThe front ones. The side ones. The back ones.\nRound and round in little circles.\nDo not forget your tongue. Bleh!\nNow spit. Ptoo! Into the sink.\nRinse with water. Swish, swish. Spit again.\nBig smile in the mirror. Shiny!\nClean teeth for a whole new day.\nGood job. See you again tonight.",
  id: "Buka lebar. Coba lihat gigimu.\nSatu, dua, tiga, empat. Gigi kecil putih.\nIni sikatnya. Lembut sekali.\nSedikit saja pastanya. Satu titik.\nSekarang naik turun. Gosok, gosok, gosok.\nYang depan. Yang samping. Yang belakang.\nMemutar-mutar dalam lingkaran kecil.\nJangan lupa lidahmu. Bleh!\nSekarang buang. Ptu! Ke wastafel.\nKumur dengan air. Kur, kur. Buang lagi.\nSenyum lebar di cermin. Berkilau!\nGigi bersih untuk hari yang baru.\nBagus. Sampai jumpa lagi nanti malam.",
  v: [["teeth", "gigi"], ["brush", "sikat"], ["tongue", "lidah"], ["rinse", "berkumur"], ["mirror", "cermin"]]
},
{
  t: "Two Little Shoes",
  sc: "day",
  tm: "am",
  e: ["👟","🧦","🚪","🐕"],
  en: "Two little shoes are waiting by the door.\nOne, two. A pair. They match.\nThis one is the left. This one is the right.\nCan you find which foot goes where?\nOops! That is the wrong foot. Try again.\nThere. Now they are happy.\nPush your heel down. Push, push.\nNow the strap. Pull it across. Click!\nStand up. How do they feel?\nWalk to me. Tap, tap, tap.\nThey make a little sound on the floor.\nJump! Tap tap! Run! Tap tap tap!\nGood shoes. Now we can go outside.",
  id: "Dua sepatu kecil menunggu di dekat pintu.\nSatu, dua. Sepasang. Mereka cocok.\nYang ini kiri. Yang ini kanan.\nBisa tebak kaki mana untuk yang mana?\nUps! Itu kaki yang salah. Coba lagi.\nNah. Sekarang mereka senang.\nDorong tumitmu ke bawah. Dorong, dorong.\nSekarang talinya. Tarik menyeberang. Klik!\nBerdiri. Bagaimana rasanya?\nJalan ke sini. Tap, tap, tap.\nAda bunyi kecil di lantai.\nLompat! Tap tap! Lari! Tap tap tap!\nSepatu yang bagus. Sekarang kita bisa keluar.",
  v: [["shoes", "sepatu"], ["pair", "sepasang"], ["heel", "tumit"], ["strap", "tali"]]
},
{
  t: "The Hat on My Head",
  sc: "day",
  tm: "am",
  e: ["🧢","🌞","🪞","🧣"],
  en: "The sun is bright today. Very bright.\nSo we need a hat. Where is it?\nUnder the bed? No. Behind the door? No.\nOn the chair! There it is.\nUp it goes. Onto your head. Plop.\nToo big! It falls over your eyes.\nI cannot see you. Where did you go?\nPeep! There you are. Ha ha ha.\nPush it back a little bit. Better.\nNow you have a small round shadow.\nIt walks along the ground with you.\nGoodbye, hot sun. You cannot reach me.\nOff we go, you and your hat.",
  id: "Mataharinya terang hari ini. Terang sekali.\nJadi kita perlu topi. Di mana ya?\nDi bawah tempat tidur? Tidak. Di balik pintu? Tidak.\nDi kursi! Itu dia.\nDipasang ke atas. Ke kepalamu. Plop.\nKebesaran! Turun menutupi matamu.\nAku tidak bisa lihat kamu. Kamu ke mana?\nCilukba! Itu dia. Ha ha ha.\nDorong sedikit ke belakang. Nah, lebih baik.\nSekarang kamu punya bayangan bulat kecil.\nDia ikut berjalan di tanah bersamamu.\nSelamat tinggal, matahari panas. Kamu tidak bisa menggapaiku.\nAyo jalan, kamu dan topimu.",
  v: [["hat", "topi"], ["chair", "kursi"], ["shadow", "bayangan"], ["ground", "tanah"]]
},
{
  t: "Tom Kitten Gets Dressed",
  sc: "day",
  tm: "am",
  e: ["🐈","👕","🦆","🌸"],
  src: "Beatrix Potter, 1907",
  en: "Mother Tabitha Twitchit had three little kittens.\nMoppet, Mittens, and Tom Kitten.\nCompany is coming for tea today!\nSo she washed their faces. Scrub, scrub.\nShe brushed their fur. Brush, brush.\nThen she put clothes on them. Oh dear.\nTom Kitten was round and fat.\nThe buttons popped off. Pop! Pop! Pop!\nMother Tabitha sewed them on again.\nOut they went into the garden.\nUp the wall. Over the top.\nBy the end, the clothes were gone.\nThree dirty kittens and no buttons at all.\nBut what a good morning they had.",
  id: "Ibu Tabitha Twitchit punya tiga anak kucing.\nMoppet, Mittens, dan Tom Kitten.\nHari ini ada tamu mau minum teh!\nJadi dia mencuci muka mereka. Gosok, gosok.\nDia menyisir bulu mereka. Sisir, sisir.\nLalu dia memakaikan baju. Aduh.\nTom Kitten badannya bulat dan gemuk.\nKancingnya copot. Pop! Pop! Pop!\nIbu Tabitha menjahitnya kembali.\nMereka keluar ke taman.\nNaik tembok. Sampai ke atas.\nAkhirnya bajunya hilang semua.\nTiga anak kucing kotor dan tanpa kancing.\nTapi paginya menyenangkan sekali.",
  v: [["kittens", "anak kucing"], ["fur", "bulu"], ["buttons", "kancing"], ["dirty", "kotor"]]
},
{
  t: "The Princess and the Pea",
  sc: "day",
  tm: "am",
  e: ["👸","🛏️","🫛","👑"],
  src: "Hans Christian Andersen, 1835",
  en: "One rainy night a girl knocked at the door.\nI am a real princess, she said.\nThe old queen wanted to be sure.\nSo she put one small pea on the bed.\nThen twenty mattresses on top of the pea.\nThen twenty soft blankets on top of those.\nUp, up, up. What a tall bed!\nGood night, said the queen. Sleep well.\nIn the morning the queen asked, did you sleep?\nOh no! said the girl. Something hard!\nI could feel it all night long.\nOnly a real princess could feel that.\nSo she was one after all.",
  id: "Suatu malam hujan seorang gadis mengetuk pintu.\nAku ini putri sungguhan, katanya.\nRatu tua itu ingin memastikan.\nJadi dia menaruh satu kacang polong kecil di ranjang.\nLalu dua puluh kasur di atas kacang itu.\nLalu dua puluh selimut lembut di atasnya lagi.\nNaik, naik, naik. Tinggi sekali ranjangnya!\nSelamat malam, kata ratu. Tidur yang nyenyak.\nPaginya ratu bertanya, bisa tidur tidak?\nAduh! kata si gadis. Ada yang keras!\nAku merasakannya semalaman.\nHanya putri sungguhan yang bisa merasakannya.\nJadi ternyata dia memang putri sungguhan.",
  v: [["princess", "putri"], ["pea", "kacang polong"], ["mattresses", "kasur"], ["blankets", "selimut"]]
},
{
  t: "Lazy Jack",
  sc: "day",
  tm: "am",
  e: ["🧒","🫏","🧀","🪙"],
  src: "English folk tale",
  en: "Jack was slow. Very, very slow.\nOn Monday he earned a penny.\nHe put it in his pocket. It fell out.\nCarry it in your hand, said his mother.\nOn Tuesday he earned a jug of milk.\nHe carried it in his hand. Splash! All gone.\nCarry it on your head, said his mother.\nOn Wednesday he earned a big soft cheese.\nHe carried it on his head. It melted.\nCarry it in your hands, said his mother.\nOn Thursday he earned a donkey.\nHe carried it on his back! Hee haw!\nEveryone laughed and laughed. Oh, Jack.",
  id: "Jack itu lambat. Lambat sekali.\nHari Senin dia mendapat upah satu sen.\nDitaruhnya di saku. Jatuh keluar.\nBawa di tanganmu, kata ibunya.\nHari Selasa dia mendapat sekendi susu.\nDibawanya di tangan. Tumpah! Habis semua.\nBawa di atas kepalamu, kata ibunya.\nHari Rabu dia mendapat keju besar yang lembut.\nDibawanya di atas kepala. Kejunya meleleh.\nBawa di kedua tanganmu, kata ibunya.\nHari Kamis dia mendapat seekor keledai.\nDibawanya di punggung! Hik hok!\nSemua orang tertawa terbahak-bahak. Aduh, Jack.",
  v: [["earned", "mendapat upah"], ["pocket", "saku"], ["jug", "kendi"], ["cheese", "keju"], ["melted", "meleleh"]]
},
{
  t: "The Old Woman and Her Pig",
  sc: "day",
  tm: "am",
  e: ["🐷","👵","🐕","🐄"],
  src: "Joseph Jacobs",
  en: "An old woman found a coin one morning.\nShe went to market and bought a pig.\nOn the way home they came to a gate.\nThe pig would not go over. No!\nDog, dog, bite pig! The dog said no.\nStick, stick, beat dog! The stick said no.\nFire, fire, burn stick! The fire said no.\nWater, water, put out fire! The water said no.\nCow, cow, drink water! Bring me hay, said the cow.\nSo she found some hay for the cow.\nThe cow drank. The water ran. The fire burned.\nAnd the little pig hopped over the gate.\nHome at last, just in time for breakfast.",
  id: "Seorang nenek menemukan koin suatu pagi.\nDia pergi ke pasar dan membeli seekor babi.\nDi jalan pulang mereka sampai di sebuah gerbang.\nBabinya tidak mau lewat. Tidak mau!\nAnjing, anjing, gigit babi! Anjingnya menolak.\nTongkat, tongkat, pukul anjing! Tongkatnya menolak.\nApi, api, bakar tongkat! Apinya menolak.\nAir, air, padamkan api! Airnya menolak.\nSapi, sapi, minum air! Bawakan jerami, kata sapi.\nJadi dia mencarikan jerami untuk sapinya.\nSapinya minum. Airnya mengalir. Apinya menyala.\nDan babi kecil itu melompati gerbang.\nSampai rumah, pas waktunya sarapan.",
  v: [["coin", "koin"], ["gate", "gerbang"], ["stick", "tongkat"], ["hay", "jerami"]]
},
{
  t: "Stone Soup",
  sc: "day",
  tm: "am",
  e: ["🍲","🪨","🥕","🧅"],
  src: "European folk tale",
  en: "A hungry traveller came to a village.\nNobody had food to share. Sorry, sorry.\nSo he took out a big pot.\nHe filled it with water and put in a stone.\nStone soup! he said. My favourite.\nThe people came to look. A stone?\nIt is good, he said. Better with a carrot.\nI have a carrot! said a woman.\nBetter still with an onion, he said.\nI have an onion! said a man.\nPotatoes. Beans. Salt. Everyone brought something.\nBubble, bubble. Mmm, what a smell.\nAnd the whole village ate together.",
  id: "Seorang pengembara yang lapar datang ke sebuah desa.\nTidak ada yang punya makanan untuk dibagi. Maaf, maaf.\nJadi dia mengeluarkan panci besar.\nDiisinya dengan air lalu dimasukkan sebuah batu.\nSup batu! katanya. Makanan kesukaanku.\nOrang-orang datang melihat. Batu?\nEnak, katanya. Lebih enak lagi kalau ada wortel.\nAku punya wortel! kata seorang ibu.\nLebih enak lagi kalau ada bawang, katanya.\nAku punya bawang! kata seorang bapak.\nKentang. Buncis. Garam. Semua orang membawa sesuatu.\nBlup, blup. Mmm, harum sekali.\nDan sedesa itu makan bersama-sama.",
  v: [["traveller", "pengembara"], ["stone", "batu"], ["carrot", "wortel"], ["onion", "bawang"], ["village", "desa"]]
},
{
  t: "The Fox and the Crow",
  sc: "day",
  tm: "am",
  e: ["🦊","🐦‍⬛","🧀","🌳"],
  src: "Aesop's Fables",
  en: "A crow found a piece of cheese.\nUp she flew into a tall tree.\nShe sat on a branch with the cheese in her beak.\nAlong came a hungry fox. Ooh, cheese.\nWhat a beautiful bird, said the fox.\nSuch shiny black feathers! Such bright eyes!\nThe crow sat up tall and proud.\nI am sure you sing beautifully too, said the fox.\nPlease, one song. Just one.\nThe crow opened her beak. Caw!\nDown fell the cheese, straight to the fox.\nThank you, said the fox. Delicious.\nNext time, keep your beak closed.",
  id: "Seekor burung gagak menemukan sepotong keju.\nDia terbang naik ke pohon yang tinggi.\nDia hinggap di dahan dengan keju di paruhnya.\nDatanglah seekor rubah yang lapar. Ooh, keju.\nBurung yang cantik sekali, kata rubah.\nBulu hitamnya berkilau! Matanya cerah!\nSi gagak duduk tegak dengan bangga.\nPasti suaramu merdu juga, kata rubah.\nTolong, satu lagu saja. Satu saja.\nSi gagak membuka paruhnya. Gaak!\nKejunya jatuh, langsung ke arah rubah.\nTerima kasih, kata rubah. Lezat sekali.\nLain kali, tutup saja paruhmu.",
  v: [["crow", "burung gagak"], ["cheese", "keju"], ["branch", "dahan"], ["feathers", "bulu"]]
},
{
  t: "The Dog and His Bone",
  sc: "day",
  tm: "am",
  e: ["🐕","🦴","🌉","💧"],
  src: "Aesop's Fables",
  en: "A dog found a big juicy bone.\nWhat luck! He picked it up.\nOff he trotted to eat it at home.\nHe came to a little wooden bridge.\nHe looked down into the water.\nAnother dog! With another bone!\nAnd that bone looks bigger than mine.\nI want that one too, he thought.\nSo he opened his mouth to bark. Woof!\nSplash! Down went his bone into the water.\nAnd the other dog was gone.\nIt was only himself in the water.\nOne bone was enough, silly dog.",
  id: "Seekor anjing menemukan tulang besar yang berair.\nBeruntung sekali! Diambilnya tulang itu.\nDia berlari kecil mau memakannya di rumah.\nDia sampai di sebuah jembatan kayu kecil.\nDia melihat ke bawah, ke dalam air.\nAda anjing lain! Dengan tulang lain!\nDan tulang itu kelihatan lebih besar dari punyaku.\nAku mau yang itu juga, pikirnya.\nJadi dia membuka mulut untuk menggonggong. Guk!\nByur! Tulangnya jatuh ke dalam air.\nDan anjing yang satunya hilang.\nItu cuma bayangan dirinya sendiri di air.\nSatu tulang sudah cukup, anjing bodoh.",
  v: [["juicy", "berair"], ["bone", "tulang"], ["bridge", "jembatan"], ["bark", "menggonggong"]]
},
{
  t: "Belling the Cat",
  sc: "day",
  tm: "am",
  e: ["🐭","🐈","🔔","🐁"],
  src: "Aesop's Fables",
  en: "The mice had a meeting one morning.\nThe cat is too quiet, they said.\nShe comes and we never hear her.\nWhat can we do? Think, think, think.\nA young mouse stood up. I know!\nLet us put a bell on the cat.\nThen we will hear her. Ring, ring!\nWhat a good idea! All the mice clapped.\nBut a very old mouse spoke slowly.\nYes, said the old mouse. Very clever.\nBut who will put the bell on the cat?\nThe room went quiet. Nobody moved.\nIt is easy to say. Hard to do.",
  id: "Tikus-tikus mengadakan rapat suatu pagi.\nKucing itu terlalu tidak berbunyi, kata mereka.\nDia datang dan kita tidak pernah mendengarnya.\nApa yang bisa kita lakukan? Pikir, pikir, pikir.\nSeekor tikus muda berdiri. Aku tahu!\nAyo kita pasang lonceng di kucing itu.\nNanti kita bisa mendengarnya. Kring, kring!\nIde bagus! Semua tikus bertepuk tangan.\nTapi seekor tikus tua bicara pelan-pelan.\nBenar, kata tikus tua itu. Pintar sekali.\nTapi siapa yang akan memasang loncengnya?\nRuangannya jadi sunyi. Tidak ada yang bergerak.\nGampang diucapkan. Susah dilakukan.",
  v: [["mice", "tikus-tikus"], ["bell", "lonceng"], ["idea", "ide"], ["clever", "pintar"]]
},
{
  t: "Good Morning, Garden",
  sc: "garden",
  tm: "am",
  e: ["🌻","🐝","🐌","🦋"],
  en: "Push the door. Step outside.\nOoh! The air is cool on your face.\nThe grass is wet with dew. Sparkle, sparkle.\nBare feet on wet grass. Cold! Ha!\nLook, the flowers are opening up.\nSlowly, slowly. Good morning, flowers.\nA bee is already working. Buzz, buzz.\nA snail left a shiny road on the path.\nWhere did he go? Follow it.\nUnder the leaf. There he is!\nA bird pulls a worm. Pull, pull, pop!\nEverybody is busy in the morning.\nGood morning, garden. We came to say hello.",
  id: "Dorong pintunya. Melangkah keluar.\nOoh! Udaranya sejuk di wajahmu.\nRumputnya basah oleh embun. Berkilau, berkilau.\nKaki telanjang di rumput basah. Dingin! Ha!\nLihat, bunga-bunganya sedang mekar.\nPerlahan, perlahan. Selamat pagi, bunga.\nSeekor lebah sudah bekerja. Nguung, nguung.\nSeekor siput meninggalkan jalan berkilau di jalan setapak.\nDia ke mana ya? Ayo ikuti.\nDi bawah daun. Itu dia!\nSeekor burung menarik cacing. Tarik, tarik, plop!\nSemuanya sibuk di pagi hari.\nSelamat pagi, taman. Kami datang menyapa.",
  v: [["dew", "embun"], ["bee", "lebah"], ["snail", "siput"], ["worm", "cacing"], ["leaf", "daun"]]
},
{
  t: "Mary, Mary, Quite Contrary",
  sc: "garden",
  tm: "am",
  e: ["🌷","👧","🐚","🔔"],
  src: "Mother Goose",
  en: "Mary, Mary, quite contrary, good morning to you.\nHow does your garden grow?\nWith silver bells and cockle shells\nand pretty maids all in a row.\nCome and see it, says Mary. This way.\nHere are the silver bells. Ring, ring, ring.\nHere are the shells from the sea.\nListen. Can you hear the waves?\nAnd here are the flowers in a row.\nOne, two, three, four, five.\nAll standing up straight like little green soldiers.\nMary gives them water. Glug, glug.\nGrow well, garden. See you tomorrow.",
  id: "Mary, Mary, si keras kepala, selamat pagi untukmu.\nBagaimana tamanmu tumbuh?\nDengan lonceng perak dan kulit kerang\ndan gadis-gadis manis berbaris rapi.\nAyo lihat, kata Mary. Lewat sini.\nIni lonceng peraknya. Kring, kring, kring.\nIni kerang-kerang dari laut.\nDengarkan. Kedengaran suara ombaknya?\nDan ini bunga-bunganya, berbaris.\nSatu, dua, tiga, empat, lima.\nSemua berdiri tegak seperti prajurit hijau kecil.\nMary menyiram mereka. Guyur, guyur.\nTumbuh yang baik ya, taman. Sampai besok.",
  v: [["garden", "taman"], ["bells", "lonceng"], ["shells", "kerang"], ["row", "barisan"]]
},
{
  t: "Ring a Ring o' Roses",
  sc: "garden",
  tm: "am",
  e: ["🌹","🧒","👧","🌿"],
  src: "traditional song",
  en: "Ring a ring o' roses,\na pocket full of posies.\nHold my hands. Round we go.\nRound and round and round we spin.\nA tishoo! A tishoo!\nWe all fall down!\nPlop. Down on the soft wet grass. Ha ha!\nAre you all right? Yes, all right!\nUp we get. Take hands again.\nRing a ring o' roses,\na pocket full of posies.\nThe flowers smell so sweet today.\nA tishoo! A tishoo! We all fall down!\nOne more time? Yes, one more time.",
  id: "Lingkaran bunga mawar,\nsaku penuh seikat bunga.\nPegang tanganku. Ayo berputar.\nBerputar dan berputar dan berputar.\nHatsyi! Hatsyi!\nKita semua jatuh!\nPlop. Jatuh di rumput basah yang lembut. Ha ha!\nKamu tidak apa-apa? Tidak apa-apa!\nAyo berdiri. Pegangan tangan lagi.\nLingkaran bunga mawar,\nsaku penuh seikat bunga.\nBunganya harum sekali hari ini.\nHatsyi! Hatsyi! Kita semua jatuh!\nSekali lagi? Ya, sekali lagi.",
  v: [["roses", "bunga mawar"], ["posies", "seikat bunga"], ["spin", "berputar"], ["grass", "rumput"]]
},
{
  t: "The Farmer in the Dell",
  sc: "garden",
  tm: "am",
  e: ["👨‍🌾","🐕","🐈","🐭","🧀"],
  src: "traditional song",
  en: "The farmer in the dell, the farmer in the dell.\nHi ho, the derry oh, the farmer in the dell.\nGood morning, farmer. It is time to work.\nThe farmer takes a wife. Hello, wife.\nThe wife takes the child. Hello, child.\nThe child takes the dog. Woof, woof!\nThe dog takes the cat. Meow, meow!\nThe cat takes the mouse. Squeak, squeak!\nThe mouse takes the cheese. Nibble, nibble.\nAnd the cheese stands all alone.\nPoor lonely cheese. Ha ha ha.\nHi ho, the derry oh,\nthe cheese stands all alone.",
  id: "Pak tani di lembah, pak tani di lembah.\nHai ho, deri oh, pak tani di lembah.\nSelamat pagi, pak tani. Waktunya bekerja.\nPak tani menggandeng istri. Halo, istri.\nIstrinya menggandeng anak. Halo, anak.\nAnaknya menggandeng anjing. Guk, guk!\nAnjingnya menggandeng kucing. Meong, meong!\nKucingnya menggandeng tikus. Cit, cit!\nTikusnya menggandeng keju. Kriuk, kriuk.\nDan kejunya berdiri sendirian.\nKasihan keju yang kesepian. Ha ha ha.\nHai ho, deri oh,\nkejunya berdiri sendirian.",
  v: [["farmer", "petani"], ["wife", "istri"], ["cheese", "keju"], ["alone", "sendirian"], ["nibble", "menggerogoti"]]
},
{
  t: "Curly Locks",
  sc: "garden",
  tm: "am",
  e: ["👧","🍓","🪡","🌸"],
  src: "Mother Goose",
  en: "Curly Locks, Curly Locks, will you be mine?\nYou shall not wash the dishes,\nnor yet feed the pigs.\nBut sit on a cushion and sew a fine seam,\nand feed upon strawberries, sugar and cream.\nWhat a nice morning that would be!\nHere is your cushion. Sit down.\nHere is your needle and thread.\nIn and out. In and out. A neat little seam.\nAnd here are the strawberries. Red and sweet.\nSugar on top. Cream on top.\nOne for you and one for me.\nMmm. Good morning, Curly Locks.",
  id: "Si Rambut Keriting, maukah kamu jadi temanku?\nKamu tidak perlu mencuci piring,\ndan tidak perlu memberi makan babi.\nCukup duduk di bantal dan menjahit dengan rapi,\nsambil makan stroberi, gula, dan krim.\nPagi yang menyenangkan sekali!\nIni bantalnya. Duduk sini.\nIni jarum dan benangnya.\nMasuk dan keluar. Masuk dan keluar. Jahitan yang rapi.\nDan ini stroberinya. Merah dan manis.\nGula di atasnya. Krim di atasnya.\nSatu untukmu dan satu untukku.\nMmm. Selamat pagi, Si Rambut Keriting.",
  v: [["cushion", "bantal"], ["sew", "menjahit"], ["seam", "jahitan"], ["strawberries", "stroberi"], ["cream", "krim"]]
},
{
  t: "Lavender's Blue",
  sc: "garden",
  tm: "am",
  e: ["💜","🐝","👑","🌿"],
  src: "traditional song",
  en: "Lavender's blue, dilly dilly, lavender's green.\nWhen I am king, dilly dilly, you shall be queen.\nSmell the flowers. Mmm, so soft.\nRub them between your fingers. Now smell again.\nThat smell will stay all day.\nWho told you so, dilly dilly? Who told you so?\nIt was my own heart, dilly dilly, that told me so.\nThe bees love the purple flowers too.\nBuzz, buzz, dilly dilly. Busy bees.\nPick a little bunch for the table.\nPurple and green and sweet.\nLavender's blue, dilly dilly, lavender's green.\nGood morning, flowers. Good morning, bees.",
  id: "Lavender biru, dili dili, lavender hijau.\nKalau aku jadi raja, dili dili, kamu jadi ratu.\nCium bunganya. Mmm, lembut sekali.\nGosok di antara jarimu. Sekarang cium lagi.\nBaunya akan bertahan seharian.\nSiapa yang bilang, dili dili? Siapa yang bilang?\nHatiku sendiri, dili dili, yang bilang begitu.\nLebah-lebah juga suka bunga ungu itu.\nNguung, nguung, dili dili. Lebah yang rajin.\nPetik seikat kecil untuk di meja.\nUngu dan hijau dan harum.\nLavender biru, dili dili, lavender hijau.\nSelamat pagi, bunga. Selamat pagi, lebah.",
  v: [["smell", "bau"], ["queen", "ratu"], ["bunch", "seikat"], ["fingers", "jari"]]
},
{
  t: "I Had a Little Nut Tree",
  sc: "garden",
  tm: "am",
  e: ["🌰","🌳","👸","🍐"],
  src: "Mother Goose",
  en: "I had a little nut tree.\nNothing at all would it bear\nbut a silver nutmeg and a golden pear.\nEvery morning I went to look.\nAny nuts today, little tree?\nNo. But look at the silver nutmeg.\nShiny like a little moon.\nAnd look at the golden pear.\nWarm like a little sun.\nThe daughter of the king of Spain\ncame all that way to visit me,\nand all for the sake of my little nut tree.\nWhat a strange and lovely tree.",
  id: "Aku punya pohon kacang kecil.\nDia tidak menghasilkan apa-apa\nselain sebutir pala perak dan sebuah pir emas.\nSetiap pagi aku pergi melihatnya.\nAda kacang hari ini, pohon kecil?\nTidak ada. Tapi lihat pala peraknya.\nBerkilau seperti bulan kecil.\nDan lihat pir emasnya.\nHangat seperti matahari kecil.\nPutri raja Spanyol\ndatang jauh-jauh mengunjungiku,\nsemuanya demi pohon kacang kecilku.\nPohon yang aneh dan indah.",
  v: [["nut", "kacang"], ["bear", "menghasilkan"], ["nutmeg", "pala"], ["pear", "buah pir"]]
},
{
  t: "Little Robin Redbreast",
  sc: "garden",
  tm: "am",
  e: ["🐦","🌳","🐈","🪶"],
  src: "Mother Goose",
  en: "Little Robin Redbreast sat upon a tree.\nUp went the pussycat, and down went he.\nDown came pussycat, and away Robin ran.\nCatch me if you can, little pussycat!\nLittle Robin Redbreast jumped upon a wall.\nPussycat jumped after him and almost got a fall.\nLittle Robin chirped and sang. Tweet, tweet!\nAnd what did pussycat say?\nMew, mew, mew, and Robin flew away.\nUp into the morning sky. Bye bye!\nThe cat sat down and washed her paw.\nNever mind, pussycat. Try again tomorrow.\nGood morning, Robin. Good morning, cat.",
  id: "Burung robin kecil hinggap di pohon.\nSi kucing naik, dan robin turun.\nKucingnya turun, dan robin lari pergi.\nTangkap aku kalau bisa, kucing kecil!\nBurung robin kecil melompat ke tembok.\nKucingnya melompat mengejar dan hampir jatuh.\nRobin kecil berkicau dan menyanyi. Cuit, cuit!\nDan si kucing bilang apa?\nMeong, meong, meong, lalu robin terbang pergi.\nNaik ke langit pagi. Dadah!\nKucingnya duduk lalu menjilat cakarnya.\nTidak apa-apa, kucing. Coba lagi besok.\nSelamat pagi, robin. Selamat pagi, kucing.",
  v: [["robin", "burung robin"], ["wall", "tembok"], ["chirped", "berkicau"], ["paw", "cakar"]]
},
{
  t: "Who Has Seen the Wind?",
  sc: "garden",
  tm: "am",
  e: ["🍃","🌳","🎐","🐦"],
  src: "Christina Rossetti, 1872",
  en: "Who has seen the wind?\nNeither I nor you, not ever.\nBut when the leaves hang trembling,\nthe wind is passing through.\nLook up at the tree. Watch the leaves.\nShiver, shiver, shiver. There! Did you see it?\nThe wind was there. Just then. Gone now.\nWho has seen the wind?\nNeither you nor I, not ever.\nBut when the trees bow down their heads,\nthe wind is passing by.\nHold up your hand. Can you feel it?\nHello, wind. We cannot see you, but hello.",
  id: "Siapa yang pernah melihat angin?\nAku tidak, kamu juga tidak.\nTapi kalau daun-daun bergetar,\nartinya angin sedang lewat.\nLihat ke pohonnya. Perhatikan daunnya.\nGetar, getar, getar. Itu! Kelihatan tidak?\nAnginnya barusan di sana. Sekarang sudah pergi.\nSiapa yang pernah melihat angin?\nKamu tidak, aku juga tidak.\nTapi kalau pohon-pohon menundukkan kepalanya,\nartinya angin sedang lewat.\nAngkat tanganmu. Terasa tidak?\nHalo, angin. Kami tidak bisa melihatmu, tapi halo.",
  v: [["wind", "angin"], ["leaves", "daun"], ["trembling", "bergetar"], ["bow", "menunduk"]]
},
{
  t: "The Swing",
  sc: "garden",
  tm: "am",
  e: ["🌳","🧒","🪁","🐄"],
  src: "Robert Louis Stevenson, 1885",
  en: "How do you like to go up in a swing,\nup in the air so blue?\nOh, I do think it the pleasantest thing\never a child can do!\nHold on tight with both hands.\nReady? Hold on. Push! Whooosh!\nUp in the air and over the wall,\ntill I can see so wide.\nRivers and trees and cattle and all,\nhigh over the green countryside.\nDown again. Whoosh! Up again!\nMore, more! Ha ha ha.\nWhat a good morning for a swing.",
  id: "Sukakah kamu naik ayunan,\nnaik ke udara yang biru?\nOh, menurutku itu hal paling menyenangkan\nyang bisa dilakukan seorang anak!\nPegang yang kuat dengan dua tangan.\nSiap? Pegangan. Dorong! Wuuush!\nNaik ke udara dan melewati tembok,\nsampai aku bisa melihat jauh.\nSungai dan pohon dan ternak dan semuanya,\ntinggi di atas pedesaan yang hijau.\nTurun lagi. Wuush! Naik lagi!\nLagi, lagi! Ha ha ha.\nPagi yang cocok untuk main ayunan.",
  v: [["swing", "ayunan"], ["air", "udara"], ["rivers", "sungai"], ["cattle", "ternak"]]
},
{
  t: "The Tale of Benjamin Bunny",
  sc: "garden",
  tm: "am",
  e: ["🐰","🧅","🐈","🧺"],
  src: "Beatrix Potter, 1904",
  en: "One morning Benjamin Bunny sat on a wall.\nHe saw the farmer and his wife drive away.\nCome on, cousin Peter! Now is our chance.\nPeter had lost his coat in that garden.\nDown they went, under the gate.\nThere it is! On the scarecrow.\nOne coat and two little shoes.\nBenjamin put onions in a bag for his mother.\nThen they met the cat. Uh oh.\nThey hid under a basket. Very still. Very quiet.\nThen old Mr Bunny came and found them.\nHome for breakfast, and a small telling off.\nBut they did get the coat back.",
  id: "Suatu pagi Benjamin Bunny duduk di atas tembok.\nDia melihat pak tani dan istrinya pergi naik kereta.\nAyo, sepupu Peter! Ini kesempatan kita.\nPeter kehilangan mantelnya di kebun itu.\nMereka turun, lewat bawah gerbang.\nItu dia! Di orang-orangan sawah.\nSatu mantel dan dua sepatu kecil.\nBenjamin memasukkan bawang ke kantong untuk ibunya.\nLalu mereka bertemu kucing. Waduh.\nMereka sembunyi di bawah keranjang. Diam. Tenang sekali.\nLalu Pak Bunny tua datang dan menemukan mereka.\nPulang untuk sarapan, dan dimarahi sedikit.\nTapi mantelnya berhasil didapat kembali.",
  v: [["cousin", "sepupu"], ["scarecrow", "orang-orangan sawah"], ["onions", "bawang"], ["basket", "keranjang"]]
},
{
  t: "The Tale of Squirrel Nutkin",
  sc: "garden",
  tm: "am",
  e: ["🐿️","🦉","🌰","🍂"],
  src: "Beatrix Potter, 1903",
  en: "On a bright autumn morning the squirrels went sailing.\nThey used little rafts made of sticks.\nThey went to the island to gather nuts.\nOld Mr Brown the owl lived there.\nThe polite squirrels brought him gifts. Please, sir.\nBut Nutkin danced about and sang silly riddles.\nRiddle me, riddle me, rot tot tote!\nOld Brown said nothing. Not one word.\nEvery day Nutkin was more cheeky.\nThen one day he jumped on Old Brown!\nSnap! Old Brown caught him by the tail.\nNutkin pulled and pulled and got away.\nBut his tail was never long again.",
  id: "Suatu pagi musim gugur yang cerah, para tupai berlayar.\nMereka memakai rakit kecil dari ranting.\nMereka pergi ke pulau untuk mengumpulkan kacang.\nPak Brown si burung hantu tinggal di sana.\nTupai-tupai yang sopan membawakan hadiah. Permisi, pak.\nTapi Nutkin menari-nari dan menyanyikan teka-teki konyol.\nTebak-tebakan, tebak-tebakan, rot tot tot!\nPak Brown diam saja. Tidak sepatah kata pun.\nSetiap hari Nutkin makin nakal.\nLalu suatu hari dia melompat ke Pak Brown!\nHap! Pak Brown menangkap ekornya.\nNutkin menarik dan menarik lalu lolos.\nTapi ekornya tidak pernah panjang lagi.",
  v: [["squirrels", "tupai"], ["island", "pulau"], ["owl", "burung hantu"], ["riddles", "teka-teki"], ["tail", "ekor"]]
},
{
  t: "The Tale of the Flopsy Bunnies",
  sc: "garden",
  tm: "am",
  e: ["🐇","🥬","🐁","🧺"],
  src: "Beatrix Potter, 1909",
  en: "The Flopsy Bunnies were six little rabbits.\nOne morning they hopped to the rubbish heap.\nThere they found lettuce. Lots and lots.\nMunch, munch, munch. So much lettuce.\nLettuce makes you sleepy, you know.\nSoon all six were fast asleep. Snore.\nMr McGregor found them and put them in a sack.\nOh no! Tied up tight.\nBut a little mouse came and nibbled a hole.\nNibble, nibble, nibble. Out they all crept.\nThey filled the sack with old vegetables instead.\nAnd ran home across the field.\nWhat a morning, said the Flopsy Bunnies.",
  id: "Keluarga Flopsy punya enam anak kelinci.\nSuatu pagi mereka melompat ke tumpukan sampah.\nDi sana mereka menemukan selada. Banyak sekali.\nNyam, nyam, nyam. Seladanya banyak sekali.\nSelada bikin mengantuk, tahu tidak.\nSebentar saja keenamnya tertidur pulas. Ngorok.\nPak McGregor menemukan mereka dan memasukkannya ke karung.\nAduh! Diikat kencang.\nTapi seekor tikus kecil datang dan menggigit lubang.\nKrit, krit, krit. Mereka semua merangkak keluar.\nKarungnya diisi sayuran busuk sebagai gantinya.\nLalu mereka lari pulang melintasi ladang.\nPagi yang seru, kata keluarga Flopsy.",
  v: [["rabbits", "kelinci"], ["lettuce", "selada"], ["asleep", "tertidur"], ["sack", "karung"]]
},
{
  t: "Kancil and the Cucumbers",
  sc: "garden",
  tm: "am",
  e: ["🦌","🥒","🧑‍🌾","🌾"],
  src: "Indonesian folk tale",
  en: "Kancil the little deer woke up hungry.\nHe smelled something green and fresh.\nCucumbers! A whole garden of them.\nCrunch, crunch. Mmm, so cool and sweet.\nThe farmer came and saw the holes.\nWho is eating my cucumbers?\nSo he made a scarecrow out of sticky black gum.\nThat night Kancil pushed it. Stuck!\nHe kicked it. Stuck! Both hands, both feet.\nIn the morning the farmer found him.\nInto the hut you go, little thief.\nBut clever Kancil talked his way out again.\nOff he ran, laughing, into the trees.",
  id: "Kancil si rusa kecil bangun dalam keadaan lapar.\nDia mencium sesuatu yang hijau dan segar.\nMentimun! Sekebun penuh.\nKriuk, kriuk. Mmm, segar dan manis.\nPak tani datang dan melihat bekas gigitannya.\nSiapa yang makan mentimunku?\nJadi dia membuat orang-orangan sawah dari getah hitam yang lengket.\nMalamnya Kancil mendorongnya. Lengket!\nDia menendangnya. Lengket! Dua tangan, dua kaki.\nPaginya pak tani menemukannya.\nMasuk ke gubuk kamu, pencuri kecil.\nTapi Kancil yang pintar berhasil kabur lagi.\nDia lari sambil tertawa masuk ke hutan.",
  v: [["deer", "rusa"], ["cucumbers", "mentimun"], ["scarecrow", "orang-orangan sawah"], ["sticky", "lengket"], ["clever", "pintar"]]
},
{
  t: "The Blue Jackal",
  sc: "garden",
  tm: "am",
  e: ["🦊","🫙","🐅","🌲"],
  src: "the Panchatantra",
  en: "A jackal was running through the town one morning.\nDogs chased him. Woof, woof, woof!\nHe jumped over a wall to hide.\nSplash! Into a big pot of blue dye.\nOut he came, blue from nose to tail.\nBack in the forest, nobody knew him.\nWhat a strange animal! said the tiger.\nHe must be our king, said the deer.\nSo the blue jackal sat on a rock.\nHe liked it very much.\nBut one night the other jackals howled.\nAnd he forgot, and howled back. Owoooo!\nThen everybody knew. Just a jackal after all.",
  id: "Seekor serigala berlari melewati kota suatu pagi.\nAnjing-anjing mengejarnya. Guk, guk, guk!\nDia melompati tembok untuk sembunyi.\nByur! Masuk ke bak besar berisi pewarna biru.\nDia keluar, biru dari hidung sampai ekor.\nKembali di hutan, tidak ada yang mengenalinya.\nBinatang apa itu! kata harimau.\nPasti dia raja kita, kata rusa.\nJadi serigala biru itu duduk di atas batu.\nDia senang sekali.\nTapi suatu malam serigala-serigala lain melolong.\nDan dia lupa, lalu ikut melolong. Auuuu!\nSemua jadi tahu. Ternyata cuma serigala biasa.",
  v: [["jackal", "serigala"], ["dye", "pewarna"], ["forest", "hutan"], ["howled", "melolong"]]
},
{
  t: "The Monkey and the Wedge",
  sc: "garden",
  tm: "am",
  e: ["🐒","🪵","🪚","🌳"],
  src: "the Panchatantra",
  en: "Some men were cutting a big log.\nThey pushed a wedge into the crack.\nThen they went away for lunch.\nA monkey came down from the tree.\nWhat is this? He sat on the log.\nHis tail hung down into the crack.\nHe pulled at the wedge. Pull, pull.\nOut it came. Pop!\nThe crack closed. Ouch! His tail!\nEeek, eeek! He pulled and pulled.\nAt last he got it out again.\nA sore tail and a lesson learned.\nLeave other people's work alone.",
  id: "Beberapa orang sedang membelah batang kayu besar.\nMereka memasukkan pasak ke dalam celahnya.\nLalu mereka pergi makan siang.\nSeekor monyet turun dari pohon.\nApa ini? Dia duduk di atas kayunya.\nEkornya menjuntai masuk ke celah itu.\nDia menarik pasaknya. Tarik, tarik.\nPasaknya lepas. Plop!\nCelahnya menutup. Aduh! Ekornya!\nIik, iik! Dia menarik sekuat tenaga.\nAkhirnya ekornya berhasil keluar.\nEkor yang perih dan satu pelajaran.\nJangan mengurus pekerjaan orang lain.",
  v: [["log", "batang kayu"], ["wedge", "pasak"], ["crack", "celah"], ["tail", "ekor"]]
},
{
  t: "The Golden Goose",
  sc: "garden",
  tm: "am",
  e: ["🦢","🧒","👧","🌳"],
  src: "Brothers Grimm",
  en: "A boy went into the wood one morning.\nHe shared his bread with a little old man.\nThank you, said the old man. Look in that tree.\nInside was a goose with golden feathers!\nHe carried it to the inn to sleep.\nIn the night a girl touched a feather.\nStuck! Her hand would not come off.\nHer sister came to help. Stuck too!\nOne after another, all stuck in a line.\nIn the morning off they went, all together.\nWhat a funny line walking down the road.\nThe sad princess saw them and laughed.\nAnd nobody was sad any more.",
  id: "Seorang anak laki-laki pergi ke hutan suatu pagi.\nDia berbagi rotinya dengan seorang kakek kecil.\nTerima kasih, kata kakek itu. Lihat di pohon itu.\nDi dalamnya ada angsa berbulu emas!\nDibawanya angsa itu ke penginapan untuk tidur.\nMalamnya seorang gadis menyentuh bulunya.\nMenempel! Tangannya tidak bisa lepas.\nKakaknya datang menolong. Ikut menempel!\nSatu per satu, semua menempel jadi satu barisan.\nPaginya mereka berjalan pergi, semuanya bersama.\nBarisan yang lucu sekali di jalan.\nSang putri yang sedih melihat mereka lalu tertawa.\nDan tidak ada lagi yang sedih.",
  v: [["wood", "hutan"], ["goose", "angsa"], ["feathers", "bulu"], ["stuck", "menempel"]]
},
{
  t: "Thumbelina Wakes Up",
  sc: "garden",
  tm: "am",
  e: ["🌷","🧚","🦋","🐦"],
  src: "Hans Christian Andersen, 1835",
  en: "Once there was a flower on a table.\nEvery morning it was closed up tight.\nThen one day it opened. Pop!\nInside sat a tiny girl. So small!\nNo bigger than your thumb.\nSo they called her Thumbelina.\nShe slept in a walnut shell bed.\nHer blanket was a rose petal.\nHer boat was a green leaf on the water.\nIn the morning she sang to the sunshine.\nThe birds stopped to listen to her.\nSuch a small voice. Such a sweet song.\nGood morning, Thumbelina. Good morning, little one.",
  id: "Dahulu ada sekuntum bunga di atas meja.\nSetiap pagi bunganya tertutup rapat.\nLalu suatu hari bunganya mekar. Pop!\nDi dalamnya duduk seorang gadis mungil. Kecil sekali!\nTidak lebih besar dari ibu jarimu.\nJadi dia dipanggil Thumbelina.\nDia tidur di tempat tidur dari cangkang kenari.\nSelimutnya sehelai kelopak mawar.\nPerahunya sehelai daun hijau di atas air.\nDi pagi hari dia menyanyi untuk sinar matahari.\nBurung-burung berhenti untuk mendengarkannya.\nSuara yang kecil. Lagu yang manis.\nSelamat pagi, Thumbelina. Selamat pagi, si mungil.",
  v: [["thumb", "ibu jari"], ["walnut", "kenari"], ["petal", "kelopak"], ["sunshine", "sinar matahari"]]
},
{
  t: "The Bundle of Sticks",
  sc: "garden",
  tm: "am",
  e: ["🪵","👴","🧒","👦"],
  src: "Aesop's Fables",
  en: "An old man had four grown sons.\nThey argued every single morning. Stop! Stop!\nSo he gave each son one stick.\nBreak it, he said. Snap! Easy.\nThen he tied many sticks into a bundle.\nNow break the bundle, he said.\nThe first son pulled hard. Nothing happened.\nThe second son pushed hard. Nothing happened.\nAll four tried together. It would not break.\nOne stick is easy, said the father.\nMany sticks together are strong.\nBe like the bundle, my sons.\nAnd they were, from that morning on.",
  id: "Seorang kakek punya empat anak laki-laki dewasa.\nMereka bertengkar setiap pagi. Sudah! Sudah!\nJadi dia memberi setiap anak satu tongkat.\nPatahkan, katanya. Krak! Gampang.\nLalu dia mengikat banyak tongkat jadi satu ikatan.\nSekarang patahkan ikatannya, katanya.\nAnak pertama menarik kuat-kuat. Tidak patah.\nAnak kedua mendorong kuat-kuat. Tidak patah.\nKeempatnya mencoba bersama. Tetap tidak patah.\nSatu tongkat itu gampang, kata ayahnya.\nBanyak tongkat bersama-sama itu kuat.\nJadilah seperti ikatan itu, anak-anakku.\nDan mereka begitu, mulai pagi itu.",
  v: [["argued", "bertengkar"], ["stick", "tongkat"], ["break", "mematahkan"], ["bundle", "ikatan"]]
},
{
  t: "Snails on the Path",
  sc: "garden",
  tm: "am",
  e: ["🐌","🍃","💧","🌿"],
  en: "After the rain, the snails come out.\nLook down at the path. Slowly, slowly.\nOne, two, three, four snails.\nEach one carries a house on its back.\nA little round shell. Home!\nWatch the two horns on top.\nTouch one, very gently. Whoop! It goes in.\nWait a moment. Out it comes again.\nThey leave a shiny silver line behind them.\nThat is how you know where they went.\nWhere are you going, little snail?\nNo hurry. No hurry at all.\nGoodbye, snails. Mind the big feet.",
  id: "Sehabis hujan, siput-siput keluar.\nLihat ke jalan setapak. Pelan, pelan.\nSatu, dua, tiga, empat siput.\nMasing-masing membawa rumah di punggungnya.\nCangkang bulat kecil. Rumah!\nPerhatikan dua tanduk di atasnya.\nSentuh satu, pelan-pelan. Wop! Masuk ke dalam.\nTunggu sebentar. Keluar lagi.\nMereka meninggalkan garis perak berkilau di belakangnya.\nItulah cara kita tahu mereka lewat mana.\nMau ke mana, siput kecil?\nTidak buru-buru. Tidak buru-buru sama sekali.\nSelamat jalan, siput. Awas kaki besar.",
  v: [["snails", "siput"], ["shell", "cangkang"], ["horns", "tanduk"], ["shiny", "berkilau"]]
},
{
  t: "Splish, Wash Your Face",
  sc: "water",
  tm: "am",
  e: ["💦","🧼","🪞","🐤"],
  en: "Time to wash your face. Come here.\nThe water is warm. Feel it.\nSplish! Water on both your cheeks.\nSplash! Water on your little nose.\nOoh! A little bit cold at first. Ha!\nNow the soap. Rub it round.\nBubbles on your chin. A white beard!\nLook in the mirror. Who is that?\nA funny old man! Ha ha ha.\nNow rinse it off. Splish, splash.\nAll gone now. Clean and pink.\nHere is the towel. Pat, pat, pat.\nDry face. Fresh face. Ready for the day.",
  id: "Waktunya cuci muka. Sini.\nAirnya hangat. Coba pegang.\nCipratan! Air di kedua pipimu.\nCipratan! Air di hidung kecilmu.\nOoh! Agak dingin awalnya. Ha!\nSekarang sabunnya. Gosok memutar.\nGelembung di dagumu. Janggut putih!\nLihat di cermin. Siapa itu?\nKakek yang lucu! Ha ha ha.\nSekarang dibilas. Cipratan, cipratan.\nSudah hilang semua. Bersih dan merah muda.\nIni handuknya. Tepuk, tepuk, tepuk.\nMuka kering. Muka segar. Siap untuk hari ini.",
  v: [["wash", "mencuci"], ["soap", "sabun"], ["bubbles", "gelembung"], ["towel", "handuk"]]
},
{
  t: "Rub-a-Dub-Dub",
  sc: "water",
  tm: "am",
  e: ["🛁","🕯️","🥖","🥩"],
  src: "Mother Goose",
  en: "Rub a dub dub, three men in a tub.\nAnd who do you think they be?\nThe butcher, the baker, the candlestick maker.\nAll three in one little tub!\nIn they got. Splash, splash, splash.\nToo many! Their knees are all bent.\nThe water goes over the side. Whoops!\nRub a dub dub. Wash your back.\nWash your ears. Wash your toes.\nThe soap slips away. Where did it go?\nUnder the water. Catch it!\nOut they get, all pink and clean.\nRub a dub dub. Good morning to them.",
  id: "Rub a dub dub, tiga orang dalam satu bak.\nMenurutmu siapa mereka?\nTukang daging, tukang roti, tukang lilin.\nBertiga dalam satu bak kecil!\nMereka masuk. Byur, byur, byur.\nTerlalu banyak! Lutut mereka tertekuk semua.\nAirnya tumpah ke luar. Ups!\nRub a dub dub. Cuci punggungmu.\nCuci telingamu. Cuci jari kakimu.\nSabunnya licin dan lepas. Ke mana ya?\nDi bawah air. Tangkap!\nMereka keluar, merah muda dan bersih.\nRub a dub dub. Selamat pagi untuk mereka.",
  v: [["tub", "bak mandi"], ["butcher", "tukang daging"], ["baker", "tukang roti"], ["soap", "sabun"]]
},
{
  t: "Bobby Shafto",
  sc: "water",
  tm: "am",
  e: ["⛵","🧑","🌊","💍"],
  src: "traditional song",
  en: "Bobby Shafto's gone to sea,\nsilver buckles on his knee.\nHe will come back and marry me,\nbonny Bobby Shafto, come home soon.\nLook out at the grey water this morning.\nIs that a sail? Far, far away.\nA white sail on the blue line.\nWave your hand at him. Wave, wave, wave.\nBobby Shafto's bright and fair,\ncombing down his yellow hair.\nHe will come back and marry me,\nbonny Bobby Shafto, come home soon.\nThe sea is wide. We are waiting here.",
  id: "Bobby Shafto pergi ke laut,\ngesper perak di lututnya.\nDia akan kembali dan menikahiku,\nBobby Shafto yang tampan, pulanglah segera.\nLihat ke air kelabu pagi ini.\nItu layar bukan? Jauh, jauh sekali.\nLayar putih di garis biru.\nLambaikan tanganmu padanya. Lambai, lambai, lambai.\nBobby Shafto cerah dan tampan,\nmenyisir rambut kuningnya.\nDia akan kembali dan menikahiku,\nBobby Shafto yang tampan, pulanglah segera.\nLautnya luas. Kami menunggu di sini.",
  v: [["sea", "laut"], ["buckles", "gesper"], ["sail", "layar"], ["combing", "menyisir"]]
},
{
  t: "A Sailor Went to Sea",
  sc: "water",
  tm: "am",
  e: ["⛵","🌊","🦀","🐟"],
  src: "traditional song",
  en: "A sailor went to sea, sea, sea,\nto see what he could see, see, see.\nBut all that he could see, see, see\nwas the bottom of the deep blue sea, sea, sea.\nClap with me. Sea, sea, sea!\nPat your knees. See, see, see!\nWhat did he find down there?\nA fish. A shell. A green weed.\nA little crab walking sideways. Hello!\nUp comes the sailor again. Splash!\nWhat did you see, sailor?\nEverything, he said. Everything.\nA sailor went to sea, sea, sea.",
  id: "Seorang pelaut pergi ke laut, laut, laut,\nuntuk melihat apa yang bisa dilihat, lihat, lihat.\nTapi yang bisa dilihatnya, lihat, lihat,\nhanyalah dasar laut biru yang dalam, laut, laut.\nTepuk tangan bersamaku. Laut, laut, laut!\nTepuk lututmu. Lihat, lihat, lihat!\nApa yang dia temukan di bawah sana?\nSeekor ikan. Sebuah kerang. Rumput laut hijau.\nSeekor kepiting kecil berjalan menyamping. Halo!\nSi pelaut muncul lagi. Byur!\nKamu lihat apa, pelaut?\nSemuanya, katanya. Semuanya.\nSeorang pelaut pergi ke laut, laut, laut.",
  v: [["sailor", "pelaut"], ["deep", "dalam"], ["shell", "kerang"], ["crab", "kepiting"]]
},
{
  t: "Six Little Ducks",
  sc: "water",
  tm: "am",
  e: ["🦆","🪶","💧","🌾"],
  src: "traditional song",
  en: "Six little ducks that I once knew,\nfat ones, skinny ones, fair ones too.\nBut the one little duck with the feather on his back,\nhe led the others with his quack, quack, quack!\nDown to the river they go each morning.\nWaddle, waddle, waddle. Left, right, left.\nInto the water. Splash! All six.\nUp tails, down heads. Looking for food.\nQuack, quack, quack, says the leader.\nBack they come in a line.\nOne, two, three, four, five, six.\nAll here! Nobody lost.\nHome again with a quack, quack, quack.",
  id: "Enam bebek kecil yang pernah kukenal,\nyang gemuk, yang kurus, yang cantik juga.\nTapi satu bebek kecil dengan bulu di punggungnya,\ndialah pemimpinnya dengan kwek, kwek, kwek!\nSetiap pagi mereka turun ke sungai.\nGoyang, goyang, goyang. Kiri, kanan, kiri.\nMasuk ke air. Byur! Keenamnya.\nEkor ke atas, kepala ke bawah. Cari makan.\nKwek, kwek, kwek, kata si pemimpin.\nMereka kembali dalam satu barisan.\nSatu, dua, tiga, empat, lima, enam.\nLengkap! Tidak ada yang hilang.\nPulang lagi dengan kwek, kwek, kwek.",
  v: [["ducks", "bebek"], ["feather", "bulu"], ["quack", "kwek"], ["waddle", "berjalan terhuyung"]]
},
{
  t: "The Tale of Mr. Jeremy Fisher",
  sc: "water",
  tm: "am",
  e: ["🐸","🎣","🐟","🪷"],
  src: "Beatrix Potter, 1906",
  en: "Mr Jeremy Fisher was a frog.\nHe lived in a damp little house by the pond.\nOne morning he said, I will go fishing.\nOut he went in his boat, a big lily leaf.\nHe pushed with a long green pole.\nHe put a worm on his line and waited.\nA little fish nibbled. Then a big fish!\nGulp! It tried to swallow him.\nOh! Ow! Out he came, and away he swam.\nHe hopped home without his boots.\nBut he had two friends coming for dinner.\nSo they ate roasted grasshopper instead.\nWhat a morning, said Mr Jeremy Fisher.",
  id: "Pak Jeremy Fisher adalah seekor katak.\nDia tinggal di rumah kecil yang lembap di tepi kolam.\nSuatu pagi dia bilang, aku mau memancing.\nDia pergi naik perahunya, sehelai daun teratai besar.\nDia mendorong dengan galah hijau yang panjang.\nDipasangnya cacing di kailnya lalu menunggu.\nSeekor ikan kecil menggigit. Lalu ikan besar!\nGlek! Ikan itu mau menelannya.\nAduh! Aduh! Dia keluar lalu berenang menjauh.\nDia melompat pulang tanpa sepatu botnya.\nTapi dua temannya mau datang makan malam.\nJadi mereka makan belalang panggang saja.\nPagi yang seru, kata Pak Jeremy Fisher.",
  v: [["frog", "katak"], ["pond", "kolam"], ["fishing", "memancing"], ["swallow", "menelan"]]
},
{
  t: "The Tale of Jemima Puddle-Duck",
  sc: "water",
  tm: "am",
  e: ["🦆","🦊","🥚","🐕"],
  src: "Beatrix Potter, 1908",
  en: "Jemima was a duck who wanted to hatch her own eggs.\nBut the farm always took her eggs away.\nSo one morning she put on her bonnet and shawl.\nOff she flew over the trees.\nShe found a wood and a polite gentleman with red whiskers.\nWhat a fine place for a nest, he said.\nSo she laid nine eggs in his shed.\nBring me herbs for the dinner, he said.\nHerbs? For what dinner? Hmm.\nThe farm dog Kep heard about it.\nHe came running and chased the fox away.\nJemima went home, safe and a bit sad.\nBut in the end her eggs did hatch.",
  id: "Jemima adalah bebek yang ingin menetaskan telurnya sendiri.\nTapi orang peternakan selalu mengambil telurnya.\nJadi suatu pagi dia memakai topi dan selendangnya.\nDia terbang melewati pepohonan.\nDia menemukan hutan dan seorang tuan sopan berkumis merah.\nTempat yang bagus untuk sarang, kata tuan itu.\nJadi dia bertelur sembilan butir di gudangnya.\nBawakan aku rempah untuk makan malam, kata tuan itu.\nRempah? Makan malam apa? Hmm.\nKep si anjing peternakan mendengar hal itu.\nDia datang berlari dan mengusir si rubah.\nJemima pulang, selamat dan agak sedih.\nTapi akhirnya telurnya menetas juga.",
  v: [["hatch", "menetas"], ["bonnet", "topi"], ["nest", "sarang"], ["whiskers", "kumis"]]
},
{
  t: "Where Go the Boats?",
  sc: "water",
  tm: "am",
  e: ["⛵","🌊","🍃","🧒"],
  src: "Robert Louis Stevenson, 1885",
  en: "Dark brown is the river this morning,\nand golden is the sand.\nIt flows along for ever,\nwith trees on either hand.\nMake a little boat. A green leaf will do.\nPut it on the water. Now let go.\nOff it goes! Away, away it spins.\nGreen leaves a floating past,\ncastles of the foam,\nboats of mine a boating,\nwhere will they all come home?\nAway down the river, a hundred miles or more,\nother little children shall bring my boats ashore.",
  id: "Sungainya cokelat gelap pagi ini,\ndan pasirnya keemasan.\nAirnya mengalir terus selamanya,\ndengan pohon di kedua sisinya.\nBuat perahu kecil. Sehelai daun hijau juga bisa.\nTaruh di atas air. Sekarang lepaskan.\nDia pergi! Jauh, jauh sambil berputar.\nDaun-daun hijau hanyut lewat,\nistana-istana dari buih,\nperahu-perahuku berlayar,\nke mana mereka akan pulang?\nJauh di hilir sungai, seratus mil atau lebih,\nanak-anak kecil lain akan membawa perahuku ke tepi.",
  v: [["river", "sungai"], ["sand", "pasir"], ["boat", "perahu"], ["foam", "buih"]]
},
{
  t: "The Duck and the Kangaroo",
  sc: "water",
  tm: "am",
  e: ["🦆","🦘","🌊","🧦"],
  src: "Edward Lear, 1871",
  en: "Said the Duck to the Kangaroo,\ngood gracious, how you hop!\nOver the fields and the water too,\nas if you never would stop!\nMy life is a bore in this nasty pond.\nI wish I could hop like you!\nSaid the Kangaroo to the Duck,\nthis requires some little reflection.\nYour feet are unpleasantly wet and cold.\nSo the Duck knitted four warm socks.\nAnd a cloak, and a hat for the ride!\nThen away they went, hop, hop, hop,\nall around the world and back again.",
  id: "Kata Bebek kepada Kanguru,\nastaga, hebat sekali lompatanmu!\nMelewati ladang dan air juga,\nseperti tidak akan pernah berhenti!\nHidupku membosankan di kolam jelek ini.\nAndai aku bisa melompat sepertimu!\nKata Kanguru kepada Bebek,\nini perlu dipikirkan sedikit.\nKakimu basah dan dingin, tidak enak.\nJadi Bebek merajut empat kaus kaki hangat.\nDan jubah, dan topi untuk perjalanannya!\nLalu mereka pergi, lompat, lompat, lompat,\nkeliling dunia lalu kembali lagi.",
  v: [["kangaroo", "kanguru"], ["hop", "melompat"], ["pond", "kolam"], ["socks", "kaus kaki"]]
},
{
  t: "The Frog and the Ox",
  sc: "water",
  tm: "am",
  e: ["🐸","🐂","💧","🌿"],
  src: "Aesop's Fables",
  en: "A little frog sat by the pond one morning.\nA great big ox came down to drink.\nSlurp, slurp. What a huge animal!\nThe frog ran home to his father.\nFather! I saw a beast as big as a house!\nAs big as this? said the father frog.\nHe took a big breath. Puff! He got bigger.\nBigger than that, said the little frog.\nAs big as this? Puff! Bigger still.\nBigger, bigger, said the little frog.\nSo the father took one more big breath.\nPop! Oh dear. Down he sat.\nSome things are just bigger than us.",
  id: "Seekor katak kecil duduk di tepi kolam suatu pagi.\nSeekor sapi jantan besar datang untuk minum.\nSrupt, srupt. Binatang yang besar sekali!\nSi katak lari pulang ke ayahnya.\nAyah! Aku lihat makhluk sebesar rumah!\nSebesar ini? kata ayah katak.\nDia menarik napas panjang. Puff! Badannya membesar.\nLebih besar dari itu, kata katak kecil.\nSebesar ini? Puff! Lebih besar lagi.\nLebih besar, lebih besar, kata katak kecil.\nJadi ayahnya menarik napas sekali lagi.\nPop! Aduh. Dia terduduk.\nAda hal-hal yang memang lebih besar dari kita.",
  v: [["frog", "katak"], ["ox", "sapi jantan"], ["huge", "besar sekali"], ["breath", "napas"]]
},
{
  t: "Warm Water, Soft Towel",
  sc: "water",
  tm: "am",
  e: ["🛁","🦆","🧴","🧺"],
  en: "The bath is ready. Put your hand in.\nOoh, warm. Just right.\nIn you go. Slowly, slowly. Sit down.\nThe water comes up around your tummy.\nHere is your duck. He floats. Bob, bob.\nPush him under. Let go! Up he pops.\nWash your arms. Wash your legs.\nWash behind your ears. Do not forget.\nNow stand up. Careful, it is slippery.\nHere comes the big soft towel.\nAll around you. A warm hug.\nRub, rub, rub. Dry hair. Dry back.\nOut you come, clean and warm and new.",
  id: "Air mandinya sudah siap. Coba pegang.\nOoh, hangat. Pas sekali.\nMasuk pelan-pelan. Duduk.\nAirnya naik sampai ke perutmu.\nIni bebekmu. Dia mengapung. Bob, bob.\nDorong ke bawah. Lepas! Dia muncul lagi.\nCuci tanganmu. Cuci kakimu.\nCuci belakang telingamu. Jangan lupa.\nSekarang berdiri. Hati-hati, licin.\nIni handuk besar yang lembut.\nMelingkari badanmu. Pelukan yang hangat.\nGosok, gosok, gosok. Rambut kering. Punggung kering.\nKamu keluar, bersih dan hangat dan baru.",
  v: [["bath", "mandi"], ["floats", "mengapung"], ["slippery", "licin"], ["towel", "handuk"]]
},
{
  t: "The Fish Market",
  sc: "water",
  tm: "am",
  e: ["🐟","🦐","⛵","🪣"],
  en: "Early, early, before the shops open.\nDown to the harbour we go.\nThe boats are coming in. Chug, chug.\nThe men throw ropes. Catch!\nBoxes of fish on the ice. So cold!\nSilver ones. Red ones. Flat ones.\nA big one with a long mouth. Ooh!\nSmell that? The salty sea smell.\nSquid and prawns and crabs in a bucket.\nThe seagulls shout. Kaw! Kaw!\nThey want a fish too. Cheeky birds.\nWe buy one fish for our dinner.\nGoodbye, harbour. See you tomorrow morning.",
  id: "Pagi-pagi sekali, sebelum toko-toko buka.\nKita turun ke pelabuhan.\nPerahu-perahunya datang. Tok, tok, tok.\nPara nelayan melempar tali. Tangkap!\nKotak-kotak ikan di atas es. Dingin sekali!\nYang perak. Yang merah. Yang pipih.\nAda yang besar dengan mulut panjang. Ooh!\nCium baunya? Bau laut yang asin.\nCumi dan udang dan kepiting dalam ember.\nBurung camar berteriak. Kaw! Kaw!\nMereka mau ikan juga. Burung nakal.\nKita beli satu ikan untuk makan malam.\nSelamat tinggal, pelabuhan. Sampai besok pagi.",
  v: [["harbour", "pelabuhan"], ["ropes", "tali"], ["prawns", "udang"], ["seagulls", "burung camar"]]
},
{
  t: "A Rainy Morning",
  sc: "rain",
  tm: "am",
  e: ["🌧️","🪟","☂️","🐈"],
  en: "Listen. What is that on the window?\nTap, tap, tap. It is rain.\nNo garden this morning. Never mind.\nPress your nose on the cold glass.\nWatch one drop run down. Wiggle, wiggle.\nRace it with another one. Which one wins?\nThe street is shiny and dark.\nAn umbrella walks past. Then another.\nA red one. A yellow one. A big black one.\nThe gutter sings. Gurgle, gurgle, gurgle.\nInside it is warm and dry.\nWe will stay here and listen.\nGood morning, rain. Thank you for the song.",
  id: "Dengar. Apa itu di jendela?\nTik, tik, tik. Itu hujan.\nTidak ke taman pagi ini. Tidak apa-apa.\nTempelkan hidungmu di kaca yang dingin.\nLihat satu tetes turun. Meliuk, meliuk.\nAdu balap dengan tetes yang lain. Siapa menang?\nJalanannya berkilau dan gelap.\nSebuah payung lewat. Lalu satu lagi.\nYang merah. Yang kuning. Yang hitam besar.\nSelokannya bernyanyi. Gur, gur, gur.\nDi dalam rumah hangat dan kering.\nKita di sini saja sambil mendengarkan.\nSelamat pagi, hujan. Terima kasih lagunya.",
  v: [["rain", "hujan"], ["glass", "kaca"], ["drop", "tetesan"], ["umbrella", "payung"], ["gutter", "selokan"]]
},
{
  t: "The Tale of Mrs. Tiggy-Winkle",
  sc: "rain",
  tm: "am",
  e: ["🦔","🧺","👚","⛰️"],
  src: "Beatrix Potter, 1905",
  en: "Lucie lost three pocket handkerchiefs one morning.\nShe went up the hill to look.\nUp and up, past the ferns and the rocks.\nShe found a little door in the hill.\nKnock, knock. Who lives here?\nA small person in a white apron. Mrs Tiggy-Winkle!\nShe was a hedgehog, and she did the washing.\nHer kitchen was full of steam and clean clothes.\nHere are your handkerchiefs, said Mrs Tiggy-Winkle.\nWashed and ironed and folded. Thank you!\nDown the hill ran Lucie with her clean things.\nShe turned to wave, but the door was gone.\nAnd there ran a hedgehog into the grass.",
  id: "Lucie kehilangan tiga sapu tangan suatu pagi.\nDia naik ke bukit untuk mencarinya.\nNaik terus, melewati pakis dan bebatuan.\nDia menemukan pintu kecil di bukit itu.\nTok, tok. Siapa yang tinggal di sini?\nSeseorang kecil bercelemek putih. Bu Tiggy-Winkle!\nDia seekor landak, dan pekerjaannya mencuci.\nDapurnya penuh uap dan pakaian bersih.\nIni sapu tanganmu, kata Bu Tiggy-Winkle.\nSudah dicuci, disetrika, dan dilipat. Terima kasih!\nLucie berlari turun bukit membawa barang bersihnya.\nDia berbalik mau melambai, tapi pintunya sudah hilang.\nDan ada seekor landak berlari masuk ke rumput.",
  v: [["handkerchiefs", "sapu tangan"], ["hedgehog", "landak"], ["apron", "celemek"], ["ironed", "disetrika"]]
},
{
  t: "Boots and Puddles",
  sc: "rain",
  tm: "am",
  e: ["🥾","💦","🌧️","🧒"],
  en: "The rain has stopped. Look outside!\nPuddles everywhere. Big ones and small ones.\nWhere are your boots? Here they are.\nOne foot in. Push. Two feet in. Push.\nStamp, stamp. They are on.\nOut the door. Careful on the step.\nHere is the first puddle. Ready?\nJump! SPLASH! Ha ha ha!\nWater everywhere. On your legs. On my coat.\nHere is a bigger one. Jump again!\nSPLOSH! Look at the rings in the water.\nRound and round they go.\nWet boots, happy feet. What a morning.",
  id: "Hujannya sudah berhenti. Lihat ke luar!\nGenangan air di mana-mana. Yang besar dan yang kecil.\nDi mana sepatu botmu? Ini dia.\nSatu kaki masuk. Dorong. Dua kaki masuk. Dorong.\nHentak, hentak. Sudah terpakai.\nKeluar pintu. Hati-hati di tangga.\nIni genangan pertama. Siap?\nLompat! CEBUR! Ha ha ha!\nAir di mana-mana. Di kakimu. Di mantelku.\nIni yang lebih besar. Lompat lagi!\nCEBUR! Lihat lingkaran-lingkaran di airnya.\nMelebar dan melebar.\nSepatu basah, kaki senang. Pagi yang seru.",
  v: [["boots", "sepatu bot"], ["puddle", "genangan air"], ["jump", "melompat"], ["rings", "lingkaran"]]
},
{
  t: "Rain on the Window",
  sc: "rain",
  tm: "am",
  e: ["🌧️","🪟","🚢","🐄"],
  src: "Robert Louis Stevenson, 1885",
  en: "The rain is raining all around.\nIt falls on field and tree.\nIt rains on the umbrellas here,\nand on the ships at sea.\nSit with me and watch it fall.\nOn the roof. Tap, tap, tap.\nOn the leaves. Pat, pat, pat.\nOn the ships far out on the grey water.\nOn the cows standing in the field.\nOn everybody, everywhere, all at once.\nThe same rain for all of us.\nWhat a funny thought that is.\nThe rain is raining all around.",
  id: "Hujannya turun di mana-mana.\nJatuh di ladang dan di pohon.\nHujan turun di payung-payung di sini,\ndan di kapal-kapal di laut.\nDuduk bersamaku dan lihat hujannya turun.\nDi atap. Tik, tik, tik.\nDi daun-daun. Tap, tap, tap.\nDi kapal-kapal jauh di air kelabu.\nDi sapi-sapi yang berdiri di ladang.\nDi semua orang, di mana-mana, sekaligus.\nHujan yang sama untuk kita semua.\nLucu ya kalau dipikir.\nHujannya turun di mana-mana.",
  v: [["rain", "hujan"], ["field", "ladang"], ["umbrellas", "payung"], ["ships", "kapal"]]
},
{
  t: "The North Wind Doth Blow",
  sc: "snow",
  tm: "am",
  e: ["🐦","❄️","🏚️","🌬️"],
  src: "Mother Goose",
  en: "The north wind doth blow this morning,\nand we shall have plenty of snow.\nAnd what will poor robin do then,\npoor little thing?\nHe will sit inside the warm barn\nand keep himself warm all day,\nand hide his head under his wing,\npoor thing.\nLook out of the window this morning. All white!\nAnd there is the robin on the fence.\nFluffed up like a little brown ball.\nPut some bread crumbs out for him.\nThere. Now he can have breakfast too.",
  id: "Angin utara bertiup pagi ini,\ndan nanti akan turun banyak salju.\nLalu si robin yang malang mau apa,\nmakhluk kecil yang malang?\nDia akan duduk di dalam kandang yang hangat\ndan menghangatkan diri sepanjang hari,\ndan menyembunyikan kepalanya di bawah sayap,\nmakhluk yang malang.\nLihat ke luar jendela pagi ini. Putih semua!\nDan itu si robin di atas pagar.\nMengembang seperti bola cokelat kecil.\nTaruh remah roti di luar untuknya.\nNah. Sekarang dia bisa sarapan juga.",
  v: [["wind", "angin"], ["snow", "salju"], ["barn", "kandang"], ["crumbs", "remah"]]
},
{
  t: "A White Morning",
  sc: "snow",
  tm: "am",
  e: ["❄️","🧤","🥾","🧒"],
  en: "Something is different this morning. Listen.\nSo quiet. Where did all the sound go?\nPull back the curtain. Oh!\nWhite. White everywhere. Snow!\nThe garden is gone. The path is gone.\nEverything is soft and round and white.\nNobody has walked on it yet.\nOn go the boots. On go the mittens.\nOpen the door. Crunch! First footprint.\nLook behind you. A line of little steps.\nCatch one flake on your glove.\nLook close. Tiny stars. Then gone.\nGood morning, snow. Thank you for the quiet.",
  id: "Ada yang berbeda pagi ini. Dengar.\nTenang sekali. Ke mana perginya semua suara?\nBuka tirainya. Oh!\nPutih. Putih di mana-mana. Salju!\nTamannya hilang. Jalan setapaknya hilang.\nSemuanya lembut dan bulat dan putih.\nBelum ada yang menginjaknya.\nPakai sepatu bot. Pakai sarung tangan.\nBuka pintunya. Kresek! Jejak kaki pertama.\nLihat ke belakang. Sebaris jejak kaki kecil.\nTangkap satu serpihan di sarung tanganmu.\nLihat dari dekat. Bintang mungil. Lalu hilang.\nSelamat pagi, salju. Terima kasih untuk tenangnya.",
  v: [["snow", "salju"], ["mittens", "sarung tangan"], ["footprint", "jejak kaki"], ["flake", "serpihan"]]
},
{
  t: "The Mitten",
  sc: "snow",
  tm: "am",
  e: ["🧤","🐭","🐻","🦊","🐰"],
  src: "Ukrainian folk tale",
  en: "A boy lost his mitten in the snow.\nA little mouse found it. Warm! I will live here.\nThen a frog came. May I come in?\nIn he went. Two animals in one mitten.\nThen a rabbit. Then a fox. Then an owl.\nSqueeze, squeeze. Room for one more.\nThe mitten grew bigger and bigger. Stretch!\nThen a big bear came. Please?\nOh dear. In he went too.\nThen a tiny mouse sat on the bear's nose.\nAtishoo! The bear sneezed.\nPop! Out flew everybody into the snow.\nAnd the boy found his mitten again.",
  id: "Seorang anak menjatuhkan sarung tangannya di salju.\nSeekor tikus kecil menemukannya. Hangat! Aku tinggal di sini.\nLalu seekor katak datang. Boleh aku ikut masuk?\nDia masuk. Dua binatang dalam satu sarung tangan.\nLalu kelinci. Lalu rubah. Lalu burung hantu.\nDesak, desak. Masih muat satu lagi.\nSarung tangannya jadi makin besar. Melar!\nLalu beruang besar datang. Boleh?\nAduh. Dia masuk juga.\nLalu tikus mungil duduk di hidung si beruang.\nHatsyi! Beruangnya bersin.\nPop! Semuanya terlempar keluar ke salju.\nDan anak itu menemukan sarung tangannya lagi.",
  v: [["mitten", "sarung tangan"], ["snow", "salju"], ["squeeze", "berdesakan"], ["sneezed", "bersin"]]
},
{
  t: "Kasa Jizo and the Straw Hats",
  sc: "snow",
  tm: "am",
  e: ["👒","🗿","❄️","🍚"],
  src: "Japanese folk tale",
  en: "An old man went to town to sell straw hats.\nIt was cold. It was snowing. Nobody bought one.\nSo he walked home with all six hats.\nOn the way he saw six stone statues.\nSnow was piled on all their heads.\nYou must be cold, he said.\nSo he put a hat on each one.\nOne, two, three, four, five. Only five hats!\nSo he gave the last one his own hat.\nHome he went, cold but happy.\nIn the morning there was a knock.\nOutside were rice and fish and warm things.\nThank you, said the six snowy statues.",
  id: "Seorang kakek pergi ke kota menjual topi jerami.\nUdaranya dingin. Saljunya turun. Tidak ada yang membeli.\nJadi dia pulang membawa keenam topinya.\nDi jalan dia melihat enam patung batu.\nSalju menumpuk di kepala mereka semua.\nPasti kalian kedinginan, katanya.\nJadi dipasangnya satu topi di tiap patung.\nSatu, dua, tiga, empat, lima. Topinya cuma lima!\nJadi patung terakhir diberi topinya sendiri.\nDia pulang, kedinginan tapi senang.\nPaginya terdengar ketukan di pintu.\nDi luar ada beras dan ikan dan barang hangat.\nTerima kasih, kata enam patung bersalju itu.",
  v: [["straw", "jerami"], ["statues", "patung"], ["snow", "salju"], ["knock", "ketukan"]]
},
];
