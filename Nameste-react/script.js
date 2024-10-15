const heading = React.createElement('h1', { id:'title' }, 
    React.createElement('ul', null, 
        React.createElement('li', null, 'Item 1'),
        React.createElement('li', null, 'Item 2'),
        React.createElement('li', null, 'Item 3')
    )
);

// ReactDOM.render(heading, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
console.log(heading)