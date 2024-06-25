const data = [
  { cardTitle: "Expanding Cards", href: "50projects_50days/expanding-cards/" },
  { cardTitle: "Progress Steps", href: "50projects_50days/progress-steps/" },
  { cardTitle: "Navigation Animation", href: "50projects_50days/rotating-nav-animation/" },
  { cardTitle: "Hidden Search", href: "50projects_50days/hidden-search/" },
  { cardTitle: "Blurry Loading", href: "50projects_50days/blurry-loading/" },
  { cardTitle: "Scroll Animation", href: "50projects_50days/scroll-animation/" },
  { cardTitle: "Split Page", href: "50projects_50days/split-landing-page/" },
  { cardTitle: "Form Wave", href: "50projects_50days/form-wave/" },
  { cardTitle: "Sound Board", href: "50projects_50days/sound-board/",  },
  { cardTitle: "Dad Jokes", href: "50projects_50days/dad-jokes/" },
  { cardTitle: "Event Keycodes", href: "50projects_50days/event-keycodes/" },
  { cardTitle: "Faq Collapse", href: "50projects_50days/faq-collapse/" },
  { cardTitle: "Choice Picker", href: "50projects_50days/random-choice-picker/" },
  { cardTitle: "Animated Navigation", href: "50projects_50days/animated-navigation/" },
  { cardTitle: "Counter", href: "50projects_50days/incrementing-counter/" },
  { cardTitle: "Drink Water", href: "50projects_50days/drink-water/" },
  { cardTitle: "Movie App", href: "50projects_50days/movie-app/" },
  { cardTitle: "Background Slider", href: "50projects_50days/background-slider/" },
  { cardTitle: "Theme Clock", href: "50projects_50days/theme-clock/" },
  { cardTitle: "Ripple Effect", href: "50projects_50days/button-ripple-effect/" },
  { cardTitle: "Drag N Drop", href: "50projects_50days/drag-n-drop/" },
  { cardTitle: "Drawing App", href: "50projects_50days/drawing-app/" },
  { cardTitle: "Kinetic Loader", href: "50projects_50days/kinetic-loader/" },
  { cardTitle: "Skeleton Effect", href: "50projects_50days/content-placeholder/" },
  { cardTitle: "Sticky Navbar", href: "50projects_50days/sticky-navigation/" },
  { cardTitle: "Vertical Slider", href: "50projects_50days/double-vertical-slider/" },
  { cardTitle: "Toast Notification", href: "50projects_50days/toast-notification/" },
  { cardTitle: "Github Profiles", href: "50projects_50days/github-profiles/" },
  { cardTitle: "Double Click", href: "50projects_50days/double-click-heart/" },
  { cardTitle: "Auto Text Effect", href: "50projects_50days/auto-text-effect/" },
  { cardTitle: "Password Generator", href: "50projects_50days/password-generator/" },
  { cardTitle: "Good Cheap Fast", href: "50projects_50days/good-cheap-fast/" },
  { cardTitle: "Notes App", href: "50projects_50days/notes-app/" },
  { cardTitle: "Animated Countdown", href: "50projects_50days/animated-countdown/" },
  { cardTitle: "Image Carousel", href: "50projects_50days/image-carousel/" },
  { cardTitle: "Hover Board", href: "50projects_50days/hoverboard/" },
  { cardTitle: "Pokedex", href: "50projects_50days/pokedex/" },
  { cardTitle: "Mobile Tab Navigation", href: "50projects_50days/mobile-tab-navigation/" },
  { cardTitle: "Password Strength", href: "50projects_50days/password-strength-background/" },
  { cardTitle: "Background Boxes", href: "50projects_50days/3d-boxes-background/" },
  { cardTitle: "Verify Account Ui", href: "50projects_50days/verify-account-ui/" },
  { cardTitle: "Live User Filter", href: "50projects_50days/live-user-filter/" },
  { cardTitle: "Feedback Ui Design", href: "50projects_50days/feedback-ui-design/" },
  { cardTitle: "Custom Slider", href: "50projects_50days/custom-range-slider/" },
  { cardTitle: "Netflix Navigation", href: "50projects_50days/netflix-mobile-navigation/" },
  { cardTitle: "Quiz App", href: "50projects_50days/quiz-app/" },
  { cardTitle: "Testimonial Box", href: "50projects_50days/testimonial-box-switcher/" },
  { cardTitle: "Random Image Feed", href: "50projects_50days/random-image-generator/" },
  { cardTitle: "Todo List", href: "50projects_50days/todo-list/" },
  { cardTitle: "Insect Catch", href: "50projects_50days/insect-catch-game/" }
];

const cardContainer = document.getElementById("card-container");

data.forEach((item, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5";

  const cardFigure = document.createElement("figure");
  cardFigure.className = "effect-ming tm-video-item";

  const cardImage = document.createElement("img");
  
  url = "assets/img/img";
  cardImage.src = `${url}${index + 1}.png`;
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

