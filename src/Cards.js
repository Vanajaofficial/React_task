import React from 'react';
import './App.css';

function Cards() {
    const cardDataArray = [
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            heading: 'Earning',
            price: '$198K',
            offer: '12.8%',
            emi: 'this month',
        
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            heading: 'Orders',
            price: '$198K',
            offer: '9.8%',
            emi: 'this month',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            heading: 'Balance',
            price: '$198K',
            offer: '10.8%',
            emi: 'this month',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            heading: 'Total Sale',
            price: '$198K',
            offer: '14.8%',
            emi: 'this month',
        },
    ];

    return (
        <div className="cards-container">
            {cardDataArray.map((cardData, index) => (
                <div key={index} className="card">
                    <div className="col values">
                        <div>
                            <img src={cardData.image} alt={`Card Image ${index}`} width={120} />
                        </div>
                        <div className='value-content'>
                            <p>{cardData.heading}</p>
                            <h4>{cardData.price}</h4>
                            <span className='span-color'>{cardData.offer} </span><span>{cardData.emi} </span>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default Cards;
