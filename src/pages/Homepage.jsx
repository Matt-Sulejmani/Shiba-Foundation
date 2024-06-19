import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import InfoSection from '../components/InfoSection.jsx'


import missionCardImg from '../assets/goal_img.png'
import teamCardImg from '../assets/team_img.png'
import identityCardImg from '../assets/identity_img.png'

const missionCardText = "At the Shiba Foundation, we aim to achieve long-term sustainable economic development in the PNW region. Through the use of hands-on community engagement, we seek to provide measurable, replicable and easily adoptable approaches to current problems experienced by members of the community. By focusing on the development of simple tools to support personal growth, we look to the emerging social norms that prioritize well-being and personal growth over excessive work and burnout. "
const teamCardText = "Our team consists a wide range of learners from around the world who are working to develop and apply their knowledge, perspective and skills through hands-on involvement in entrepreneurship. Our team members exhibit high levels of intrinsic motivation which drives their commitment to engage in activities that positively benefit society. Through their ongoing development with the Foundation, they will be able to apply their new knowledge and skill and create a meaningful impacts within their respective fields."
const identityCardText = "Shiba Foundation was founded in 2023 for the purpose of providing support and guidance to those who are looking to make changes and find a more sustainable balance between work and life. There is significant evidence to suggest that working fewer hours has a positive impact on society as a result of changes in prioritization of time, resulting in a perceived improvement in well-being."

function Homepage(){
    return (
        <>
        <Nav/>
        <Hero/>
        <div className='m-8 text-pretty '>
            <span>We aim to achieve sustainable development of our community by 
                helping individuals find their purpose, hone their skills and promoting personal growth</span>
        </div>

        <InfoSection 
            name="Mission" 
            styles="bg-primary" 
            text={missionCardText}
            image={missionCardImg}/>

        <InfoSection
            name="Team"
            styles="bg-slate-800"
            text={teamCardText}
            image={teamCardImg}/>

        <InfoSection
            name="Identity"
            styles="bg-red-400"
            text={identityCardText}
            image={identityCardImg}/>
        </>
    )
}

export default Homepage