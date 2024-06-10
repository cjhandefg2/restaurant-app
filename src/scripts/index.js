import 'regenerator-runtime/runtime'; // Ensure async/await works
import '../styles/main.scss';
import routes from './routes/routes';
import UrlParser from './routes/url-parser';

const app = {
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const page = routes[url] || routes['/'];
    const content = document.querySelector('#main-content');
    content.innerHTML = await page.render();
    await page.afterRender();
  },
};

document.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
});

export default app;