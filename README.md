# Secim Haritasi
Turkey election map

Bu proje verilen secim.js dosyasındaki verilere vektörel bir türkiye haritasının renklendirilmesini sağlamaktadır.
Toggleswith ile kontrol edilebilen 2 farklı renklendirme mevcuttur.
- Seçim Haritası : Partilere göre şehirlerin renklendirmeleri yapılmıştır.
- Fark Haritası : En çok oy alan 2 parti arasındaki farka bağlı olarak şehirlerin renkleri kırmızıya boyanmıştır. Kırmızının opaklığı/koyuluğu oy yüzdesi farkı ile doğru orantılıdır.

svg-turkiye-haritasi.js ve svg-turkiye-haritasi.css dosyaları ve index.hbs dosyasındaki harita kısmı github.com/dnomak/svg-turkiye-haritasi repositorysinden alınmıştır. Bu dosyalar üzerinde şehirler üzerindeki popuplar ile ilgili kısımların bir kısmı çıkarılıp index.js ve style.css dosyalarına taşınmıştır.

index.js dosyası 3 temel parçadan oluşmaktadır:
- dataController : Frontend arkaplanında çalışan logic bu kısımdadır. 
- UIController : Arayüzde gerçekleşen değişiklikleri bu kısım sağlamaktadır.
- controller : dataController ve UIController arasındaki iletişimi sağlamaktadır.

json dosyası localden okunmayıp controller kısmının sonuna const data olarak eklenmiştir.
