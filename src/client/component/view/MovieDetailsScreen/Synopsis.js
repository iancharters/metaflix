// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import Container from '../../base/Container';
import Text from '../../base/Text';

export const SynopsisWrapper = styled.div`
  opacity: 0.6;
  line-height: 22px;
  margin-bottom: 24px;
`;

class Synopsis extends React.PureComponent {
  render() {
    return (
      <Container>
        <SynopsisWrapper>
          <Text.H3>{this.props.synopsis}</Text.H3>
        </SynopsisWrapper>
      </Container>
    );
  }
}

export default Synopsis;
