import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;

const MovieWrapper = styled.div`
  width: 100%;
  display: block;
`;

const MovieTitle = styled.div`
  text-overflow: ellipses;
  overflow: hidden;
`;

const MovieActors = styled.div``;

class Movie extends React.PureComponent {
  static defaultProps = {
    movie: {
      id: 1,
      title: 'The Red Queen',
      wideImage:
        'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2014/06/red_queen_book_cover_a_p.jpg',
    },
  };
  render() {
    const {id, title, wideImage} = this.props.movie;
    return (
      <MovieWrapper as={Link} to={`/movie/${id}`}>
        <MovieImage src={wideImage} alt={title} />
      </MovieWrapper>
    );
  }
}

export default Movie;
