import React, { useEffect, useState } from "react";

import { fakeApi } from "./src/utils/fakeApi";
import { IRoute } from "./src/types/IRoute";

import Loading from "./src/screens/Loading";
import Flight from "./src/screens/Flight";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [data, setData] = useState<IRoute[]>([]);

  useEffect(() => {
    fakeApi
      .fetchRoute()
      .then((resolve) => {
        setData([resolve]);
      })
      .then(() => setDataLoaded(true));
  }, []);

  if (!dataLoaded) {
    return <Loading />;
  }
  return <Flight data={data} />;
}
