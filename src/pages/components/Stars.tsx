import React from "react";

const Stars: React.FC = () => {
    return(
        <>
            <section className='starContainer'>
                {
                    Array.from({ length: 300 }).map((_, index) => (
                        <div key={index} className='star'></div>
                    ))
                }
            </section>
        </>
    )
}

export default Stars