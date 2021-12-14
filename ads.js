document.write("<adsbody><adsinn><text><maintt><a href='https://www.unikizelements.xyz/'>Music Sic Themes - Unikiz Elements</a><maintt><sectt>Unikiz Elements Ads</sectt></text></adsinn></adsbody>");
var style = document.createElement('style');
  style.innerHTML = `
  adsbody {
      background: white;
      border-bottom: solid DarkBlue 5px;
      padding: 5px;
      transition: .4s ease; display: block; width: 100%; z-index: 0; bottom: 0
  }
  adsinn {display: flex; justify-content: center
  }
  text {
      background: AliceBlue;
      padding: 15px; margin: 10px;
      color: black;
      font-weight: 400;
      font-family: 'roboto' sans;
      border-radius: 8px; width: 100%
  }
  close {
      float: right;
      padding: 16px 25px
  }
  maintt a {
      text-decoration:none;
      color: black;
  }
  sectt {
      opacity: 0.3;
      display: block;
      color: black;
      padding-top: 5px;
      font-weight: 300;
      font-family: 'roboto';
      font-size: 0.9em
  }
  `;
  document.head.appendChild(style);
