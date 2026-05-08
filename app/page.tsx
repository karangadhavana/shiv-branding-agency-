"use client";

import { useEffect } from "react";
import {
  FaPaintBrush,
  FaPrint,
  FaGlobe,
  FaBullhorn,
  FaCube,
  FaPenNib,
  FaVideo,
  FaLaptopCode,
  FaStore,
  FaWhatsapp
} from "react-icons/fa";

export default function Home() {

  useEffect(() => {

    const cursor = document.querySelector(".custom-cursor") as HTMLElement | null;
    const ring = document.querySelector(".cursor-ring") as HTMLElement | null;

    const moveCursor = (e: MouseEvent) => {
      if (!cursor || !ring) return;

      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      ring.animate(
        {
          left: x + "px",
          top: y + "px",
        },
        {
          duration: 150,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <main>

      {/* CURSOR */}
      <div className="custom-cursor"></div>
      <div className="cursor-ring"></div>

      {/* NAV */}
      <nav className="nav">
        <h1 className="logo">Shiv Branding</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <h1>
          We Build <span>Powerful Brands</span>
        </h1>

        <p className="hero-sub">
          We don’t just design — we craft digital experiences that make brands unforgettable.
        </p>

        <p className="hero-mini">
          Strategy • Design • Innovation • Growth
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">

        <div className="about-container">

          <div className="about-text">
            <h2>About Us</h2>

            <h1 className="about-big">
              We Create <span>Powerful Brand Experiences</span>
            </h1>

            <p>
              Shiv Branding is a creative agency focused on building strong,
              modern and impactful brand identities.
            </p>

            <div className="about-icons">
              <div><FaCube /> Creative</div>
              <div><FaPaintBrush /> Design</div>
              <div><FaLaptopCode /> Development</div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900"
              alt="About"
            />
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Premium Services</h2>

        <div className="services">
          {[
            { icon: <FaPaintBrush />, title: "Brand Development", desc: "Identity + Strategy" },
            { icon: <FaPrint />, title: "Print Identity", desc: "Packaging & Print" },
            { icon: <FaGlobe />, title: "Digital Identity", desc: "Web + Social Media" },
            { icon: <FaBullhorn />, title: "Communication Strategy", desc: "Marketing Strategy" },
            { icon: <FaCube />, title: "3D Visualization", desc: "Product Rendering" },
            { icon: <FaPenNib />, title: "Content Writing", desc: "SEO Writing" },
            { icon: <FaVideo />, title: "Production", desc: "Video Editing" },
            { icon: <FaLaptopCode />, title: "Web Development", desc: "Modern Websites" },
            { icon: <FaStore />, title: "Stall Design", desc: "Exhibition Setup" }
          ].map((s, i) => (
            <div key={i} className="service-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section">
        <h2>Our Portfolio</h2>

        <div className="portfolio">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
                alt="Portfolio"
              />

              <div className="portfolio-overlay">
                <h3>Project {i}</h3>
                <p className="cat">Branding</p>
                <p className="desc">Creative Work</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section">
        <h2>Our Team</h2>

        <div className="team">

          <div className="member">
            <div className="img-box">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/16/18/16/ai-generated-8700575_1280.jpg"
                alt="Karan"
              />
            </div>
            <h3>Karan Gadhavana</h3>
            <p className="role">Founder</p>
          </div>

          <div className="member">
            <div className="img-box">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/16/18/16/ai-generated-8700575_1280.jpg"
                alt="Prashant"
              />
            </div>
            <h3>Prashant Lathiya</h3>
            <p className="role">Founder</p>
          </div>

          <div className="member">
            <div className="img-box">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/16/18/16/ai-generated-8700575_1280.jpg"
                alt="Pratik"
              />
            </div>
            <h3>Pratik Makwana</h3>
            <p className="role">Founder</p>
          </div>

          <div className="member">
            <div className="img-box">
              <img
                src="https://cdn.pixabay.com/photo/2024/04/16/18/16/ai-generated-8700575_1280.jpg"
                alt="Vivek"
              />
            </div>
            <h3>Vivek Gohel</h3>
            <p className="role">Founder</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: info@shivbranding.com</p>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918780904860?text=Hello%20Shiv%20Branding"
        target="_blank"
        rel="noopener noreferrer"
        className="chat-icon"
      >
        <FaWhatsapp />
      </a>

    </main>
  );
}