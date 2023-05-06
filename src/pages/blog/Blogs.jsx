import React from "react";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

const Blogs = () => {
  const generatePdf = () => {
    // Default export is a4 paper, portrait, using millimeters for units
    let doc = new jsPDF();
    // doc.html(document.querySelector("#pdf"), {
    //   callback: function () {
    //   },
    // });
    doc.text("p", 10, 10);
    doc.save("untitled.pdf");
  };

  return (
    <div>
      <div className="text-center">
        <button
          onClick={generatePdf}
          type="button"
          className="btn btn-primary  "
        >
          Generate PDF
        </button>
      </div>
      <section id="container" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blogs
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We write about react js concept that is mostly uses.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold link-hover tracking-tight text-gray-900 dark:text-white">
                <Link to="#">
                  Tell us the differences between uncontrolled and controlled
                  components.
                </Link>
              </h2>
              <p className=" font-light text-gray-500 dark:text-gray-400">
                Controlled components are those in which the values are
                controlled by the parent component, and the child component only
                updates the value by calling a function passed down from the
                parent component. This means that the state of the controlled
                component is always stored and updated in the parent component,
                not in the component itself. Controlled components have a
                controlled interface, where their state is controlled by the
                parent component, and they always render the same value based on
                the props passed to them.
              </p>
              <br />
              <p>
                On the other hand, uncontrolled components are those that manage
                and update their state internally, without the help of the
                parent component. Uncontrolled components have an uncontrolled
                interface, where their state is managed by the component itself.
                They don't require any state or props to be passed down from the
                parent component and can maintain their own state without any
                intervention from the parent.
              </p>
              <br />
              <p>
                The choice between using controlled or uncontrolled components
                depends on the specific use case and requirements of the
                component. Controlled components are often preferred when the
                parent component needs to have full control over the value of
                the component. This can be useful in cases where the parent
                component needs to perform additional actions when the value
                changes, or when the component's state is needed elsewhere in
                the application.
              </p>{" "}
              <br />
              <p>
                Uncontrolled components are often used when the state of the
                component does not need to be shared with other components in
                the application or when the component needs to manage its own
                state independently. They are also useful when building forms,
                as they allow the user to directly interact with the form and
                submit it without needing to handle the state management in the
                parent component.
              </p>{" "}
              <br />
              <div className="flex flex-col items-center justify-center">
                <p>Here is a example of control component.</p>
                <img
                  className="rounded-lg my-5"
                  src="https://i.ibb.co/VVZzpPh/image.png"
                  alt=""
                />
              </div>
              <br />
              <div className="flex flex-col items-center justify-center">
                <p>Here is a example of uncontrolled component.</p>
                <img
                  className="rounded-lg my-5"
                  src="https://i.ibb.co/sHQ0qQc/image.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                  </div>
                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm">11 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold link-hover tracking-tight text-gray-900 dark:text-white">
                <Link to="#">How to validate React props using PropTypes</Link>
              </h2>
              <p className=" font-light text-gray-500 dark:text-gray-400">
                Props and PropTypes are important mechanisms for passing
                read-only attributes between React components.
              </p>
              <br />
              <p>
                We can use React props, short for properties, to send data from
                one component to another. If a component receives the wrong type
                of props, it can cause bugs and unexpected errors in your app.
              </p>
              <br />
              <p>
                Since JavaScript doesn’t have a built-in type checking solution,
                many developers use extensions like TypeScript and Flow.
                However, React has an internal mechanism for props validation
                called PropTypes. In this article, we’ll learn how to validate
                props with React PropTypes.
              </p>{" "}
              <br />
              <h4>Why should you validate props in React?</h4>
              <br />
              <p>
                When developing a React application, you’ll need to structure
                and define your props to avoid bugs and errors. Just like a
                function might have mandatory arguments, a React component might
                require a prop to be defined, otherwise, it will not render
                properly. Forgetting to pass a required prop into a component
                that needs it could cause your app to behave unexpectedly.
              </p>{" "}
              <br />
              <div className="flex flex-col items-center justify-center">
                <p>Here is a example of control component.</p>
                <img
                  className="rounded-lg my-5"
                  src="https://i.ibb.co/k3dQK2Z/image.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />{" "}
                  </div>
                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm">6 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold link-hover tracking-tight text-gray-900 dark:text-white">
                <Link to="#">
                  Tell us the difference between nodejs and express js.
                </Link>
              </h2>
              <p className=" font-light text-gray-500 dark:text-gray-400">
                Node.js is a runtime environment that allows developers to
                execute JavaScript code on the server side, instead of just in
                the browser. It is built on top of the V8 JavaScript engine used
                in Google Chrome and provides a number of built-in modules for
                networking, file system access, and other common server-side
                tasks. Node.js is often used for creating scalable,
                high-performance web applications, particularly those that
                involve real-time data processing or heavy I/O operations.
              </p>
              <br />
              <p>
                Express.js, on the other hand, is a popular web application
                framework built on top of Node.js. It provides a set of tools
                and conventions for building web applications, such as routing,
                middleware, and template rendering. Express.js is designed to be
                lightweight and flexible, allowing developers to create custom
                APIs and web applications with minimal boilerplate code.
              </p>
              <br />
              <p>
                In other words, Node.js provides the platform for executing
                JavaScript code on the server, while Express.js provides a
                framework for building web applications on top of Node.js.
                Developers often use both together to create efficient and
                scalable web applications.
              </p>{" "}
              <br />
              <h4>Why should you validate props in React?</h4>
              <br />
              <div className="flex flex-col items-center justify-center">
                <p>
                  Here is a example of Node.js to build a basic web server .
                </p>
                <img
                  className="rounded-lg my-5"
                  src="https://i.ibb.co/D78jbYL/image.png"
                  alt=""
                />
              </div>
              <br />
              <div className="flex flex-col items-center justify-center">
                <p>Here is a example of Express.js to build a api .</p>
                <img
                  className="rounded-lg my-5"
                  src="https://i.ibb.co/X3Y2J70/image.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                  </div>
                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm">3 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold link-hover tracking-tight text-gray-900 dark:text-white">
                <Link to="#">
                  What is a custom hook, and why will you create a custom hook?
                </Link>
              </h2>
              <p className=" font-light text-gray-500 dark:text-gray-400">
                Custom React JS hooks offer reusability as when a custom hook is
                created, it can be reused easily, which makes the code cleaner
                and reduces the time to write the code. It also enhances the
                rendering speed of the code as a custom hook does not need to be
                rendered again and again while rendering the whole code
              </p>
              <br />

              <div className="flex flex-col items-center justify-center">
                <p>Here is a example of UseLocalStorage custom hook</p>
                <img
                  className="rounded-lg my-5"
                  src="https://i.ibb.co/Sd8cTPc/image.png"
                  alt=""
                />
              </div>
              <br />
              <div className="flex flex-col items-center justify-center">
                <p>another example of UseFetch custom hook</p>
                <img
                  className="rounded-lg my-5"
                  src="https://i.ibb.co/Kr467cS/image.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />

                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
