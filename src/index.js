import './styles.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Webpack HMrrrR Demo</h1>';

if (module.hot) {
  module.hot.accept();
}
