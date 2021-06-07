import React from 'react';
import './FindPW.css';
import sparkling from './sparkling.js';

const findID = () => {
    console.log('findID click');
}

const findPW = () => {
    console.log('findPW click');
}

function FindPW(){
    return(
        <div className="findPW">
            <div className="findPW__back">
                {/* // 비밀번호찾기 배경 */}
                <svg className="findPW__background" width="420" height="507.259" viewBox="0 0 420 507.259">
                    <path id="패스_44" data-name="패스 44" d="M397.485,1.741V263.535c37.182-5.412,93.251-16.582,112.19-36.4,29.25-30.609,31.607-115.223,146.56-119.465,58.023-2.141,116.784-29.908,161.25-68.72V1.741Z" transform="translate(-397.485 -1.741)" fill="#fccb1c"/>
                    <path id="패스_45" data-name="패스 45" d="M513.217,189.072c-30.613,9.7-76.91-14.188-115.732,27.626V286.61c52.9-4.844,100.343,24.47,144.478,31.26,67.946,10.453,157.172-4.475,175.089-128.052C728.9,108.138,782.5,73.6,817.477,59.567V21.981c-44.466,38.811-104,60.043-162.025,62.185C540.506,88.407,553.575,176.275,513.217,189.072Z" transform="translate(-397.485 -1.741)" fill="#f9b61b"/>
                    <path id="패스_46" data-name="패스 46" d="M718.548,177.871c-15.307,92.213-78.773,122.452-146.719,112-44.135-6.788-122.078-38.451-174.344-10.351V509h419.99V52.474C782.5,66.506,732.063,96.451,718.548,177.871Z" transform="translate(-397.485 -1.741)" fill="#f5a21a"/>
                </svg>

                {/* // 비밀번호찾기 입자 */}
                <svg className="findPW__particle" width="335.945" height="274.712" viewBox="0 0 335.945 274.712">
                    <g id="그룹_38" data-name="그룹 38" transform="translate(0.334 210.143)">
                        <path className="particle__bubble" data-name="패스 47" d="M99.513,762.026a12.263,12.263,0,1,1,12.263-12.263A12.277,12.277,0,0,1,99.513,762.026Zm0-23.192a10.928,10.928,0,1,0,10.928,10.928A10.941,10.941,0,0,0,99.513,738.835Z" transform="translate(-87.25 -737.5)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_39" data-name="그룹 39" transform="translate(47.718 258.445)">
                        <path className="particle__bubble" data-name="패스 48" d="M237.384,898.518a8.134,8.134,0,1,1,8.134-8.134A8.143,8.143,0,0,1,237.384,898.518Zm0-14.265a6.132,6.132,0,1,0,6.132,6.132A6.139,6.139,0,0,0,237.384,884.252Z" transform="translate(-229.25 -882.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_40" data-name="그룹 40" transform="translate(37.54)">
                        <path className="particle__bubble" data-name="패스 49" d="M210.888,132.026a12.138,12.138,0,1,1,12.138-12.138A12.152,12.152,0,0,1,210.888,132.026Zm0-21.273a9.135,9.135,0,1,0,9.135,9.135A9.145,9.145,0,0,0,210.888,110.753Z" transform="translate(-198.75 -107.75)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_41" data-name="그룹 41" transform="translate(240.592 8.509)">
                        <path className="particle__bubble" data-name="패스 50" d="M818.888,156.525a11.638,11.638,0,1,1,11.638-11.638A11.651,11.651,0,0,1,818.888,156.525Zm0-21.273a9.635,9.635,0,1,0,9.635,9.635A9.646,9.646,0,0,0,818.888,135.252Z" transform="translate(-807.25 -133.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_43" data-name="그룹 43" transform="translate(313.337 104.279)">
                        <path className="particle__bubble" data-name="패스 52" d="M1034.636,439.022a9.386,9.386,0,1,1,9.386-9.386A9.4,9.4,0,0,1,1034.636,439.022Zm0-17.157a7.771,7.771,0,1,0,7.771,7.771A7.78,7.78,0,0,0,1034.636,421.865Z" transform="translate(-1025.25 -420.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_44" data-name="그룹 44" transform="translate(324.683 125.635)">
                        <path className="particle__bubble" data-name="패스 53" d="M1064.881,495.512a5.631,5.631,0,1,1,5.631-5.631A5.637,5.637,0,0,1,1064.881,495.512Zm0-10.293a4.662,4.662,0,1,0,4.662,4.662A4.668,4.668,0,0,0,1064.881,485.219Z" transform="translate(-1059.25 -484.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_45" data-name="그룹 45" transform="translate(0 153.999)">
                        <path className="particle__bubble" data-name="패스 54" d="M92.548,581.847a6.3,6.3,0,1,1,6.3-6.3A6.305,6.305,0,0,1,92.548,581.847Zm0-10.595a4.3,4.3,0,1,0,4.3,4.3A4.3,4.3,0,0,0,92.548,571.252Z" transform="translate(-86.25 -569.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_46" data-name="그룹 46" transform="translate(19.02 162.341)">
                        <path className="particle__bubble" data-name="패스 55" d="M146.545,600.84a3.3,3.3,0,1,1,3.3-3.3A3.3,3.3,0,0,1,146.545,600.84Zm0-5.256a1.96,1.96,0,1,0,1.96,1.96A1.963,1.963,0,0,0,146.545,595.585Z" transform="translate(-143.25 -594.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_47" data-name="그룹 47" transform="translate(313.004 150.662)">
                        <path className="particle__bubble" data-name="패스 56" d="M1027.545,565.84a3.3,3.3,0,1,1,3.3-3.3A3.3,3.3,0,0,1,1027.545,565.84Zm0-5.256a1.96,1.96,0,1,0,1.96,1.96A1.963,1.963,0,0,0,1027.545,560.585Z" transform="translate(-1024.25 -559.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_49" data-name="그룹 49" transform="translate(25.361 31.2)">
                        <path className="particle__bubble" data-name="패스 58" d="M166.713,210.176a4.463,4.463,0,1,1,4.463-4.463A4.468,4.468,0,0,1,166.713,210.176Zm0-7.592a3.128,3.128,0,1,0,3.128,3.128A3.132,3.132,0,0,0,166.713,202.585Z" transform="translate(-162.25 -201.25)" fill="#f4e4d2"/>
                    </g>
                    <g id="그룹_50" data-name="그룹 50" transform="translate(226.911 176.69)">
                        <path className="particle__bubble" data-name="패스 59" d="M774.05,652.85a7.8,7.8,0,1,1,7.8-7.8A7.809,7.809,0,0,1,774.05,652.85Zm0-13.6a5.8,5.8,0,1,0,5.8,5.8A5.8,5.8,0,0,0,774.05,639.252Z" transform="translate(-766.25 -637.25)" fill="#f4e4d2"/>
                    </g>
                </svg>
            </div>
            
            <div className="findPW__front">
                {/* // 비밀번호찾기 타이틀 */}
                <div className="findPW__title">
                    <h1 className="findPW__title--text">비밀번호 찾기</h1>
                    <h2 className="findPW__subtitle--text">아래의 내용을 입력해주세요.</h2>
                </div>

                {/* // 아이디찾기 컨텐츠 */}
                <div className="findPW__contents">
                    {/* // 비밀번호찾기 폼 */}
                    <form className="findPW__form" method="POST">
                        <input className="findPW__form--input findPW__form--input-name" type="text" placeholder="이름" />
                        <input className="findPW__form--input findPW__form--input-id" type="text" placeholder="아이디" />
                        <input className="findPW__form--input findPW__form--input-email" type="text" placeholder="이메일" />
                        <button className="findPW__form--input findPW__form--input-findPW" type="button" onClick={findPW}>비밀번호 찾기</button>
                    </form>
                
                    {/* // 비밀번호찾기 메뉴 */}
                    <div className="findPW__navi">
                        <button className="findPW__navi--find" type="button" onClick={findID}>아이디 찾기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindPW;