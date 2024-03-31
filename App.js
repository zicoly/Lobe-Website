function loadPage(pageName) {
  fetch(`${pageName}.html`)
      .then(response => response.text())
      .then(html => {
          document.querySelector('.main-content').innerHTML = html;
      })
      .catch(error => console.error('Error loading page:', error));
}

loadPage('overview')