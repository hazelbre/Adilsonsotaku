const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="Images/logo2.JPG" class="logo" style="display: block; margin-left: auto; margin-right: auto;">
   
  </div>
  <p class="footer-title">About company</p>
  <p class="info">Adilsons is the largest Anime and Manga Store in Mauritius. We have a wide variety of Anime Merchandise and Manga that is available both to the Mauritian and International Market. As an Official Tournament Store licenced by Konami (a Japanese entertainment conglomerate and video game company. In addition to being a video game developer and publisher, it also produces and distributes trading cards, anime, slot machines, and arcade cabinets), we organised several Yu-Gi-Oh! tournaments and even duel link ones.</p>
  <p class="info">Support emails - ashfaq.ramjaum@adilsons.org</p>
  <p class="info">Telephone - +230 5778 2336</p>
  <div class="footer-social-container">
  </div>
  <div>
    <a href="#" class="social-link">terms & services</a>
    <a href="#" class="social-link">privacy page</a>
  </div>
  <p class="infor">Copyright © 2022 Adilsons.
    Powered by Shopify</p>
  
    `;
}

createFooter();