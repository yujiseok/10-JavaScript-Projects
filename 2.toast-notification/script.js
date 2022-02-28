const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', () => {
  creatNotification();
});

function creatNotification() {
  const notifi = document.createElement
  ('div');
  notifi.classList.add('toast');

  notifi.innerText = `Hello I AM DOING CHALLENGE!`

  container.appendChild(notifi);

  setTimeout(() => {
    notifi.remove();
  }, 3000);
}

