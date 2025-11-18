// Gerar módulos
function renderModules() {
    const container = document.getElementById("modulesContainer");
    container.innerHTML = "";

    modulesData.forEach(mod => {
        const box = document.createElement("div");
        box.className = "module-box";
        box.innerHTML = `
            <h3>${mod.title}</h3>
            <p>${mod.description}</p>
            <ul>
                ${mod.contents.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;
        container.appendChild(box);
    });
}

// Gerar Biblioteca Interna
function renderLibrary() {
    const container = document.getElementById("libraryContainer");
    container.innerHTML = "";

    Object.keys(libraryTexts).forEach(key => {
        const box = document.createElement("div");
        box.className = "library-box";
        box.innerHTML = libraryTexts[key];
        container.appendChild(box);
    });
}

// Gerar Exercícios
function renderExercises() {
    const container = document.getElementById("exercisesContainer");
    container.innerHTML = "";

    exerciseList.forEach((ex, index) => {
        const box = document.createElement("div");
        box.className = "exercise-box";

        box.innerHTML = `
            <p><strong>${index + 1}. ${ex.question}</strong></p>
            ${ex.options
                .map(
                    (opt, i) =>
                        `<button onclick="checkAnswer(${index}, ${i}, this)">${opt}</button>`
                )
                .join("<br><br>")}
        `;
        container.appendChild(box);
    });
}

function checkAnswer(exIndex, choice, btn) {
    const correct = exerciseList[exIndex].answer;
    if (choice === correct) {
        btn.style.background = "green";
        btn.style.color = "white";
    } else {
        btn.style.background = "red";
        btn.style.color = "white";
    }
}

// Simulados
function renderSimulados() {
    const container = document.getElementById("simuladosContainer");
    container.innerHTML = "";

    examSimulados.forEach(sim => {
        const box = document.createElement("div");
        box.className = "simulado-box";
        box.innerHTML = `
            <h3>${sim.title}</h3>
            <p>${sim.questions} questões</p>
            <p>Dificuldade: <strong>${sim.difficulty}</strong></p>
        `;
        container.appendChild(box);
    });
}

// Busca
function buscar() {
    const termo = document.getElementById("searchBar").value;
    const results = smartSearch(termo);

    const container = document.getElementById("resultsContainer");
    container.innerHTML = "";

    results.forEach(r => {
        container.innerHTML += `
            <div class="module-box">
                <strong>${r.type}</strong><br>
                <em>${r.module}</em><br>
                ${r.result}
            </div>
        `;
    });
}

// Inicialização
renderModules();
renderLibrary();
renderExercises();
renderSimulados();
