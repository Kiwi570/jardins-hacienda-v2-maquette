# Rapport d’audit

Projet : `jardins-hacienda-v2-maquette` · 10/11/2026 21:20:47 · 15 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/la-carte,/le-lieu,/receptions,/reserver,/contact

## Résumé

- Statut : **81 échec(s)**
- Passe : `20261110-200547-rapide-cible` · version ?v=1
- Échecs : **81**
- À regarder : **23**
- Non lancé : **7**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (42), films d’ouverture (12), films de transition (12), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (2), liens vers la page en cours (6), changements de hauteur (5), mode calme (12), bouton du mode calme (2), parcours du projet (1), tient dans l’écran (4), films des épinglages (1), fluidité (11)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en persienne |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 6 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 6 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /receptions, /reserver |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (6)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `la-carte.html` — fichier introuvable : /assets/partage/la-carte-fr.jpg
- **image de partage** — `le-lieu.html` — fichier introuvable : /assets/partage/le-lieu-fr.jpg
- **image de partage** — `receptions.html` — fichier introuvable : /assets/partage/receptions-fr.jpg
- **image de partage** — `reserver.html` — fichier introuvable : /assets/partage/reserver-fr.jpg

### zone tactile sous 44 px (9)

- **zone tactile sous 44 px** — `/` — div.ouv-grille.conteneur:nth-of-type(2) > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) > a « Menu de Noël, vendredi 25 décembre » — 280 × 26 px _(390×844 calme, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/` — body#haut > header > div.entete-rangee > a.entete-logo — 40 × 44 px _(320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — body#haut > header > div.entete-rangee > a.entete-logo — 40 × 44 px _(320×568 sansJs)_
- **zone tactile sous 44 px** — `/la-carte` — body#haut > header > div.entete-rangee > a.entete-logo — 40 × 44 px _(320×568 sansJs)_
- **zone tactile sous 44 px** — `/le-lieu` — body#haut > header > div.entete-rangee > a.entete-logo — 40 × 44 px _(320×568 sansJs)_
- **zone tactile sous 44 px** — `/receptions` — div.conteneur.rec-demande-grille:nth-of-type(2) > div > p.texte-cle:nth-of-type(3) > a « 06 18 21 28 10 » — 119 × 19 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/receptions` — body#haut > header > div.entete-rangee > a.entete-logo — 40 × 44 px _(320×568 sansJs)_
- **zone tactile sous 44 px** — `/reserver` — div.conteneur.resa-ouv-grille:nth-of-type(2) > div.resa-ouv-texte:nth-of-type(1) > p.texte-cle:nth-of-type(3) > a « Une question ? 06 18 21 28 10 » — 232 × 19 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/reserver` — body#haut > header > div.entete-rangee > a.entete-logo — 40 × 44 px _(320×568 sansJs)_

### contraste insuffisant (18)

- **contraste insuffisant** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Maquette de démonstration : réservations et formul » — 1.10:1 (minimum 4.5:1) _(390×844 calme, 390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — 1.10:1 (minimum 4.5:1) _(390×844 calme, 390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © Les Jardins de l'Hacienda » — 1.10:1 (minimum 4.5:1) _(390×844 calme, 390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Maquette de démonstration : réservations et formul » — 1.10:1 (minimum 4.5:1) _(390×844 calme, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — 1.10:1 (minimum 4.5:1) _(390×844 calme, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © Les Jardins de l'Hacienda » — 1.10:1 (minimum 4.5:1) _(390×844 calme, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/la-carte` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Maquette de démonstration : réservations et formul » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/la-carte` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/la-carte` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © Les Jardins de l'Hacienda » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/le-lieu` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Maquette de démonstration : réservations et formul » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/le-lieu` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/le-lieu` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © Les Jardins de l'Hacienda » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/receptions` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Maquette de démonstration : réservations et formul » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/receptions` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/receptions` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © Les Jardins de l'Hacienda » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/reserver` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Maquette de démonstration : réservations et formul » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/reserver` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_
- **contraste insuffisant** — `/reserver` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(3) « © Les Jardins de l'Hacienda » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_

### accessibilité (axe) : color-contrast (6)

- **accessibilité (axe) : color-contrast** — `/` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_
- **accessibilité (axe) : color-contrast** — `/contact` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_
- **accessibilité (axe) : color-contrast** — `/la-carte` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_
- **accessibilité (axe) : color-contrast** — `/le-lieu` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_
- **accessibilité (axe) : color-contrast** — `/receptions` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_
- **accessibilité (axe) : color-contrast** — `/reserver` — .pied-bas > p:nth-child(1) ; .pied-bas > p:nth-child(2) ; .pied-bas > p:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 calme)_

### accessibilité (axe) : nested-interactive (1)

- **accessibilité (axe) : nested-interactive** — `/` — .assiette__scene — Interactive controls must not be nested _(390×844 calme)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-grille.conteneur:nth-of-type(2) > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) « PROCHAIN RENDEZ-VOUS Menu de Noël, vendredi 25 déc » _(320×568 sansJs)_

### contraste sur image (4)

- **contraste sur image** — `/` — section#debut > div.ouv-grille.conteneur:nth-of-type(2) > div.ouv-texte:nth-of-type(1) > p.surtitre.ouv-surtitre:nth-of-type(1) « RESTAURANT ET LIEU DE RÉCEPTION · MOINEVILLE, À 15 » — 2.79:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.ouv-grille.conteneur:nth-of-type(2) > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) > span.ouv-info-label « PROCHAIN RENDEZ-VOUS » — 3.74:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.ouv-grille.conteneur:nth-of-type(2) > div.ouv-texte:nth-of-type(1) > p.ouv-info:nth-of-type(4) > span.ouv-info-label « PROCHAIN RENDEZ-VOUS » — 3.37:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/le-lieu` — section#debut > div.conteneur.lieu-ouv-texte > h1.titre-page.titre-lumiere « Le lieu » — 1.00:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal, 1366×768 normal)_

### section sans visuel (9)

- **section sans visuel** — `/contact` — section#infos « Bon à savoir Journées festives De juin à septembre » _(390×844 calme, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/contact` — section#ecrire « Écrivez-nous Mariage, baptême, anniversaire, pot d » _(390×844 calme, 390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/la-carte` — section#plats « Toute la carte Entrées Plats À partager Desserts E » _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/la-carte` — section#reserver-fin « Une table vous attend Midi ou soir, en salle ou en » _(390×844 normal, 390×844 calme, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, +1)_
- **section sans visuel** — `/le-lieu` — section#debut « EN PLEINE NATURE, OUVERT TOUTE L'ANNÉE Le lieu Une » _(390×844 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/le-lieu` — section#debut « EN PLEINE NATURE, OUVERT TOUTE L'ANNÉE Le lieu À 1 » _(1366×768 normal, 844×390 normal)_
- **section sans visuel** — `/receptions` — section#demande « Parlons de votre fête Dites-nous l'essentiel : la  » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 calme, 320×568 sansJs, +1)_
- **section sans visuel** — `/reserver` — section#formulaire « Votre table Le jour Aujourd'hui 10 nov. indisponib » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 calme, 390×844 sansWebgl)_
- **section sans visuel** — `/reserver` — section#formulaire « Votre table Le jour Ou choisir une date Le service » _(390×844 sansJs, 320×568 sansJs)_

### en-tête coupé en haut (2)

- **en-tête coupé en haut** — `/le-lieu` — body#haut > header « Les Jardins de l'Hacienda Menu » — -65 px _(390×844 normal, 390×844 calme, 390×844 sansWebgl)_
- **en-tête coupé en haut** — `/le-lieu` — body#haut > header « Les Jardins de l'Hacienda La carte Le lieu Récepti » — -65 px _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/receptions` — div.conteneur.rec-ouv-grille > div > p:nth-of-type(4) > a.bouton.bouton--clair « Demander une date » _(320×568 sansJs)_

### stabilité au chargement (CLS) (2)

- **stabilité au chargement (CLS)** — `/receptions` — div.conteneur.rec-ouv-grille ; figure.media.rec-cadre — 0.134 (0 visé, 0,05 au plus) _(1366×768 premier chargement)_
- **stabilité au chargement (CLS)** — `/reserver` — span.rais-bandes — 0.100 (0 visé, 0,05 au plus) _(1366×768 premier chargement)_

### transition : élément visible, caché puis réaffiché (flash) (5)

- **transition : élément visible, caché puis réaffiché (flash)** — `/le-lieu → /la-carte` — div.carte-ouv-grille.conteneur > div.volets > a.volet.volet--2 « Desserts9 à 11 € » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/le-lieu → /la-carte` — div.volets > a.volet.volet--2 > figure.media.volet-photo _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/le-lieu → /la-carte` — figure.media.volet-photo > picture > img « Un dessert en verre, fruits rouges » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /la-carte` — div.volets > a.volet.volet--2 > figure.media.volet-photo _(390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /la-carte` — figure.media.volet-photo > picture > img « Un dessert en verre, fruits rouges » _(390×844 film)_

### bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/la-carte` — bande en rgb(58, 90, 175) à côté du voile en rgb(34, 64, 143), sur 2 image(s) sur 2 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/la-carte` — bande en rgb(18, 39, 86) à côté du voile en rgb(28, 56, 125), sur 2 image(s) sur 2 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_

### clavier (6)

- **clavier** — `/le-lieu` — a « Les Jardins de l'Hacienda » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/le-lieu` — a « La carte » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/le-lieu` — a « Le lieu » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/le-lieu` — a « Réceptions » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/le-lieu` — a « Contact » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/le-lieu` — a « Réserver » — le focus arrive sur un élément caché _(1366×768)_

### mode calme (6)

- **mode calme** — `/` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/contact` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/la-carte` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/le-lieu` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/receptions` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_
- **mode calme** — `/reserver` — une boucle tourne encore (64 images par seconde) _(390×844 calme, 1366×768 calme)_

### ne tient pas dans l’écran (2)

- **ne tient pas dans l’écran** — `/` — div.assiette__cadre.conteneur:nth-of-type(2) > div.assiette__scene.table:nth-of-type(2) > div.assiette__element.couvert:nth-of-type(4) > button.couvert-bouton « Faire tourner l'assiette 3 » — coupé en bas de 164 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.assiette__scene.table:nth-of-type(2) > div.assiette__element.couvert:nth-of-type(4) > button.couvert-bouton > img — coupé en bas de 164 px (à 50 % de la scène) _(1366×768 épinglé)_

### fluidité (1)

- **fluidité** — `/la-carte` — 11 % d'images de plus de 50 ms, tâche la plus longue 60 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `receptions.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (2)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 358 × 43 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_
- **grille : objet d’ouverture hors du premier écran** — `/le-lieu` — 358 × 55 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### identifiant en double (1)

- **identifiant en double** — `/la-carte` — section#plats « Toute la carte Entrées Plats À partager Desserts E » — id="plats" _(390×844 normal, 390×844 calme, 1366×768 normal, 390×844 sansJs)_

### premier écran : aucun bouton principal marqué (data-action-principale) (1)

- **premier écran : aucun bouton principal marqué (data-action-principale)** — `/reserver` _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 calme, 390×844 sansJs, 320×568 sansJs, +1)_

### typographie française (1)

- **typographie française** — `/reserver` — div.conteneur.resa-ouv-grille:nth-of-type(2) > div.resa-ouv-texte:nth-of-type(1) > p.resa-fetes.masque-ecran-tres-bas:nth-of-type(4) > span « Les fêtes : » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### au retour arrière, élément qui réapparaît en s’animant (2)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.fenetre > div.fenetre-vue > figure.media.fenetre-photo _(1366×768 retour arrière, 390×844 retour arrière)_
- **au retour arrière, élément qui réapparaît en s’animant** — `/` — figure.media.fenetre-photo > picture > img « Coin de la salle le soir, mur de pierre, » _(1366×768 retour arrière, 390×844 retour arrière)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 87 ms (différence 21 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile (4)

- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/la-carte` — bande en rgb(58, 90, 175) à côté du voile en rgb(34, 64, 143), sur 1 image(s) sur 1 (films/bords-voile-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/la-carte` — bande en rgb(58, 90, 175) à côté du voile en rgb(34, 64, 143), sur 1 image(s) sur 1 (films/bords-voile-le-lieu-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/la-carte` — bande en rgb(58, 90, 175) à côté du voile en rgb(34, 64, 143), sur 1 image(s) sur 1 (films/bords-voile-receptions-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/la-carte` — bande en rgb(58, 90, 175) à côté du voile en rgb(34, 64, 143), sur 1 image(s) sur 1 (films/bords-voile-reserver-1366.png) _(1366×768 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile (4)

- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/la-carte` — bande en rgb(18, 39, 86) à côté du voile en rgb(28, 56, 125), sur 1 image(s) sur 1 (films/bords-voile-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/la-carte` — bande en rgb(18, 39, 86) à côté du voile en rgb(28, 56, 125), sur 1 image(s) sur 1 (films/bords-voile-le-lieu-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/la-carte` — bande en rgb(18, 39, 86) à côté du voile en rgb(28, 56, 125), sur 1 image(s) sur 1 (films/bords-voile-receptions-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant le voile** — `/la-carte` — bande en rgb(18, 39, 86) à côté du voile en rgb(28, 56, 125), sur 1 image(s) sur 1 (films/bords-voile-reserver-1366.png) _(1366×768 barre de défilement classique (15 px))_

### fluidité (4)

- **fluidité** — `/` — 8 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_
- **fluidité** — `/contact` — 10 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_
- **fluidité** — `/le-lieu` — 6 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_
- **fluidité** — `/receptions` — 10 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **bords de l’écran /la-carte 1366×768** : page.click: Timeout 30000ms exceeded. (3 tentatives)
- **parcours:hauteur** : page.evaluate: TypeError: Cannot read properties of null (reading 'scrollIntoView')
- **fluidite** : browserContext.close: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 42 min de travail pour 70 min de budget, 29 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 9 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /, /contact, /la-carte, /le-lieu, /receptions, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2814 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2786 ms depuis le premier octet
- Ouverture /la-carte (1366×768) : 2881 ms depuis le premier octet
- Ouverture /le-lieu (1366×768) : 2676 ms depuis le premier octet
- Ouverture /receptions (1366×768) : 2896 ms depuis le premier octet
- film de l'ouverture /receptions 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (1366×768) : 2827 ms depuis le premier octet
- Ouverture / (390×844) : 2845 ms depuis le premier octet
- Ouverture /contact (390×844) : 2820 ms depuis le premier octet
- Ouverture /la-carte (390×844) : 2889 ms depuis le premier octet
- Ouverture /le-lieu (390×844) : 2679 ms depuis le premier octet
- Ouverture /receptions (390×844) : 2894 ms depuis le premier octet
- film de l'ouverture /receptions 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (390×844) : 2824 ms depuis le premier octet
- Bords de l’écran : 382 images d’intro, 6 de voile et 115 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-carte : aucune section épinglée ou plein écran.
- Tient dans l'écran /receptions : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité /reserver 1366×768 (molette) : 2 % d'images lentes sur 129, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /la-carte 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /le-lieu 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /receptions 390×844 (doigt) : 0 % d'images lentes sur 1415, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,bords,parcours,ecran,fluidite,mouvement,vitesse,captures
```
