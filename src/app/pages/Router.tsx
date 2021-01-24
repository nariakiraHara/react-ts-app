import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from 'app/pages/Home'
import Login from 'app/pages/auth/SignIn'

interface Props {}

const RouteBase: FC<Props> = ({ children }) => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
    </Router>
  )}

export default RouteBase
