import React, { useRef } from 'react';
import S3 from 'react-aws-s3';
import { Form, Button } from 'react-bootstrap';

export default function Upload(props) {
  const fileInput = useRef();
  const uploadImage = () => {
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_ACCESS_KEY 
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName)
    .then((data) => {
      console.log(data);
      props.setImageURL(data.location)
    });
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Update profile picture</Form.Label>
        <Form.Control type="file" size="sm" ref={fileInput} />
      </Form.Group>
      <div className='text-center'>
        <Button variant='outline-dark' size='sm' onClick={uploadImage}>Upload</Button>
      </div>
    </>
  )
}
