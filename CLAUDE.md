# Sogerg Enterprise — site vitrine

Site statique (HTML/CSS/JS pur, pas de build) présentant les applications de Sogerg Enterprise.

# Langue
Réponds toujours en français.

## Structure
- `index.html` — page unique
- `style.css` — styles (variables CSS, thème clair/sombre auto)
- `apps.js` — données des applications affichées (source unique de vérité)
- `assets/icons/` — icônes des apps, copiées depuis chaque projet

## Ajouter un lien de store
Une fois une app publiée, éditer son entrée dans `apps.js` : renseigner `links.ios` et/ou `links.android` avec l'URL du store. Le bouton correspondant s'active automatiquement (sinon il affiche "bientôt").

## Ajouter une nouvelle application
1. Copier l'icône de l'app dans `assets/icons/`
2. Ajouter un bloc dans le tableau `APPS` de `apps.js` (nom, tagline, description, icône, liens)
