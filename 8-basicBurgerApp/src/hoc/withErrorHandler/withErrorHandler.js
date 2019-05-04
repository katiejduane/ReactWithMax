import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount(){
            axios.interceptors.response.use(null, error => {
                this.setState({error: error})
            });
        }

        render(){
            return (
            <Aux>
                <Modal show>
                    Something didn't work!
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
            );
        }
    }
}

export default withErrorHandler;