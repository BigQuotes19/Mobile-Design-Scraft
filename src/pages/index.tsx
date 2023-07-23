import DrillPanel from "../components/layouts/DrillPanel";
import ProgressBar from "../components/utils/ProgressBar";

export default function Home() {
  return (
    <div>
      <ProgressBar value="35" />
      <DrillPanel />
    </div>
  );
}
