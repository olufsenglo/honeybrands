import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Footer } from "../common/Footer"

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
