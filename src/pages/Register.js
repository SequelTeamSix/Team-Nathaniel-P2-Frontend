import Box from '../components/Box';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';

function Register () {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [name, updateName] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    function usernameChanged(event) {
        updateUsername(event.target.value);
    }

    function passwordChanged(event) {
        updatePassword(event.target.value);
    }

    function nameChanged(event) {
        updateName(event.target.value);
    }

    function cancelClick() {
        history.push('/game');
    }

    function registerClick() {
        const customer = {username: username, password: password, name: name};
        const json = JSON.stringify(customer);
        fetch('https://teamnathanielrevatureproject2.azurewebsites.net/saveCustomer', {method: 'post', body: json,
            headers: {'Content-Type': 'application/json'}}).then(response => {
                return response.json();
        }).then(data => {
            dispatch({type: 'login', user: data});
            history.push('/home');
        })
    }

    return (
        <div>
            <div>
                <label>Username:</label>
                <input type='text' value={username} onChange={usernameChanged} />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={passwordChanged} />
            </div>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={nameChanged} />
            </div>
            <div>
                <div onClick={cancelClick}><Box>Cancel</Box></div>
                <div onClick={registerClick}><Box>Register</Box></div>
            </div>
        </div>
    )
}

export default Register;