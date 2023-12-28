import logo from "../../resources/icons/logo.webp";

export const contactHTML = `
<div class="contact__container">
<header class="short__header">
  <button data-destination="home" class="header__link home">Home </button>
  <button data-destination="profile" class="header__link profile">Profile</button>
  <button data-destination="contact" class="header__link header__link--active contact">Contact</button>
</header>
<section class="short__contact__me">
  <p class="work slided" data-slide-delay="100">Let's work together.</p>
  <a href="mailto:oli@ohstudio" class="get__in__touch slided" data-slide-delay="150">Get in touch.</a>
</section>
<footer>
  <div class="left__footer">
    <img src="${logo}" alt="Logo" class="star" />
    <p class="copyright">&copy; Oli Harris 2023</p>
  </div>
  <div class="socials">
    <a href="https://twitter.com/olvhrs" class="social__link">Twitter</a
    ><a href="https://www.linkedin.com/in/oliiharris/" class="social__link"
      >LinkedIn</a
    ><a href="mailto:oli@ohstudio" class="social__link">Mail</a>
  </div>
</footer>
</div
`;
