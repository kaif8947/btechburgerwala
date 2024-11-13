import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Btech Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @btechburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com/skaif8947">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/__kaifsiddiqui__">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/kaif8947">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
