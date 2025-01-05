"use client";
import React, { useEffect, useRef } from "react";
import "./contact.css";

import { gsap } from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";

const Page = () => {
  const container = useRef();
  const headerRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      gsap.delayedCall(1.1, () => {
        sectionsRef.current.forEach((section) => {
          gsap.to(section.querySelectorAll("p"), {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root>
      <div className="contact-page" ref={container}>
        <div className="container">
          <div className="col">
            <div className="where" ref={(el) => (sectionsRef.current[0] = el)}>
              <div className="title">
                <p>Where</p>
              </div>
              <div className="item">
                <p>City One, Sha Tin</p>
              </div>
              <div className="item">
                <p>Hong Kong</p>
              </div>
            </div>
            <div className="vat" ref={(el) => (sectionsRef.current[1] = el)}>
              <div className="title">
                <p>Made In</p>
              </div>
              <div className="item">
                <p>Nanning, China</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="contact-header">
              <h1 ref={headerRef}>Contact</h1>
            </div>
            <div
              className="socials"
              ref={(el) => (sectionsRef.current[2] = el)}
            >
              <div className="title">
                <p>Socials</p>
              </div>
              <div className="item">
                <p>
                  <a href="https://www.xiaohongshu.com/user/profile/5fcec3a10000000001005c79?channelType=web_engagement_notification_page&channelTabId=mentions&xsec_token=ABQe22kriinJCIABtoML1pXmDf2jWVaOeNh6v7jYWF4pM%3D&xsec_source=pc_notice">Xiaohongshu</a>
                </p>
              </div>
              <div className="item">
                <p>
                  <a href="https://www.linkedin.com/in/daiyuxin1/">LinkedIn</a>
                </p>
              </div>
            </div>
            <div className="mail" ref={(el) => (sectionsRef.current[3] = el)}>
              <div className="title">
                <p>Mail</p>
              </div>
              <div className="item">
                <p>
                  <a href="#">yuxindai26@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Page;
