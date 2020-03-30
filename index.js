function fyniShadow(options) {
  let images = document.querySelectorAll("./fyniShadow");

  if (options.shadow_type === "beauty") options.shadow_type = "0px";
  else options.shadow_type = "15px";

  images.forEach(image => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 0px 15px rgba(0,0,0,0.15)`;

    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.fyniShadow = fyniShadow;