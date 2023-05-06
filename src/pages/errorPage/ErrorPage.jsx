import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      {/* <!-- component --> */}

      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <img
          className="w-48 pb-14"
          src="https://i.ibb.co/VDtzrSw/5203299.jpg"
          alt="404 image"
        />
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          {error.status}
        </h1>

        <div className="bg-[#FF6A3D] px-2 mb-7  rounded rotate-12 absolute">
          {error.statusText}
        </div>

        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
        <p className="bg-[#FF6A3D]  p-2 font-semibold text-slate-100 mt-5 rounded  ">
          {" "}
          {error?.data}
        </p>
      </main>
    </div>
  );
}
