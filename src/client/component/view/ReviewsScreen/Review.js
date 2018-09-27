// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import StarRating from '../../base/StarRating';
import Text from '../../base/Text';

const ReviewWrapper = styled.div`
  margin-bottom: 31px;
`;

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
  padding-bottom: 20px;
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

class Review extends React.PureComponent {
  render() {
    const {review} = this.props;
    return (
        <ReviewWrapper>
          <PosterInfoWrapper>
            <PosterInfoItem>
              <Picture />
            </PosterInfoItem>
            <PosterInfoItem>
              <NameWrapper>
                <Text.H3>{review.user.name}</Text.H3>
              </NameWrapper>
              <StarRating rating={review.rating} />
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
                {review.content}
              </Text.H3>
            </BubbleText>
          </Bubble>
        </ReviewWrapper>
    );
  }
}

export default Review;
