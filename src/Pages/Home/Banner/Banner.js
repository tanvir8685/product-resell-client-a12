import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1371333667/photo/cars-for-sale-stock-lot-row.jpg?s=612x612&w=0&k=20&c=VfEs7VYfCfhcXH7INxn5ciAO5sktUCQwQr5yUbml09s=")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome <br /> Vehicle Hub</h1>
                        <p className="mb-5 text-3xl font-semibold">“There’s three things men always talk about ~ women, sports, and cars.” ~ Mario Lopez.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;