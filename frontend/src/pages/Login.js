import {useGlobalData} from "../context/GlobalDataContext";
import LoginView from "../componenet/LoginView";
import {loginUser, signup} from "../api/userService";
import {useNavigate} from "react-router-dom";

const LoginPage=() => {

    const {
        userForm,
        setUserForm,
        errorService,
        setErrorService,
        user,
        setUser,
    }=useGlobalData();
    const navigate = useNavigate();


    const onChange = (e) => {
        const { name, value } = e.target;
        setUserForm({
            ...userForm,
            [name]: value,
        });
    };


    const valider = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(userForm.email, userForm.password);
            if ( response && response.error === null) {
                setUser(response?.user);
                setErrorService(null);
                if(response.user.role === 'CLIENT')
                navigate('/');
                else navigate('/admin')
            } else setErrorService(response.error);
        } catch (err) {
            setErrorService(err.response?.data || "Erreur serveur");
        }
    };

    const handleGotoCreate =()=>{
        navigate('/signup')
    }




    return <LoginView
        valider={valider}
        onChange={onChange}
        userForm={userForm}
        errorService={errorService}
        onGotoCreate={handleGotoCreate}
    >

    </LoginView>
}

export default LoginPage;