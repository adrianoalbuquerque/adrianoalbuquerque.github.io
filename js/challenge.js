const data = [
  { cardTitle: "Expanding Cards", href: "50projects_50days/expanding-cards/", urlImage: "https://50projects50days.com/img/projects-img/1-expanding-cards.png" },
  { cardTitle: "Progress Steps", href: "50projects_50days/progress-steps/", urlImage: "	https://50projects50days.com/img/projects-img/2-progress-steps.png" },
  { cardTitle: "Navigation Animation", href: "50projects_50days/rotating-nav-animation/", urlImage: "	https://50projects50days.com/img/projects-img/3-rotating-navigation-animation.png" },
  { cardTitle: "Hidden Search", href: "50projects_50days/hidden-search/", urlImage: "https://50projects50days.com/img/projects-img/4-hidden-search-widget.png" },
  { cardTitle: "Blurry Loading", href: "50projects_50days/blurry-loading/", urlImage: "https://50projects50days.com/img/projects-img/5-blurry-loading.png" },
  { cardTitle: "Scroll Animation", href: "50projects_50days/scroll-animation/", urlImage: "https://50projects50days.com/img/projects-img/6-scroll-animation.png" },
  { cardTitle: "Split Page", href: "50projects_50days/split-landing-page/", urlImage: "https://50projects50days.com/img/projects-img/7-split-landing-page.png" },
  { cardTitle: "Form Wave", href: "50projects_50days/form-wave/", urlImage: "https://50projects50days.com/img/projects-img/8-form-wave.png" },
  { cardTitle: "Sound Board", href: "50projects_50days/sound-board/", urlImage: "https://50projects50days.com/img/projects-img/9-sound-board.png" },
  { cardTitle: "Dad Jokes", href: "50projects_50days/dad-jokes/", urlImage: "https://50projects50days.com/img/projects-img/10-dad-jokes.png" },
  { cardTitle: "Event Keycodes", href: "50projects_50days/event-keycodes/", urlImage: "https://50projects50days.com/img/projects-img/11-event-keycodes.png" },
  { cardTitle: "Faq Collapse", href: "50projects_50days/faq-collapse/", urlImage: "https://50projects50days.com/img/projects-img/12-faq-collapse.png" },
  { cardTitle: "Choice Picker", href: "50projects_50days/random-choice-picker/", urlImage: "https://50projects50days.com/img/projects-img/13-random-choice-picker.png" },
  { cardTitle: "Animated Navigation", href: "50projects_50days/animated-navigation/", urlImage: "https://50projects50days.com/img/projects-img/14-animated-navigation.png" },
  { cardTitle: "Counter", href: "50projects_50days/incrementing-counter/", urlImage: "https://50projects50days.com/img/projects-img/15-incrementing-counter.png" },
  { cardTitle: "Drink Water", href: "50projects_50days/drink-water/", urlImage: "https://50projects50days.com/img/projects-img/16-drink-water.png" },
  { cardTitle: "Movie App", href: "50projects_50days/movie-app/", urlImage: "https://50projects50days.com/img/projects-img/17-movie-app.png" },
  { cardTitle: "Background Slider", href: "50projects_50days/background-slider/", urlImage: "https://50projects50days.com/img/projects-img/18-background-slider.png" },
  { cardTitle: "Theme Clock", href: "50projects_50days/theme-clock/", urlImage: "https://50projects50days.com/img/projects-img/19-theme-clock.png" },
  { cardTitle: "Ripple Effect", href: "50projects_50days/button-ripple-effect/", urlImage: "https://50projects50days.com/img/projects-img/20-button-ripple-effect.png" },
  { cardTitle: "Drag N Drop", href: "50projects_50days/drag-n-drop/", urlImage: "https://50projects50days.com/img/projects-img/21-drag-n-drop.png" },
  { cardTitle: "Drawing App", href: "50projects_50days/drawing-app/", urlImage: "https://50projects50days.com/img/projects-img/22-drawing-app.png" },
  { cardTitle: "Kinetic Loader", href: "50projects_50days/kinetic-loader/", urlImage: "https://50projects50days.com/img/projects-img/23-kinetic-loader.png" },
  { cardTitle: "Skeleton Effect", href: "50projects_50days/content-placeholder/", urlImage: "https://50projects50days.com/img/projects-img/24-content-placeholder.png" },
  { cardTitle: "Sticky Navbar", href: "50projects_50days/sticky-navigation/", urlImage: "https://50projects50days.com/img/projects-img/25-sticky-navbar.png" },
  { cardTitle: "Vertical Slider", href: "50projects_50days/double-vertical-slider/", urlImage: "https://50projects50days.com/img/projects-img/26-double-vertical-slider.png" },
  { cardTitle: "Toast Notification", href: "50projects_50days/toast-notification/", urlImage: "https://50projects50days.com/img/projects-img/27-toast-notification.png" },
  { cardTitle: "Github Profiles", href: "50projects_50days/github-profiles/", urlImage: "https://50projects50days.com/img/projects-img/28-github-profiles.png" },
  { cardTitle: "Double Click", href: "50projects_50days/double-click-heart/", urlImage: "https://50projects50days.com/img/projects-img/29-double-click-heart.png" },
  { cardTitle: "Auto Text Effect", href: "50projects_50days/auto-text-effect/", urlImage: "https://50projects50days.com/img/projects-img/30-auto-text-effect.png" },
  { cardTitle: "Password Generator", href: "50projects_50days/password-generator/", urlImage: "https://50projects50days.com/img/projects-img/31-password-generator.png" },
  { cardTitle: "Good Cheap Fast", href: "50projects_50days/good-cheap-fast/", urlImage: "https://50projects50days.com/img/projects-img/32-good-cheap-fast.png" },
  { cardTitle: "Notes App", href: "50projects_50days/notes-app/", urlImage: "https://50projects50days.com/img/projects-img/33-notes-app.png" },
  { cardTitle: "Animated Countdown", href: "50projects_50days/animated-countdown/", urlImage: "https://50projects50days.com/img/projects-img/34-animated-countdown.png" },
  { cardTitle: "Image Carousel", href: "50projects_50days/image-carousel/", urlImage: "https://50projects50days.com/img/projects-img/35-image-carousel.png" },
  { cardTitle: "Hover Board", href: "50projects_50days/hoverboard/", urlImage: "https://50projects50days.com/img/projects-img/36-hoverboard.png" },
  { cardTitle: "Pokedex", href: "50projects_50days/pokedex/", urlImage: "https://50projects50days.com/img/projects-img/37-pokedex.png" },
  { cardTitle: "Mobile Tab Navigation", href: "50projects_50days/mobile-tab-navigation/", urlImage: "https://50projects50days.com/img/projects-img/38-mobile-tab-navigation.png" },
  { cardTitle: "Password Strength", href: "50projects_50days/password-strength-background/", urlImage: "https://50projects50days.com/img/projects-img/39-password-strength-background.png" },
  { cardTitle: "Background Boxes", href: "50projects_50days/3d-boxes-background/", urlImage: "	https://50projects50days.com/img/projects-img/40-3d-background-boxes.png" },
  { cardTitle: "Verify Account Ui", href: "50projects_50days/verify-account-ui/", urlImage: "https://50projects50days.com/img/projects-img/41-verify-account-ui.png" },
  { cardTitle: "Live User Filter", href: "50projects_50days/live-user-filter/", urlImage: "https://50projects50days.com/img/projects-img/42-live-user-filter.png" },
  { cardTitle: "Feedback Ui Design", href: "50projects_50days/feedback-ui-design/", urlImage: "https://50projects50days.com/img/projects-img/43-feedback-ui-design.png" },
  { cardTitle: "Custom Slider", href: "50projects_50days/custom-range-slider/", urlImage: "https://50projects50days.com/img/projects-img/44-custom-range-slider.png" },
  { cardTitle: "Netflix Navigation", href: "50projects_50days/netflix-mobile-navigation/", urlImage: "	https://50projects50days.com/img/projects-img/45-netflix-mobile-navigation.png" },
  { cardTitle: "Quiz App", href: "50projects_50days/quiz-app/", urlImage: "https://50projects50days.com/img/projects-img/46-quiz-app.png" },
  { cardTitle: "Testimonial Box", href: "50projects_50days/testimonial-box-switcher/", urlImage: "https://50projects50days.com/img/projects-img/47-testimonial-box-switcher.png" },
  { cardTitle: "Random Image Feed", href: "50projects_50days/random-image-generator/", urlImage: "https://50projects50days.com/img/projects-img/48-random-image-feed.png" },
  { cardTitle: "Todo List", href: "50projects_50days/todo-list/", urlImage: "	https://50projects50days.com/img/projects-img/49-todo-list.png" },
  { cardTitle: "Insect Catch", href: "50projects_50days/insect-catch-game/", urlImage: "https://50projects50days.com/img/projects-img/50-insect-catch-game.png" }
];

const cardContainer = document.getElementById("card-container");

data.forEach((item, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5";

  const cardFigure = document.createElement("figure");
  cardFigure.className = "effect-ming tm-video-item";

  const cardImage = document.createElement("img");
  if (item.urlImage != "") {
    cardImage.src = item.urlImage;
  } else {
    cardImage.src = "img/img-03.jpg";
  }
  cardImage.alt = "Image";
  cardImage.className = "img-fluid";

  const cardFigcaption = document.createElement("figcaption");
  cardFigcaption.className = "d-flex align-items-center justify-content-center";

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = item.cardTitle;

  const cardLink = document.createElement("a");
  cardLink.href = item.href;
  cardLink.target = "_blank";
  cardLink.textContent = "View more";

  const cardInfo = document.createElement("div");
  cardInfo.className = "d-flex justify-content-between tm-text-gray";

  const cardDia = document.createElement("span");
  cardDia.textContent = `Dia ${index + 1}`;

  cardFigcaption.appendChild(cardTitle);
  cardFigcaption.appendChild(cardLink);

  cardFigure.appendChild(cardImage);
  cardFigure.appendChild(cardFigcaption);

  cardInfo.appendChild(cardDia);

  cardDiv.appendChild(cardFigure);
  cardDiv.appendChild(cardInfo);

  cardContainer.appendChild(cardDiv);
});

