const questions_5 = {
    questions: [
        {
            soru: "Bir çiftlikte 25 inek, 18 koyun ve 32 tavuk vardır. Bu çiftlikte toplam kaç hayvan vardır?",
            cozum: "Toplam hayvan sayısını bulmak için inek, koyun ve tavuk sayılarını toplarız: 25 + 18 + 32 = 75",
            secenekler: ["65", "70", "75", "80"],
            dogruCevap: "75"
        },
        {
            soru: "Bir okulda 438 öğrenci vardır. Öğrencilerin 156'sı kız öğrenci ise, erkek öğrenci sayısı kaçtır?",
            cozum: "Erkek öğrenci sayısını bulmak için toplam öğrenci sayısından kız öğrenci sayısını çıkarırız: 438 - 156 = 282",
            secenekler: ["272", "282", "292", "302"],
            dogruCevap: "282"
        },
        {
            soru: "Bir bakkal 125 kilogram pirinç aldı. Bunun 87 kilogramını sattı. Bakkalın elinde kaç kilogram pirinç kaldı?",
            cozum: "Kalan pirinç miktarını bulmak için alınan pirinç miktarından satılan pirinç miktarını çıkarırız: 125 - 87 = 38",
            secenekler: ["28", "38", "48", "58"],
            dogruCevap: "38"
        },
        {
            soru: "Bir otobüs 45 yolcu ile yola çıktı. İlk durakta 12 yolcu indi, 8 yolcu bindi. Otobüste kaç yolcu oldu?",
            cozum: "Önce inen yolcuları çıkarırız: 45 - 12 = 33. Sonra binen yolcuları ekleriz: 33 + 8 = 41",
            secenekler: ["39", "40", "41", "42"],
            dogruCevap: "41"
        },
        {
            soru: "Bir markette 3 düzine yumurta vardır. Bir düzine yumurta 12 tane ise, markette kaç yumurta vardır?",
            cozum: "Düzine sayısını 12 ile çarparak toplam yumurta sayısını buluruz: 3 x 12 = 36",
            secenekler: ["24", "30", "36", "42"],
            dogruCevap: "36"
        },
        {
            soru: "Bir öğrenci günde 25 sayfa kitap okuyor. Bu öğrenci 4 günde kaç sayfa kitap okur?",
            cozum: "Toplam okunan sayfa sayısını bulmak için günlük okunan sayfa sayısını gün sayısı ile çarparız: 25 x 4 = 100",
            secenekler: ["75", "90", "100", "125"],
            dogruCevap: "100"
        },
        {
            soru: "Bir kutuda 15 tane kalem vardır. 5 kutuda kaç kalem olur?",
            cozum: "Toplam kalem sayısını bulmak için bir kutudaki kalem sayısını kutu sayısı ile çarparız: 15 x 5 = 75",
            secenekler: ["60", "75", "80", "90"],
            dogruCevap: "75"
        },
        {
            soru: "Bir bahçede 6 sıra ağaç vardır. Her sırada 11 ağaç olduğuna göre, bahçede toplam kaç ağaç vardır?",
            cozum: "Toplam ağaç sayısını bulmak için sıra sayısını bir sıradaki ağaç sayısı ile çarparız: 6 x 11 = 66",
            secenekler: ["55", "60", "66", "72"],
            dogruCevap: "66"
        },
        {
            soru: "345 + 123 işleminin sonucu kaçtır?",
            cozum: "345 + 123 = 468",
            secenekler: ["458", "468", "478", "488"],
            dogruCevap: "468"
        },
        {
            soru: "567 - 234 işleminin sonucu kaçtır?",
            cozum: "567 - 234 = 333",
            secenekler: ["323", "333", "343", "353"],
            dogruCevap: "333"
        },
        {
            soru: "123 x 3 işleminin sonucu kaçtır?",
            cozum: "123 x 3 = 369",
            secenekler: ["359", "369", "379", "389"],
            dogruCevap: "369"
        },
        {
            soru: "Bir manav 2 kasa elma aldı. Her kasada 24 elma olduğuna göre, manav kaç elma aldı?",
            cozum: "Toplam elma sayısını bulmak için kasa sayısını bir kasadaki elma sayısı ile çarparız: 2 x 24 = 48",
            secenekler: ["36", "42", "48", "54"],
            dogruCevap: "48"
        },
        {
            soru: "Bir terzi 5 gömlek dikti. Her gömlek için 2 metre kumaş kullandı. Terzi toplam kaç metre kumaş kullandı?",
            cozum: "Toplam kumaş miktarını bulmak için gömlek sayısını bir gömlek için kullanılan kumaş miktarı ile çarparız: 5 x 2 = 10",
            secenekler: ["8", "10", "12", "14"],
            dogruCevap: "10"
        },
        {
            soru: "Bir fırıncı sabah 75 ekmek, öğlen 58 ekmek sattı. Fırıncı toplam kaç ekmek sattı?",
            cozum: "Toplam satılan ekmek sayısını bulmak için sabah ve öğlen satılan ekmek sayılarını toplarız: 75 + 58 = 133",
            secenekler: ["123", "133", "143", "153"],
            dogruCevap: "133"
        },
        {
            soru: "Bir oyuncakçı 200 oyuncak sipariş etti. 135 tanesi geldi. Kaç oyuncak daha gelmesi gerekiyor?",
            cozum: "Kalan oyuncak sayısını bulmak için toplam siparişten gelen oyuncak sayısını çıkarırız: 200 - 135 = 65",
            secenekler: ["55", "60", "65", "70"],
            dogruCevap: "65"
        },
        {
            soru: "Bir sinemada 3 salonda film gösterimi vardır. Her salonda 85 koltuk olduğuna göre, sinemada toplam kaç koltuk vardır?",
            cozum: "Toplam koltuk sayısını bulmak için salon sayısını bir salondaki koltuk sayısı ile çarparız: 3 x 85 = 255",
            secenekler: ["245", "255", "265", "275"],
            dogruCevap: "255"
        },
        {
            soru: "Annem 35 yaşında, babam annemden 7 yaş büyüktür. Babam kaç yaşındadır?",
            cozum: "Babamın yaşını bulmak için annemin yaşına 7 ekleriz: 35 + 7 = 42",
            secenekler: ["38", "40", "42", "44"],
            dogruCevap: "42"
        },
        {
            soru: "Bir markette bir şişe su 2 liradır. 6 şişe su alan bir kişi kaç lira öder?",
            cozum: "Toplam ödenecek miktarı bulmak için şişe sayısını bir şişenin fiyatı ile çarparız: 6 x 2 = 12",
            secenekler: ["10", "12", "14", "16"],
            dogruCevap: "12"
        },
        {
            soru: "Bir günde 24 saat vardır. 3 günde kaç saat vardır?",
            cozum: "Toplam saat sayısını bulmak için gün sayısını bir gündeki saat sayısı ile çarparız: 3 x 24 = 72",
            secenekler: ["60", "72", "84", "96"],
            dogruCevap: "72"
        },
        {
            soru: "Bir haftada 7 gün vardır. 2 hafta kaç gündür?",
            cozum: "Toplam gün sayısını bulmak için hafta sayısını bir haftadaki gün sayısı ile çarparız: 2 x 7 = 14",
            secenekler: ["12", "14", "16", "18"],
            dogruCevap: "14"
        },
        {
            soru: "456 + 212 işleminin sonucu kaçtır?",
            cozum: "456 + 212 = 668",
            secenekler: ["658", "668", "678", "688"],
            dogruCevap: "668"
        },
        {
            soru: "789 - 345 işleminin sonucu kaçtır?",
            cozum: "789 - 345 = 444",
            secenekler: ["434", "444", "454", "464"],
            dogruCevap: "444"
        },
        {
            soru: "21 x 15 işleminin sonucu kaçtır?",
            cozum: "21 x 15 = 315",
            secenekler: ["305", "315", "325", "335"],
            dogruCevap: "315"
        },
        {
            soru: "Bir kırtasiyede bir kalem 3 liradır. 8 kalem alan bir kişi kaç lira öder?",
            cozum: "Toplam ödenecek miktarı bulmak için kalem sayısını bir kalemin fiyatı ile çarparız: 8 x 3 = 24",
            secenekler: ["21", "24", "27", "30"],
            dogruCevap: "24"
        },
        {
            soru: "Bir tabakta 17 tane kurabiye vardır. 4 tabakta kaç kurabiye olur?",
            cozum: "Toplam kurabiye sayısını bulmak için tabak sayısını bir tabaktaki kurabiye sayısı ile çarparız: 4 x 17 = 68",
            secenekler: ["58", "68", "78", "88"],
            dogruCevap: "68"
        },
        {
            soru: "Bir öğrenci bir günde 6 saat uyuyor. Bir haftada kaç saat uyur?",
            cozum: "Toplam uyku saatini bulmak için gün sayısını günlük uyku saati ile çarparız: 7 x 6 = 42",
            secenekler: ["36", "42", "48", "54"],
            dogruCevap: "42"
        },
        {
            soru: "Bir aile aylık 1250 lira kira ödüyor. 2 ayda kaç lira kira öder?",
            cozum: "Toplam kira miktarını bulmak için ay sayısını aylık kira miktarı ile çarparız: 2 x 1250 = 2500",
            secenekler: ["2000", "2250", "2500", "2750"],
            dogruCevap: "2500"
        },
        {
            soru: "Bir kutu meyve suyu 4 liradır. 7 kutu meyve suyu alan bir kişi kaç lira öder?",
            cozum: "Toplam ödenecek miktarı bulmak için kutu sayısını bir kutunun fiyatı ile çarparız: 7 x 4 = 28",
            secenekler: ["24", "28", "32", "36"],
            dogruCevap: "28"
        },
        {
            soru: "Bir kümeste 4 düzine tavuk vardır. Bu kümeste kaç tavuk vardır?",
            cozum: "Düzine sayısını 12 ile çarparak toplam tavuk sayısını buluruz: 4 x 12 = 48",
            secenekler: ["36", "48", "60", "72"],
            dogruCevap: "48"
        },
        {
            soru: "Bir manav sabah 85 kilogram, öğleden sonra 67 kilogram meyve sattı. Manav toplam kaç kilogram meyve sattı?",
            cozum: "Toplam satılan meyve miktarını bulmak için sabah ve öğleden sonra satılan meyve miktarlarını toplarız: 85 + 67 = 152",
            secenekler: ["142", "152", "162", "172"],
            dogruCevap: "152"
        }
    ]
};