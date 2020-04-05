import React, {memo} from 'react'
import PropTypes from 'prop-types'
import isEqual from 'react-fast-compare'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import {Spinner} from 'components'

import styles from './index.module.scss'


const NoValue = () => <span className={styles.NoValue}>...</span>


const PersonCard = ({person, isLoading}) => (
  <Card className={styles.Card}>
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h4>
            {person?.name ?? <NoValue />}
            {isLoading && <Spinner size={50} />}
          </h4>
        </Grid>

        <Grid item xs={6}>
          <i className='material-icons'>accessibility_new</i>
          {' '}
          {(person?.fetchedSpecies ?? []).map(({name}) => name).join(', ') || <NoValue />}
          <br />
          <br />

          <i className='material-icons'>visibility</i>
          {' '}
          {/* eslint-disable-next-line camelcase */}
          {person?.eye_color ?? <NoValue />}
        </Grid>

        <Grid item xs={6}>
          <i className='material-icons'>vertical_align_top</i>
          {' '}
          {person?.height ?? <NoValue />}
          <em>cm</em>
          <br />
          <br />

          <i className='material-icons'>stop</i>
          {' '}
          {/* eslint-disable-next-line camelcase */}
          {person?.mass ?? <NoValue />}
          <em>kg</em>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)


PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
}

PersonCard.defaultProps = {
  isLoading: false,
}

PersonCard.displayName = 'PersonCard'


export default memo(PersonCard, isEqual)

