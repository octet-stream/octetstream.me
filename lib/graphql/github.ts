import fetch from "isomorphic-unfetch"

import NetworkError from "./NetworkError"
import OperationError from "./OperationError"
import OperationPayload from "./OperationPayload"

const API_URL = "https://api.github.com/graphql"

interface Operation<V = any> {
  query: string
  operationName?: string
  variables?: V
}

interface ResponseShape<T = {}> {
  data?: T
  errors: Error[]
}

const defaults: RequestInit = {
  method: "post",
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_ACCESS_TOKEN}`,
    "content-type": "application/json"
  }
}

async function onResponse(response: Response) {
  if (response.status >= 300) {
    throw new NetworkError(response.statusText, response)
  }

  return response.json()
}

/**
 * Makes a request to GitHub GraphQL API
 */
const github = async <R = any, V = {}>(operation: Operation<V>): Promise<OperationPayload<R>> => {
  const init: RequestInit = {...defaults, body: JSON.stringify(operation)}

  const result: OperationPayload<R> = {}
  try {
    const {data, errors}: ResponseShape<R> = await fetch(API_URL, init).then(onResponse)

    if (errors) {
      result.error = new OperationError({graphQLErrors: errors})
    }

    result.data = data
  } catch (networkError) {
    result.error = new OperationError({networkError})
  }

  return result
}

export default github
