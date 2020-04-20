import React, {memo, useMemo} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {
  REQUEST_STATUS_LOADED,
} from 'slices/constants'

import styles from './index.module.scss'


const PublicLayout = ({children}) => {
  const user = useSelector(({usersSlice}) => usersSlice?.user)
  const {status} = useSelector(({usersSlice}) => usersSlice?.userRequest)

  const isLoaded = useMemo(() => status === REQUEST_STATUS_LOADED, [status])

  return (
    <>
      <header className={styles.HeaderNavigation}>
        <NavLink to='/home' activeClassName={styles.ActiveLink}>
          Home
        </NavLink>

        <NavLink to='/user' activeClassName={styles.ActiveLink}>
          User
        </NavLink>

        <NavLink to='/user-form' activeClassName={styles.ActiveLink}>
          User Form
        </NavLink>

        <NavLink to='/404' activeClassName={styles.ActiveLink}>
          404
        </NavLink>

        <div>
          {isLoaded && (
            <>
              Loaded User: <span className={styles.UserLogin}>{user?.login}</span>
            </>
          )}
        </div>
      </header>

      <main className={styles.ContentWrap}>
        {children}
      </main>
    </>
  )
}


PublicLayout.propTypes = {
  children: PropTypes.node,
}

export default memo(PublicLayout)
