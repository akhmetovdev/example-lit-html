import { html, render } from 'lit-html';

window.state = {
  counter: 0
};

window.actions = {
  plus: () => {
    window.state = { counter: state.counter + 1 };
    render(view(), document.getElementById('app'));
  },
  minus: () => {
    window.state = { counter: state.counter - 1 };
    render(view(), document.getElementById('app'));
  }
};

const view = () => html`
  <span>${state.counter}</span>
  <button onclick="actions.plus()">+</button>
  <button onclick="actions.minus()">-</button>
`;

render(view(), document.getElementById('app'));
