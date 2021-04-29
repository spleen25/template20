const storage = localStorage;

function id(key) {
  return `opt-${key}`;
}

export function set(key, value) {
  storage.setItem(id(key), value);
}

export function get(key, parse = (v) => v) {
  return parse(storage.getItem(id(key)));
}
