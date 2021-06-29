import React from "react";
import axios from "./../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import {connect} from "react-redux";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    postalCode: "",
    loading: false,
  }
  handleFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    
    this.setState({loading: true});
    
    const data = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        postalCode: this.state.postalCode
      }
    }
    await axios.post("/orders.json", data);
    this.setState({loading: false});
  }
  
  render() {
    return (
      <div className="Contact Container">
        {this.state.loading ? <Spinner /> :
          (<div className="FormWrapper">
            <form action="#" onSubmit={this.handleSubmit}>
              <input
                className="Input"
                name="name"
                onChange={this.handleFieldChange}
                value={this.state.name}
                type="text"
                placeholder="Your name"/>
              <input
                className="Input"
                name="email"
                onChange={this.handleFieldChange}
                value={this.state.email}
                type="email"
                placeholder="Your email"/>
              <input
                className="Input"
                type="text"
                name="address"
                onChange={this.handleFieldChange}
                value={this.state.address}
                placeholder="Your street"/>
              <input
                className="Input"
                type="text"
                name="postalCode"
                onChange={this.handleFieldChange}
                value={this.state.postalCode}
                placeholder="Postal code"/>
              <button className="Button FormButton">Submit</button>
            </form>
          </div>
          )
        }
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.bb.ingredients,
  totalPrice: state.bb.totalPrice,
})

export default connect(mapStateToProps)(Contact);
