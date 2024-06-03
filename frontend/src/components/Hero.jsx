import hero_img from '../assets/Hero_img.png'

function Hero(){
    return(
        <section className='flex flex-col items-center'>
            <h1 className='font-cursive m-4'>The Shiba Foundation</h1>
            <img src={hero_img} className=''/>
        </section>
    )
}

export default Hero