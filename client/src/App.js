import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { SignIn } from './components/User/SignIn';
import { Register } from './components/User/Register';
import { BlogReader } from './components/Blog/BlogReader';
import { BlogWriter } from './components/Blog/BlogWriter';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/posts/create" component={BlogWriter} />
          <Route exact path="/posts/:id" component={BlogReader} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
