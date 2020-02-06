// JavaScript Document

//add your object here 
const jess = {
  name: ['Jessica','Gilfillan'],
  age:34,
  interests: ['coffee', 'code', 'cats'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1]  + ' is ' + this.age + ' years old. They like ' + this.interests[0] + ', ' + this.interests[1] +  ' and ' + this.interests[2] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + this.age + '.');
  }
}

const chris = {
    fName: 'Chris',
    lName: 'Pander',
    program: 'COPR',
    homeCity: 'Barrie',
    interest: ['hockey', 'coding', 'gaming', 'football'],
    hi: function(){
        alert('Hi, I am ' + chris.fName + ' ' + chris.lName);
    },
    bio: function(){
        alert('My name is ' + chris.fName + ' ' + chris.lName + '. I\'m enrolled in the ' + chris.program + ' program. I live in ' + chris.homeCity + ' where I enjoy ' + chris.interest[0] + ', ' + chris.interest[1] + ', ' + chris.interest[2] + ', and ' + chris.interest[3] + '.')
    }
}
let intro;
intro={
    name:{
        first:'Vidhi',
        last:'Sodvadiya'
    },
    program:'Computer Programmer',
    home:'111,Collge Crescent',
    interest: ['Cooking','Dancing','Netflix'],
    petPeeve:'Disturbing me while I am asleep'
    greeting: function(){
 
    alert('Hi I am '+ intro.name.first + ' ' + intro.name.last);

},
    bio: function(){
        alert(intro.name.first + ' ' + intro.name.last +'is studing '+intro.program+ 'and I live in '+intro.interest[0] + ',  '+intro.interest[1] +'and '+intro.interest[2]);
    }
    
}
delete intro.name.last;

let anmol = {
  firstName: 'ANMOL',
  lastName:  'SHARMA',
  age: 19,
  program: 'Computer Programming',
  interests: ['Songs','Basketball'],
  Intro: function(){
    alert('Hi, I am'+anmol.firstName+" "+ anmol.lastName);
  },
  Info: function(){
    alert("Here is my info"+anmol.firstName+" "+anmol.lastName+" "+anmol.age+" "+anmol.program+" "+anmol.interests[0]+" "+anmol.interests[1]);
  }
};

//add event listener function or event handler property here 

let button = document.getElementById('jess'); 
let chrisButton = document.getElementById('chris');
let anmolButton = document.getElementById('anmol');
let vidhiButton=document.getElementById('vidhi');
//button.addEventListener('click', jess.greeting); 

button.addEventListener('click', function(){
  jess.bio(); 
});
button.addEventListener('click', function(){
  anmol.bio(); 
});

chrisButton.addEventListener('click', function(){
  chris.bio();
});
vidhiButton.addEventListener('click', function(){
  vidhi.bio(); 
});
