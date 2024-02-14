import realEstate from '../../assets/real-estate-house.png';

const LogoHeader = () => {
    return (
        <>
            <div className='sticky top-0 w-full z-50 bg-gray-200 flex items-center justify-around'>
                <div className="flex-shrink-0 flex items-center bg-gray-200">
                    <img src={realEstate} alt="Real Estate Logo" className="h-14 w-auto" />
                </div>
                <div className=''>
                    <span>
                        XYZ SYSTEMS LLP.
                    </span>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default LogoHeader
