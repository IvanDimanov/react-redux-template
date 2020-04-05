/**
 * This function is meant to unify all possible Axios response errors
 * with some common properties such as: `errorId`, `errorCode`, and `errorMessage`.
 *
 * @param {Error} error Axios response object
 * @return {Error} An Error object that for sure have default properties
 */
const getResponseError = error => {
  if (!(error instanceof Error)) {
    if (!error) {
      error = new Error()
    }

    if (typeof error === 'object') {
      error = new Error(...error)
    }

    if (typeof error === 'string') {
      error = new Error(error)
    }
  }

  const responseError = (error.response || {}).data || {}

  const errorCode =
    responseError.errorCode || (typeof error.toJSON === 'function' ? error.toJSON().code : error.stack.split(':', 1)[0])

  error.errorId = responseError.errorId || Date.now()
  error.errorCode = errorCode
  error.errorMessage = responseError.errorMessage || error.message

  return error
}

export default getResponseError
