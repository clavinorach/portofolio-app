import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return ( 
    <div className={`relative rounded-full overflow-hidden ${containerStyles}`}>
      <Image 
        src={imgSrc} 
        alt="Developer" 
        layout="fill" 
        objectFit="cover"
      />
    </div>
  );
}

export default DevImg;
