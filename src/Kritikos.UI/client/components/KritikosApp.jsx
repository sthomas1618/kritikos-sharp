import React from 'react';
import { Router, Route } from 'react-router';
import { Dashboard } from './Dashboard.jsx';

export const routes = <Route>
    <Route path="/" component={ Dashboard } />
</Route>;

export class KritikosApp extends React.Component {
    render() {
        return (
            <Router history={this.props.history} children={ routes } />
        );
    }
}