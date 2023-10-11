import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={home}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
