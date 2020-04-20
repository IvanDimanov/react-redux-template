import React from 'react'
import {action} from '@storybook/addon-actions'
import UserForm from './index'


export default {
  title: 'Design System/Forms/UserForm',
  component: UserForm,
}


export const Default = () => (
  <UserForm onSubmit={action('click.onSubmit')} />
)

export const Loading = () => (
  <UserForm isLoading onSubmit={action('click.onSubmit')} />
)
