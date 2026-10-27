import { useEffect } from 'react';

// In-app navigation: update the URL and let App's popstate listener re-route.
export const navigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

const setMetaDescription = (content: string) => {
  let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = 'description';
    document.head.appendChild(tag);
  }
  tag.content = content;
};

// Sets the page title and meta description, restoring the previous values on unmount.
export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? '';
    document.title = title;
    setMetaDescription(description);
    return () => {
      document.title = prevTitle;
      setMetaDescription(prevDescription);
    };
  }, [title, description]);
};
