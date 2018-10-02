// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import Container from '../../base/Container';
import Text from '../../base/Text';
import Movie from '../../base/Movie';

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

class SimilarShows extends React.PureComponent {
  render() {
    const {similarShows} = this.props;
    return(
      <Container>
        <SimilarShowsWrapper>
          <Text.H2>Similar Shows</Text.H2>
          <SimilarShowsTrack>
            {similarShows.map((movie, i) => {
              return (
                <SimilarShowsItem key={i}>
                  <Movie movie={movie} />
                </SimilarShowsItem>
              );
            })}
          </SimilarShowsTrack>
        </SimilarShowsWrapper>
      </Container>
    );
  }
}

export default SimilarShows;
