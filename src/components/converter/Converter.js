import React from 'react';
import Header from '../header/Header';
import { Container } from 'reactstrap';

class Converter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            converter: ''
        };
        this.onConverterSelect = this.onConverterSelect.bind(this);
    }

    onConverterSelect(converter) {
        this.setState({ converter });
    }
    render() {
        let appConverters = ['Currency', 'Weight', 'Temperature', 'Time', 'Length'];
        return (
            <div>
                <Header converters={appConverters} onClick={this.onConverterSelect}/>
                <Container>{this.state.converter}</Container>
            </div>
        );
    }
}

export default Converter;