import React, { useState } from 'react';
import AWS from 'aws-sdk';
const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));
const App = () => {

const [file, setFile] = useState(null);
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setFile(file);
};

  const uploadFile = async () => {
    const S3_BUCKET = "efrei-microfrontend";
    const REGION = "eu-west-3";

    AWS.config.update({
      accessKeyId: "AKIAYOHRW6AXOB7DYCZC",
      // accessKeyId: process.env.REACT_APP_BUCKET_KEY_ID,
      secretAccessKey: "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",
      // secretAccessKey: process.env.REACT_APP_BUCKET_KEY_SECRET,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      alert("File uploaded successfully.");
    });
  };

return (
  <div className={'app-container'}>
    <React.Suspense fallback={"Loading Header"}>
      <Header/>
    </React.Suspense>
    <main className={'app-main-container'}>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </main>
    <React.Suspense fallback={"Loading Footer"}>
      <Footer />
    </React.Suspense>
  </div>
)
}

export default App;
