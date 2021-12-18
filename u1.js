document.write("<br><br><mbd><h1>Our Clients</h1><p style="color: black; font-family: 'Rubik''>Who believed on us and make their works stanning</p><marquee><brand><img src='https://i.ibb.co/6R8NfMR/2fc36eea4b171a42e0d14709c2ba8a0d.webp' width='100%'></brand><brand><img src='https://i.ibb.co/2FxwyvP/532fa7f1e866c83c358709b52542df56.webp' width='100%'></brand><brand><img src='https://i.ibb.co/87m9YWz/bf8a1a9419081084bf491a6151e4a150.webp' width='100%'></brand></marquee></mbd>");
var style = document.createElement('style');
  style.innerHTML = `
  mbd{
      display: block; width: 100%; margin-top: 100px
  }
  hd1 {
      font-size: 2.4em;
      font-family: 'Rubik';
      text-align: center;
      padding: 20px;
      display: flex;
      justify-content: center;
  }
  p1 {
      display: flex; 
      justify-content: center;
      margin-bottom: 20px
  }
  @media (min-width: 786px) {
      mbd {
          margin-top: 50px
      }
      brand img {
          width: 300px; 
          padding: 10px
      }
  }
  `;
  document.head.appendChild(style);
