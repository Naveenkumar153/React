import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id:'title' }, 
    React.createElement('ul', null, 
        React.createElement('li', null, 'Item 1'),
        React.createElement('li', null, 'Item 2'),
        React.createElement('li', null, 'Item 3')
    )
);

const head2 = <h1 className='heading'>Hello</h1>;
console.log('heading',heading);
console.log('head2',head2);


// ReactDOM.render(heading, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
console.log(heading)