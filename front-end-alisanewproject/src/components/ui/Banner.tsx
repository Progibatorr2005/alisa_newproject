import Image from 'next/image';
import flowerImage from '/path/to/image.png';

const MyComponent = () => {
    return (
        <div className="banner">
            <div className="banner-image-container">
                <Image src={flowerImage} alt="Flowers" className="banner-image" />
            </div>
            <div className="banner-text">
                <h1>АЛИСА</h1>
            </div>
        </div>
    );
}