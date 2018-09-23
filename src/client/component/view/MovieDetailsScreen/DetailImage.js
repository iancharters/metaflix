// Import actions ==============================================================
import * as React from 'react';
import styled from 'styled-components';

// Import components ===========================================================
import Icon from '../../base/Icon';

const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding-right: 20px;
  padding-top: 3px;
`;

const DetailImageWrapper = styled.div`
  background-image: url(${(props) => props.image});
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 221px;
  position: relative;
  bottom-padding: 19.72px;
`;

const DetailImageBannerBlur = styled.div`
  position: absolute;
  transform: translate(-0%, -50%);
  top: 90%;
  height: 43px;
  width: 100%;

  background: rgba(172, 172, 172, 0.85);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(5px);
`;

const DetailImageBanner = styled.div`
  position: absolute;
  transform: translate(-0%, -50%);
  top: 90%;
  height: 43px;
  width: 100%;
`;

const DetailImageBannerContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: #fff;
`;

class DetailImage extends React.PureComponent {
  render() {
    return (
      <DetailImageWrapper image={this.props.detailImage}>
        <DetailImageBannerBlur />
        <DetailImageBanner>
          <DetailImageBannerContent>
            <PlayIconWrapper>
              <Icon name="play" />
            </PlayIconWrapper>
            Play
          </DetailImageBannerContent>
        </DetailImageBanner>
      </DetailImageWrapper>
    );
  }
}

export default DetailImage;
