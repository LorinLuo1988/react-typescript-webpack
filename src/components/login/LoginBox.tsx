import * as React from 'react'
import style from '@styles/containers/login/loginBox.less'
import { Form, Input, Icon, Button } from 'antd'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginAction } from '@/redux/login'

const FormItem = Form.Item

const mapDispatchToProps = dispatch => {
  return {
    loginAction: option => {
      dispatch(loginAction(option))
    }
  }
}

const mapStateToProps = () => {
  return {}
}

interface IMapDispatchToProps<T = any> {
  [key: string]: (...args: any[]) => T
}

interface IMapStateToProps<T = any> {
  [key: string]: T
}

interface Props<M extends IMapDispatchToProps, T extends IMapStateToProps> {
  actions: M,
  store: T
}

@Form.create()
@connect(mapStateToProps, mapDispatchToProps)
class LoginForm extends React.PureComponent<Props, any> {
  static propTypes = {
    form: PropTypes.object,
    loginAction: PropTypes.func
  }
  constructor (props) {
    super(props)
  }
  handleSubmit = () => {
    (this.props as any).form.validateFields((err, values) => {
      if (!err) {
        this.props.loginAction(values)
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form 
    return (
      <Form hideRequiredMark={true}>
        <FormItem>
          {
            getFieldDecorator('loginName', {
              rules: [{ required: true, message: '请输入用户名' }]
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="请输入用户名" />
            )
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input
                type="password"
                onPressEnter={this.handleSubmit}
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                placeholder="请输入密码" />
            )
          }
        </FormItem>
        <Button
          type="primary"
          onClick={this.handleSubmit}
          className={style.loginBoxButton}>登录</Button>
      </Form>
    )
  }
}

class LoginBox extends React.PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className={style.loginBox}>
        <h1 className={style.loginBoxTitle}>登录</h1>
        <LoginForm />
      </div>
    )
  }
}

export default LoginBox