import googleApiImage from "../media/googleApiImage2.jpg";
import connMod from "../media/ConnModCodeImgBoth.png";
import scpTransit from "../media/TransitAppImg.png";
import pokemonImg from "../media/pokemon.jpg";
import reactImg from "../media/reactImg.jpg";

export const projectCarouselObjects = [
  {
    key: 1,
    image: reactImg,
    projectTitle: "This Website",
    projectDescriptions:
      "This site was created with react and is hosted on Netlify with continuous deployment thru Github. " +
      "The hero list below is stored on MongoDB using Netlify serverless functions to connect direct to the MongoDP API",

    links: {
      firstLink: "https://github.com/Ryankolsen/ryansportkeyv2",
      firstLinkButtonText: "Code on GitHub",
      secondLink: "",
      secondLinkButtonText: "",
    },
  },
  {
    key: 2,
    image: scpTransit,
    projectTitle: "Spacecraft Transit Division App",
    projectDescriptions:
      "React app built with Redux Toolkit, Vite, Typescript, MobgoDB, Firebase, and Netlify Serverless Functions",

    links: {
      firstLink: "https://spacecraft-transit-division-app.netlify.app/",
      firstLinkButtonText: "Application",
      secondLink:
        "https://spacecraft-transit-division-app.netlify.app/mod-codes",
      secondLinkButtonText: "MongoDb Section",
    },
  },
  {
    key: 3,
    image: connMod,
    projectTitle: "React Native Application",
    projectDescriptions:
      "This React Native application is up on Google Play for Android. It is industry specific, I made it for my current job/role, and allows a user to search an extensive modification code list by a couple of different metrics.",

    links: {
      firstLink: "https://github.com/Ryankolsen/ConnectorModCodes",
      firstLinkButtonText: "Code on GitHub",
      secondLink:
        "https://play.google.com/store/apps/details?id=com.ryankolsen.ConnectorModCodes",
      secondLinkButtonText: "Play Store Link",
    },
  },

  {
    key: 4,
    image: googleApiImage,
    projectTitle: "React Google Book API",
    projectDescriptions: `This App uses React Redux Toolkit, 
      Typescript, and RTK Query to access the Google Books API, allows a user to search for books by any author, 
      and has the option to add books to a favorite list that can be viewed. Please note this is a work in progress.`,
    links: {
      firstLink: "https://main--astonishing-rolypoly-ad8c2b.netlify.app/",
      firstLinkButtonText: "Website",
      secondLink: "https://github.com/Ryankolsen/googleBookApi",
      secondLinkButtonText: "Code on GitHub",
    },
  },
];
