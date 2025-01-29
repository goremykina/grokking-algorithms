interface Cache {
  [key: string]: string;
}

const cache: Cache = {};
const url: string = "facebook.com";

function getPage(url: string): Cache {
  if (Object.values(cache).length === 0) {
    cache[url] = url;
  }

  return cache;
}

console.log(getPage(url));
