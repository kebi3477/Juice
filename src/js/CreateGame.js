import React from 'react';
import { useHistory } from "react-router-dom";
import './CreateGame.css';
import sparkling from './sparkling.js';

function CreateGame(){
    
    return(
        <div className="createGame">
            
            <div className="createGame__back">
                <svg className="createGame__background" width="420" height="507.259" viewBox="0 0 420 507.259">
                    <path id="패스_44" data-name="패스 44" d="M397.485,1.741V263.535c37.182-5.412,93.251-16.582,112.19-36.4,29.25-30.609,31.607-115.223,146.56-119.465,58.023-2.141,116.784-29.908,161.25-68.72V1.741Z" transform="translate(-397.485 -1.741)" fill="#fccb1c"/>
                    <path id="패스_45" data-name="패스 45" d="M513.217,189.072c-30.613,9.7-76.91-14.188-115.732,27.626V286.61c52.9-4.844,100.343,24.47,144.478,31.26,67.946,10.453,157.172-4.475,175.089-128.052C728.9,108.138,782.5,73.6,817.477,59.567V21.981c-44.466,38.811-104,60.043-162.025,62.185C540.506,88.407,553.575,176.275,513.217,189.072Z" transform="translate(-397.485 -1.741)" fill="#f9b61b"/>
                    <path id="패스_46" data-name="패스 46" d="M718.548,177.871c-15.307,92.213-78.773,122.452-146.719,112-44.135-6.788-122.078-38.451-174.344-10.351V509h419.99V52.474C782.5,66.506,732.063,96.451,718.548,177.871Z" transform="translate(-397.485 -1.741)" fill="#f5a21a"/>
                </svg>

                <svg className="createGame__particle" width="335.945" height="274.712" viewBox="0 0 335.945 274.712">
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

            <div className="createGame__front">
                <div className="createGame__header">
                    <button className="createGame__header--button">
                        <svg width="19.315" height="13.44" viewBox="0 0 19.315 13.44">
                            <g id="그룹_6" data-name="그룹 6" transform="translate(19.315 13.44) rotate(180)">
                                <path id="패스_2" data-name="패스 2" d="M-1152.519,479.8l1.3-1.3-1.3-1.3-5.421-5.421-1.3,1.3,5.422,5.421-5.422,5.421,1.3,1.3Z" transform="translate(1170.535 -471.778)" fill="#fff"/>
                                <g id="그룹_5" data-name="그룹 5" transform="translate(0 5.802)">
                                <rect id="사각형_6" data-name="사각형 6" width="17.171" height="1.836" fill="#fff"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <h1 className="createGame__header--title">경기생성</h1>
                </div>

                <div className="createGame__contents">
                    <div className="createGame__contents--header">
                        <input className="createGame__contents--header-title" type="text" placeholder="경기 제목" />
                    </div>

                    <div className="createGame__contents--center">
                        <div className="createGame__contents--event">
                            <p className="createGame__contents--event-title createGame__contents--title">경기종목</p>
                            <div className="createGame__contents--event-input createGame__contents--select">
                                <p className="createGame__contents--select-title">종목 선택</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.302" height="12.778" viewBox="0 0 7.302 12.778">
                                    <path id="패스_3" data-name="패스 3" d="M-1297.537,483l-5.476,5.476-5.476-5.476-.913.913,5.476,5.476.913.913.913-.913,5.476-5.476Z" transform="translate(-483 -1296.624) rotate(-90)" fill="#666"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="createGame__contents--date">
                            <p className="createGame__contents--date-title createGame__contents--title">경기날짜</p>
                            <div className="createGame__contents--date-input createGame__contents--select">
                                <p className="createGame__contents--select-title">__월__일</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.302" height="12.778" viewBox="0 0 7.302 12.778">
                                    <path id="패스_3" data-name="패스 3" d="M-1297.537,483l-5.476,5.476-5.476-5.476-.913.913,5.476,5.476.913.913.913-.913,5.476-5.476Z" transform="translate(-483 -1296.624) rotate(-90)" fill="#666"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="createGame__contents--time">
                            <p className="createGame__contents--time-title createGame__contents--title">경기시간</p>
                            <div className="createGame__contents--time-input createGame__contents--select">
                                <p className="createGame__contents--select-title">__:__</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.302" height="12.778" viewBox="0 0 7.302 12.778">
                                    <path id="패스_3" data-name="패스 3" d="M-1297.537,483l-5.476,5.476-5.476-5.476-.913.913,5.476,5.476.913.913.913-.913,5.476-5.476Z" transform="translate(-483 -1296.624) rotate(-90)" fill="#666"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="createGame__contents--place">
                            <p className="createGame__contents--place-title createGame__contents--title">경기장소</p>
                            <div className="createGame__contents--place-input createGame__contents--select">
                                <p className="createGame__contents--select-title">장소선택</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.302" height="12.778" viewBox="0 0 7.302 12.778">
                                    <path id="패스_3" data-name="패스 3" d="M-1297.537,483l-5.476,5.476-5.476-5.476-.913.913,5.476,5.476.913.913.913-.913,5.476-5.476Z" transform="translate(-483 -1296.624) rotate(-90)" fill="#666"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="createGame__contents--member">
                            <p className="createGame__contents--member-title createGame__contents--title">참여인원</p>
                            <div className="createGame__contents--member-input createGame__contents--select">
                                <p className="createGame__contents--select-title">_명</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.302" height="12.778" viewBox="0 0 7.302 12.778">
                                    <path id="패스_3" data-name="패스 3" d="M-1297.537,483l-5.476,5.476-5.476-5.476-.913.913,5.476,5.476.913.913.913-.913,5.476-5.476Z" transform="translate(-483 -1296.624) rotate(-90)" fill="#666"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="createGame__contents--cost">
                            <p className="createGame__contents--cost-title createGame__contents--title">참여비용</p>
                            <div className="createGame__contents--cost-input createGame__contents--select">
                                <p className="createGame__contents--select-title">__원</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.302" height="12.778" viewBox="0 0 7.302 12.778">
                                    <path id="패스_3" data-name="패스 3" d="M-1297.537,483l-5.476,5.476-5.476-5.476-.913.913,5.476,5.476.913.913.913-.913,5.476-5.476Z" transform="translate(-483 -1296.624) rotate(-90)" fill="#666"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="createGame__contents--age">
                            <p className="createGame__contents--age-title createGame__contents--title">나이</p>
                            <div className="createGame__contents--age-input createGame__contents--select">
                                <p className="createGame__contents--select-title">__대</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.302" height="12.778" viewBox="0 0 7.302 12.778">
                                    <path id="패스_3" data-name="패스 3" d="M-1297.537,483l-5.476,5.476-5.476-5.476-.913.913,5.476,5.476.913.913.913-.913,5.476-5.476Z" transform="translate(-483 -1296.624) rotate(-90)" fill="#666"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="createGame__contents--sex">
                            <p className="createGame__contents--sex-title createGame__contents--title">성별</p>
                            <div className="createGame__contents--sex-wrapper">
                                <input id="createGame__contents--sex-1" className="createGame__contents--sex-input" type="radio" name="sex" value="0" />
                                <input id="createGame__contents--sex-2" className="createGame__contents--sex-input" type="radio" name="sex" value="1" />
                                <input id="createGame__contents--sex-3" className="createGame__contents--sex-input" type="radio" name="sex" value="2" />

                                <label id="createGame__contents--sex-button1" className="createGame__contents--sex-button" htmlFor="createGame__contents--sex-1" >전체</label>
                                <label id="createGame__contents--sex-button2" className="createGame__contents--sex-button" htmlFor="createGame__contents--sex-2" >남성</label>
                                <label id="createGame__contents--sex-button3" className="createGame__contents--sex-button" htmlFor="createGame__contents--sex-3" >여성</label>
                            </div>
                        </div>

                        <div className="createGame__contents--expain createGame__contents--text">
                            <p className="createGame__contents--expain-title createGame__contents--title">규칙설명</p>
                            <input className="createGame__contents--expain-input" type="text" placeholder="규칙설명을 입력하세요." />
                        </div>

                        <div className="createGame__contents--material createGame__contents--text">
                            <p className="createGame__contents--material-title createGame__contents--title">규칙설명</p>
                            <input className="createGame__contents--material-input" type="text" placeholder="경기에 필요한 준비물을 입력하세요." />
                        </div>

                        <div className="createGame__contents--issues createGame__contents--text">
                            <p className="createGame__contents--issues-title createGame__contents--title">주의사항</p>
                            <input className="createGame__contents--issues-input" type="text" placeholder="경기에 필요한 주의사항을 입력하세요." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="createGame__modal--date createGame__modal">
                <div className="createGame__modal--contents">
                    <div className="createGame__modal--header">
                        <p className="createGame__modal--header-title">경기날짜</p>
                    </div>

                    <div className="createGame__modal--date-contents createGame__modal--center">
                        <div className="createGame__modal--date-days">
                            <b className="createGame__modal--date-year"></b>
                            <b className="createGame__modal--date-month">8</b>
                            <b className="createGame__modal--date-day">9</b>
                        </div>
                        
                        <div className="createGame__modal--date-days">
                            <b className="createGame__modal--date-year"></b>
                            <b className="createGame__modal--date-month">9</b>
                            <b className="createGame__modal--date-day">10</b>
                        </div>

                        <div className="createGame__modal--date-days">
                            <b className="createGame__modal--date-year active">2021년</b>
                            <b className="createGame__modal--date-month active">10월</b>
                            <b className="createGame__modal--date-day active">11일</b>
                        </div>

                        <div className="createGame__modal--date-days">
                            <b className="createGame__modal--date-year">2022</b>
                            <b className="createGame__modal--date-month">11</b>
                            <b className="createGame__modal--date-day">12</b>
                        </div>

                        <div className="createGame__modal--date-days">
                            <b className="createGame__modal--date-year"></b>
                            <b className="createGame__modal--date-month">12</b>
                            <b className="createGame__modal--date-day">13</b>
                        </div>
                    </div>

                    <div className="createGame__modal--footer">
                        <button className="createGame__modal--footer-button">취소</button>
                        <button className="createGame__modal--footer-button">확인</button>
                    </div>
                </div>
            </div>

            <div className="createGame__modal--age createGame__modal">
                <div className="createGame__modal--contents">
                    <div className="createGame__modal--header">
                        <p className="createGame__modal--header-title">나이</p>
                    </div>

                    <div className="createGame__modal--age-contents createGame__modal--center">
                        <p className="createGame__modal--age-num">제한없음</p>
                        <p className="createGame__modal--age-num">10대</p>
                        <p className="createGame__modal--age-num">20대</p>
                        <p className="createGame__modal--age-num active">30대</p>
                        <p className="createGame__modal--age-num">40대</p>
                        <p className="createGame__modal--age-num">50대</p>
                        <p className="createGame__modal--age-num">60대</p>
                        <p className="createGame__modal--age-num">70대</p>
                    </div>

                    <div className="createGame__modal--footer">
                        <button className="createGame__modal--footer-button">직접설정</button>
                        <button className="createGame__modal--footer-button">확인</button>
                    </div>
                </div>
            </div>

            <div className="createGame__modal--member createGame__modal">
                <div className="createGame__modal--contents">
                    <div className="createGame__modal--header">
                        <p className="createGame__modal--header-title">참여인원</p>
                    </div>

                    <div className="createGame__modal--member-contents createGame__modal--center">
                        <p className="createGame__modal--member-num">8</p>
                        <p className="createGame__modal--member-num">9</p>
                        <p className="createGame__modal--member-num active">10명</p>
                        <p className="createGame__modal--member-num">11</p>
                        <p className="createGame__modal--member-num">12</p>
                    </div>

                    <div className="createGame__modal--footer">
                        <button className="createGame__modal--footer-button">직접설정</button>
                        <button className="createGame__modal--footer-button">확인</button>
                    </div>
                </div>
            </div>

            <div className="createGame__modal--cost createGame__modal">
                <div className="createGame__modal--contents">
                    <div className="createGame__modal--header">
                        <p className="createGame__modal--header-title">참여비용</p>
                    </div>

                    <div className="createGame__modal--cost-contents createGame__modal--center">
                        <p className="createGame__modal--cost-num">무료</p>
                        <p className="createGame__modal--cost-num">1,000원</p>
                        <p className="createGame__modal--cost-num">2,000원</p>
                        <p className="createGame__modal--cost-num active">3,000원</p>
                        <p className="createGame__modal--cost-num">4,000원</p>
                        <p className="createGame__modal--cost-num">5,000원</p>
                        <p className="createGame__modal--cost-num">6,000원</p>
                        <p className="createGame__modal--cost-num">7,000원</p>
                    </div>

                    <div className="createGame__modal--footer">
                        <button className="createGame__modal--footer-button">직접설정</button>
                        <button className="createGame__modal--footer-button">확인</button>
                    </div>
                </div>
            </div>

            <div className="home__search">
                <div className="home__search--header">
                    <svg className="home__search--header-svg" width="19.315" height="13.44" viewBox="0 0 19.315 13.44">
                        <g transform="translate(19.315 13.44) rotate(180)">
                            <path d="M-1152.519,479.8l1.3-1.3-1.3-1.3-5.421-5.421-1.3,1.3,5.422,5.421-5.422,5.421,1.3,1.3Z" transform="translate(1170.535 -471.778)"/>
                            <g transform="translate(0 5.802)">
                                <rect width="17.171" height="1.836" fill="#231f20"/>
                            </g>
                        </g>
                    </svg>
                    <p className="home__search--header-title">경기종목</p>
                </div>

                <div className="home__search--contents">
                    <div className="home__search--bar">
                        <input className="home__search--bar-input" type="text" placeholder="종목 이름을 검색하세요." />
                        <svg className="home__search--bar-button" width="13.393" height="14.021" viewBox="0 0 13.393 14.021">
                            <path id="패스_4" data-name="패스 4" d="M-959.135,539.513l-3.776-3.776a5.6,5.6,0,0,0,1.617-3.937,5.623,5.623,0,0,0-5.617-5.617,5.623,5.623,0,0,0-5.617,5.617,5.623,5.623,0,0,0,5.617,5.617,5.583,5.583,0,0,0,3.252-1.046l3.833,3.833Zm-12.416-7.713a4.645,4.645,0,0,1,4.64-4.64,4.645,4.645,0,0,1,4.64,4.64,4.645,4.645,0,0,1-4.64,4.64A4.645,4.645,0,0,1-971.551,531.8Z" transform="translate(972.528 -526.183)" fill="#ddd"/>
                        </svg>
                    </div>

                    <div className="home__search--keyword">
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>축구</strong>(soccer)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>야구</strong>(baseball)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>농구</strong>(basketball)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>배구</strong>(volleyball)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>탁구</strong>(table tennis)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>필드하키</strong>(field hockey)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>럭비</strong>(football)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>족구</strong>(foot volleyball)</p>
                        </div>
                        
                        <div className="home__search--keyword-items focus">
                            <p className="home__search--keyword-text"><strong>배드민턴</strong>(badminton)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>수영</strong>(swimming)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>자전거</strong>(bicycle)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>승마</strong>(riding)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>테니스</strong>(tennis)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>유도</strong>(judo)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>골프</strong>(golf)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>레슬링</strong>(wrestling)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>검도</strong>(kendo)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>복싱</strong>(boxing)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>킥복싱</strong>(kickboxing)</p>
                        </div>
                        
                        <div className="home__search--keyword-items">
                            <p className="home__search--keyword-text"><strong>태권도</strong>(taekwondo)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateGame;