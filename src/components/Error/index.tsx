import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import somethingWrongIcon from "../../assets/icons/png/something-wrong.png";

interface ErrorProps {
  errorMessage: string;
}

// TODO: Support for showing actual error message toggle
function Error({
  errorMessage = "Ooops!! Something went wrong",
}: ErrorProps): JSX.Element {
  return (
    <div className="error-component text-center">
      <img src={somethingWrongIcon} className="image-center" alt="something-wrong" />
      <div className="message mt-2">
        {errorMessage}
        <FontAwesomeIcon icon={faFileCode} />
      </div>
    </div>
  );
}

export default Error;
