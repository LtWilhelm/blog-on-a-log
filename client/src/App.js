import logo from './logo.svg';
import './Bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { SignIn } from './components/User/SignIn';
import { Register } from './components/User/Register';
import Posts from './pages/posts';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route path="/posts" component={Posts} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
