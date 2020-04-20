import React, {memo} from 'react'
import PropTypes from 'prop-types'

import isEqual from 'react-fast-compare'
import clsx from 'clsx'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import {Spinner} from 'components'

import styles from './index.module.scss'


const NoValue = () => <span className={styles.NoValue}>...</span>


const UserCard = ({user, isLoading}) => {
  /* Get maximum of 3 repos */
  const repos = [...user?.repos ?? []]
  repos.length = Math.min(repos.length, 3)

  const totalRepos = repos.length
  const reposLabel = totalRepos > 1
    ? `Top ${totalRepos}:`
    : (totalRepos === 0
      ? '(no repos)'
      : 'User has a single repo'
    )

  return (
    <Card className={styles.Card}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h4>
              {isLoading ? (
                <Spinner size={50} />
              ) : (
                /* eslint-disable-next-line camelcase */
                user?.avatar_url ? (
                  /* eslint-disable-next-line camelcase */
                  <img className={styles.Avatar} src={user?.avatar_url} alt={`Avatar for ${user?.login}`} />
                ) : (
                  <i className={clsx('material-icons', styles.Avatar)}>account_circle</i>
                )
              )}

              <span className={styles.Name}>
                {user?.login ?? <NoValue />}
              </span>
            </h4>
          </Grid>


          <Grid item xs={6}>
            <i className='material-icons'>accessibility_new</i>
            {' '}
            {user?.type || <NoValue />}
            <br />
            <br />

            <i className='material-icons'>insert_link</i>
            {' '}
            {/* eslint-disable-next-line camelcase */}
            {user?.html_url ?? <NoValue />}
          </Grid>


          <Grid item xs={6}>
            <i className='material-icons'>import_contacts</i>
            {' '}
            {reposLabel}
            <br />
            <br />

            {/* eslint-disable-next-line camelcase */}
            {repos.map(({id, name, html_url}) => (
              /* eslint-disable-next-line camelcase */
              <a key={id} href={html_url} target='blank'>
                {name}
                <br />
              </a>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}


UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
}

UserCard.defaultProps = {
  isLoading: false,
}

UserCard.displayName = 'UserCard'


export default memo(UserCard, isEqual)

