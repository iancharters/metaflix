// Import modules ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import Container from '../../base/Container';
import Separator from '../../base/Separator';
import Text from '../../base/Text';
import Icon from '../../base/Icon';
import {Redirect} from 'react-router-dom';

export const WidgetWrapper = styled.div`
  margin-top: 21px;
  margin-bottom: 21px;
`;

export const WidgetInnerWrapper = styled.div`
  margin-top: 20.38px;
  margin-bottom: 20.38px;
  text-align: center;
  display: flex;
`;

export const WidgetItem = styled.div`
  flex: auto;
`;

class Widget extends React.PureComponent {
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
    return (
      <>
        {this.state.redirect ? <Redirect to="/reviews/1" /> : null}
        <Container>
          <WidgetWrapper>
            <Separator />
            <WidgetInnerWrapper>
              <WidgetItem onClick={this.redirect}>
                <Icon name="discuss" />
                <Text.H3>Discuss</Text.H3>
              </WidgetItem>
              <WidgetItem>
                <Icon name="download" />
                <Text.H3>Download</Text.H3>
              </WidgetItem>
              <WidgetItem>
                <Icon name="share" />
                <Text.H3>Share</Text.H3>
              </WidgetItem>
              <WidgetItem>
                <Icon name="add" />
                <Text.H3>Add to List</Text.H3>
              </WidgetItem>
            </WidgetInnerWrapper>
            <Separator />
          </WidgetWrapper>
        </Container>
      </>
    );
  }
}

export default Widget;
