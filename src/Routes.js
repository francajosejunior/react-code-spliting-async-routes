import React, { Component } from 'react';
import Menu from './Menu'
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import getmenu from './getmenu'


const Loading = () => <h1>Loading...</h1>;

const PageNotFound = Loadable({
    loader: () => import("./PageNotFound"),
    loading: Loading
});


class Routes extends Component {
    state = {
        menu: []
    }
    componentDidMount() {
        getmenu(5000).then(result => {
            this.setState({
                menu: result
            })
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Switch>
                        {this.state.menu.map(m =>
                            (
                                <Route path={m.to} component={
                                    Loadable({
                                        loader: () => {
                                            return import(`${m.path}`)
                                        },
                                        loading: Loading
                                    })
                                } exact />
                            )
                        )}
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;