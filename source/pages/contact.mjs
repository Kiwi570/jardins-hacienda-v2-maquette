/* Contact et accès : le numéro de téléphone peint en très grand (typo), bandeau panoramique de l'allée,
   le chemin depuis Metz qui se dessine, les informations pratiques, le formulaire. */
import { html } from '../../outils/gabarit.mjs';
import { rais, img } from '../gabarits/blocs.mjs';
import { formulaire } from '../gabarits/formulaire.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'enseigne' };

export default (c) => {
  const k = c.site.contact, I = c.donnees.images;
  return html`
<section class="contact-ouv page-ouv lumiere" id="debut" data-ambiance="matin">
  ${rais()}
  <div class="conteneur contact-ouv-texte" data-iris-centre>
    <p class="surtitre" data-anime="gsap">${c.t('contact.surtitre')}</p>
    <h1 class="titre-page titre-tel" data-grille="typo" data-effet="pochoir"><a href="tel:${k.telephoneLien}" class="pochoir-texte" data-action-principale>${c.t('contact.titre')}</a></h1>
    <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('contact.texte')}</p>
    <p class="contact-ouv-ligne" data-anime="gsap"><span class="texte-cle" data-info-cle>${c.t('contact.info')}</span> ${c.lien('reserver', { classe: 'bouton', texte: c.t('contact.reserver') })} <a class="bouton bouton--contour" href="${k.itineraire}" target="_blank" rel="noopener">${c.t('commun.itineraire')}</a></p>
  </div>
  ${img(c, 'enseigne', I.enseigne.alt, { classe: 'contact-bandeau', sizes: '100vw', priorite: true, attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
</section>

<section class="contact-trajet lumiere" id="acces" data-ambiance="matin">
  ${rais()}
  <div class="conteneur contact-trajet-grille">
    <div>
      <h2 data-anime="lignes">${c.t('contact.trajetTitre')}</h2>
      <p data-anime>${c.t('contact.trajetTexte')}</p>
      <p class="venir-adresse" data-anime><strong>${k.adresse}</strong><br><a href="tel:${k.telephoneLien}">${k.telephone}</a></p>
      ${img(c, 'fresque', I.fresque.alt, { classe: 'contact-enseigne', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-anime="rideau"' })}
    </div>
    <figure class="venir-plan contact-plan" data-visuel>
      <svg viewBox="0 0 560 520" role="img" aria-label="${c.s('accueil.venir.carteAlt')}" data-fx="trace">
        <path data-fx-trait d="M380 330 C 330 300, 300 260, 260 230 S 190 190, 150 170" fill="none" stroke="#1F3E8C" stroke-width="5" stroke-linecap="round"/>
        <path data-fx-trait d="M380 330 L 410 470" fill="none" stroke="#1C1A17" stroke-opacity=".35" stroke-width="3" stroke-dasharray="6 8"/>
        <path data-fx-trait d="M380 330 L 360 90" fill="none" stroke="#1C1A17" stroke-opacity=".35" stroke-width="3" stroke-dasharray="6 8"/>
        <path data-fx-trait d="M360 90 L 250 30" fill="none" stroke="#1C1A17" stroke-opacity=".35" stroke-width="3" stroke-dasharray="6 8"/>
        <circle cx="380" cy="330" r="11" fill="#1F3E8C"/><circle cx="150" cy="170" r="16" fill="#D9682B"/>
        <circle cx="410" cy="470" r="7" fill="#1C1A17"/><circle cx="360" cy="90" r="7" fill="#1C1A17"/><circle cx="250" cy="30" r="7" fill="#1C1A17"/>
        <text x="396" y="336" font-size="22" fill="currentColor" font-weight="700">${c.s('accueil.venir.metz')}</text>
        <text x="40" y="208" font-size="22" fill="currentColor" font-weight="700">${c.s('accueil.venir.moineville')}</text>
        <text x="236" y="276" font-size="20" fill="#1F3E8C" font-weight="700">${c.s('accueil.venir.km')}</text>
        <text x="424" y="476" font-size="18" fill="currentColor">${c.s('contact.nancy')}</text>
        <text x="376" y="96" font-size="18" fill="currentColor">${c.s('contact.thionville')}</text>
        <text x="270" y="36" font-size="18" fill="currentColor">${c.s('contact.luxembourg')}</text>
      </svg>
    </figure>
  </div>
</section>

<section class="contact-infos lumiere" id="infos" data-ambiance="apres-midi">
  ${rais()}
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('contact.infosTitre')}</h2>
    ${img(c, 'paillote', I.paillote.alt, { classe: 'contact-photo', sizes: '220px', attrs: 'data-anime="rideau"' })}
    <ul class="infos" data-anime="cascade">
      ${[1, 2, 3, 4].map((n) => html`<li class="info"><h3>${c.t(`contact.info${n}Titre`)}</h3><p>${c.t(`contact.info${n}`)}</p></li>`)}
      <li class="info info--horaires"><h3>${c.t('contact.horairesTitre')}</h3><p>${c.t('contact.horaires')}</p></li>
    </ul>
  </div>
</section>

<section class="contact-form lumiere" id="ecrire" data-ambiance="midi">
  ${rais()}
  <div class="conteneur rec-demande-grille">
    <div>
      <h2 data-anime="lignes">${c.t('contact.formTitre')}</h2>
      <p data-anime>${c.t('contact.formTexte')}</p>
      <p data-anime>${c.t('contact.reseaux')}</p>
      ${img(c, 'table-fleurs', I['table-fleurs'].alt, { classe: 'contact-photo', sizes: '220px', attrs: 'data-anime="rideau"' })}
      <p class="pied-reseaux contact-reseaux" data-anime><a href="${k.facebook}" target="_blank" rel="noopener">${c.t('commun.facebook')}</a> <a href="${k.instagram}" target="_blank" rel="noopener">${c.t('commun.instagram')}</a></p>
    </div>
    ${formulaire(c, { id: 'contact' })}
  </div>
</section>
`;
};
