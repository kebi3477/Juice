import React from 'react';
import { useHistory } from "react-router-dom";
import './Home.css';
import sparkling from './sparkling.js';

function Home(){

    const history = useHistory();
    
    return(
        <div className="home">

            <div className="menu">
                <div className="menu__btn--home menu__btn active">
                    <svg className="menu__btn--icon" width="27.46" height="27.19" viewBox="0 0 27.46 27.19">
                        <path id="패스_149" data-name="패스 149" d="M281.032,30.65h-5.79a2.469,2.469,0,0,1-2.465-2.466V22.727a.8.8,0,0,0-.8-.8h-4.89a.8.8,0,0,0-.8.8v5.457a2.468,2.468,0,0,1-2.465,2.466H258.5a2.469,2.469,0,0,1-2.466-2.466v-13.9a3.191,3.191,0,0,1,1.3-2.567l4.081-2.985a.822.822,0,0,1,.971,1.327l-4.081,2.985a1.539,1.539,0,0,0-.63,1.24v13.9a.822.822,0,0,0,.822.822h5.318a.822.822,0,0,0,.821-.822V22.727a2.447,2.447,0,0,1,2.444-2.445h4.89a2.447,2.447,0,0,1,2.445,2.445v5.457a.822.822,0,0,0,.821.822h5.79a.822.822,0,0,0,.821-.822V14.305a1.54,1.54,0,0,0-.646-1.252l-10.816-7.7a1.349,1.349,0,0,0-1.582.01l-1.94,1.42a.822.822,0,1,1-.971-1.327l1.94-1.42a2.992,2.992,0,0,1,3.506-.023l10.816,7.7a3.188,3.188,0,0,1,1.337,2.592V28.184A2.468,2.468,0,0,1,281.032,30.65Z" transform="translate(-256.037 -3.46)" fill="#f5a21a"/>
                    </svg>
                    <b className="menu__btn--name">홈</b>
                </div>
                
                <div className="menu__btn--group menu__btn">
                    <svg className="menu__btn--icon" width="26.502" height="26.34" viewBox="0 0 26.502 26.34">
                        <path id="패스_168" data-name="패스 168" d="M208.231,21.945H213.6a.8.8,0,1,0,0-1.592h-5.369a.8.8,0,1,0,0,1.592Z" transform="translate(-204.149 -6.895)" fill="#e0e0e0"/>
                        <path id="패스_169" data-name="패스 169" d="M226.4,3.556H212.872a.8.8,0,0,0,0,1.6H226.4a1.812,1.812,0,0,1,1.809,1.809V9.053h-23.3V6.967a1.811,1.811,0,0,1,1.809-1.809h.489a.8.8,0,0,0,0-1.6h-.489a3.415,3.415,0,0,0-3.411,3.411V24.35a5.552,5.552,0,0,0,5.546,5.546h15.41a5.552,5.552,0,0,0,5.546-5.546V6.967A3.415,3.415,0,0,0,226.4,3.556Zm1.809,20.794a3.948,3.948,0,0,1-3.944,3.944h-15.41a3.948,3.948,0,0,1-3.944-3.944v-13.7h23.3Z" transform="translate(-203.306 -3.556)" fill="#e0e0e0"/>
                        <path id="패스_170" data-name="패스 170" d="M208.231,17.815h9.462a.8.8,0,1,0,0-1.592h-9.462a.8.8,0,1,0,0,1.592Z" transform="translate(-204.149 -6.074)" fill="#e0e0e0"/>
                    </svg>
                    <b className="menu__btn--name">속한그룹</b>
                </div>

                <div className="menu__btn--more menu__btn">
                    <svg className="menu__btn--icon" width="26.062" height="7.415" viewBox="0 0 26.062 7.415">
                        <g id="그룹_185" data-name="그룹 185" transform="translate(0 0.713)">
                            <path id="패스_161" data-name="패스 161" d="M7.413,22.964a3.708,3.708,0,0,1-2.433-6.5.8.8,0,0,1,1.052,1.209,2.106,2.106,0,1,0,2.765,0,.8.8,0,0,1,1.054-1.207,3.707,3.707,0,0,1-2.439,6.5Z" transform="translate(-3.706 -16.262)" fill="#e0e0e0"/>
                        </g>
                        <g id="그룹_186" data-name="그룹 186" transform="translate(9.324)">
                            <path id="패스_162" data-name="패스 162" d="M19.08,22.787a3.708,3.708,0,1,1,3.708-3.708A3.712,3.712,0,0,1,19.08,22.787Zm0-5.813a2.105,2.105,0,1,0,2.105,2.105A2.108,2.108,0,0,0,19.08,16.974Z" transform="translate(-15.372 -15.372)" fill="#e0e0e0"/>
                        </g>
                        <g id="그룹_187" data-name="그룹 187" transform="translate(18.648)">
                            <path id="패스_163" data-name="패스 163" d="M30.746,22.787a3.708,3.708,0,1,1,3.708-3.708A3.711,3.711,0,0,1,30.746,22.787Zm0-5.813a2.105,2.105,0,1,0,2.105,2.105A2.108,2.108,0,0,0,30.746,16.974Z" transform="translate(-27.039 -15.372)" fill="#e0e0e0"/>
                        </g>
                    </svg>
                    <b className="menu__btn--name">더보기</b>
                </div>
            </div>

            <div className="home__back">
                {/* // 비밀번호찾기 배경 */}
                <svg className="home__background" width="420" height="507.259" viewBox="0 0 420 507.259">
                    <path id="패스_44" data-name="패스 44" d="M397.485,1.741V263.535c37.182-5.412,93.251-16.582,112.19-36.4,29.25-30.609,31.607-115.223,146.56-119.465,58.023-2.141,116.784-29.908,161.25-68.72V1.741Z" transform="translate(-397.485 -1.741)" fill="#fccb1c"/>
                    <path id="패스_45" data-name="패스 45" d="M513.217,189.072c-30.613,9.7-76.91-14.188-115.732,27.626V286.61c52.9-4.844,100.343,24.47,144.478,31.26,67.946,10.453,157.172-4.475,175.089-128.052C728.9,108.138,782.5,73.6,817.477,59.567V21.981c-44.466,38.811-104,60.043-162.025,62.185C540.506,88.407,553.575,176.275,513.217,189.072Z" transform="translate(-397.485 -1.741)" fill="#f9b61b"/>
                    <path id="패스_46" data-name="패스 46" d="M718.548,177.871c-15.307,92.213-78.773,122.452-146.719,112-44.135-6.788-122.078-38.451-174.344-10.351V509h419.99V52.474C782.5,66.506,732.063,96.451,718.548,177.871Z" transform="translate(-397.485 -1.741)" fill="#f5a21a"/>
                </svg>

                {/* // 비밀번호찾기 입자 */}
                <svg className="home__particle" width="335.945" height="274.712" viewBox="0 0 335.945 274.712">
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

            <div className="home__front">
                {/* // 홈 타이틀 */}
                <div className="home__header">
                    <p className="home__title"><strong>주</strong>변의 있는 사람과 <br></br> 함께하는 <strong>스</strong>포츠</p>
                    <input className="home__searchBar" type="text" name="keyword" autoComplete="off" />
                </div>

                <div className="home__contents">
                    <div className="home__popular">
                        <div className="home__popular--header">
                            <p className="home__popular--header-title">인기 그룹</p>
                            <p className="home__popular--header-more">
                                모두 보기
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.003" height="9.83" viewBox="0 0 7.003 9.83">
                                    <path id="패스_34" data-name="패스 34" d="M-840,468.941l5.869-4.314L-840,459.9" transform="translate(840.313 -459.513)" fill="none" stroke="#000" stroke-width="1"/>
                                </svg>
                            </p>
                        </div>

                        <div className="home__popular--contents">
                            <div className="home__popular--post">
                                <div className="home__popular--post-frame">
                                    <img className="home__popular--post-img" src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                    <div className="home__popular--post-member">
                                        <svg width="13.379" height="13.776" viewBox="0 0 13.379 13.776">
                                            <path id="패스_42" data-name="패스 42" d="M15.709,13.3a3.823,3.823,0,1,0-3.376,0,6.143,6.143,0,0,0-4.9,5.805.524.524,0,1,0,1.049,0,5.283,5.283,0,0,1,5.541-4.964A5.283,5.283,0,0,1,19.562,19.1a.524.524,0,1,0,1.049,0A6.143,6.143,0,0,0,15.709,13.3ZM11.247,9.875a2.774,2.774,0,1,1,2.774,2.774A2.777,2.777,0,0,1,11.247,9.875Z" transform="translate(-7.331 -5.953)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                                        </svg>
                                        <p className="home__popular--post-num">87</p>
                                    </div>
                                </div>

                                <div className="home__popular--post-info">
                                <p className="home__popular--post-title">그룹이름</p>
                                <p className="home__popular--post-text">소개 한줄로 해서 한줄 넘어가면 ...</p>
                                <p className="home__popular--post-join">
                                    참여하기
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.003" height="9.83" viewBox="0 0 7.003 9.83">
                                        <path id="패스_34" data-name="패스 34" d="M-840,468.941l5.869-4.314L-840,459.9" transform="translate(840.313 -459.513)" fill="none" stroke="#000" stroke-width="1"/>
                                    </svg>
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home__recency">
                        <div className="home__recency--header">
                            <p className="home__recency--header-title">최신 그룹</p>
                            <p className="home__recency--header-more">
                                모두 보기
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.003" height="9.83" viewBox="0 0 7.003 9.83">
                                    <path id="패스_34" data-name="패스 34" d="M-840,468.941l5.869-4.314L-840,459.9" transform="translate(840.313 -459.513)" fill="none" stroke="#000" stroke-width="1"/>
                                </svg>
                            </p>
                        </div>

                        <div className="home__recency--contents">
                            <div className="home__recency--contents-items">
                                <div className="home__recency--contents-frame">
                                    <img className="home__recency--contents-img" />
                                </div>

                                <div className="home__recency--contents-info">
                                    <p className="home__recency--contents-title">눈누난나</p>
                                    <p className="home__recency--contents-text">즐겁게 대학 과제 하는 모임</p>
                                </div>
                            </div>
                            
                            <div className="home__recency--contents-items">
                                <div className="home__recency--contents-frame">
                                    <img className="home__recency--contents-img" />
                                </div>

                                <div className="home__recency--contents-info">
                                    <p className="home__recency--contents-title">눈누난나</p>
                                    <p className="home__recency--contents-text">즐겁게 대학 과제 하는 모임</p>
                                </div>
                            </div>

                            <div className="home__recency--contents-items">
                                <div className="home__recency--contents-frame">
                                    <img className="home__recency--contents-img" />
                                </div>

                                <div className="home__recency--contents-info">
                                    <p className="home__recency--contents-title">눈누난나</p>
                                    <p className="home__recency--contents-text">즐겁게 대학 과제 하는 모임</p>
                                </div>
                            </div>

                            <div className="home__recency--contents-items">
                                <div className="home__recency--contents-frame">
                                    <img className="home__recency--contents-img" />
                                </div>

                                <div className="home__recency--contents-info">
                                    <p className="home__recency--contents-title">눈누난나</p>
                                    <p className="home__recency--contents-text">즐겁게 대학 과제 하는 모임</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home__subject">
                        <div className="home__subject--header">
                            <p className="home__subject--header-title">주제별 그룹</p>
                            <p className="home__subject--header-more">
                                모두 보기
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.003" height="9.83" viewBox="0 0 7.003 9.83">
                                    <path id="패스_34" data-name="패스 34" d="M-840,468.941l5.869-4.314L-840,459.9" transform="translate(840.313 -459.513)" fill="none" stroke="#000" stroke-width="1"/>
                                </svg>
                            </p>
                        </div>

                        <div className="home__subject--contents">
                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>
                                
                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">야구</p>
                                </div>
                            </div>
                            
                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>

                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">축구</p>
                                </div>
                            </div>

                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>

                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">농구</p>
                                </div>
                            </div>

                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>

                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">배구</p>
                                </div>
                            </div>

                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>
                                
                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">야구</p>
                                </div>
                            </div>
                            
                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>

                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">축구</p>
                                </div>
                            </div>

                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>

                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">농구</p>
                                </div>
                            </div>

                            <div className="home__subject--contents-items">
                                <div className="home__subject--contents-frame">
                                    <img className="home__subject--contents-img"  src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                                </div>

                                <div className="home__subject--contents-info">
                                    <p className="home__subject--contents-text">배구</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__modal">
                <div className="home__modal--header">
                    <svg className="home__modal--header-svg" width="25.573" height="22.455" viewBox="0 0 25.573 22.455">
                        <g id="그룹_36" data-name="그룹 36" transform="translate(-6.032 -7.352)">
                            <path id="패스_40" data-name="패스 40" d="M31.1,18.14v.881H8.319l8.919,9.443-.583.617L6.72,18.58l9.935-10.5.583.617L8.319,18.14Z" fill="none" stroke="#000" stroke-width="1"/>
                        </g>
                    </svg>
                    <p className="home__modal--header-title">인기 그룹</p>
                </div>

                <div className="home__modal--contents">
                    <div className="home__popular--post">
                        <div className="home__popular--post-frame">
                            <img className="home__popular--post-img" src='https://images.unsplash.com/photo-1619537902390-6c400f795262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt="thumnail" />
                            <div className="home__popular--post-member">
                                <svg width="13.379" height="13.776" viewBox="0 0 13.379 13.776">
                                    <path id="패스_42" data-name="패스 42" d="M15.709,13.3a3.823,3.823,0,1,0-3.376,0,6.143,6.143,0,0,0-4.9,5.805.524.524,0,1,0,1.049,0,5.283,5.283,0,0,1,5.541-4.964A5.283,5.283,0,0,1,19.562,19.1a.524.524,0,1,0,1.049,0A6.143,6.143,0,0,0,15.709,13.3ZM11.247,9.875a2.774,2.774,0,1,1,2.774,2.774A2.777,2.777,0,0,1,11.247,9.875Z" transform="translate(-7.331 -5.953)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                                </svg>
                                <p className="home__popular--post-num">87</p>
                            </div>
                        </div>

                        <div className="home__popular--post-info">
                        <p className="home__popular--post-title">그룹이름</p>
                        <p className="home__popular--post-text">소개 한줄로 해서 한줄 넘어가면 ...</p>
                        <p className="home__popular--post-join">
                            참여하기
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.003" height="9.83" viewBox="0 0 7.003 9.83">
                                <path id="패스_34" data-name="패스 34" d="M-840,468.941l5.869-4.314L-840,459.9" transform="translate(840.313 -459.513)" fill="none" stroke="#000" stroke-width="1"/>
                            </svg>
                        </p>
                        </div>
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

export default Home;