type Graph = {
    [key: string]: string[];
};

function searchMangoSeller(graph: Graph, start: string): boolean {
    let searchQueue: string[] = [...graph[start]];
    let visited: Set<string> = new Set();

    while (searchQueue.length > 0) {
        let person: string = searchQueue.shift()!;

        if (!visited.has(person)) {
            if (personIsSeller(person)) { 
                console.log(`${person} is a mango seller!`);
                return true;
            } else {
                searchQueue.push(...(graph[person] || []));
                visited.add(person);
            }
        }
    }
    return false;
}


function personIsSeller(name: string): boolean {
    return name.endsWith('m');
}

const graph: Graph = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "jonny": []
};

searchMangoSeller(graph, "you");

