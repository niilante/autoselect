import React from 'react';
import ReactDom from 'react-dom';
import Autoselect from './components/Autoselect';

const suggestions = [
    { id: 0, text: 'a' },
    { id: 1, text: 'b' },
    { id: 2, text: 'c' },
];

ReactDom.render(
    <Autoselect suggestions={suggestions} />,
    document.getElementById('app')
);
