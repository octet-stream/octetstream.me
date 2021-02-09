export default interface ApiResponse<T = {}, E = Error> {
  data?: T
  error?: E
}
