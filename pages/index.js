import React, { useCallback } from "react";
import dynamic from "next/dynamic";

const WaykeProvider = dynamic(
  () => import("@wayke-se/components-react").then((mod) => mod.WaykeProvider),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);

const WaykeSearch = dynamic(
  () => import("@wayke-se/components-react").then((mod) => mod.WaykeSearch),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);

const ProviderSettings = {
  url: "https://test-ext-api.wayketech.se/vehicles",
  useQueryParamsFromUrl: true,
};

function Index() {
  const onClickSearchItem = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <>
      <p>hello</p>
      <WaykeProvider {...ProviderSettings}>
        <WaykeSearch onClickSearchItem={onClickSearchItem} />
      </WaykeProvider>
    </>
  );
}

export default Index;
