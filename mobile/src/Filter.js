import React from 'react';
import './index.css';

class Filter extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <button type="button">Все</button>
            <button type="button">Активные</button>
            <button type="button">Заблокированные</button>
        </div>;
    }
}

export default Filter;