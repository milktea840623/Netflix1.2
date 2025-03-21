import { useLocation } from 'react-router-dom';

const Register = () => {
    const location = useLocation();
    const email = location.state?.email || '';
    
    return (
        <div>註冊頁面</div>
    )
}

export default Register;    