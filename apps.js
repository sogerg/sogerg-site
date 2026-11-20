// Liste des applications à afficher sur le site.
// Pour ajouter un lien de store une fois l'app publiée : renseigner ios / android ci-dessous.
// Pour ajouter une nouvelle application : dupliquer un bloc et l'ajouter au tableau.
// Seulement les apps EN VENTE (décision du 12/10/2026) : jamais d'app à venir. Ajouter le bloc le jour de la mise en vente.
// Retirées : les apps refusées ou mises de côté, et Whiskey / Liquor, fusionnées dans Cave & Chai.
// Liens Android : null tant que le compte Google Play n'est pas rétabli.

const APPS = [
  {
    name: "Calcul Béton",
    tagline: "Dosage, dalle et volumes de coulage",
    description:
      "Dosages, volumes de coulage, devis et carnet de chantier pour les professionnels du bâtiment.",
    icon: "assets/icons/beton.png",
    links: {
      ios: "https://apps.apple.com/app/id6786003871",
      android: null
    }
  },
  {
    name: "TempoJump",
    tagline: "L'application des cavaliers",
    description:
      "Foulées, contrats et suivi des parcours d'obstacles pour cavaliers et entraîneurs.",
    icon: "assets/icons/tempojump.png",
    links: {
      ios: "https://apps.apple.com/app/id6789875302",
      android: null
    }
  },
  {
    name: "Cave & Chai",
    tagline: "Votre cave à vin, whisky et spiritueux",
    description:
      "Photographiez une étiquette pour inventorier vos bouteilles, suivre leur valeur, leur état et le bon moment pour les ouvrir.",
    icon: "assets/icons/cellar.png",
    links: {
      ios: "https://apps.apple.com/app/id6796832297",
      android: null
    }
  },
  {
    name: "Graphique Cours Or & Argent",
    tagline: "Le cours de l'or et de l'argent en direct",
    description:
      "Graphiques en direct, alertes de prix et valeur de vos métaux précieux dans votre devise.",
    icon: "assets/icons/goldchart.png",
    links: {
      ios: "https://apps.apple.com/app/id6808310679",
      android: null
    }
  },
  {
    name: "Checkout Proof",
    tagline: "L'état des lieux, entrée et sortie",
    description:
      "État des lieux pour location saisonnière, longue durée ou véhicule : photos datées, signatures et comparaison entrée / sortie en PDF.",
    icon: "assets/icons/checkout.png",
    links: {
      ios: "https://apps.apple.com/app/id6812844356",
      android: null
    }
  },
  {
    name: "Valeur Guitare",
    tagline: "La valeur de vos instruments",
    description:
      "Identifiez une guitare ou une basse : valeur honnête, état et recherche du numéro de série.",
    icon: "assets/icons/instrument.png",
    links: {
      ios: "https://apps.apple.com/app/id6808241717",
      android: null
    }
  },
  {
    name: "Fissures maison",
    tagline: "Suivi des fissures et CatNat sécheresse",
    description:
      "Relevés datés de vos fissures, statut de catastrophe naturelle de votre commune avec le délai de déclaration, et dossiers PDF pour la mairie, l'assureur et l'expert.",
    icon: "assets/icons/fissures.png",
    links: {
      ios: "https://apps.apple.com/app/id6821975864",
      android: null
    }
  },
  {
    name: "Crossday",
    tagline: "Jours de télétravail des frontaliers",
    description:
      "Un geste par jour, et vous voyez les jours restants avant les seuils fiscal et social de votre paire de pays, chacun avec sa source et sa date. Relevé PDF et CSV pour l'employeur.",
    icon: "assets/icons/crossday.png",
    links: {
      ios: "https://apps.apple.com/app/id6829536909",
      android: null
    }
  },
  {
    name: "Pumio",
    tagline: "Pompe à chaleur et climatisation",
    description:
      "Du relevé de chantier à l'attestation d'entretien : note de dimensionnement, mise en service signée, carnet F-Gas, rappels et exports CSV. Sans compte, hors ligne.",
    icon: "assets/icons/pumio.png",
    links: {
      ios: "https://apps.apple.com/app/id6833186978",
      android: null
    }
  },
  {
    name: "Cavage",
    tagline: "Truffes par arbre, par chien",
    description:
      "Touchez l'arbre où le chien marque, pesez la truffe, passez au suivant. Voyez quels arbres produisent, saison après saison. Le plan reste sur votre téléphone.",
    icon: "assets/icons/cavage.png",
    links: {
      ios: "https://apps.apple.com/app/id6835542452",
      android: null
    }
  },
  {
    name: "Potlife",
    tagline: "La résine époxy, du mélange au démoulage",
    description:
      "Volume du moule, dosage partie A et partie B au volume ou au poids, puis les rappels de chaque étape de cure jusqu'au démoulage. Le carnet de vos coulées reste sur votre téléphone.",
    icon: "assets/icons/potlife.png",
    links: {
      ios: "https://apps.apple.com/app/id6836982118",
      android: null
    }
  },
  {
    name: "Hide & Stitch",
    tagline: "Le cuir, calculé avant la coupe",
    description:
      "Épaisseur, surface de peau, longueur de fil au point sellier, lanières : les chiffres avant de poser la lame, puis le carnet de chaque projet. Tout reste sur votre téléphone.",
    icon: "assets/icons/hidestitch.png",
    links: {
      ios: "https://apps.apple.com/app/id6836551666",
      android: null
    }
  },
  {
    name: "Table Score",
    tagline: "Le compteur de la table",
    description:
      "Tarot, Belote, Coinche, Yam's et tous vos jeux, calculés juste, sans pub et sans connexion.",
    icon: "assets/icons/tablescore.png",
    links: {
      ios: "https://apps.apple.com/app/id6824197989",
      android: null
    }
  },
  {
    name: "Triathlon Race Log",
    tagline: "Courses, chronos et records",
    description:
      "Saison finie ? Vos séances déjà enregistrées deviennent des pages de course, un compte-rendu et votre livre de saison. Sans compte, tout reste sur le téléphone.",
    icon: "assets/icons/triathlon.png",
    links: {
      ios: "https://apps.apple.com/app/id6819398567",
      android: null
    }
  }
];
