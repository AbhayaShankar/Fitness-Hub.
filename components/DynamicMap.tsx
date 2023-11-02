import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapComponent"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <div>Loading...</div>,
});

export default function Map() {
  return <DynamicMap />;
}
