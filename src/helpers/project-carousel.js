import googleApiImage from "../media/googleApiImage2.jpg";
import reactImg from "../media/ReactPage.png";
import flaskBlogImg from "../media/proj1-flaskblog.jpg";
import sqldbvs from "../media/proj2-SQL-DB-VS.jpg";
import data from "../media/proj3-image.png";
import unity from "../media/proj4-unity.png";

export const projectCarouselObjects = [
  {
    key: 1,
    image: reactImg,
    projectTitle: "React Projects",
    projectDescriptions: `I absolutely love front end development and I love React. 
    I can create anything with a <div> and a little css and some Javascript. Here are a few of my projects made with React.`,
    links: {
      firstLink: "/ReactPage",
      firstLinkButtonText: "Apps",
      secondLink: "https://main--astonishing-rolypoly-ad8c2b.netlify.app/",
      secondLinkButtonText: "React Google Api",
    },
  },
  {
    key: 2,
    image: flaskBlogImg,
    projectTitle: "Flask Blog Website",
    projectDescriptions: `This full-featured Django application was built from scratch
    using function and class based views, Linode Ubuntu server
    with WSGI, and a good portion of Bootstrap CSS/HTML.`,
    links: {
      firstLink: "https://www.ryanswebsite0909.com/",
      firstLinkButtonText: "Website",
      secondLink: "https://github.com/Ryankolsen/DjangoWebsite",
      secondLinkButtonText: "Code on GitHub",
    },
  },
  {
    key: 3,
    image: sqldbvs,
    projectTitle: "SQL Server API",
    projectDescriptions: `Windows Forms Application using C# and SQL Server. Created on
    Visual Studio using .NET Framework 4.7.2. This API uses Data
    Binding and Binding Navigator to handle user actions/events.`,
    links: {
      firstLink:
        "https://github.com/Ryankolsen/SQL_DB_VS_/blob/main/DB_VS_EX.mp4",
      firstLinkButtonText: "Video",
      secondLink: "https://github.com/Ryankolsen/SQL_DB_VS_",
      secondLinkButtonText: "Code on GitHub",
    },
  },
  {
    key: 4,
    image: data,
    projectTitle: "Python Jupyter Notebook DataFrame",
    projectDescriptions:
      "Evaluation of Stack Overflow Survey with 65,000 respondents.",
    links: {
      firstLink:
        "https://github.com/Ryankolsen/Jupyter_Notebook_Stack_Survey_2020",
      firstLinkButtonText: "Code on GitHub",

      secondLink: "",
      secondLinkButtonText: "",
    },
  },
  {
    key: 5,
    image: unity,
    projectTitle: "2D Unity Game ",
    projectDescriptions: `2D dungeon game created on Unity using C# Scripts on Visual
    Studio. 
    To play: Download the link, extract and run the
    DungeonFighter.exe file. This file must be in the same folders
    as everything else you unzipped`,
    links: {
      firstLink:
        "https://github.com/Ryankolsen/UnityDungeonFighter/blob/main/DungeonFighter_Data.zip",
      firstLinkButtonText: "Download Game",
      secondLink: "https://github.com/Ryankolsen/UnityDungeonFighter",
      secondLinkButtonText: "Code on GitHub",
    },
  },
];
