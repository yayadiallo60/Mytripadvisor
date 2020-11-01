const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const btnElt = $.querySelector(".signup");
  const modal = $.querySelector(".modal");
  const closeElt = $.querySelector(".close");

  btnElt.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeElt.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });
});
