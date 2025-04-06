import { useEffect, useState } from "react";

const LanguageToggle = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Modern styling for the Google Translate bar
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate {
        background-color: #111 !important;
        border: none !important;
        height: 40px !important;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      }
      .goog-te-banner-frame.skiptranslate .goog-te-menu-value {
        font-family: sans-serif !important;
        color: #fff !important;
      }
      body {
        top: 0px !important;
      }
      .goog-logo-link, 
      .goog-te-gadget span {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "hi" : "en";
    setLang(newLang);

    const interval = setInterval(() => {
      const selectEl = document.querySelector("select.goog-te-combo");
      if (selectEl) {
        selectEl.value = newLang;
        selectEl.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <button
        onClick={toggleLanguage}
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {lang === "en" ? "हिंदी" : "English"}
      </button>
    </div>
  );
};

export default LanguageToggle;