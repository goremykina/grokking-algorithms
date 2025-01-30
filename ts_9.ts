type Costs = {
  [node: string]: number;
};

const processed = new Set<string>();

const costs : Сosts = {
"a" : 6,
"b" : 2,
"fin" : Infinity
};

function findLowerCostNode (costs : Сosts, processed: Set<string>): string | null {
let lowerCostNode : string | null = null;
let lowerCost: number = Infinity;
for(let node in costs){
  let cost = costs[node];
  if(cost < lowerCost && !processed.has(node)){
    lowerCost = cost;
    lowerCostNode = node;
  }
}
return lowerCostNode;
}

console.log(findLowerCostNode(costs, processed))
