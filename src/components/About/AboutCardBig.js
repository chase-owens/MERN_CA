import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { theme } from '../../styles/theme';

class AboutCardBig extends Component {
  state = {
    showAnswer: false
  };
  render() {
    const { point, color } = this.props;
    return this.state.showAnswer ? (
      <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
        <Typography paragraph align='center' variant='overline'>
          {point.title}
        </Typography>
        <Typorgraphy
          paragraph
          align='center'
          style={{ fontSize: '1.5em' }}
          variant='headline'
        >
          {point.question}
        </Typorgraphy>
      </div>
    ) : (
      <div style={{ padding: 25, margin: 'auto' }}>
        <Typography paragraph variant='overline' style={{ color: color }}>
          {point.title}
        </Typography>
        <Typography paragraph variant='body1' style={{ color: color }}>
          {point.question}
        </Typography>
      </div>
    );
  }

  toggleQandA = () => {
    this.setState({ showAnswer: !showAnswer }, () => console.log('here'));
  };
}

export default AboutCardBig;
