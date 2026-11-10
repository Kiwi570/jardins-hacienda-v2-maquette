/* Page 404 : « La table est vide ». */
import { html } from '../../outils/gabarit.mjs';
import { rais, img } from '../gabarits/blocs.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable page-ouv lumiere" id="debut" data-ambiance="apres-midi">
  ${rais()}
  <div class="introuvable-grille conteneur">
    <div>
      <p class="surtitre" data-anime="gsap">404</p>
      <h1 class="titre-page" data-grille="typo"><span class="pochoir-texte">${c.t('introuvable.titre')}</span></h1>
      <p data-anime="gsap">${c.t('introuvable.texte')}</p>
      <p data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
    </div>
    ${img(c, c.donnees.images['grok/chaise-persiennes'] ? 'chaise-persiennes' : 'fresque', c.donnees.images['grok/chaise-persiennes'] ? c.s('introuvable.alt') : c.donnees.images.fresque.alt, { grok: !!c.donnees.images['grok/chaise-persiennes'], classe: 'introuvable-photo', priorite: true, sizes: '(max-width: 760px) 92vw, 46vw', attrs: 'data-iris-centre' })}
  </div>
</section>
`;
