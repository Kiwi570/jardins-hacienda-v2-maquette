# Les Jardins de l'Hacienda : maquette v1 (direction « Les persiennes »)

Maquette de démonstration du nouveau site du restaurant et lieu de réception Les Jardins de l'Hacienda (Moineville, 54).
Adresse prévue : https://jardins-hacienda-v2-maquette.vercel.app

## Pages de la v1

Accueil · La carte · Le lieu · Réceptions · Réserver · Contact et accès · 404.
Pages du site actuel non reprises, possibles en v2 : À emporter (commande en ligne), Les Évènements (agenda complet), Carte cadeau, Visite 360°, Pool Party, Informations importantes (reprises dans Contact).

## Ce qui est simulé

- Réservation de table (module de la bibliothèque, créneaux d'exemple : midi 12 h à 13 h 45, soir 19 h à 21 h 30) : rien n'est envoyé.
- Formulaires de demande (Réceptions, Contact) : rien n'est envoyé.

## Fiche à compléter par le client

- Mentions légales : à compléter (raison sociale, adresse du siège, SIRET, directeur de la publication).
- Hébergeur : Vercel Inc. (adresse à vérifier sur le site de Vercel au moment de la mise en ligne).
- Politique de confidentialité : à compléter (RGPD : données recueillies, finalité, durée, droits).
- Assurances et licences éventuelles : à compléter.
- Crédits photos : à compléter. Les images marquées « Illustration générée » ont été créées par intelligence artificielle (Grok) : la mention reste sur le site final.

## Retiré ou remplacé faute d'information

| Information | Page | Remplacé par |
|---|---|---|
| Jours et heures d'ouverture (la page Horaires du site n'en affiche pas) | Contact, Réserver | « Les jours et heures d'ouverture vous sont donnés au téléphone et à la réservation » ; aucun statut « ouvert maintenant » |
| Heures de service du soir | Réserver | créneaux d'exemple ; « La maison confirme l'heure par téléphone si besoin » |
| Allergènes | La carte | « Informations sur les allergènes disponibles sur demande » |
| Carte des boissons | La carte | non affichée |
| Montant de l'acompte par couvert (« x€ » sur le site) | Réceptions | phrase sans montant |
| Capacité des salles, formules et tarifs des réceptions | Réceptions | non affichés ; demande de rappel |
| Tarif du droit d'entrée au bar | Accueil, Contact | « avec un droit d'entrée », sans montant |
| E-mail de contact | partout | non affiché (téléphone seulement) |
| Saison de la terrasse | Réserver | « En terrasse » sans restriction de mois |

## Incohérences relevées sur le site actuel

- Deux numéros : 06 18 21 28 10 (site) et +33 609 386 764 (logo « général » téléchargé du site).
- Code postal 54000 dans les descriptions des pages, 54580 dans l'adresse.
- « Saison d'été : jusqu'au 30/09/2024 » encore affiché ; acompte resté « x€ d'acompte/couvert ».
- Grand Buffet : l'affiche dit « tous les dimanches, 12 h 00 à 18 h 00, 50 €/pers. », la page Informations importantes dit « buffet de 13 h à 15 h 30, piscine dès 14 h 30 ». La maquette donne les deux (journée 12 h à 18 h, buffet servi de 13 h à 15 h 30). À confirmer, ainsi que la saison du Grand Buffet.
- La photo du chef (section « Régis Clauss ») montre deux personnes : le texte alternatif « Le chef Régis Clauss au bord de la piscine » est à confirmer.
- Page Pool Party injoignable.
- « Saison d'hiver : piscine ouverte » sur l'accueil du site actuel : ambigu (piscine ouverte en hiver, ou deux blocs distincts ?). La maquette ne l'affiche pas : à confirmer.

## Mise en ligne définitive : à retirer

- `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`).
- Réservation et formulaires simulés (brancher le vrai système).
- Mentions « à compléter » du pied de page, phrases d'attente ci-dessus.

À garder : la mention « Illustration générée » sur les images créées par IA.

## Technique

Site statique généré : `node outils/generer.mjs` (textes dans `donnees/textes/fr.json`, carte et agenda dans `donnees/`). Audit : `node _audit/audit.mjs`.
Polices Gloock et Figtree (licence OFL, `assets/fonts/`). GSAP fourni dans `assets/vendor/`.
