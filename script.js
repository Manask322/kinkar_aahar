const translations = {
  en: {
    "nav.product": "Product",
    "nav.story": "Our Story",
    "nav.contact": "Contact",
    "hero.eyebrow": "Organic • Homemade • Premium",
    "hero.title": "Tradition in Every Jar.",
    "hero.lead": "Experience the authentic taste of tradition. Our signature Nimbu Loncha is sun-cured for 45 days, using only Himalayan salt and hand-ground spices.",
    "hero.ctaPrimary": "Order Now",
    "hero.ctaSecondary": "Discover More",
    "lemon.title": "The Art of Nimbu Loncha",
    "lemon.card1Title": "45 Days Sun-Cured",
    "lemon.card1Text": "Slowly matured under the sun to develop a rich, complex flavour profile that quick-pickling cannot achieve.",
    "lemon.card2Title": "Himalayan Salt",
    "lemon.card2Text": "We use mineral-rich pink salt instead of processed table salt for better health and superior taste.",
    "lemon.card3Title": "Zero Preservatives",
    "lemon.card3Text": "Preserved naturally with salt, spices, and oil. No artificial colours, vinegar, or chemicals.",
    "ingredients.title": "Pure Ingredients",
    "ingredients.item1": "Ratnagiri Lemons",
    "ingredients.item2": "Himalayan Salt",
    "ingredients.item3": "Cold Pressed Groundnut Oil",
    "ingredients.item4": "Hand-pounded Masala",
    "story.title": "Our Story",
    "story.text": "“Kinkar Aahar brings you the purity of traditional Indian recipes, crafted with clean ingredients and no shortcuts. Every jar is made in small batches, sun-cured, and prepared with the same love and care you would find in a family kitchen.”",
    "roadmap.title": "Coming Soon to Your Pantry",
    "roadmap.item1": "Authentic Masalas & Thecha",
    "roadmap.item2": "Festive Gift Hampers",
    "footer.title": "Bring Tradition Home",
    "footer.text": "Ready to taste the difference? Contact us to place your order.",
    "footer.button": "hello@kinkaraahar.com",
    "footer.phone": "Call: +91-9404237451"
  },
  mr: {
    "nav.product": "उत्पादने",
    "nav.story": "आमची कथा",
    "nav.contact": "संपर्क",
    "hero.eyebrow": "सेंद्रिय • घरगुती • प्रीमियम",
    "hero.title": "घरासारखी चव, प्रेमाने जपलेली परंपरा.",
    "hero.lead": "अनुभवा अस्सल घरगुती चव. आमचे खास नींबू लोणचे ४५ दिवस कडक उन्हात मुरवून, फक्त हिमालयीन मीठ आणि हाताने कुटलेल्या मसाल्यांचा वापर करून बनवले जाते.",
    "hero.ctaPrimary": "आत्ताच मागवा",
    "hero.ctaSecondary": "अधिक जाणून घ्या",
    "lemon.title": "नींबू लोणच्याची कला",
    "lemon.card1Title": "४५ दिवस सूर्यतपासलेले",
    "lemon.card1Text": "उन्हात सावकाश मुरल्यामुळे लोणच्याला एक खास चव येते, जी घाईघाईत बनवलेल्या लोणच्यात मिळत नाही.",
    "lemon.card2Title": "हिमालयीन मीठ",
    "lemon.card2Text": "आम्ही साध्या मिठाऐवजी खनिजयुक्त गुलाबी मीठ वापरतो, जे चव आणि आरोग्यासाठी उत्तम आहे.",
    "lemon.card3Title": "रसायनमुक्त (No Preservatives)",
    "lemon.card3Text": "मीठ, मसाले आणि तेलाने नैसर्गिकरित्या टिकवलेले. कोणतेही कृत्रिम रंग, व्हिनेगर किंवा केमिकल्स नाहीत.",
    "ingredients.title": "शुद्ध घटक",
    "ingredients.item1": "रत्नागिरी लिंबे",
    "ingredients.item2": "हिमालयीन मीठ",
    "ingredients.item3": "लाकरी घाण्याचे शेंगदाणा तेल",
    "ingredients.item4": "हाताने कुटलेला मसाला",
    "story.title": "आमची कथा",
    "story.text": "“किंकर आहार तुमच्यासाठी घेऊन येत आहे पारंपरिक भारतीय पाककृतींची शुद्धता. प्रत्येक बरणी लहान बॅचमध्ये, कडक उन्हात आणि त्याच प्रेमाने बनवली जाते, जी तुम्हाला तुमच्या घरच्या स्वयंपाकघरात मिळते.”",
    "roadmap.title": "लवकरच येत आहे",
    "roadmap.item1": "अस्सल मसाले आणि ठेचा",
    "roadmap.item2": "सणासुदीसाठी खास हॅम्पर्स",
    "footer.title": "परंपरा आपल्या घरी आणा",
    "footer.text": "चव चाखण्यासाठी तयार आहात? ऑर्डर करण्यासाठी संपर्क साधा.",
    "footer.button": "hello@kinkaraahar.com",
    "footer.phone": "संपर्क: +91-9404237451"
  }
};

const langButtons = document.querySelectorAll(".lang-toggle button");
const i18nNodes = document.querySelectorAll("[data-i18n]");

const setLanguage = (lang) => {
  const selected = translations[lang] ? lang : "mr"; // Default to Marathi if unsure
  document.documentElement.lang = selected;
  
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[selected][key];
    if (value) {
      node.innerHTML = value;
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === selected);
  });
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

// Set default language to Marathi
setLanguage("mr");
