import React from 'react';
import {setState, state} from './formModule';
import './FindID.css';

const findID = () => {
    fetch('/user/findId', {
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
            console.log(res.user_id);
            //아이디 찾기 성공
        } else if(res.result === 'null') {
            //값이 비었음
        } else {
            //아이디 찾기 실패
        }
    })
}

const findPW = () => {
    console.log('findPW click');
}

function FindID(){
    return(
        <div className="findID">
            {/* // 아이디찾기 로고 */}
            <div className="findID__logo">
                <img className="findID__logo--img" src="#" alt="logo" />
            </div>

            {/* // 아이디찾기 폼 */}
            <form className="findID__form" method="POST">
                <input className="findID__form--input findID__form--input-name" type="text" placeholder="이름" onChange={setState} name="name"/>
                <input className="findID__form--input findID__form--input-email" type="text" placeholder="이메일" onChange={setState} name="email"/>
                <button className="findID__form--input findID__form--input-findID" type="button" onClick={findID}>아이디 찾기</button>
            </form>
            
            {/* // 아이디찾기 메뉴 */}
            <div className="findID__navi">
                <button className="findID__navi--find" type="button" onClick={findPW}>비밀번호 찾기</button>
            </div>
        </div>
    );
}

export default FindID;