function rysujChoinkę(j) {
  for(i = 1; i <= j; i++) {
    var star = '';
    for(n = 0; (i * 2 - 1) > n; n++) {
      star += '*';
      }
  for(s = j; s - i >= 1;  s--) {
    star = ' '  + star;
        }
    console.log(star);
    }
}
rysujChoinkę(5);

