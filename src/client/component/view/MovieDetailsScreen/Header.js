// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import Text from '../../base/Text';
import Container from '../../base/Container';
import Icon from '../../base/Icon';

const HeaderWrapper = styled.div`
  text-align: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
`;

const BackArrow = styled.div`
  display: inline-block;
  float: left;
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  display: inline-block;
`;

class Header extends React.PureComponent {
  render() {
    return (
      <Container>
        <HeaderWrapper>
          <BackArrow>
            <Icon name="leftArrow" />
            <Text.H3>Home</Text.H3>
          </BackArrow>
          <TitleWrapper>
            <Text.H3>Predestination</Text.H3>
          </TitleWrapper>
        </HeaderWrapper>
      </Container>
    );
  }
}

export default Header;
