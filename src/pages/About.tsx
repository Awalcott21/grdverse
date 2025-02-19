
import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 container-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-neutral-400">
            Welcome to Gridverse, your digital universe.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container-padding">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-neutral-300 leading-relaxed">
              In a world that's constantly evolving, standing out is no easy feat. That's where Gridverse comes in. Born out of a deep passion for creativity and a desire to help entrepreneurs and small businesses carve out their space in the digital world, Gridverse was founded with one mission in mind: to give your story a place on the grid.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our journey began with a simple idea: Everyone, regardless of size or industry, deserves a website that reflects their unique essence. Whether you're a local barber with a loyal clientele or a rising real estate star, your business has a story that deserves to be told. And that's exactly what we're here to do—to make sure your digital presence aligns with the vision you have for your brand.
            </p>
          </div>

          {/* Built on Passion Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Built on Passion. Fueled by Creativity.
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              At Gridverse, we're not just building websites; we're crafting digital experiences. Every website we create is an opportunity for you to connect with your audience in an authentic way. It's a chance for you to tell your story in an ever-evolving world. We believe that design is more than just aesthetics—it's about communicating your message clearly, engaging your audience, and making your mark.
            </p>
          </div>

          {/* Your Universe Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Your UniVERSE. Your Space.
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We know how important it is to have a space where you can thrive. That's why we treat your website like a universe of possibilities. From the very first idea to the final launch, we're with you every step of the way. We're here to ensure that your story gets heard, your brand gets noticed, and your business grows.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mt-4">
              In this ever-changing digital landscape, we believe in staying ahead of the curve. We leverage the latest technology and AI-driven tools to create websites that are not only stunning but also functional and SEO-optimized. No matter where you're starting from, we're here to give you a platform that elevates your brand and helps you make a lasting impact.
            </p>
          </div>

          {/* Why Gridverse Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Gridverse?
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We don't just create websites—we create experiences. We're a small, passionate team dedicated to helping you succeed. Whether it's a one-page website or a full-scale digital platform, we take pride in delivering top-notch designs that reflect the heart and soul of your brand. This is your grid. We're just here to give you a space to shine.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Elements */}
      <div className="fixed inset-0 pointer-events-none blueprint-grid opacity-5 z-0" />
    </div>
  );
};

export default About;
