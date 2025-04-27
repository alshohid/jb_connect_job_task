async function loadComponent(selector, path) {
  const element = document.querySelector(selector);
  if (element) {
    const response = await fetch(path);
    const html = await response.text();
    element.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('#top', './components/top.html');
  loadComponent('#vision', './components/vision.html');
  loadComponent('#message', './components/message.html');
  loadComponent('#service', './components/service.html');
  loadComponent('#story', './components/story.html');
  loadComponent('#profile', './components/profile.html');

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
});
