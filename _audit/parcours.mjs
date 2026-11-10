/* Parcours propres aux Jardins de l'Hacienda : filtres de la carte, réservation jusqu'au carton posé,
   persiennes au clavier, billets datés. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* Filtres de la carte : une rubrique seule, puis toute la carte ; l'adresse garde le filtre. */
    await page.goto(BASE + '/la-carte', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-filtre="desserts"]').click();
    await attendre(800);
    const f = await page.evaluate(() => ({
      visibles: [...document.querySelectorAll('[data-rubrique]')].filter((e) => !e.hidden).map((e) => e.dataset.rubrique),
      url: location.search,
    }));
    if (f.visibles.some((x) => x !== 'desserts') || !f.visibles.length) R.echec('carte : filtre', `rubriques visibles après « Desserts » : ${f.visibles.join(', ')}`, { page: '/la-carte' });
    if (!/rubrique=desserts/.test(f.url)) R.echec('carte : filtre', 'le filtre n’est pas gardé dans l’adresse', { page: '/la-carte' });
    await page.locator('[data-filtre="tout"]').click();
    await attendre(600);
    const tout = await page.evaluate(() => [...document.querySelectorAll('[data-rubrique]')].filter((e) => !e.hidden).length);
    if (tout < 4) R.echec('carte : filtre', `« Toute la carte » ne montre que ${tout} rubriques`, { page: '/la-carte' });

    /* Réservation : préremplie depuis l'adresse, vérifiée, confirmée ; le carton prend le nom. */
    await page.goto(BASE + '/reserver?date=2026-12-31&service=soir&couverts=4', { waitUntil: 'load' });
    await attendrePret(page);
    await attendre(500);
    const pre = await page.evaluate(() => ({ date: document.querySelector('[name="date"]').value, couverts: document.querySelector('[name="couverts"]').value }));
    if (pre.date !== '2026-12-31' || pre.couverts !== '4') R.echec('réservation : préremplissage', `date ${pre.date}, couverts ${pre.couverts}`, { page: '/reserver' });
    const creneau = page.locator('[data-resa-creneaux] input[type="radio"]:not([disabled])').first();
    if (await creneau.count()) await creneau.check({ force: true });
    await page.fill('[name="prenom"]', 'Camille');
    await page.fill('[name="nom"]', 'Martin');
    await page.fill('[name="telephone"]', '0612345678');
    await page.locator('.resa__bouton').click();
    await attendre(600);
    const confirmer = page.locator('[data-resa-recap] button', { hasText: /Confirmer/i }).first();
    if (await confirmer.count()) { await confirmer.click(); await attendre(1600); }
    else R.echec('réservation', 'pas de bouton « Confirmer » après la vérification', { page: '/reserver' });
    const carton = await page.evaluate(() => ({ nom: document.querySelector('[data-carton-nom]')?.textContent.trim(), pose: document.querySelector('.carton')?.classList.contains('est-pose') }));
    if (!carton.pose) R.echec('réservation : retour', 'le carton de table ne se pose pas après l’envoi', { page: '/reserver' });
    if (!/Camille/.test(carton.nom || '')) R.echec('réservation : retour', `le carton porte « ${carton.nom} » au lieu du nom saisi`, { page: '/reserver' });

    /* Persiennes au clavier : la valeur change. */
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    const avant = await page.locator('.fenetre').getAttribute('aria-valuenow');
    await page.locator('.fenetre').focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await attendre(200);
    const apres = await page.locator('.fenetre').getAttribute('aria-valuenow');
    if (avant === apres) R.echec('persiennes', 'les flèches du clavier ne changent pas l’ouverture', { page: '/' });
  } finally { await ctx.close(); }
}
