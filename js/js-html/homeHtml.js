import logo from "../../resources/icons/logo.webp";
import arrow from "../../resources/icons/arrow.svg";
import lock from "../../resources/icons/lock-icon.svg";
import aire from "../../resources/imgs/aire.webp";
import correlated from "../../resources/imgs/correlated.webp";
import channel5 from "../../resources/imgs/channel-5.webp";
import ronaldAbram from "../../resources/imgs/ronald-abram.webp";
import propeller from "url:../../resources/vids/propeller.mp4";
import schuh from "../../resources/imgs/schuh.webp";
import paperstreet from "../../resources/imgs/paperstreet.webp";
import ohSupply from "url:../../resources/vids/oh-supply.mp4";
import monokel from "../../resources/imgs/monokel.webp";
import lawtrades from "../../resources/imgs/lawtrades.webp";
import baselworld from "../../resources/imgs/baselworld.webp";
import nycb from "url:../../resources/vids/nycb.mp4";

export const homeHTML = `
<header>
  <button
    data-destination="home"
    class="header__link header__link--active home"
  >
    Home
  </button>
  <button data-destination="profile" class="header__link profile">
    Profile
  </button>
  <button data-destination="contact" class="header__link contact">
    Contact
  </button>
</header>
<h1 class="title slided" data-slide-delay="0">
  A brand and product designer working with clients globally
</h1>
<div class="branding slided" data-slide-delay="200">
  <p class="expertise">Expertise</p>
  <p class="skill">Branding</p>
  <p class="skill">Product</p>
  <p class="skill">Design Systems</p>
</div>
<section class="project__gallery slided" data-slide-delay="300">
  <div class="project__couple">
    <div class="project project--active" data-project-name="aire">
      <div class="image__container">
        <img
          src="${aire}"
          alt="Aire"
          class="project__image"
        />
        <p class="imposed__title">Aire</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Aire</p>
    </div>
    <div class="project project--active" data-project-name="correlated">
      <div class="image__container">
        <img
          src="${correlated}"
          alt="Correlated"
          class="project__image"
        />
        <p class="imposed__title">Correlated</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Correlated</p>
    </div>
  </div>
  <div class="project__couple">
    <div class="project project--active" data-project-name="channel 5">
      <div class="image__container">
        <img
          src="${channel5}"
          alt="Channel 5"
          class="project__image"
        />
        <p class="imposed__title">Channel 5</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Channel 5</p>
    </div>
    <div class="project project--active" data-project-name="ronald abram">
      <div class="image__container">
        <img
          src="${ronaldAbram}"
          alt="Ronald Abram"
          class="project__image"
        />
        <p class="imposed__title">Ronald Abram</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Ronald Abram</p>
    </div>
  </div>
  <div class="project__couple">
    <div class="project project--active" data-project-name="propeller"> 
      <div class="image__container">
        <video alt="Propeller" preload="true" autoplay="true" muted="true" loop="true" class="project__image">
          <source src="${propeller}" />
        </video>
        <p class="imposed__title">Propeller</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Propeller</p>
    </div>
    <div class="project project--active" data-project-name="schuh">
      <div class="image__container">
        <img
          src="${schuh}"
          alt="Schuh"
          class="project__image"
        />
        <p class="imposed__title">Schuh</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Schuh</p>
    </div>
  </div>
  <div class="project__couple">
    <div class="project project--active" data-project-name="paperstreet">
      <div class="image__container">
        <img
          src="${paperstreet}"
          alt="Paperstreet"
          class="project__image"
        />
        <p class="imposed__title">Paperstreet</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Paperstreet</p>
    </div>
    <div class="project project--active" data-project-name="oh-supply">
      <div class="image__container">
        <video alt="OH.SUPPLY" autoplay="true" loop class="project__image">
          <source src="${ohSupply}" type="video/mp4" />
        </video>
        <p class="imposed__title">OH.SUPPLY</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">OH.SUPPLY</p>
    </div>
  </div>
  <div class="project__couple">
    <div class="project project--active" data-project-name="monokel-eyewear">
      <div class="image__container">
        <img
          src="${monokel}"
          alt="Monokel Eyewear"
          class="project__image"
        />
        <p class="imposed__title">Monokel Eyewear</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">Monokel Eyewear</p>
    </div>
    <div class="project">
      <div class="image__container">
        <img
          src="${lawtrades}"
          alt="Lawtrades"
          class="project__image"
        />
        <p class="imposed__title">
          Lawtrades<span class="coming__soon">Coming soon</span>
        </p>
        <div class="lock__container">
          <img
            src="${lock}"
            alt="Arrow"
            class="lock"
          />
        </div>
      </div>
      <p class="project__title">
        Lawtrades <span class="coming__soon">Coming soon</span>
      </p>
    </div>
  </div>
  <div class="project__couple">
    <div class="project">
      <div class="image__container">
        <img
          src="${baselworld}"
          alt="Baselworld"
          class="project__image"
        />
        <p class="imposed__title">
          Baselworld<span class="coming__soon">Coming soon</span>
        </p>
        <div class="lock__container">
          <img
            src="${lock}"
            alt="Arrow"
            class="lock"
          />
        </div>
      </div>
      <p class="project__title">
        Baselworld <span class="coming__soon">Coming soon</span>
      </p>
    </div>
    <div class="project project--active" data-project-name="nycb">
      <div class="image__container">
        <video alt="NYCB" autoplay="true" loop class="project__image">
          <source src="${nycb}" type="video/mp4" />
        </video>
        <p class="imposed__title">NYCB</p>
        <div class="arrow__container">
          <img
            src="${arrow}"
            alt="Arrow"
            class="arrow"
          />
        </div>
      </div>
      <p class="project__title">NYCB</p>
    </div>
  </div>
</section>
<section class="contact__me">
  <p class="work slided" data-slide-delay="0">Let's work together.</p>
  <a href="mailto:oli@ohstudio" class="get__in__touch slided" data-slide-delay="50">Get in touch.</a>
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
`;
