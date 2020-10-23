import fetch from "isomorphic-unfetch"

import NetworkError from "./NetworkError"

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
    throw new NetworkError(response.statusText)
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
