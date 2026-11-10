# Rapport d’audit

Projet : `jardins-hacienda-v2-maquette` · 10/11/2026 22:46:23 · 4 min · 7 page(s) · audit standard (étapes : fichiers, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261110-214204-standard-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **6**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (4), liens vers la page en cours (6), changements de hauteur (5), mode calme (10), bouton du mode calme (2), parcours du projet (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261110-200547-rapide-cible | rapide | /,/la-carte,/le-lieu,/receptions,/reserver,/contact | toutes | 81 | 23 | 7 | échecs |
| 20261110-202340-standard | standard | toutes | toutes | 6 | 12 | 2 | échecs |
| 20261110-204512-standard | standard | toutes | toutes | 6 | 9 | 1 | échecs |
| 20261110-210507-standard-cible | standard | /,/la-carte | toutes | 0 | 7 | 1 | complet |
| 20261110-211419-complet-partiel | complet | toutes | mesures, ecran | 6 | 0 | 0 | échecs |
| 20261110-212434-complet-cible-partiel | complet | /,/receptions,/reserver | fichiers, mesures | 3 | 4 | 0 | échecs |
| 20261110-212908-complet-cible-partiel | complet | /,/reserver | fichiers, mesures | 0 | 3 | 0 | complet |
| 20261110-213233-standard-cible | standard | /,/reserver | toutes | 1 | 5 | 1 | échecs |
| **20261110-214204-standard-partiel** (celle-ci) | standard | toutes | fichiers, parcours | 0 | 6 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (3)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `receptions.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### lien vers une ancre : changement brusque (1)

- **lien vers une ancre : changement brusque** — `/ → /le-lieu#piscine` — à 572 ms (différence 22 %) (films/ancre-1366.png) _(1366×768 film)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/la-carte` — écran différent à la même position après rechargement (10.2 %), voir comparaisons/rechargement-la-carte-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/le-lieu` — écran différent à la même position après rechargement (5.2 %), voir comparaisons/rechargement-le-lieu-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 59 min de travail pour 105 min de budget, 29 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 9 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /la-carte, /le-lieu, /receptions, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
