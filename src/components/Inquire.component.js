import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Input } from 'reactstrap';


class Inquire extends Component {
    state = {
        email: '',
        message: '',
        productName: ''
    }

    componentDidMount() {
        if (this.props.location.productName) {
            var text = '';

            if (this.props.match.params.lang === "LT")
                text = "Sveiki, mane domina ";
            else if (this.props.match.params.lang === "EN")
                text = "Hello, I am interested in ";

            this.setState({
                email: '',
                productName: this.props.location.productName,

                // not using this.state.productName here because its async
                message: text + this.props.location.productName
            },
            )
        }
    }

    // on lang switch, change the text
    componentDidUpdate(prevProps) {
        if ((prevProps.location.key !== this.props.location.key || prevProps.location.pathname !== this.props.location.pathname)) {
            if (this.state.productName) {

                var text = '';

                if (this.props.match.params.lang === "LT")
                    text = "Sveiki, mane domina ";
                else if (this.props.match.params.lang === "EN")
                    text = "Hello, I am interested in ";

                
                this.setState({
                    email: '',
                    message: text + this.state.productName,
                })
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if ((this.state.email !== "" && this.state.email !== undefined) && (this.state.message !== undefined && this.state.message !== '')) {

            let templateParams = {
                from_name: this.state.email,
                to_name: 'info@red-room.lt',
                message: this.state.message,
            }

            emailjs.send(
                'service_ndv2e3o',
                'template_f4hsl36',
                templateParams,
                'user_6JdN9Zns1wIN50N8dUi13'
            )
            this.resetForm()
        }
        else if (this.props.match.params.lang === "LT")
            alert("Prašome įvesti savo el. paštą ir žinutę.")
        else if (this.props.match.params.lang === "EN")
            alert("Please enter the message and your e-mail.")


    }

    resetForm() {
        this.setState({
            email: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        return (
            <div style={{ height: 'inherit' }}>
                <div id="inquire-container">
                    <h2 id="heading2" className="p-heading2">{this.props.match.params.lang === "LT" ? "Susisiekime" : this.props.match.params.lang === "EN" && "Get in Touch"}</h2  >

                    <Form style={{ marginTop: '3rem' }} onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup style={{ marginTop: '3rem' }} controlId="formBasicEmail">
                            <Input id="email-box"
                                type="email"
                                name="email"
                                value={this.state.email}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder={this.props.match.params.lang === "LT" ? "Jūsų el. paštas" : this.props.match.params.lang === "EN" && "Your email"}
                            />
                        </FormGroup>


                        <FormGroup style={{ marginTop: '3rem' }} controlId="formBasicMessage">
                            {/* <Label className="text-muted">{this.props.match.params.lang === "LT" ? "Žinutė" : this.props.match.params.lang === "EN" && "Message"}<br/></Label> */}
                            <Input id="input-box"
                                type="textarea"
                                name="message"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                                placeholder={this.props.match.params.lang === "LT" ? "Jūsų užklausa" : this.props.match.params.lang === "EN" && "Your inquiry"}
                            />
                        </FormGroup>

                        <Button style={{ borderRadius: '5px', width: '7rem', fontSize: '1.2rem', height: '2.2rem' }} variant="primary" type="submit">
                            {this.props.match.params.lang === "LT" ? "Siųsti" : this.props.match.params.lang === "EN" && "Send"}
                        </Button>
                    </Form>
                </div >
            </div >
        )
    }
}


export default Inquire;