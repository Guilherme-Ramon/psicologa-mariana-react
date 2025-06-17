import React, { useState, useEffect, useRef } from 'react';
import psicologaImage from '../psicologa.jpg';

const Hero = () => {
  const introText = "Olá! Eu sou a Dra. Mariana Silva, psicóloga dedicada ao seu bem-estar.";
  const fullText = "Cuidar da mente é o primeiro passo para uma vida equilibrada.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const animationRef = useRef(null);
  const isDesktop = useRef(false);

  const checkScreenSize = () => {
    isDesktop.current = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop.current) {
      setDisplayedText(fullText);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    } else {
      if (displayedText !== "" && displayedText !== fullText) {
          setDisplayedText("");
          setCharIndex(0);
          setIsTyping(true);
      } else if (displayedText === fullText && !isTyping) {
          setDisplayedText("");
          setCharIndex(0);
          setIsTyping(true);
      }
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDesktop.current) {
      return;
    }

    if (isTyping) {
      if (charIndex < fullText.length) {
        animationRef.current = setTimeout(() => {
          setDisplayedText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        animationRef.current = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        animationRef.current = setTimeout(() => {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        animationRef.current = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      }
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [charIndex, isTyping, fullText, isDesktop.current]);

  return (
    <section className="hero" id="inicio">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img src={psicologaImage} alt="Foto da Dra. Mariana Silva" className="img-fluid hero-img-custom" />
          </div>
          <div className="col-md-7 text-center text-md-start">
            <p className="hero-intro-text mb-2">{introText}</p>
            <h2 className="hero-animated-text">
              {displayedText}{' '}
              {isDesktop.current && isTyping && charIndex < fullText.length ? (
                <span className="blinking-cursor">|</span>
              ) : (
                ''
              )}
            </h2>
            <a href="#contato" className="btn btn-primary mt-3">Agende sua consulta</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
