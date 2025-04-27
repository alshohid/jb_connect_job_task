async function loadComponent(selector, path) {
  const element = document.querySelector(selector);
  if (element) {
    const response = await fetch(path);
    const html = await response.text();
    element.innerHTML = html;
  }
}

function setupObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('#top', './components/top.html');
  await loadComponent('#vision', './components/vision.html');
  await loadComponent('#message', './components/message.html');
  await loadComponent('#service', './components/service.html');
  await loadComponent('#story', './components/story.html');
  await loadComponent('#profile', './components/profile.html');

  setupObserver();
});
