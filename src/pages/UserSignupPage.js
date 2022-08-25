import React from "react";
import { signup , changeLanguage } from '../api/apiCalls';
import Input from '../companents/Input';
import { withTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";


class UserSignupPage extends React.Component {


    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pandingApiCall: false,
        errors: {}
    };

    onChange = event => {
        const { t } = this.props
        const { value, name } = event.target;
        const errors = {...this.state.errors};
        errors[name] = undefined;
        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password' && value !== this.state.passwordRepeat){
                errors.passwordRepeat = t('Password MisMatch');
            }else if (name === 'passwordRepeat' && value !== this.state.password){
                errors.passwordRepeat = t('Password MisMatch');
            }else {
                errors.passwordRepeat = undefined;
            }
           
        }
        this.setState({
            [name]: value,
            errors
        });
    };

    onClickSignup = async event => {
        event.preventDefault();
        const { username, displayName, password } = this.state;

        const body = {
            username,
            displayName,
            password
        };
        this.setState({ pandingApiCall: true });
        try {
            const response = await signup(body);
        }catch (error){
            if(error.response.data.validationErrors){
                
                this.setState({errors:error.response.data.validationErrors});
            }
        }
        this.setState({pandingApiCall: false}); 

        // signup(body)
        //     .then(response => {
        //         this.setState({ pandingApiCall: false })
        //     })
        //     .catch(error => {
        //         this.setState({ pandingApiCall: false })
        //     });
    };

    onChangeLanguage = language => {
        const { i18n } = this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }


    render() {
        const { t } = this.props;
        const { pandingApiCall , errors} = this.state;
        const {username , displayName , password , passwordRepeat} = errors;
        return (
            <div className="container mt-3">

                <form>

                    <h1 className="text-center">{t('Sign Up')}</h1>
                    <Input name="username" label={t("User Name")} error={username} onChange={this.onChange}></Input>
                    <Input name="displayName" label={t("Display Name")} error={displayName} onChange={this.onChange}></Input>
                    <Input name="password" label={t("Password")} error={password} onChange={this.onChange} type="password"></Input>
                    <Input name="passwordRepeat" label={t("Password Repeat")} error={passwordRepeat} onChange={this.onChange} type="password"></Input>
                    
                   
                    <div className="text-center">
                        <br></br>
                        <button className="btn btn-primary" onClick={this.onClickSignup} disabled={pandingApiCall || passwordRepeat !== undefined}>
                            {pandingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                            {t('Sign Up')}</button>
                    </div>
                    <div >
                    <span className="fi fi-tr fs-3" onClick={() => this.onChangeLanguage('tr')} style={{cursor: 'pointer'}}></span>
                    <span className="fi fi-us fs-3 mx-3" onClick={() => this.onChangeLanguage('en')} style={{cursor: 'pointer'}}></span>
                    </div>
                </form>
            </div>

        );

    }
}

const UserSignupPageWithTranslation = withTranslation()(UserSignupPage);
 
export default withTranslation()(UserSignupPage);