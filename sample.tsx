import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch, iRootState } from './store'

const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch.count.increment(1)
})

const mapState = (state: iRootState) => ({
  count: state.count
})
type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>

class App extends Component<StateProps & DispatchProps> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>count {this.props.count}</p>
          <button onClick={() => this.props.increment()}>add</button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App

const ConnectedApp = connect(
  mapState as any,
  mapDispatch as any
)(App as any)

export { ConnectedApp }
