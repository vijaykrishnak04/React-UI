import Carousel from '../components/Carousal/Carousal'
import Header from '../components/Header/Header'
import LogoHeader from '../components/Header/LogoHeader'
import NewArrival from '../components/sections/NewArrival'

const HomePage = () => {
    return (
        <>
            <LogoHeader />
            <Header />
            <section className='flex lg:flex-row flex-col lg:ml-28 lg:mr-16'>
                <NewArrival />
                <Carousel />
            </section>
        </>
    )
}

export default HomePage
