import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/img/logo-sbc.png";

// List of users from different countries
const users = [
  // Cameroon users
  "Nkengue Francis 🇨🇲",
  "Zambo Carine 🇨🇲",
  "Tchoupo Marcel 🇨🇲",
  "Nguimbus Rachel 🇨🇲",
  "Fotue Daniel 🇨🇲",
  "Bella Christian 🇨🇲",
  "Ndjock Vanessa 🇨🇲",
  "Mballa Olivier 🇨🇲",
  "Tchakounte Laura 🇨🇲",
  "Nkoumou Eric 🇨🇲",
  "Dzudie Annette 🇨🇲",
  "Nganou Philippe 🇨🇲",
  "Tchinda Grace 🇨🇲",
  "Ngoe Louis 🇨🇲",
  "Mefire Josiane 🇨🇲",
  "Bikok Joyce 🇨🇲",
  "Ntamack Serge 🇨🇲",
  "Moukouri Fabrice 🇨🇲",
  "Nlend Michelle 🇨🇲",
  "Tchouaga Patrick 🇨🇲",
  "Nguete Sarah 🇨🇲",
  "Mefo Samuel 🇨🇲",
  "Bella Arnaud 🇨🇲",
  "Tchana Doriane 🇨🇲",
  "Nkodo Jules 🇨🇲",

  // Benin users
  "Adjavon Sophie 🇧🇯",
  "Ahouandjinou Marc 🇧🇯",
  "Assogba Claire 🇧🇯",
  "Bocovo Richard 🇧🇯",
  "Dagba Patricia 🇧🇯",
  "Dossou Emmanuel 🇧🇯",
  "Gandaho Sylvie 🇧🇯",
  "Houessou Paul 🇧🇯",
  "Koudogbo Marie 🇧🇯",
  "Lokossou Jean 🇧🇯",
  "Mensah Diane 🇧🇯",
  "Nobime Pascal 🇧🇯",
  "Ogouma Carine 🇧🇯",
  "Quenum David 🇧🇯",
  "Sossa Nadine 🇧🇯",
  "Tchabi Pierre 🇧🇯",
  "Vissoh Alice 🇧🇯",
  "Yacoubou Eric 🇧🇯",
  "Zinsou Rachelle 🇧🇯",
  "Ahoyo Bernard 🇧🇯",
  "Boko Estelle 🇧🇯",
  "Degbo Charles 🇧🇯",
  "Fifatin Honoré 🇧🇯",
  "Gnonlonfin Laura 🇧🇯",
  "Hounsa Michel 🇧🇯",

  // Ivory Coast users
  "Aka Serge 🇨🇮",
  "Bamba Mariam 🇨🇮",
  "Coulibaly Ibrahim 🇨🇮",
  "Diabaté Fatou 🇨🇮",
  "Ettien Georges 🇨🇮",
  "Fofana Aminata 🇨🇮",
  "Gbagbo Laurent 🇨🇮",
  "Koffi Yves 🇨🇮",
  "Konan Michelle 🇨🇮",
  "Kouamé Pascal 🇨🇮",
  "N'Guessan Marie 🇨🇮",
  "Ouattara Alassane 🇨🇮",
  "Sanogo Mamadou 🇨🇮",
  "Touré Aïcha 🇨🇮",
  "Yao Philippe 🇨🇮",
  "Zagbayou Céline 🇨🇮",
  "Bakayoko Sita 🇨🇮",
  "Drogba Olivier 🇨🇮",
  "Kone Lacina 🇨🇮",
  "Soro Guillaume 🇨🇮",
  "Traoré Rokia 🇨🇮",
  "Bedie Henri 🇨🇮",
  "Cissé Mariam 🇨🇮",
  "Diomandé Lassina 🇨🇮",
  "Gervinho Paul 🇨🇮",

  // Togo users
  "Abalo Kossi 🇹🇬",
  "Agbeko Marie 🇹🇬",
  "Amegbo Pierre 🇹🇬",
  "Ayeva Sophie 🇹🇬",
  "Dogbe Emmanuel 🇹🇬",
  "Ekue Delali 🇹🇬",
  "Folly Ama 🇹🇬",
  "Gnassingbe Komi 🇹🇬",
  "Koffi Yawo 🇹🇬",
  "Lawson Akua 🇹🇬",
  "Mensah Kokou 🇹🇬",
  "Olympio Sylvia 🇹🇬",
  "Peketi Essohana 🇹🇬",
  "Sokpe Yawa 🇹🇬",
  "Tagba Komlan 🇹🇬",
  "Tsali Efua 🇹🇬",
  "Walla Kafui 🇹🇬",
  "Yovo Kossi 🇹🇬",
  "Zankli Abra 🇹🇬",
  "Adoboli Jean 🇹🇬",
  "Boko Afi 🇹🇬",
  "Dossou Koami 🇹🇬",
  "Eglo Sena 🇹🇬",
  "Fiawoo Mawuli 🇹🇬",
  "Gaba Edem 🇹🇬"
];

const RegistrationPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const generateRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  };

  useEffect(() => {
    const showPopup = () => {
      setCurrentUser(generateRandomUser());
      setShow(true);
    };

    // Initial display
    showPopup();

    // Set interval for showing new users
    const interval = setInterval(() => {
      showPopup();
    }, 21000); // Show new user every 21 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setShow(false);
    // Reopen after 21 seconds with a new user
    setTimeout(() => {
      setCurrentUser(generateRandomUser());
      setShow(true);
    }, 21000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg z-50 max-w-[280px]"
        >
          <div className="flex items-center p-3 gap-2">
            {/* Logo */}
            <img
              src={logo}
              alt="SBC Logo"
              className="w-12 h-10 object-contain bg-white rounded p-0.5"
            />
            
            {/* User Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800 truncate">
                  {currentUser}
                </span>
                <p className="text-xs text-gray-500">Vient de s'inscrire</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationPopup;