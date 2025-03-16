import { Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const goToOkPage = () => {
        navigate('/login/ok');
    };

    return (
        <div>
            <h1>登入</h1>
            <button onClick={goToOkPage}>OK來囉
            </button>
        </div>
    );
}

export default Login;