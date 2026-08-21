// Liste des applications à afficher sur le site.
// Pour ajouter un lien de store une fois l'app publiée : renseigner ios / android ci-dessous.
// Pour ajouter une nouvelle application : dupliquer un bloc et l'ajouter au tableau.

const APPS = [
  {
    name: "BétonPro",
    tagline: "Calculateur de béton pour le chantier",
    description:
      "Dosages, volumes de coulage et carnet de chantier géolocalisé pour les professionnels du bâtiment.",
    icon: "assets/icons/beton.png",
    links: {
      ios: null,
      android: null
    }
  },
  {
    name: "TempoJump",
    tagline: "L'application des cavaliers",
    description:
      "Chronométrage des reprises, analyse vidéo et suivi des parcours d'obstacles pour cavaliers et entraîneurs.",
    icon: "assets/icons/tempojump.png",
    links: {
      ios: "https://apps.apple.com/app/id6789875302",
      android: null
    }
  },
  {
    name: "Wine Cellar Value",
    tagline: "Identifiez et estimez votre cave à vin",
    description:
      "Photographiez une étiquette pour identifier la bouteille et estimer sa valeur, son état de garde et sa fenêtre de dégustation.",
    icon: "assets/icons/wine.png",
    links: {
      ios: "https://apps.apple.com/app/valeur-vin-identifier/id6796832297",
      android: null
    }
  }
];
