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

function iLoveTheBeatles(number){
  var beatlesLove = [];
  do {
    beatlesLove.push('I love the Beatles!');
  }
  while (number<15) {
    number++;
  }
  return beatlesLove;
}