# Rapport d’audit

Projet : `jardins-hacienda-v2-maquette` · 10/11/2026 22:14:09 · 9 min · 2 page(s) · audit standard ciblé sur /,/la-carte

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261110-210507-standard-cible` · version ?v=1
- Échecs : **0**
- À regarder : **7**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (28), balayage (2), films d’ouverture (4), films de transition (4), bords de l’écran (3), intro accélérable et passable (7), menu (1), clavier (2), liens et boutons (2), liens profonds (2), liens vers la page en cours (2), changements de hauteur (2), mode calme (4), bouton du mode calme (2), parcours du projet (1), tient dans l’écran (5), films des épinglages (1), fluidité (4), défilement selon l’appareil (5), mouvement (4), effets du plan (8), souris immobile (3), vitesse (2), captures (1)

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
| 20261110-202340-standard | standard | toutes | toutes | 6 | 12 | 2 | échecs |
| 20261110-204512-standard | standard | toutes | toutes | 6 | 9 | 1 | échecs |
| **20261110-210507-standard-cible** (celle-ci) | standard | /,/la-carte | toutes | 0 | 7 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `receptions.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### au retour arrière, élément qui réapparaît en s’animant (2)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — div.fenetre > div.fenetre-vue > figure.media.fenetre-photo _(1366×768 retour arrière, 390×844 retour arrière)_
- **au retour arrière, élément qui réapparaît en s’animant** — `/` — figure.media.fenetre-photo > picture > img « Coin de la salle le soir, mur de pierre, » _(1366×768 retour arrière, 390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/la-carte` — écran différent à la même position après rechargement (10.2 %), voir comparaisons/rechargement-la-carte-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/la-carte` — h1.titre-page.tampon — tampon : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

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
- Audit standard : étapes lourdes sur /, /la-carte.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2906 ms depuis le premier octet
- Ouverture /la-carte (1366×768) : 2910 ms depuis le premier octet
- Ouverture / (390×844) : 2838 ms depuis le premier octet
- Ouverture /la-carte (390×844) : 2895 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 121 images d’intro, 5 de voile et 70 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /la-carte : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 487, tâche la plus longue 0 ms
- Fluidité /la-carte 1366×768 (molette) : 0 % d'images lentes sur 222, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /la-carte 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-carte : 0.27 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
