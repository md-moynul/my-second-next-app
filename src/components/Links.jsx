import Link from "next/link";


const Links = () => {
    return (
        <div className="md:space-x-5">
            <Link href='/'>Home</Link>
            <Link href='/todos'>Todos</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/foods'>Foods</Link>
        </div>
    );
};

export default Links;