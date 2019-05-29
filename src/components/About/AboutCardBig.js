import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { theme } from '../../styles/theme';

class AboutCardBig extends Component {
  state = {
    showAnswer: false
  };
  render() {
    const { point } = this.props;
    return this.state.showAnswer ? (
      <div>
        <Typography variant='body2'>{point.title}</Typography>
        <Typorgraphy paragraph style={{ fontSize: '1.5em' }} variant='headline'>
          {point.question}
        </Typorgraphy>
      </div>
    ) : (
      <div>
        <Typography variant='body2'>{point.title}</Typography>
        <Typorgraphy paragraph style={{ fontSize: '1.5em' }} variant='headline'>
          {point.question}
        </Typorgraphy>
      </div>
    );
  }

  toggleQandA = () => {
    this.setState({ showAnswer: !showAnswer }, () => console.log('here'));
  };
}

export default AboutCardBig;
