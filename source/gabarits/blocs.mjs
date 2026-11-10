/* Blocs communs aux pages du projet. */
import { html } from '../../outils/gabarit.mjs';

/* Rais de lumière des persiennes : le fil qui relie les sections et les pages (grille wouahou, point 4).
   Couche décorative sous le contenu de la section (z-index -1 dans une section isolée), animée au défilement. */
export const rais = () => html`<div class="rais" aria-hidden="true" data-grille="fil" data-effet="rais" data-audit-ignorer><span class="rais-bandes"></span></div>`;

/* Heure de la journée et surtitre d'une section. */
export const heure = (c, cle) => html`<p class="heure" data-anime><span class="heure-chiffre">${c.t(`${cle}.heure`)}</span><span class="heure-mot">${c.t(`${cle}.surtitre`)}</span></p>`;

/* Prochain rendez-vous à la date de génération (le script du site le recalcule à la date réelle). */
export function prochaine(c) {
  const auj = new Date().toISOString().slice(0, 10);
  const dates = [...c.donnees.agenda.dates].sort((a, b) => a.date.localeCompare(b.date));
  return dates.find((d) => d.date >= auj) || dates[dates.length - 1];
}

/* Image du projet (pipeline de la bibliothèque) avec son cadrage. */
export function img(c, nom, alt, o = {}) {
  const fiche = c.donnees.images[nom] || c.donnees.images[`grok/${nom}`] || {};
  const cadrage = Array.isArray(fiche.cadrage) ? `${fiche.cadrage[0]}% ${fiche.cadrage[1]}%` : (fiche.cadrage || '50% 50%');
  return c.media({ nom: o.grok ? `grok/${nom}` : nom, alt: alt ?? fiche.alt ?? '', cadrage, classe: o.classe || '', sizes: o.sizes || '100vw', priorite: !!o.priorite, attrs: o.attrs || '', ratio: o.ratio });
}

/* Palmier dessiné (feuilles en éventail, folioles qui retombent), pour les plans du jardin. */
export function palme() {
  const cx = 150, cy = 165, out = [];
  const angles = [-172, -150, -128, -106, -84, -62, -40, -18, 4, 22];
  angles.forEach((deg, k) => {
    const a = (deg * Math.PI) / 180, L = 118 + (k % 3) * 14;
    const tx = cx + Math.cos(a) * L, ty = cy + Math.sin(a) * L + 22;
    const mx = (cx + tx) / 2, my = (cy + ty) / 2 - 26 * Math.abs(Math.cos(a));
    const pt = (t) => [(1 - t) ** 2 * cx + 2 * (1 - t) * t * mx + t * t * tx, (1 - t) ** 2 * cy + 2 * (1 - t) * t * my + t * t * ty];
    const tg = (t) => { const x = 2 * (1 - t) * (mx - cx) + 2 * t * (tx - mx), y = 2 * (1 - t) * (my - cy) + 2 * t * (ty - my); const n = Math.hypot(x, y) || 1; return [x / n, y / n]; };
    let d = `M${cx} ${cy} Q${mx.toFixed(1)} ${my.toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)}`;
    for (let t = 0.12; t <= 1.001; t += 0.055) {
      const [px, py] = pt(t), [ux, uy] = tg(t), l = 34 * Math.pow(Math.sin(Math.PI * Math.min(1, t * 0.95 + 0.05)), 0.6);
      for (const s of [-1, 1]) {
        let vx = ux * 0.55 + -uy * s * 0.85, vy = uy * 0.55 + ux * s * 0.85 + 0.55; const n = Math.hypot(vx, vy); vx /= n; vy /= n;
        d += ` M${px.toFixed(1)} ${py.toFixed(1)} q${(vx * l * 0.5).toFixed(1)} ${(vy * l * 0.3).toFixed(1)} ${(vx * l).toFixed(1)} ${(vy * l).toFixed(1)}`;
      }
    }
    out.push(`<path d="${d}" fill="none" stroke="currentColor" stroke-width="${k % 2 ? 3.2 : 3.8}" stroke-linecap="round"/>`);
  });
  return out.join('');
}

/* Guirlande de papier découpé (papel picado) : fanions de couleur, motifs ajourés. */
export function guirlande() {
  const couleurs = ['#E2A23B', '#1F3E8C', '#D9682B', '#23453A', '#E7B7C8', '#F2EFE9'];
  let s = '<path d="M0 12 Q 600 52 1200 12" stroke="#F2EFE9" stroke-width="2" fill="none"/>';
  const n = 14;
  for (let i = 0; i < n; i++) {
    const x = (i + 0.5) * (1200 / n), y = 12 + 40 * (1 - Math.pow((x - 600) / 600, 2)) * 1, w = 64, h = 88, col = couleurs[i % couleurs.length];
    s += `<g transform="translate(${(x - w / 2).toFixed(1)} ${(y - 2).toFixed(1)})"><g class="fanion" style="--i:${i}"><path d="M0 0 H${w} V${h - 14} L${w * 0.85} ${h} L${w * 0.7} ${h - 14} L${w * 0.55} ${h} L${w * 0.4} ${h - 14} L${w * 0.25} ${h} L${w * 0.1} ${h - 14} L0 ${h} Z" fill="${col}"/><circle cx="${w / 2}" cy="${h * 0.4}" r="10" fill="#1A1210" opacity=".35"/><path d="M${w * 0.2} ${h * 0.18} h${w * 0.6} M${w * 0.25} ${h * 0.62} h${w * 0.5}" stroke="#1A1210" stroke-opacity=".3" stroke-width="3" stroke-dasharray="4 5"/></g></g>`;
  }
  return s;
}

