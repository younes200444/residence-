import CreateCompteView from "../componenet/CreateCompteView";
import {useGlobalData} from "../context/GlobalDataContext";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {signup} from "../api/userService";

const CreateComptePage=()=>{
    const {
        signupForm,
        setSignupForm,
        user,
        setUser,
    }=useGlobalData();
    const [check,setCheck] =useState(false)


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'check'){
            setCheck(value)
        }else
        setSignupForm({
            ...signupForm,
            [name]: value,
        });
    };

    const handleValider =async (e) => {
        e.preventDefault();
        if (
            signupForm?.firstName === '' ||
            signupForm?.lastName === '' ||
            signupForm?.email === '' ||
            signupForm?.password === '' ||
            signupForm?.password1 === ''
        ) {
            alert('Les champs ne peuvent pas être vide !');
            return false;
        } else {
            if (signupForm?.password !== signupForm?.password1)
                alert('Le mot de passe et la confirmation ne correspondent pas !')
            else {
                const {
                    password1,
                    ...signupForm1
                } = signupForm;
                signupForm1.role= 'CLIENT';
                const response = await signup(signupForm1)
                if (response.error === null) {
                    setUser(response?.user);
                    navigate('/');
                } else console.log(response.error);
            }
        }
    }

    const init = useCallback(() => {
        setSignupForm({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password1: '',
        });
    }, []);

    
    useEffect(()=>{
        init();
    },[init])


    return <CreateCompteView
        signupForm={signupForm}
        onChange={handleChange}
        check={check}
        onValider={handleValider}
    />
}

export default CreateComptePage;