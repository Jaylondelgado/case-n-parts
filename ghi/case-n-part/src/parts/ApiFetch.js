import React, { useState, useEffect } from "react";

function useApiData({ url, prop, options, withCredentials, ...otherOptions }) {
  const [data, setData] = useState(
    "defaultState" in otherOptions ? otherOptions.defaultState : []
  );

  useEffect(() => {
    const getServerData = async () => {
      const apiResponse = await fetch(
        url,
        withCredentials
          ? {
              ...(options ?? {}),
              credentials: "include",
            }
          : options
      );

      const apiData = await apiResponse.json();
      const stateData = prop ? apiData[prop] : apiData;
      setData(stateData);
    };

    getServerData();
  }, []);

  return [data, setData];
}

export default useApiData;
