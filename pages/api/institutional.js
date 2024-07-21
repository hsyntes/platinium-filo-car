export default function handler(req, res) {
  const meta = {
    description: "Araç Kiralama - Platinium Filo Car Araç Kiralama",
    keywords: [
      "araç kiralama",
      "kurumsal araç kiralama",
      "araç kiralama ankara",
      "avis araç kiralama",
      "garenta araç kiralama",
      "aylık araç kiralama",
      "araç kiralama en uygun",
      "budget araç kiralama",
      "tiktak araç kiralama",
      "uzun dönem araç kiralama",
      "araç kiralama fiyatları",
      "kıbrıs araç kiralama",
      "araç kiralama ankara fiyat",
      "araç kiralama avis",
      "araç kiralama aylık",
      "araç kiralama antalya",
      "araç kiralama ankara havalimanı",
      "araç kiralama adana",
      "araç kiralama ankara sahibinden",
      "araç kiralama ankara sincan",
      "araç kiralama ankara keçiören",
      "ankara araç kiralama",
      "antalya araç kiralama",
      "adana araç kiralama",
      "avec araç kiralama",
      "aylık araç kiralama fiyatları",
      "adana havalimanı araç kiralama",
      "antalya havalimanı araç kiralama",
      "avek araç kiralama",
      "araç kiralama bursa",
      "araç kiralama bodrum",
      "araç kiralama bmw",
      "araç kiralama bedeli 2024",
    ],
    title: "Kurumsal Araç Kiralama | Platinium Filo Car",
  };

  const headings = {
    title: "Kurumsal Araç Kiralama",
    paragraph:
      "Platinum Filo Car, her geçen gün artan şube sayısı, her kiralama için detaylı şekilde hijyen standartları sağlanan araçlar ile günlük ve aylık kurumsal araç ihtiyaçlarınıza çözüm sunmaktadır. Geniş araç çeşitliliği ile kurumsal kiralamaya özel avantajlı kiralama koşulları siz değerli müşterilerimizi bekliyor. Kampanyadan yararlanmak için tüm hafta 08.00-00.00 arasında hizmet veren 0507 259 37 55 numaralı çağrı merkezimizden bilgi alabilirsiniz.",
  };

  const lists = [
    "Kolay ulaşılabilen geniş şube ağı",
    "Bakımlı ve genç araçlardan oluşan filosu",
    "Kurumlara özel fiyatlandırma imkanı",
    "Şirket kredi kartları ile ödeme imkanı",
    "Sadece kurumsal müşterilerimize hizmet veren özel “Kurumsal Ekip” yapısı ile hızlı çözümler",
    "Opsiyonel olarak sunulan kış lastiği, isofiks bağlantılı çocuk koltuğu, güncel navigasyon cihazları ve zengin içerikli sigorta seçenekleri",
    "7/24 hizmet veren Çağrı Merkezi yapısı ile kesintisiz destek hizmeti; 0507 259 37 55",
    "Araçların tüm vergi, trafik sigortası ve servis bakımları Platinum Car Filo’ya aittir",
  ];

  res.status(200).json({
    status: "success",
    data: {
      meta,
      headings,
      lists,
    },
  });
}
