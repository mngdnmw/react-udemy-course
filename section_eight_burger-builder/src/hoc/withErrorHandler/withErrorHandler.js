import React, { Component } from 'react';
import Aux from '../Auxillary/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

    // class factory - anonymous class - no name, just returns the class
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {

            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.responseInterceptor= axios.interceptors.response.use(res=>res, errorBack => {
                this.setState({ error: errorBack });
                
            });

        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        componentWillUnmount(){
            axios.interceptors.eject(this.requestInterceptor);
            axios.interceptors.eject(this.responseInterceptor);
        }


        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }

}

export default withErrorHandler;