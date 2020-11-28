import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />

      <Switch>
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
