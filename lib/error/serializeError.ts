import OperationError from "../graphql/OperationError"

/**
 * @param {Error} [error]
 */
const serializeError = (error: OperationError) => {
  if (!error) {
    return null
  }

  if ("graphQLErrors" in error && error.graphQLErrors.length) {
    error = error.graphQLErrors[0].originalError
      ? error.graphQLErrors[0].originalError
      : error.graphQLErrors[0]
  }

  return {
    name: error.name,
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
    status: error.status ?? 500,
    code: error.code ?? null,
    statusCode: error.status ?? 500
  }
}

export default serializeError
