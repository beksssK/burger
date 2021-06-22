import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      }
      this.state.interceptorId = axios.interceptors.response.use(response => response, error => {
        console.log("error ", error);
        this.setState({error: error});
      });
    }
    componentWillUnmount() {
      axios.interceptors.response.eject(this.state.interceptorId);
    }
  
    errorDismissed = () => {
      this.setState({error: null});
    }
    render() {
      return (
        <>
          <Modal show={this.state.error} closed={this.errorDismissed}>This is an error message</Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
}

export default withErrorHandler;