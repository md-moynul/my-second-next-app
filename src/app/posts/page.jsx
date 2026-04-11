import Posts from "@/components/Posts";
import { Suspense } from "react";


const PostPage = () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json())
    return (
        <div>
            <Suspense fallback={<p>Post is loading...</p>}>
                <Posts postsResponse={postsResponse}/>
            </Suspense>
        </div>
    );
};

export default PostPage;