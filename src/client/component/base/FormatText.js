// Import modules ==============================================================
import * as React from 'React';
import styled from 'styled-components';

const Paragraph = styled.p`
  padding-bottom: 15px;
  white-space: pre-wrap;
  &:last-child {
    padding-bottom: 0;
  }
`;

const ReadMore = styled.div`
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
  text-decoration: underline;
  font-weight: bold;
  display: inline-block;
`;

class FormatText extends React.PureComponent {
  render() {
    const text = this.props.children;
    const textLength = text.split(' ').length;

    // This is just to emulate how the design looks.  In reality this is not how
    // this should be implemented.  More likely should be implemented by lines or
    // height instead of 41 words.  Long words cause issues.

    const newText = text
      .split(' ')
      .splice(0, 41)
      .join(' ')
      .split('\n')
      .filter((t) => t.length > 0);

    const newTextLength = newText.join(' ').split(' ').length;

    if (newTextLength < textLength) {
      newText[newText.length - 1] = (
        <span>
          {(newText[newText.length - 1] += '... ')}
          <ReadMore>{'Read More'}</ReadMore>
        </span>
      );
    }

    return (
      <React.Fragment>
        {newText.map((t, i) => (
          <Paragraph key={i}>{t}</Paragraph>
        ))}
      </React.Fragment>
    );
  }
}

export default FormatText;
