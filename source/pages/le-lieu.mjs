/* Le lieu : fond vert palme, titre centré traversé par la lumière (typo, masque), puis une arche qui s'ouvre jusqu'au
   plein écran sur la salle (on entre), et les espaces un à un : salle et cheminée, terrasse, piscine, la fresque du H. */
import { html, brut } from '../../outils/gabarit.mjs';
import { rais, img, palme } from '../gabarits/blocs.mjs';

export const page = { cle: 'le-lieu', fichier: 'le-lieu', imagePartage: 'salle-large' };

export default (c) => {
  const I = c.donnees.images;
  const nuit = !!I['grok/piscine-nuit'];
  return html`
<section class="lieu-ouv page-ouv" id="debut" data-ambiance="soir">
  <svg class="lieu-palmes lieu-palmes--g" viewBox="0 0 300 300" data-visuel aria-hidden="true">${brut(palme())}</svg>
  <svg class="lieu-palmes lieu-palmes--d" viewBox="0 0 300 300" data-visuel aria-hidden="true"><g transform="translate(300 0) scale(-1 1)">${brut(palme())}</g></svg>
  <div class="conteneur lieu-ouv-texte" data-iris-centre>
    <p class="surtitre" data-anime="gsap">${c.t('lieu.surtitre')}</p>
    <h1 class="titre-page titre-lumiere" data-grille="typo" data-effet="lumiere-lettres" data-texte="${c.s('lieu.titre')}">${c.t('lieu.titre')}</h1>
    <p class="masque-ecran-bas" data-anime="gsap">${c.t('lieu.texte')}</p>
    <p class="lieu-ouv-actions" data-anime="gsap"><span class="texte-cle" data-info-cle>${c.t('lieu.info')}</span> ${c.lien('reserver', { classe: 'bouton bouton--clair', texte: c.t('lieu.action'), attrs: 'data-action-principale' })}</p>
  </div>
</section>

<section class="arche" id="entrer" data-fx="plein-ecran" style="--fx-longueur: 220svh" data-fx-depart="inset(8% 30% 0% 30% round 999px 999px 0 0)" aria-label="${c.s('lieu.arche')}">
  <div class="arche-collant" data-collant>
    ${img(c, 'salle-large', I['salle-large'].alt, { classe: 'arche-photo', sizes: '100vw', attrs: 'data-fx-cible' })}
    <div class="arche-legende" data-fx-apres><p class="surtitre">${c.t('lieu.salleTitre')}</p><p>${c.t('lieu.salleTexte')}</p></div>
  </div>
</section>

<section class="espace lumiere" id="cheminee" data-ambiance="soir">
  ${rais()}
  <div class="conteneur espace-grille">
    <div class="espace-texte">
      <h2 data-anime="lignes">${c.t('lieu.chemineeTitre')}</h2>
      <p data-anime>${c.t('lieu.chemineeTexte')}</p>
    </div>
    ${img(c, 'mur-buches', I['mur-buches'].alt, { classe: 'espace-photo espace-photo--haute', sizes: '(max-width: 760px) 70vw, 26vw', attrs: 'data-anime="rideau"' })}
    ${img(c, 'cheminee', I.cheminee.alt, { classe: 'espace-photo espace-photo--arche', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="espace espace--terrasse lumiere" id="terrasse" data-ambiance="apres-midi">
  ${rais()}
  <div class="conteneur espace-grille espace-grille--inverse">
    ${img(c, 'pergola', I.pergola.alt, { classe: 'espace-photo espace-photo--large', sizes: '(max-width: 760px) 92vw, 46vw', attrs: 'data-fx="zoom"' })}
    <div class="espace-texte">
      <h2 data-anime="lignes">${c.t('lieu.terrasseTitre')}</h2>
      <p data-anime>${c.t('lieu.terrasseTexte')}</p>
      ${img(c, 'paillote', I.paillote.alt, { classe: 'espace-photo espace-photo--vignette', sizes: '(max-width: 760px) 50vw, 16vw', attrs: 'data-fx="vitesse"' })}
    </div>
  </div>
</section>

<section class="espace espace--piscine lumiere" id="piscine" data-ambiance="apres-midi">
  ${rais()}
  <div class="conteneur">
    <div class="espace-texte espace-texte--centre">
      <h2 data-anime="lignes">${c.t('lieu.piscineTitre')}</h2>
      <p data-anime>${c.t('lieu.piscineTexte')}</p>
      <p class="jardin-hiver" data-anime>${c.t('lieu.piscineInfo')}</p>
    </div>
    <div class="piscine-mosaique">
      ${img(c, 'piscine-large', I['piscine-large'].alt, { classe: 'espace-photo mosaique-a', sizes: '(max-width: 760px) 92vw, 58vw', attrs: 'data-fx="parallaxe"' })}
      ${img(c, 'piscine-paillote', I['piscine-paillote'].alt, { classe: 'espace-photo espace-photo--arche mosaique-b', sizes: '(max-width: 760px) 44vw, 20vw', attrs: 'data-anime="rideau"' })}
      ${nuit ? img(c, 'piscine-nuit', c.s('lieu.piscineTitre'), { grok: true, classe: 'espace-photo mosaique-c', sizes: '(max-width: 760px) 60vw, 26vw', attrs: 'data-anime="rideau"' }) : img(c, 'cocktails', I.cocktails.alt, { classe: 'espace-photo mosaique-c', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-anime="rideau"' })}
    </div>
  </div>
</section>

<section class="espace espace--fresque lumiere" id="fresque" data-ambiance="matin">
  ${rais()}
  <div class="conteneur espace-grille">
    <div class="espace-texte">
      <h2 data-anime="lignes">${c.t('lieu.fresqueTitre')}</h2>
      <p data-anime>${c.t('lieu.fresqueTexte')}</p>
      <p class="fin-actions fin-actions--gauche" data-anime>${c.lien('reserver', { classe: 'bouton', texte: c.t('lieu.action') })} ${c.lien('contact', { classe: 'bouton bouton--contour', texte: c.t('lieu.contact') })}</p>
    </div>
    ${img(c, 'fresque', I.fresque.alt, { classe: 'espace-photo espace-photo--haute', sizes: '(max-width: 760px) 70vw, 28vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>
`;
};
