import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import "@/styles/globals.css";
import SEO from "../next-seo.config";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,hi' },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
