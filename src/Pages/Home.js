import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen"
            style={{ backgroundImage: "url(https://media.istockphoto.com/id/1414285963/photo/stuffed-turkey-for-thanksgiving-holidays-with-pumpkin-peas-pecan-berry-pie-cheese-variations.jpg?b=1&s=612x612&w=0&k=20&c=vz78H1OPqugmNHCcQxnvQ7VmGar7uuy4mnistL8rBw8=" }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;