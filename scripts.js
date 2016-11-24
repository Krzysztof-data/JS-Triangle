function Telefon(marka, cena, kolor, system, wyświetlacz) { 
  this.marka = marka; 
  this.cena = cena; 
  this.kolor = kolor;
  this.system = system;
  this.wyświetlacz = wyświetlacz;
} 
Telefon.prototype.printInfo = function() {
  console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + ', system operacyjny ' + this.system + ', rodzaj wyświetlacza ' + this. wyświetlacz + '.'); 
}
var iPhone6S = new Telefon('Apple', 2250, 'srebrny', 'iOS', 'IPS TFT');
var samsungGalaxyS6 = new Telefon('Samsung', 1659, 'czarny', 'Android', 'super AMOLED');
var onePlusOne = new Telefon('OnePlus One', 1299, 'czarny', 'Android', 'IPS TFT');

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo(); 
