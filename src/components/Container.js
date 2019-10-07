import React from "react";
import PropTypes from 'prop-types';
import "components/Container.css";

class Container extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { text, children } = this.props;
      return (
        <div className="Container">
          {children}
        </div>
      );
    }
  }
  Container.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default Container;
  