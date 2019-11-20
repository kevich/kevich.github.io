import React from "react";
import PropTypes from 'prop-types';

class StoreTest extends React.Component {
    constructor(props) {
        super(props);
        if (props.updateInConstructor) {
            props.updateValue('updated');
        }
    }

    componentDidMount() {
        if (this.props.updateInDidMount) {
            this.props.updateValue('updated');
        }
    }

    render() {
        return <div>
            { this.props.value }<br />
            <button onClick={() => this.props.updateValue('Button updated')}>Update</button>
        </div>;
    }
}

StoreTest.defaultProps = {
    updateValue: () => {},
    value: 'default',
};

StoreTest.propTypes = {
    updateValue: PropTypes.func,
    value: PropTypes.string,
    updateInConstructor: PropTypes.bool,
    updateInDidMount: PropTypes.bool,
};

export default StoreTest;
