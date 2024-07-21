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
    title: "Araç Kiralama Koşulları | Platinium Filo Car",
  };

  const headings = [
    { title: "Araç Kiralama Koşulları" },
    {
      title: "Araç Kiralama - Kullanıcı Bilgisi",
      paragraph:
        "Kiraladığınız aracı yalnızca sözleşme ve teslimat formunda belirtilen kişi/kişiler kullanabilir. Sözleşmede belirtilmeyen üçüncü kişilerin, aracı kullanmaları halinde meydana gelebilecek hasarlarda, hiçbir hasar güvencesi geçerli değildir. Araç kullanıcı sayısını arttırabilmek için şubelerimizden, “Ek Sürücü” hizmeti satın alabilirsiniz. Ek sürücü; aracı kiralayan kişi dışında aracı kullanacak biri veya birileri var ise satın alınmak zorundadır. Bir araç için en fazla 5 adet ek sürücü tanımlanabilir. Araç gruplarında belirlenmiş olan yaş ve ehliyet yılı koşulları dâhilinde kiralama yapılabilmektedir. Bu koşulların sağlanamaması durumunda “Genç Sürücü” hizmet paketi satın alarak bu paket içeriğindeki limitler dâhilinde kiralama yapabilirsiniz. Genç sürücü hizmet paketi “Süper Maksimum Güvence” hizmetini de içermektedir. Ek Sürücü ve Genç Sürücü Hizmet ücretlerini rezervasyon merkezimiz ve şubelerimizden öğrenebilirsiniz.",
    },
    {
      title: "Araç Kiralamada Yaş ve Ehliyet Koşulları",
      paragraph:
        "Araç gruplarına bağlı minimum yaş ve ehliyet yılı bilgileri aşağıdaki tabloda belirtilmiştir. Bu koşulları hem kiracı hem de ek sürücünün/sürücülerin sağlaması gerekmektedir. Ehliyet üzerinde T.C. kimlik numarası bulunması zorunludur. Yeni kimliklerle birleşik ehliyetler ile kiralama yapılamaz. Yanınızda ehliyetiniz bulunmak zorundadır.",
    },
  ];

  res.status(200).json({
    status: "success",
    data: {
      meta,
      headings,
    },
  });
}
