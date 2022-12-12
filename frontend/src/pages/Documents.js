import { useState } from 'react';
import FileSystem from 'react';
import React from 'react';
import { useQuery } from "react-query";
import Axios from 'axios';
import NewFile from '../components/NewFile';

import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

const MAX_COUNT = 10;

function UploadFiles() {
  
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadedFiles = files => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    FileSystem.some((file) => {
      if (uploaded.findIndex((f) => f.name === fileLimit.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert ('You have reached the limit of 10 files');
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    })
    if (!limitExceeded) setUploadedFiles(uploaded)

  }

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadedFiles(chosenFiles);
  }

  return (
    <div className="Document">

      <input id='fileUpload' type='file' multiple
        accept='application/pdf'
        onChange={handleFileEvent}
        disabled={fileLimit} />

      <label htmlFor='fileUpload'>
        <div>Upload Files</div>
      </label>
      

      <div className="uploaded-files-list">
        {uploadedFiles.map(file => (
          <div >
            {file.name} 
            <DocViewer pluginRenderers={DocViewerRenderers} uploaded={uploadedFiles} />;
          </div>
        ))}
      </div>
    </div>
  )
}

const Files = () => {
  const Files = () => {
    const { data, status } = useQuery(['files'], async () => {
      const res = await Axios.create({ baseURL: "/api", withCredentials: true }).get("/files")
      return res.data;
    })
  
    return (
      <div className="ml-4 mt-4 lg:ml-60">
        <div className='text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl mb-4'>
          Files
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>File</th>
                <th>Description</th>
                <th>Created on</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {data?.map((document) => (
                  <NewFile key={document.id} id={document.id} title={document.title} description={document.description}
                    file={document.file} createDate={document.createDate} />
                ))}
  
                <tr>
                  <th></th>
                  <th>
                  <UploadFiles />
                  </th>
                </tr>
  
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>File</th>
                <th>Description</th>
                <th>Created on</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
}

export default UploadFiles;