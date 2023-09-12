import { useState } from 'react'
import user1 from '../imgs/user1.png'
import user2 from '../imgs/user2.png'
import user3 from '../imgs/user3.png'
import Like from '../imgs/like.svg'
import dislike from '../imgs/unlike.svg'


function CommentsList(props) {
    const [like, setLike] = useState(Like)
    const [disLike, setDisLike] = useState(dislike)
    const [hideTextbox, setHidetextBox] = useState(true)
    const [hideTextbox1, setHidetextBox1] = useState(true)
    const handleLike = () => {
        setLike(dislike);
    }
    const handleDisLike = () => {
        setDisLike(Like)
    }
    const handleClick = () => {
        setHidetextBox(!hideTextbox);
    }
    const handleReply = () => {
        setHidetextBox1(!hideTextbox1);
    }
    return (
        <>
            <p className='comments'>Comments</p>
            <div className="comment-badge">
                <img src={user1} alt="User" />
                <p className='userName'>Maria</p>
                <p className='comment'>
                    I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?
                </p>
                <button type='button' className='like-btn'><img src={Like} alt="" /><span className='text-gray mx-2'>1</span></button>
                <div className="dot"></div>
                <button type="button" className='reply' onClick={handleClick}>Reply</button>
                {hideTextbox ? null : <div className="comment-badge">
                    <div className="input-group mb-3 mt-3">
                        <input type="text" className="form-control" placeholder='Write Reply' aria-label="Write Reply" aria-describedby="button-addon2" />
                        <button className="btn" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                            <g clipPath="url(#clip0_46_876)">
                                <path d="M14.8763 1.09851L0.390353 9.45565C-0.175333 9.78069 -0.10345 10.5683 0.45911 10.8058L3.78134 12.1997L12.7604 4.28635C12.9323 4.13321 13.1761 4.36761 13.0292 4.54575L5.50028 13.7186L5.50028 16.2345C5.50028 16.9721 6.391 17.2627 6.82854 16.7283L8.81313 14.3124L12.7073 15.9438C13.1511 16.1314 13.6574 15.8532 13.7387 15.375L15.9889 1.87359C16.0952 1.24227 15.417 0.785973 14.8763 1.09851Z" fill="#6590FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_46_876">
                                    <rect width="16" height="16.0049" fill="white" transform="translate(0 0.997536)" />
                                </clipPath>
                            </defs>
                        </svg></button>
                    </div>
                </div>
                }
            </div>



            <div className="comment-badge">
                <img src={user2} alt="User" />
                <p className='userName'>Alex Benjamin</p>
                <p className='comment'>
                    Home sweet home! I’m glad you are back. It’s been two year and miss the football matches we have together. A lot has been changed since you left. Let’s meet at the ground tomorrow evening?
                </p>
                <button type='button' className='like-btn' onClick={handleLike}><img src={like} alt="" /><span className='text-gray mx-2'>1</span></button>
                <div className="dot"></div>
                <button type="button" className='reply' onClick={handleReply}>Reply</button>
                {hideTextbox1 ? null : <div className="comment-badge">
                    <div className="input-group mb-3 mt-3">
                        <input type="text" className="form-control" placeholder='Write Reply' aria-label="Write Reply" aria-describedby="button-addon2" />
                        <button className="btn" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                            <g clipPath="url(#clip0_46_876)">
                                <path d="M14.8763 1.09851L0.390353 9.45565C-0.175333 9.78069 -0.10345 10.5683 0.45911 10.8058L3.78134 12.1997L12.7604 4.28635C12.9323 4.13321 13.1761 4.36761 13.0292 4.54575L5.50028 13.7186L5.50028 16.2345C5.50028 16.9721 6.391 17.2627 6.82854 16.7283L8.81313 14.3124L12.7073 15.9438C13.1511 16.1314 13.6574 15.8532 13.7387 15.375L15.9889 1.87359C16.0952 1.24227 15.417 0.785973 14.8763 1.09851Z" fill="#6590FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_46_876">
                                    <rect width="16" height="16.0049" fill="white" transform="translate(0 0.997536)" />
                                </clipPath>
                            </defs>
                        </svg></button>
                    </div>
                </div>
                }
            </div>


            <div className="comment-badge">
                <img src={user3} alt="User" />
                <p className='userName'>Tania</p>
                <p className='comment'>
                    Hey bud, welcome back to home. It’s so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?
                </p>
                <button type='button' onClick={handleDisLike} className='like-btn'><img src={disLike} alt="" />
                </button>
                <div className="dot"></div>
                <button type="button" className='reply'>Reply</button>
            </div>
        </>
    )
}

export default CommentsList
