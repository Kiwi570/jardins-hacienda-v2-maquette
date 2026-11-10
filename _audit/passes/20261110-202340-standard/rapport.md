# Rapport d’audit

Projet : `jardins-hacienda-v2-maquette` · 10/11/2026 21:43:11 · 20 min · 7 page(s) · audit standard

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261110-202340-standard` · version ?v=1
- Échecs : **6**
- À regarder : **12**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (98), balayage (6), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (2), liens vers la page en cours (6), changements de hauteur (4), mode calme (10), bouton du mode calme (2), parcours du projet (1), tient dans l’écran (10), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (8), souris immobile (3), vitesse (6), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261110-200547-rapide-cible | rapide | /,/la-carte,/le-lieu,/receptions,/reserver,/contact | toutes | 81 | 23 | 7 | échecs |
| **20261110-202340-standard** (celle-ci) | standard | toutes | toutes | 6 | 12 | 2 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/le-lieu` — section#debut > div.conteneur.lieu-ouv-texte > p.surtitre:nth-of-type(1) « EN PLEINE NATURE, OUVERT TOUTE L'ANNÉE » — avec section#debut > div.conteneur.lieu-ouv-texte > h1.titre-page.titre-lumiere « Le lieu » _(1920×1080 normal)_

### ne tient pas dans l’écran (4)

- **ne tient pas dans l’écran** — `/` — div.assiette__cadre.conteneur:nth-of-type(2) > div.assiette__scene.table:nth-of-type(2) > div.assiette__element.couvert:nth-of-type(4) > button.couvert-bouton « Faire tourner l'assiette 3 » — coupé en bas de 11 px (à 50 % de la scène) _(1280×720 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.assiette__scene.table:nth-of-type(2) > div.assiette__element.couvert:nth-of-type(4) > button.couvert-bouton > img — coupé en bas de 11 px (à 50 % de la scène) _(1280×720 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.assiette__cadre.conteneur:nth-of-type(2) > div.assiette__scene.table:nth-of-type(2) > div.assiette__element.couvert:nth-of-type(4) > button.couvert-bouton « Faire tourner l'assiette 3 » — coupé en bas de 13 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.assiette__scene.table:nth-of-type(2) > div.assiette__element.couvert:nth-of-type(4) > button.couvert-bouton > img — coupé en bas de 13 px (à 50 % de la scène) _(1366×768 épinglé)_

### fluidité (1)

- **fluidité** — `/la-carte` — 21 % d'images de plus de 50 ms, tâche la plus longue 117 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `receptions.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### au retour arrière, élément qui réapparaît en s’animant (2)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.fenetre > div.fenetre-vue > figure.media.fenetre-photo _(1366×768 retour arrière, 390×844 retour arrière)_
- **au retour arrière, élément qui réapparaît en s’animant** — `/` — figure.media.fenetre-photo > picture > img « Coin de la salle le soir, mur de pierre, » _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/la-carte` — écran différent à la même position après rechargement (10.0 %), voir comparaisons/rechargement-la-carte-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/le-lieu` — écran différent à la même position après rechargement (5.2 %), voir comparaisons/rechargement-le-lieu-*.png _(1366×768)_

### fluidité (3)

- **fluidité** — `/` — 7 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_
- **fluidité** — `/le-lieu` — 8 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_
- **fluidité** — `/receptions` — 8 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/la-carte` — h1.titre-page.tampon — tampon : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **parcours:hauteur** : page.evaluate: TypeError: Cannot read properties of null (reading 'scrollIntoView')
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 59 min de travail pour 105 min de budget, 29 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 9 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /la-carte, /le-lieu, /receptions, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2857 ms depuis le premier octet
- Ouverture /la-carte (1366×768) : 2898 ms depuis le premier octet
- film de l'ouverture /la-carte 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /le-lieu (1366×768) : 2771 ms depuis le premier octet
- Ouverture /receptions (1366×768) : 2895 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2833 ms depuis le premier octet
- Ouverture / (390×844) : 2809 ms depuis le premier octet
- Ouverture /la-carte (390×844) : 2895 ms depuis le premier octet
- Ouverture /le-lieu (390×844) : 2701 ms depuis le premier octet
- film de l'ouverture /le-lieu 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /receptions (390×844) : 2902 ms depuis le premier octet
- film de l'ouverture /receptions 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (390×844) : 2850 ms depuis le premier octet
- bords de l’écran /la-carte 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 398 images d’intro, 5 de voile et 152 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-carte : aucune section épinglée ou plein écran.
- Tient dans l'écran /receptions : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité /reserver 1366×768 (molette) : 2 % d'images lentes sur 174, tâche la plus longue 78 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /la-carte 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /le-lieu 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /receptions 390×844 (doigt) : 0 % d'images lentes sur 1426, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-carte : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /le-lieu : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /receptions : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.30 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,ecran,fluidite,parcours
```
