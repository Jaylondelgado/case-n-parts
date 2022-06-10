import React, { useState, useEffect } from "react";

function useApiData(url, prop) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getServerData = async () => {
      const apiResponse = await fetch(url);
      const apiData = await apiResponse.json();
      setData(apiData[prop]);
    };

    getServerData();
  }, []);

  return data;
}

export default useApiData;
