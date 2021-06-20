import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import './WritePost.css';
import sparkling from './sparkling.js';

function WritePost(){

    const groupFile = useRef();
    const groupImg = useRef();
    const imgPath = useRef();
    const imgCircle = useRef();
    const imgText = useRef();

    const writeDom = useRef();
    const writeName = useRef();
    const writeExpain = useRef();
    const writePlace = useRef();
    const writeSport = useRef();

    const viewDom = useRef();
    const viewHeader = useRef();
    const viewTitle = useRef();
    const viewExpain = useRef();

    const writePostDone = () => { };

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
        }
        reader.readAsDataURL(file);
    };

    return(
        <div className="writePost">
            <div className="writePost__write">
                <div className="writePost__header">
                    <svg className="writePost__header--icon" width="19.315" height="13.44" viewBox="0 0 19.315 13.44">
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
                        <textarea className="writePost__about--input" placeholder="내용을 작성해주세요." ref={writeExpain}></textarea>
                    </div>
                    
                    <div className="writePost__about">
                        <p className="writePost__about--title">해시태그</p>
                        <textarea className="writePost__about--input" placeholder="#해시태그를 작성해주세요." ref={writeExpain}></textarea>
                    </div>

                    <div className="writePost__bottom">
                        <button className="writePost__bottom--cancel">취소</button>
                        <button className="writePost__bottom--done" onClick={writePostDone}>작성완료</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WritePost;