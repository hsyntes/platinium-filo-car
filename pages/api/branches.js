export default function handler(req, res) {
  const meta = {
    description: "Araç Kiralama - Platinium Filo Car Araç Kiralama",
    keywords: [
      "araç kiralama",
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
    title: "Araç Kiralama Şubelerimiz | Platinium Filo Car",
  };

  const headings = {
    title: "Araç Kiralama Şubelerimiz",
  };

  res.status(200).json({
    status: "success",
    data: {
      meta,
      headings,
    },
  });
}
