import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import StartPage from 'start/StartPage'
import CustomersListPage from 'customers/list/CustomersListPage'

const Routes = () => (
    <Router>
        <Route
            render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={500}
                    >
                        <Switch location={location}>
                            <Route exact path="/" component={StartPage} />
                            <Route
                                path="/customers"
                                component={CustomersListPage}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}
        />
    </Router>
)

export default Routes
