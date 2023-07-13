// Setup
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

  //hasOwnPr
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value == ""){
        delete records[id][prop];
    }
    if ((prop == "tracks") && (value != "")){
        if (records[id].hasOwnProperty("tracks") == false){
            records[id]["tracks"] = [];
        }
        records[id]["tracks"].push(value);
        //console.log(records[id]);
    }
    if ((records[id].hasOwnProperty(prop) == false) && (value != "") && (prop != "tracks")){
        records[id][prop] = value;
    }
    
    return records;
  }
  
updateRecords(recordCollection, 1245, 'tracks', 'nevergonna give you up');