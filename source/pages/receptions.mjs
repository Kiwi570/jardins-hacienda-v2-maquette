/* Réceptions : fond de nuit, guirlande de papier découpé qui se déploie, titre en papier découpé (typo),
   photo des mariés encadrée (objet d'ouverture), les fêtes en cartes, souvenirs, demande avec confettis (retour). */
import { html } from '../../outils/gabarit.mjs';
import { rais, img, guirlande } from '../gabarits/blocs.mjs';
import { brut } from '../../outils/gabarit.mjs';
import { formulaire } from '../gabarits/formulaire.mjs';

export const page = { cle: 'receptions', fichier: 'receptions', imagePartage: 'mariage-table' };

export default (c) => {
  const I = c.donnees.images;
  const types = [['type1', 'maries-piscine', 'mariage'], ['type2', 'table-bapteme', 'bapteme'], ['type3', 'gateau', 'anniversaire'], ['type4', 'table-fleurs', 'depart'], ['type5', 'pool-party', 'autre']];
  return html`
<section class="rec-ouv page-ouv lumiere" id="debut" data-ambiance="nuit">
  ${img(c, 'fete-soir', '', { grok: true, classe: 'rec-fond', sizes: '100vw', priorite: true })}
  <svg class="guirlande guirlande--haut" viewBox="0 0 1200 140" preserveAspectRatio="none" data-effet="papel-picado" aria-hidden="true">${brut(guirlande())}</svg>
  <div class="conteneur rec-ouv-grille">
    <div>
      <p class="surtitre" data-anime="gsap">${c.t('receptions.surtitre')}</p>
      <h1 class="titre-page titre-decoupe" data-grille="typo" data-effet="decoupe" aria-label="${c.s('receptions.titre')}">${brut(c.s('receptions.titre').split(' ').map((m) => `<span class="decoupe-mot" aria-hidden="true">${[...m].map((ch) => `<span class="decoupe">${ch}</span>`).join('')}</span>`).join(' '))}</h1>
      <p class="masque-ecran-bas" data-anime="gsap">${c.t('receptions.texte')}</p>
      <p class="texte-cle" data-info-cle data-anime="gsap">${c.t('receptions.info')}</p>
      <p data-anime="gsap"><a class="bouton bouton--clair" href="#demande" data-sans-transition data-action-principale>${c.t('receptions.action')}</a></p>
    </div>
    ${img(c, 'maries', I.maries.alt, { classe: 'rec-cadre', sizes: '(max-width: 760px) 70vw, 30vw', attrs: 'data-iris-centre' })}
  </div>
</section>

<section class="rec-types lumiere" id="fetes" data-ambiance="soir">
  ${rais()}
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('receptions.typesTitre')}</h2>
    <ul class="fetes" data-anime="cascade">
      ${types.map(([k, im, sujet]) => html`<li class="fete">
        ${img(c, im, I[im].alt, { classe: 'fete-photo', sizes: '(max-width: 760px) 80vw, 18vw' })}
        <h3>${c.t(`receptions.${k}`)}</h3>
        <p>${c.t(`receptions.${k}Texte`)}</p>
        <a class="fete-lien" href="#demande" data-sans-transition data-sujet="${sujet}">${c.t('receptions.action')}<span class="visuellement-cache"> : ${c.t(`receptions.${k}`)}</span></a>
      </li>`)}
    </ul>
  </div>
</section>

<section class="rec-souvenirs lumiere" id="souvenirs" data-ambiance="apres-midi">
  ${rais()}
  <div class="conteneur">
    <div class="rec-souvenirs-tete">
      <h2 data-anime="lignes">${c.t('receptions.galerieTitre')}</h2>
      <p data-anime>${c.t('receptions.galerieTexte')}</p>
    </div>
    <div class="souvenirs">
      ${img(c, 'piscine-large', I['piscine-large'].alt, { classe: 'souvenir souvenir--a', sizes: '(max-width: 760px) 92vw, 46vw', attrs: 'data-fx="parallaxe"' })}
      ${img(c, 'pergola', I.pergola.alt, { classe: 'souvenir souvenir--b', sizes: '(max-width: 760px) 60vw, 26vw', attrs: 'data-anime="rideau"' })}
      ${img(c, 'brasero', I.brasero.alt, { classe: 'souvenir souvenir--c', sizes: '(max-width: 760px) 60vw, 26vw', attrs: 'data-fx="vitesse"' })}
      ${img(c, 'buffet-fleurs', I['buffet-fleurs'].alt, { classe: 'souvenir souvenir--d', sizes: '(max-width: 760px) 92vw, 30vw', attrs: 'data-anime="rideau"' })}
    </div>
  </div>
</section>

<section class="rec-demande lumiere" id="demande" data-ambiance="matin">
  ${rais()}
  <div class="conteneur rec-demande-grille">
    <div>
      <h2 data-anime="lignes">${c.t('receptions.demandeTitre')}</h2>
      <p data-anime>${c.t('receptions.demandeTexte')}</p>
      <p data-anime>${c.t('receptions.acompte')}</p>
      <p class="texte-cle" data-anime><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      ${img(c, 'piscine-paillote', I['piscine-paillote'].alt, { classe: 'rec-demande-photo', sizes: '220px', attrs: 'data-anime="rideau"' })}
    </div>
    ${formulaire(c, { id: 'demande-reception', confettis: true })}
  </div>
</section>
`;
};
