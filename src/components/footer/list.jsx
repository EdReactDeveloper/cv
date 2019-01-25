import React from "react";
const listItems = [
  { title: "about us", link: "" },
  { title: "outf feed us", link: "" },
  { title: "join us", link: "" },
  { title: "contact us", link: "" },
  { title: "terms and conditions", link: "" },
  { title: "live support", link: "" },
  { title: "support", link: "" },
  { title: "out privacy", link: "" }
];
const list = () => {
  return (
    <ul className="footer__list">
      {listItems.map((item, i) => (
        <li className="footer__item" key={i}>
          <a href={item.link} className="footer__item-link">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default list;
