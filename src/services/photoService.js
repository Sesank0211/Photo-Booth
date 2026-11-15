const API_URL = 'https://picsum.photos/v2/list';
const PAGE_SIZE = 30;

export async function fetchPhotos(page, { signal } = {}) {
  const url = new URL(API_URL);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(PAGE_SIZE));
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Unable to load photos (HTTP ${response.status}). Please try again.`);
  const payload = await response.json();
  if (!Array.isArray(payload)) throw new Error('The photo service returned an unexpected response. Please try again.');
  return payload;
}
