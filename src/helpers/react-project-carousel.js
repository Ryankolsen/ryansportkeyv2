import googleApiImage from "../media/googleApiImage2.jpg";
import connMod from "../media/ConnModCodeImgBoth.png";
import pokemonImg from "../media/pokemon.jpg";
import reduxToolkitImg from "../media/reduxToolkitImg.png";
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
    key: 3,
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
  {
    key: 4,
    image: pokemonImg,
    projectTitle: "React Pokemon API",
    projectDescriptions:
      "This application was built with React, Typescript, React Redux and React Router to connect to a Pokemon API, access, mutate, and display information to a user.",

    links: {
      firstLink: "https://github.com/Ryankolsen/PokemonAPI",
      firstLinkButtonText: "Code on GitHub",
      secondLink: "",
      secondLinkButtonText: "",
    },
  },
];
