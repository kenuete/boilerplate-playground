import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Roster = () => {
    return (
        <Switch>
            <Route exact path='/roster' component={FullRoster} />
            <Route path='/roster:number' component={Player} />
        </Switch>
    )
}

export default Roster