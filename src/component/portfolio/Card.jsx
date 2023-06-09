import React, {useState } from 'react';
import { FcLike, FcRight } from "react-icons/fc";
import { FaRegThumbsUp, FaAngleRight, FaTimes } from "react-icons/fa";

const Card = ({img, title, category, totalLike}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
        <div className="box btn-shadow card">
            <div className="img">
                <img src={img} alt={img} onClick={toggleModal}/>
            </div>
            <div className="category d-flex">
                <span>
                    {category}
                </span>
                <label>
                    <FcLike />
                    {totalLike}
                </label>
            </div>
            <div className="title">
                <h2>
                    {title}
                </h2>
                <a href="#popup" className='arrow' onClick={toggleModal}>
                    <FcRight />
                </a>
            </div>
        </div>
        {modal &&( 
        <div className="modal overlay">
            <div className="modal-content d-flex">
                <div className="modal-img left">
                    <img src={img} alt={img} />
                </div>
                <div className="modal-text right">
                    <span>Features - Design</span>
                    <h1>{title}</h1>
                    <p>피어나기 가진 따뜻한 같이, 이것이다. 꽃이 긴지라 싸인 봄바람을 것이다. </p>
                    <p>그러므로 만물은 않는 청춘이 모래뿐일 아니더면, 노년에게서 앞이 꽃이 사막이다.</p>
                    <button className="btn-shadow">
                        LIKE THIS <FaRegThumbsUp />
                    </button>
                    <button className="btn-shadow">
                        VIEW PROJECT <FaAngleRight />
                    </button>
                    <button className="btn-shadow close-modal" onClick={toggleModal}>
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
        )}
        </>
    );
};

export default Card;