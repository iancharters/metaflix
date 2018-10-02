// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import {Redirect} from 'react-router-dom';
import Text from './Text';
import Container from './Container';
import Icon from './Icon';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
  height: 44px;
`;

const SideWrapper = styled.div`
  display: block;
  width: 75px;
`;

const BackArrow = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 8px;
  padding-top: 2px;
  display: inline-block;
  float: left;
`;

const BackText = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  float: left;
  font-family: HelveticaNeue;
  font-size: 17px;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: block;
  margin: auto 0;
`;

class SectionHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.setState({redirect: true});
  }

  render() {
    const {returnTo, title, path} = this.props;
    return (
      <Container>
        {this.state.redirect ? <Redirect to={path} /> : null}
        <HeaderWrapper>
          <SideWrapper onClick={this.redirect}>
            <BackArrow>
              <Icon name="leftArrow" />
            </BackArrow>
            <BackText>
              <Text.H3>{returnTo}</Text.H3>
            </BackText>
          </SideWrapper>
          <TitleWrapper>
            <Text.H3>{title}</Text.H3>
          </TitleWrapper>
          <SideWrapper>&nbsp;</SideWrapper>
        </HeaderWrapper>
      </Container>
    );
  }
}

export default SectionHeader;
