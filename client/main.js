import React from 'react';
import ReactDom from 'react-dom';
import Autoselect from './components/Autoselect';

const suggestions = [
    { id: '0', text: 'apple' },
    { id: '1', text: 'ball' },
    { id: '2', text: 'cat' },
    { id: '3', text: 'dog' },
    { id: '4', text: 'elf' },
    { id: '5', text: 'fruit' },
    { id: '6', text: 'gandalf' },
    { id: '7', text: 'hall' }
];

ReactDom.render(
    <Autoselect suggestions={suggestions} />,
    document.getElementById('app')
);
