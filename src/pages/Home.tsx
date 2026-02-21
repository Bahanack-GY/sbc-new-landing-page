import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import RegistrationPopup from "../components/BottomPopUp";

import logo from "../assets/img/logo-sbc.png";
import phone from "../assets/img/rzezer2.png";
import promoteurs from "../assets/img/promoteurs.png"
import formation from "../assets/img/formations.jpg"
import marketing from "../assets/img/marketting.png"
import trading from "../assets/img/trading.png"
import chine from "../assets/img/chine.png"
import artoratoire from "../assets/img/artoratoire.png"
import bots from "../assets/img/bots.png"
import screenone from "../assets/img/WhatsApp Image 2025-06-22 à 00.30.03_86af6147.png"
import screentwo from "../assets/img/WhatsApp Image 2025-06-22 à 00.31.22_226b0cfb.png"
import screenthree from "../assets/img/WhatsApp Image 2025-06-22 à 00.48.38_d0377275.png"
import screenfour from "../assets/img/WhatsApp Image 2025-06-22 à 00.49.57_ccb4c172.png"
import visibilite from "../assets/img/visibilite.jpg"
import marketplace from "../assets/img/marketplace.jpg"
import reseau from "../assets/img/reseau.jpg"
import argent from "../assets/img/argent.jpg"
import money from "../assets/img/screen1.jpg"
import moneytwo from "../assets/img/screen2.jpg"
import moneythree from "../assets/img/screen3.jpg"
import moneyfour from "../assets/img/screen4.jpg"
import secured from "../assets/img/secured.jpg"

import whatsapp from "../assets/img/whatsapp.png"

import futuriste from "../assets/img/logo-futuriste.png"
import extremevetement from "../assets/img/logo-ev.png"
import wilevent from "../assets/img/logo-we.jpg"
import offreExceptionnelle from "../assets/img/offre-exceptionelle.jpeg"

import presentation from "../assets/video/IMG_8133.mp4"


// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

function Home() {
  const navigate = useNavigate();
  const currentUrl: string = window.location.href; // Full current URL
  const urlSegments: string[] = currentUrl.split("/"); // Split the URL into parts

  // Get the second-to-last and last segments of the URL using indexing
  const affiliationCode: string | undefined =
    urlSegments[urlSegments.length - 2]; // Second-to-last segment
  const phoneNumber: string | undefined =
    urlSegments[urlSegments.length - 1]; // Last segment

  const [count, setCount] = useState(0);
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  useEffect(() => {
    const validateCode = async () => {
      try {
        const response = await axios.get(`https://canaldeventebackend.sniperbuisnesscenter.com/users/get-link/${affiliationCode}/${phoneNumber}`);
        console.log(response.data);
        if (!response.data) {
          console.log("No response from server");
          navigate('/fake');
        }
      } catch (error) {
        console.log(error);
        navigate('/fake');
      }
    };

    if (affiliationCode && phoneNumber) {
      validateCode();
    } else {
      navigate('/fake');
    }
  }, [affiliationCode, phoneNumber, navigate]);

  // Handle click and redirect to the desired link
  function handleClick() {
    const targetUrl = `https://sniperbuisnesscenter.com/signup?affiliationCode=${affiliationCode}`;
    window.location.href = targetUrl; // Redirect to the new URL
  }

  function handleWhatsapp() {
    const targetUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = targetUrl; // Redirect to the new URL
  }

  const startCounting = () => {
    if (hasStartedCounting) return; // Prevent multiple starts

    setHasStartedCounting(true);

    const targetCount = 40000;
    const duration = 3000; // 3 seconds
    const increment = targetCount / (duration / 16); // 60fps

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(timer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative">
      {/* Header */}
      <motion.header
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.img
              src={logo}
              alt="SBC Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-16 lg:py-24 overflow-hidden">
        {/* Animated Background Patterns - Hero Only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#1862f0] opacity-10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#92b127] opacity-10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#f49101] opacity-10 rounded-full animate-ping"></div>
          <div className="absolute top-60 left-1/4 w-12 h-12 bg-[#1862f0] opacity-10 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-60 right-1/3 w-18 h-18 bg-[#92b127] opacity-10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-80 left-1/3 w-14 h-14 bg-[#f49101] opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-80 left-1/2 w-16 h-16 bg-[#1862f0] opacity-10 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight z-20"
              variants={fadeInUp}
            >
              Avec la{" "}
              <span className="text-[#1862f0]">SBC</span>{" "}
              ton téléphone deviens une{" "}
              <span className="text-[#92b127]">machine à cash</span>
            </motion.h1>
            <motion.p
              className="font-primary text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              <span className="text-[#f49101] font-semibold">Rejoins</span> la Révolution
              Entrepreneuriale avec la{" "}
              <span className="text-[#1862f0] font-semibold">Sniper Business Center</span>.
              Tu es à un clic de faire partie de la meilleure communauté d'Afrique où les opportunités d'affaires abondent et où ton succès est notre priorité!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.img
          src={phone}
          alt="Phone"
          className="w-1/2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <section className="bg-gradient-to-b from-blue-700 to-white pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-2xl overflow-hidden mb-8"
            variants={scaleIn}
            initial="initial"
            animate="animate"
          >
            <video className="w-full" controls>
              <source src={presentation} type="video/mp4" />
              Votre navigateur ne prends pas en charge cette vidéo
            </video>
          </motion.div>
          <motion.button onClick={handleClick}
            className="font-accent bg-[#f49101] hover:bg-[#e08501] text-white font-bold py-4 px-4 md:px-8 rounded-xl text-sm md:text-lg shadow"
            animate={{
              x: [-2, 2, -2, 2, -2, 2, -2, 2, 0],
              y: [-1, 1, -1, 1, -1, 1, -1, 1, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            Je m'inscris maintenant
          </motion.button>
          <motion.div
            className="mt-8 flex justify-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.img
              src={promoteurs}
              alt="Équipe SBC"
              className="max-w-md mx-auto rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onViewportEnter={startCounting}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="text-4xl md:text-5xl font-bold text-[#1862f0] mb-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: hasStartedCounting ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              + {count.toLocaleString()} Membres
            </motion.span>
          </motion.div>
        </div>
      </motion.section>

      {/* Countries Section */}
      <motion.section
        className="py-3 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading text-3xl font-bold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Disponible dans 29 pays d'Afrique
          </motion.h2>
          <motion.p
            className="font-primary text-lg text-center text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            La SBC est présente dans tous les pays francophones d'Afrique
          </motion.p>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 animate-scroll"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[
                { name: "Algérie", code: "DZ", flag: "🇩🇿" },
                { name: "Bénin", code: "BJ", flag: "🇧🇯" },
                { name: "Burkina Faso", code: "BF", flag: "🇧🇫" },
                { name: "Burundi", code: "BI", flag: "🇧🇮" },
                { name: "Cameroun", code: "CM", flag: "🇨🇲" },
                { name: "Comores", code: "KM", flag: "🇰🇲" },
                { name: "Congo", code: "CG", flag: "🇨🇬" },
                { name: "Côte d'Ivoire", code: "CI", flag: "🇨🇮" },
                { name: "Djibouti", code: "DJ", flag: "🇩🇯" },
                { name: "Gabon", code: "GA", flag: "🇬🇦" },
                { name: "Guinée", code: "GN", flag: "🇬🇳" },
                { name: "Guinée-Bissau", code: "GW", flag: "🇬🇼" },
                { name: "Madagascar", code: "MG", flag: "🇲🇬" },
                { name: "Mali", code: "ML", flag: "🇲🇱" },
                { name: "Maurice", code: "MU", flag: "🇲🇺" },
                { name: "Mauritanie", code: "MR", flag: "🇲🇷" },
                { name: "Maroc", code: "MA", flag: "🇲🇦" },
                { name: "Niger", code: "NE", flag: "🇳🇪" },
                { name: "République Centrafricaine", code: "CF", flag: "🇨🇫" },
                { name: "République Démocratique du Congo", code: "CD", flag: "🇨🇩" },
                { name: "Rwanda", code: "RW", flag: "🇷🇼" },
                { name: "Sénégal", code: "SN", flag: "🇸🇳" },
                { name: "Seychelles", code: "SC", flag: "🇸🇨" },
                { name: "Tchad", code: "TD", flag: "🇹🇩" },
                { name: "Togo", code: "TG", flag: "🇹🇬" },
                { name: "Tunisie", code: "TN", flag: "🇹🇳" },
                { name: "Vanuatu", code: "VU", flag: "🇻🇺" },
                { name: "Congo-Brazzaville", code: "CG", flag: "🇨🇬" },
                { name: "Guinée équatoriale", code: "GQ", flag: "🇬🇶" }
              ].map((country, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg px-6 py-4 shadow flex-shrink-0"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-accent text-[#1862f0] font-semibold text-lg whitespace-nowrap">
                      {country.name}
                    </span>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { name: "Algérie", code: "DZ", flag: "🇩🇿" },
                { name: "Bénin", code: "BJ", flag: "🇧🇯" },
                { name: "Burkina Faso", code: "BF", flag: "🇧🇫" },
                { name: "Burundi", code: "BI", flag: "🇧🇮" },
                { name: "Cameroun", code: "CM", flag: "🇨🇲" },
                { name: "Comores", code: "KM", flag: "🇰🇲" },
                { name: "Congo", code: "CG", flag: "🇨🇬" },
                { name: "Côte d'Ivoire", code: "CI", flag: "🇨🇮" },
                { name: "Djibouti", code: "DJ", flag: "🇩🇯" },
                { name: "Gabon", code: "GA", flag: "🇬🇦" },
                { name: "Guinée", code: "GN", flag: "🇬🇳" },
                { name: "Guinée-Bissau", code: "GW", flag: "🇬🇼" },
                { name: "Madagascar", code: "MG", flag: "🇲🇬" },
                { name: "Mali", code: "ML", flag: "🇲🇱" },
                { name: "Maurice", code: "MU", flag: "🇲🇺" },
                { name: "Mauritanie", code: "MR", flag: "🇲🇷" },
                { name: "Maroc", code: "MA", flag: "🇲🇦" },
                { name: "Niger", code: "NE", flag: "🇳🇪" },
                { name: "République Centrafricaine", code: "CF", flag: "🇨🇫" },
                { name: "République Démocratique du Congo", code: "CD", flag: "🇨🇩" },
                { name: "Rwanda", code: "RW", flag: "🇷🇼" },
                { name: "Sénégal", code: "SN", flag: "🇸🇳" },
                { name: "Seychelles", code: "SC", flag: "🇸🇨" },
                { name: "Tchad", code: "TD", flag: "🇹🇩" },
                { name: "Togo", code: "TG", flag: "🇹🇬" },
                { name: "Tunisie", code: "TN", flag: "🇹🇳" },
                { name: "Vanuatu", code: "VU", flag: "🇻🇺" },
                { name: "Congo-Brazzaville", code: "CG", flag: "🇨🇬" },
                { name: "Guinée équatoriale", code: "GQ", flag: "🇬🇶" }
              ].map((country, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="bg-white rounded-lg px-6 py-4 shadow flex-shrink-0"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-accent text-[#1862f0] font-semibold text-lg whitespace-nowrap">
                      {country.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Offre Exceptionnelle Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#f49101] mb-8">
              Offre exceptionnelle
            </h2>
            <motion.img
              src={offreExceptionnelle}
              alt="Offre Exceptionnelle SBC"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              onClick={handleClick}
              className="bg-[#f49101] hover:bg-[#e08501] text-white font-bold py-4 px-4 md:px-8 rounded-xl text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              animate={{
                x: [-2, 2, -2, 2, -2, 2, -2, 2, 0],
                y: [-1, 1, -1, 1, -1, 1, -1, 1, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              Je m'inscris maintenant
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Voici ce que tu vas gagner en nous rejoignant dès maintenant:
          </motion.h2>

          {/* Formations */}
          <motion.div
            className="bg-white rounded-2xl shadow p-8 mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.img
                src={formation}
                alt="Formations"
                className="w-24 h-24 rounded-full object-cover"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex-1 flex flex-col items-center">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  <span className="font-accent bg-[#92b127] text-white px-3 py-1 rounded-lg text-sm text-center">Formations Exclusives et Gratuites</span>
                </h3>
                <p className="font-primary text-gray-600 text-lg">
                  Bénéficie des formations complètes accompagnées d'un suivi personnalisé chaque semaine sur Google Meet.
                </p>
              </div>
            </div>

            {/* Formation Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { img: marketing, title: "MARKETING 360" },
                { img: trading, title: "TRADING" },
                { img: chine, title: "ACHAT EN CHINE" },
                { img: artoratoire, title: "ART ORATOIRE" },
                { img: bots, title: "CRÉATION DES BOTS" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl text-center"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-32 h-32 mx-auto mb-4 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <p className="font-accent text-[#1862f0] font-semibold">
                    FORMATION EN<br />
                    <span className="font-bold text-lg">{item.title}</span>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Other Benefits */}
          {[
            { img: visibilite, title: "Visibilité maximale", desc: "Partage ton flyer ou affiche publicitaire dans nos groupes chaque samedi atteignant ainsi des milliers de potentiels clients !" },
            { img: marketplace, title: "Marketplace à ta disposition", desc: "Mets en avant tes produits et services sur notre plateforme dédiée !" },
            { img: reseau, title: "Accès à un Réseau Énorme", desc: "Profite de plus de 30,000 contacts WhatsApp ciblés qui verront tes statuts et à qui tu pourras proposer tes produits et services." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow p-8 mb-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-full object-cover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    <span className="font-accent text-justify bg-[#92b127] text-white px-3 py-1 rounded-lg text-sm">{item.title}</span>
                  </h3>
                  <p className="font-primary text-gray-600 text-lg">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Screenshots */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[screenone, screentwo, screenthree, screenfour].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="w-full rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>

          {/* Money Section */}
          <motion.div
            className="bg-white rounded-2xl shadow p-8 mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.img
                src={argent}
                alt="Argent"
                className="w-24 h-24 rounded-full object-cover"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex-1 flex flex-col items-center">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  <span className="font-accent bg-[#92b127] text-white px-3 py-1 rounded-lg text-sm">Gagne de l'argent Facilement</span>
                </h3>
                <p className="font-primary text-gray-600 text-lg">
                  Avec notre système de parrainage rémunéré: c'est l'affiliation qui donne l'argent !
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-[#f49101] to-[#e78c03] rounded-2xl p-8 text-center text-white mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-accent text-lg md:text-xl lg:text-2xl font-bold mb-4 leading-tight">
              TU INVITES QUELQU'UN (PEU IMPORTE SON PAYS) TU RECOIS{" "}
              <span className="font-heading text-[#1862f0] font-bold text-xl md:text-2xl lg:text-3xl block sm:inline">1000 FCFA</span>{" "}
              DIRECT DANS TON COMPTE
            </h3>
          </motion.div>

          {/* Levels - Beautiful Redesign */}
          <motion.div
            className="bg-gradient-to-br from-white via-blue-50 to-green-50 rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#1862f0] to-[#92b127] bg-clip-text text-transparent">
              Système de Parrainage
            </h3>
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { level: "Niveau 1", desc: "tu invites Rufus", amount: "1000 FCFA", color: "from-orange-400 to-orange-600", bgColor: "bg-orange-50", textColor: "text-orange-700" },
                { level: "Niveau 2", desc: "Rufus invite Jamelle", amount: "500 FCFA", color: "from-blue-400 to-blue-600", bgColor: "bg-blue-50", textColor: "text-blue-700" },
                { level: "Niveau 3", desc: "Jamelle invite Christian", amount: "250 FCFA", color: "from-green-400 to-green-600", bgColor: "bg-green-50", textColor: "text-green-700" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.bgColor} border-l-4 border-gradient-to-b ${item.color} rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300`}
                  variants={slideInLeft}
                  whileHover={{
                    scale: 1.02,
                    x: 5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <span className={`font-accent inline-block px-4 py-2 rounded-full text-white bg-gradient-to-r ${item.color} font-bold text-sm md:text-base shadow-md`}>
                        {item.level}
                      </span>
                      <p className={`font-primary mt-3 ${item.textColor} text-sm md:text-base font-medium capitalize`}>
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`font-accent inline-block px-6 py-3 rounded-2xl bg-gradient-to-r ${item.color} text-white font-bold text-lg md:text-xl shadow-lg`}>
                        {item.amount}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-accent text-center font-bold text-[#1862f0] text-base md:text-lg leading-relaxed">
                ✨ Même si tu ne connais pas Jamelle, ni Christian tu es payé quand même ✨
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleClick}
              className="bg-[#f49101] hover:bg-[#e08501] text-white font-bold py-4 px-4 md:px-8 rounded-xl text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              animate={{
                x: [-2, 2, -2, 2, -2, 2, -2, 2, 0],
                y: [-1, 1, -1, 1, -1, 1, -1, 1, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              Je m'inscris maintenant
            </motion.button>
          </motion.div>

          <motion.div
            className=" text-black rounded-2xl p-6 mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-accent text-lg md:text-xl font-bold leading-tight">
              PLEINS DE JEUNES AFRICAINS ONT DÉJÀ GÉNÉRÉS DES MILLIONS DE FCFA GRÂCE À CETTE PLATEFORME EN MOINS DE 30 JOURS
            </p>
          </motion.div>

          {/* Money Screenshots */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[money, moneythree, moneytwo, moneyfour].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Money ${index + 1}`}
                className="w-full rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleClick}
              className="bg-[#f49101] hover:bg-[#e08501] text-white font-bold py-4 px-4 md:px-8 rounded-xl text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              animate={{
                x: [-2, 2, -2, 2, -2, 2, -2, 2, 0],
                y: [-1, 1, -1, 1, -1, 1, -1, 1, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              Je m'inscris maintenant
            </motion.button>
          </motion.div>

          <motion.div
            className="text-center space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-primary text-gray-600">
              La Sniper Business Center est une entreprise légale déjà dans 2 pays en Afrique : Cameroun et Bénin
            </p>
            <p className="font-heading text-2xl font-bold text-[#f49101]">Tu veux commencer?</p>
          </motion.div>

          <motion.div
            className="bg-blue-600 text-white rounded-2xl p-6 mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-accent text-lg md:text-xl font-bold leading-tight">
              Tu as juste besoin de{" "}
              <span className="font-heading text-[#92b127] font-bold text-xl md:text-2xl block sm:inline">2150F ou 5000F</span>{" "}
              pour créer ton compte
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleClick}
              className="bg-[#f49101] hover:bg-[#e08501] text-white font-bold py-4 px-4 md:px-8 rounded-xl text-sm md:text-lg  shadow-lg leading-tight"
              animate={{
                x: [-2, 2, -2, 2, -2, 2, -2, 2, 0],
                y: [-1, 1, -1, 1, -1, 1, -1, 1, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <span className="font-accent block sm:inline">Je prends la décision aujourd'hui</span>
              <span className="font-accent block sm:inline"> de transformer ma vie avec la SBC</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/*social media  */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="font-primary text-lg text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Besoin d'aide ? Visitez notre centre d'aide pour regarder les tutoriels vidéos et comprendre comment utiliser la plateforme.
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-4"
            animate={{
              x: [-2, 2, -2, 2, -2, 2, -2, 2, 0],
              y: [-1, 1, -1, 1, -1, 1, -1, 1, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <Link to="/help" state={{ affiliationCode, phoneNumber }} className="inline-block bg-[#1862f0] hover:bg-[#1553cc] text-white font-bold py-4 px-8 rounded-xl shadow-md transition-colors mb-8 text-xl">
              Accéder au Guide d'utilisation
            </Link>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="font-primary text-lg text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact ton parrain pour t'aider à t'inscrire et pour repondre à tes questions.
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-4"
            animate={{
              x: [-2, 2, -2, 2, -2, 2, -2, 2, 0],
              y: [-1, 1, -1, 1, -1, 1, -1, 1, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <a onClick={handleWhatsapp} target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="whatsapp" className="mb-8 w-40 h-40" />
            </a>
          </motion.div>
        </div>

        
      </section>

      {/* Partners Section */}
      <motion.section
        className="pt-3 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos Partenaires
          </motion.h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 animate-scroll"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[futuriste, extremevetement, wilevent].map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
              {[futuriste, extremevetement, wilevent].map((img, index) => (
                <motion.img
                  key={`duplicate-${index}`}
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      <div className="w-full bg-white">
        <img
          src={secured}
          alt="Mode de paiement"
        />
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.img
            src={logo}
            alt="SBC Logo"
            className="h-12 w-auto mx-auto mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <p className="font-primary text-gray-400">
            © {new Date().getFullYear()} Sniper Business Center. Tous droits réservés.
          </p>
        </div>
      </motion.footer>

      {/* Bottom Popup */}
      <RegistrationPopup />

    </div>
  );
}

export default Home; 