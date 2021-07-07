import React from 'react';
import firebase from 'components/Firestore';
import '../assets/css/clients.css';
import '../assets/css/aos.css';
import PE from 'assets/img/flags/PE.png';

// reactstrap components
import { Container } from "reactstrap";

// Header and Footer
import IndexNavbar from 'components/Navbars/IndexNavbar';

const initialState = {
    name: '',
    email: '',
    subject:'',
    message: '',
    nameError:'',
    emailError:'',
    subjectError:'',
    messageError:''
};

class ContactForm extends React.Component {
    state = initialState;

        
        updateInput = e => {
            const isCheckbox = e.target.type === "checkbox";
            this.setState({
                [e.target.name]
                : isCheckbox
                ? e.target.checked
                : e.target.value
            });
        };

        validate = () => {
            let nameError = "";
            let emailError = "";
            let messageError = "";
        
            if (!this.state.name) {
              nameError = "Escriba su Nombre";
            }
        
            if (!this.state.email.includes("@")) {
              emailError = "Correo Electronico Invalido";
            }
            if (!this.state.message){
                messageError = "Escriba su Pregunta";
            }
        
            if (emailError || nameError || messageError ) {
              this.setState({ emailError, nameError, messageError });
              return false;
            }
        
            return true;
          };
          
          addUser = e => {
            e.preventDefault();
            const isValid = this.validate();
            if (isValid) {
                console.log(this.state);
                // clear form
                this.setState(initialState);
            }
            const db = firebase.firestore();
                db.settings({
                    timestampsInSnapshots: true
                });
            
            db.collection('users').add({
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message,
                    time: new Date(),
            });  

                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
        };
        
        render() {
            const { name, email, subject, message } = this.state;
            return (

              <div className="section section-image section-login"
              style={{ backgroundImage: "url(" + require("assets/img/background/map.jpg") + ")" }} > 
       <IndexNavbar></IndexNavbar>
       <br /> 
       <br /> 
       <br /> 

       <div id="images">
        <Container> 
          <div id="images">
              <div className="title">
                  {/* <h3 >   <a href="/landing.html" >
                <img
                  src={require("assets/img/logo.png")}
                  style={{ width: "25%" }}
                />
              </a> Contacta Con Nosotros y resuelve todas tus dudas
              </h3> */}
              <h3 align="center"><b>Contacta Con Nosotros y resuelve todas tus dudas</b></h3>
                      
                      
                </div>
            </div>

            <br />

          <section className="contact section-bg" id="contact" >
            <div className="container">
            
              <div className="row">
                <div className="col-lg-4">
                  <div className="info d-flex flex-column justify-content-center" >
                    <div className="address">
                      <i className="fa fa-map-marker">
                      </i>
                      <p> <img className="img-fluid" src={PE} alt="Electroperu"/> <br />Av. Gral. Recavarren 103, Of. 403<br></br> Miraflores<br></br> Lima, Perú
                       </p>  
                    </div>
                    <div className="email">
                      <i className="fa fa-envelope"> </i> 
                      <p>contact@apr-control.com</p>
                      <p>ingenieria@apr-control.com</p>
                    </div>
     
                    <div className="phone">
                      <i className="fa fa-whatsapp"></i> <br />                 
                      <p>
                      +51 923 239 709 
                      </p>
                    </div> 
                  </div>
      
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                  
                    <form onSubmit={this.addUser}  class="email-form" >
                            <div className="form-row">
                                      <div className="col-md-6 form-group">    
                                        <input type="text" 
                                            name="name" 
                                            className="form-control" 
                                            id="name" 
                                            placeholder="Nombre" 
                                            onChange={this.updateInput} 
                                            value={name}
                                          />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.nameError}
                                                </div>
                                      </div>

                                      <div className="col-md-6 form-group">
                                          <input type="Email" 
                                            className="form-control" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Correo Electronico" 
                                            onChange={this.updateInput}  
                                            value={email}  
                                          />
                                                <div style= {{ fontSize: 12, color: "red"}}>
                                                    {this.state.emailError}
                                                </div>
                                        </div>
                                </div>
                                
                                    <div className="form-group">
                                          <input type="text" 
                                            className="form-control" 
                                            name="subject" id="subject" 
                                            placeholder="Sujeto" 
                                            onChange={this.updateInput}  
                                            value={subject}  
                                          />
                                            {/* <div style={{ fontSize: 12, color: "red"}}>
                                                {this.state.subjectError}
                                                </div> */}
                                        </div>
                                           <div className="form-group">
                                    <textarea 
                                      className="form-control" 
                                      name="message" 
                                      rows="5"  
                                      placeholder="Escriba Su Pregunta" 
                                      onChange={this.updateInput} 
                                      value={message}
                                    >
                                    </textarea>
                                    <div style = {{ fontSize: 12, color: "red"}}>
                                            {this.state.messageError}
                                            </div>
                                  </div>
                                  <div className="text-center">
                                      <button type="submit">Enviar Su Pregunta
                                      </button>
                              </div>
                      </form>
              </div>
              </div>

              </div>
              
          </section>
          </Container>
          </div>


      </div>
          );
        }
      }
      export default ContactForm;