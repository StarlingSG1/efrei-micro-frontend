import React, { useEffect, useState } from 'react';
import LocalButton from './Button';
import { Title } from './components/Title';
import AWS from 'aws-sdk';

const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));

const BUCKET_NAME = "efrei-microfrontend";


const s3 = new AWS.S3({
  accessKeyId: "AKIAYOHRW6AXOB7DYCZC",
  secretAccessKey: "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",
  region: "eu-west-3",
});

const App = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const params = {
          Bucket: BUCKET_NAME,
          Prefix: '', // Optionally, you can specify a folder within the bucket
        };

        const data = await s3.listObjectsV2(params).promise();
        const imageKeys = data.Contents.map(item => item.Key);
        const imageUrls = imageKeys.map(key => `https://${BUCKET_NAME}.s3.amazonaws.com/${key}`);

        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images from S3:', error);
      }
    };

    fetchImages();
  }, []);

  return (


    <div className={'app-container'}>
      <React.Suspense fallback={'Loading Header'}>
        <Header />
      </React.Suspense>
      <main className={'app-main-container'}>
        <Title>Voici le remote</Title>
        <div className="image-gallery">
          {images.map((url, index) => (
            <img key={index} src={url} alt={`S3 Image ${index}`} />
          ))}
        </div>
      </main>

      <React.Suspense fallback={'Loading Footer'}>
        <Footer />
      </React.Suspense>
    </div>
  )
}

export default App;
