import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;

const MovieWrapper = styled.div`
  width: 128px;
  display: block;
`;

const MovieTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

class Movie extends React.PureComponent {
  static defaultProps = {
    movie: {
      id: 1,
      title: 'The Red Queen',
      coverImage:
        'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2014/06/red_queen_book_cover_a_p.jpg',
    },
  };
  render() {
    const {id, title, coverImage} = this.props.movie;
    return (
      <MovieWrapper as={Link} to={`/movie/${id}`}>
        <MovieImage src={coverImage} alt={title} />
        <MovieTitle>{title}</MovieTitle>
      </MovieWrapper>
    );
  }
}

export default Movie;
