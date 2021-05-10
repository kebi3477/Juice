import React from 'react';
import './FindID.css';

const findID = () => {
    console.log('findID click');
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
                <input className="findID__form--input findID__form--input-name" type="text" placeholder="이름" />
                <input className="findID__form--input findID__form--input-email" type="text" placeholder="이메일" />
                <button className="findID__form--input findID__form--input-findID" type="button" onClick={findPW}>아이디 찾기</button>
            </form>
            
            {/* // 아이디찾기 메뉴 */}
            <div className="findID__navi">
                <button className="findID__navi--find" type="button" onClick={findID}>비밀번호 찾기</button>
            </div>
        </div>
    );
}

export default FindID;