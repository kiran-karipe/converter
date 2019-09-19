import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Convert.css';

class Convert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen_1: false,
            dropdownOpen_2: false
        };
        this.toggle_1 = this.toggle_1.bind(this);
        this.toggle_2 = this.toggle_2.bind(this);
    }

    toggle_1() {
        this.setState(prevState => ({
          dropdownOpen_1: !prevState.dropdownOpen_1
        }));
    }

    toggle_2() {
        this.setState(prevState => ({
          dropdownOpen_2: !prevState.dropdownOpen_2
        }));
    }

    render() {
        return (
            <Container className="Converter">
                <h1>{this.props.converter}</h1>
                <Row className="row-padding-top">
                    <Col sm="6">
                        <Dropdown isOpen={this.state.dropdownOpen_1} toggle={this.toggle_1}>
                            <DropdownToggle caret>
                                {this.props.currencies[0]}
                                <DropdownMenu>
                                    {this.props.currencies.map((currency, id) => (
                                        <DropdownItem value={currency} key={id}>{currency}</DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </DropdownToggle>
                        </Dropdown>
                    </Col>
                    <Col sm="6">
                        <Dropdown isOpen={this.state.dropdownOpen_2} toggle={this.toggle_2}>
                            <DropdownToggle caret>
                                {this.props.currencies[1]}
                                <DropdownMenu>
                                    {this.props.currencies.map((currency, id) => (
                                        <DropdownItem value={currency} key={id}>{currency}</DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </DropdownToggle>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Convert;