interface PageErrorObject {
  name: string
  message: string
  status?: number
  statusCode?: number
  statusText: string
  code?: string
  stack: string
}

export default PageErrorObject
