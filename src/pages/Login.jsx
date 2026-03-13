import React from "react";

function Login() {
  return (
    <div className="h-175 pt-20 pb-28 bg-base-200">
      <div className="p-5 border max-w-5xl mx-auto min-h-135 flex justify-between max-md:flex-col">
        <div className="flex flex-col gap-4 mt-20 basis-3/5 max-md:text-center">
          <div className="text-5xl text-blue-600 font-bold">Facebook</div>
          <h2 className="text-[30px] leading-8 mt-3 w-128.5 max-md:w-auto">
            Fakebook helps you connect and share with the people in your life.
          </h2>
          <div className="badge badge-dash badge-error max-md:mx-auto">
            <svg
              className="size-[1em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></circle>
                <polyline
                  points="7 13 10 16 17 8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                ></polyline>
              </g>
            </svg>
            This is not real Facebook!
          </div>
        </div>

        <div className="flex-1">
          <div className="card bg-base-100 w-full h-87.5 shadow-xl mt-8">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="card-body gap-3 p-4">
               <input type="text" className="input w-full"
               placeholder="Email or Phone number" />
               <input type="password" className="input w-full"/>
               <button className="btn btn-primary text-xl">Login</button>
               <p className="text-center cursor-pointer opacity-70">Forgotten password</p>
               <div className="divider my-0"></div>
               <button className="btn btn-secondary">Create new account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
