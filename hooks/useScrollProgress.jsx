import React, {useState, useEffect} from 'react';

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion((currentProgress / scrollHeight * 100).toFixed(2));
            }
    };

    //event
    window.addEventListener('scroll', updateScrollCompletion);
    //clear event
    return() => window.removeEventListener('scroll', updateScrollCompletion);
}, []);
    return completion;
};

export default useScrollProgress;