// Import modules ==============================================================
import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

// Import components ===========================================================
import DetailImage from './DetailImage';
import DetailSection from './DetailSection';
import Widget from './Widget';
import Synopsis from './Synopsis';
import SimilarShows from './SimilarShows';

import {Query} from 'react-apollo';
import Text from '../../base/Text';
import StarRating from '../../base/StarRating';
import Movie from '../../base/Movie';
import Container from '../../base/Container';
import Icon from '../../base/Icon';
import Separator from '../../base/Separator';
import SectionHeader from '../../base/SectionHeader';

// Import query ================================================================
import {GET_MOVIE} from '../../query/movie.query';

class MovieDetailsScreen extends React.PureComponent {
  render() {
    let {movie} = this.props;
    return (
      <Query query={GET_MOVIE} variables={{id: this.props.id}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          movie = data.movie;
          return (
            <>
              <SectionHeader returnTo={'Home'} title={movie.title} path="/"/>
              <DetailImage detailImage={movie.detailImage} />
              <DetailSection movie={movie} />
              <Widget movieID={movie.id} />
              <Synopsis synopsis={movie.synopsis} />
              <SimilarShows similarShows={movie.similarShows} />
            </>
          );
        }}
      </Query>
    );
  }
}


export default MovieDetailsScreen;
