import React from 'react';

interface CarouselItemProps {
    image: string;
    title: string;
    description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, title, description }) => {
    return (
        <div className="carousel-item rounded-3xl border-2 border-teal-500 mx-2 overflow-hidden">
            <img src={image} alt={title} className="block w-full rounded-t-3xl" />
            <div className="text-center p-3">
                <h2 className="text-2xl font-sans" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to bottom, #29a3a3, #196666)' }}>{description}</h2>
            </div>
        </div>
    );
};

export default CarouselItem;
