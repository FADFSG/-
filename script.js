// เลือกการ์ดทั้งหมด (div.card ทุกอัน)
const cards = document.querySelectorAll(".card");

// วนลูปให้แต่ละการ์ดสามารถลากได้
cards.forEach((card) => {
 
  card.setAttribute("draggable", true);


  card.addEventListener("dragstart", (e) => {
   
    e.dataTransfer.setData("text/plain", card.innerText);


    e.dataTransfer.effectAllowed = "move";


    card.classList.add("dragging");
  });

  // เมื่อปล่อยการ์ด (หยุดลาก)
  card.addEventListener("dragend", () => {
    // ลบคลาส dragging ออกจากการ์ด
    card.classList.remove("dragging");
  });
});

// เลือกทุกคอลัมน์ (คอลัมน์ปลายทางที่ต้องการวางการ์ด)
const columns = document.querySelectorAll(".column");

// วนลูปให้แต่ละคอลัมน์รองรับการ drop
columns.forEach((column) => {
  // เมื่อมีการ์ดลากมาผ่านบนคอลัมน์นี้
  column.addEventListener("dragover", (e) => {
    // ป้องกันค่าดีฟอลต์เพื่อให้สามารถ drop ได้ (ถ้าไม่ใส่จะ drop ไม่ได้)
    e.preventDefault();

    // แสดงว่าเป็นการลากแบบ move (ลากแล้วย้าย)
    e.dataTransfer.dropEffect = "move";

    // เพิ่มคลาส drag-over เพื่อไว้ใช้ตกแต่งเวลาลากอยู่เหนือ column
    column.classList.add("drag-over");
  });

  // เมื่อการ์ดลากออกจากคอลัมน์ (ไม่ได้ drop)
  column.addEventListener("dragleave", () => {
    // ลบคลาส drag-over
    column.classList.remove("drag-over");
  });

  // เมื่อมีการ drop การ์ดลงในคอลัมน์นี้
  column.addEventListener("drop", (e) => {
    // ป้องกันค่าดีฟอลต์
    e.preventDefault();

    // หาการ์ดที่กำลังถูกลากอยู่ (มีคลาส dragging)
    const draggingCard = document.querySelector(".dragging");

    // ถ้าพบการ์ด ก็นำมาใส่ในคอลัมน์นี้
    if (draggingCard) {
      column.appendChild(draggingCard);
    }

    // ลบคลาส drag-over ไม่ว่าจะ drop หรือไม่
    column.classList.remove("drag-over");
  });
});