import "./css/createCompte.css";

const CreateCompteView=({
                            signupForm,
                            onChange,
    check,
                            onValider,
                        })=> {
    return <div className="form-container">


        <h2>Create Account</h2>
        <p>Join ResidenceHub today and find your dream home</p>

        <form>
            <div className="form-row">
                <div className="form-group">
                    <label>First Name</label>
                    <input name={'firstName'} onChange={onChange} value={signupForm?.firstName} type="text" placeholder="John"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input name={'lastName'} onChange={onChange} value={signupForm?.lastName} type="text" placeholder="Doe"/>
                </div>
            </div>

            <div className="form-group">
                <label>Email Address</label>
                <input type="email" name='email' onChange={onChange} value={signupForm?.email} placeholder="you@example.com"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name='password' onChange={onChange} value={signupForm?.password} placeholder="********"/>
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" name='password1' onChange={onChange} value={signupForm?.password1} placeholder="********"/>
            </div>

            <div className="form-checkbox">
                <input value={check} name='check' onChange={onChange} type="checkbox"/>
                <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
            </div>

            <button onClick={onValider} className="btn">Create Account →</button>
        </form>
    </div>
}

export default CreateCompteView