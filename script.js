const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.setAttribute("draggable", true);
  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", card.innerText);
    e.dataTransfer.effectAllowed = "move";
    card.classList.add("dragging");
  });

  card,
    addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });
});

const columns = document.querySelectorAll(".column");

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    column.classList.add("drag-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("drag-over");
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    const draggingCard = document.querySelector(".dragging");
    if (draggingCard) {
      column.appendChild(draggingCard);
    }

    column.classList.remove("drag-over");
  });
});