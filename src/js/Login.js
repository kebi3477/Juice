import React from 'react';
import './Login.css';

const loging = () => {
    console.log('loging click');
}

const join = () => {
    console.log('join click');
}

const findID = () => {
    console.log('findID click');
}

const findPW = () => {
    console.log('findPW click');
}

function Login(){
    return(
        <div className="login">
            {/* // 로그인 로고 */}
            <div className="login__logo">
                <img className="login__logo--img" src="#" alt="logo" />
            </div>

            {/* // 로그인 폼 */}
            <form className="login__form" method="POST">
                <input className="login__form--input login__form--input-id" type="text" placeholder="아이디" />
                <input className="login__form--input login__form--input-pw" type="password" placeholder="비밀번호" />
                <button className="login__form--input login__form--input-login" type="button" onClick={loging}>로그인</button>
            </form>

            {/* // 로그인 메뉴 */}
            <div className="login__navi">
                <button className="login__navi--join" type="button" onClick={join}>회원가입</button>
                <div className="login__navi--find">
                    <button className="login__navi--find-id" type="button" onClick={findID}>아이디</button>
                    /
                    <button className="login__navi--find-pw" type="button" onClick={findPW}>비밀번호 찾기</button>
                </div>
            </div>
        </div>
    );
}

export default Login;