import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './page';
import AboutPage from './about/page';
import { paths } from '../routes/paths';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={paths.home.root} exact component={HomePage} />
        <Route path={paths.about.root} component={AboutPage} />
        {/* Other routes */}
        <Route path={paths.error['404']} component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
