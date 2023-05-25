import React from 'react';
import "./hero.css";
import HeroImg from "../../img/human.jpg";
import {Typewriter} from 'react-simple-typewriter';
import { RiKakaoTalkLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { DiJava, DiReact, DiHtml5 } from "react-icons/di";

const Hero = () => {
    return (
        <> < section className = "hero" id = "hero" > <div className="container f-flex top">
            <div className="left top">
                <h3>welcome to my world</h3>
                <h1>Hi, I'm
                    <span> Yoon</span>
                </h1>
                <h2>
                    <span>
                        <Typewriter
                            words={[" NewB Developer.", "Professional Coder."]}
                            loop="loop"
                            cursor="cursor"
                            cursorStyle="|"
                            delaySpeed={1000}
                            typeSpeed={70}
                            deleteSpeed={50}/>
                    </span>
                </h2>
                <p>노년에게서 이상 오아이스도 부패를 그림자는 얼마나 피다. 그들에게 일월과 동력은 구하지 풀이 것이다. 피부가 가치를 용기가 같지 긴지라
                    가슴이 얼마나 그러므로 힘있다. 청춘 청춘의 인간이 봄바람이다. 그들의 무한한 황금시대의 이상을 온갖 사랑의 물방아 밥을 봄바람이다. 열매를
                    있을 그들을 봄바람을 인생의 행복스럽고 실현에 사막이다. 뭇 예가 광야에서 청춘에서만 심장은 밝은 무한한 열락의 사랑의 이것이다. 되려니와,
                    가는 보이는 원대하고, 석가는 피어나는 봄바람이다. 보배를 싶이 청춘 말이다. 그것은 아니한 되는 크고 인도하겠다는 보배를 낙원을 이상,
                    아니다.</p>

                <div className="hero-btn d-flex">
                    <div className="col">
                        <h4>View My SNS</h4>
                        <div className="button">
                            <button className="btn-shadow">
                                <RiKakaoTalkLine className="icon"/>
                            </button>
                            <button className="btn-shadow">
                                <RiTwitterLine className="icon" />
                            </button>
                            <button className="btn-shadow">
                                <RiInstagramLine className="icon" />
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <h4>BEST MY SKILL</h4>
                        <div className="button">
                            <button className="btn-shadow">
                                <DiJava className='icon'/>
                            </button>
                            <button className="btn-shadow">
                                <DiReact className='icon'/>
                            </button>
                            <button className="btn-shadow">
                                <DiHtml5 className='icon'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right-img">
                    <img src={HeroImg} alt="me"/>
                </div>
            </div>
        </div>
    </section>
</>
    );
};

export default Hero;