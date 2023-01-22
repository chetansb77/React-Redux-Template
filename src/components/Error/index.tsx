import React from "react";
import somethingWrongIcon from "../../assets/icons/png/something-wrong.png";

interface ErrorProps {
  errorMessage: string;
}

function Error({
  errorMessage = "Ooops!! Something went wrong :(",
}: ErrorProps): JSX.Element {
  return (
    <div className="error-component text-center">
      <img src={somethingWrongIcon} className="image-center" alt="something-wrong" />
      <div className="message mt-2">{errorMessage}</div>
    </div>
  );
}

export default Error;
