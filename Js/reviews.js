const stars = document.querySelectorAll("#rating i");
const ratingInput = document.getElementById("ratingValue");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    ratingInput.value = index + 1;
    stars.forEach((s, i) => {
      s.classList.remove("fa-solid", "text-danger");
      s.classList.add("fa-regular", "text-muted");
      if (i <= index) {
        s.classList.remove("fa-regular", "text-muted");
        s.classList.add("fa-solid", "text-danger");
      }
    });
  });
});
