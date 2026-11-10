# Test « vrai visiteur » : Les Jardins de l'Hacienda

Persona : un couple de Metz qui cherche où déjeuner samedi au soleil et qui pense déjà au réveillon de la Saint-Sylvestre.
Test du 10 novembre 2026, avec `_audit/visiteur.mjs`. Les secondes comptent depuis l'arrivée, chargement et intro (environ 3,4 s) compris.
Barème : mission 1 sans geste ; les autres en 3 gestes et 30 s au plus.

## Résultats

| Mission | Format | Réussie ? | Gestes | Secondes | Ce qui a gêné | Capture de référence |
|---|---|---|---|---|---|---|
| 1 comprendre | téléphone | Oui | 0 | 3,5 | Restaurant et lieu de réception, Moineville, à 15 km de Metz, chef Régis Clauss : on le comprend tout de suite. La grande photo est cachée derrière des persiennes bleues, et la consigne « Glissez du doigt » se trouve sous le premier écran. Le public visé reste implicite. | comprendre-390x844/etape-2.png |
| 1 comprendre | ordinateur | Oui | 0 | 3,5 | Même message, clair. La photo est derrière les persiennes, et une fois ouverte elle montre un intérieur d'hiver (cheminée, fourrures) plutôt que le soleil et la piscine annoncés. Aucun téléphone dans l'en-tête. | comprendre-1440x900/etape-2.png |
| 2 prix | téléphone | Oui | 1 | 5,9 | Rien : « Voir la carte » mène à « Plats de 21 à 26 € ». | prix-390x844/etape-2.png |
| 2 prix | ordinateur | Oui | 1 | 5,7 | Rien. | prix-1440x900/etape-2.png |
| 3 réserver | téléphone | Oui (réf. R-1114-3285), mais hors barème | 13 (5 de navigation, 3 choix, 3 saisies, vérifier, confirmer) | 23,1 | Une page intermédiaire oblige à cliquer « Choisir ma table ». Le samedi est caché à droite dans la rangée des jours (il faut faire glisser, un geste de plus pour un vrai visiteur). Le récapitulatif est déjà affiché, mais il faut encore cliquer « Vérifier » puis « Confirmer ». On lit « Politique de confidentialité : à compléter ». La référence est coupée sur deux lignes (« R- / 1114-3285 »). | reserver-390x844/etape-15.png |
| 3 réserver | ordinateur | Oui (réf. R-1114-7214), mais hors barème | 11 | 18,8 | Les jours sont visibles d'emblée, c'est mieux. Restent la double validation et la mention « à compléter ». Après la confirmation, la page remonte en haut et tous les jours apparaissent barrés, ce qui se lit comme « complet ». | reserver-1440x900/etape-13.png |
| 4 venir | téléphone | Oui | 2 (Menu, puis Contact) | 6,8 | Le bouton « Appeler » est visible sans geste, mais il faut deux gestes pour lire l'adresse. Les horaires ne sont pas publiés (« donnés au téléphone ») : impossible de savoir si c'est ouvert samedi midi. | venir-390x844/etape-3.png |
| 4 venir | ordinateur | Oui | 1 | 6,1 | Pas d'horaires. Sur la carte d'accès, le tracé depuis Metz s'arrête avant le point Moineville. | venir-1440x900/etape-2.png |
| 5 distinguer | téléphone | Oui | 7 défilements | 32,8 | Phrase retenue : « Une cuisine de chef sous les palmiers, avec piscine et paillotes à 15 min de Metz, où l'on prolonge le déjeuner au bord de l'eau (en été) et où le brasero s'allume le dimanche. » Un grand aplat beige vide sépare deux photos, et la photo de la paillote est floue quand elle s'agrandit. Tout est estival (« de juin à septembre ») : rien ne dit ce qu'on vit sur la terrasse un samedi de novembre. | distinguer-390x844/etape-9.png |
| 5 distinguer | ordinateur | Oui | 7 défilements | 29,7 | Même phrase. Même aplat vide (etape-15) et même photo floue en plein écran (etape-18). | distinguer-1440x900/etape-12.png |
| 6 réveillon | téléphone | Non | 10 jusqu'au prix, 12 jusqu'au menu | 15,3 / 18,5 | Le prix (120 €, 170 € avec l'accord mets et vins) n'apparaît qu'au 10e écran de l'accueil. Le lien « Menu de Noël » de l'accueil et le lien « Saint-Sylvestre » de /reserver mènent au formulaire, sans menu ni prix. La navigation n'a pas d'entrée « Fêtes ». Le menu est replié derrière un « Le menu » qui ressemble à un titre vide, sans flèche. | reveillon-390x844/etape-7.png |
| 6 réveillon | ordinateur | Non | 11 jusqu'au prix, 13 jusqu'au menu (estimé) | 11,6 / 14,1 | Mêmes causes. Le menu de Noël s'ouvre au 12e geste ; celui de la Saint-Sylvestre demande un 13e clic, que l'outil n'a pas pu cibler (deux « Le menu » identiques). La carte à emporter, elle, est dépliée : l'incohérence saute aux yeux. | reveillon-1440x900/etape-2.png |

## Gênes à corriger, de la plus importante à la moins importante

1. **La Saint-Sylvestre est introuvable rapidement** : elle se trouve au 10e ou 11e écran de l'accueil. Les liens « Menu de Noël » et « Saint-Sylvestre » mènent au formulaire sans menu ni prix, et la navigation n'a pas d'entrée « Fêtes ». Il faut un lien direct vers la section (#saint-sylvestre) avec le prix dans le libellé, et une entrée « Les fêtes » dans le menu.
2. **Les menus de fête sont repliés sans aucun signe qu'on peut cliquer** : « Le menu » ressemble à un titre suivi de rien. Il faut les déplier par défaut, comme la carte à emporter, ou au moins ajouter une flèche et un libellé « Voir le menu ».
3. **Le parcours de réservation est trop long** : sur téléphone, le bouton de l'accueil passe par une page intermédiaire (« Choisir ma table ») au lieu d'ouvrir directement #formulaire. Le samedi est hors écran dans la rangée des jours. La double validation « Vérifier » puis « Confirmer » est superflue alors que le récapitulatif est déjà affiché.
4. **La photo d'accueil est masquée par des persiennes bleues** qu'il faut faire glisser, et sur téléphone la consigne n'est pas dans le premier écran. Une fois ouverte, la photo montre une salle d'hiver qui ne correspond pas à la promesse « terrasse, palmiers, piscine ».
5. **Des mentions de chantier sont visibles par le client** : « Politique de confidentialité : à compléter » et les pastilles « Illustration générée ».
6. **Les horaires d'ouverture ne sont pas publiés** (« donnés au téléphone ») : on ne peut pas savoir si c'est ouvert samedi midi sans passer par le formulaire.
7. **Rien n'est dit sur la saison** : tout le jardin est présenté « de juin à septembre », et rien ne dit ce que propose la terrasse en automne ou en hiver.
8. **Accueil** : un grand aplat beige vide entre deux photos, et la photo de la paillote est floue quand elle s'agrandit (téléphone et ordinateur).
9. **Détails** : la référence de réservation est coupée en fin de ligne. Sur ordinateur, après la confirmation, la page remonte et tous les jours apparaissent barrés. Le tracé de la carte d'accès n'atteint pas Moineville.

## Corrections après le test et nouveau passage

- Réveillon (mission ratée) : le « Prochain rendez-vous » de l'accueil mène maintenant aux billets des fêtes de la même page, avec le prix ; les menus sont affichés en entier (plus de « Le menu » replié) ; sur Réserver, les liens des fêtes portent leur prix et un lien « Voir les menus ».
- Nouveau passage, téléphone 390 × 844 : prix de la Saint-Sylvestre (120 €, 170 €) à l'écran en 2 gestes, menu au 3e geste, 11,7 s (dossier reveillon2-390x844). Réussi.
- Réservation : hors barème par nature (7 choix et saisies obligatoires au moins) ; confirmée sur téléphone et sur ordinateur. Gardé tel quel : le récapitulatif à confirmer évite une réservation erronée.
