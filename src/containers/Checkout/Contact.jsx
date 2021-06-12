import React from "react";
import axios from "./../../axios-orders";
import {INGREDIENT_PRICES} from "../BurgerBuilder/BurgerBuilder";
import Spinner from "../../components/UI/Spinner/Spinner";

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
    
    const price = Object.keys(this.props.ingredients).reduce((acc, ingredientKey) => {
      return acc + this.props.ingredients[ingredientKey] * INGREDIENT_PRICES[ingredientKey]
    }, 20);
    const data = {
      ingredients: this.props.ingredients,
      price,
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

export default Contact;
