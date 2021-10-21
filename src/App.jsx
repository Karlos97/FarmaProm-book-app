import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import BooksList from './components/booksList/BooksList';
import Layout from './components/Layout/Layout';
import BookDetails from './components/booksList/BookDetails';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <BooksList />
        </Route>
        <Route path="/book/:bookId">
          <BookDetails />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
