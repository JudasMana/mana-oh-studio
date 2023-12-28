import { homeHTML } from "../js/js-html/homeHtml";
import { profileHTML } from "../js/js-html/profileHtml";
import { contactHTML } from "../js/js-html/contactHtml";

const homeData = {
  slidingElements: [
    ".title",
    ".branding",
    ".project__gallery",
    ".work",
    ".get__in__touch",
  ],
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
    ".work",
    ".get__in__touch",
  ],
  markup: profileHTML,
  name: "profile",
};

const contactData = {
  slidingElements: [".work", ".get__in__touch"],
  markup: contactHTML,
  name: "contact",
};

const aireData = {
  elementsId: "aire",
  name: "aire",
  title: "Aire",
  caption: "A better way to deal with every day",
  mainVisual: { file: aireVisual1, type: "image" },
  client: "Aire",
  studio: "OH&CO",
  project: "",
  role: "Creative Designer",
  focus: "Brand Identity",
  secondaryVisual: [
    { file: aireVisual2, type: "image" },
    { file: aireVisual3, type: "image" },
  ],
  overview:
    "I worked with Aire to develop a brand that firmly positions them as a premium lifestyle brand. The name Aire was inspired by the companies conception in Aire Street Workshops, in addition to aligning well with how the product makes you feel. The wordmark has been designed to convey the feeling of ease and simplicity whilst encapsulating a premium feel. Aire believes in the power of CBD to help people manage the day to day a little better — so I developed a strap-line which embodied that message. A better way to deal with every day.",
  imageGallery: [
    [{ file: aireVisual4, type: "image" }],
    [
      { file: aireVisual5, type: "image" },
      { file: aireVisualMain, type: "image" },
    ],
    [{ file: aireVisual6, type: "image" }],
    [{ file: aireVisual7, type: "image" }],
    [{ file: aireVisual8, type: "image" }],
    [{ file: aireVisual9, type: "image" }],
    [
      { file: aireVisual10, type: "image" },
      { file: aireVisual11, type: "image" },
    ],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const correlatedData = {
  elementsId: "correlated",
  name: "correlated",
  title: "Correlated",
  caption: "From onboarding to automation. A seamless user journey.",
  mainVisual: { file: correlatedVisualMain, type: "image" },
  client: "Correlated",
  studio: "Friendly Studio",
  project: "",
  role: "Lead Designer",
  focus: "Product Design",
  secondaryVisual: [{ file: correlatedVisual1, type: "image" }],
  overview:
    "I helped the Correlated team improve functionality across their platform and develop a series of new features, all backed up by a robust and distinct design system.",
  imageGallery: [
    [
      { file: correlatedVisual2, type: "image" },
      { file: correlatedVisual3, type: "image" },
    ],
    [{ file: correlatedVisual4, type: "image" }],
    [{ file: correlatedVisual5, type: "image" }],
    [
      { file: correlatedVisual6, type: "image" },
      { file: correlatedVisual7, type: "image" },
    ],
    [{ file: correlatedVisual8, type: "image" }],
    [
      { file: correlatedVisual9, type: "image" },
      { file: correlatedVisual10, type: "image" },
    ],
    [{ file: correlatedVisual11, type: "image" }],
    [
      { file: correlatedVisual12, type: "image" },
      { file: correlatedVisual13, type: "image" },
    ],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const channel5Data = {
  elementsId: "channel__5",
  name: "channel 5",
  title: "Channel 5",
  caption: "A new interface for the My5 app",
  mainVisual: { file: channel5VisualMain, type: "image" },
  client: "Channel 5",
  studio: "UI Centric",
  project: "",
  role: "Senior Designer",
  focus: "Product Design",
  secondaryVisual: [{ file: channel5Visual1, type: "image" }],
  overview:
    "I worked with UI Centric and the team at Channel 5 to redesign their My5 platform across iOS and Android, all backed up by a robust and distinct design system.",
  imageGallery: [
    [
      { file: channel5Visual2, type: "image" },
      { file: channel5Visual3, type: "image" },
    ],
    [{ file: channel5Visual4, type: "image" }],
    [
      { file: channel5Visual5, type: "image" },
      { file: channel5Visual6, type: "image" },
    ],
    [{ file: channel5Visual7, type: "image" }],
    [
      { file: channel5Visual8, type: "image" },
      { file: channel5Visual9, type: "image" },
    ],
    [{ file: channel5Visual10, type: "image" }],
    [
      { file: channel5Visual11, type: "image" },
      { file: channel5Visual12, type: "image" },
    ],
    [{ file: channel5Visual13, type: "image" }],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const ronaldAbramData = {
  elementsId: "ronald__abram",
  name: "ronald abram",
  title: "Ronald Abram",
  caption: "A luxury jewellery brand rich in heritage",
  mainVisual: { file: ronaldAbramVisualVideo, type: "video" },
  client: "Ronald Abram",
  studio: "Onstate",
  project: "",
  role: "Lead Designer",
  focus: "Brand Identity",
  secondaryVisual: [
    { file: ronaldAbramVisual2, type: "image" },
    { file: ronaldAbramVisual3, type: "image" },
  ],
  overview:
    "I crafted a series of user interfaces for their ecommerce platform. To supplement the designs I also art directed a range of imagery inspired by Monokel's Scandinavian heritage.",
  imageGallery: [
    [{ file: ronaldAbramVisual4, type: "image" }],
    [
      { file: ronaldAbramVisualVideo, type: "video" },
      { file: ronaldAbramVisual3, type: "image" },
    ],
    [{ file: ronaldAbramVisual5, type: "image" }],
    [{ file: ronaldAbramVisual6, type: "image" }],
    [
      { file: ronaldAbramVisual7, type: "image" },
      { file: ronaldAbramVisual3, type: "image" },
    ],
    [{ file: ronaldAbramVisual8, type: "image" }],
    [
      { file: ronaldAbramVisual9, type: "image" },
      { file: ronaldAbramVisual3, type: "image" },
    ],
    [{ file: ronaldAbramVisual10, type: "image" }],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const propellerData = {
  elementsId: "propeller",
  name: "propeller",
  title: "Propeller",
  caption: "Tap into your untapped innovation",
  mainVisual: { file: propellerVisual1, type: "image" },
  client: "Propeller",
  studio: "OH&CO",
  project: "",
  role: "Lead Designer",
  focus: "Brand & Digital",
  secondaryVisual: [{ file: propellerVisual2, type: "image" }],
  overview:
    "I worked with Propeller to design their brand identity and design language. The name Propeller was inspired by the companies overall objective — to propel great business ideas. The identity was designed with this very objective in mind. The logomark is formed from a propeller shape to create a unique letter P. In addition to the brand I also worked with Propeller to develop their product interface as well as their website visuals.",
  imageGallery: [
    [
      { file: propellerVisual3, type: "image" },
      { file: propellerVisualVideo1, type: "video" },
    ],
    [{ file: propellerVisual4, type: "image" }],
    [
      { file: propellerVisual5, type: "image" },
      { file: propellerVisualVideo1, type: "video" },
    ],
    [{ file: propellerVisual6, type: "image" }],
    [{ file: propellerVisual7, type: "image" }],
    [
      { file: propellerVisual8, type: "image" },
      { file: propellerVisualVideo2, type: "video" },
    ],
    [{ file: propellerVisual10, type: "image" }],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const schuhData = {
  elementsId: "schuh",
  name: "schuh",
  title: "Schuh",
  caption: "A new online look for one of the biggest footwear retailers",
  mainVisual: { file: schuhVisualMain, type: "image" },
  client: "Schuh",
  studio: "A_TK",
  project: "",
  role: "Senior Designer",
  focus: "Digital",
  secondaryVisual: [{ file: schuhVisual1, type: "image" }],
  overview:
    "Working alongside Schuh’s internal design team and A_TK, I was responsible for designing the entire look and feel of their new website. From wireframes through to engineer-ready designs.",
  imageGallery: [
    [
      { file: schuhVisual2, type: "image" },
      { file: schuhVisual3, type: "image" },
    ],
    [{ file: schuhVisual4, type: "image" }],
    [{ file: schuhVisual5, type: "image" }],
    [{ file: schuhVisual6, type: "image" }],
    [
      { file: schuhVisual7, type: "image" },
      { file: schuhVisual8, type: "image" },
    ],
    [{ file: schuhVisual9, type: "image" }],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const paperstreetData = {
  elementsId: "paperstreet",
  name: "paperstreet",
  title: "Paperstreet",
  caption: "Making investor updates easy with Paperstreet",
  mainVisual: { file: paperstreetVisualMain, type: "image" },
  client: "Paperstreet",
  studio: "Friendly Studio",
  project: "",
  role: "Lead Designer",
  focus: "Product Design",
  secondaryVisual: [{ file: paperstreetVisual1, type: "image" }],
  overview:
    "Paperstreet is the fastest and easiest way to share your startup's progress with anyone. As lead designer, I worked directly with Carter and Matt at Paperstreet to understand their audience and challenges, so I could design a user-friendly platform that made sharing investor updates as easy as possible.",
  imageGallery: [
    [
      { file: paperstreetVisual2, type: "image" },
      { file: paperstreetVisual3, type: "image" },
    ],
    [{ file: paperstreetVisual4, type: "image" }],
    [
      { file: paperstreetVisual5, type: "image" },
      { file: paperstreetVisual6, type: "image" },
    ],
    [{ file: paperstreetVisual7, type: "image" }],
    [{ file: paperstreetVisual8, type: "image" }],
    [{ file: paperstreetVisual9, type: "image" }],
    [
      { file: paperstreetVisual10, type: "image" },
      { file: paperstreetVisual11, type: "image" },
    ],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const ohSupplyData = {
  elementsId: "oh__supply",
  name: "oh-supply",
  title: "OH.SUPPLY",
  caption: "Pixel-perfect icons for your next design project",
  mainVisual: { file: ohSupplyVisual1, type: "image" },
  client: "",
  studio: "",
  project: "OH.SUPPLY",
  role: "Lead Designer",
  focus: "Product Design",
  secondaryVisual: [
    { file: ohSupplyVisual2, type: "image" },
    { file: ohSupplyVisual3, type: "image" },
    { file: ohSupplyVisual4, type: "image" },
  ],
  overview:
    "I've designed a pixel-perfect icon pack, that will launch soon as a purchasable asset. This pack features over 200 beautifully designed icons, each expertly crafted within a 24x24px bounding box and featuring a consistent 2px stroke. Perfect for your next interface design.",
  imageGallery: [[{ file: ohSupplyVisual5, type: "image" }]],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const monokelData = {
  elementsId: "monokel__eyewear",
  name: "monokel-eyewear",
  title: "Monokel Eyewear",
  caption: "A minimal interface for a Swedish sunglasses brand",
  mainVisual: { file: monokelVisualMain, type: "image" },
  client: "Monokel Eyewear",
  studio: "OH&CO",
  project: "",
  role: "Lead Designer",
  focus: "Digital",
  secondaryVisual: [{ file: monokelVisual1, type: "image" }],
  overview:
    "I crafted a series of user interfaces for Monokel's ecommerce platform. I also art directed a range of imagery inspired by Monokel's Scandinavian heritage.",
  imageGallery: [
    [
      { file: monokelVisual2, type: "image" },
      { file: monokelVisual3, type: "image" },
    ],
    [{ file: monokelVisual4, type: "image" }],
    [{ file: monokelVisual5, type: "image" }],
    [{ file: monokelVisual6, type: "image" }],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

const nycbData = {
  elementsId: "nycb",
  name: "nycb",
  title: "NYCB",
  caption: "A new website for an iconic dance company",
  mainVisual: { file: nycbVisual1, type: "image" },
  client: "NYCB",
  studio: "Made Media",
  project: "",
  role: "Lead Designer",
  focus: "Digital",
  secondaryVisual: [{ file: nycbVisual2, type: "image" }],
  overview:
    "New York City Ballet is one of the foremost dance companies in the world, with a roster of spectacular dancers and an unparalleled repertory. I worked with Made Media to design their new website.",
  imageGallery: [
    [
      { file: nycbVisual3, type: "image" },
      { file: nycbVisual4, type: "image" },
    ],
    [{ file: nycbVisual5, type: "image" }],
    [
      { file: nycbVisual6, type: "image" },
      { file: nycbVisual7, type: "image" },
    ],
    [{ file: nycbVisual8, type: "image" }],
    [
      { file: nycbVisual9, type: "image" },
      { file: nycbVisual10, type: "image" },
    ],
    [{ file: nycbVisualVideo, type: "video" }],
  ],
  slidingElements: [
    ".project__caption",
    ".project__name",
    "main",
    ".work",
    ".get__in__touch",
  ],
};

export const app = {
  home: homeData,
  profile: profileData,
  contact: contactData,

  projects: [
    aireData,
    correlatedData,
    channel5Data,
    ronaldAbramData,
    propellerData,
    schuhData,
    paperstreetData,
    ohSupplyData,
    monokelData,
    nycbData,
  ],

  currentPage: "home",
};

import aireVisual1 from "../resources/imgs/projects/aire/aire-1.webp";
import aireVisual2 from "../resources/imgs/projects/aire/aire-2.webp";
import aireVisual3 from "../resources/imgs/projects/aire/aire-3.webp";
import aireVisual4 from "../resources/imgs/projects/aire/aire-4.webp";
import aireVisual5 from "../resources/imgs/projects/aire/aire-5.webp";
import aireVisualMain from "../resources/imgs/aire.webp";
import aireVisual6 from "../resources/imgs/projects/aire/aire-6.webp";
import aireVisual7 from "../resources/imgs/projects/aire/aire-7.webp";
import aireVisual8 from "../resources/imgs/projects/aire/aire-8.webp";
import aireVisual9 from "../resources/imgs/projects/aire/aire-9.webp";
import aireVisual10 from "../resources/imgs/projects/aire/aire-10.webp";
import aireVisual11 from "../resources/imgs/projects/aire/aire-11.webp";

import correlatedVisualMain from "../resources/imgs/correlated.webp";
import correlatedVisual1 from "../resources/imgs/projects/correlated/correlated-1.webp";
import correlatedVisual2 from "../resources/imgs/projects/correlated/correlated-2.webp";
import correlatedVisual3 from "../resources/imgs/projects/correlated/correlated-3.webp";
import correlatedVisual4 from "../resources/imgs/projects/correlated/correlated-4.webp";
import correlatedVisual5 from "../resources/imgs/projects/correlated/correlated-5.webp";
import correlatedVisual6 from "../resources/imgs/projects/correlated/correlated-6.webp";
import correlatedVisual7 from "../resources/imgs/projects/correlated/correlated-7.webp";
import correlatedVisual8 from "../resources/imgs/projects/correlated/correlated-8.webp";
import correlatedVisual9 from "../resources/imgs/projects/correlated/correlated-9.webp";
import correlatedVisual10 from "../resources/imgs/projects/correlated/correlated-10.webp";
import correlatedVisual11 from "../resources/imgs/projects/correlated/correlated-11.webp";
import correlatedVisual12 from "../resources/imgs/projects/correlated/correlated-12.webp";
import correlatedVisual13 from "../resources/imgs/projects/correlated/correlated-13.webp";

import channel5VisualMain from "../resources/imgs/channel-5.webp";
import channel5Visual1 from "../resources/imgs/projects/channel-5/channel5-1.webp";
import channel5Visual2 from "../resources/imgs/projects/channel-5/channel5-2.webp";
import channel5Visual3 from "../resources/imgs/projects/channel-5/channel5-3.webp";
import channel5Visual4 from "../resources/imgs/projects/channel-5/channel5-4.webp";
import channel5Visual5 from "../resources/imgs/projects/channel-5/channel5-5.webp";
import channel5Visual6 from "../resources/imgs/projects/channel-5/channel5-6.webp";
import channel5Visual7 from "../resources/imgs/projects/channel-5/channel5-7.webp";
import channel5Visual8 from "../resources/imgs/projects/channel-5/channel5-8.webp";
import channel5Visual9 from "../resources/imgs/projects/channel-5/channel5-9.webp";
import channel5Visual10 from "../resources/imgs/projects/channel-5/channel5-10.webp";
import channel5Visual11 from "../resources/imgs/projects/channel-5/channel5-11.webp";
import channel5Visual12 from "../resources/imgs/projects/channel-5/channel5-12.webp";
import channel5Visual13 from "../resources/imgs/projects/channel-5/channel5-13.webp";

import ronaldAbramVisualVideo from "url:../resources/imgs/projects/ronald-abram/ronald-abram-1.mp4";
import ronaldAbramVisual2 from "../resources/imgs/projects/ronald-abram/ronald-abram-2.webp";
import ronaldAbramVisual3 from "../resources/imgs/projects/ronald-abram/ronald-abram-3.webp";
import ronaldAbramVisual4 from "../resources/imgs/projects/ronald-abram/ronald-abram-4.webp";
import ronaldAbramVisual5 from "../resources/imgs/projects/ronald-abram/ronald-abram-5.webp";
import ronaldAbramVisual6 from "../resources/imgs/projects/ronald-abram/ronald-abram-6.webp";
import ronaldAbramVisual7 from "../resources/imgs/projects/ronald-abram/ronald-abram-7.webp";
import ronaldAbramVisual8 from "../resources/imgs/projects/ronald-abram/ronald-abram-8.webp";
import ronaldAbramVisual9 from "../resources/imgs/projects/ronald-abram/ronald-abram-9.webp";
import ronaldAbramVisual10 from "../resources/imgs/projects/ronald-abram/ronald-abram-10.webp";

import propellerVisual1 from "../resources/imgs/projects/propeller/propeller-1.webp";
import propellerVisual2 from "../resources/imgs/projects/propeller/propeller-2.webp";
import propellerVisual3 from "../resources/imgs/projects/propeller/propeller-3.webp";
import propellerVisualVideo1 from "url:../resources/vids/propeller.mp4";
import propellerVisual4 from "../resources/imgs/projects/propeller/propeller-4.webp";
import propellerVisual5 from "../resources/imgs/projects/propeller/propeller-5.webp";
import propellerVisual6 from "../resources/imgs/projects/propeller/propeller-6.webp";
import propellerVisual7 from "../resources/imgs/projects/propeller/propeller-7.webp";
import propellerVisual8 from "../resources/imgs/projects/propeller/propeller-8.webp";
import propellerVisualVideo2 from "url:../resources/imgs/projects/propeller/propeller-9.mp4";
import propellerVisual10 from "../resources/imgs/projects/propeller/propeller-10.webp";

import schuhVisualMain from "../resources/imgs/schuh.webp";
import schuhVisual1 from "../resources/imgs/projects/schuh/schuh-1.webp";
import schuhVisual2 from "../resources/imgs/projects/schuh/schuh-2.webp";
import schuhVisual3 from "../resources/imgs/projects/schuh/schuh-3.webp";
import schuhVisual4 from "../resources/imgs/projects/schuh/schuh-4.webp";
import schuhVisual5 from "../resources/imgs/projects/schuh/schuh-5.webp";
import schuhVisual6 from "../resources/imgs/projects/schuh/schuh-6.webp";
import schuhVisual7 from "../resources/imgs/projects/schuh/schuh-7.webp";
import schuhVisual8 from "../resources/imgs/projects/schuh/schuh-8.webp";
import schuhVisual9 from "../resources/imgs/projects/schuh/schuh-9.webp";

import ohSupplyVisual1 from "../resources/imgs/projects/oh-supply/oh-supply-1.webp";
import ohSupplyVisual2 from "../resources/imgs/projects/oh-supply/oh-supply-2.webp";
import ohSupplyVisual3 from "../resources/imgs/projects/oh-supply/oh-supply-3.webp";
import ohSupplyVisual4 from "../resources/imgs/projects/oh-supply/oh-supply-4.webp";
import ohSupplyVisual5 from "../resources/imgs/projects/oh-supply/oh-supply-5.webp";

import paperstreetVisualMain from "../resources/imgs/paperstreet.webp";
import paperstreetVisual1 from "../resources/imgs/projects/paperstreet/paperstreet-1.webp";
import paperstreetVisual2 from "../resources/imgs/projects/paperstreet/paperstreet-2.webp";
import paperstreetVisual3 from "../resources/imgs/projects/paperstreet/paperstreet-3.webp";
import paperstreetVisual4 from "../resources/imgs/projects/paperstreet/paperstreet-4.webp";
import paperstreetVisual5 from "../resources/imgs/projects/paperstreet/paperstreet-5.webp";
import paperstreetVisual6 from "../resources/imgs/projects/paperstreet/paperstreet-6.webp";
import paperstreetVisual7 from "../resources/imgs/projects/paperstreet/paperstreet-7.webp";
import paperstreetVisual8 from "../resources/imgs/projects/paperstreet/paperstreet-8.webp";
import paperstreetVisual9 from "../resources/imgs/projects/paperstreet/paperstreet-9.webp";
import paperstreetVisual10 from "../resources/imgs/projects/paperstreet/paperstreet-10.webp";
import paperstreetVisual11 from "../resources/imgs/projects/paperstreet/paperstreet-11.webp";

import monokelVisualMain from "../resources/imgs/monokel.webp";
import monokelVisual1 from "../resources/imgs/projects/monokel/monokel-1.webp";
import monokelVisual2 from "../resources/imgs/projects/monokel/monokel-2.webp";
import monokelVisual3 from "../resources/imgs/projects/monokel/monokel-3.webp";
import monokelVisual4 from "../resources/imgs/projects/monokel/monokel-4.webp";
import monokelVisual5 from "../resources/imgs/projects/monokel/monokel-5.webp";
import monokelVisual6 from "../resources/imgs/projects/monokel/monokel-6.webp";

import nycbVisualVideo from "url:../resources/vids/nycb.mp4";
import nycbVisual1 from "../resources/imgs/projects/nycb/nycb-1.webp";
import nycbVisual2 from "../resources/imgs/projects/nycb/nycb-2.webp";
import nycbVisual3 from "../resources/imgs/projects/nycb/nycb-3.webp";
import nycbVisual4 from "../resources/imgs/projects/nycb/nycb-4.webp";
import nycbVisual5 from "../resources/imgs/projects/nycb/nycb-5.webp";
import nycbVisual6 from "../resources/imgs/projects/nycb/nycb-6.webp";
import nycbVisual7 from "../resources/imgs/projects/nycb/nycb-7.webp";
import nycbVisual8 from "../resources/imgs/projects/nycb/nycb-8.webp";
import nycbVisual9 from "../resources/imgs/projects/nycb/nycb-9.webp";
import nycbVisual10 from "../resources/imgs/projects/nycb/nycb-10.webp";
