import * as React from 'react';
import styled from 'styled-components';

import Icon from '../base/Icon';

const Star = styled.div`
  padding-right: 4.75px;
  display: inline-block;
`;

class StarRating extends React.PureComponent {
  render() {
    const rating = Math.round(this.props.rating);
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<Icon name="starFilled" />);
    }

    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<Icon name="star" />);
    }

    return (
      <div style={{display: 'inline-block'}}>
        {stars.map((star, i) => {
          return <Star key={i}> {star} </Star>;
        })}
      </div>
    );
  }
}

export default StarRating;
