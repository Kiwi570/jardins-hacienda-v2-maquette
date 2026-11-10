/* Formulaire de demande (réception, question), simulé par le socle ([data-formulaire]). */
import { html } from '../../outils/gabarit.mjs';

export function formulaire(c, { id = 'demande', confettis = false } = {}) {
  const sujets = [['mariage', 'sujetMariage'], ['bapteme', 'sujetBapteme'], ['anniversaire', 'sujetAnniversaire'], ['depart', 'sujetDepart'], ['seminaire', 'sujetSeminaire'], ['autre', 'sujetAutre']];
  return html`<form class="formulaire" id="${id}-form" data-formulaire${confettis ? html` data-confettis data-grille="retour"` : ''} action="#" novalidate>
  <div class="formulaire-ligne">
    <div class="champ"><label for="${id}-prenom">${c.t('contact.prenom')}</label><input id="${id}-prenom" name="prenom" autocomplete="given-name" required></div>
    <div class="champ"><label for="${id}-nom">${c.t('contact.nom')}</label><input id="${id}-nom" name="nom" autocomplete="family-name" required></div>
  </div>
  <div class="formulaire-ligne">
    <div class="champ"><label for="${id}-email">${c.t('contact.email')}</label><input id="${id}-email" name="email" type="email" autocomplete="email" required></div>
    <div class="champ"><label for="${id}-tel">${c.t('contact.telephone')}</label><input id="${id}-tel" name="telephone" type="tel" autocomplete="tel" required></div>
  </div>
  <div class="champ"><label for="${id}-sujet">${c.t('contact.sujet')}</label><select id="${id}-sujet" name="sujet">${sujets.map(([v, k]) => html`<option value="${v}">${c.t(`contact.${k}`)}</option>`)}</select></div>
  <div class="formulaire-ligne">
    <div class="champ"><label for="${id}-date">${c.t('contact.date')}</label><input id="${id}-date" name="date" type="date"></div>
    <div class="champ"><label for="${id}-invites">${c.t('contact.invites')}</label><input id="${id}-invites" name="invites" type="number" min="1" inputmode="numeric"></div>
  </div>
  <div class="champ"><label for="${id}-message">${c.t('contact.message')}</label><textarea id="${id}-message" name="message" rows="4"></textarea></div>
  <p class="formulaire-mention">${c.t('contact.donnees')}</p>
  <p><button type="submit" class="bouton">${c.t('contact.envoyer')}</button></p>
  <p class="formulaire-envoye" data-message-envoi tabindex="-1" hidden></p>
</form>`;
}
