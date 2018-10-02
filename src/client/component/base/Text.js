import styled from 'styled-components';

export const H1 = styled.div`
  font-size: 24px;
`;

export const H2 = styled.div`
  font-size: 20px;
  font-family: 'Helvetica', sans-serif;
  padding-bottom: 16.21px;
`;

export const H3 = styled.div`
font-size: 16px;
font-family: 'Helvetica Neue', sans-serif;
`;

export const P = styled.p`
  color: rgba(255, 255, 255, 0.6);
`;

export const LOGO = styled.div`
  font-size: 36px;
  font-family: 'Helvetica Neue', sans-serif;
  display: inline-block;
`;

export const SMALL_RIGHT = styled.div`
  font-size: 14px;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.23);
  float: right;
`;

export const TEST = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Text = {
  H1,
  H2,
  H3,
  LOGO,
  SMALL_RIGHT,
  TEST,
};

export default Text;
