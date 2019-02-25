import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Components/Home'
import Roster from './Roster'
import Schedule from '../Components/Schedule'
import Header from '../Components/Header'

const Main = () => {
    return (
        <>
            <h1>This is a roster page</h1>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/roster' component={Roster} />
                <Route path='/schedule' component={Schedule} />
            </Switch>
        </>
    )
}

export default Main