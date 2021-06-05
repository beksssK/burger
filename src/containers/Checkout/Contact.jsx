import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact Container">
        <h4>Enter Your Contact Data</h4>
        <div className="FormWrapper">
          <form action="#">
            <input className="Input" type="text" placeholder="Your name"/>
            <input className="Input" type="email" placeholder="Your email"/>
            <input className="Input" type="text" placeholder="Your street"/>
            <input className="Input" type="text" placeholder="Postal code"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
