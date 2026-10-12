// Liste des applications à afficher sur le site.
// Pour ajouter un lien de store une fois l'app publiée : renseigner ios / android ci-dessous.
// Pour ajouter une nouvelle application : dupliquer un bloc et l'ajouter au tableau.
// Mis à jour le 12/10/2026 : les 6 apps en vente, puis les 5 soumises ou prêtes (bouton « bientôt »).
// Retirées : les apps refusées ou mises de côté, et Whiskey / Liquor, fusionnées dans Cave & Chai.
// Liens Android : null tant que le compte Google Play n'est pas rétabli.

const APPS = [
  // ---------------------------------------------------------------- en vente
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
  // ---------------------------------------------------------------- bientôt (soumises ou prêtes)
  {
    name: "Bill Calendar",
    tagline: "Factures et abonnements, jour par jour",
    description:
      "Le calendrier de vos échéances : loyer, énergie, assurances et abonnements, avec rappels et hausses de prix, sans compte ni banque.",
    icon: "assets/icons/bill.png",
    links: { ios: null, android: null }
  },
  {
    name: "Triathlon SeasonBook",
    tagline: "Le carnet de saison du triathlète",
    description:
      "Vos séances de nage, vélo et course, vos objectifs, vos courses et votre matériel, saison après saison.",
    icon: "assets/icons/triathlon.png",
    links: { ios: null, android: null }
  },
  {
    name: "Apex Ballistic Calculator",
    tagline: "Le calculateur balistique de précision",
    description:
      "Trajectoire, dérive au vent et table de tir pour le tir sportif à longue distance.",
    icon: "assets/icons/apex.png",
    links: { ios: null, android: null }
  },
  {
    name: "Rollwright",
    tagline: "Les dés du jeu de rôle",
    description:
      "Formules de dés, lancers et probabilités pour vos parties de jeu de rôle.",
    icon: "assets/icons/rollwright.png",
    links: { ios: null, android: null }
  },
  {
    name: "Fissures maison",
    tagline: "Suivi des fissures et alerte CatNat",
    description:
      "Mesurez et suivez les fissures de votre maison, et préparez votre dossier de catastrophe naturelle sécheresse.",
    icon: "assets/icons/fissures.png",
    links: { ios: null, android: null }
  }
];
