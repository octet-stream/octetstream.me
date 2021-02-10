interface GraphQLError extends Error {
  originalError: Error
}

export default GraphQLError
