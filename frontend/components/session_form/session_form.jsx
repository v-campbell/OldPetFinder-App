import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.fillDemo = this.fillDemo.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.handleForm(user)
            .then(() => (this.props.closeModal()))
    }

    handleDemo(e, speed = 50) {
        e.preventDefault();
        const user = { username: 'hotdog', password: 'password'};
        let { username, password } = user;
        if (this.state.username !== username) {
            const inputUser = setInterval(() => {
                if (this.state.username !== username) {
                    const temp = username.slice(0, this.state.username.length + 1);
                    this.setState({ username: temp });
                } else {
                    clearInterval(inputUser);
                    animatePassword();
                }
            }, speed);
        }

        const animatePassword = () => {
            const inputPassword = setInterval(() => {
                if (this.state.password !== password)
                    this.setState({
                        password: password.slice(0, this.state.password.length + 1),
                    });
                else {
                    clearInterval(inputPassword);
                    login();
                    this.props.closeModal();
                }
            }, speed);
        };
        const login = () => {
            this.props.login(this.state);
            this.setState({ username: "", password: "" });
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        window.scrollTo(0, 0);
        return(
            <ul className="errorBox">
                {this.props.errors.map((error, i) => (
                    <li className='errors' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    fillDemo(e) {
        e.preventDefault();
        this.props.handleForm({ username: 'hotdog', password: 'password' })
        .then(() => (this.props.closeModal()))
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    render() {
        return(
            <div>
                <div onClick={this.props.closeModal} className='close-x'>×</div>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <div className='form-header'>{this.props.formType}!</div>

                    {this.props.formType === 'Sign Up' ? 
                        ( <div className='signUpForm'>
                            <br />
                            {this.renderErrors()}
                            <br/>
                            <div className='input-label'>
                                <div className='input-text'>
                                    First Name*
                                </div>
                                <input type='text' className='input' value={this.state.firstName} autoFocus="autoFocus" onChange={this.update('first_name')} />
                            </div>
                            <div className='input-label'>
                                <div className='input-text'>
                                    Last Name*
                                </div>
                                <input type='text' className='input' value={this.state.lastName} onChange={this.update('last_name')} />
                            </div>
                            <div className='input-label'>
                                <div className='input-text'>
                                    Email*
                                </div>
                                <input type='email' className='input' value={this.state.email} onChange={this.update('email')} />
                            </div>
                            <div className='input-label'>
                                <div className='input-text'>
                                    Username*
                                </div>
                                <input type='text' className='input' value={this.state.username} onChange={this.update('username')} />
                            </div>
                            <div className='input-label'>
                                <div className='input-text'>Password* - minimum 6 characters</div>
                                <input type='password' className='input' value={this.state.password} onChange={this.update('password')} />
                            </div>
                            <br/>
                            <input type='submit' className='final-button' value={this.props.formType} />
                            <br />
                            <div className='bottom-modal-buttons'>
                                <br />
                                Already have an account? {this.props.otherForm}
                                {/* <br /> */}
                                {/* Too lazy to create one? <button onClick={this.handleSignUpDemo}> DEMO USER </button> */}
                            </div>
                            <br />
                            </div>

                        ) : ( <div>
                            <br />
                            {this.renderErrors()}
                            <div className='input-field'>
                                <div className='input-label'>
                                    <div className='input-text'>
                                    Username
                                    </div>
                                    <input type='text' className='input' value={this.state.username} autoFocus="autoFocus" onChange={this.update('username')} />
                                </div>
                                <div className='input-label'>
                                    <div className='input-text'>Password</div>
                                    <input type='password' className='input' value={this.state.password} onChange={this.update('password')} />
                                </div>
                            </div>
                            <br />
                            <input type='submit' className='final-button' value={this.props.formType} />
                            <br />
                            <br />
                            <div className='bottom-modal-buttons'>
                                Need an account? {this.props.otherForm}
                                <br />
                                <br />
                                Too lazy to create one? <button onClick={this.handleDemo}> DEMO USER </button>
                                <br />
                            </div>
                        </div>)
                    }

                </form>
            </div>
        );
    }
}

export default LoginForm;