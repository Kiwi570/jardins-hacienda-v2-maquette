/* La carte : ouverture scindée sur fond de lin, la carte pliée qui se déplie en trois volets (objet d'ouverture),
   titre tamponné (typo), plats qui se recomposent par rubrique (recomposition), assiettes qui s'inclinent à la vitesse. */
import { html, brut } from '../../outils/gabarit.mjs';
import { rais, img } from '../gabarits/blocs.mjs';

export const page = { cle: 'la-carte', fichier: 'la-carte', imagePartage: 'plat-1' };

const fourchette = (r) => {
  const p = r.plats.map((x) => parseInt(x.prix, 10)).filter((n) => !Number.isNaN(n));
  const a = Math.min(...p), b = Math.max(...p);
  return a === b ? `${a} €` : `${a} à ${b} €`;
};

export default (c) => {
  const k = c.donnees.carte;
  const [ent, pla, par, des] = k.rubriques;
  const volets = [[ent, 'plat-2'], [pla, 'plat-1'], [des, 'dessert-1']];
  return html`
<section class="carte-ouv page-ouv lumiere" id="debut" data-ambiance="midi">
  ${rais()}
  <div class="carte-ouv-grille conteneur">
    <div class="carte-ouv-texte">
      <p class="surtitre" data-anime="gsap">${c.t('carte.surtitre')}</p>
      <h1 class="titre-page tampon" data-grille="typo" data-effet="tampon"><span class="tampon-texte">${c.t('carte.titre')}</span></h1>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('carte.texte')}</p>
      <p class="texte-cle" data-info-cle data-anime="gsap"><span data-prix>${c.t('carte.info')}</span></p>
      <p data-anime="gsap">${c.lien('reserver', { classe: 'bouton', texte: c.t('carte.action'), attrs: 'data-action-principale' })}</p>
    </div>
    <div class="volets" data-iris-centre data-effet="carte-volets" role="group" aria-label="${c.s('carte.volets')}">
      ${volets.map(([r, im], i) => html`<a class="volet volet--${i}" href="#carte-detail"${i === 1 ? '' : brut(' data-anime="gsap"')} data-sans-transition data-rubrique-lien="${r.id}">
        ${img(c, im, c.donnees.images[im].alt, { classe: 'volet-photo', sizes: '(max-width: 760px) 30vw, 13vw', priorite: i === 1 })}
        <span class="volet-nom">${r.nom}</span><span class="volet-prix" data-prix>${fourchette(r)}</span>
      </a>`)}
    </div>
  </div>
</section>

<section class="carte-plats lumiere" id="carte-detail" data-ambiance="midi">
  ${img(c, 'lin-ombre', '', { grok: true, classe: 'carte-plats-fond', sizes: '100vw' })}
  ${rais()}
  <div class="conteneur">
    <div class="carte-filtres" data-filtres role="group" aria-label="${c.s('carte.filtres')}">
      <button type="button" data-filtre="tout" aria-pressed="true">${c.t('carte.tout')}</button>
      ${k.rubriques.map((r) => html`<button type="button" data-filtre="${r.id}" aria-pressed="false">${r.nom}</button>`)}
    </div>
    <div class="carte-grille" data-carte-grille>
      ${k.rubriques.map((r) => html`<article class="rubrique" data-rubrique="${r.id}" id="${r.id}">
        <h2 class="rubrique-titre">${r.nom}${r.note ? html` <span class="rubrique-note">${r.note}</span>` : ''}</h2>
        <ul class="plats" data-anime="cascade">${r.plats.map((p) => html`<li><span class="plat-nom">${p.nom}</span><span class="plat-points" aria-hidden="true"></span><span class="plat-prix" data-prix>${p.prix}</span></li>`)}</ul>
      </article>`)}
      <article class="rubrique rubrique--enfant" data-rubrique="plats">
        <h2 class="rubrique-titre">${c.t('carte.enfantTitre')}</h2>
        <ul class="plats"><li><span class="plat-nom">${k.enfant.detail}</span><span class="plat-points" aria-hidden="true"></span><span class="plat-prix" data-prix>${k.enfant.prix}</span></li></ul>
      </article>
    </div>
    <p class="carte-notes" data-anime>${k.supplement}<br>${c.t('carte.allergenes')}</p>
  </div>
</section>

<section class="carte-assiettes lumiere" id="assiettes" data-ambiance="apres-midi">
  ${rais()}
  <div class="conteneur carte-assiettes-tete">
    <h2 data-anime="lignes">${c.t('carte.assietteTitre')}</h2>
    <p data-anime>${c.t('carte.assietteTexte')}</p>
  </div>
  <div class="rangee-assiettes" tabindex="0" role="region" aria-label="${c.s('carte.ruban')}">
    ${['plat-1', 'plat-3', 'plat-4', 'plat-2', 'dessert-1', 'cheminee-dessert'].map((n, i) => img(c, n, c.donnees.images[n].alt, { classe: `rangee-photo rangee-photo--${i % 3}`, sizes: '(max-width: 760px) 60vw, 22vw', attrs: i % 2 ? 'data-anime="rideau"' : 'data-fx="zoom"' }))}
  </div>
</section>

<section class="carte-chef lumiere" id="chef" data-ambiance="apres-midi">
  ${rais()}
  <div class="conteneur carte-chef-grille">
    ${img(c, 'chef', c.donnees.images.chef.alt, { classe: 'carte-chef-photo', sizes: '(max-width: 760px) 70vw, 30vw', attrs: 'data-anime="rideau"' })}
    <div>
      <h2 data-anime="lignes">${c.t('carte.chefTitre')}</h2>
      <p data-anime>${c.t('carte.chefTexte')}</p>
    </div>
  </div>
</section>

<section class="fin-page lumiere" id="reserver-fin" data-ambiance="midi">
  ${rais()}
  <div class="conteneur">
    ${img(c, 'salle-midi', c.donnees.images['salle-midi'].alt, { classe: 'fin-photo', sizes: '180px', attrs: 'data-anime="rideau"' })}
    <h2 data-anime="lignes">${c.t('carte.finTitre')}</h2>
    <p data-anime>${c.t('carte.finTexte')}</p>
    <p class="fin-actions" data-anime>${c.lien('reserver', { classe: 'bouton', texte: c.t('carte.action') })} ${c.lien('le-lieu', { classe: 'bouton bouton--contour' })}</p>
  </div>
</section>
`;
};
