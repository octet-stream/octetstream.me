import NetworkError from "./NetworkError"
import GraphQLError from "./GraphQLError"

interface OperationErrorConfig {
  networkError?: NetworkError
  graphQLErrors?: Array<GraphQLError | Error>
}

const generateErrorMessage = (errors: Array<Error | GraphQLError>) => errors
  .map(({message}) => message)
  .join("\n")

class OperationError extends Error {
  public networkError: NetworkError

  public graphQLErrors: Array<GraphQLError | Error>

  public status: number = 500

  public statusCode: number = 500

  public statusText: string = null

  public code: string = null

  constructor({networkError = null, graphQLErrors = []}: OperationErrorConfig) {
    super(
      networkError ? networkError.message : generateErrorMessage(graphQLErrors)
    )

    this.networkError = networkError
    this.graphQLErrors = graphQLErrors

    if (networkError) {
      this.code = networkError.code
      this.status = networkError.status
      this.statusCode = networkError.statusCode
      this.statusText = networkError.statusText
    }
  }
}

export default OperationError
