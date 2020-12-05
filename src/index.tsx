import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app';

const userMock = { name: 'Albert' };

ReactDOM.render(<App userName={userMock.name} />, document.getElementById('root'));
