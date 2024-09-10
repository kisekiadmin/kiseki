
const contentHeight = document.body.scrollHeight;

const body = document.querySelector('body');


const beforeElement = window.getComputedStyle(body, '::before');


beforeElement.style.height = contentHeight + 'px';