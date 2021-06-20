import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import './CreateGroup.css';
import sparkling from './sparkling.js';

function CreateGroup(){

    const groupFile = useRef();
    const groupImg = useRef();
    const imgPath = useRef();
    const imgCircle = useRef();
    const imgText = useRef();

    const menuDom = useRef();
    const joinDom = useRef();

    const writeDom = useRef();
    const writeName = useRef();
    const writeExpain = useRef();
    const writePlace = useRef();
    const writeSport = useRef();

    const viewDom = useRef();
    const viewHeader = useRef();
    const viewTitle = useRef();
    const viewExpain = useRef();

    const createGroupDone = () => {
        writeDom.current.style.display = 'none';
        viewTitle.current.textContent = writeName.current.value;
        viewExpain.current.textContent = writeExpain.current.value;
        viewDom.current.style.display = 'block';
        menuDom.current.style.display = 'flex';
        joinDom.current.style.display = 'block';
    };

    const imgSelect = (e) => {
        groupFile.current.click();
        imgPath.current.style.fill = '#fff';
        imgCircle.current.style.fill = '#fff';
        imgText.current.style.fill = '#fff';
    };

    const imgChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = (c) => {
            groupImg.current.style.backgroundImage = `url(${c.target.result})`;
            viewHeader.current.style.backgroundImage = `url(${c.target.result})`;
        }
        reader.readAsDataURL(file);
    };

    const history = useHistory();
    const goToWritePost = () => { history.push('./writePost'); };
    
    return(

        <div className="createGroup">
            <button className="createGroup__join" ref={joinDom} onClick={goToWritePost}>신청하기</button>

            <div className="menu" ref={menuDom}>
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

            <div className="createGroup__view" ref={viewDom}>
                <div className="createGroup__view--header" ref={viewHeader}>
                    <div className="createGroup__view--header-wrapper">
                        <svg className="createGroup__view--header-icon" width="26.761" height="23.911" viewBox="0 0 26.761 23.911">
                            <g id="그룹_141" data-name="그룹 141" transform="translate(-5.343 -6.625)">
                                <path id="패스_40" data-name="패스 40" d="M31.1,18.14v.881H8.319l8.919,9.443-.583.617L6.72,18.58l9.935-10.5.583.617L8.319,18.14Z" fill="none" stroke="#fff" strokeWidth="2"/>
                            </g>
                        </svg>
                        <h1 className="createGroup__view--header-title" ref={viewTitle}>배드민턴 한판!</h1>
                    </div>
                </div>

                <div className="createGroup__view--contents">
                    <div className="createGroup__view--about">
                        <p className="createGroup__view--about-text" ref={viewExpain}>주마다 배드민턴 칠 수 있는 공간을 찾아 운동하러 다니는 방입니다.  당신을 초대합니다~!</p>
                    </div>

                    <div className="createGroup__view--schedule">
                        <p className="createGroup__view--schedule-title">경기일정</p>
                        <div className="createGroup__view--schedule-contents">
                            <div className="createGroup__view--schedules">
                                <p className="createGroup__view--schedules-title">같이 배드민턴 칠 사람</p>
                                <p className="createGroup__view--schedules-text">2인 또는 4인 경기로 이루어지며 자세한 설명은 당일날에 알려..</p>
                            </div>

                            <div className="createGroup__view--schedules">
                                <p className="createGroup__view--schedules-title">같이 배드민턴 칠 사람</p>
                                <p className="createGroup__view--schedules-text">2인 또는 4인 경기로 이루어지며 자세한 설명은 당일날에 알려..</p>
                            </div>
                        </div>
                    </div>

                    <div className="createGroup__view--post">
                        <p className="createGroup__view--post-title">게시글</p>
                        <div className="createGroup__view--post-contents">
                            <div className="createGroup__view--posts">
                                <div className="createGroup__view--posts-thum">
                                    <img className="createGroup__view--posts-img" src="./default.png" alt="thumnails" />
                                </div>

                                <div className="createGroup__view--posts-info">
                                    <p className="createGroup__view--posts-title">다들 오늘 뭐하시나요?</p>
                                    <p className="createGroup__view--posts-text">황금같은 주말에 다들 뭐하시고 계신가요? 저는 집에서 하루종일 누워있어서...</p>
                                </div>

                                <div className="createGroup__view--posts-user">
                                    <div className="createGroup__view--user">
                                        <div className="createGroup__view--user-pic"></div>
                                        <p className="createGroup__view--user-name">홍원우</p>
                                    </div>

                                    <p className="createGroup__view--post-date">2021. 06. 21</p>
                                </div>
                            </div>

                            <div className="createGroup__view--posts">
                                <div className="createGroup__view--posts-thum">
                                    <img className="createGroup__view--posts-img" src="./default.png" alt="thumnails" />
                                </div>

                                <div className="createGroup__view--posts-info">
                                    <p className="createGroup__view--posts-title">다들 오늘 뭐하시나요?</p>
                                    <p className="createGroup__view--posts-text">황금같은 주말에 다들 뭐하시고 계신가요? 저는 집에서 하루종일 누워있어서...</p>
                                </div>

                                <div className="createGroup__view--posts-user">
                                    <div className="createGroup__view--user">
                                        <div className="createGroup__view--user-pic"></div>
                                        <p className="createGroup__view--user-name">홍원우</p>
                                    </div>

                                    <p className="createGroup__view--post-date">2021. 06. 21</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="createGroup__write" ref={writeDom}>
                <div className="createGroup__header">
                    <svg className="createGroup__header--icon" width="19.315" height="13.44" viewBox="0 0 19.315 13.44">
                        <g id="그룹_88" data-name="그룹 88" transform="translate(-1159.164 481.827) rotate(180)">
                            <g id="그룹_6" data-name="그룹 6" transform="translate(-1178.478 468.387)">
                            <path id="패스_2" data-name="패스 2" d="M-1152.519,479.8l1.3-1.3-1.3-1.3-5.421-5.421-1.3,1.3,5.422,5.421-5.422,5.421,1.3,1.3Z" transform="translate(1170.535 -471.778)"/>
                            <g id="그룹_5" data-name="그룹 5" transform="translate(0 5.802)">
                                <rect id="사각형_6" data-name="사각형 6" width="17.171" height="1.836" fill="#231f20"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                    <h1 className="createGroup__header--title">그룹 개설</h1>
                </div>

                <div className="createGroup__thum" ref={groupImg} onClick={imgSelect}>
                    <svg className="createGroup__thum--select" width="203" height="100" viewBox="0 0 203 100">
                        <g id="그룹_95" data-name="그룹 95" transform="translate(-79 -171)">
                            <g id="그룹_62" data-name="그룹 62" transform="translate(1451.523 -392.797)">
                            <g id="그룹_61" data-name="그룹 61" transform="translate(-1301.523 563.797)">
                                <path ref={imgPath} id="패스_60" data-name="패스 60" d="M-1247.265,562.382h-9.238v-1.394a9.012,9.012,0,0,0-8.985-8.985h-17.465a9.011,9.011,0,0,0-8.985,8.985v1.394h-9.241a10.278,10.278,0,0,0-10.249,10.249v33.916a10.279,10.279,0,0,0,10.249,10.252h53.914a10.281,10.281,0,0,0,10.252-10.252V572.63A10.28,10.28,0,0,0-1247.265,562.382Zm-26.956,44.293a17.086,17.086,0,0,1-17.087-17.084,17.084,17.084,0,0,1,17.087-17.084,17.083,17.083,0,0,1,17.084,17.084A17.085,17.085,0,0,1-1274.22,606.674Z" transform="translate(1311.428 -552.002)" fill="#666"/>
                                <circle ref={imgCircle} id="타원_17" data-name="타원 17" cx="11.01" cy="11.01" r="11.01" transform="translate(26.196 26.577)" fill="#666"/>
                            </g>
                            </g>
                        </g>
                        <text ref={imgText} id="그룹프로필_사진을_넣어주세요." data-name="그룹프로필 사진을 넣어주세요." transform="translate(0 95)" fill="#666" fontSize="16" fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR"><tspan x="0" y="0">그룹프로필 사진을 넣어주세요.</tspan></text>
                    </svg>
                    <input className="createGroup__thum--select-input" type='file' label='Upload' accept='image/jpg,impge/png,image/jpeg,image/gif' ref={groupFile} onChange={imgChange} />
                </div>

                <div className="createGroup__info">
                    <div className="createGroup__name">
                        <p className="createGroup__name--title">그룹이름</p>
                        <input className="createGroup__name--input" type="text" placeholder="그룹이름을 작성해주세요." ref={writeName} />
                    </div>

                    <div className="createGroup__about">
                        <p className="createGroup__about--title">그룹소개</p>
                        <textarea className="createGroup__about--input" placeholder="그룹 소개를 작성해주세요." ref={writeExpain}></textarea>
                    </div>
                    
                    <div className="createGroup__place">
                        <p className="createGroup__place--title">그룹지역</p>
                        <select className="createGroup__place--input" defaultValue="선택" ref={writePlace}>
                            <option value="선택">선택</option>
                            <option value="서울특별시">서울특별시</option>
                            <option value="강원도">강원도</option>
                            <option value="경기도">경기도</option>
                            <option value="경상남도">경상남도</option>
                            <option value="경상북도">경상북도</option>
                            <option value="전라남도">전라남도</option>
                            <option value="전라북도">전라북도</option>
                            <option value="광주광역시">광주광역시</option>
                            <option value="대구광역시">대구광역시</option>
                            <option value="대전광역시">대전광역시</option>
                            <option value="부산광역시">부산광역시</option>
                            <option value="울산광역시">울산광역시</option>
                            <option value="인천광역시">인천광역시</option>
                            <option value="세종특별자치시">세종특별자치시</option>
                            <option value="제주특별자치도">제주특별자치도</option>
                        </select>
                    </div>

                    <div className="createGroup__sport">
                        <p className="createGroup__sport--title">[주] 스포츠타입</p>
                        <select className="createGroup__sport--input" defaultValue="선택" ref={writeSport}>
                            <option value="선택">선택</option>
                            <option value="야구">야구</option>
                            <option value="농구">농구</option>
                            <option value="배구">배구</option>
                            <option value="탁구">탁구</option>
                            <option value="필드하키">필드하키</option>
                            <option value="럭비">럭비</option>
                            <option value="족구">족구</option>
                            <option value="배드민턴">배드민턴</option>
                            <option value="수영">수영</option>
                            <option value="자전거">자전거</option>
                            <option value="승마">승마</option>
                            <option value="테니스">테니스</option>
                            <option value="유도">유도</option>
                            <option value="골프">골프</option>
                            <option value="레슬링">레슬링</option>
                            <option value="검도">검도</option>
                        </select>
                    </div>
                </div>

                <div className="createGroup__bottom">
                    <button className="createGroup__bottom--cancel">취소</button>
                    <button className="createGroup__bottom--done" onClick={createGroupDone}>작성완료</button>
                </div>
            </div>
        </div>
    );
}

export default CreateGroup;