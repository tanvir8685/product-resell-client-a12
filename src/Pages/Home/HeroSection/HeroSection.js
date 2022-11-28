import React from 'react';

const HeroSection = () => {
    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://media.istockphoto.com/id/1342043587/photo/shot-of-a-car-salesman-handing-over-keys-to-a-customer.jpg?s=612x612&w=0&k=20&c=9Ei9MQ7Rj0aJm-0DpNkQbD_YwPszjnwcsd9k1UE94R4=" className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">“You must trust and believe in people or life becomes impossible.” ~ Anton Chekhov</h1>
      <p className="py-6 text-xl font-semibold">In online buy and sell product main issue is trust.We ensure you we keept your data secure.Our seller are geniuin.And all our activities are trustable</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div> 
        </div>
    );
};

export default HeroSection;