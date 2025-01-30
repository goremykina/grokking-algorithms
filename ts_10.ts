let statesNeeded: Set<string> = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
let finalStations: Set<string> = new Set();

type Stations = {
  [key: string]: Set<string>;
};

const stations: Stations = {
  "kone": new Set(["id", "nv", "ut"]),
  "ktwo": new Set(["wa", "id", "mt"]),
  "kthree": new Set(["or", "nv", "ca"]),
  "kfour": new Set(["nv", "ut"]),
  "kfive": new Set(["ca", "az"]),
};

function getNeededStates(stations: Stations): Set<string> {
  while (statesNeeded.size) {
    let bestStation: string | null = null;
    let statesCovered: Set<string> = new Set();

    for (let station in stations) {
      const states = stations[station];
      const covered = new Set([...statesNeeded].filter(x => states.has(x)));

      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    if (bestStation) {
      statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
      finalStations.add(bestStation);
    }
  }

  return finalStations;
}

console.log(getNeededStates(stations));

