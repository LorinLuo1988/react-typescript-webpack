import * as React from 'react'
import { Card } from 'antd'
import * as PropTypes from 'prop-types'
import styles from './style.less'

interface IPageHeader {
  title?: React.ReactNode,
  extra?: React.ReactNode
}

const PageHeader: React.SFC<IPageHeader> = ({title, extra}) => {
  return (
    <Card
      className={styles['page-header']}
      title={title}
      extra={extra}
    />
  )
}

PageHeader.propTypes = {
  title: PropTypes.node.isRequired,
  extra: PropTypes.node
}

export default PageHeader