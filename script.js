// script copy link

const actionLink = document.querySelectorAll('.link-card .link-action');

actionLink.forEach((action) => {
  action.addEventListener('click', (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(action.parentElement.getAttribute('href'));

    // munculkan toast notif
    document.getElementById('toast').innerHTML = `
          <div class="toast-container">
        <p>✅ Link ${action.parentElement.innerText} Berhasil Disalin!</p>
      </div>
    `;

    // menghilangkan notif
    setTimeout(() => {
      document.querySelector('#toast .toast-container').classList.add('toast-gone');
    }, 300);

    setTimeout(() => {
      document.querySelector('#toast .toast-container').remove();
    }, 2000);
  });
});

// hover sosmed

document.querySelectorAll('.sosmed i').forEach((sosmed) => {
  sosmed.addEventListener('mouseenter', () => {
    sosmed.classList.remove('ph');
    sosmed.classList.add('ph-fill');
  });

  sosmed.addEventListener('mouseleave', () => {
    sosmed.classList.remove('ph-fill');
    sosmed.classList.add('ph');
  });
});
