"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LogoImage from "./Logo";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/features", label: "Features" },
  { path: "/contact", label: "Contact" },
  { path: "/dashboard", label: "Get Started" },
];
const MainMenu = () => {
  const container = useRef();
  const tl = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 0.7,
          clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .from(".menu-overlay-bar div", {
          duration: 1,
          y: -100,
          opacity: 0,
          stagger: 0.2,
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          duration: 1,
          y: 0,
          ease: "power4.inOut",
          stagger: 0.1,
          delay: -0.75,
        })
        .from(".menu-info-col a", {
          duration: 0.4,
          opacity: 0,
          ease: "power4.inOut",
          stagger: 0.3,
        })
        .from(".menu-info-col-1 p", {
          duration: 0.4,
          opacity: 0,
          ease: "power4.inOut",
          stagger: 0.3,
        })
        .from(".menu-preview p", {
          duration: 0.4,
          opacity: 0,
          ease: "power4.inOut",
          stagger: 0.3,
        })
        .from(".menu-close-icon p", {
          duration: 1,
          y: 150,
          rotate: 360,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );
  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo pb-5">
          <Link href={"/"}>
            <LogoImage />
          </Link>
        </div>
        <div className="menu-open" onClick={toogleMenu}>
          <p>Menu &#8599;</p>
        </div>
      </div>
      <div className="menu-overlay ">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href={"/"}>
              <LogoImage />
            </Link>
          </div>
          <div className="menu-close" onClick={toogleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon" onClick={toogleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((links, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toogleMenu}>
                  <Link href={links.path} className="menu-link">
                    {links.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">X &#8599;</a>
              <br />
              <a href="#">Instagram &#8599;</a>
              <br />
              <a href="#">LinkedIn &#8599;</a>
              <br />
              <a href="#">Github &#8599;</a>
              <br />
            </div>
            <div className="menu-info-col-1">
              <p>sudeepsjoshi9899@gmail.com</p>
              <p>+91 82965 96727</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>©2024 Sudeep S Joshi. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
