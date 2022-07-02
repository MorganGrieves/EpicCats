window.locale = "ru";

const translations = {
  "en": {
    "about-menu-item":           "About",
    "roadmap-menu-item":         "Roadmap",
    "team-menu-item":            "Team",
    "welcome-main":              "EPIC CATS WELCOME <br/><span>YOU</span>",
    "description-main":          "Dota 2 NFT Cats is a rich collection of  NFTs — unique digital collectibles living on the Ethereum blockchain. ",
    "caution-section-title":     "Caution! Cats are deadly charming!",
    "roadmap-title":             "<span>&#9664;</span>Roadmap",
    "roadmap-first-step-title":  "First steps",
    "roadmap-first-step":        "Creation of a concept, definition of goals and main directions of the project. NFT content approval.",
    "roadmap-second-step-title": "Start",
    "roadmap-second-step":       "Launch of the project. Start of a marketing company.",
    "roadmap-third-step-title":  "Promotion",
    "roadmap-third-step":        "Staged placement of the collection on the Opensea platform. Expanding the audience of NFT holders.",
    "roadmap-fourth-step-title": "Interaction",
    "roadmap-fourth-step":       "Listing of new NFTs on Opensea. Interaction with media personalities in the field of NFT and Dota2.",
    "our-team-title":            "Our team",
    "menu-footer":               "Menu",
    "social-title":              "Socials"
  },
  "ru": {
    "about-menu-item":           "О нас",
    "roadmap-menu-item":         "Цели",
    "team-menu-item":            "Команда",
    "welcome-main":              "ДОТА КОТИКИ РАДЫ <br/><span>ВАМ</span>",
    "description-main":          "Dota 2 NFT Cats — это богатая коллекция NFT  — уникальных цифровых предметов коллекционирования, живущих на блокчейне Ethereum.",
    "caution-section-title":     "Внимание! Котики смертельно очаровательны!",
    "roadmap-title":             "<span>&#9664;</span>Наши цели",
    "roadmap-first-step-title":  "Первые шаги",
    "roadmap-first-step":        "Создание концепции, определение целей и основных направлений проекта. Утверждение содержания NFT.",
    "roadmap-second-step-title": "Старт",
    "roadmap-second-step":       "Запуск проекта. Начало маркетинговой компании.",
    "roadmap-third-step-title":  "Раскрутка",
    "roadmap-third-step":        "Поэтапное размещение коллекции на платформе Opensea. Расширение аудитории держателей NFT.",
    "roadmap-fourth-step-title": "Взаимодействие",
    "roadmap-fourth-step":       "Листинг новых NFT на Opensea. Взаимодействие с медийными личностями в сфере NFT и Dota2.",
    "our-team-title":            "Наша команда",
    "menu-footer":               "Меню",
    "social-title":              "Сети"
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("[data-lang]")
    .forEach(translateElement);
});

function translateElement(element) {
  const key = element.getAttribute("data-lang");
  const translation = translations[window.locale][key];
  element.innerHTML = translation;
}
