import { createSelector } from 'reselect'

export const selectAvatar = () => (state) => state.avatar.toJS()

export const selectUsers = createSelector(
  selectAvatar(),
  (state) => state.users
)

export const selectUserRepos = createSelector(
  selectAvatar(),
  (state) => state.userRepos
)

export const selectSearchLoading = createSelector(
  selectAvatar(),
  (state) => state.isSearchLoading
)
