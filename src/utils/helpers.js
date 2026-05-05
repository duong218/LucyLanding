/**
 * Build an Unsplash image URL from a photo ID or full URL.
 * @param {string} img - Unsplash photo ID (e.g. "photo-xxxx") or full URL
 * @param {string} params - Query string params
 */
export const getImageUrl = (img, params = 'w=800&q=80') => {
  if (!img) return '';
  if (img.startsWith('http') || img.startsWith('/')) return img;
  return `https://images.unsplash.com/${img}?${params}`;
};

/**
 * Smooth-scroll to a DOM element by id using the global Lenis instance.
 * Falls back to native scrollIntoView if Lenis is not initialized.
 * Special case: id="home" scrolls to the top.
 */
export const scrollToId = (id) => {
  const lenis = window.__lenis;

  if (id === 'home') {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element, { offset: -80, duration: 1.2 });
  } else {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};