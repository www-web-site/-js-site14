const name = prompt('Ismingizni kiriting');
const text = document.createElement('h1');
text.textContent = name;
text.style.color = 'yellow';
text.style.fontSize = '70px';
text.style.textAlign = 'center';
document.body.appendChild(text);