import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import './WritePost.css';
import sparkling from './sparkling.js';

function WritePost(){

    const history = useHistory();
    const goToHome = () => { history.push('./home'); };

    const commentDom = useRef();
    const menuDom = useRef();
    const groupFile = useRef();
    const groupImg = useRef();
    const imgPath = useRef();
    const imgCircle = useRef();
    const imgText = useRef();

    const writeDom = useRef();
    const writeName = useRef();
    const writeContents = useRef();
    const writeHash = useRef();

    const viewDom = useRef();
    const viewImg = useRef();
    const viewTitle = useRef();
    const viewContents = useRef();

    const writePostDone = () => {
        writeDom.current.style.display = 'none';
        viewTitle.current.textContent = writeName.current.value;
        viewContents.current.textContent = writeContents.current.value;
        viewDom.current.style.display = 'block';
        menuDom.current.style.display = 'flex';
        commentDom.current.style.display = 'flex';
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
            viewImg.current.src = c.target.result;
        }
        reader.readAsDataURL(file);
    };

    return(
        <div className="writePost">

            <div className="comment" ref={commentDom}>
                <div className="comment__pic"></div>
                <input className="comment__input" type="text" placeholder="댓글을 작성해주세요." />
            </div>

            <div className="menuPost" ref={menuDom}>
                <div className="menuPost__btn--home menuPost__btn active">
                    <svg className="menuPost__btn--icon" width="27.46" height="27.19" viewBox="0 0 27.46 27.19">
                        <path id="패스_149" data-name="패스 149" d="M281.032,30.65h-5.79a2.469,2.469,0,0,1-2.465-2.466V22.727a.8.8,0,0,0-.8-.8h-4.89a.8.8,0,0,0-.8.8v5.457a2.468,2.468,0,0,1-2.465,2.466H258.5a2.469,2.469,0,0,1-2.466-2.466v-13.9a3.191,3.191,0,0,1,1.3-2.567l4.081-2.985a.822.822,0,0,1,.971,1.327l-4.081,2.985a1.539,1.539,0,0,0-.63,1.24v13.9a.822.822,0,0,0,.822.822h5.318a.822.822,0,0,0,.821-.822V22.727a2.447,2.447,0,0,1,2.444-2.445h4.89a2.447,2.447,0,0,1,2.445,2.445v5.457a.822.822,0,0,0,.821.822h5.79a.822.822,0,0,0,.821-.822V14.305a1.54,1.54,0,0,0-.646-1.252l-10.816-7.7a1.349,1.349,0,0,0-1.582.01l-1.94,1.42a.822.822,0,1,1-.971-1.327l1.94-1.42a2.992,2.992,0,0,1,3.506-.023l10.816,7.7a3.188,3.188,0,0,1,1.337,2.592V28.184A2.468,2.468,0,0,1,281.032,30.65Z" transform="translate(-256.037 -3.46)" fill="#f5a21a"/>
                    </svg>
                    <b className="menuPost__btn--name">홈</b>
                </div>
                
                <div className="menuPost__btn--group menuPost__btn">
                    <svg className="menuPost__btn--icon" width="26.502" height="26.34" viewBox="0 0 26.502 26.34">
                        <path id="패스_168" data-name="패스 168" d="M208.231,21.945H213.6a.8.8,0,1,0,0-1.592h-5.369a.8.8,0,1,0,0,1.592Z" transform="translate(-204.149 -6.895)" fill="#e0e0e0"/>
                        <path id="패스_169" data-name="패스 169" d="M226.4,3.556H212.872a.8.8,0,0,0,0,1.6H226.4a1.812,1.812,0,0,1,1.809,1.809V9.053h-23.3V6.967a1.811,1.811,0,0,1,1.809-1.809h.489a.8.8,0,0,0,0-1.6h-.489a3.415,3.415,0,0,0-3.411,3.411V24.35a5.552,5.552,0,0,0,5.546,5.546h15.41a5.552,5.552,0,0,0,5.546-5.546V6.967A3.415,3.415,0,0,0,226.4,3.556Zm1.809,20.794a3.948,3.948,0,0,1-3.944,3.944h-15.41a3.948,3.948,0,0,1-3.944-3.944v-13.7h23.3Z" transform="translate(-203.306 -3.556)" fill="#e0e0e0"/>
                        <path id="패스_170" data-name="패스 170" d="M208.231,17.815h9.462a.8.8,0,1,0,0-1.592h-9.462a.8.8,0,1,0,0,1.592Z" transform="translate(-204.149 -6.074)" fill="#e0e0e0"/>
                    </svg>
                    <b className="menuPost__btn--name">속한그룹</b>
                </div>

                <div className="menuPost__btn--more menuPost__btn">
                    <svg className="menuPost__btn--icon" width="26.062" height="7.415" viewBox="0 0 26.062 7.415">
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
                    <b className="menuPost__btn--name">더보기</b>
                </div>
            </div>

            <div className="writePost__view" ref={viewDom} onClick={goToHome}>
                <div className="writePost__view--header">
                    <svg className="writePost__view--header-icon" width="19.315" height="13.44" viewBox="0 0 19.315 13.44">
                        <g id="그룹_88" data-name="그룹 88" transform="translate(-1159.164 481.827) rotate(180)">
                            <g id="그룹_6" data-name="그룹 6" transform="translate(-1178.478 468.387)">
                            <path id="패스_2" data-name="패스 2" d="M-1152.519,479.8l1.3-1.3-1.3-1.3-5.421-5.421-1.3,1.3,5.422,5.421-5.422,5.421,1.3,1.3Z" transform="translate(1170.535 -471.778)"/>
                            <g id="그룹_5" data-name="그룹 5" transform="translate(0 5.802)">
                                <rect id="사각형_6" data-name="사각형 6" width="17.171" height="1.836" fill="#231f20"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                    <p className="writePost__view--header-title" ref={viewTitle}>다들 오늘 뭐하시나요?</p>
                </div>

                <div className="writePost__view--thum">
                    <img className="writePost__view--thum-img" src="#" alt="thumnails" ref={viewImg} />
                </div>

                <div className="writePost__view--user">
                    <div className="writePost__view--user-pic"></div>
                    <div className="writePost__view--user-info">
                        <p className="writePost__view--user-name">고혜경</p>
                        <p className="writePost__view--user-date">2021. 06. 21</p>
                    </div>
                </div>

                <div className="writePost__view--contents">
                    <p className="writePost__view--contents-title">내용</p>
                    <p className="writePost__view--contents-text" ref={viewContents}>
                        황금같은 주말에 다들 뭐하시고 계신가요?
                        저는 집에서 하루종일 누워있어서
                        주말에 운동을 해볼려고 하는 데
                        운동 추천 좀 부탁드릴게요~
                    </p>
                </div>

                <div className="writePost__view--contents">
                    <p className="writePost__view--contents-title">해시태그</p>
                </div>
            </div>

            <div className="writePost__write" ref={writeDom}>
                <div className="writePost__header">
                    <svg className="writePost__header--icon" width="19.315" height="13.44" viewBox="0 0 19.315 13.44" onClick={goToHome}>
                        <g id="그룹_88" data-name="그룹 88" transform="translate(-1159.164 481.827) rotate(180)">
                            <g id="그룹_6" data-name="그룹 6" transform="translate(-1178.478 468.387)">
                            <path id="패스_2" data-name="패스 2" d="M-1152.519,479.8l1.3-1.3-1.3-1.3-5.421-5.421-1.3,1.3,5.422,5.421-5.422,5.421,1.3,1.3Z" transform="translate(1170.535 -471.778)"/>
                            <g id="그룹_5" data-name="그룹 5" transform="translate(0 5.802)">
                                <rect id="사각형_6" data-name="사각형 6" width="17.171" height="1.836" fill="#231f20"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                    <h1 className="writePost__header--title">게시글 작성</h1>
                </div>

                <div className="writePost__thum" onClick={imgSelect} ref={groupImg}>
                    <svg className="writePost__thum--select" width="203" height="100" viewBox="0 0 203 100">
                        <g id="그룹_95" data-name="그룹 95" transform="translate(-79 -171)">
                            <g id="그룹_62" data-name="그룹 62" transform="translate(1451.523 -392.797)">
                            <g id="그룹_61" data-name="그룹 61" transform="translate(-1301.523 563.797)">
                                <path ref={imgPath} id="패스_60" data-name="패스 60" d="M-1247.265,562.382h-9.238v-1.394a9.012,9.012,0,0,0-8.985-8.985h-17.465a9.011,9.011,0,0,0-8.985,8.985v1.394h-9.241a10.278,10.278,0,0,0-10.249,10.249v33.916a10.279,10.279,0,0,0,10.249,10.252h53.914a10.281,10.281,0,0,0,10.252-10.252V572.63A10.28,10.28,0,0,0-1247.265,562.382Zm-26.956,44.293a17.086,17.086,0,0,1-17.087-17.084,17.084,17.084,0,0,1,17.087-17.084,17.083,17.083,0,0,1,17.084,17.084A17.085,17.085,0,0,1-1274.22,606.674Z" transform="translate(1311.428 -552.002)" fill="#666"/>
                                <circle ref={imgCircle} id="타원_17" data-name="타원 17" cx="11.01" cy="11.01" r="11.01" transform="translate(26.196 26.577)" fill="#666"/>
                            </g>
                            </g>
                        </g>
                        <text ref={imgText} id="그룹프로필_사진을_넣어주세요." data-name="그룹프로필 사진을 넣어주세요." transform="translate(0 95)" width="100%" textAign="center" fill="#666" fontSize="16" fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR"><tspan x="0" y="0">게시글 사진을 넣어주세요.</tspan></text>
                    </svg>
                    <input className="writePost__thum--select-input" type='file' label='Upload' accept='image/jpg,impge/png,image/jpeg,image/gif' ref={groupFile} onChange={imgChange} />
                </div>

                <div className="writePost__info">
                    <div className="writePost__name">
                        <p className="writePost__name--title">제목</p>
                        <input className="writePost__name--input" type="text" placeholder="제목을 작성해주세요." ref={writeName} />
                    </div>

                    <div className="writePost__about">
                        <p className="writePost__about--title">내용</p>
                        <textarea className="writePost__about--input" placeholder="내용을 작성해주세요." ref={writeContents}></textarea>
                    </div>
                    
                    <div className="writePost__about">
                        <p className="writePost__about--title">해시태그</p>
                        <textarea className="writePost__about--input" placeholder="#해시태그를 작성해주세요." ref={writeHash}></textarea>
                    </div>
                </div>

                <div className="writePost__bottom">
                    <button className="writePost__bottom--cancel">취소</button>
                    <button className="writePost__bottom--done" onClick={writePostDone}>작성완료</button>
                </div>
            </div>
        </div>
    );
}

export default WritePost;