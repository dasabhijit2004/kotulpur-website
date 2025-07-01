"use client";
import React, { useEffect, useState } from "react";

const cards = [
    {
        img: "/banner1.png",
        heading: "Historical Significance",
        text: `Kotulpur, located in the Bankura district of West Bengal, has a rich historical legacy dating back to the ancient Mallabhum kingdom. While it may not be widely documented in major historical texts, it has long been a part of Bishnupur's cultural sphere, known for terracotta temples and royal patronage. Local legends and old temple ruins still echo the essence of its glorious past.`,
    },
    {
        img: "/banner2.png",
        heading: "Cultural Identity",
        text: "The culture of Kotulpur is deeply rooted in Bengali rural traditions, with festivals like Durga Puja, Rath Yatra, and Makar Sankranti celebrated with enthusiasm. Folk arts such as Baul songs, Jhumur dance, and traditional Patachitra paintings play an important role in expressing the community's soul. Local fairs like the Kotulpur Mela serve as vibrant gatherings of music, crafts, and food.",
    },
    {
        img: "/banner3.png",
        heading: "Geographical & Natural Beauty",
        text: "Surrounded by scenic fields, green paddy lands, and small rivers like the Dwarakeswar, Kotulpur is a serene location offering natural charm. Its moderate climate and fertile soil make it ideal for agriculture. The region experiences lush greenery during monsoon, making it picturesque and refreshing for visitors and locals alike.",
    },
    {
        img: "/banner4.png",
        heading: "Economy and Lifestyle",
        text: "Kotulpur’s economy is primarily agrarian, with rice cultivation, vegetable farming, and local handicrafts being key occupations. The town also hosts weekly markets (haats) which are central to rural commerce. The lifestyle here is peaceful and traditional, with a growing emphasis on education and modern amenities in recent years.",
    },
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState("slide-in-right");

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation("slide-out-left");
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
                setAnimation("slide-in-right");
            }, 600); // match animation duration
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-section w-full min-h-screen bg-gray-100 text-black flex items-center justify-center p-10">
            <div className="flex flex-col items-center justify-center h-full py-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">About Kotulpur</h1>

                <div
                    className={`w-full max-w-8xl flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 ${animation}`}
                    key={currentIndex}
                >
                    <img
                        src={cards[currentIndex].img}
                        alt="Kotulpur"
                        className="w-[300px] md:w-[400px] aspect-[5/3] h-auto rounded-lg shadow-lg mb-6 bg-cover bg-center"
                    />
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center md:text-left">
                            {cards[currentIndex].heading}
                        </h3>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl text-center md:text-left">
                            {cards[currentIndex].text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
