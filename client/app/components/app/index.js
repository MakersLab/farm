import React, { PropTypes } from 'react';
import _ from 'lodash';
import MainView from '../../containers/mainView';

import style from './style.css';

class MainApp extends React.Component {
  constructor(props) {
    super(props);


    this.initalActions();
  }

  initalActions() {
  this.props.onButtonClick();
  }

  render() {
    return (
      <div className={style.app}>
        <div>
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
