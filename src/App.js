import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
// import { Link, Route, BrowserRouter, Router } from 'react-dom';
import './App.css';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
      <header className="container">
        <h1 className="display-2">Movie Card Library CRUD</h1>
      </header>
      <HashRouter basename={ process.env.PUBLIC_URL }>
        <Switch>
          <Route
            path={ `${process.env.PUBLIC_URL}/movies/:id/edit` }
            component={ EditMovie }
          />
          <Route
            path={ `${process.env.PUBLIC_URL}/movies/new` }
            component={ NewMovie }
          />
          <Route
            exact
            path={ `${process.env.PUBLIC_URL}/` }
            component={ MovieList }
          />
          <Route
            path={ `${process.env.PUBLIC_URL}/movies/:id` }
            component={ MovieDetails }
          />
          <Route path="*" component={ NotFound } />
        </Switch>
      </HashRouter>
      <footer className="footer-class text-muted">
        <Copyright />
      </footer>
    </>
  );
}
export default App;
