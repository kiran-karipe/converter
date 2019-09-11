import React from 'react';
import { Button } from 'reactstrap';

class Header extends React.Component {

    renderConverter(converter, id) {
        return <Button color="primary" key={id}>{converter}</Button>
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