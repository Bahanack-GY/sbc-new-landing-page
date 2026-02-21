import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/img/logo-sbc.png";

// Import Videos
import videoProfil from "../assets/video/COMMENT MODIFIER LES INFORMATIONS DE SON PROFIL SBC_13.42.12.mp4";
import videoSettings from "../assets/video/COMMENT MODIFIER L'ADRESSE MAIL, LE MOT DE PASSE ET L'ABONNEMENT DE SON COMPTE SBC_13.44.27.mp4";
import videoFilleuls from "../assets/video/COMMENT CONSULTER SES FILLEULS OU BIEN SON PARRAIN, COMMENT ACCEDER À LA CHAÎNE WHATSAPP DE LA SBC ET COMMENT SE DÉCONNECTER DE SON COMPTE SBC_13.40.0.mp4";
import videoAccueil from "../assets/video/PRÉSENTATION DE L'ONGLET ACCUEIL_13.37.51.mp4";
import videoFormation from "../assets/video/PRÉSENTATION DE L'ONGLET FORMATION_13.45.17.mp4";
import videoMarketplace from "../assets/video/PRÉSENTATION DE L'ONGLET MARKETPLACE_13.43.25.mp4";
import videoPortefeuille from "../assets/video/PRESENTATION DU PORTEFEUILLE SBC_13.41.7.mp4";
import videoActivation from "../assets/video/PRÉSENTATION DU SOLDE D'ACTIVATION_13.38.38.mp4";
import videoContactsAndroid from "../assets/video/Comment telecharger les contacts sur android_13.46.9.mp4";
import videoContactsIphone from "../assets/video/Comment telecharger les contacts sur iphone_13.45.45.mp4";
import videoPagePaiement from "../assets/video/COMMENT RETROUVER LA PAGE DE PAIEMENT _13.46.30.mp4";
import videoOtp from "../assets/video/PROBLÈME DE RECEPTION DE CODE OTP_13.47.5.mp4";
import videoProblemePaiement from "../assets/video/proble de paiement_13.46.44.mp4";
import videoBoutonPaiement from "../assets/video/probleme bouton de paiement ne fonctionne plus_13.46.36.mp4";
import videoEmailUtilise from "../assets/video/probleme email deja utiliser_13.46.58.mp4";
import videoPageBlanche from "../assets/video/probleme page blanche_13.46.51.mp4";

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

interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
}

interface VideoCategory {
  title: string;
  videos: VideoItem[];
}

const categories: VideoCategory[] = [
  {
    title: "Navigation & Découverte",
    videos: [
      {
        id: "accueil",
        title: "L'Onglet Accueil",
        description: "Découvrez les fonctionnalités principales de votre tableau de bord et comment naviguer efficacement sur l'application.",
        src: videoAccueil
      },
      {
        id: "formation",
        title: "L'Espace Formation",
        description: "Accédez à nos formations exclusives pour développer vos compétences. Apprenez à utiliser l'onglet formation.",
        src: videoFormation
      },
      {
        id: "marketplace",
        title: "La Marketplace",
        description: "Comment explorer la boutique, trouver des produits ou proposer vos propres services sur la marketplace.",
        src: videoMarketplace
      },
      {
        id: "portefeuille",
        title: "Votre Portefeuille",
        description: "Comprendre votre solde, gérer vos gains et suivre vos transactions dans votre portefeuille électronique.",
        src: videoPortefeuille
      },
      {
        id: "activaton",
        title: "Solde d'Activation",
        description: "Tout savoir sur le solde d'activation : à quoi il sert et comment l'utiliser pour activer des comptes.",
        src: videoActivation
      }
    ]
  },
  {
    title: "Gestion du Compte",
    videos: [
      {
        id: "profil",
        title: "Modifier son Profil",
        description: "Mettez à jour vos informations personnelles, votre photo de profil et vos coordonnées.",
        src: videoProfil
      },
      {
        id: "securite",
        title: "Sécurité & Paramètres",
        description: "Changez votre mot de passe, votre adresse email ou gérez votre abonnement en toute simplicité.",
        src: videoSettings
      },
      {
        id: "parrainage",
        title: "Filleuls & Communauté",
        description: "Consultez la liste de vos filleuls, contactez votre parrain et rejoignez le canal WhatsApp officiel. Apprenez aussi à vous déconnecter.",
        src: videoFilleuls
      }
    ]
  },
  {
    title: "Gestion des Contacts",
    videos: [
      {
        id: "contacts-android",
        title: "Télécharger les Contacts (Android)",
        description: "Tutoriel étape par étape pour télécharger et synchroniser les contacts SBC sur votre téléphone Android.",
        src: videoContactsAndroid
      },
      {
        id: "contacts-iphone",
        title: "Télécharger les Contacts (iPhone)",
        description: "La procédure complète pour récupérer et installer les contacts de la communauté sur votre iPhone.",
        src: videoContactsIphone
      }
    ]
  },
  {
    title: "Aide & Dépannage",
    videos: [
      {
        id: "otp",
        title: "Problème Code OTP",
        description: "Vous ne recevez pas votre code de validation ? Voici les solutions pour résoudre ce problème rapidement.",
        src: videoOtp
      },
      {
        id: "paiement-page",
        title: "Trouver la Page de Paiement",
        description: "Guide pour accéder facilement à la page de paiement si vous ne la trouvez pas.",
        src: videoPagePaiement
      },
      {
        id: "paiement-probleme",
        title: "Echec de Paiement",
        description: "Que faire si votre paiement a échoué ou si vous rencontrez des difficultés lors de la transaction.",
        src: videoProblemePaiement
      },
      {
        id: "paiement-bouton",
        title: "Bouton de Paiement Inactif",
        description: "Solutions si le bouton de paiement semble bloqué ou ne réagit pas lorsque vous cliquez dessus.",
        src: videoBoutonPaiement
      },
      {
        id: "email-existe",
        title: "Email Déjà Utilisé",
        description: "Comment réagir si l'application vous indique que votre adresse email est déjà associée à un compte.",
        src: videoEmailUtilise
      },
      {
        id: "page-blanche",
        title: "Page Blanche / Erreur d'Affichage",
        description: "Si l'application affiche une page blanche ou charge indéfiniment, suivez ces étapes pour rétablir l'accès.",
        src: videoPageBlanche
      }
    ]
  }
];

function Help() {
  const location = useLocation();
  const { affiliationCode, phoneNumber } = location.state || {};
  const homeLink = (affiliationCode && phoneNumber) ? `/${affiliationCode}/${phoneNumber}` : "/";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to={homeLink}>
              <motion.img 
                src={logo} 
                alt="SBC Logo" 
                className="h-10 md:h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <Link to={homeLink} className="text-gray-600 hover:text-[#1862f0] font-medium transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1862f0] to-[#0d47a1] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Centre d'Aide <span className="text-[#92b127]">SBC</span>
          </motion.h1>
          <motion.p 
            className="font-primary text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tout ce que vous devez savoir pour maîtriser votre application. 
            Des tutoriels vidéos simples pour vous accompagner étape par étape.
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
        
        {categories.map((category, catIndex) => (
          <motion.section 
            key={catIndex}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4"
              variants={fadeInUp}
            >
              <div className="h-10 w-2 bg-[#f49101] rounded-full"></div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800">
                {category.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.videos.map((video, vidIndex) => (
                <motion.div
                  key={vidIndex}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                  variants={scaleIn}
                >
                  <div className="relative aspect-video bg-gray-100 group">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      poster={logo} 
                      playsInline
                    >
                      <source src={video.src} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading text-xl font-bold text-[#1862f0] mb-3 leading-tight">
                      {video.title}
                    </h3>
                    <p className="font-primary text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

      </div>

      {/* Footer CTA */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Vous ne trouvez pas la réponse à votre question ?
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Notre équipe et la communauté sont là pour vous aider. Rejoignez le canal officiel ou contactez le support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
             <a 
              href="https://t.me/sniperbusinesscenterafrica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#28a7e9] text-white font-bold py-4 px-8 rounded-xl shadow-md hover:bg-[#1c8ec9] transition-colors"
            >
              Rejoindre le canal Telegram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src={logo} 
            alt="SBC Logo" 
            className="h-10 w-auto mx-auto mb-4 opacity-90"
          />
          <p className="font-primary text-gray-400 text-sm">
            © {new Date().getFullYear()} Sniper Business Center. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Help;
