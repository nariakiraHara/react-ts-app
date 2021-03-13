import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'app/pages/Home'
import Login from 'app/pages/auth/SignIn'
import SignUp from 'app/pages/auth/SignUp'

interface Props {}

const RouteBase: FC<Props> = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={SignUp} exact />
    </Router>
  )}

export default RouteBase
