// Import modules ==============================================================
import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

// Import components ===========================================================
import Header from './Header';
import DetailImage from './DetailImage';
import DetailSection from './DetailSection';

import {Query} from 'react-apollo';
import Text from '../../base/Text';
import StarRating from '../../base/StarRating';
import Movie from '../../base/Movie';
import Container from '../../base/Container';
import Icon from '../../base/Icon';
import Separator from '../../base/Separator';

// Import query ================================================================
import {GET_MOVIE} from '../../query/movie.query';

export const WidgetWrapper = styled.div`
  margin-top: -10.4px;
  padding-bottom: 20.3px;
`;

export const WidgetInnerWrapper = styled.div`
  padding-top: 20.38px;
  padding-bottom: 20.38px;
`;

export const Widget = styled.div``;

export const SynopsisWrapper = styled.div`
  opacity: 0.6;
  line-height: 22px;
  margin-top: -32px;
`;

export const SimilarShowsWrapper = styled.div`
  font-weight: bold;
  position: relative;
`;

export const SimilarShowsTrack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
`;

export const SimilarShowsItem = styled.div`
  max-width: 100%;
  padding-right: 48px;
  flex-shrink: 0;
  display: inline-flex;
  transform: translateZ(0);
  &:last-child {
    padding-right: 0px;
  }
`;

const similarMovies = [
  {
    id: 1,
    title: 'Looper',
    coverImage: '',
  },
  {
    id: 2,
    title: 'Source Code',
    coverImage: '',
  },
];

class MovieDetailsScreen extends React.PureComponent {
  static defaultProps = {
    movie: {
      title: 'XXX',
      actors: [
        {
          id: 1,
          name: 'YYY',
        },
      ],
      genres: [
        "g1"
      ],
      rating: 4.6,
      reviewCount: 1202,
      similarMovies: [],
    },
  };

  render() {
    let {movie} = this.props;
    return (
      <Query query={GET_MOVIE} variables={{id: this.props.id}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          if (data.movie) {
            movie = data.movie;
          }

          const similarMovies = [];

          return (
            <div>
              <Header />
              <DetailImage movie={movie} />
              <DetailSection movie={movie} />

              <Container>
                <WidgetWrapper>
                  <Separator />
                  <WidgetInnerWrapper>THINGS</WidgetInnerWrapper>
                  <Separator />
                </WidgetWrapper>
              </Container>

              <Container>
                <SynopsisWrapper>
                  <Text.H3>{movie.synopsis}</Text.H3>
                </SynopsisWrapper>
              </Container>

              <Container>
                <SimilarShowsWrapper>
                  <Text.H2>Similar Shows</Text.H2>
                  <SimilarShowsTrack>
                    {similarMovies.map((movie) => {
                      return (
                        <SimilarShowsItem>
                          <Movie movie={movie} />
                        </SimilarShowsItem>
                      );
                    })}
                  </SimilarShowsTrack>
                </SimilarShowsWrapper>
              </Container>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default MovieDetailsScreen;
