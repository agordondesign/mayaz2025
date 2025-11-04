import { LineWobble } from "ldrs/react";
import "ldrs/react/LineWobble.css";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LineWobble
        size="80"
        stroke="5"
        bgOpacity="0.1"
        speed="1.75"
        color="#353535"
      />
    </div>
  );
}
