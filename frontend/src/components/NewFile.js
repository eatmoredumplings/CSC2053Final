import React, { useState, useContext } from 'react';
import FileSystem from 'react';
import { useMutation, useQueryClient } from "react-query";
import newFile from 'react';
import uploadedFiles from 'react';
import fileLimit from 'react';
import MAX_COUNT from 'react';
import setFileLimit from 'react';
import createNewFile from 'react';
import handleChange from 'react';
import handleFileChange from 'react';
import setUploadedFiles from 'react';
import Axios from 'axios';

const NewFile = () => {

  const queryClient = useQueryClient();

  const mutation = useMutation(() => {
    return Axios.create({ baseURL: "/api", withCredentials: true }).post("/file", newFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(["files"])
    }
  });

  const [fileInputs, setFileInputs] = useState({
    title: "",
    description: "",
    file: null
  });

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


  const docs = [
    { uri: 'https://www.africau.edu/images/default/sample.pdf' }
  ];

  return (
      <form className="flex flex-col space-y-6 border-black border-solid border-1"
      onSubmit={createNewFile}>
            <div>
              <h2>
                File Title*
              </h2>
              <input
                id="title"
                name="title"
                required
                maxLength={128}
                type="text"
                placeholder="New Voucher #1"
                className="bg-white outline-none border border-black rounded-3xl px-6 py-2 w-full"
                onChange={handleChange}
            />
            </div>

            <div>
              <h2>
                Description
              </h2>
              <textarea
                id="description"
                name="description"
                placeholder="Voucher Description (optional)"
                className="bg-white outline-none border border-black rounded-3xl px-6 py-4 min-h-[5em] w-full"
                onChange={handleChange}
              />
            </div>


            <div>
              <h2>
                Upload file*
              </h2>
              <input type="file" accept="application/pdf, application/msword, text/plain" required
              className="file-input file-input-bordered w-full max-w-xl"
              name="file" onChange={handleFileChange} />
              <p className='text-sm'> (Please upload the file in PDF, doc or txt format) </p>
            </div>

            <div className="inline-block self-end font-bold mt-10">
              <button
              type="submit"
              className="btn btn-md bg-black text-white hover:bg-white hover:text-black rounded-3xl px-8 uppecase text-sm"
              >
              Create a new file
              </button>
            </div>

          </form>
      )
};

export default NewFile;