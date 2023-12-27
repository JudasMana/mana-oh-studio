import img1 from "../../resources/imgs/profile-1.webp";
import img2 from "../../resources/imgs/profile-2.webp";
import eurosport from "../../resources/logos/eurosport.webp";
import rga from "../../resources/logos/r-ga.webp";
import nike from "../../resources/logos/nike.webp";
import olympics from "../../resources/logos/olympics.webp";
import schuh from "../../resources/logos/schuh.webp";
import muscleGun from "../../resources/logos/muscle-gun.webp";
import akqa from "../../resources/logos/akqa.webp";
import worldGoldCouncil from "../../resources/logos/world-gold-council.webp";
import five from "../../resources/logos/5.webp";
import correlated from "../../resources/logos/correlated.webp";
import here from "../../resources/logos/here.webp";
import zeroLight from "../../resources/logos/zero-light.webp";
import logo from "../../resources/icons/logo.webp";

export const profileHTML = `
<header>
  <button data-destination="home" class="header__link home">Home</button>
  <button data-destination="profile" class="header__link header__link--active profile">Profile</button>
  <button data-destination="contact" class="header__link contact">Contact</button>
</header>
<h1 class="greet slided" data-slide-delay="0">Hey 👋🏼 I'm Oli</h1>
<section class="profile__pictures">
  <img
    src="${img1}"
    alt="Profile picture"
    class="profile__pic slided" data-slide-delay="200"
  />
  <img
  src="${img2}"
    alt="Profile picture"
    class="profile__pic pic__2 slided" data-slide-delay="400"
  />
</section>
<section class="about">
  <p class="label slided" data-slide-delay="0">About</p>
  <p class="description slided" data-slide-delay="100">
    A freelancer designer based in the UK. I combine my experience in
    product and brand to solve problems, tell stories, and create compelling
    experiences.
  </p>
</section>
<section class="experience">
  <p class="label slided" data-slide-delay="0">Experience</p>
  <p class="description slided" data-slide-delay="100">Where I've worked</p>
</section>
<section class="work__places slided">
  <div class="work__place">
    <p class="time__period">2017 --- Present</p>
    <p class="company__name">OH.STUDIO</p>
    <p class="job__description">Freelance Designer</p>
    <p class="role">Director</p>
  </div>
  <div class="work__place">
    <p class="time__period">2021 --- Present</p>
    <p class="company__name">Friendly Studio</p>
    <p class="job__description">Lead Product Designer</p>
    <p class="role">Freelance</p>
  </div>
  <div class="work__place">
    <p class="time__period">2022</p>
    <p class="company__name">R/GA</p>
    <p class="job__description">Senior Visual Designer</p>
    <p class="role">Freelance</p>
  </div>
  <div class="work__place">
    <p class="time__period">2021</p>
    <p class="company__name">R/GA</p>
    <p class="job__description">Senior Visual Designer</p>
    <p class="role">Freelance</p>
  </div>
  <div class="work__place">
    <p class="time__period">2021</p>
    <p class="company__name">AKQA</p>
    <p class="job__description">Senior Designer</p>
    <p class="role">Freelance</p>
  </div>
  <div class="work__place">
    <p class="time__period">2020</p>
    <p class="company__name">AKQA</p>
    <p class="job__description">Senior Designer</p>
    <p class="role">Freelance</p>
  </div>
  <div class="work__place">
    <p class="time__period">2019</p>
    <p class="company__name">OUI Centric</p>
    <p class="job__description">Senior Product Designer</p>
    <p class="role">Freelance</p>
  </div>
  <div class="work__place">
    <p class="time__period">2017</p>
    <p class="company__name">Agency TK</p>
    <p class="job__description">enior Product Designer</p>
    <p class="role">Permanent</p>
  </div>
  <div class="work__place">
    <p class="time__period">20172</p>
    <p class="company__name">Agency TK</p>
    <p class="job__description">Digital Designer</p>
    <p class="role">Permanent</p>
  </div>
  <div class="work__place">
    <p class="time__period">2009</p>
    <p class="company__name">Next Level</p>
    <p class="job__description">Digital Designer</p>
    <p class="role">Permanent</p>
  </div>
  <div class="work__place">
    <p class="time__period">2008</p>
    <p class="company__name">Next Level</p>
    <p class="job__description">Junior Digital Designer</p>
    <p class="role">Permanent</p>
  </div>
</section>
<section class="worked__with">
  <p class="label slided" data-slide-delay="0">Clients</p>
  <p class="description slided" data-slide-delay="100">Who I've worked with</p>
</section>
<section class="collaborations slided" data-slide-delay="0">
  <div class="collab">
    <img
      src="${eurosport}"
      alt="Eurosport"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img
    src="${rga}"
      alt="R/GA"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img
    src="${nike}"
      alt="Nike"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img
    src="${olympics}"
      alt="Olympiad"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img
    src="${schuh}"
      alt="Schuh"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img
    src="${muscleGun}"
      alt="MuscleGun"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img
    src="${akqa}"
      alt="AKQA"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img
    src="${worldGoldCouncil}"
      alt="World Gold Council"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img src="${five}" alt="5" class="logo logo__white" />
  </div>
  <div class="collab">
    <img
    src="${correlated}"
      alt="Correlated"
      class="logo logo__white"
    />
  </div>
  <div class="collab">
    <img src="${here}" alt="Here" class="logo" />
  </div>
  <div class="collab">
    <img
    src="${zeroLight}"
      alt="ZeroLight"
      class="logo logo__white"
    />
  </div>
</section>
<section class="contact__me slided" data-slide-delay="0">
  <p class="work">Let's work together.</p>
  <a href="mailto:oli@ohstudio" class="get__in__touch">Get in touch.</a>
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
