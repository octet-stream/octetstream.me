import NetworkError from "./NetworkError"

interface OperationErrorConfig {
  networkError?: NetworkError
  graphQLErrors?: Error[]
}

const generateErrorMessage = (errors: Array<Error>) => errors
  .map(({message}) => message)
  .join("\n")

class OperationError extends Error {
  public networkError: NetworkError

  public graphQLErrors: Error[]

  constructor({networkError = null, graphQLErrors = []}: OperationErrorConfig) {
    super(
      networkError ? networkError.message : generateErrorMessage(graphQLErrors)
    )

    this.networkError = networkError
    this.graphQLErrors = graphQLErrors
  }
}

export default OperationError
