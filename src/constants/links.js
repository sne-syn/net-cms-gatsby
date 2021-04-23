import React from "react";
import { Link } from "gatsby";
const data = [
  {
    id: 1,
    text: "Books",
    url: "/",
  },
  {
    id: 2,
    text: "Music",
    url: "/music/",
  },
  {
    id: 3,
    text: "TV & radio",
    url: "/tv-radio/",
  },
  {
    id: 4,
    text: "Art & design",
    url: "/art-design/",
  },
  {
    id: 5,
    text: "Film",
    url: "/film/",
  },
  {
    id: 6,
    text: "Games",
    url: "/games/"
  },
  {
    id: 7,
    text: "Classical",
    url: "/classical/"
  },
  {
    id: 8,
    text: "Stage",
    url: "/stage/"
  }
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link className="hover:text-red-900 px-2 py-3 text-xl" to={link.url}>{link.text}</Link>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`flex justify-between border-t-2 border-teal-600 py-4 ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};
