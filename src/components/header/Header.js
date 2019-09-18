import React from 'react';
import { Button } from 'reactstrap';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            converter: 'Currency'
        }
        this.submitConverter = this.submitConverter.bind(this);
    }

    submitConverter(converter) {
        this.setState({converter: converter});
        const { onClick } = this.props;

        onClick(converter);
    }

    renderConverter(converter, id) {
        return <Button color="primary" value={converter} key={id} onClick={() => this.submitConverter(converter)}>{converter}</Button>
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Converter</a>
                {this.props.converters.map((converter, id) => this.renderConverter(converter, id))}
            </nav>
        );
    }
}

export default Header;