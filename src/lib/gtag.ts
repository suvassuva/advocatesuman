export const GA_ID = "G-M1C5D8KTVV";

export const pageview = (url: string) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};
