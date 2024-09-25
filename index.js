const rs = document.querySelector('#list');

const template = `
  <button class="btn btn-outline-light item" value=%value" id="%n">%value</button>
`;

let tmp = 0;
let position = [];
const ex = [1, 2, 3];

const render = (l) => {
  let items = '';
  l.forEach((e, index) => {
    items += template.replaceAll('%value', e).replace('%n', index);
  });

  rs.innerHTML = items;
  const button = document.querySelectorAll('.item');
  button.forEach((el) => {
    el.onclick = () => {
      tmp++;
      position.push(el.id);
      if (tmp === 2) {
        swap(ex, position[0], position[1]);
        render(ex);
        position = [];
        tmp = 0;
      }
    };
  });
};

Array.prototype.insert = function (value) {
  this.unshift(value);
};

const swap = (list, pos1, pos2) => {
  let temp = list[pos1];
  list[pos1] = list[pos2];
  list[pos2] = temp;
};

render(ex);
