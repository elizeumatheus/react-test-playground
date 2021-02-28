import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from 'pages/home'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default Routes