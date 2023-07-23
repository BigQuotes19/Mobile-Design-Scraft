import { isMobile } from "react-device-detect";

export default function Home() {
  if (isMobile) {
    return <div>This is mobile</div>;
  }

  return <div>This is not mobile</div>;
}
