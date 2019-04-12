import React, { useContext, useCallback, useMemo } from 'react'
import { MyContext } from '../contexts/MyContext'

const RandomCounter: React.FunctionComponent = ({ children }) => {
  const [state, actions] = useContext(MyContext)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      actions.setValue(+event.target.value),
    []
  )
  const value = useMemo(() => (state.isLoading ? '...' : state.value), [
    state.isLoading,
    state.value,
  ])
  return (
    <>
      <div>{value}</div>
      <button disabled={state.isLoading} onClick={actions.increment}>
        Increment
      </button>
      <button disabled={state.isLoading} onClick={actions.reset}>
        Clear
      </button>
      <button disabled={state.isLoading} onClick={actions.fetchDataAsync}>
        Fetch
      </button>
      <input disabled={state.isLoading} value={value} onChange={handleChange} />
      {state.isLoading && <div>is loading</div>}
    </>
  )
}

export default RandomCounter