import React, { useState } from 'react';
import './StyleCss/loginStyle.css';
import { Button } from 'antd';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleUserNameChange = (event:any) => {
        setUserName(event.target.value);
    };
    const handlePasswordChange = (event:any) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = () => {

    };
    return (
        <>
            <img
                className='imagenFondo'
                src='https://s3-alpha-sig.figma.com/img/8d7b/b8cc/91ba9e81a7f3669724f4596a774b9757?Expires=1688342400&Signature=fgFwu~Hn6JIuf3JB08NJlZX2Mcmpe2xZ83w8ZdaoVs-0iaizxiVfil4H0l2I6ZDkqu8L2hb2EdDCVffrPh~TYWBseVKFhdxVIERKjOLdPo1PyvNSGTcwN3B~GP~GwV8zcRbMZUIVbWymVliMaEk-NO3UIOW~c8YG6GKLYlR6QgyutQB~JnLJ1ISOOcmygITaA5oOyKIII6KQQB-bYmNmryk2zL9jE4ldFRXG2BMShwo0yhJRMAP~qlXf~GsfunhLknD-5wynqYyXQjx3UaQVI6Qpo7uB9voTLYnKhmtC1ER4rHmnJd8FDeTSSXrTEw~FnfZhao-gYsbEINQBg5iJ7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                alt='Imagen de fondo'
            />
            <div className='Fondo'>
                <div className='contenLogin'>
                    <p className='textLogin'>Login</p>
                    <input
                        type='text'
                        placeholder='UserName'
                        className='inputLogin'
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='inputPassword'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button className='buttonLogin' onClick={handleLoginClick}>
                        Login
                    </button>
                    <Button className='buttonRegister'>Register</Button>
                </div>
            </div>
        </>
    );
}
export default Login;
