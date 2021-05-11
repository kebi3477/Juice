import React from 'react';
import {setState, state} from './formModule.js';
import './FindPW.css';

const findID = () => {
    console.log('findID click');
}

const findPW = () => {
    fetch('/user/findPw', {
        method: 'POST',
        dataType: "JSON",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(res => {
        if(res.result === 'success') {
            //비밀번호 찾기 성공
        } else if(res.result === 'null') {
            //값이 비었음
        } else {
            //아이디 찾기 실패
        }
    })
}

function FindPW(){
    return(
        <div className="findPW">
            {/* // 비밀번호찾기 로고 */}
            <div className="findPW__logo">
                <img className="findPW__logo--img" src="#" alt="logo" />
            </div>

            {/* // 비밀번호찾기 폼 */}
            <form className="findPW__form" method="POST">
                <input className="findPW__form--input findPW__form--input-name" type="text" placeholder="이름" onChange={setState} name="name" />
                <input className="findPW__form--input findPW__form--input-id" type="text" placeholder="아이디" onChange={setState} name="id" />
                <input className="findPW__form--input findPW__form--input-email" type="text" placeholder="이메일" onChange={setState} name="email" />
                <button className="findPW__form--input findPW__form--input-findPW" type="button" onClick={findPW}>비밀번호 찾기</button>
            </form>
            
            {/* // 비밀번호찾기 메뉴 */}
            <div className="findPW__navi">
                <button className="findPW__navi--find" type="button" onClick={findID}>아이디 찾기</button>
            </div>
        </div>
    );
}

export default FindPW;