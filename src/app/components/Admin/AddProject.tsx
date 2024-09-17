import React, { useState } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { WithContext as ReactTags } from 'react-tag-input';
import Image from 'next/image';

type Props = {
  handleWarning: (message: string) => void;
  stackList: string[];
};

export type Tag = {
  id: string;
  text: string;
};

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function AddProject({ handleWarning, stackList }: Props) {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [done, setDone] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [tags, setTags] = useState<Tag[] | null | undefined | undefined[]>([]);
  const suggestions = stackList.map((tag) => {
    return {
      id: tag,
      text: tag,
    };
  });

  const handleDelete = (i: any) => setTags(tags.filter((_, index) => index !== i));
  const handleAddition = (tag: Tag) => setTags((prev) => [...prev, tag]);
  const handleDrag = (tag: Tag, currPos: any, newPos: any) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleUpload = async (selectedFile: File) => {
    setUploading(true);
    const storage = getStorage();
    const storageRef = ref(storage, slug + '/' + selectedFile?.name);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        handleWarning('Uploading... ' + progress.toFixed(2) + '%');
        switch (snapshot.state) {
          case 'paused':
            handleWarning('Upload is paused');
            break;
        }
      },
      (error) => {
        handleWarning(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          handleWarning('Upload complete!');
          setImageUrl(downloadURL);
          setUploading(false);
          setDone(true);
        });
      },
    );
  };

  const invalidFields = imageUrl === '';

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      slug: slug,
      projectname: event.target.projectname.value,
      description: event.target.description.value,
      githuburl: event.target.githuburl.value,
      deployurl: event.target.deployurl.value,
      stacks: tags.map((tag) => tag.id),
      screenshot: imageUrl,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/form';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    await fetch(endpoint, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.message !== 'SUCCESS')
          handleWarning(
            data.message ||
              'Something wrong saving your project. Are you connected?',
          );
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        setSelectedImage('');
        setImageUrl('');
        return handleWarning(`Project ${slug} saved in your database`);
      });
  };

  return (
    <section className='flex flex-col w-full items-center justify-center'>
      <h1 className='text-xl uppercase text-yellow-950 font-extrabold'>
        ADD NEW PROJECT
      </h1>
      <div className='mt-6 w-full'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 items-center'
        >
          {/* Project info div */}
          <div className='flex flex-col md:flex-row gap-x-10'>
            <div className='flex flex-col gap-4'>
              <label htmlFor='projectname' className='flex flex-col text-xs'>
                Project title:
                <input
                  id='projectname'
                  required
                  type='text'
                  placeholder='Project name'
                  onChange={(event) =>
                    setSlug(event.target.value.toLowerCase().replace(/ /g, '_'))
                  }
                  className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
                />
              </label>
              <label htmlFor='projectname' className='flex flex-col text-xs'>
                This is the project slug
                <input
                  className='h-6 p-2 border-[1px] border-sky-700 rounded disabled:text-gray-500'
                  disabled={true}
                  type='text'
                  value={slug}
                />
              </label>
              <label htmlFor='description' className='flex flex-col text-xs'>
                Description:
                <textarea
                  id='description'
                  placeholder='Type a description of your project'
                  className='h-40 p-2 text-sm border-[1px] border-sky-700 rounded'
                />
              </label>

              <div className='flex flex-col text-xs mb-4'>
                Stacks:
                <ReactTags
                  tags={tags}
                  suggestions={suggestions}
                  delimiters={delimiters}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  handleDrag={handleDrag}
                  minQueryLength={1}
                  inputFieldPosition='top'
                  autocomplete
                />
              </div>
            </div>

            {/* Screenshot upload div */}
            <div className='flex flex-col gap-4'>
              <label htmlFor='githuburl' className='flex flex-col text-xs'>
                Github URL (optional)
                <input
                  id='githuburl'
                  type='text'
                  placeholder='http://github.com...'
                  className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
                />
              </label>
              <label htmlFor='deployurl' className='flex flex-col text-xs'>
                Deploy URL (optional)
                <input
                  id='deployurl'
                  type='text'
                  placeholder='http://mywebsite.com'
                  className='w-96 h-8 p-2 text-sm border-[1px] border-sky-700 rounded'
                />
              </label>
              <label className='flex flex-col text-xs'>
                Upload screenshot:
                <input
                  type='file'
                  hidden
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target.files[0];
                      setSelectedImage(URL.createObjectURL(file));
                      handleUpload(file);
                    }
                  }}
                />
                <div className='aspect-video rounded flex w-96 items-center justify-center border-2 border-dashed cursor-pointer'>
                  {selectedImage ? (
                    <Image
                      src={selectedImage}
                      alt='Screenshot of your project'
                      width={400}
                      height={400}
                    />
                  ) : (
                    <span>Click to select</span>
                  )}
                </div>
              </label>
            </div>
          </div>
          <button
            type='submit'
            disabled={invalidFields}
            className='bg-blue-600 p-2 text-center rounded text-white w-[300px] disabled:bg-blue-300 disabled:text-gray-100 disabled:cursor-not-allowed'
          >
            Save project in database
          </button>
        </form>
      </div>
    </section>
  );
}
