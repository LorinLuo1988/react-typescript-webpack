import * as React from 'react'
import * as PropTypes from 'prop-types'

/**
 * 该组件仅仅用于路由组件，从当前路由导航到当前路由时，重新挂载路由组件
 * @param  {React.ComponentClass} WrappedComponent
 * @return {React.ComponentClass} 
 */

const ReMountRouterComponent = WrappedComponent => {
  class ReMountRouterComponent extends React.PureComponent {
    static propTypes = {
      location: PropTypes.object.isRequired
    }
    state = {
      display: true
    }
    constructor (props) {
      super(props)
    }
    reload () {
      this.setState({display: false})
      setTimeout(() => this.setState({display: true}), 0)
    }
    componentWillReceiveProps (nextProps) {
      if (nextProps.location.pathname === location.pathname) {
        this.reload()
      }
    }
    render () {
      return this.state.display ? <WrappedComponent {...this.props} /> : <div />
    }
  }

  return ReMountRouterComponent
}

export default ReMountRouterComponent