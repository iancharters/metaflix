// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import Container from '../../base/Container';
import Icon from '../../base/Icon';
import StarRating from '../../base/StarRating';
import Text from '../../base/Text';

const MovieTitleWrapper = styled.div`
  display: inline-block;
`;

const MovieTitleLike = styled.div`
  float: right;
`;

const DetailSectionWrapper = styled.div`
  padding-top: 20px;
`;

const ActorSection = styled.div`
  padding-top: 14.5px;
  color: #d8d8d8;
  opacity: 0.6;
`;

const GenreSection = styled.div`
  opacity: 0.6;
  color: #ffffff;
  padding-top: 8px;
  padding-bottom: 20px;
`;

const ReviewText = styled.div`
  display: inline-block;
  position: absolute;
  padding-top: 4px;
  padding-left: 11.5px;
  opacity: 0.23;
`;

class DetailSection extends React.PureComponent {
  render() {
    console.log(this.props)
    const {movie} = this.props;
    return (
      <Container>
        <DetailSectionWrapper>
          <div>
            <MovieTitleWrapper>
              <Text.H1>{movie.title}</Text.H1>
            </MovieTitleWrapper>
            <MovieTitleLike>
              <Icon name="heart" />
            </MovieTitleLike>
          </div>
          <ActorSection>
            <Text.H3>{movie.actors.map((a) => a.name).join(', ')}</Text.H3>
          </ActorSection>
          <GenreSection>
            <Text.H3>{movie.genres.join(', ')}</Text.H3>
          </GenreSection>
        </DetailSectionWrapper>
        <StarRating rating={movie.rating} />
        <ReviewText>
          <Text.H3>
            {movie.rating} • {movie.reviewCount} reviews
          </Text.H3>
        </ReviewText>
      </Container>
    );
  }
}

export default DetailSection;
