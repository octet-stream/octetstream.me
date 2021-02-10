class NetworkError extends Error {
  public status: number = 500

  public statusCode: number = 500

  public statusText: string = null

  public code: string = null

  public response: Response

  constructor(message: string, response: Response) {
    super(message)

    this.response = response
    this.status = response.status
    this.statusCode = response.status
    this.statusText = response.statusText
  }
}

export default NetworkError
