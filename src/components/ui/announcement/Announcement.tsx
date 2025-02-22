
import { cn } from '@/lib/utils';
import { AiOutlineClose } from 'react-icons/ai';
import  { useEffect, useState } from 'react';

const Announcement = () => {
    const [isClosed, setIsClosed] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Check if the user has visited before in this session
            const hasVisitedBefore = sessionStorage.getItem('hasVisited');

            // If the user hasn't visited before in this session, show the announcement
            if (!hasVisitedBefore) {
                setIsClosed(false);
            } else {
                setIsClosed(true);
            }
        }
    }, []);

    if(isClosed) return null

    const handleClose = () => {
        if (typeof window !== 'undefined') {
            // Set a flag indicating that the user has visited in this session
            sessionStorage.setItem('hasVisited', 'true');
            setIsClosed(true);
        }
    };

    return (
        <div className={cn(
            "bg-teal-500/70 text-neutral-50 px-4 py-2 text-[0.6rem] md:py-2 md:text-[.8rem] md:px-8 text-start md:text-center relative transition font-bold",
            isClosed && "hidden"
        )}>
            <p>This website is under development. Some features may not work properly.</p>
            <div className='absolute -translate-y-1/2 cursor-pointer top-1/2 right-4' onClick={handleClose}>
                <AiOutlineClose className='inline w-4 h-4'/>
            </div>
        </div>
    );
}

export default Announcement;
