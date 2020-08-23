import React, { useState } from 'react'
import classnames from 'classnames'
import SideNav from '@/src/components/single-instance/sideNav'
import styles from '@/styles/components/single-instance/headerBar.module.scss'

const HeaderBar: React.FC = () => {
  const [isActive, setActive] = useState(false)

  return (
    <div className={styles.headerBar}>
      <div className={classnames(styles.navMenu, { [styles['is-active']]: isActive })} onClick={() => setActive(!isActive)}>
        <span className={styles.navMenu_line}></span>
        <span className={styles.navMenu_line}></span>
        <span className={styles.navMenu_line}></span>
      </div>
      <SideNav activeStatus={isActive} />
    </div>
  )
}

export default HeaderBar
