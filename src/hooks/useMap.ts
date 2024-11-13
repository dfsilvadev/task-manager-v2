import { useMemo, useState } from "react";

type Dependencies<K, V> = {
  readonly tasks: V[];
  readonly key: (item: V) => K;
};

const useMap = <K, V>({ tasks, key }: Dependencies<K, V>) => {
  const [map, setMap] = useState<Map<K, V>>(
    new Map(tasks.map((item) => [key(item), item]))
  );

  const actions = useMemo(
    () => ({
      get: (key: K) => map.get(key),
      set: (key: K, value: V) =>
        setMap((prevMap) => {
          const nextMap = new Map(prevMap);
          nextMap.set(key, value);
          return nextMap;
        }),
      remove: (key: K) =>
        setMap((prevMap) => {
          const nextMap = new Map(prevMap);
          nextMap.delete(key);
          return nextMap;
        }),
      clear: () => setMap(new Map()),
    }),
    [map]
  );

  return [map, actions] as const;
};

export default useMap;
