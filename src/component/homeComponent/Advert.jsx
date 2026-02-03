import { useEffect, useState } from "react";

function Advert() {

    const images = [
        "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZXJ0fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1616418625298-baef98bc34f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWR2ZXJ0fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1578305849970-090d5c4052f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFkdmVydHxlbnwwfHwwfHx8MA%3D%3D"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <div
                className="slider-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((img, i) => (
                    <img key={i} src={img} alt="Advert" />
                ))}
            </div>
        </div>
    );
}

export default Advert;
