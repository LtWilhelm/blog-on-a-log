import { Route, Switch } from "react-router-dom";
import { BlogReader } from '../../components/Blog/BlogReader';
import { BlogWriter } from '../../components/Blog/BlogWriter';
import { PostList } from "./PostList";

export default function () {
  return (
    <div className="row">
      <div className="col-8 col-xs-12" style={{
        border: '1px solid black',
        borderRadius: 10
      }}>
        <Switch>
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/posts/create" component={BlogWriter} />
          <Route exact path="/posts/:id" component={BlogReader} />
        </Switch>
      </div>
      <div className="col" style={{
        border: '1px solid black',
        borderRadius: 10
      }}></div>
    </div>
  )
}