import "./css/login.css";
import logo from './img/logo.png';

export default function Login({
    valider,
    onChange, userForm, onGotoCreate,errorService,

                              }) {
    return (
        <div className="page">
            <header className="navbar">
                <div className="logo"><img style={{
                    width: '50px'
                }} src={logo} alt={'logo'}/> </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="back-home">Back to Home</a>
            </header>

            <main className="container">
                <div className="card">
                    <h1>Welcome Back</h1>
                    <p className="subtitle">Sign in to your ResidenceHub account</p>

                    <form>
                        <label>Email Address</label>
                        <div className="input-group">
                            <span className="icon">✉️</span>
                            <input onChange={onChange}
                                   name={'email'}
                                   value={userForm?.email}
                                   type="email" placeholder="you@example.com" />
                        </div>

                        <div className="password-header">
                            <label>Password</label>
                            <a href="#" className="forgot">Forgot?</a>
                        </div>

                        <div className="input-group">
                            <span className="icon">🔒</span>
                            <input type="password"
                                   name='password'
                                   value={userForm?.password}
                                   onChange={onChange} placeholder="••••••••" />
                        </div>

                        <button onClick={valider} className="btn-primary">Sign In →</button>
                        {errorService !== null && (
                            <span style={{
                                color:'red',
                            }}>{errorService}</span>
                        )}
                        <div className="divider"><span>or</span></div>

                        <div className="social-buttons">
                            <button type="button" className="btn-social">Google</button>
                            <button type="button" className="btn-social">Apple</button>
                        </div>
                    </form>

                    <p className="footer-text">
                        Don't have an account? <a href='#' onClick={onGotoCreate}>Create one</a>
                    </p>
                </div>
            </main>
        </div>
    );
}