import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

export const UploadFiles = () => {

    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    const handleSubmit = (files, allFiles) => {
        const data = new FormData();
        for( let i = 0; i < allFiles.length; i++ ) {
            data.append('file', allFiles[i].file);
        }
        console.error(allFiles[0]);
        axios.post("http://178.62.53.223:4000/upload", data).then(res => {

        }).catch(err => {
            console.warn(err);
        });
    }

    return (
        <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', width: 400, background: 'white' }}>
            <Dropzone
                getUploadParams={getUploadParams}
                onSubmit={handleSubmit}
                maxFiles={2}
                accept=".xkt,.json"
                styles={{
                    dropzone: { overflow: 'hidden', border: 'none', height: '100vh' },
                }}
            />
        </div>
    )
}

export default UploadFiles;