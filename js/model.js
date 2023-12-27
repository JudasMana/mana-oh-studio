import { homeHTML } from "../js/js-html/homeHtml";
import { profileHTML } from "../js/js-html/profileHtml";
import { contactHTML } from "../js/js-html/contactHtml";

const homeData = {
  slidingElements: [".title", ".branding", ".project__gallery", ".contact__me"],
  markup: homeHTML,
  name: "home",
};

const profileData = {
  slidingElements: [
    ".greet",
    ".profile__pic",
    ".label",
    ".description",
    ".work__places",
    ".collaborations",
    ".contact__me",
  ],
  markup: profileHTML,
  name: "profile",
};

const contactData = {
  slidingElements: [".short__contact__me"],
  markup: contactHTML,
  name: "contact",
};

export const app = {
  home: homeData,
  profile: profileData,
  contact: contactData,

  currentPage: "home",
};
