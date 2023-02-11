import createCache from '@emotion/cache';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache(key = 'mui-style') {
  if (typeof document === 'undefined') {
    return createCache({ key });
  }

  const insertionTag = document.querySelector<HTMLMetaElement>(
    'meta[name="emotion-insertion-point"]'
  );
  const insertionPoint = insertionTag ?? undefined;

  return createCache({ key, insertionPoint });
}
