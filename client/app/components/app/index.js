import React, { PropTypes } from 'react';
import _ from 'lodash';
import MainView from '../../containers/mainView';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.text}
        </div>
        <div>
          <MainView />
        </div>
      </div>
    );
  }

}

MainApp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MainApp;
