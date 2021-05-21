import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Input } from 'reactstrap';


export default class Inquire extends Component {
    state = {
        email: '',
        message: '',
        productName: ''
    }

    componentDidMount() {
        if (this.props.location.productName) {
            const text = this.props.language === "LT" ? "Sveiki, mane domina " : "Hello, I am interested in ";

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
                const text = this.props.language === "LT" ? "Sveiki, mane domina " : "Hello, I am interested in ";

                this.setState({
                    email: '',

                    // not using this.state.productName here because its async
                    message: text + this.state.productName,
                })
            }
        }
    }


    handleSubmit(e) {
        e.preventDefault();

        if (this.state.email && this.state.message) {
            const templateParams = {
                from_name: this.state.email,
                to_name: 'info@red-room.lt',
                message: this.state.message,
            }

            emailjs.send(
                // javascript code is visible to everyone so there's no point to encrypt or hide these parameters
                'service_ndv2e3o',
                'template_f4hsl36',
                templateParams,
                'user_6JdN9Zns1wIN50N8dUi13'
            );

            this.resetForm();

            alert(this.props.language === "LT" ? "Ačiū už jūsų užklausą! Greitai su Jumis susisieksime." : "Thank You for the inquiry! We will contact you soon.");
        }
        else if (this.props.language === "LT")
            alert("Prašome įvesti savo el. paštą ir žinutę.")
        else
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
            <div style={{ height: 'inherit', marginTop: '7.5rem' }}>
                <div id="inquire-container">
                    <h2 id="heading2" className="p-heading2">{this.props.language === "LT" ? "Siųsti el. laišką" : "Send an e-mail"}</h2  >

                    <Form style={{ marginTop: '3rem' }} onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup style={{ marginTop: '3rem' }} controlId="formBasicEmail">
                            <Input id="email-box"
                                type="email"
                                name="email"
                                value={this.state.email}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder={this.props.language === "LT" ? "Jūsų el. paštas" : "Your email"}
                            />
                        </FormGroup>


                        <FormGroup style={{ marginTop: '3rem' }} controlId="formBasicMessage">
                            {/* <Label className="text-muted">{this.props.language === "LT" ? "Žinutė" : this.props.language === "EN" && "Message"}<br/></Label> */}
                            <Input style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.35rem' }} id="input-box"
                                type="textarea"
                                name="message"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                                placeholder={this.props.language === "LT" ? "Jūsų užklausa" : "Your inquiry"}
                            />
                        </FormGroup>

                        <Button style={{ borderRadius: '5px', width: '7rem', fontSize: '1.2rem', height: '2.2rem' }} letiant="primary" type="submit">
                            {this.props.language === "LT" ? "Siųsti" : "Send"}
                        </Button>
                    </Form>
                </div >
            </div >
        )
    }
}