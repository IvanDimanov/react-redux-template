import { createSelector } from 'reselect'

export const selectCommon = () => (state) => state.common.toJS()

export const selectAvatar = createSelector(
  selectCommon(),
  (state) => state.avatar
)
