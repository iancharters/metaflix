// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import {Query} from 'react-apollo';
import {Redirect} from 'react-router-dom';
import SectionHeader from '../../base/SectionHeader';
import Container from '../../base/Container';
import Text from '../../base/Text';
import StarRating from '../../base/StarRating';
import Review from './Review';

// Import query ================================================================
import {GET_MOVIE_REVIEWS} from '../../query/movie.query';

class ReviewsScreen extends React.PureComponent {
  render() {
    return (
      <Query query={GET_MOVIE_REVIEWS} variables={{id: this.props.movieID}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <React.Fragment>
              <SectionHeader
                returnTo={'Details'}
                title={'Reviews'}
                path={`/movie/${this.props.movieID}`}
              />
              <Container>
                  {data.movie.reviews.map((review) => {
                    return <Review review={review} />;
                  })}
              </Container>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default ReviewsScreen;
