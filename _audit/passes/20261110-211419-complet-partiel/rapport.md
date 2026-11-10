# Rapport d’audit

Projet : `jardins-hacienda-v2-maquette` · 10/11/2026 22:23:55 · 10 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261110-211419-complet-partiel` · version ?v=1
- Échecs : **6**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : mesures (364), balayage (6), tient dans l’écran (16), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261110-200547-rapide-cible | rapide | /,/la-carte,/le-lieu,/receptions,/reserver,/contact | toutes | 81 | 23 | 7 | échecs |
| 20261110-202340-standard | standard | toutes | toutes | 6 | 12 | 2 | échecs |
| 20261110-204512-standard | standard | toutes | toutes | 6 | 9 | 1 | échecs |
| 20261110-210507-standard-cible | standard | /,/la-carte | toutes | 0 | 7 | 1 | complet |
| **20261110-211419-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 6 | 0 | 0 | échecs |

## Échecs

### contraste insuffisant (4)

- **contraste insuffisant** — `/` — nav > ul > li:nth-of-type(1) > a « La carte » — 2.53:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_
- **contraste insuffisant** — `/` — nav > ul > li:nth-of-type(2) > a « Le lieu » — 2.53:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_
- **contraste insuffisant** — `/` — nav > ul > li:nth-of-type(3) > a « Réceptions » — 2.53:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_
- **contraste insuffisant** — `/` — nav > ul > li:nth-of-type(4) > a « Contact » — 2.53:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/receptions` — div.conteneur.rec-ouv-grille > div > p:nth-of-type(4) > a.bouton.bouton--clair « Demander une date » _(844×390 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/reserver` — fieldset.resa__champ:nth-of-type(1) > div.resa__jours > button.resa__jour:nth-of-type(7) > b « 16 nov. » — avec div.resa__recap-corps > dl.resa__lignes > div.resa__ligne.est-vide:nth-of-type(3) > dt « Heure » _(1000×560 normal, 1000×560 calme, 1000×560 sansWebgl)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-carte : aucune section épinglée ou plein écran.
- Tient dans l'écran /receptions : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/receptions,/reserver --seulement=fichiers,mesures
```
