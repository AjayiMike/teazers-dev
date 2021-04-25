const expandFaq = (number) => {
  const expand = document.getElementById(number);
  const arrow = document.querySelector(".home_section_faqs_item_arrow");
  if (expand.style.display === "block") {
    expand.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  } else {
    expand.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  }
};
