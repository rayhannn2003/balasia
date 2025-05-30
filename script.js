let allegations = JSON.parse(localStorage.getItem('allegations')) || [];

function saveToLocalStorage() {
  localStorage.setItem('allegations', JSON.stringify(allegations));
}

function renderAllegations() {
  const list = document.getElementById('allegationList');
  list.innerHTML = '';

  allegations.forEach((text, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${text}
      <button class="edit-btn" onclick="editAllegation(${index})">সম্পাদনা</button>
      <button onclick="deleteAllegation(${index})">মুছে ফেলুন</button>
    `;
    list.appendChild(li);
  });
}

function addAllegation() {
  const input = document.getElementById('allegationInput');
  const text = input.value.trim();
  if (text !== '') {
    allegations.push(text);
    saveToLocalStorage();
    input.value = '';
    renderAllegations();
  }
}

function deleteAllegation(index) {
  allegations.splice(index, 1);
  saveToLocalStorage();
  renderAllegations();
}

function editAllegation(index) {
  const newText = prompt('নতুন অভিযোগ লিখুন:', allegations[index]);
  if (newText !== null && newText.trim() !== '') {
    allegations[index] = newText.trim();
    saveToLocalStorage();
    renderAllegations();
  }
}

// Initial rendering
renderAllegations();
