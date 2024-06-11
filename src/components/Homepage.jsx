// export default function Homepage(){
//     return(
//         <div className="bg-gray-200 pt-24 md:pt-16">
//         <div className="flex flex-col mx-2 sm:mx-4 md:mx-12 lg:mx-24 p-8">
//             <div className="flex flex-row justify-between items-center gap-12">
//                 <h1 className="whitespace-nowrap">Go beyond</h1>
//                 <p className="hidden lg:block text-gray-800">We as a leading outsourcing firm, putting every ounce of innovation, dedication and skill - we love to help you scale your business growdth</p>
//             </div>

//             <div className="flex justify-end">
//                 <h1>the ordinary</h1>
//             </div>

//             <div className="flex flex-row justify-between items-center gap-12">
//                 <p className="lg:hidden text-gray-800">We as a leading outsourcing firm, putting every ounce of innovation, dedication and skill - we love to help you scale your business growdth</p>
//             </div>

//                 <video width="320" height="240" controls preload="auto">
//                 <source src="/asset/vid1.mp4" type="video/mp4" autoPlay loop />
//                 <track
//                 src="/asset/vid1.mp4"
//                 kind="subtitles"
//                 srcLang="en"
//                 label="English"
//                 autoPlay loop
//                 />
//                 Your browser does not support the video tag.
//                 </video>

//         </div>
//         </div>
//     )
// }

"use client"

import React, { useEffect, useRef } from 'react';

export default function Homepage() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure the video plays on load
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div className="bg-white pt-24 md:pt-16">
            <div className="flex flex-col mx-2 sm:mx-4 md:mx-12 lg:mx-24 px-8 pt-8">
                <div className='z-20'>
                <div className="flex flex-row justify-between items-center gap-12">
                    <h1 className="whitespace-nowrap">Go beyond</h1>
                    <p className="hidden lg:block text-gray-800">
                        We as a leading outsourcing firm, putting every ounce of innovation, dedication and skill - we love to help you scale your business growth
                    </p>
                </div>

                <div className="flex justify-end">
                    <h1>the ordinary</h1>
                </div>

                <div className="flex flex-row justify-between items-center gap-12">
                    <p className="lg:hidden text-gray-800">
                        We as a leading outsourcing firm, putting every ounce of innovation, dedication and skill - we love to help you scale your business growth
                    </p>
                </div>
                </div>

                <video
                    ref={videoRef}
                    src="/asset/vid1.mp4"
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto z-10 -translate-y-6"
                    style={{ objectFit: 'cover' }}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
