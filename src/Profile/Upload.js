import React, { useRef } from 'react';
import S3 from 'react-aws-s3';
import { Form, Button, InputGroup } from 'react-bootstrap';

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
      props.setImageURL(data.location)
      updateBtn()
    });
  };
  const updateBtn = () => {
    let btnEl = document.querySelector('#upload-btn')
    btnEl.style.backgroundColor = 'green'
    btnEl.style.color = 'white'
    btnEl.innerText = 'Done!'
  }

  return (
    <>
      <Form.Label>Update profile picture</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control type="file" size="sm" ref={fileInput} />
        <Button id='upload-btn' size='sm' variant="outline-secondary" onClick={uploadImage}>Upload</Button>
      </InputGroup>
    </>
  )
}
