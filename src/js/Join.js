import React from 'react';
import './Join.css';

const joing = () => {
    console.log('joing click');
}

const next = () => {
    console.log('next click');
}

const file = () => {
    console.log('file click');
}

const pass = () => {
    console.log('pass click');
}

function Join(){
    return(
        <div className="join">
            {/* // 회원가입 폼 */}
            {/* <form className="join__form" method="POST">
                <input className="join__form--input join__form--input-id" type="text" placeholder="아이디" />
                <input className="join__form--input join__form--input-pw" type="password" placeholder="비밀번호" />
                <input className="join__form--input join__form--input-confirm" type="password" placeholder="비밀번호 재확인" />
                <input className="join__form--input join__form--input-email" type="text" placeholder="이메일" />
                <input className="join__form--input join__form--input-name" type="text" placeholder="이름(실명)" />
                <button className="join__form--input join__form--input-join" type="button">다음</button>
            </form> */}
            
            {/* // 회원가입 프로필 */}
            <div className="join__profile">
                <div className="join__profile--picture">
                    <img className="join__profile--picture-img" src="#" alt="logo" />
                </div>

                <input className="join__profile--file" type="file" />
                <button className="join__form--input join__profile--file-btn" type="button">프로필 사진 추가</button>
                <button className="join__form--input join__profile--pass" type="button">건너뛰기</button>
            </div>

        </div>
    );
}

export default Join;