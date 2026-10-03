document.getElementById('btnTrabajos').addEventListener('click', function () {
    document.getElementById('modalTrabajos').classList.add('activo');
});

const modal = document.querySelector('.modal-trabajos');

new MutationObserver(() => {
  document.body.style.overflow = modal.classList.contains('activo') ? 'hidden' : '';
}).observe(modal, { attributes: true, attributeFilter: ['class'] });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.remove('activo');
});