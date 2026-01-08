import { motion } from "framer-motion";
import { FaExclamationTriangle, FaBan, FaWhatsapp } from "react-icons/fa";
import { MdLooksOne, MdLooksTwo } from "react-icons/md";

import logo from "../assets/img/logo-sbc.png";

function onClick() {
  window.location.href = "https://wa.me/+237682903535?text=Bonjour, j'ai trouvé une page fake sur votre site. Pouvez-vous m'aider?";
}

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

function Fake() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative">
      {/* Header */}
      <motion.header
        className="bg-white"
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
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight z-20"
              variants={fadeInUp}
            >
              <span className="text-red-600 flex items-center justify-center gap-2">
                <FaExclamationTriangle className="w-12 h-12" /> ATTENTION <FaExclamationTriangle className="w-12 h-12" />
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              variants={fadeInUp}
            >
              Cette page est{" "}
              <span className="text-red-600">FAKE</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Vous avez été redirigé vers une page factice. Cette page n'existe pas dans notre système.
              Si vous pensez qu'il s'agit d'une erreur, veuillez contacter notre équipe d'administration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Warning Section */}
      <motion.section
        className="py-16 bg-red-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-2xl p-8 mb-8"
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-6xl mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <FaBan className="w-24 h-24 mx-auto text-red-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Page Non Trouvée
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Cette URL ne correspond à aucune page valide de notre site.
              Il est possible que le lien soit incorrect ou que la page ait été supprimée.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Conseil :</strong> Vérifiez l'URL ou utilisez le bouton ci-dessous pour contacter notre équipe.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Besoin d'aide ?
          </motion.h2>

          <motion.div
            className="bg-gradient-to-r from-[#f49101] to-[#e78c03] rounded-2xl p-8 text-white mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Contactez notre équipe d'administration
            </h3>
            <p className="text-lg mb-6">
              Notre équipe est disponible pour vous aider et résoudre ce problème rapidement.
            </p>

            <motion.button
              onClick={onClick}
              className="bg-white text-[#f49101] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-2xl" />
              Contacter l'Administrateur sur WhatsApp
            </motion.button>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Que faire maintenant ?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3">
                <MdLooksOne className="text-2xl text-blue-600" />
                <div>
                  <h5 className="font-semibold text-gray-900">Vérifiez l'URL</h5>
                  <p className="text-gray-600 text-sm">Assurez-vous que l'adresse est correcte</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdLooksTwo className="text-2xl text-blue-600" />
                <div>
                  <h5 className="font-semibold text-gray-900">Contactez-nous</h5>
                  <p className="text-gray-600 text-sm">Utilisez le bouton WhatsApp ci-dessus</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </motion.section>

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
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sniper Business Center. Tous droits réservés.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default Fake;