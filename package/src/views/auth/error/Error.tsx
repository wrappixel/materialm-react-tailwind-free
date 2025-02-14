
import { Link } from "react-router";
import ErrorImg from "/src/assets/images/backgrounds/errorimg.svg";
import { Button } from "flowbite-react";
const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-white dark:bg-darkgray">
        <div className="text-center">
          <img src={ErrorImg} alt="error" className="mb-4" />
          <h1 className="text-ld text-4xl mb-6">Opps!!!</h1>
          <h6 className="text-xl text-ld">
            This page you are looking for could not be found.
          </h6>
          <Button
            color={"primary"}
            as={Link}
            to="/"
            className="w-fit mt-6 mx-auto"
          >
            Go Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
