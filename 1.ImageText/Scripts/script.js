document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".image-text__button");
    const hiddenText = document.querySelector(".image-text__text--hidden");
    const textParentElement = document.querySelector(".image-text__description");
    const rootElement = document.querySelector(".image-text");

    const setDefaultPadding = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            return "0.7rem";
        } else if (window.matchMedia("(max-width: 1200px)").matches) {
            return "2rem";
        } else {
            return "7rem";
        }
    };

    const expandView = () => {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            rootElement.style.height = "auto";
        }
    };

    const handleBreakpointChange = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            textParentElement.style.padding = "0.7rem";
        } else if (window.matchMedia("(max-width: 1200px)").matches) {
            textParentElement.style.padding = "2rem";
        } else {
            textParentElement.style.padding = "7rem";
        }
    };

    handleBreakpointChange();

    window.addEventListener("resize", handleBreakpointChange);


    button.addEventListener("click", () => {
        const isHidden = hiddenText.classList.contains("image-text__text--hidden");

        if (isHidden) {
            hiddenText.classList.remove("image-text__text--hidden");
            hiddenText.classList.add("image-text__text");
            expandView();
            textParentElement.style.padding = "1rem";
            button.textContent = "Hide";
        } else {
            hiddenText.classList.remove("image-text__text");
            hiddenText.classList.add("image-text__text--hidden");
            rootElement.style.height = "576px"
            textParentElement.style.padding = setDefaultPadding();
            button.textContent = "Learn more";
        }
    });

    const section = document.querySelector("#reveal-section");

    
    const options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(section);
});