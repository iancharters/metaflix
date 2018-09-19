import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

import {Query} from 'react-apollo';

import Container from '../base/Container';
import Text from '../base/Text';
import BannerMovie from '../base/BannerMovie';
import Movie from '../base/Movie';
import Carousel from '../base/Carousel';
import LoadingSpinner from '../base/LoadingSpinner';
import Icon from '../base/Icon';

const ALL_MOVIES = gql`
  {
    movies {
      id
      title
      coverImage
      wideImage
      category
    }
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  padding-right: 16.32px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <div style={{paddingTop: '32px'}}>
        <Container>
          <HeaderWrapper>
            <LogoWrapper>
              <Icon name="menu" />
            </LogoWrapper>
            <Text.LOGO>METAFLIX</Text.LOGO>
          </HeaderWrapper>
        </Container>
        <Query query={ALL_MOVIES}>
          {({loading, error, data}) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const banner = data.movies.filter((movie) => {
              return movie.category == 'banner';
            });

            const colesPicks = data.movies.filter((movie) => {
              return movie.category == 'cole';
            });

            const recommended = data.movies.filter((movie) => {
              return movie.category == 'recommended';
            });

            return (
              <div>
                <Container>
                  {banner.map((movie) => {
                    return <BannerMovie key={movie.id} movie={movie} />;
                  })}
                </Container>
                <Container>
                  <Text.H2>
                    Cole's Picks
                    <Text.SMALL_RIGHT>See all</Text.SMALL_RIGHT>
                  </Text.H2>
                  <Carousel>
                    {colesPicks.map((movie) => {
                      return <Movie key={movie.id} movie={movie} />;
                    })}
                  </Carousel>
                </Container>
                <Container>
                  <Text.H2>
                    Recommended
                    <Text.SMALL_RIGHT>See all</Text.SMALL_RIGHT>
                  </Text.H2>
                  <Carousel>
                    {recommended.map((movie) => {
                      return <Movie key={movie.id} movie={movie} />;
                    })}
                  </Carousel>
                </Container>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default HomeScreen;
