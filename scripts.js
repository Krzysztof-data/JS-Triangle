function rysujChoinkę(n) {
  for (var i = 0; i < n; i++) {
      var star = ' '; 
      for (var s = 0; s < i * 2 - 1; s++){ 
           star += '*';
      }
         console.log(star);
  }
}

rysujChoinkę(5);
