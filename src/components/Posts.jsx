'use client'
import React, { use } from 'react';

const Posts = ({postsResponse}) => {
    const posts = use(postsResponse)
    console.log(posts);
    
    return (
        <div>
            <h2 className="text-4xl">Posts : {posts.length}</h2>
        </div>
    );
};

export default Posts;