import React, {memo, useMemo} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {
  REQUEST_STATUS_LOADED,
} from 'slices/constants'

import styles from './index.module.scss'


const PublicLayout = ({children}) => {
  const person = useSelector(({personsSlice}) => personsSlice?.person)
  const {status} = useSelector(({personsSlice}) => personsSlice?.personRequest)

  const isLoaded = useMemo(() => status === REQUEST_STATUS_LOADED, [status])

  return (
    <>
      <header className={styles.HeaderNavigation}>
        <NavLink to='/home' activeClassName={styles.ActiveLink}>
          Home
        </NavLink>

        <NavLink to='/person' activeClassName={styles.ActiveLink}>
          Person
        </NavLink>

        <NavLink to='/person-form' activeClassName={styles.ActiveLink}>
          Person Form
        </NavLink>

        <NavLink to='/404' activeClassName={styles.ActiveLink}>
          404
        </NavLink>

        <div>
          {isLoaded && (
            <>
              Loaded Person: <span className={styles.PersonName}>{person?.name}</span>
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
