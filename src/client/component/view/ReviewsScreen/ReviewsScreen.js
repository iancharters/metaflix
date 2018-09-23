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

// Import query ================================================================
import {GET_MOVIE_REVIEWS} from '../../query/movie.query';

const Bubble = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 0.4em;
  text-align: left;
  padding: 20px 15px;
  background-color: #6b6776;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 26px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #6b6776;
    border-top: 0;
    margin-left: -10px;
    margin-top: -10px;
  }
`;

const BubbleText = styled.div`
  display: block;
  color: #ffffff;
  opacity: 0.6;
`;

const PosterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  padding-bottom: 18px;
`;

const PosterInfoItem = styled.div`
  &:nth-child(1) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    padding-right: 8px;
  }
  &:nth-child(2) {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
  }
  &:nth-child(3) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }
`;

const NameWrapper = styled.div`
  padding-bottom: 8px;
  opacity: 0.23;
`;

const Picture = styled.div`
  height: 53px;
  width: 53px;
  background-color: #d6d6d6;
  border-radius: 50%;
`;

const DateWrapper = styled.div`
  opacity: 0.23;
`;

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
                <PosterInfoWrapper>
                  <PosterInfoItem>
                    <Picture />
                  </PosterInfoItem>
                  <PosterInfoItem>
                    <NameWrapper>
                      <Text.H3>Cole</Text.H3>
                    </NameWrapper>
                    <StarRating rating={4} />
                  </PosterInfoItem>
                  <PosterInfoItem>
                    <DateWrapper>
                      <Text.H3>3 days ago</Text.H3>
                    </DateWrapper>
                  </PosterInfoItem>
                </PosterInfoWrapper>
                <Bubble>
                  <BubbleText>
                    <Text.H3>
                      I loved “Predestination”! The romance, the drama, the
                      precision and literary devices… everything was just
                      perfect. Would watch again! A++++++
                    </Text.H3>
                  </BubbleText>
                </Bubble>
              </Container>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default ReviewsScreen;
