import "./style.css";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";

const body = document.body;

body.prepend(Header());

const content = document.getElementById("content");

const homeLink = document.getElementById("home");
homeLink.classList.add("page-active");
content.appendChild(Home());

body.append(Footer())