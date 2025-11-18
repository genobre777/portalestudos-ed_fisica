document.addEventListener("DOMContentLoaded", () => {
    exibirModulos();
});

// Exibir módulos com PDFs e botão de ChatGPT
function exibirModulos() {
    const container = document.getElementById("modulesContainer");
    container.innerHTML = "";

    modulos.forEach((modulo, index) => {
        const div = document.createElement("div");
        div.classList.add("modulo-card");

        div.innerHTML = `
            <h3>${modulo.titulo}</h3>
            <p>${modulo.descricao}</p>

            <button onclick="abrirPDF(${index})">📄 Ver Conteúdo (PDF)</button>

            <button onclick="perguntarChat('${modulo.titulo}')">💬 Perguntar ao Chat</button>

            <a class="chat-btn" target="_blank" href="https://chat.openai.com">
                🌐 Ir ao ChatGPT
            </a>
        `;

        container.appendChild(div);
    });
}

// Abre PDF conforme o módulo
function abrirPDF(index) {
    const pdfPath = `pdf/modulo${index + 1}.pdf`;
    window.open(pdfPath, "_blank");
}

// Abre o ChatGPT com o nome do módulo como pergunta
function perguntarChat(tema) {
    const url = `https://chat.openai.com/?q=${encodeURIComponent(tema)}`;
    window.open(url, "_blank");
}
