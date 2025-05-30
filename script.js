document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("allegationForm");
  const input = document.getElementById("allegationInput");
  const list = document.getElementById("allegationList");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text !== "") {
      addAllegation(text);
      input.value = "";
    }
  });

  function addAllegation(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "মুছুন";
    deleteBtn.onclick = () => li.remove();

    const editBtn = document.createElement("button");
    editBtn.textContent = "সম্পাদনা";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => {
      const newText = prompt("অভিযোগ পরিবর্তন করুন:", span.textContent);
      if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
      }
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  }
});
