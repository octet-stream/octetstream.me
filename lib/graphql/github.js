import fetch from "isomorphic-unfetch"

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
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_ACCESS_TOKEN}`
  }
}

/**
 * @param {Response} response
 */
async function onResponse(response) {
  if (response.status >= 300) {
    /** @type {Error & {response: Response}} */
    const err = new Error(`NetworkError: ${response.statusText}`)

    err.response = response

    throw err
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
const github = operation => {
  /** @type {RequestInit} */
  const init = {...defaults, body: JSON.stringify(operation)}

  return fetch(API_URL, init).then(onResponse)
}

export default github
