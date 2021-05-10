import React from 'react';
import './Login.css';

let state = {};

const loging = () => {
    fetch('/user/login', {
        method: 'POST',
        dataType: "JSON",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
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

const setState = e => {
    state[e.target.name] = e.target.value
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
                <input className="login__form--input login__form--input-id" type="text" placeholder="아이디" onChange={setState} name="id"/>
                <input className="login__form--input login__form--input-pw" type="password" placeholder="비밀번호"  onChange={setState} name="pw"/>
                <button className="login__form--input login__form--input-login" type="button" onClick={loging}>로그인</button>
            </form>

            {/* // 로그인 메뉴 */}
            <div className="login__navi">
                <button className="login__navi--join" type="button">회원가입</button>
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