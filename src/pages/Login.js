import Box from "../components/Box";
import {Link} from "react-router-dom";
import {useState} from "react";

import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';


function Login() {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    function usernameChanged(event) {
        updateUsername(event.target.value);
    }

    function passwordChanged(event) {
        updatePassword(event.target.value);
    }

    function login(){
        const customer = {username: username, password: password};
        const json = JSON.stringify(customer);
        fetch('https://teamnathanielrevatureproject2.azurewebsites.net/login', {method: 'post', body: json,
            headers: {'Content-Type': 'application/json'}}).then(response => {
            return response.json();
        }).then(data => {
            dispatch({type: 'login', user: data});
            history.push('/game');
        })

    }

    return (
        <div>
            <div>
                <label>
                    Username:
                </label>
                <input type='text' value={username} onChange={usernameChanged} />
            </div>
            <div>
                <label>
                    Password:
                </label>
                <input type='password' value={password} onChange={passwordChanged} />
            </div>
            <div onClick={login}>
                <Box>Login</Box>
            </div>
            <div>
                Not a customer <Link to='/register'>Click Here</Link>.
            </div>
        </div>
    )
}

export default Login;