const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value){
  if (value == ""){
    delete records[id][prop];
  }
  if (prop != "tracks" && value != ""){
    records[id][prop] = value;
  }
  if (prop == "tracks" && value != ""){
    !("tracks" in records[id]) && (records[id].tracks = []); // the && executes the right part of the code if first statement is true. Really nice way of doing a ternary-like with actions
    records[id].tracks.push(value)
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))