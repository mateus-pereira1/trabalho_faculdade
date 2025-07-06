//Declaração de variáveis
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

//Função para troca de temas
function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

    // Se for 'dark', muda para 'light'; caso contrário, volta para 'dark'
  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  // Altera o ícone: sol <-> lua
  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}


toggleTheme.addEventListener("click", changeTheme);

// Configura comportamento do acordeão
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    // Abre ou fecha o corpo do acordeão alternando a classe 'active'
    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

// Ajusta destaque do link de menu ativo
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})