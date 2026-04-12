'use clint'
import Link from 'next/link';


const CardButtons = ({id}) => {
    return (
            <Link href={`/foods/${id}`} className="btn btn-ghost">See Details</Link>
    );
};

export default CardButtons;