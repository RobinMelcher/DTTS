var current = {};

function start_button() {
    current = game_array.filter(a => a.id == 1)[0];
    console.log(current)
    $("#text").text(current.text);
    $("#start_button").hide();
    $("#btn1").text(current.btn1);
    $("#btn2").text(current.btn2);
}

function update(id) {
    current = game_array.filter(a => a.id == id)[0];
    console.log(current)
    $("#text").text(current.text);
    $("#btn1").text(current.btn1);
    $("#btn2").text(current.btn2);
}

var game_array = [
    { id: 1,
    text: "Mother: Go to the store.",
     btn1: "YES MUM",
     btn1_target: 2,
     btn2: "BUGGER OFF",
     btn2_target: 3,
     game_over: false
    },
    
    { id: 2,
    text: "A creepy stranger aproaches you: Hey kid! You want some candy?",
     btn1: "Sure mister!",
     btn1_target: 4,
     btn2: "Ignore",
     btn2_target: 5,
     game_over: false
    },
    
    { id: 3,
    text: "After getting your ass beat, your mother tells you to go to the store.",
     btn1: "YES MUM",
     btn1_target: 2,
     btn2: "BUGGER OFF",
     btn2_target: 3,
     game_over: false
    },
     { id: 4,
    text: "The man takes you back to his van, rapes you, and murders you.",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    }, 
    { id: 5,
    text: "A nueortic stranger aproaches you: Hey pal, wanna smoke some drugs?",
     btn1: "YEAH MAN!",
     btn1_target: 6,
     btn2: "IGNORE",
     btn2_target: 7,
     game_over: false
    }, 
    { id: 6,
    text: "You OD on drugs.",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    },
     { id: 7,
    text: "A sexy stranger aproaches you: Hey cutie, looking for a good time?",
     btn1: "GODDAMN RIGHT",
     btn1_target: 8,
     btn2: "IGNORE",
     btn2_target: 9,
     game_over: false
    },
     { id: 8,
    text: "You wake up in a sketchy motel bathtub full of ice and your kidneys are missing.",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    },
     { id: 9,
    text: "A homeless stranger aproaches you and shouts: YOU'RE LUCKY YOU HAVE A FUCKIN' HAMMOCK!",
     btn1: "THANKS?",
     btn1_target: 10,
     btn2: "IGNORE",
     btn2_target: 11,
     game_over: false
    }, 
    { id: 10,
    text: "The homless stranger tells you not to jerk off and if he catches you jerking off he'll kick your ass.",
     btn1: "CONTINUE",
     btn1_target: 12,
     btn2: "",
     btn2_target: 1,
     game_over: false
    },
     { id: 11,
    text: "The homless man keeps yelling at you: YOU'RE LUCKY YOU HAVE A FUCKIN' HAMMOCK!",
     btn1: "THANKS?",
     btn1_target: 10,
     btn2: "IGNORE",
     btn2_target: 11,
     game_over: false
    },
     { id: 12,
    text: "An especially suspiscious stranger approaches you: Hey bro, you got any mary jane? I'm trying to blaze it 4:20",
     btn1: "I GOT YOU MAN",
     btn1_target: 13,
     btn2: "IGNORE",
     btn2_target: 14,
     game_over: false
    },
     { id: 13,
    text: "He turns out to be a NARC and you go to prison where you are raped and die",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    }, 
    { id: 14,
    text: "A cheerful stranger aproaches you: Have you heard the good news of our Lord and Savior Jesus Christ?",
     btn1: "NO I HAVEN'T",
     btn1_target: 15,
     btn2: "IGNORE",
     btn2_target: 16,
     game_over: false
    },
     { id: 15,
    text: "You are now in a cult",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    }, 
    { id: 16,
    text: "A photogenic stranger aproaches you: You got a good look. Ever thought of being a model?",
     btn1: "NO I HAVE NOT",
     btn1_target: 17,
     btn2: "IGNORE",
     btn2_target: 19,
     game_over: false
    },
     { id: 17,
    text: "The stranger continues: I think you've got what it takes. Why don't you come back to my place for a photo shoot?",
     btn1: "SURE, THAT SOUNDS COOL",
     btn1_target: 18,
     btn2: "NO THANKS. I HAVE TO GO",
     btn2_target: 19,
     game_over: false
    },
     { id: 18,
    text: "You are kidnapped and sold as a sex slave.",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    }, { id: 19,
    text: "You aproach a stranger in a bad mood: That will be 98 cents. Would you like a reciept?",
     btn1: "SURE",
     btn1_target: 20,
     btn2: "IGNORE",
     btn2_target: 21,
     game_over: false
    },
     { id: 20,
    text: "The stranger loses his shit and murders everyone in the store including you.",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    },
     { id: 21,
    text: "You return home with the groceries your mother asked you for safe and sound.",
     btn1: "START OVER",
     btn1_target: 1,
     btn2: "",
     btn2_target: 1,
     game_over: true
    },
    
];  