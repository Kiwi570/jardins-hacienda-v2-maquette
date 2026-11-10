/* Réserver : ouverture compacte sur fond ocre, le formulaire d'abord (module reservation-de-table),
   le carton de table plié (objet d'ouverture) qui se pose à votre nom quand la demande part (retour physique). */
import { html, brut } from '../../outils/gabarit.mjs';
import { rais, img } from '../gabarits/blocs.mjs';

export const page = { cle: 'reserver', fichier: 'reserver', imagePartage: 'cheminee-plat' };

const reglages = (c) => ({
  fuseau: 'Europe/Paris', delai_minutes: 60, jours_a_l_avance: 90, couverts_max: 10, telephone: c.site.contact.telephone,
  services: { midi: { libelle: c.s('resa.midi'), debut: '12:00', fin: '13:45', pas: 15 }, soir: { libelle: c.s('resa.soir'), debut: '19:00', fin: '21:30', pas: 15 } },
  fermetures: { jours: [], services: {}, dates: [] },
  espaces: [{ id: 'salle', libelle: c.s('resa.salle') }, { id: 'cheminee', libelle: c.s('resa.cheminee') }, { id: 'terrasse', libelle: c.s('resa.terrasse') }],
  complets: {}, complets_simules: false, message_simule: c.s('resa.simule'),
});

export default (c) => {
  const heures = (d, f) => { const o = []; for (let m = +d.split(':')[0] * 60 + +d.split(':')[1]; m <= +f.split(':')[0] * 60 + +f.split(':')[1]; m += 15) { const h = String(Math.floor(m / 60)).padStart(2, '0'), mi = String(m % 60).padStart(2, '0'); o.push([`${h}:${mi}`, `${+h} h${mi === '00' ? '' : ' ' + mi}`]); } return o; };
  return html`
<section class="resa-ouv page-ouv lumiere" id="debut" data-ambiance="apres-midi">
  ${img(c, 'table-midi', '', { grok: true, classe: 'resa-fond', sizes: '100vw', priorite: true })}
  ${rais()}
  <div class="conteneur resa-ouv-grille">
    <div class="resa-ouv-texte">
      <p class="surtitre" data-anime="gsap">${c.t('reserver.surtitre')}</p>
      <h1 class="titre-page titre-decoupe titre-flip" data-grille="typo" data-effet="cartons" aria-label="${c.s('reserver.titre')}">${brut(`<span class="decoupe-mot" aria-hidden="true">${[...c.s('reserver.titre')].map((ch) => `<span class="decoupe">${ch}</span>`).join('')}</span>`)}</h1>
      <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('reserver.texte')}</p>
      <p class="resa-ouv-actions" data-anime="gsap"><a class="bouton" href="#formulaire" data-sans-transition data-action-principale>${c.t('reserver.choisir')}</a></p>
      <p class="texte-cle" data-info-cle data-anime="gsap"><a href="tel:${c.site.contact.telephoneLien}">${c.t('reserver.info')}</a></p>
      <p class="resa-fetes masque-ecran-tres-bas" data-anime="gsap"><span>${c.t('reserver.evenements')}</span> ${c.lien('reserver', { params: 'date=2026-12-25&service=midi', texte: c.t('reserver.noel') })} · ${c.lien('reserver', { params: 'date=2026-12-31&service=soir', texte: c.t('reserver.sylvestre') })} · ${c.lien('accueil', { ancre: 'en-ce-moment', texte: c.t('reserver.menus') })}</p>
    </div>
    <div class="carton" data-iris-centre data-grille="retour" data-effet="carton-de-table" aria-label="${c.s('reserver.carton')}" role="img">
      <div class="carton-face carton-face--haut" aria-hidden="true"></div>
      <div class="carton-face carton-face--bas">
        <img src="/assets/images/logo-h.png" alt="" width="56" height="56">
        <p class="carton-nom" data-carton-nom>${c.t('reserver.cartonNom')}</p>
        <p class="carton-quand" data-carton-quand>${c.site.nom}</p>
        <span class="carton-tampon" aria-hidden="true">${c.t('reserver.cartonPose')}</span>
      </div>
    </div>
  </div>
</section>

<section class="resa socle-cadre lumiere" id="formulaire" data-module="reservation-de-table" aria-labelledby="resa-titre" data-ambiance="midi">
  ${rais()}
  <script type="application/json" data-reservation>${brut(JSON.stringify(reglages(c)).replace(/</g, '\\u003c'))}</script>
  <noscript><style>.resa__jours{display:none}.resa__creneaux{min-height:0}.resa__compteur button{display:none}</style></noscript>
  <div class="resa__grille conteneur">
    <form class="resa__form" data-resa-form action="#" novalidate aria-labelledby="resa-titre">
      <header class="resa__tete">${img(c, 'salle-midi', c.donnees.images['salle-midi'].alt, { classe: 'resa-tete-photo', sizes: '84px', attrs: 'data-anime="rideau"' })}<h2 id="resa-titre" data-anime="lignes">${c.t('resa.titre')}</h2></header>
      <fieldset class="resa__champ" data-champ="date">
        <legend>${c.t('resa.date')}</legend>
        <div class="resa__jours" data-resa-jours></div>
        <label class="resa__date"><span>${c.t('resa.calendrier')}</span><input type="date" id="resa-date" name="date" required></label>
      </fieldset>
      <fieldset class="resa__champ" data-champ="service">
        <legend>${c.t('resa.service')}</legend>
        <div class="resa__puces">
          <label class="resa__puce"><input type="radio" name="service" value="midi" checked><span>${c.t('resa.midi')}</span><small data-note></small></label>
          <label class="resa__puce"><input type="radio" name="service" value="soir"><span>${c.t('resa.soir')}</span><small data-note></small></label>
        </div>
      </fieldset>
      <fieldset class="resa__champ" data-champ="heure">
        <legend>${c.t('resa.heure')}</legend>
        <div class="resa__creneaux" data-resa-creneaux>
          <label class="resa__date"><span>${c.t('resa.heure')}</span><select name="heure" id="resa-heure"><option value=""></option>
            <optgroup label="${c.s('resa.midi')}">${heures('12:00', '13:45').map(([v, t]) => html`<option value="${v}">${t}</option>`)}</optgroup>
            <optgroup label="${c.s('resa.soir')}">${heures('19:00', '21:30').map(([v, t]) => html`<option value="${v}">${t}</option>`)}</optgroup></select></label>
        </div>
        <p class="resa__aide" data-resa-creneaux-aide aria-live="polite"></p>
        <p class="resa__aide">${c.t('resa.heureAide')}</p>
      </fieldset>
      <div class="resa__champ" data-champ="couverts">
        <label class="resa__libelle" for="resa-couverts">${c.t('resa.couverts')}</label>
        <div class="resa__compteur">
          <button type="button" data-moins aria-label="${c.s('resa.moins')}">−</button>
          <input type="number" id="resa-couverts" name="couverts" min="1" max="10" value="2" inputmode="numeric">
          <button type="button" data-plus aria-label="${c.s('resa.plus')}">+</button>
        </div>
        <p class="resa__aide" data-resa-groupe hidden>${c.t('resa.groupe')}</p>
      </div>
      <fieldset class="resa__champ" data-champ="espace">
        <legend>${c.t('resa.espace')}</legend>
        <div class="resa__puces">
          <label class="resa__puce"><input type="radio" name="espace" value="salle" checked><span>${c.t('resa.salle')}</span><small data-note></small></label>
          <label class="resa__puce"><input type="radio" name="espace" value="cheminee"><span>${c.t('resa.cheminee')}</span><small data-note></small></label>
          <label class="resa__puce"><input type="radio" name="espace" value="terrasse"><span>${c.t('resa.terrasse')}</span><small data-note></small></label>
        </div>
      </fieldset>
      <fieldset class="resa__champ" data-champ="demande">
        <legend>${c.t('resa.demande')} <span class="resa__facultatif">${c.t('resa.facultatif')}</span></legend>
        <div class="resa__puces resa__puces--demandes">
          <label class="resa__puce"><input type="checkbox" name="demande" value="Anniversaire"><span>${c.t('resa.demandeAnniv')}</span></label>
          <label class="resa__puce"><input type="checkbox" name="demande" value="Chaise haute"><span>${c.t('resa.demandeChaise')}</span></label>
          <label class="resa__puce"><input type="checkbox" name="demande" value="Accès sans marche"><span>${c.t('resa.demandeAcces')}</span></label>
        </div>
        <label class="resa__date resa__date--large"><span>${c.t('resa.message')}</span><textarea name="message" id="resa-message" rows="3"></textarea></label>
      </fieldset>
      <fieldset class="resa__champ" data-champ="contact">
        <legend>${c.t('resa.prenom')}, ${c.t('resa.nom')}, ${c.t('resa.telephone')}</legend>
        <div class="resa__contact">
          <label><span>${c.t('resa.prenom')}</span><input type="text" id="resa-prenom" name="prenom" autocomplete="given-name" required></label>
          <label><span>${c.t('resa.nom')}</span><input type="text" id="resa-nom" name="nom" autocomplete="family-name" required></label>
          <label><span>${c.t('resa.telephone')}</span><input type="tel" id="resa-telephone" name="telephone" autocomplete="tel" required></label>
          <label><span>${c.t('resa.email')} <span class="resa__facultatif">${c.t('resa.facultatif')}</span></span><input type="email" id="resa-email" name="email" autocomplete="email"></label>
        </div>
      </fieldset>
      <p class="resa__mention">${c.t('resa.donnees')}</p>
      <p class="resa__mention">${c.t('resa.simule')}</p>
      <button type="submit" class="resa__bouton bouton">${c.t('resa.verifier')}</button>
    </form>
    <aside class="resa__recap" data-resa-recap aria-label="${c.s('resa.recap')}"></aside>
  </div>
</section>
`;
};
