// LOGIN (index.html)

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("usernameInput").value;
    // guardar nome
    localStorage.setItem("username", username);

    // ir para página mood
    window.location.href = "mood.html";
  });
}

// MOOD (mood.html)

const moodForm = document.getElementById("moodForm");
if (moodForm) {
  moodForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const mood = document.querySelector('input[name="mood"]:checked').value;
    const username = localStorage.getItem("username");

    // ir buscar lista existente ou criar nova
    let moods = JSON.parse(localStorage.getItem("moods")) || [];

    // adicionar novo mood
    moods.push({
      name: username,
      mood: mood
    });

    // guardar lista atualizada
    localStorage.setItem("moods", JSON.stringify(moods));

    // ir para página final
    window.location.href = "final.html";
  });
}

// FINAL PAGE (finalmood.html)

const moodsList = document.querySelector(".moods-list");

if (moodsList) {
  const moods = JSON.parse(localStorage.getItem("moods")) || [];

  moods.forEach(entry => {
    const card = document.createElement("div");
    card.classList.add("mood-card");

    card.innerHTML = `
      <div class="name">${entry.name}</div>
      <div class="emoji">${entry.mood}</div>
    `;

    moodsList.appendChild(card);
  });
}
