import React, {Component} from 'react';
import {Link} from 'react-router';
class App extends Component {
    render() {
        return <div>
            <div>{this.props.children}</div>
        </div>;
    }
}

export default App
