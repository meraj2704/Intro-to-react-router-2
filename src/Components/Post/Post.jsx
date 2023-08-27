import React from 'react';

const Post = (props) => {
    // console.log(props.post)
    const {title,body} = props.post
    return (
        <div>
            {/* here we show our post  */}
            <div className='p-4 bg-neutral-300 mt-5'>
            <h1 className='text-xl mt-4 font-bold'>{title}</h1>
            <p>{body}</p>
            </div>
        </div>
    );
};

export default Post;