/* Pont entre les modules de la bibliothèque et le socle du projet : GSAP et ses extensions sont déjà chargés
   par les pages (scripts différés, exécutés avant les modules). */
const html = document.documentElement;
export async function pret() {
  return { calme: html.classList.contains('calme'), gsap: window.gsap, ScrollTrigger: window.ScrollTrigger, SplitText: window.SplitText };
}
