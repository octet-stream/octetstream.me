class NetworkError extends Error {
  /**
   * @param {string} message
   * @param {Response} response
   */
  constructor(message, response) {
    super(message)

    this.response = response
    this.status = response.status
    this.statusCode = response.status
    this.statusText = response.statusText
  }
}

export default NetworkError
