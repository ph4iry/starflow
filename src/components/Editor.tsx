function Editor() {
  function updateTemplate(event: any) {
    document.getElementById(`template-${event.target.id}`)!.innerHTML = event.target.value;
  }

  return (
    <div className={`justify-center flex flex-col bg-zinc-100 rounded-lg drop-shadow-xl dark:bg-zinc-800 text-zinc-700 dark:text-zinc-50 flex grow p-20`}>
      <a
        className="inline-block text-2xl rounded bg-rose-600 px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-600 hover:shadow-rose-600/40 focus:bg-rose-600 focus:shadow-rose-600/20 focus:outline-none focus:ring-0 active:bg-rose-700"
        data-te-collapse-init
        data-te-ripple-init
        data-te-ripple-color="light"
        href="#general-info"
        role="button"
        aria-expanded="false"
        aria-controls="general-info">
        General Information
      </a>
      <div id="general-info" className="!visible hidden my-8">
        <h2 className="text-3xl">Student Information</h2>
        <div id="editor:student-info" className="my-10 flex flex-row space-x-10">
          <div className="grow">
            <div className="relative">
              <input
                id="student-name"
                type="text"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-transparent"
                placeholder="John Doe"
                onChange={updateTemplate}
              />
              <label
                htmlFor="student-name"
                className="absolute left-0 -top-3.5 text-grey-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-600 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
            <div className="my-4 flex flex-row">
              <div className="relative grow">
                <input
                  id="college-major"
                  type="text"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-transparent"
                  placeholder="Undecided"
                  onChange={updateTemplate}
                />
                <label
                  htmlFor="college-major"
                  className="absolute left-0 -top-3.5 text-grey-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-600 peer-focus:text-sm"
                >
                  Major
                </label>
              </div>
            </div>
          </div>
          <div className="photo">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-fit">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-rose-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-rose-600 focus-within:ring-offset-2 hover:text-rose-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only template:photo"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl">College Information</h2>
        <div id="editor:college-info" className="my-10 flex flex-row space-x-10">
          <div className="inputs grow">
            <div className="relative">
              <input
                id="college-name"
                type="text"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-transparent"
                onChange={updateTemplate}
                placeholder="John Doe"
              />
              <label
                htmlFor="college-name"
                className="absolute left-0 -top-3.5 text-grey-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-600 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
          </div>
          <div className="photo">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-fit">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-rose-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-rose-600 focus-within:ring-offset-2 hover:text-rose-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      type="file"
                      className="sr-only template:photo"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <a
        className="inline-block mt-4 rounded bg-rose-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-600 hover:shadow-rose-600/40 focus:bg-rose-600 focus:shadow-rose-600/20 focus:outline-none focus:ring-0 active:bg-rose-700"
        data-te-collapse-init
        data-te-ripple-init
        data-te-ripple-color="light"
        href="#other"
        role="button"
        aria-expanded="false"
        aria-controls="other">
        Link with href
      </a>
    </div>
  )
}

export default Editor;