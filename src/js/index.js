import melody from 'ohm-grammar-melody';

document.querySelector('#input').addEventListener('input', e => {
  const isValid = melody.grammar.match(e.target.value).succeeded();

  e.target.style.borderLeft = `4px solid ${isValid ? 'green' : 'red'}`;
});
