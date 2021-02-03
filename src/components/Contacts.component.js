import React, { Component } from 'react';

// import * as emailjs from 'emailjs-com';
// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';


// class ContactForm extends Component {
//     state = {
//         email: '',
//         message: '',
//     }

//     handleSubmit(e) {
//         e.preventDefault();

//         let templateParams = {
//             from_name: this.state.email,
//             to_name: 'jonas.girdzijauskas@gmail.com',
//             message: this.state.message,
//         }

//         emailjs.send(
//             'service_ndv2e3o',
//             'template_f4hsl36',
//             templateParams,
//             'user_6JdN9Zns1wIN50N8dUi13'
//         )
//         this.resetForm()
//     }

//     resetForm() {
//         this.setState({
//             email: '',
//             message: '',
//         })
//     }

//     handleChange = (param, e) => {
//         this.setState({ [param]: e.target.value })
//     }

//     render() {
//         return (
//             <>
//                 <h1 className="p-heading1">Get in Touch</h1>
//                 <Form onSubmit={this.handleSubmit.bind(this)}>
//                     <FormGroup controlId="formBasicEmail">
//                         <Label className="text-muted">Email address</Label>
//                         <Input
//                             type="email"
//                             name="email"
//                             value={this.state.email}
//                             className="text-primary"
//                             onChange={this.handleChange.bind(this, 'email')}
//                             placeholder="Enter email"
//                         />
//                     </FormGroup>


//                     <FormGroup controlId="formBasicMessage">
//                         <Label className="text-muted">Message</Label>
//                         <Input
//                             type="textarea"
//                             name="message"
//                             className="text-primary"
//                             value={this.state.message}
//                             onChange={this.handleChange.bind(this, 'message')}
//                         />
//                     </FormGroup>

//                     <Button variant="primary" type="submit">
//                         Submit
//               </Button>
//                 </Form>
//                 <Contacts/>
//             </>
//         )
//     }
// }


const Contacts = (props) => {
    return (
        < div style={{ height: 'inherit' }}>

            <div className="fast-fix" >
                <div id="container-contacts-text-grid">
                    <div style={{ paddingBottom: '1rem' }}>
                        <span>RED-ROOM</span>
                        <span style={{ color: 'red' }}>SHOWROOM</span>
                    </div>

                    <p>A. JUOZAPAVIČIAUS PR. 31, KAUNAS</p>
                    <p>LIETUVA, LT-45257/LITHUANIA</p>
                </div>

                <div id="container-contacts-text-grid" className="fast-fix-2">
                    <p>
                        {
                            props.match.params.lang === "LT" ? "SUSISIEKIME:" :
                                props.match.params.lang === "EN" && "GET IN TOUCH:"
                        }


                    </p>
                    <p>+370 6 431 0657</p>
                    <p>INFO@RED-ROOM.LT</p>
                </div>
            </div>
        </div >
    );
}


export default Contacts
