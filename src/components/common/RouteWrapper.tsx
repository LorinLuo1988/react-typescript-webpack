import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

const RouteWrapper = ({ routes = [] }) => {
  const Routes = routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      render={ props => (
          <route.component routes={route.children} {...props} />
        )
      }
      exact={false}
      strict={true}
    />
  ))

  return routes.length ? (
    <Switch>
      {Routes}
      <Redirect to={routes[0].path} />
    </Switch>
  ) : null
}

RouteWrapper.propTypes = {
  routes: PropTypes.array.isRequired
}

export default RouteWrapper