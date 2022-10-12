import React, { Component } from 'react';
import Input from '../companents/Input';
import { withTranslation } from 'react-i18next';
import { login } from '../api/apiCalls';
import axios from 'axios';
import ButtonWithProgress from '../companents/ButtonWithProgress';

class LoginPage extends Component {

    state = {

        username: null,
        password: null,
        error: null,
        pandingApiCall: false
    };

    componentDidMount(){
        axios.interceptors.request.use((request)=>{
            this.setState({pandingApiCall: true});
            return request;
        }); 
        axios.interceptors.response.use((response)=>{

        },(error)=>{
            this.setState({pandingApiCall: false});
            throw error;
        });
        
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            error : null
        });
    };

    onClickLogin = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        const creds = {
            username,
            password
        };
        this.setState({
            error : null
        });
        try {

            await login(creds);
        } catch (apierror) {
            this.setState({
                error: apierror.response.data.message
            });
        }
    };

    render() {
        const { t } = this.props;
        const { username, password, error, pandingApiCall} = this.state;

        const buttonEnabled =username && password ;
        return (
            <div className="container">
                <form>
                    <h1 className='text-center'>{t('Login')}</h1>
                    <Input label={t("User Name")} name="username" onChange={this.onChange} />
                    <br></br>
                    <Input label={t("Password")} name="password" type="password" onChange={this.onChange} />
                   {error && <div className="alert alert-danger" role="alert">
                       {error}
                    </div>}
                    <div className='text-center'>
                        <br></br>
                        <ButtonWithProgress
                        onClick={this.onClickLogin} 
                        disabled={!buttonEnabled || pandingApiCall} 
                        pandingApiCall={pandingApiCall}
                        text={t('Login')}
                        ></ButtonWithProgress>
                    </div>

                </form>
            </div>
        );
    }
}

export default withTranslation()(LoginPage);
