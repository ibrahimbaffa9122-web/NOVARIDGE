const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.querySelectorAll('.term-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.term-tab').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.term-panel').forEach(panel => panel.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.term).classList.add('active');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
