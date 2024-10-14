"use client"; 
import ParticleBackground from './_heroSection/_particle/particle';
import HeroSection from './_heroSection/_leftSide/contents';
import './globals.css';

export default function Home() {


  return (
    <>
      <div className='heroSection flex flex-col items-center justify-center'>
        <HeroSection />
      </div>
      <ParticleBackground />
    </>
  );
}
