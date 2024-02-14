import { Link } from 'react-router-dom';
import communityMembershipImage from '../../assets/membership.jpg'; // Make sure to add the correct path to your image

const NewArrival = () => {
    return (
        <section className="items-center p-6 flex flex-col">
            <div className='font-semibold text-start w-full'>
                <h2 className="text-4xl mb-4 font-medium">New Arrival</h2>
                <span className='text-xs'><span className="underline">JOIN</span> TODAY</span>
            </div>
            <div>
                <img src={communityMembershipImage} alt="Community Membership" className="h-72 mx-auto mb-4" />
                <Link to={'/membership'}>
                    <button className="bg-gray-200 hover:bg-gray-300 text-cyan-600 font-bold py-1 px-4 w-56 shadow-2xl rounded-3xl border border-gray-600 transition duration-300">
                        JOIN NOW
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NewArrival;
