import fetch from "isomorphic-unfetch"

import NetworkError from "./NetworkError"
import OperationError from "./OperationError"

const API_URL = "https://api.github.com/graphql"

/**
 * @typedef {Object} Operation
 *
 * @prop {string} query
 * @prop {string} [operationName]
 * @prop {Object.<string, any>} [variables]
 */

/** @type {RequestInit} */
const defaults = {
  method: "post",
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_ACCESS_TOKEN}`,
    "content-type": "application/json"
  }
}

/**
 * @param {Response} response
 */
async function onResponse(response) {
  if (response.status >= 300) {
    throw new NetworkError(response.statusText, response)
  }

  return response.json()
}

/**
 * Makes a request to GitHub GraphQL API
 *
 * @template {{}} T
 *
 * @param {Operation} operation
 *
 * @return {Promise<T>}
 */
const github = async operation => {
  /** @type {RequestInit} */
  const init = {...defaults, body: JSON.stringify(operation)}

  /** @type {{data?: T, error?: OperationError}} */
  const result = {}
  try {
    /** @type {{data?: T, errors: Array<Error>}} */
    const {data, errors} = await fetch(API_URL, init).then(onResponse)

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
