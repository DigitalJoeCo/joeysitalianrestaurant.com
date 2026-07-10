document.documentElement.classList.add("js");

const navigationToggle = document.querySelector("[data-navigation-toggle]");
const navigation = document.querySelector("[data-navigation]");
const siteHeader = document.querySelector(".site-header");

if (navigationToggle && navigation) {
  const mobileNavigation = window.matchMedia("(max-width: 50rem)");

  const isNavigationOpen = () => navigationToggle.getAttribute("aria-expanded") === "true";

  const closeNavigation = ({ restoreFocus = false } = {}) => {
    navigationToggle.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";

    if (restoreFocus && mobileNavigation.matches) {
      navigationToggle.focus();
    }
  };

  navigationToggle.addEventListener("click", () => {
    const shouldOpen = !isNavigationOpen();

    navigationToggle.setAttribute("aria-expanded", String(shouldOpen));
    navigation.dataset.open = String(shouldOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (!(event.target instanceof Element) || !event.target.closest("a")) {
      return;
    }

    closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !isNavigationOpen()) {
      return;
    }

    closeNavigation({ restoreFocus: true });
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileNavigation.matches ||
      !isNavigationOpen() ||
      (siteHeader && event.target instanceof Node && siteHeader.contains(event.target))
    ) {
      return;
    }

    closeNavigation();
  });

  mobileNavigation.addEventListener("change", (event) => {
    if (!event.matches) {
      closeNavigation();
    }
  });
}
