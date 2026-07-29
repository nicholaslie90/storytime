// 30 bedtime stories for 0-12 months: short sentences, sounds, repetition.
// t = title, en = English, id = Indonesian, v = [[word, arti]]
// Day of month picks the story: (day - 1) % 30
const STORIES = [
{
  t: "Good Morning, Sun",
  en: "The sun comes up. Up, up, up.\nGood morning, sun!\nThe birds wake up. Tweet, tweet, tweet.\nGood morning, birds!\nThe flowers open. Slow, slow, slow.\nGood morning, flowers!\nAnd you wake up. Stretch, stretch, stretch.\nGood morning, baby!\nHello, new day. Hello, hello, hello.",
  id: "Matahari terbit. Naik, naik, naik.\nSelamat pagi, matahari!\nBurung-burung bangun. Cuit, cuit, cuit.\nSelamat pagi, burung!\nBunga-bunga membuka. Perlahan, perlahan, perlahan.\nSelamat pagi, bunga!\nDan kamu bangun. Meregang, meregang, meregang.\nSelamat pagi, sayang!\nHalo, hari baru. Halo, halo, halo.",
  v: [["wake up", "bangun"], ["stretch", "meregangkan badan"], ["flowers", "bunga-bunga"]]
},
{
  t: "The Sleepy Cat",
  en: "A little cat sits in the sun.\nHer fur is warm. Soft, soft fur.\nShe closes her eyes. Slow, slow.\nPurr, purr, purr, says the cat.\nHer tail goes swish. Swish, swish.\nNow the cat is sleeping.\nShhh. Quiet, quiet.\nSleep well, little cat.",
  id: "Seekor kucing kecil duduk di bawah matahari.\nBulunya hangat. Bulu yang lembut, lembut.\nIa memejamkan mata. Perlahan, perlahan.\nPrrr, prrr, prrr, dengkur si kucing.\nEkornya bergoyang. Goyang, goyang.\nSekarang kucing itu tertidur.\nSsst. Tenang, tenang.\nTidur yang nyaman, kucing kecil.",
  v: [["fur", "bulu hewan"], ["purr", "dengkuran kucing saat senang"], ["swish", "bergoyang melambai"], ["tail", "ekor"]]
},
{
  t: "Splash in the Bath",
  en: "Water in the tub. Warm water.\nIn go your toes. Splash!\nIn go your hands. Splash, splash!\nThe duck floats by. Quack, quack.\nBubbles on your tummy. Pop, pop, pop.\nRub, rub. Now you are clean.\nOut of the water. Up you come!\nA big soft towel. All dry.",
  id: "Air di bak mandi. Air hangat.\nJari kakimu masuk. Ceburr!\nTanganmu masuk. Cebur, cebur!\nBebek mengapung lewat. Kwek, kwek.\nGelembung di perutmu. Pop, pop, pop.\nGosok, gosok. Sekarang kamu bersih.\nKeluar dari air. Naik, yuk!\nHanduk besar yang lembut. Kering semua.",
  v: [["tub", "bak mandi"], ["splash", "ceburan air"], ["bubbles", "gelembung"], ["tummy", "perut"], ["towel", "handuk"]]
},
{
  t: "Moo, Says the Cow",
  en: "On the farm, the cow says moo.\nMoo, moo, moo.\nThe sheep says baa. Baa, baa.\nThe duck says quack. Quack, quack.\nThe horse says neigh. Neigh, neigh!\nThe little chick says peep, peep.\nAnd what do you say?\nYou say hello. Hello, farm!",
  id: "Di peternakan, sapi berkata moo.\nMoo, moo, moo.\nKambing berkata mbee. Mbee, mbee.\nBebek berkata kwek. Kwek, kwek.\nKuda berkata hiii. Hiii, hiii!\nAnak ayam kecil berkata ciap, ciap.\nDan kamu bilang apa?\nKamu bilang halo. Halo, peternakan!",
  v: [["farm", "peternakan"], ["cow", "sapi"], ["sheep", "kambing/biri-biri"], ["chick", "anak ayam"]]
},
{
  t: "Ten Little Toes",
  en: "This is one toe. Little toe.\nThis is two toes. Wiggle, wiggle.\nCount with me: one, two, three, four, five.\nFive toes on this foot!\nNow the other foot. Six, seven, eight, nine, ten.\nTen little toes. All yours.\nTickle, tickle, tickle!\nTen happy toes.",
  id: "Ini satu jari kaki. Jari kecil.\nIni dua jari kaki. Gerak, gerak.\nHitung bersamaku: satu, dua, tiga, empat, lima.\nLima jari di kaki ini!\nSekarang kaki yang lain. Enam, tujuh, delapan, sembilan, sepuluh.\nSepuluh jari kaki kecil. Semuanya milikmu.\nCekikik, cekikik, cekikik!\nSepuluh jari kaki yang bahagia.",
  v: [["toe", "jari kaki"], ["wiggle", "menggoyang-goyang"], ["count", "menghitung"], ["tickle", "menggelitik"]]
},
{
  t: "Rain, Rain, Tap Tap",
  en: "Look out the window. Grey sky.\nHere comes the rain. Tap, tap, tap.\nRain on the roof. Pitter, patter.\nRain on the leaves. Drip, drip, drip.\nThe puddles grow big. Round puddles.\nWe stay inside, warm and dry.\nThe rain sings a song. Tap, tap, tap.\nGoodbye, rain. Come again.",
  id: "Lihat ke luar jendela. Langit kelabu.\nHujan datang. Tik, tik, tik.\nHujan di atap. Tik-tik-tik.\nHujan di dedaunan. Tes, tes, tes.\nGenangan jadi besar. Genangan bundar.\nKita di dalam, hangat dan kering.\nHujan menyanyikan lagu. Tik, tik, tik.\nSelamat jalan, hujan. Datang lagi ya.",
  v: [["roof", "atap"], ["leaves", "dedaunan"], ["puddles", "genangan air"], ["dry", "kering"]]
},
{
  t: "The Round Red Ball",
  en: "Here is a ball. A red ball.\nRound, round, round.\nRoll the ball. Roll, roll, roll.\nIt rolls to me. It rolls to you.\nBounce the ball. Bounce, bounce!\nUp high. Down low.\nWhere did it go? Under the chair!\nFound it. Here is the red ball.",
  id: "Ini sebuah bola. Bola merah.\nBundar, bundar, bundar.\nGulingkan bolanya. Guling, guling, guling.\nBolanya menggelinding ke aku. Menggelinding ke kamu.\nPantulkan bolanya. Pantul, pantul!\nNaik tinggi. Turun rendah.\nKe mana perginya? Di bawah kursi!\nDapat. Ini bola merahnya.",
  v: [["round", "bundar"], ["roll", "menggelinding"], ["bounce", "memantul"], ["under", "di bawah"]]
},
{
  t: "Peekaboo Bunny",
  en: "A little bunny hides behind a tree.\nWhere is bunny? I cannot see.\nHop, hop. I hear you, bunny.\nIs bunny here? No.\nIs bunny there? No.\nPeekaboo! There you are!\nSoft ears, small nose, fluffy tail.\nHello, little bunny. I found you.",
  id: "Seekor kelinci kecil bersembunyi di balik pohon.\nDi mana kelinci? Aku tak bisa melihat.\nHop, hop. Aku mendengarmu, kelinci.\nApa kelinci di sini? Bukan.\nApa kelinci di sana? Bukan.\nCilukba! Itu kamu!\nTelinga lembut, hidung kecil, ekor berbulu halus.\nHalo, kelinci kecil. Aku menemukanmu.",
  v: [["hides", "bersembunyi"], ["hop", "melompat kecil"], ["ears", "telinga"], ["fluffy", "berbulu halus"]]
},
{
  t: "Soft, Soft Blanket",
  en: "Here is your blanket. Soft and blue.\nTouch it. So soft.\nWrap it around you. Snug, snug.\nOne corner for your hand.\nOne corner for your cheek.\nThe blanket keeps you warm.\nWarm baby, cosy baby.\nGood night, soft blanket.",
  id: "Ini selimutmu. Lembut dan biru.\nSentuh. Sangat lembut.\nSelimutkan ke badanmu. Rapat, rapat.\nSatu sudut untuk tanganmu.\nSatu sudut untuk pipimu.\nSelimut menjagamu tetap hangat.\nBayi yang hangat, bayi yang nyaman.\nSelamat malam, selimut lembut.",
  v: [["blanket", "selimut"], ["wrap", "membungkus/menyelimuti"], ["snug", "terbungkus rapat dan nyaman"], ["cheek", "pipi"], ["cosy", "hangat nyaman"]]
},
{
  t: "The Little Duck",
  en: "A little duck goes to the pond.\nWaddle, waddle, waddle.\nInto the water. Splash!\nSwim, duck, swim.\nQuack, quack, says the duck.\nHer feet go paddle, paddle.\nMother duck calls. Come home now.\nWaddle, waddle. Home to bed.",
  id: "Seekor bebek kecil pergi ke kolam.\nJalan terkuak-kuak, terkuak-kuak.\nMasuk ke air. Ceburr!\nBerenang, bebek, berenang.\nKwek, kwek, kata bebek.\nKakinya mengayuh, mengayuh.\nIbu bebek memanggil. Pulang sekarang.\nJalan terkuak-kuak. Pulang untuk tidur.",
  v: [["pond", "kolam"], ["waddle", "berjalan bergoyang seperti bebek"], ["swim", "berenang"], ["paddle", "mengayuh air"]]
},
{
  t: "Yum, Yum, Banana",
  en: "Look, a banana. Yellow banana.\nPeel it down. Zip, zip.\nInside is soft and white.\nSmell it. Sweet!\nTake a little bite. Mmm.\nChew, chew, chew. Yum!\nAll gone. Every bit.\nThank you, banana. That was good.",
  id: "Lihat, pisang. Pisang kuning.\nKupas ke bawah. Srett, srett.\nDi dalamnya lembut dan putih.\nCium baunya. Manis!\nGigit sedikit. Mmm.\nKunyah, kunyah, kunyah. Enak!\nHabis semua. Sampai bersih.\nTerima kasih, pisang. Itu enak sekali.",
  v: [["peel", "mengupas"], ["bite", "gigitan"], ["chew", "mengunyah"], ["sweet", "manis"]]
},
{
  t: "Buzz, Little Bee",
  en: "A little bee flies in the garden.\nBuzz, buzz, buzz.\nTo the yellow flower. Buzz.\nTo the pink flower. Buzz, buzz.\nHer wings go so fast.\nShe is busy. Very busy.\nNow home to the hive.\nBuzz, buzz. Good night, bee.",
  id: "Seekor lebah kecil terbang di taman.\nNguing, nguing, nguing.\nKe bunga kuning. Nguing.\nKe bunga merah muda. Nguing, nguing.\nSayapnya bergerak sangat cepat.\nIa sibuk. Sangat sibuk.\nSekarang pulang ke sarang.\nNguing, nguing. Selamat malam, lebah.",
  v: [["bee", "lebah"], ["buzz", "bunyi nguing lebah"], ["wings", "sayap"], ["garden", "taman"], ["hive", "sarang lebah"]]
},
{
  t: "Big Truck, Little Car",
  en: "On the road, here comes a truck.\nA big truck. Rumble, rumble.\nBeep, beep! says the truck.\nHere comes a little car.\nZoom! Fast little car.\nThe wheels go round and round.\nRed light. Stop.\nGreen light. Go, go, go!",
  id: "Di jalan, datang sebuah truk.\nTruk besar. Gemuruh, gemuruh.\nTin, tin! kata truk.\nDatang sebuah mobil kecil.\nWuuush! Mobil kecil yang cepat.\nRodanya berputar dan berputar.\nLampu merah. Berhenti.\nLampu hijau. Jalan, jalan, jalan!",
  v: [["truck", "truk"], ["rumble", "suara gemuruh"], ["wheels", "roda"], ["road", "jalan"]]
},
{
  t: "The Moon Is Awake",
  en: "The sun goes down. Down, down.\nThe sky turns dark blue.\nNow the moon comes up.\nA big round moon. So bright.\nThe moon looks at you.\nHello, moon. Hello, baby.\nThe moon stays all night.\nSleep now. The moon is watching.",
  id: "Matahari terbenam. Turun, turun.\nLangit berubah biru gelap.\nSekarang bulan terbit.\nBulan besar dan bundar. Terang sekali.\nBulan memandangmu.\nHalo, bulan. Halo, sayang.\nBulan tinggal sepanjang malam.\nTidurlah sekarang. Bulan menjagamu.",
  v: [["moon", "bulan"], ["dark", "gelap"], ["bright", "terang"], ["night", "malam"]]
},
{
  t: "Clap Your Hands",
  en: "Clap your hands. Clap, clap, clap.\nPat your knees. Pat, pat, pat.\nStamp your feet. Stamp, stamp!\nWave hello. Wave, wave.\nOne hand up. Two hands up.\nAll the way up. So tall!\nNow hands down. Down, down.\nGood job. Clap, clap, clap!",
  id: "Tepuk tanganmu. Tepuk, tepuk, tepuk.\nTepuk lututmu. Tuk, tuk, tuk.\nHentakkan kakimu. Hentak, hentak!\nLambaikan halo. Lambai, lambai.\nSatu tangan ke atas. Dua tangan ke atas.\nSetinggi mungkin. Tinggi sekali!\nSekarang tangan ke bawah. Turun, turun.\nHebat. Tepuk, tepuk, tepuk!",
  v: [["clap", "bertepuk tangan"], ["pat", "menepuk lembut"], ["stamp", "menghentakkan kaki"], ["wave", "melambaikan tangan"]]
},
{
  t: "Where Is Your Nose?",
  en: "Where is your nose? Here it is.\nBoop! On your nose.\nWhere are your eyes? Here they are.\nTwo bright eyes. Blink, blink.\nWhere is your mouth? Here it is.\nA big smile. So happy.\nWhere are your ears? One, two.\nTwo ears to hear my song.",
  id: "Di mana hidungmu? Ini dia.\nTuk! Di hidungmu.\nDi mana matamu? Ini dia.\nDua mata yang cerah. Kedip, kedip.\nDi mana mulutmu? Ini dia.\nSenyum lebar. Bahagia sekali.\nDi mana telingamu? Satu, dua.\nDua telinga untuk mendengar laguku.",
  v: [["nose", "hidung"], ["blink", "berkedip"], ["mouth", "mulut"], ["ears", "telinga"]]
},
{
  t: "The Puppy's Tail",
  en: "A little puppy comes to play.\nHis tail goes wag, wag, wag.\nHappy tail. Fast tail.\nHe licks your hand. Lick, lick.\nWoof, woof! says the puppy.\nRun, puppy, run.\nNow he is tired. Flop!\nSleepy puppy. Wag, wag. Good night.",
  id: "Seekor anak anjing datang bermain.\nEkornya bergoyang, goyang, goyang.\nEkor yang senang. Ekor yang cepat.\nIa menjilat tanganmu. Jilat, jilat.\nGuk, guk! kata anak anjing.\nLari, anak anjing, lari.\nSekarang ia lelah. Bruk!\nAnak anjing yang mengantuk. Goyang, goyang. Selamat malam.",
  v: [["puppy", "anak anjing"], ["wag", "menggoyangkan ekor"], ["lick", "menjilat"], ["tired", "lelah"]]
},
{
  t: "One Slow Turtle",
  en: "Here is a turtle. Slow turtle.\nStep, step, step. So slow.\nHe carries his house on his back.\nA hard shell. Tap, tap.\nWhere are you going, turtle?\nTo the water. Slow, slow.\nSplish. In he goes.\nNow the turtle swims fast!",
  id: "Ini seekor kura-kura. Kura-kura yang lambat.\nLangkah, langkah, langkah. Lambat sekali.\nIa membawa rumahnya di punggung.\nCangkang yang keras. Tok, tok.\nMau ke mana kamu, kura-kura?\nKe air. Lambat, lambat.\nCebur. Ia masuk.\nSekarang kura-kura berenang cepat!",
  v: [["turtle", "kura-kura"], ["slow", "lambat"], ["shell", "cangkang"], ["carries", "membawa"]]
},
{
  t: "Windy Day",
  en: "Whoosh! Here comes the wind.\nThe wind blows the leaves. Whoosh.\nThe leaves dance. Round and round.\nThe wind blows your hair. Tickle!\nHold your hat. Hold it tight.\nThe trees bend. Sway, sway.\nWhoosh, whoosh, says the wind.\nGoodbye, wind. See you again.",
  id: "Wuuush! Angin datang.\nAngin menerbangkan dedaunan. Wuuush.\nDedaunan menari. Berputar dan berputar.\nAngin menerbangkan rambutmu. Geli!\nPegang topimu. Pegang kuat-kuat.\nPohon-pohon melengkung. Ayun, ayun.\nWuush, wuush, kata angin.\nSelamat jalan, angin. Sampai jumpa lagi.",
  v: [["wind", "angin"], ["blows", "meniup/menerbangkan"], ["sway", "berayun"], ["tight", "kuat/rapat"]]
},
{
  t: "The Purple Flower",
  en: "In the grass, one purple flower.\nSmall and pretty.\nGreen leaves below. Soft petals above.\nTouch it. Very gentle.\nSmell it. Ahh, so nice.\nA bee comes to say hello. Buzz.\nThe sun warms the flower.\nGrow, little flower. Grow, grow.",
  id: "Di rumput, satu bunga ungu.\nKecil dan cantik.\nDaun hijau di bawah. Kelopak lembut di atas.\nSentuh. Pelan-pelan sekali.\nCium baunya. Ahh, harum.\nSeekor lebah datang menyapa. Nguing.\nMatahari menghangatkan bunga.\nTumbuhlah, bunga kecil. Tumbuh, tumbuh.",
  v: [["purple", "ungu"], ["petals", "kelopak bunga"], ["gentle", "pelan dan lembut"], ["grow", "tumbuh"]]
},
{
  t: "Sleepy Time Sheep",
  en: "Count the sheep with me.\nOne sheep. Baa.\nTwo sheep. Baa, baa.\nThree sheep, walking slow.\nTheir wool is white and soft.\nFour sheep. Five sheep. Baa.\nThe sheep are sleepy too.\nYawn. Close your eyes. Baa, baa, sleep.",
  id: "Hitung biri-biri bersamaku.\nSatu biri-biri. Mbee.\nDua biri-biri. Mbee, mbee.\nTiga biri-biri, berjalan lambat.\nBulunya putih dan lembut.\nEmpat biri-biri. Lima biri-biri. Mbee.\nBiri-biri juga mengantuk.\nMenguap. Pejamkan matamu. Mbee, mbee, tidur.",
  v: [["sheep", "biri-biri"], ["wool", "bulu wol"], ["count", "menghitung"], ["yawn", "menguap"]]
},
{
  t: "Two Warm Socks",
  en: "Here is one sock. Stripey sock.\nOn your foot it goes. Pull, pull.\nHere is the other sock.\nOn the other foot. Pull!\nTwo warm socks. Two warm feet.\nWiggle your toes inside.\nNow your feet are cosy.\nStomp, stomp. Warm little feet.",
  id: "Ini satu kaus kaki. Kaus kaki bergaris.\nDipakai ke kakimu. Tarik, tarik.\nIni kaus kaki yang satu lagi.\nKe kaki yang lain. Tarik!\nDua kaus kaki hangat. Dua kaki yang hangat.\nGoyangkan jari kakimu di dalamnya.\nSekarang kakimu nyaman.\nHentak, hentak. Kaki kecil yang hangat.",
  v: [["sock", "kaus kaki"], ["pull", "menarik"], ["warm", "hangat"], ["stomp", "menghentak kaki"]]
},
{
  t: "The Happy Frog",
  en: "By the pond sits a green frog.\nHop! Onto a leaf.\nRibbit, ribbit, says the frog.\nHis eyes are big and round.\nHop, hop. Into the water.\nSplash! Swim, frog, swim.\nHe catches a fly. Snap!\nHappy frog. Ribbit, ribbit.",
  id: "Di tepi kolam duduk seekor katak hijau.\nHop! Ke atas sebuah daun.\nKrok, krok, kata katak.\nMatanya besar dan bundar.\nHop, hop. Masuk ke air.\nCeburr! Berenang, katak, berenang.\nIa menangkap seekor lalat. Hap!\nKatak yang senang. Krok, krok.",
  v: [["frog", "katak"], ["hop", "melompat"], ["catches", "menangkap"], ["fly", "lalat"]]
},
{
  t: "Grandma's Hug",
  en: "Someone is at the door.\nKnock, knock. Who is it?\nIt is Grandma! Hello, Grandma.\nShe opens her arms wide.\nIn you go. A big hug.\nSqueeze, squeeze. So warm.\nGrandma smells like flowers.\nStay a while, Grandma. We love you.",
  id: "Ada seseorang di pintu.\nTok, tok. Siapa itu?\nItu Nenek! Halo, Nenek.\nIa membuka lengannya lebar-lebar.\nMasuk ke pelukannya. Pelukan besar.\nPeluk erat, erat. Hangat sekali.\nNenek wanginya seperti bunga.\nTinggal sebentar ya, Nenek. Kami sayang Nenek.",
  v: [["grandma", "nenek"], ["knock", "mengetuk"], ["hug", "pelukan"], ["squeeze", "memeluk erat"]]
},
{
  t: "Crunch, Crunch, Apple",
  en: "Look at this apple. Round and red.\nWash it. Splash, splash.\nShiny apple. So smooth.\nTake a bite. Crunch!\nCrunch, crunch, crunch.\nSweet juice on your chin.\nWipe, wipe. All clean.\nApples are good. Crunch, crunch.",
  id: "Lihat apel ini. Bundar dan merah.\nCuci dulu. Kucur, kucur.\nApel yang berkilau. Halus sekali.\nGigit satu kali. Kriuk!\nKriuk, kriuk, kriuk.\nAir manisnya di dagumu.\nUsap, usap. Bersih semua.\nApel itu enak. Kriuk, kriuk.",
  v: [["apple", "apel"], ["crunch", "bunyi kriuk saat digigit"], ["juice", "air/sari buah"], ["wipe", "mengusap"], ["smooth", "halus"]]
},
{
  t: "The Tiny Ant",
  en: "Down on the ground, a tiny ant.\nSo small. Look close.\nShe walks in a line. Step, step.\nShe carries a big crumb.\nHeavy! But she is strong.\nOver the stone. Under the leaf.\nHome to her friends.\nWell done, tiny ant.",
  id: "Di atas tanah, seekor semut kecil.\nKecil sekali. Lihat dari dekat.\nIa berjalan dalam barisan. Langkah, langkah.\nIa membawa serpihan besar.\nBerat! Tapi ia kuat.\nMelewati batu. Di bawah daun.\nPulang ke teman-temannya.\nHebat, semut kecil.",
  v: [["ant", "semut"], ["tiny", "kecil sekali"], ["crumb", "serpihan makanan"], ["strong", "kuat"]]
},
{
  t: "Stars Come Out",
  en: "The sky is dark now.\nLook up. What is that?\nOne star. Twinkle, twinkle.\nTwo stars. Three stars.\nSo many stars. Too many to count.\nThey shine so far away.\nLittle lights in the big sky.\nGood night, stars. Twinkle, twinkle.",
  id: "Langit sudah gelap sekarang.\nLihat ke atas. Apa itu?\nSatu bintang. Kelap, kelip.\nDua bintang. Tiga bintang.\nBanyak sekali bintang. Terlalu banyak untuk dihitung.\nMereka bersinar jauh sekali.\nCahaya kecil di langit yang besar.\nSelamat malam, bintang. Kelap, kelip.",
  v: [["star", "bintang"], ["twinkle", "berkelap-kelip"], ["shine", "bersinar"], ["sky", "langit"]]
},
{
  t: "The Chirpy Bird",
  en: "A little bird sits on the branch.\nChirp, chirp, chirp.\nHer feathers are brown and soft.\nShe hops along. Hop, hop.\nFlap, flap. Up she flies!\nHigh in the sky. So high.\nBack to her nest she goes.\nChirp, chirp. Good night, bird.",
  id: "Seekor burung kecil bertengger di dahan.\nCuit, cuit, cuit.\nBulunya cokelat dan lembut.\nIa melompat-lompat. Hop, hop.\nKepak, kepak. Ia terbang naik!\nTinggi di langit. Tinggi sekali.\nIa kembali ke sarangnya.\nCuit, cuit. Selamat malam, burung.",
  v: [["branch", "dahan"], ["chirp", "cuitan burung"], ["feathers", "bulu burung"], ["flap", "mengepakkan sayap"], ["nest", "sarang"]]
},
{
  t: "Bubbles Go Pop",
  en: "Blow, blow. Here come bubbles!\nOne bubble. Two bubbles.\nSo many bubbles. Round and shiny.\nUp they float. Up, up, up.\nCatch one. Gently, gently.\nPop! It is gone.\nPop, pop, pop. All gone.\nBlow again. More bubbles!",
  id: "Tiup, tiup. Gelembung datang!\nSatu gelembung. Dua gelembung.\nBanyak sekali gelembung. Bundar dan berkilau.\nMereka melayang naik. Naik, naik, naik.\nTangkap satu. Pelan-pelan, pelan-pelan.\nPop! Hilang sudah.\nPop, pop, pop. Habis semua.\nTiup lagi. Gelembung lagi!",
  v: [["bubble", "gelembung"], ["blow", "meniup"], ["float", "melayang"], ["pop", "meletus/pecah"]]
},
{
  t: "Good Night, Everyone",
  en: "The day is done. Time for bed.\nGood night, sun. Sleep well.\nGood night, birds in the tree.\nGood night, cat on the chair.\nGood night, ball on the floor.\nGood night, socks and blanket.\nGood night, moon and stars.\nGood night, sweet baby. I love you.",
  id: "Hari sudah selesai. Waktunya tidur.\nSelamat malam, matahari. Tidur yang nyaman.\nSelamat malam, burung-burung di pohon.\nSelamat malam, kucing di kursi.\nSelamat malam, bola di lantai.\nSelamat malam, kaus kaki dan selimut.\nSelamat malam, bulan dan bintang.\nSelamat malam, bayi manis. Aku sayang kamu.",
  v: [["done", "selesai"], ["sleep well", "tidur yang nyaman"], ["floor", "lantai"], ["love", "sayang/cinta"]]
}
];
