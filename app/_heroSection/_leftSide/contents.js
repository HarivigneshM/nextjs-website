import './styles.css';
import GenerateSite from './button';
export default function HeroSection(){
    return(
        <>
            <div className='text-3xl flex flex-col items-center justify-center font-bold text-center mt-10 typewriter'>
                <h1 className='text-2xl font-bold'>Harness the Power of AI to Build Your Website Effortlessly</h1>
                <h3 className='text-base'>Say goodbye to long waiting times and let advanced AI technology streamline the creation of your website. </h3>
                <h3 className='text-base'>Experience a faster, more efficient process with intelligent automation, designed to bring your vision to life.</h3>
                <GenerateSite />
            </div>
        </>
    )
}