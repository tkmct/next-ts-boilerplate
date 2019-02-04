import * as React from 'react'
import { connect } from 'react-redux'

interface StateProps {
  foo: string
}

class App extends React.Component<StateProps> {
  getInitialProps({ ctx }) {
    ctx.store.dispatch({ type: 'FOO', payload: 'foo' })
  }

  render() {
    const { foo } = this.props;
    
    return <div>{foo}</div>
  }
}

export default connect(state => state)(App)
