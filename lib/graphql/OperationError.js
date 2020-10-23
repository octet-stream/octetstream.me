/**
 * @typedef {import("./NetworkError").default} NetworkError
 */

/**
 * @param {Array<Error>} errors
 */
const generateErrorMessage = errors => errors
  .map(({message}) => message)
  .join("\n")

class OperationError extends Error {
  /**
   * @param {Object} config
   * @param {NetworkError} [config.networkError]
   * @param {Array<Error>} [config.graphQLErrors]
   */
  constructor({networkError = null, graphQLErrors = []}) {
    super(
      networkError ? networkError.message : generateErrorMessage(graphQLErrors)
    )

    this.networkError = networkError
    this.graphQLErrors = graphQLErrors
  }
}

export default OperationError
