import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const priceSlider = document.querySelector("#price-slider");
const minPrice = document.querySelector(".min-price");
const maxPrice = document.querySelector(".max-price");

noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: 550_000_000,
  },
  start: [10_000_000, 150_000_000],
  connect: true,
  cssPrefix: "noUi-",
});

priceSlider.noUiSlider.on("update", (value, handle) => {
  minPrice.textContent = Math.floor(value[0]).toLocaleString();
  maxPrice.textContent = Math.floor(value[1]).toLocaleString();
});
