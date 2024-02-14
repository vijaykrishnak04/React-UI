import React, { useState } from 'react';
import CarouselItem from './CarousalItem';
import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStrikethrough } from '@fortawesome/free-solid-svg-icons';
import '../../styles/misc.css';

// Dummy data for the carousel
const items = [
    {
        image: image1,
        title: 'Slide One',
        description: 'Discount on Materials',
    },
    {
        image: image2,
        title: 'Slide Two',
        description: 'Lower Interest Rates',
    },
    {
        image: image3,
        title: 'Slide Three',
        description: 'Interest free payments',
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [touchPosition, setTouchPosition] = useState<number | null>(null); // Track start position of touch

    // Handle the start of a touch
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    // Handle the end of a touch
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 5) {
            goToNext();
        } else if (direction < -5) {
            goToPrev();
        }

        setTouchPosition(null); // Reset touch position
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    // Adjusted to show a loop of items
    const getItemsToDisplay = () => {
        const itemsToDisplay = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % items.length;
            itemsToDisplay.push(items[index]);
        }
        return itemsToDisplay;
    };

    if (!Array.isArray(items) || items.length <= 0) {
        return null;
    }

    return (
        <section className="flex flex-col items-center w-full mt-10 mb-10 justify-center" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <h2 className="text-3xl text-teal-600 mb-2 font-sans text-center">Unlock Premium Features Now</h2>
            <div className="flex justify-center items-center mb-4">
                <span className="inline-block w-16 border-t-2 border-gray-500 mr-2 opacity-20"></span>
                <FontAwesomeIcon icon={faStrikethrough} className='text-gray-500 opacity-25' />
                <span className="inline-block w-16 border-t-2 border-gray-500 ml-2 opacity-20"></span>
            </div>
            <div className="relative flex flex-row items-center justify-center">
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faArrowLeft} className="carousel-arrow absolute left-20 z-10 cursor-pointer select-none h-10 opacity-20" onClick={goToPrev} />
                </div>
                <div style={{ display: 'flex', overflow: 'hidden' }} className='md:mx-28'>
                    {getItemsToDisplay().map((item, index) => (
                        <div key={index} className='overflow-hidden w-full'>
                            <CarouselItem {...item} />
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faArrowRight} className="carousel-arrow absolute right-20 z-10 cursor-pointer select-none h-10 opacity-20" onClick={goToNext} />
                </div>
            </div>
            <div className='text-2xl font-extrabold text-emerald-400'>
                ...
            </div>
            <div className='flex flex-col text-white w-56 transition duration-300'>
                <button className="button-custom transition duration-300">
                    UNLOCK NOW
                </button>
                <button className="button-custom transition duration-300">
                    DETAILS
                </button>
            </div>
        </section>
    );
};

export default Carousel;
