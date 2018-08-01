import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import * as PropTypes from 'prop-types'

interface IRouteWrapper {
  routes: any[]
}

const RouteWrapper: React.SFC<IRouteWrapper> = ({ routes = [] }) => {
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