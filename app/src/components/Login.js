import React from "react";
import PropTypes from "prop-types";
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends React.Component {
  login = () => {
    alert("Logged In");
  };

  render() {
    return (
      <div className="login-container">
        <Form>
          {this.props.components.map((comp, index) => {
            switch (comp.type) {
              case "password":
              case "input":
                return (
                  <Form.Group className="mb-3" controlId={comp.id} key={index}>
                    <Form.Label>{comp.label}</Form.Label>
                    <Form.Control
                      type={comp.type}
                      placeholder={comp.placeholder}
                    />
                  </Form.Group>
                );
              case "button":
                return (
                  <Button variant="primary" type="submit" onClick={this.login}>
                    {comp.label}
                  </Button>
                );
              default:
                return null;
            }
          })}
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      content: PropTypes.string,
      keyboard: PropTypes.string,
      action: PropTypes.string,
    })
  ),
};

export default Login;
