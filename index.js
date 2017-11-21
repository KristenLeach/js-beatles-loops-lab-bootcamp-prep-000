function theBeatlesPlay (musicians, instruments){
  var theBeatles = [];
  for (let i=0; i<4; i++) {
   theBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  var i = 0 
  var newFacts = [];
  while (facts.length>i) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(i){
  var i=0;
  var beatlesLove = [];
  do {
    beatlesLove.push('I love the Beatles!'[i]);
  }
  while (i<15) {
    i++;
  }
  return beatlesLove;
}