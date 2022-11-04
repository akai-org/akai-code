import { useEffect, useState } from "react";

export function useIntervalUpdate(interval = 1000) {
  const [, setState] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState({});
    }, interval);
    return () => clearInterval(intervalId);
  });
}
