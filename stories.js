// 60 bedtime stories for 0-12 months: short sentences, sounds, repetition.
// Stories 1-30 are originals. Stories 31-60 are retold from public-domain
// sources (Mother Goose, Aesop, Andersen, folk tales) — see `src`.
//
// t   = title
// sc  = scene: day | night | rain | snow | water | garden (picks the backdrop,
//       the particles that float past, and how the hero moves)
// e   = [hero, friend, friend, friend, friend] emoji — 3 to 5, hero first
// src = public-domain source, shown as a credit line (optional)
// en / id = English / Indonesian, same number of lines
// v   = [[word, arti]] vocabulary, each word must sit inside one line of `en`
//
// Day of the year picks the story: (dayOfYear - 1) % 60
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
}
];
