interface GetNameParams {
  name?: string
  displayName?: string
  constructor?: Function
}

const getName = ({name, displayName, constructor}: GetNameParams) => (
  displayName || name || constructor?.name || "Anonymous"
)

export default getName
