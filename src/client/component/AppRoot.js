import * as React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {IntlProvider} from 'react-intl';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import CSSReset from './CSSReset';
import HomeScreen from './view/HomeScreen';
import MovieDetailsScreen from './view/MovieDetailsScreen';
import NotFoundScreen from './view/NotFoundScreen';

import * as theme from '../theme';

const GlobalStyles = createGlobalStyle`
  html {
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.colors.trueWhite};
    font-family: 'Raleway', sans-serif;
  }

`;

class AppRoot extends React.Component {
  render() {
    const {client} = this.props;
    return (
      <ApolloProvider client={client}>
        <IntlProvider defaultLocale="en" locale="en" messages={{}}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <CSSReset />
              <GlobalStyles />
              <Router>
                <Switch>
                  <Route path="/" exact render={() => <HomeScreen />} />
                  <Route
                    path="/movie/:id"
                    render={(routeProps) => {
                      return (
                        <MovieDetailsScreen id={routeProps.match.params.id} />
                      );
                    }}
                  />
                  <Route render={() => <NotFoundScreen />} />
                </Switch>
              </Router>
            </React.Fragment>
          </ThemeProvider>
        </IntlProvider>
      </ApolloProvider>
    );
  }
}

export default AppRoot;
