const form = document.querySelector('form');
const input = document.getElementById('text');
const main = document.querySelector('.forms');
const dangerSection = document.getElementById('danger');
const closeIcon = document.querySelector('.icon-close');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const valor = input.value.trim();
  if (valor === '') return;

  const section = document.createElement('section');
  section.classList.add('items');

  section.innerHTML = `
    <label class="checkbox-container">
      <input type="checkbox">
      <span class="custom-checkbox"></span>
    </label>
    <label class="text">${valor}</label>
    <img
      src="./assets/icons/lixeira.svg"
      alt="Ícone de lixeira"
      class="icon-trash"
    />
  `;

  // Adiciona funcionalidade ao botão de lixeira desse item
  const trashIcon = section.querySelector('.icon-trash');
  trashIcon.addEventListener('click', () => {
    section.remove(); // remove o item
    mostrarMensagemRemocao(); // mostra a mensagem de item removido
  });

  // Insere o novo item antes da seção danger
  main.insertBefore(section, dangerSection);
  input.value = '';
});

function mostrarMensagemRemocao() {
  dangerSection.classList.remove('hidden');

  setTimeout(() => {
    dangerSection.classList.add('hidden');
  }, 3000); // esconde depois de 3 segundos
}

// Fechar a mensagem clicando no "x"
closeIcon.addEventListener('click', () => {
  dangerSection.classList.add('hidden');
});