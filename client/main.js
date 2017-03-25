import React from 'react';
import ReactDom from 'react-dom';
import Autoselect from './components/Autoselect';

const suggestions = [
    { id: 0, text: 'apple' },
    { id: 1, text: 'ball' },
    { id: 2, text: 'cat' },
    { id: 3, text: 'dog' },
    { id: 4, text: 'elephant' }
];

ReactDom.render(
    <Autoselect suggestions={suggestions} />,
    document.getElementById('app')
);
