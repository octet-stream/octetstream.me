interface OperationPayload<D = null, E = Error> {
  data?: D
  error?: E
}

export default OperationPayload
