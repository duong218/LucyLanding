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
 * Smooth-scroll to a DOM element by id.
 * Special case: id="home" scrolls to the top.
 */
export const scrollToId = (id) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};