/* Les Jardins de l'Hacienda — effets propres au client (direction « Les persiennes »).
   Le socle gère l'ouverture, le voile (forme « persienne », ajoutée dans socle/voile.js), l'en-tête, le menu, le mode calme,
   les boucles et la bibliothèque d'effets. Ici : persiennes à manipuler, rais de lumière (fil), titre peint au pochoir,
   service sur la table (module assiette), jardin en plans, braises, billets datés, guirlande, carte qui se déplie,
   arche du lieu, filtres de la carte, carton de table, confettis. Chaque effet porte data-effet="nom-du-plan". */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=1';
import { init as initAssiette } from './modules/assiette-qui-se-dresse/module.js?v=1';
import { init as initReservation } from './modules/reservation-de-table/module.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const html = document.documentElement;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const souris = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Heure du lieu (Moineville, Europe/Paris) : midi ou soir ---------- */
function heureLieu() {
  const p = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  return +(p.find((x) => x.type === 'hour') || { value: 12 }).value;
}
function jourLieu() {
  const p = new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  return p.slice(0, 10);
}
const h = heureLieu();
if (h >= 18 || h < 7) html.dataset.moment = 'soir';

/* ---------- Persiennes : on les ouvre du doigt ou à la souris, avec élan ---------- */
function persiennes() {
  const f = $('.fenetre');
  if (!f) return null;
  const lames = $$('.lame', f);
  let ouv = 0.82, vitesse = 0, saisie = null, dernier = 0, vagueY = -1, vagues = lames.map(() => 0);
  const poser = (v) => {
    ouv = Math.min(1, Math.max(0, v));
    f.style.setProperty('--ouv', ouv.toFixed(4));
    f.setAttribute('aria-valuenow', String(Math.round(ouv * 100)));
    f.setAttribute('aria-valuetext', `${f.getAttribute('aria-label')} : ${Math.round(ouv * 100)} %`);
  };
  const toucher = () => f.classList.add('touchee');
  f.addEventListener('pointerdown', (e) => {
    if (etat.calme) return;
    saisie = { x: e.clientX, y: e.clientY, h: f.clientHeight || 400, type: e.pointerType };
    dernier = performance.now(); vitesse = 0;
    if (e.pointerType === 'mouse') { f.setPointerCapture(e.pointerId); f.classList.add('saisie'); }
    toucher();
  });
  f.addEventListener('pointermove', (e) => {
    if (souris && e.pointerType === 'mouse') { const r = f.getBoundingClientRect(); vagueY = (e.clientY - r.top) / r.height; }
    if (!saisie) return;
    /* Au doigt : seul le glissement horizontal ouvre (le défilement vertical reste libre). À la souris : les deux. */
    const dx = e.clientX - saisie.x, dy = e.clientY - saisie.y;
    const d = saisie.type === 'mouse' ? (dy + dx * 0.6) : dx;
    const t = performance.now(), dt = Math.max(8, t - dernier);
    const delta = d / (saisie.h * 0.9);
    vitesse = delta / (dt / 1000) * 0.6 + vitesse * 0.4;
    poser(ouv + delta);
    saisie.x = e.clientX; saisie.y = e.clientY; dernier = t;
  });
  const lacher = () => { if (!saisie) return; saisie = null; f.classList.remove('saisie'); };
  f.addEventListener('pointerup', lacher);
  f.addEventListener('pointercancel', lacher);
  f.addEventListener('pointerleave', () => { vagueY = -1; });
  f.addEventListener('keydown', (e) => {
    const pas = { ArrowUp: 0.1, ArrowRight: 0.1, ArrowDown: -0.1, ArrowLeft: -0.1, PageUp: 0.25, PageDown: -0.25 }[e.key];
    if (pas !== undefined) { e.preventDefault(); vitesse = 0; poser(ouv + pas); toucher(); }
    if (e.key === 'Home') { e.preventDefault(); poser(0); }
    if (e.key === 'End') { e.preventDefault(); poser(1); }
  });
  /* Élan après le geste, puis petite vague des lames autour de la souris (lissée : se stabilise d'elle-même). */
  boucle(f, (dt) => {
    if (!saisie && Math.abs(vitesse) > 0.002) {
      poser(ouv + vitesse * dt);
      vitesse *= Math.pow(0.04, dt);
      if (ouv <= 0 || ouv >= 1) vitesse = 0;
    }
    lames.forEach((l, i) => {
      const cible = vagueY < 0 ? 0 : Math.max(0, 1 - Math.abs((i + 0.5) / lames.length - vagueY) * 4) * 9;
      const v = vagues[i] + (cible - vagues[i]) * Math.min(1, dt * 8);
      if (Math.abs(v - vagues[i]) > 0.01 || (cible === 0 && vagues[i] !== 0)) { vagues[i] = Math.abs(v) < 0.02 ? 0 : v; l.style.setProperty('--vague', vagues[i].toFixed(2)); }
    });
  });
  return { f, lames, poser };
}

/* ---------- Rais de lumière : ils glissent et tournent avec le défilement (le fil des pages) ---------- */
function rais() {
  if (!gsap || !ST || etat.calme) return;
  $$('.rais').forEach((r) => {
    const b = $('.rais-bandes', r), s = r.parentElement;
    ST.create({ trigger: s, start: 'top bottom', end: 'bottom top', scrub: 0.4,
      onUpdate: (x) => { const p = x.progress; b.style.transform = `translate3d(0, ${((p - 0.5) * -160).toFixed(1)}px, 0) rotate(${((p - 0.5) * 7).toFixed(2)}deg)`; } });
  });
}

/* ---------- Titre peint au pochoir ---------- */
const pochoirs = () => $$('.pochoir-texte');
function peindre(tl, a, duree = 1.1) {
  const els = pochoirs();
  if (!els.length) return;
  tl.fromTo(els, { '--peint': '100%' }, { '--peint': '0%', duration: duree, ease: 'power2.inOut', stagger: 0.15 }, a);
}

/* ---------- Jardin en plans : profondeur au défilement, et à la souris ---------- */
function jardin() {
  const sc = $('.jardin-scene');
  if (!sc || !gsap || etat.calme) return;
  const plans = $$('[data-plan]', sc), reflets = $('.reflets', sc);
  let mx = 0, my = 0, cx = 0, cy = 0, p = 0.5;
  ST.create({ trigger: sc, start: 'top bottom', end: 'bottom top', scrub: 0.3, onUpdate: (x) => { p = x.progress; } });
  if (souris) sc.addEventListener('pointermove', (e) => { const r = sc.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - 0.5; my = (e.clientY - r.top) / r.height - 0.5; });
  sc.addEventListener('pointerleave', () => { mx = 0; my = 0; });
  boucle(sc, (dt) => {
    cx += (mx - cx) * Math.min(1, dt * 5); cy += (my - cy) * Math.min(1, dt * 5);
    if (Math.abs(cx) < 0.0005 && mx === 0) cx = 0;
    if (Math.abs(cy) < 0.0005 && my === 0) cy = 0;
    plans.forEach((el) => {
      const z = +el.dataset.plan;
      el.style.transform = `translate3d(${(-cx * 60 * z).toFixed(1)}px, ${((0.5 - p) * 220 * z - cy * 40 * z).toFixed(1)}px, 0) scale(${(1 + z * 0.06).toFixed(3)})`;
    });
    if (reflets) reflets.style.setProperty('--reflet-x', `${(20 + p * 60).toFixed(1)}%`);
  });
}

/* ---------- Braises de la cheminée ---------- */
function braises() {
  const cv = $('canvas.braises');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let w = 0, hh = 0, dpr = 1;
  const taille = () => { dpr = Math.min(1.25, devicePixelRatio || 1); w = cv.clientWidth; hh = cv.clientHeight; cv.width = Math.round(w * dpr); cv.height = Math.round(hh * dpr); };
  taille();
  new ResizeObserver(taille).observe(cv);
  const n = innerWidth < 760 ? 36 : 80;
  const pts = Array.from({ length: n }, (_, i) => ({ x: Math.random(), y: Math.random(), v: 0.03 + Math.random() * 0.07, r: 0.6 + Math.random() * 2.2, ph: Math.random() * 6.28, a: 0.4 + Math.random() * 0.6 }));
  boucle(cv, (dt, t) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, hh);
    pts.forEach((q) => {
      q.y -= q.v * dt; if (q.y < -0.05) { q.y = 1.05; q.x = Math.random(); }
      const x = (q.x + Math.sin(t * 0.8 + q.ph) * 0.015) * w, y = q.y * hh;
      const vie = Math.min(1, (1.05 - q.y) * 2) * Math.min(1, q.y * 3);
      ctx.globalAlpha = q.a * vie;
      ctx.fillStyle = q.r > 1.8 ? '#F3B35E' : '#D9682B';
      ctx.beginPath(); ctx.arc(x, y, q.r, 0, 6.283); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }, { lourde: true });
}

/* ---------- Billets datés : compte à rebours à la date du lieu, prochain rendez-vous ---------- */
function billets() {
  const auj = jourLieu();
  const jours = (d) => Math.round((Date.parse(d + 'T12:00:00Z') - Date.parse(auj + 'T12:00:00Z')) / 864e5);
  $$('.billet[data-date]').forEach((b) => {
    const n = jours(b.dataset.date), c = $('[data-compte]', b);
    if (n < 0) b.classList.add('est-passe');
    if (!c) return;
    c.textContent = n < 0 ? 'Terminé' : n === 0 ? "Aujourd'hui" : n === 1 ? 'Demain' : `Dans ${n} jours`;
  });
  const lien = $('[data-prochain]');
  const prochain = $$('.billet[data-date]:not(.billet--emporter)').find((b) => jours(b.dataset.date) >= 0);
  if (lien && prochain) {
    const a = $('a.bouton', prochain), t = $('h3', prochain), q = $('.billet-quand', prochain);
    const pr = $('.billet-prix strong', prochain);
    if (t && q) lien.textContent = `${t.textContent}, ${q.textContent.split(' · ')[0].toLowerCase()}${pr ? ` · ${pr.textContent}` : ''}`;
  }
}

/* ---------- Guirlande de papier découpé : les fanions se balancent ---------- */
function guirlande() {
  const g = $('.guirlande');
  if (!g) return;
  const f = $$('.fanion', g);
  boucle(g, (dt, t) => { f.forEach((el, i) => { el.style.transform = `rotate(${(Math.sin(t * 1.6 + i * 0.7) * 6).toFixed(2)}deg)`; }); });
}

/* ---------- Les grands jours : les mots s'écartent et s'effacent pendant que la photo s'ouvre ---------- */
function grandsMots() {
  const g = $('.grands');
  if (!g || !gsap || etat.calme) return;
  const mots = $$('[data-mot]', g);
  const tl = gsap.timeline({ scrollTrigger: { trigger: g, start: 'top top', end: 'bottom bottom', scrub: 0.6 } });
  mots.forEach((m) => tl.fromTo(m, { xPercent: 0, autoAlpha: 1 }, { xPercent: m.dataset.mot === 'g' ? -80 : 80, autoAlpha: 0, ease: 'power1.in', duration: 0.55 }, 0));
}

/* ---------- Boost : assiettes à toucher (elles pivotent et se soulèvent) ---------- */
function assiettesATouhcer() {
  $$('.couvert-bouton').forEach((b) => {
    let tours = 0;
    b.addEventListener('click', () => {
      tours += 1;
      const leve = b.getAttribute('aria-pressed') !== 'true';
      $$('.couvert-bouton[aria-pressed="true"]').forEach((x) => { if (x !== b) x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', String(leve));
      b.style.setProperty('--tour', `${tours * 360}deg`);
    });
  });
}

/* ---------- Boost : plongée dans la piscine ---------- */
function plongee() {
  const p = $('.plongee');
  if (!p || !gsap || !ST || etat.calme) return;
  const trou = $('.plongee-trou', p), photo = $('.plongee-photo img', p), col = $('.plongee-collant', p);
  ST.create({ trigger: p, start: 'top top', end: 'bottom bottom', scrub: 0.5, onUpdate: (x) => {
    const q = x.progress, e = q * q;
    trou.style.setProperty('--ouvre', (1 + e * 9).toFixed(3));
    photo.style.setProperty('--zoom', (1.35 - q * 0.3).toFixed(3));
    col.style.setProperty('--mot', String(Math.max(0, Math.min(1, (q - 0.55) * 4) - Math.max(0, (q - 0.85) * 6)).toFixed(3)));
  } });
}

/* ---------- Boost : le soir tombe sur toute la page (l'en-tête suit l'heure de la section) ---------- */
function soirPartout() {
  if (!ST || etat.calme) return;
  const classes = { 'apres-midi': 'entete-sable', soir: 'entete-nuit', nuit: 'entete-nuit' };
  $$('main [data-ambiance]').forEach((s) => {
    const c = classes[s.dataset.ambiance] || '';
    const s2 = s.classList.contains('buffet') ? 'entete-blond' : c;
    ST.create({ trigger: s, start: () => `top ${Math.round((parseFloat(getComputedStyle(html).getPropertyValue('--entete-h')) || 64) / 2)}px`, end: 'bottom top+=32',
      onToggle: (x) => { if (x.isActive) { html.classList.remove('entete-nuit', 'entete-sable', 'entete-blond'); if (s2) html.classList.add(s2); } } });
  });
}

/* ---------- La carte : volets qui se déplient, rubriques qui se recomposent ---------- */
function volets() {
  const v = $$('.volet');
  if (!v.length || !gsap) return null;
  return v;
}
function filtres() {
  const zone = $('[data-filtres]');
  if (!zone) return;
  const boutons = $$('button[data-filtre]', zone), grille = $('[data-carte-grille]');
  const cartes = $$('[data-rubrique]', grille);
  const appliquer = (id, anime = true) => {
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === id)));
    const avant = new Map(cartes.map((c) => [c, c.getBoundingClientRect()]));
    cartes.forEach((c) => { c.hidden = id !== 'tout' && c.dataset.rubrique !== id; });
    const u = new URL(location.href); if (id === 'tout') u.searchParams.delete('rubrique'); else u.searchParams.set('rubrique', id); history.replaceState(history.state, '', u);
    if (!anime || etat.calme || !gsap) { ST && ST.refresh(); return; }
    cartes.filter((c) => !c.hidden).forEach((c) => {
      const a = avant.get(c), b = c.getBoundingClientRect();
      if (a && a.width) gsap.fromTo(c, { x: a.left - b.left, y: a.top - b.top }, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' });
      else gsap.fromTo(c, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' });
    });
    requestAnimationFrame(() => ST && ST.refresh());
  };
  boutons.forEach((b) => b.addEventListener('click', () => appliquer(b.dataset.filtre)));
  $$('[data-rubrique-lien]').forEach((a) => a.addEventListener('click', () => appliquer(a.dataset.rubriqueLien, false)));
  const depart = new URLSearchParams(location.search).get('rubrique');
  if (depart && boutons.some((b) => b.dataset.filtre === depart)) appliquer(depart, false);
}

/* ---------- Le lieu : la lumière glisse à travers les lettres du titre ---------- */
function lettresLumiere() {
  const t = $('.titre-lumiere');
  if (!t || !gsap || etat.calme) return;
  ST.create({ trigger: t, start: 'top 90%', end: 'bottom top', scrub: 0.5, onUpdate: (x) => t.style.setProperty('--l', `${(x.progress * 160 - 30).toFixed(1)}%`) });
}

/* ---------- Réceptions : confettis quand la demande part ---------- */
function confettis(depuis) {
  if (etat.calme) return;
  const cv = document.createElement('canvas');
  cv.className = 'confettis'; cv.setAttribute('aria-hidden', 'true'); cv.setAttribute('data-audit-ignorer', '');
  document.body.appendChild(cv);
  const ctx = cv.getContext('2d'), dpr = Math.min(1.5, devicePixelRatio || 1);
  cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  const r = depuis.getBoundingClientRect(), x0 = r.left + r.width / 2, y0 = r.top + r.height / 2;
  const coul = ['#E2A23B', '#1F3E8C', '#D9682B', '#E7B7C8', '#23453A', '#F2EFE9'];
  const pts = Array.from({ length: 90 }, () => ({ x: x0, y: y0, vx: (Math.random() - 0.5) * 900, vy: -300 - Math.random() * 700, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 12, c: coul[(Math.random() * coul.length) | 0], w: 6 + Math.random() * 8 }));
  let t0 = 0;
  const pas = (t) => {
    const dt = t0 ? Math.min(0.04, (t - t0) / 1000) : 0.016; t0 = t;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, innerWidth, innerHeight);
    let vivants = 0;
    pts.forEach((p) => { p.vy += 900 * dt; p.vx *= 0.99; p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt; if (p.y < innerHeight + 20) vivants++;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.w / 4, p.w, p.w / 2); ctx.restore(); });
    if (vivants) requestAnimationFrame(pas); else cv.remove();
  };
  requestAnimationFrame(pas);
  setTimeout(() => cv.remove(), 4000);
}
function demandes() {
  $$('form[data-formulaire]').forEach((f) => {
    f.addEventListener('submit', () => {
      setTimeout(() => { const m = f.querySelector('[data-message-envoi]'); const b = f.querySelector('[type="submit"]'); if (m && !m.hidden && b && f.hasAttribute('data-confettis')) confettis(b); }, 40);
    });
  });
  /* Cartes des fêtes : le sujet est choisi dans la demande. */
  $$('[data-sujet]').forEach((a) => a.addEventListener('click', () => { const s = $('select[name="sujet"]'); if (s) s.value = a.dataset.sujet; }));
}

/* ---------- Réserver : le carton de table se plie à votre nom et se pose ---------- */
function carton() {
  const resa = $('[data-module="reservation-de-table"]');
  if (!resa) return;
  initReservation(resa).catch((e) => console.error(e));
  const c = $('.carton'), nom = $('[data-carton-nom]'), quand2 = $('[data-carton-quand]');
  const form = $('[data-resa-form]', resa);
  if (form && nom) form.addEventListener('input', () => {
    const p = (form.prenom && form.prenom.value || '').trim(), n = (form.nom && form.nom.value || '').trim();
    if (p || n) nom.textContent = `${p} ${n}`.trim();
  });
  resa.addEventListener('reservation:envoyee', (e) => {
    const d = e.detail || {};
    if (nom && (d.prenom || d.nom)) nom.textContent = `${d.prenom || ''} ${d.nom || ''}`.trim();
    if (quand2 && d.date) quand2.textContent = [d.date.split('-').reverse().join('/'), d.heure].filter(Boolean).join(' · ');
    if (!c) return;
    c.classList.add('est-pose');
    if (gsap && !etat.calme) {
      const r = c.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) c.scrollIntoView({ block: 'center', behavior: 'smooth' });
      gsap.timeline()
        .fromTo(c, { rotateX: -70, y: -60, scale: 1.2 }, { rotateX: 0, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.6)' })
        .fromTo('.carton-tampon', { scale: 2.4, opacity: 0, rotate: -24 }, { scale: 1, opacity: 1, rotate: -12, duration: 0.35, ease: 'power3.in' }, 0.55);
    }
  });
}

/* ---------- Démarrage ---------- */
let P = null, assiette = null;
demarrer({
  preparer() {
    P = persiennes();
    rais();
    jardin();
    braises();
    billets();
    guirlande();
    grandsMots();
    assiettesATouhcer();
    plongee();
    soirPartout();
    filtres();
    lettresLumiere();
    demandes();
    carton();
    const a = $('#cuisine');
    if (a) initAssiette(a, { longueur: 1.6 }).then((x) => { assiette = x; if (ST) { ST.sort(); ST.refresh(); } }).catch((e) => console.error(e));
    lames(false);
    etatsDepart();
    if (gsap && !etat.calme) volets();
  },
  /* Intro (moins de 3 s) qui finit sur la page : le H glisse jusqu'à l'objet d'ouverture, le panneau s'ouvre depuis lui,
     puis sur l'accueil les persiennes s'ouvrent lame par lame et la lumière entre ; le titre se peint au pochoir. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-nom', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, 0.05)
      .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.2)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.25 }, 0.8);
    versObjet(tl, { a: 0.95 });
    tl.call(() => ouvrirLames(), null, 1.55);
    peindre(tl, 1.5);
    entrees(tl, 1.75);
    return tl;
  },
  etatFinal() {
    lames(true);
    pochoirs().forEach((el) => el.style.setProperty('--peint', '0%'));
    if (gsap) gsap.set('[data-anime="gsap"], .volet, .carton, .decoupe', { clearProps: 'transform,opacity' });
    $$('[data-anime="gsap"], .titre-decoupe').forEach((el) => el.classList.add('vu'));
  },
  arrivee() {
    if (!gsap) return;
    ouvrirLames();
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    peindre(tl, 0.1, 0.9);
    entrees(tl, 0.25);
  },
});

/* États de départ posés dès la préparation (sous l'intro ou le voile) : jamais visibles puis cachés. */
function etatsDepart() {
  if (!gsap || etat.calme || html.dataset.arrivee === 'retour') return;
  const v = $$('.volet');
  if (v.length) gsap.set(v, { rotateY: (i) => (i === 1 ? 0 : i === 0 ? 100 : -100) });
  const c = $('.carton');
  if (c) gsap.set(c, { rotateX: -88 });
}

/* Lames fermées avant l'intro (--o à 0), puis ouvertes une à une. */
function lames(ouvertes) {
  const l = $$('.fenetre .lame');
  l.forEach((x) => x.style.setProperty('--o', ouvertes || etat.calme || !gsap ? '1' : '0'));
}
function ouvrirLames() {
  const l = $$('.fenetre .lame');
  if (!l.length || !gsap) return;
  gsap.fromTo(l, { '--o': 0 }, { '--o': 1, duration: 0.9, stagger: 0.045, ease: 'power2.inOut' });
}
/* Arrivée des éléments de premier écran (data-anime="gsap") et des volets de la carte. */
function entrees(tl, a) {
  const els = $$('main [data-anime="gsap"]').filter((e) => !e.classList.contains('tampon') && !e.classList.contains('volet'));
  const tp = $('main .tampon[data-anime="gsap"]');
  if (tp) tl.fromTo(tp, { scale: 1.6, opacity: 0, rotate: -9 }, { scale: 1, opacity: 1, rotate: -2, duration: 0.34, ease: 'power4.in', onStart: () => tp.classList.add('vu') }, a + 0.15);
  const fl = $$('.titre-flip .decoupe');
  if (fl.length) tl.fromTo(fl, { rotateX: -95, opacity: 0 }, { rotateX: 0, opacity: 1, duration: 0.55, stagger: 0.05, ease: 'back.out(1.6)', onStart: () => $('.titre-flip').classList.add('vu') }, a + 0.1);
  const dc = $$('.titre-decoupe:not(.titre-flip) .decoupe');
  if (dc.length) tl.fromTo(dc, { yPercent: -90, rotate: (i) => (i % 2 ? 18 : -14), opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, duration: 0.7, stagger: 0.035, ease: 'back.out(1.8)', onStart: () => $('.titre-decoupe:not(.titre-flip)').classList.add('vu') }, a);
  if (els.length) tl.fromTo(els, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, onStart: () => els.forEach((e) => e.classList.add('vu')) }, a);
  const v = $$('.volet');
  if (v.length) tl.fromTo(v, { rotateY: (i) => (i === 1 ? 0 : i === 0 ? 100 : -100), opacity: (i) => (i === 1 ? 1 : 0) }, { rotateY: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.inOut', onStart: () => v.forEach((x) => x.classList.add('vu')) }, a - 0.1);
  const c = $('.carton');
  if (c) tl.fromTo(c, { rotateX: -88 }, { rotateX: 0, duration: 0.8, ease: 'back.out(1.4)' }, a);
}
quand('pret', () => {});
