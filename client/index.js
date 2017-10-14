import './app.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Box from './components/Box';

const sampleText = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
]Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`

const createBox = ($parent) => {
    const $el = document.createElement('div');
    $el.className = 'box';
    $parent.appendChild($el);
    return $el;
};

function main() {
    const $root = document.querySelector('.boxes');
    for (let i = 0; i < 32; i++) {
        const box = createBox($root);
        ReactDOM.render(<Box name={`Box ${i}`} />, box);
        // box.textContent = `Box ${i + 1} ${sampleText}`;
    }
}

document.addEventListener('DOMContentLoaded', main);