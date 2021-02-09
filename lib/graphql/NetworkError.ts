class NetworkError extends Error {
  public status: number

  public statusCode: number

  public statusText: string

  public code: string

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
