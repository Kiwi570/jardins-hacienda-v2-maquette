/* Accueil : une journée à l'Hacienda (plan « journée »). Les persiennes à ouvrir (objet manipulable),
   les rais de lumière qui relient les sections et les pages (fil), le titre peint au pochoir (typo),
   le service qui arrive sur la table (scène du métier), le jardin en plans (profondeur), les braises du soir (particules). */
import { html, brut } from '../../outils/gabarit.mjs';
import { rais, heure, prochaine, img, palme, guirlande } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'salle-midi' };

const COUVERTS = [
  { n: 1, x: 30, y: 31, d: 41, de: 0.04, a: 0.24, v: -14 },
  { n: 2, x: 71, y: 30, d: 44, de: 0.24, a: 0.46, v: 10 },
  { n: 3, x: 31, y: 70, d: 40, de: 0.46, a: 0.68, v: -8 },
  { n: 4, x: 70, y: 70, d: 38, de: 0.68, a: 0.88, v: 12 },
];
/* Fleur de sel et herbes en pluie sur les assiettes (positions fixes, dans le repère 1000 × 1000 de la scène). */
const GRAINS = Array.from({ length: 46 }, (_, i) => {
  const c = COUVERTS[i % 4], ang = (i * 137.5) % 360, r = ((i * 53) % 100) / 100 * c.d * 4.2;
  return { x: (c.x * 10 + Math.cos(ang) * r).toFixed(1), y: (c.y * 10 + Math.sin(ang) * r).toFixed(1), r: (i % 3 ? 2.4 : 3.6), vert: i % 5 === 0, o: (i / 46).toFixed(2) };
});

export default (c) => {
  const p = prochaine(c);
  const rub = c.donnees.carte.rubriques;
  return html`
<section class="ouv lumiere" id="debut" data-ambiance="midi">
  ${img(c, 'mur-chaux', '', { grok: true, classe: 'ouv-mur', sizes: '100vw', priorite: true })}
  ${rais()}
  <div class="ouv-grille conteneur">
    <div class="ouv-texte">
      <p class="surtitre ouv-surtitre masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
      <h1 class="pochoir" data-grille="typo" data-effet="pochoir"><span class="pochoir-texte">${c.t('accueil.hero.titre')}</span></h1>
      <p class="ouv-intro masque-ecran-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
      <p class="ouv-actions" data-anime="gsap">
        ${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        ${c.lien('la-carte', { classe: 'bouton bouton--contour masque-ecran-tres-bas', texte: c.t('accueil.hero.carte') })}
      </p>
      <p class="ouv-info" data-info-cle data-anime="gsap"><span class="ouv-info-label">${c.t('accueil.hero.prochain')}</span>
        <a href="#en-ce-moment" data-sans-transition data-prochain>${p.titre}, ${p.jour.toLowerCase()} · ${p.prix}</a></p>
    </div>
    <div class="fenetre" data-iris-centre data-grille="manipuler" data-effet="persiennes" data-souris tabindex="0" role="slider"
      aria-label="${c.s('accueil.hero.persiennes')}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="82" aria-valuetext="${c.s('accueil.hero.persiennes')} : 82 %">
      <div class="fenetre-vue">
        ${img(c, 'fenetre-midi', c.s('accueil.hero.altMidi'), { classe: 'fenetre-photo fenetre-photo--midi', priorite: true, sizes: '(max-width: 760px) 92vw, 44vw' })}
        ${img(c, 'salle-soir', c.s('accueil.hero.altSoir'), { classe: 'fenetre-photo fenetre-photo--soir', priorite: true, sizes: '(max-width: 760px) 92vw, 44vw' })}
        <span class="fenetre-lumiere" aria-hidden="true"></span>
      </div>
      <div class="persiennes" aria-hidden="true">${brut(Array.from({ length: 12 }, (_, i) => `<span class="lame" style="--i:${i}"></span>`).join(''))}</div>
      <span class="fenetre-aide" aria-hidden="true"><span class="fenetre-aide-souris">${c.t('accueil.hero.aide')}</span><span class="fenetre-aide-doigt">${c.t('accueil.hero.aideTactile')}</span></span>
    </div>
  </div>
</section>

<section class="assiette service lumiere" id="cuisine" data-ambiance="midi" aria-labelledby="cuisine-titre">
  ${rais()}
  <div class="assiette__cadre conteneur">
    <div class="assiette__texte" data-tient>
      ${heure(c, 'accueil.midi')}
      <h2 class="assiette__titre" id="cuisine-titre" data-anime="lignes">${c.t('accueil.midi.titre')}</h2>
      <div class="service-chef">
        ${img(c, 'chef', c.donnees.images.chef.alt, { classe: 'service-chef-photo', sizes: '120px' })}
        <p class="assiette__intro">${c.t('accueil.midi.texte')}</p>
      </div>
    </div>
    <div class="assiette__scene table" data-tient data-grille="scene" data-effet="assiette" role="group" aria-label="${c.s('accueil.midi.scene')}">
      <div class="assiette__plat nappe" aria-hidden="true"></div>
      ${COUVERTS.map((k) => html`<div class="assiette__element couvert" data-de="${k.de}" data-a="${k.a}" style="--ox:${k.x}%;--oy:${k.y}%;--d:${k.d}%;--vrille:${k.v}deg;--hauteur:.1"><button type="button" class="couvert-bouton" data-effet="assiettes-a-toucher" aria-pressed="false" aria-label="${c.s('accueil.midi.tourner')} ${k.n}"><img src="/assets/images/assiette-${k.n}-640.webp" srcset="/assets/images/assiette-${k.n}-320.webp 320w, /assets/images/assiette-${k.n}-640.webp 640w" sizes="(max-width: 760px) 40vw, 18vw" alt="" width="640" height="640" loading="lazy" decoding="async"></button></div>`)}
      <div class="assiette__element" data-geste="pluie" data-de=".86" data-a="1" aria-hidden="true"><svg viewBox="0 0 1000 1000" aria-hidden="true">${brut(GRAINS.map((g) => `<g class="assiette__grain" style="--r:${g.o}"><circle cx="${g.x}" cy="${g.y}" r="${g.r}" fill="${g.vert ? '#6f8f3a' : '#fbf7ef'}" stroke="${g.vert ? '#4f6a28' : '#cfc6b6'}" stroke-width=".8"/></g>`).join(''))}</svg></div>
    </div>
    <ol class="assiette__etapes" data-tient>
      ${rub.map((r, i) => {
        const prix = r.plats.map((x) => parseInt(x.prix, 10)).filter((n) => !Number.isNaN(n));
        const min = Math.min(...prix), max = Math.max(...prix);
        return html`<li data-de="${COUVERTS[i].de - 0.04 < 0 ? 0 : (COUVERTS[i].de - 0.04).toFixed(2)}"><div><strong>${r.nom}</strong><span><span data-prix>${min === max ? `${min} €` : `de ${min} à ${max} €`}</span> · ${r.plats.length} ${r.note ? r.note.toLowerCase() : 'propositions'}</span></div></li>`;
      })}
      <li class="service-lien">${c.lien('la-carte', { classe: 'bouton bouton--contour', texte: c.t('accueil.midi.lien') })}</li>
    </ol>
  </div>
</section>

<section class="jardin lumiere" id="jardin" data-ambiance="apres-midi">
  ${rais()}
  <div class="jardin-grille conteneur">
    <div class="jardin-scene" data-effet="jardin-plans" data-souris>
      <div class="plan plan--fond" data-plan="0.12">${img(c, 'piscine-jour', c.donnees.images['piscine-jour'].alt, { classe: 'plan-photo', sizes: '(max-width: 760px) 92vw, 52vw' })}<span class="reflets" aria-hidden="true"></span></div>
      <div class="plan plan--milieu" data-plan="0.32">${img(c, 'piscine-palmier', c.donnees.images['piscine-palmier'].alt, { classe: 'plan-photo', sizes: '(max-width: 760px) 40vw, 18vw' })}</div>
      <div class="plan plan--devant" data-plan="0.58">${img(c, 'cocktails', c.donnees.images.cocktails.alt, { classe: 'plan-photo', sizes: '(max-width: 760px) 34vw, 14vw' })}</div>
      <svg class="plan plan--palme plan--palme-g" data-plan="0.9" viewBox="0 0 300 300" aria-hidden="true"><use href="#palme"/></svg>
      <svg class="plan plan--palme plan--palme-d" data-plan="0.75" viewBox="0 0 300 300" aria-hidden="true"><use href="#palme" transform="translate(300 0) scale(-1 1)"/></svg>
    </div>
    <div class="jardin-texte">
      ${heure(c, 'accueil.jardin')}
      <h2 data-anime="lignes">${c.t('accueil.jardin.titre')}</h2>
      <p data-anime>${c.t('accueil.jardin.texte')}</p>
      <p class="jardin-hiver" data-anime>${c.t('accueil.jardin.hiver')}</p>
      <ul class="liste-pratique" data-anime="cascade"><li>${c.t('accueil.jardin.pratique1')}</li><li>${c.t('accueil.jardin.pratique2')}</li><li>${c.t('accueil.jardin.pratique3')}</li></ul>
      <p data-anime>${c.lien('le-lieu', { ancre: 'piscine', classe: 'bouton bouton--contour', texte: c.t('accueil.jardin.lien') })}</p>
    </div>
  </div>
  <svg width="0" height="0" class="defs" aria-hidden="true"><defs><g id="palme">${brut(palme())}</g></defs></svg>
</section>

<section class="plongee" id="plongee" data-scene data-ambiance="apres-midi" aria-label="${c.s('accueil.plongee.label')}">
  <div class="plongee-collant" data-collant>
    ${img(c, 'piscine-plongee', c.donnees.images['piscine-plongee'].alt, { classe: 'plongee-photo', sizes: '100vw' })}
    <div class="plongee-mur" aria-hidden="true"><span class="plongee-trou" data-effet="plongee-piscine"></span></div>
    <p class="plongee-mot" aria-hidden="true">${c.t('accueil.plongee.mot')}</p>
  </div>
</section>

<section class="buffet lumiere" id="grand-buffet" data-ambiance="apres-midi">
  ${rais()}
  <div class="buffet-grille conteneur">
    <div class="buffet-texte">
      ${heure(c, 'accueil.buffet')}
      <h2 data-anime="lignes">${c.t('accueil.buffet.titre')}</h2>
      <p data-anime>${c.t('accueil.buffet.texte')}</p>
      <p class="buffet-prix" data-anime><strong data-prix>${c.t('accueil.buffet.prix')}</strong></p>
      <p data-anime>${c.lien('reserver', { params: 'service=midi', classe: 'bouton', texte: c.t('accueil.buffet.action') })}</p>
    </div>
    ${img(c, 'broche', c.donnees.images.broche.alt, { classe: 'buffet-photo buffet-photo--a', sizes: '(max-width: 760px) 92vw, 34vw', attrs: 'data-fx="zoom"' })}
    ${img(c, 'brasero', c.donnees.images.brasero.alt, { classe: 'buffet-photo buffet-photo--b', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-fx="vitesse"' })}
  </div>
</section>

<section class="soir lumiere" id="cheminee" data-ambiance="soir">
  ${rais()}
  <canvas class="braises" data-effet="braises" data-audit-ignorer aria-hidden="true"></canvas>
  <div class="soir-grille conteneur">
    ${img(c, 'cheminee-plat', c.donnees.images['cheminee-plat'].alt, { classe: 'soir-photo', sizes: '(max-width: 760px) 92vw, 50vw', attrs: 'data-fx="parallaxe"' })}
    <div class="soir-texte">
      ${heure(c, 'accueil.soir')}
      <h2 data-anime="lignes">${c.t('accueil.soir.titre')}</h2>
      <p data-anime>${c.t('accueil.soir.texte')}</p>
      <p data-anime>${c.lien('reserver', { params: 'service=soir', classe: 'bouton bouton--clair', texte: c.t('accueil.soir.action') })}</p>
      ${img(c, 'cheminee-dessert', c.donnees.images['cheminee-dessert'].alt, { classe: 'soir-vignette', sizes: '(max-width: 760px) 40vw, 14vw', attrs: 'data-anime="rideau"' })}
    </div>
  </div>
</section>

<section class="moment" id="en-ce-moment" data-ambiance="nuit">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('accueil.moment.surtitre')}</p>
    <h2 data-anime="lettres">${c.t('accueil.moment.titre')}</h2>
    <p class="moment-intro" data-anime>${c.t('accueil.moment.texte')}</p>
    <ul class="billets" data-anime="cascade">
      ${c.donnees.agenda.dates.map((d) => html`<li class="billet" data-date="${d.date}" id="${d.id}">
        ${img(c, d.image, c.donnees.images[d.image].alt, { classe: 'billet-photo', sizes: '(max-width: 760px) 92vw, 30vw' })}
        <div class="billet-corps">
          <p class="billet-compte" data-compte aria-live="off">${d.jour}</p>
          <h3>${d.titre}</h3>
          <p class="billet-quand">${d.jour} · ${d.moment}</p>
          <p class="billet-prix"><strong data-prix>${d.prix}</strong> ${d.precision}</p>
          <p class="billet-menu-titre">${c.t('accueil.moment.voirMenu')}</p><ul class="billet-menu">${d.menu.map((m) => html`<li>${m}</li>`)}</ul>
          <p>${c.lien('reserver', { params: d.reserver, classe: 'bouton bouton--clair', texte: c.t('accueil.moment.reserver') })}</p>
        </div>
      </li>`)}
      <li class="billet billet--emporter" data-date="${c.donnees.agenda.emporter.fin}" id="a-emporter">
        ${img(c, 'emporter', c.donnees.images.emporter.alt, { classe: 'billet-photo', sizes: '(max-width: 760px) 92vw, 30vw' })}
        <div class="billet-corps">
          <p class="billet-compte">${c.t('accueil.moment.emporterDetail')}</p>
          <h3>${c.donnees.agenda.emporter.titre}</h3>
          <p class="billet-quand">${c.t('accueil.moment.emporterTexte')}</p>
          <ul class="billet-produits">${c.donnees.agenda.emporter.produits.map((x) => html`<li><span>${x.nom}</span> <span data-prix>${x.prix}</span></li>`)}</ul>
          <p><a class="bouton bouton--clair" href="tel:${c.site.contact.telephoneLien}">${c.t('accueil.moment.emporterAction')}</a></p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="grands" id="grands-jours" data-fx="plein-ecran" style="--fx-longueur: 210svh" data-fx-depart="inset(22% 32% 16% 32% round 999px 999px 0 0)">
  <div class="grands-collant" data-collant>
    ${img(c, 'mariage-table', c.donnees.images['mariage-table'].alt, { classe: 'grands-photo', sizes: '100vw', attrs: 'data-fx-cible' })}
    <svg class="guirlande" viewBox="0 0 1200 140" preserveAspectRatio="none" data-effet="papel-picado" aria-hidden="true">${brut(guirlande())}</svg>
    <p class="grands-mots grands-mots--g" data-mot="g" aria-hidden="true" data-audit-ignorer>${c.t('accueil.grands.mot1')} · ${c.t('accueil.grands.mot2')}</p>
    <p class="grands-mots grands-mots--d" data-mot="d" aria-hidden="true" data-audit-ignorer>${c.t('accueil.grands.mot3')} · ${c.t('accueil.grands.mot4')}</p>
    <div class="grands-texte" data-fx-apres>
      <p class="surtitre">${c.t('accueil.grands.surtitre')}</p>
      <h2>${c.t('accueil.grands.titre')}</h2>
      <p>${c.t('accueil.grands.texte')}</p>
      <p>${c.lien('receptions', { classe: 'bouton bouton--clair', texte: c.t('accueil.grands.action') })}</p>
    </div>
  </div>
</section>

<section class="venir lumiere" id="venir" data-ambiance="matin">
  ${rais()}
  <div class="venir-grille conteneur">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.venir.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.venir.titre')}</h2>
      <p data-anime>${c.t('accueil.venir.texte')}</p>
      <p class="venir-adresse" data-anime><strong>${c.site.contact.adresse}</strong><br><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      <p class="venir-actions" data-anime>${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.venir.action') })} ${c.lien('contact', { classe: 'bouton bouton--contour', texte: c.t('accueil.venir.contact') })}</p>
    </div>
    ${brut(plan(c))}
  </div>
</section>
`;
};

/* Plan schématique Metz → Moineville (15 km), trait qui se dessine au défilement. */
function plan(c) {
  return `<figure class="venir-plan" data-visuel>
  <svg viewBox="0 0 520 420" role="img" aria-label="${c.s('accueil.venir.carteAlt')}" data-fx="trace">
    <path d="M40 60 C 140 40, 220 120, 300 140 S 460 120, 490 200" fill="none" stroke="currentColor" stroke-opacity=".18" stroke-width="22" stroke-linecap="round"/>
    <path data-fx-trait d="M420 330 C 360 300, 330 250, 300 220 S 220 160, 150 140" fill="none" stroke="#1F3E8C" stroke-width="5" stroke-linecap="round"/>
    <circle cx="420" cy="330" r="12" fill="#1F3E8C"/><circle cx="150" cy="140" r="16" fill="#D9682B"/>
    <text x="436" y="364" font-size="22" fill="currentColor">${c.s('accueil.venir.metz')}</text>
    <text x="96" y="110" font-size="22" fill="currentColor" font-weight="700">${c.s('accueil.venir.moineville')}</text>
    <text x="300" y="296" font-size="20" fill="#1F3E8C" font-weight="700">${c.s('accueil.venir.km')}</text>
  </svg>
</figure>`;
}
