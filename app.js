'use strict';
const palette = {'Foundations':'#8fc4ff','Classical ML':'#83e3ad','Evaluation':'#ffc28e','Unsupervised':'#7ae4dc','Deep Learning':'#d9b8ff','Applications':'#ffacd0','Practice':'#f6d881'};
const topics = ML_TOPICS;
const chapters = ['All topics', ...new Set(topics.map(topic => topic.chapter))];
const query = document.querySelector('#query');
const list = document.querySelector('#topics');
const storageKey = 'ml-study-guide-completed-v1';
let saved = [];
try {
  const data = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (Array.isArray(data)) saved = data;
} catch {}
const completed = new Set(saved.filter(id => topics.some(topic => topic.id === id)));
const progress = document.querySelector('#progress');
progress.max = topics.length;
let chapter = chapters[0];

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function updateProgress() {
  progress.value = completed.size;
  document.querySelector('#completed').textContent = completed.size + ' of ' + topics.length + ' topics completed';
}

const filters = chapters.map(label => {
  const button = element('button', label);
  button.type = 'button';
  button.addEventListener('click', () => {
    chapter = label;
    render();
  });
  return button;
});
document.querySelector('#chapters').append(...filters);

function createTopic(topic) {
  const details = element('details', '', 'topic');
  details.style.setProperty('--accent', palette[topic.chapter]);
  const summary = element('summary', topic.title);
  summary.append(element('span', topic.chapter, 'tag'));
  const body = element('div', '', 'topic-body');
  const terms = element('dl', '', 'terms');
  for (const [name, definition] of topic.terms) {
    const term = element('div');
    const description = element('dd');
    const link = definition.match(/\b(?:https:\/\/|developers\.google\.com\/)[^\s]+$/);
    if (link) {
      const anchor = element('a', link[0].replace(/^https:\/\//, ''));
      anchor.href = link[0].startsWith('https://') ? link[0] : 'https://' + link[0];
      description.append(document.createTextNode(definition.slice(0, link.index)), anchor);
    } else {
      description.textContent = definition;
    }
    term.append(element('dt', name), description);
    terms.append(term);
  }
  const label = element('label', '', 'check');
  const checkbox = element('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed.has(topic.id);
  checkbox.setAttribute('aria-label', 'Mark complete: ' + topic.title);
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) completed.add(topic.id);
    else completed.delete(topic.id);
    try { localStorage.setItem(storageKey, JSON.stringify([...completed])); } catch {}
    updateProgress();
  });
  label.append(checkbox, document.createTextNode('Mark complete'));
  body.append(element('p', topic.intro, 'intro'), terms, label);
  details.append(summary, body);
  return details;
}

function render() {
  filters.forEach((button, index) => button.setAttribute('aria-pressed', String(chapters[index] === chapter)));
  const search = query.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matching = topics.filter(topic => {
    const text = [topic.chapter, topic.title, topic.intro, ...topic.terms.flat()].join(' ').toLowerCase();
    return (chapter === chapters[0] || chapter === topic.chapter) && search.every(word => text.includes(word));
  });
  list.replaceChildren(...matching.map(createTopic));
  document.querySelector('#count').textContent = matching.length
    ? matching.length + (matching.length === 1 ? ' topic' : ' topics')
    : 'No matching topics. Try a different search or chapter.';
}

query.addEventListener('input', render);
updateProgress();
render();

const slider = document.querySelector('#area');
const coordinates = (area, price) => [50 + area * 340 / 2500, 200 - price * 2];
const model = area => 5 + 0.03 * area;
const [startX, startY] = coordinates(500, 20);
const [endX, endY] = coordinates(1500, 50);
for (const [attr, value] of Object.entries({x1:startX, y1:startY, x2:endX, y2:endY})) {
  document.querySelector('#fit').setAttribute(attr, value);
}
for (const [area, price] of [[500,20],[1000,35],[1500,50]]) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const [x, y] = coordinates(area, price);
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', 5);
  document.querySelector('#points').append(circle);
}
function updateLab() {
  const area = Number(slider.value);
  const price = model(area);
  const [x, y] = coordinates(area, price);
  document.querySelector('#selected').setAttribute('cx', x);
  document.querySelector('#selected').setAttribute('cy', y);
  document.querySelector('#size').value = area.toLocaleString('en-IN') + ' sq ft';
  document.querySelector('#prediction').textContent = '₹' + price.toFixed(1) + ' lakh';
  document.querySelector('#region').textContent = area < 500 || area > 1500
    ? 'Extrapolation. This area falls outside the training range.'
    : 'This area falls within the training range of 500–1,500 sq ft.';
}
slider.addEventListener('input', updateLab);
updateLab();
