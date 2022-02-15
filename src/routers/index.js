import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../routers/login'
import Home from '../routers/home'

export default function routers() {
  return (
    <>
        <Switch>
          {
           [
             Login,
             Home
           ].map(item => <><Route key={item.path} path={item.path} component={item.component}/></>)
          }
        </Switch>
    </>

  )
}
