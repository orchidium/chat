(function (exports) {
  "use strict";

  const emojiObject = {
    people: [
      {
        emoji: "π",
        title: "Grinning Face",
      },
      {
        emoji: "π",
        title: "Grinning Face with Big Eyes",
      },
      {
        emoji: "π",
        title: "Grinning Face with Smiling Eyes",
      },
      {
        emoji: "π",
        title: "Beaming Face with Smiling Eyes",
      },
      {
        emoji: "π",
        title: "Grinning Squinting Face",
      },
      {
        emoji: "π",
        title: "Grinning Face with Sweat",
      },
      {
        emoji: "π€£",
        title: "Rolling on the Floor Laughing",
      },
      {
        emoji: "π",
        title: "Face with Tears of Joy",
      },
      {
        emoji: "π",
        title: "Slightly Smiling Face",
      },
      {
        emoji: "π",
        title: "Upside-Down Face",
      },
      {
        emoji: "π",
        title: "Winking Face",
      },
      {
        emoji: "π",
        title: "Smiling Face with Smiling Eyes",
      },
      {
        emoji: "π",
        title: "Smiling Face with Halo",
      },
      {
        emoji: "π₯°",
        title: "Smiling Face with Hearts",
      },
      {
        emoji: "π",
        title: "Smiling Face with Heart-Eyes",
      },
      {
        emoji: "π€©",
        title: "Star-Struck",
      },
      {
        emoji: "π",
        title: "Face Blowing a Kiss",
      },
      {
        emoji: "π",
        title: "Kissing Face",
      },
      {
        emoji: "βΊοΈ",
        title: "Smiling Face",
      },
      {
        emoji: "π",
        title: "Kissing Face with Closed Eyes",
      },
      {
        emoji: "π",
        title: "Kissing Face with Smiling Eyes",
      },
      {
        emoji: "π₯²",
        title: "Smiling Face with Tear",
      },
      {
        emoji: "π",
        title: "Face Savoring Food",
      },
      {
        emoji: "π",
        title: "Face with Tongue",
      },
      {
        emoji: "π",
        title: "Winking Face with Tongue",
      },
      {
        emoji: "π€ͺ",
        title: "Zany Face",
      },
      {
        emoji: "π",
        title: "Squinting Face with Tongue",
      },
      {
        emoji: "π€",
        title: "Money-Mouth Face",
      },
      {
        emoji: "π€",
        title: "Smiling Face with Open Hands",
      },
      {
        emoji: "π€­",
        title: "Face with Hand Over Mouth",
      },
      {
        emoji: "π€«",
        title: "Shushing Face",
      },
      {
        emoji: "π€",
        title: "Thinking Face",
      },
      {
        emoji: "π€",
        title: "Zipper-Mouth Face",
      },
      {
        emoji: "π€¨",
        title: "Face with Raised Eyebrow",
      },
      {
        emoji: "π",
        title: "Neutral Face",
      },
      {
        emoji: "π",
        title: "Expressionless Face",
      },
      {
        emoji: "πΆ",
        title: "Face Without Mouth",
      },
      {
        emoji: "πΆβπ«οΈ",
        title: "Face in Clouds",
      },
      {
        emoji: "π",
        title: "Smirking Face",
      },
      {
        emoji: "π",
        title: "Unamused Face",
      },
      {
        emoji: "π",
        title: "Face with Rolling Eyes",
      },
      {
        emoji: "π¬",
        title: "Grimacing Face",
      },
      {
        emoji: "π?βπ¨",
        title: "Face Exhaling",
      },
      {
        emoji: "π€₯",
        title: "Lying Face",
      },
      {
        emoji: "π",
        title: "Relieved Face",
      },
      {
        emoji: "π",
        title: "Pensive Face",
      },
      {
        emoji: "πͺ",
        title: "Sleepy Face",
      },
      {
        emoji: "π€€",
        title: "Drooling Face",
      },
      {
        emoji: "π΄",
        title: "Sleeping Face",
      },
      {
        emoji: "π·",
        title: "Face with Medical Mask",
      },
      {
        emoji: "π€",
        title: "Face with Thermometer",
      },
      {
        emoji: "π€",
        title: "Face with Head-Bandage",
      },
      {
        emoji: "π€’",
        title: "Nauseated Face",
      },
      {
        emoji: "π€?",
        title: "Face Vomiting",
      },
      {
        emoji: "π€§",
        title: "Sneezing Face",
      },
      {
        emoji: "π₯΅",
        title: "Hot Face",
      },
      {
        emoji: "π₯Ά",
        title: "Cold Face",
      },
      {
        emoji: "π₯΄",
        title: "Woozy Face",
      },
      {
        emoji: "π΅",
        title: "Face with Crossed-Out Eyes",
      },
      {
        emoji: "π΅βπ«",
        title: "Face with Spiral Eyes",
      },
      {
        emoji: "π€―",
        title: "Exploding Head",
      },
      {
        emoji: "π€ ",
        title: "Cowboy Hat Face",
      },
      {
        emoji: "π₯³",
        title: "Partying Face",
      },
      {
        emoji: "π₯Έ",
        title: "Disguised Face",
      },
      {
        emoji: "π",
        title: "Smiling Face with Sunglasses",
      },
      {
        emoji: "π€",
        title: "Nerd Face",
      },
      {
        emoji: "π§",
        title: "Face with Monocle",
      },
      {
        emoji: "π",
        title: "Confused Face",
      },
      {
        emoji: "π",
        title: "Worried Face",
      },
      {
        emoji: "π",
        title: "Slightly Frowning Face",
      },
      {
        emoji: "βΉοΈ",
        title: "Frowning Face",
      },
      {
        emoji: "π?",
        title: "Face with Open Mouth",
      },
      {
        emoji: "π―",
        title: "Hushed Face",
      },
      {
        emoji: "π²",
        title: "Astonished Face",
      },
      {
        emoji: "π³",
        title: "Flushed Face",
      },
      {
        emoji: "π₯Ί",
        title: "Pleading Face",
      },
      {
        emoji: "π¦",
        title: "Frowning Face with Open Mouth",
      },
      {
        emoji: "π§",
        title: "Anguished Face",
      },
      {
        emoji: "π¨",
        title: "Fearful Face",
      },
      {
        emoji: "π°",
        title: "Anxious Face with Sweat",
      },
      {
        emoji: "π₯",
        title: "Sad but Relieved Face",
      },
      {
        emoji: "π’",
        title: "Crying Face",
      },
      {
        emoji: "π­",
        title: "Loudly Crying Face",
      },
      {
        emoji: "π±",
        title: "Face Screaming in Fear",
      },
      {
        emoji: "π",
        title: "Confounded Face",
      },
      {
        emoji: "π£",
        title: "Persevering Face",
      },
      {
        emoji: "π",
        title: "Disappointed Face",
      },
      {
        emoji: "π",
        title: "Downcast Face with Sweat",
      },
      {
        emoji: "π©",
        title: "Weary Face",
      },
      {
        emoji: "π«",
        title: "Tired Face",
      },
      {
        emoji: "π₯±",
        title: "Yawning Face",
      },
      {
        emoji: "π€",
        title: "Face with Steam From Nose",
      },
      {
        emoji: "π‘",
        title: "Enraged Face",
      },
      {
        emoji: "π ",
        title: "Angry Face",
      },
      {
        emoji: "π€¬",
        title: "Face with Symbols on Mouth",
      },
      {
        emoji: "π",
        title: "Smiling Face with Horns",
      },
      {
        emoji: "πΏ",
        title: "Angry Face with Horns",
      },
      {
        emoji: "π",
        title: "Skull",
      },
      {
        emoji: "β οΈ",
        title: "Skull and Crossbones",
      },
      {
        emoji: "π©",
        title: "Pile of Poo",
      },
      {
        emoji: "π€‘",
        title: "Clown Face",
      },
      {
        emoji: "πΉ",
        title: "Ogre",
      },
      {
        emoji: "πΊ",
        title: "Goblin",
      },
      {
        emoji: "π»",
        title: "Ghost",
      },
      {
        emoji: "π½",
        title: "Alien",
      },
      {
        emoji: "πΎ",
        title: "Alien Monster",
      },
      {
        emoji: "π€",
        title: "Robot",
      },
      {
        emoji: "πΊ",
        title: "Grinning Cat",
      },
      {
        emoji: "πΈ",
        title: "Grinning Cat with Smiling Eyes",
      },
      {
        emoji: "πΉ",
        title: "Cat with Tears of Joy",
      },
      {
        emoji: "π»",
        title: "Smiling Cat with Heart-Eyes",
      },
      {
        emoji: "πΌ",
        title: "Cat with Wry Smile",
      },
      {
        emoji: "π½",
        title: "Kissing Cat",
      },
      {
        emoji: "π",
        title: "Weary Cat",
      },
      {
        emoji: "πΏ",
        title: "Crying Cat",
      },
      {
        emoji: "πΎ",
        title: "Pouting Cat",
      },
      {
        emoji: "π",
        title: "Kiss Mark",
      },
      {
        emoji: "π",
        title: "Waving Hand",
      },
      {
        emoji: "π€",
        title: "Raised Back of Hand",
      },
      {
        emoji: "ποΈ",
        title: "Hand with Fingers Splayed",
      },
      {
        emoji: "β",
        title: "Raised Hand",
      },
      {
        emoji: "π",
        title: "Vulcan Salute",
      },
      {
        emoji: "π",
        title: "OK Hand",
      },
      {
        emoji: "π€",
        title: "Pinched Fingers",
      },
      {
        emoji: "π€",
        title: "Pinching Hand",
      },
      {
        emoji: "βοΈ",
        title: "Victory Hand",
      },
      {
        emoji: "π€",
        title: "Crossed Fingers",
      },
      {
        emoji: "π€",
        title: "Love-You Gesture",
      },
      {
        emoji: "π€",
        title: "Sign of the Horns",
      },
      {
        emoji: "π€",
        title: "Call Me Hand",
      },
      {
        emoji: "π",
        title: "Backhand Index Pointing Left",
      },
      {
        emoji: "π",
        title: "Backhand Index Pointing Right",
      },
      {
        emoji: "π",
        title: "Backhand Index Pointing Up",
      },
      {
        emoji: "π",
        title: "Middle Finger",
      },
      {
        emoji: "π",
        title: "Backhand Index Pointing Down",
      },
      {
        emoji: "βοΈ",
        title: "Index Pointing Up",
      },
      {
        emoji: "π",
        title: "Thumbs Up",
      },
      {
        emoji: "π",
        title: "Thumbs Down",
      },
      {
        emoji: "β",
        title: "Raised Fist",
      },
      {
        emoji: "π",
        title: "Oncoming Fist",
      },
      {
        emoji: "π€",
        title: "Left-Facing Fist",
      },
      {
        emoji: "π€",
        title: "Right-Facing Fist",
      },
      {
        emoji: "π",
        title: "Clapping Hands",
      },
      {
        emoji: "π",
        title: "Raising Hands",
      },
      {
        emoji: "π",
        title: "Open Hands",
      },
      {
        emoji: "π€²",
        title: "Palms Up Together",
      },
      {
        emoji: "π€",
        title: "Handshake",
      },
      {
        emoji: "π",
        title: "Folded Hands",
      },
      {
        emoji: "βοΈ",
        title: "Writing Hand",
      },
      {
        emoji: "π",
        title: "Nail Polish",
      },
      {
        emoji: "π€³",
        title: "Selfie",
      },
      {
        emoji: "πͺ",
        title: "Flexed Biceps",
      },
      {
        emoji: "π¦Ύ",
        title: "Mechanical Arm",
      },
      {
        emoji: "π¦Ώ",
        title: "Mechanical Leg",
      },
      {
        emoji: "π¦΅",
        title: "Leg",
      },
      {
        emoji: "π¦Ά",
        title: "Foot",
      },
      {
        emoji: "π",
        title: "Ear",
      },
      {
        emoji: "π¦»",
        title: "Ear with Hearing Aid",
      },
      {
        emoji: "π",
        title: "Nose",
      },
      {
        emoji: "π§ ",
        title: "Brain",
      },
      {
        emoji: "π«",
        title: "Anatomical Heart",
      },
      {
        emoji: "π«",
        title: "Lungs",
      },
      {
        emoji: "π¦·",
        title: "Tooth",
      },
      {
        emoji: "π¦΄",
        title: "Bone",
      },
      {
        emoji: "π",
        title: "Eyes",
      },
      {
        emoji: "ποΈ",
        title: "Eye",
      },
      {
        emoji: "π",
        title: "Tongue",
      },
      {
        emoji: "π",
        title: "Mouth",
      },
      {
        emoji: "πΆ",
        title: "Baby",
      },
      {
        emoji: "π§",
        title: "Child",
      },
      {
        emoji: "π¦",
        title: "Boy",
      },
      {
        emoji: "π§",
        title: "Girl",
      },
      {
        emoji: "π§",
        title: "Person",
      },
      {
        emoji: "π±",
        title: "Person: Blond Hair",
      },
      {
        emoji: "π¨",
        title: "Man",
      },
      {
        emoji: "π§",
        title: "Person: Beard",
      },
      {
        emoji: "π¨βπ¦°",
        title: "Man: Red Hair",
      },
      {
        emoji: "π¨βπ¦±",
        title: "Man: Curly Hair",
      },
      {
        emoji: "π¨βπ¦³",
        title: "Man: White Hair",
      },
      {
        emoji: "π¨βπ¦²",
        title: "Man: Bald",
      },
      {
        emoji: "π©",
        title: "Woman",
      },
      {
        emoji: "π©βπ¦°",
        title: "Woman: Red Hair",
      },
      {
        emoji: "π§βπ¦°",
        title: "Person: Red Hair",
      },
      {
        emoji: "π©βπ¦±",
        title: "Woman: Curly Hair",
      },
      {
        emoji: "π§βπ¦±",
        title: "Person: Curly Hair",
      },
      {
        emoji: "π©βπ¦³",
        title: "Woman: White Hair",
      },
      {
        emoji: "π§βπ¦³",
        title: "Person: White Hair",
      },
      {
        emoji: "π©βπ¦²",
        title: "Woman: Bald",
      },
      {
        emoji: "π§βπ¦²",
        title: "Person: Bald",
      },
      {
        emoji: "π±ββοΈ",
        title: "Woman: Blond Hair",
      },
      {
        emoji: "π±ββοΈ",
        title: "Man: Blond Hair",
      },
      {
        emoji: "π§",
        title: "Older Person",
      },
      {
        emoji: "π΄",
        title: "Old Man",
      },
      {
        emoji: "π΅",
        title: "Old Woman",
      },
      {
        emoji: "π",
        title: "Person Frowning",
      },
      {
        emoji: "πββοΈ",
        title: "Man Frowning",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Frowning",
      },
      {
        emoji: "π",
        title: "Person Pouting",
      },
      {
        emoji: "πββοΈ",
        title: "Man Pouting",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Pouting",
      },
      {
        emoji: "π",
        title: "Person Gesturing No",
      },
      {
        emoji: "πββοΈ",
        title: "Man Gesturing No",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Gesturing No",
      },
      {
        emoji: "π",
        title: "Person Gesturing OK",
      },
      {
        emoji: "πββοΈ",
        title: "Man Gesturing OK",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Gesturing OK",
      },
      {
        emoji: "π",
        title: "Person Tipping Hand",
      },
      {
        emoji: "πββοΈ",
        title: "Man Tipping Hand",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Tipping Hand",
      },
      {
        emoji: "π",
        title: "Person Raising Hand",
      },
      {
        emoji: "πββοΈ",
        title: "Man Raising Hand",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Raising Hand",
      },
      {
        emoji: "π§",
        title: "Deaf Person",
      },
      {
        emoji: "π§ββοΈ",
        title: "Deaf Man",
      },
      {
        emoji: "π§ββοΈ",
        title: "Deaf Woman",
      },
      {
        emoji: "π",
        title: "Person Bowing",
      },
      {
        emoji: "πββοΈ",
        title: "Man Bowing",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Bowing",
      },
      {
        emoji: "π€¦",
        title: "Person Facepalming",
      },
      {
        emoji: "π€¦ββοΈ",
        title: "Man Facepalming",
      },
      {
        emoji: "π€¦ββοΈ",
        title: "Woman Facepalming",
      },
      {
        emoji: "π€·",
        title: "Person Shrugging",
      },
      {
        emoji: "π€·ββοΈ",
        title: "Man Shrugging",
      },
      {
        emoji: "π€·ββοΈ",
        title: "Woman Shrugging",
      },
      {
        emoji: "π§ββοΈ",
        title: "Health Worker",
      },
      {
        emoji: "π¨ββοΈ",
        title: "Man Health Worker",
      },
      {
        emoji: "π©ββοΈ",
        title: "Woman Health Worker",
      },
      {
        emoji: "π§βπ",
        title: "Student",
      },
      {
        emoji: "π¨βπ",
        title: "Man Student",
      },
      {
        emoji: "π©βπ",
        title: "Woman Student",
      },
      {
        emoji: "π§βπ«",
        title: "Teacher",
      },
      {
        emoji: "π¨βπ«",
        title: "Man Teacher",
      },
      {
        emoji: "π©βπ«",
        title: "Woman Teacher",
      },
      {
        emoji: "π§ββοΈ",
        title: "Judge",
      },
      {
        emoji: "π¨ββοΈ",
        title: "Man Judge",
      },
      {
        emoji: "π©ββοΈ",
        title: "Woman Judge",
      },
      {
        emoji: "π§βπΎ",
        title: "Farmer",
      },
      {
        emoji: "π¨βπΎ",
        title: "Man Farmer",
      },
      {
        emoji: "π©βπΎ",
        title: "Woman Farmer",
      },
      {
        emoji: "π§βπ³",
        title: "Cook",
      },
      {
        emoji: "π¨βπ³",
        title: "Man Cook",
      },
      {
        emoji: "π©βπ³",
        title: "Woman Cook",
      },
      {
        emoji: "π§βπ§",
        title: "Mechanic",
      },
      {
        emoji: "π¨βπ§",
        title: "Man Mechanic",
      },
      {
        emoji: "π©βπ§",
        title: "Woman Mechanic",
      },
      {
        emoji: "π§βπ­",
        title: "Factory Worker",
      },
      {
        emoji: "π¨βπ­",
        title: "Man Factory Worker",
      },
      {
        emoji: "π©βπ­",
        title: "Woman Factory Worker",
      },
      {
        emoji: "π§βπΌ",
        title: "Office Worker",
      },
      {
        emoji: "π¨βπΌ",
        title: "Man Office Worker",
      },
      {
        emoji: "π©βπΌ",
        title: "Woman Office Worker",
      },
      {
        emoji: "π§βπ¬",
        title: "Scientist",
      },
      {
        emoji: "π¨βπ¬",
        title: "Man Scientist",
      },
      {
        emoji: "π©βπ¬",
        title: "Woman Scientist",
      },
      {
        emoji: "π§βπ»",
        title: "Technologist",
      },
      {
        emoji: "π¨βπ»",
        title: "Man Technologist",
      },
      {
        emoji: "π©βπ»",
        title: "Woman Technologist",
      },
      {
        emoji: "π§βπ€",
        title: "Singer",
      },
      {
        emoji: "π¨βπ€",
        title: "Man Singer",
      },
      {
        emoji: "π©βπ€",
        title: "Woman Singer",
      },
      {
        emoji: "π§βπ¨",
        title: "Artist",
      },
      {
        emoji: "π¨βπ¨",
        title: "Man Artist",
      },
      {
        emoji: "π©βπ¨",
        title: "Woman Artist",
      },
      {
        emoji: "π§ββοΈ",
        title: "Pilot",
      },
      {
        emoji: "π¨ββοΈ",
        title: "Man Pilot",
      },
      {
        emoji: "π©ββοΈ",
        title: "Woman Pilot",
      },
      {
        emoji: "π§βπ",
        title: "Astronaut",
      },
      {
        emoji: "π¨βπ",
        title: "Man Astronaut",
      },
      {
        emoji: "π©βπ",
        title: "Woman Astronaut",
      },
      {
        emoji: "π§βπ",
        title: "Firefighter",
      },
      {
        emoji: "π¨βπ",
        title: "Man Firefighter",
      },
      {
        emoji: "π©βπ",
        title: "Woman Firefighter",
      },
      {
        emoji: "π?",
        title: "Police Officer",
      },
      {
        emoji: "π?ββοΈ",
        title: "Man Police Officer",
      },
      {
        emoji: "π?ββοΈ",
        title: "Woman Police Officer",
      },
      {
        emoji: "π΅οΈ",
        title: "Detective",
      },
      {
        emoji: "π΅οΈββοΈ",
        title: "Man Detective",
      },
      {
        emoji: "π΅οΈββοΈ",
        title: "Woman Detective",
      },
      {
        emoji: "π",
        title: "Guard",
      },
      {
        emoji: "πββοΈ",
        title: "Man Guard",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Guard",
      },
      {
        emoji: "π₯·",
        title: "Ninja",
      },
      {
        emoji: "π·",
        title: "Construction Worker",
      },
      {
        emoji: "π·ββοΈ",
        title: "Man Construction Worker",
      },
      {
        emoji: "π·ββοΈ",
        title: "Woman Construction Worker",
      },
      {
        emoji: "π€΄",
        title: "Prince",
      },
      {
        emoji: "πΈ",
        title: "Princess",
      },
      {
        emoji: "π³",
        title: "Person Wearing Turban",
      },
      {
        emoji: "π³ββοΈ",
        title: "Man Wearing Turban",
      },
      {
        emoji: "π³ββοΈ",
        title: "Woman Wearing Turban",
      },
      {
        emoji: "π²",
        title: "Person with Skullcap",
      },
      {
        emoji: "π§",
        title: "Woman with Headscarf",
      },
      {
        emoji: "π€΅",
        title: "Person in Tuxedo",
      },
      {
        emoji: "π€΅ββοΈ",
        title: "Man in Tuxedo",
      },
      {
        emoji: "π€΅ββοΈ",
        title: "Woman in Tuxedo",
      },
      {
        emoji: "π°",
        title: "Person with Veil",
      },
      {
        emoji: "π°ββοΈ",
        title: "Man with Veil",
      },
      {
        emoji: "π°ββοΈ",
        title: "Woman with Veil",
      },
      {
        emoji: "π€°",
        title: "Pregnant Woman",
      },
      {
        emoji: "π€±",
        title: "Breast-Feeding",
      },
      {
        emoji: "π©βπΌ",
        title: "Woman Feeding Baby",
      },
      {
        emoji: "π¨βπΌ",
        title: "Man Feeding Baby",
      },
      {
        emoji: "π§βπΌ",
        title: "Person Feeding Baby",
      },
      {
        emoji: "πΌ",
        title: "Baby Angel",
      },
      {
        emoji: "π",
        title: "Santa Claus",
      },
      {
        emoji: "π€Ά",
        title: "Mrs. Claus",
      },
      {
        emoji: "π§βπ",
        title: "Mx Claus",
      },
      {
        emoji: "π¦Έ",
        title: "Superhero",
      },
      {
        emoji: "π¦ΈββοΈ",
        title: "Man Superhero",
      },
      {
        emoji: "π¦ΈββοΈ",
        title: "Woman Superhero",
      },
      {
        emoji: "π¦Ή",
        title: "Supervillain",
      },
      {
        emoji: "π¦ΉββοΈ",
        title: "Man Supervillain",
      },
      {
        emoji: "π¦ΉββοΈ",
        title: "Woman Supervillain",
      },
      {
        emoji: "π§",
        title: "Mage",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Mage",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Mage",
      },
      {
        emoji: "π§",
        title: "Fairy",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Fairy",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Fairy",
      },
      {
        emoji: "π§",
        title: "Vampire",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Vampire",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Vampire",
      },
      {
        emoji: "π§",
        title: "Merperson",
      },
      {
        emoji: "π§ββοΈ",
        title: "Merman",
      },
      {
        emoji: "π§ββοΈ",
        title: "Mermaid",
      },
      {
        emoji: "π§",
        title: "Elf",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Elf",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Elf",
      },
      {
        emoji: "π§",
        title: "Genie",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Genie",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Genie",
      },
      {
        emoji: "π§",
        title: "Zombie",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Zombie",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Zombie",
      },
      {
        emoji: "π",
        title: "Person Getting Massage",
      },
      {
        emoji: "πββοΈ",
        title: "Man Getting Massage",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Getting Massage",
      },
      {
        emoji: "π",
        title: "Person Getting Haircut",
      },
      {
        emoji: "πββοΈ",
        title: "Man Getting Haircut",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Getting Haircut",
      },
      {
        emoji: "πΆ",
        title: "Person Walking",
      },
      {
        emoji: "πΆββοΈ",
        title: "Man Walking",
      },
      {
        emoji: "πΆββοΈ",
        title: "Woman Walking",
      },
      {
        emoji: "π§",
        title: "Person Standing",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Standing",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Standing",
      },
      {
        emoji: "π§",
        title: "Person Kneeling",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Kneeling",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Kneeling",
      },
      {
        emoji: "π§βπ¦―",
        title: "Person with White Cane",
      },
      {
        emoji: "π¨βπ¦―",
        title: "Man with White Cane",
      },
      {
        emoji: "π©βπ¦―",
        title: "Woman with White Cane",
      },
      {
        emoji: "π§βπ¦Ό",
        title: "Person in Motorized Wheelchair",
      },
      {
        emoji: "π¨βπ¦Ό",
        title: "Man in Motorized Wheelchair",
      },
      {
        emoji: "π©βπ¦Ό",
        title: "Woman in Motorized Wheelchair",
      },
      {
        emoji: "π§βπ¦½",
        title: "Person in Manual Wheelchair",
      },
      {
        emoji: "π¨βπ¦½",
        title: "Man in Manual Wheelchair",
      },
      {
        emoji: "π©βπ¦½",
        title: "Woman in Manual Wheelchair",
      },
      {
        emoji: "π",
        title: "Person Running",
      },
      {
        emoji: "πββοΈ",
        title: "Man Running",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Running",
      },
      {
        emoji: "π",
        title: "Woman Dancing",
      },
      {
        emoji: "πΊ",
        title: "Man Dancing",
      },
      {
        emoji: "π΄οΈ",
        title: "Person in Suit Levitating",
      },
      {
        emoji: "π―",
        title: "People with Bunny Ears",
      },
      {
        emoji: "π―ββοΈ",
        title: "Men with Bunny Ears",
      },
      {
        emoji: "π―ββοΈ",
        title: "Women with Bunny Ears",
      },
      {
        emoji: "π§",
        title: "Person in Steamy Room",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man in Steamy Room",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman in Steamy Room",
      },
      {
        emoji: "π§",
        title: "Person in Lotus Position",
      },
      {
        emoji: "π§βπ€βπ§",
        title: "People Holding Hands",
      },
      {
        emoji: "π­",
        title: "Women Holding Hands",
      },
      {
        emoji: "π«",
        title: "Woman and Man Holding Hands",
      },
      {
        emoji: "π¬",
        title: "Men Holding Hands",
      },
      {
        emoji: "π",
        title: "Kiss",
      },
      {
        emoji: "π©ββ€οΈβπβπ¨",
        title: "Kiss: Woman, Man",
      },
      {
        emoji: "π¨ββ€οΈβπβπ¨",
        title: "Kiss: Man, Man",
      },
      {
        emoji: "π©ββ€οΈβπβπ©",
        title: "Kiss: Woman, Woman",
      },
      {
        emoji: "π",
        title: "Couple with Heart",
      },
      {
        emoji: "π©ββ€οΈβπ¨",
        title: "Couple with Heart: Woman, Man",
      },
      {
        emoji: "π¨ββ€οΈβπ¨",
        title: "Couple with Heart: Man, Man",
      },
      {
        emoji: "π©ββ€οΈβπ©",
        title: "Couple with Heart: Woman, Woman",
      },
      {
        emoji: "πͺ",
        title: "Family",
      },
      {
        emoji: "π¨βπ©βπ¦",
        title: "Family: Man, Woman, Boy",
      },
      {
        emoji: "π¨βπ©βπ§",
        title: "Family: Man, Woman, Girl",
      },
      {
        emoji: "π¨βπ©βπ§βπ¦",
        title: "Family: Man, Woman, Girl, Boy",
      },
      {
        emoji: "π¨βπ©βπ¦βπ¦",
        title: "Family: Man, Woman, Boy, Boy",
      },
      {
        emoji: "π¨βπ©βπ§βπ§",
        title: "Family: Man, Woman, Girl, Girl",
      },
      {
        emoji: "π¨βπ¨βπ¦",
        title: "Family: Man, Man, Boy",
      },
      {
        emoji: "π¨βπ¨βπ§",
        title: "Family: Man, Man, Girl",
      },
      {
        emoji: "π¨βπ¨βπ§βπ¦",
        title: "Family: Man, Man, Girl, Boy",
      },
      {
        emoji: "π¨βπ¨βπ¦βπ¦",
        title: "Family: Man, Man, Boy, Boy",
      },
      {
        emoji: "π¨βπ¨βπ§βπ§",
        title: "Family: Man, Man, Girl, Girl",
      },
      {
        emoji: "π©βπ©βπ¦",
        title: "Family: Woman, Woman, Boy",
      },
      {
        emoji: "π©βπ©βπ§",
        title: "Family: Woman, Woman, Girl",
      },
      {
        emoji: "π©βπ©βπ§βπ¦",
        title: "Family: Woman, Woman, Girl, Boy",
      },
      {
        emoji: "π©βπ©βπ¦βπ¦",
        title: "Family: Woman, Woman, Boy, Boy",
      },
      {
        emoji: "π©βπ©βπ§βπ§",
        title: "Family: Woman, Woman, Girl, Girl",
      },
      {
        emoji: "π¨βπ¦",
        title: "Family: Man, Boy",
      },
      {
        emoji: "π¨βπ¦βπ¦",
        title: "Family: Man, Boy, Boy",
      },
      {
        emoji: "π¨βπ§",
        title: "Family: Man, Girl",
      },
      {
        emoji: "π¨βπ§βπ¦",
        title: "Family: Man, Girl, Boy",
      },
      {
        emoji: "π¨βπ§βπ§",
        title: "Family: Man, Girl, Girl",
      },
      {
        emoji: "π©βπ¦",
        title: "Family: Woman, Boy",
      },
      {
        emoji: "π©βπ¦βπ¦",
        title: "Family: Woman, Boy, Boy",
      },
      {
        emoji: "π©βπ§",
        title: "Family: Woman, Girl",
      },
      {
        emoji: "π©βπ§βπ¦",
        title: "Family: Woman, Girl, Boy",
      },
      {
        emoji: "π©βπ§βπ§",
        title: "Family: Woman, Girl, Girl",
      },
      {
        emoji: "π£οΈ",
        title: "Speaking Head",
      },
      {
        emoji: "π€",
        title: "Bust in Silhouette",
      },
      {
        emoji: "π₯",
        title: "Busts in Silhouette",
      },
      {
        emoji: "π«",
        title: "People Hugging",
      },
      {
        emoji: "π£",
        title: "Footprints",
      },
      {
        emoji: "π§³",
        title: "Luggage",
      },
      {
        emoji: "π",
        title: "Closed Umbrella",
      },
      {
        emoji: "βοΈ",
        title: "Umbrella",
      },
      {
        emoji: "π",
        title: "Jack-O-Lantern",
      },
      {
        emoji: "π§΅",
        title: "Thread",
      },
      {
        emoji: "π§Ά",
        title: "Yarn",
      },
      {
        emoji: "π",
        title: "Glasses",
      },
      {
        emoji: "πΆοΈ",
        title: "Sunglasses",
      },
      {
        emoji: "π₯½",
        title: "Goggles",
      },
      {
        emoji: "π₯Ό",
        title: "Lab Coat",
      },
      {
        emoji: "π¦Ί",
        title: "Safety Vest",
      },
      {
        emoji: "π",
        title: "Necktie",
      },
      {
        emoji: "π",
        title: "T-Shirt",
      },
      {
        emoji: "π",
        title: "Jeans",
      },
      {
        emoji: "π§£",
        title: "Scarf",
      },
      {
        emoji: "π§€",
        title: "Gloves",
      },
      {
        emoji: "π§₯",
        title: "Coat",
      },
      {
        emoji: "π§¦",
        title: "Socks",
      },
      {
        emoji: "π",
        title: "Dress",
      },
      {
        emoji: "π",
        title: "Kimono",
      },
      {
        emoji: "π₯»",
        title: "Sari",
      },
      {
        emoji: "π©±",
        title: "One-Piece Swimsuit",
      },
      {
        emoji: "π©²",
        title: "Briefs",
      },
      {
        emoji: "π©³",
        title: "Shorts",
      },
      {
        emoji: "π",
        title: "Bikini",
      },
      {
        emoji: "π",
        title: "Womanβs Clothes",
      },
      {
        emoji: "π",
        title: "Purse",
      },
      {
        emoji: "π",
        title: "Handbag",
      },
      {
        emoji: "π",
        title: "Clutch Bag",
      },
      {
        emoji: "π",
        title: "Backpack",
      },
      {
        emoji: "π©΄",
        title: "Thong Sandal",
      },
      {
        emoji: "π",
        title: "Manβs Shoe",
      },
      {
        emoji: "π",
        title: "Running Shoe",
      },
      {
        emoji: "π₯Ύ",
        title: "Hiking Boot",
      },
      {
        emoji: "π₯Ώ",
        title: "Flat Shoe",
      },
      {
        emoji: "π ",
        title: "High-Heeled Shoe",
      },
      {
        emoji: "π‘",
        title: "Womanβs Sandal",
      },
      {
        emoji: "π©°",
        title: "Ballet Shoes",
      },
      {
        emoji: "π’",
        title: "Womanβs Boot",
      },
      {
        emoji: "π",
        title: "Crown",
      },
      {
        emoji: "π",
        title: "Womanβs Hat",
      },
      {
        emoji: "π©",
        title: "Top Hat",
      },
      {
        emoji: "π",
        title: "Graduation Cap",
      },
      {
        emoji: "π§’",
        title: "Billed Cap",
      },
      {
        emoji: "πͺ",
        title: "Military Helmet",
      },
      {
        emoji: "βοΈ",
        title: "Rescue Workerβs Helmet",
      },
      {
        emoji: "π",
        title: "Lipstick",
      },
      {
        emoji: "π",
        title: "Ring",
      },
      {
        emoji: "πΌ",
        title: "Briefcase",
      },
      {
        emoji: "π©Έ",
        title: "Drop of Blood",
      },
    ],
    nature: [
      {
        emoji: "π",
        title: "See-No-Evil Monkey",
      },
      {
        emoji: "π",
        title: "Hear-No-Evil Monkey",
      },
      {
        emoji: "π",
        title: "Speak-No-Evil Monkey",
      },
      {
        emoji: "π₯",
        title: "Collision",
      },
      {
        emoji: "π«",
        title: "Dizzy",
      },
      {
        emoji: "π¦",
        title: "Sweat Droplets",
      },
      {
        emoji: "π¨",
        title: "Dashing Away",
      },
      {
        emoji: "π΅",
        title: "Monkey Face",
      },
      {
        emoji: "π",
        title: "Monkey",
      },
      {
        emoji: "π¦",
        title: "Gorilla",
      },
      {
        emoji: "π¦§",
        title: "Orangutan",
      },
      {
        emoji: "πΆ",
        title: "Dog Face",
      },
      {
        emoji: "π",
        title: "Dog",
      },
      {
        emoji: "π¦?",
        title: "Guide Dog",
      },
      {
        emoji: "πβπ¦Ί",
        title: "Service Dog",
      },
      {
        emoji: "π©",
        title: "Poodle",
      },
      {
        emoji: "πΊ",
        title: "Wolf",
      },
      {
        emoji: "π¦",
        title: "Fox",
      },
      {
        emoji: "π¦",
        title: "Raccoon",
      },
      {
        emoji: "π±",
        title: "Cat Face",
      },
      {
        emoji: "π",
        title: "Cat",
      },
      {
        emoji: "πββ¬",
        title: "Black Cat",
      },
      {
        emoji: "π¦",
        title: "Lion",
      },
      {
        emoji: "π―",
        title: "Tiger Face",
      },
      {
        emoji: "π",
        title: "Tiger",
      },
      {
        emoji: "π",
        title: "Leopard",
      },
      {
        emoji: "π΄",
        title: "Horse Face",
      },
      {
        emoji: "π",
        title: "Horse",
      },
      {
        emoji: "π¦",
        title: "Unicorn",
      },
      {
        emoji: "π¦",
        title: "Zebra",
      },
      {
        emoji: "π¦",
        title: "Deer",
      },
      {
        emoji: "π¦¬",
        title: "Bison",
      },
      {
        emoji: "π?",
        title: "Cow Face",
      },
      {
        emoji: "π",
        title: "Ox",
      },
      {
        emoji: "π",
        title: "Water Buffalo",
      },
      {
        emoji: "π",
        title: "Cow",
      },
      {
        emoji: "π·",
        title: "Pig Face",
      },
      {
        emoji: "π",
        title: "Pig",
      },
      {
        emoji: "π",
        title: "Boar",
      },
      {
        emoji: "π½",
        title: "Pig Nose",
      },
      {
        emoji: "π",
        title: "Ram",
      },
      {
        emoji: "π",
        title: "Ewe",
      },
      {
        emoji: "π",
        title: "Goat",
      },
      {
        emoji: "πͺ",
        title: "Camel",
      },
      {
        emoji: "π«",
        title: "Two-Hump Camel",
      },
      {
        emoji: "π¦",
        title: "Llama",
      },
      {
        emoji: "π¦",
        title: "Giraffe",
      },
      {
        emoji: "π",
        title: "Elephant",
      },
      {
        emoji: "π¦£",
        title: "Mammoth",
      },
      {
        emoji: "π¦",
        title: "Rhinoceros",
      },
      {
        emoji: "π¦",
        title: "Hippopotamus",
      },
      {
        emoji: "π­",
        title: "Mouse Face",
      },
      {
        emoji: "π",
        title: "Mouse",
      },
      {
        emoji: "π",
        title: "Rat",
      },
      {
        emoji: "πΉ",
        title: "Hamster",
      },
      {
        emoji: "π°",
        title: "Rabbit Face",
      },
      {
        emoji: "π",
        title: "Rabbit",
      },
      {
        emoji: "πΏοΈ",
        title: "Chipmunk",
      },
      {
        emoji: "π¦«",
        title: "Beaver",
      },
      {
        emoji: "π¦",
        title: "Hedgehog",
      },
      {
        emoji: "π¦",
        title: "Bat",
      },
      {
        emoji: "π»",
        title: "Bear",
      },
      {
        emoji: "π»ββοΈ",
        title: "Polar Bear",
      },
      {
        emoji: "π¨",
        title: "Koala",
      },
      {
        emoji: "πΌ",
        title: "Panda",
      },
      {
        emoji: "π¦₯",
        title: "Sloth",
      },
      {
        emoji: "π¦¦",
        title: "Otter",
      },
      {
        emoji: "π¦¨",
        title: "Skunk",
      },
      {
        emoji: "π¦",
        title: "Kangaroo",
      },
      {
        emoji: "π¦‘",
        title: "Badger",
      },
      {
        emoji: "πΎ",
        title: "Paw Prints",
      },
      {
        emoji: "π¦",
        title: "Turkey",
      },
      {
        emoji: "π",
        title: "Chicken",
      },
      {
        emoji: "π",
        title: "Rooster",
      },
      {
        emoji: "π£",
        title: "Hatching Chick",
      },
      {
        emoji: "π€",
        title: "Baby Chick",
      },
      {
        emoji: "π₯",
        title: "Front-Facing Baby Chick",
      },
      {
        emoji: "π¦",
        title: "Bird",
      },
      {
        emoji: "π§",
        title: "Penguin",
      },
      {
        emoji: "ποΈ",
        title: "Dove",
      },
      {
        emoji: "π¦",
        title: "Eagle",
      },
      {
        emoji: "π¦",
        title: "Duck",
      },
      {
        emoji: "π¦’",
        title: "Swan",
      },
      {
        emoji: "π¦",
        title: "Owl",
      },
      {
        emoji: "π¦€",
        title: "Dodo",
      },
      {
        emoji: "πͺΆ",
        title: "Feather",
      },
      {
        emoji: "π¦©",
        title: "Flamingo",
      },
      {
        emoji: "π¦",
        title: "Peacock",
      },
      {
        emoji: "π¦",
        title: "Parrot",
      },
      {
        emoji: "πΈ",
        title: "Frog",
      },
      {
        emoji: "π",
        title: "Crocodile",
      },
      {
        emoji: "π’",
        title: "Turtle",
      },
      {
        emoji: "π¦",
        title: "Lizard",
      },
      {
        emoji: "π",
        title: "Snake",
      },
      {
        emoji: "π²",
        title: "Dragon Face",
      },
      {
        emoji: "π",
        title: "Dragon",
      },
      {
        emoji: "π¦",
        title: "Sauropod",
      },
      {
        emoji: "π¦",
        title: "T-Rex",
      },
      {
        emoji: "π³",
        title: "Spouting Whale",
      },
      {
        emoji: "π",
        title: "Whale",
      },
      {
        emoji: "π¬",
        title: "Dolphin",
      },
      {
        emoji: "π¦­",
        title: "Seal",
      },
      {
        emoji: "π",
        title: "Fish",
      },
      {
        emoji: "π ",
        title: "Tropical Fish",
      },
      {
        emoji: "π‘",
        title: "Blowfish",
      },
      {
        emoji: "π¦",
        title: "Shark",
      },
      {
        emoji: "π",
        title: "Octopus",
      },
      {
        emoji: "π",
        title: "Spiral Shell",
      },
      {
        emoji: "π",
        title: "Snail",
      },
      {
        emoji: "π¦",
        title: "Butterfly",
      },
      {
        emoji: "π",
        title: "Bug",
      },
      {
        emoji: "π",
        title: "Ant",
      },
      {
        emoji: "π",
        title: "Honeybee",
      },
      {
        emoji: "πͺ²",
        title: "Beetle",
      },
      {
        emoji: "π",
        title: "Lady Beetle",
      },
      {
        emoji: "π¦",
        title: "Cricket",
      },
      {
        emoji: "πͺ³",
        title: "Cockroach",
      },
      {
        emoji: "π·οΈ",
        title: "Spider",
      },
      {
        emoji: "πΈοΈ",
        title: "Spider Web",
      },
      {
        emoji: "π¦",
        title: "Scorpion",
      },
      {
        emoji: "π¦",
        title: "Mosquito",
      },
      {
        emoji: "πͺ°",
        title: "Fly",
      },
      {
        emoji: "πͺ±",
        title: "Worm",
      },
      {
        emoji: "π¦ ",
        title: "Microbe",
      },
      {
        emoji: "π",
        title: "Bouquet",
      },
      {
        emoji: "πΈ",
        title: "Cherry Blossom",
      },
      {
        emoji: "π?",
        title: "White Flower",
      },
      {
        emoji: "π΅οΈ",
        title: "Rosette",
      },
      {
        emoji: "πΉ",
        title: "Rose",
      },
      {
        emoji: "π₯",
        title: "Wilted Flower",
      },
      {
        emoji: "πΊ",
        title: "Hibiscus",
      },
      {
        emoji: "π»",
        title: "Sunflower",
      },
      {
        emoji: "πΌ",
        title: "Blossom",
      },
      {
        emoji: "π·",
        title: "Tulip",
      },
      {
        emoji: "π±",
        title: "Seedling",
      },
      {
        emoji: "πͺ΄",
        title: "Potted Plant",
      },
      {
        emoji: "π²",
        title: "Evergreen Tree",
      },
      {
        emoji: "π³",
        title: "Deciduous Tree",
      },
      {
        emoji: "π΄",
        title: "Palm Tree",
      },
      {
        emoji: "π΅",
        title: "Cactus",
      },
      {
        emoji: "πΎ",
        title: "Sheaf of Rice",
      },
      {
        emoji: "πΏ",
        title: "Herb",
      },
      {
        emoji: "βοΈ",
        title: "Shamrock",
      },
      {
        emoji: "π",
        title: "Four Leaf Clover",
      },
      {
        emoji: "π",
        title: "Maple Leaf",
      },
      {
        emoji: "π",
        title: "Fallen Leaf",
      },
      {
        emoji: "π",
        title: "Leaf Fluttering in Wind",
      },
      {
        emoji: "π",
        title: "Mushroom",
      },
      {
        emoji: "π°",
        title: "Chestnut",
      },
      {
        emoji: "π¦",
        title: "Crab",
      },
      {
        emoji: "π¦",
        title: "Lobster",
      },
      {
        emoji: "π¦",
        title: "Shrimp",
      },
      {
        emoji: "π¦",
        title: "Squid",
      },
      {
        emoji: "π",
        title: "Globe Showing Europe-Africa",
      },
      {
        emoji: "π",
        title: "Globe Showing Americas",
      },
      {
        emoji: "π",
        title: "Globe Showing Asia-Australia",
      },
      {
        emoji: "π",
        title: "Globe with Meridians",
      },
      {
        emoji: "πͺ¨",
        title: "Rock",
      },
      {
        emoji: "π",
        title: "New Moon",
      },
      {
        emoji: "π",
        title: "Waxing Crescent Moon",
      },
      {
        emoji: "π",
        title: "First Quarter Moon",
      },
      {
        emoji: "π",
        title: "Waxing Gibbous Moon",
      },
      {
        emoji: "π",
        title: "Full Moon",
      },
      {
        emoji: "π",
        title: "Waning Gibbous Moon",
      },
      {
        emoji: "π",
        title: "Last Quarter Moon",
      },
      {
        emoji: "π",
        title: "Waning Crescent Moon",
      },
      {
        emoji: "π",
        title: "Crescent Moon",
      },
      {
        emoji: "π",
        title: "New Moon Face",
      },
      {
        emoji: "π",
        title: "First Quarter Moon Face",
      },
      {
        emoji: "π",
        title: "Last Quarter Moon Face",
      },
      {
        emoji: "βοΈ",
        title: "Sun",
      },
      {
        emoji: "π",
        title: "Full Moon Face",
      },
      {
        emoji: "π",
        title: "Sun with Face",
      },
      {
        emoji: "β­",
        title: "Star",
      },
      {
        emoji: "π",
        title: "Glowing Star",
      },
      {
        emoji: "π ",
        title: "Shooting Star",
      },
      {
        emoji: "βοΈ",
        title: "Cloud",
      },
      {
        emoji: "β",
        title: "Sun Behind Cloud",
      },
      {
        emoji: "βοΈ",
        title: "Cloud with Lightning and Rain",
      },
      {
        emoji: "π€οΈ",
        title: "Sun Behind Small Cloud",
      },
      {
        emoji: "π₯οΈ",
        title: "Sun Behind Large Cloud",
      },
      {
        emoji: "π¦οΈ",
        title: "Sun Behind Rain Cloud",
      },
      {
        emoji: "π§οΈ",
        title: "Cloud with Rain",
      },
      {
        emoji: "π¨οΈ",
        title: "Cloud with Snow",
      },
      {
        emoji: "π©οΈ",
        title: "Cloud with Lightning",
      },
      {
        emoji: "πͺοΈ",
        title: "Tornado",
      },
      {
        emoji: "π«οΈ",
        title: "Fog",
      },
      {
        emoji: "π¬οΈ",
        title: "Wind Face",
      },
      {
        emoji: "π",
        title: "Rainbow",
      },
      {
        emoji: "βοΈ",
        title: "Umbrella",
      },
      {
        emoji: "β",
        title: "Umbrella with Rain Drops",
      },
      {
        emoji: "β‘",
        title: "High Voltage",
      },
      {
        emoji: "βοΈ",
        title: "Snowflake",
      },
      {
        emoji: "βοΈ",
        title: "Snowman",
      },
      {
        emoji: "β",
        title: "Snowman Without Snow",
      },
      {
        emoji: "βοΈ",
        title: "Comet",
      },
      {
        emoji: "π₯",
        title: "Fire",
      },
      {
        emoji: "π§",
        title: "Droplet",
      },
      {
        emoji: "π",
        title: "Water Wave",
      },
      {
        emoji: "π",
        title: "Christmas Tree",
      },
      {
        emoji: "β¨",
        title: "Sparkles",
      },
      {
        emoji: "π",
        title: "Tanabata Tree",
      },
      {
        emoji: "π",
        title: "Pine Decoration",
      },
    ],
    "food-drink": [
      {
        emoji: "π",
        title: "Grapes",
      },
      {
        emoji: "π",
        title: "Melon",
      },
      {
        emoji: "π",
        title: "Watermelon",
      },
      {
        emoji: "π",
        title: "Tangerine",
      },
      {
        emoji: "π",
        title: "Lemon",
      },
      {
        emoji: "π",
        title: "Banana",
      },
      {
        emoji: "π",
        title: "Pineapple",
      },
      {
        emoji: "π₯­",
        title: "Mango",
      },
      {
        emoji: "π",
        title: "Red Apple",
      },
      {
        emoji: "π",
        title: "Green Apple",
      },
      {
        emoji: "π",
        title: "Pear",
      },
      {
        emoji: "π",
        title: "Peach",
      },
      {
        emoji: "π",
        title: "Cherries",
      },
      {
        emoji: "π",
        title: "Strawberry",
      },
      {
        emoji: "π«",
        title: "Blueberries",
      },
      {
        emoji: "π₯",
        title: "Kiwi Fruit",
      },
      {
        emoji: "π",
        title: "Tomato",
      },
      {
        emoji: "π«",
        title: "Olive",
      },
      {
        emoji: "π₯₯",
        title: "Coconut",
      },
      {
        emoji: "π₯",
        title: "Avocado",
      },
      {
        emoji: "π",
        title: "Eggplant",
      },
      {
        emoji: "π₯",
        title: "Potato",
      },
      {
        emoji: "π₯",
        title: "Carrot",
      },
      {
        emoji: "π½",
        title: "Ear of Corn",
      },
      {
        emoji: "πΆοΈ",
        title: "Hot Pepper",
      },
      {
        emoji: "π«",
        title: "Bell Pepper",
      },
      {
        emoji: "π₯",
        title: "Cucumber",
      },
      {
        emoji: "π₯¬",
        title: "Leafy Green",
      },
      {
        emoji: "π₯¦",
        title: "Broccoli",
      },
      {
        emoji: "π§",
        title: "Garlic",
      },
      {
        emoji: "π§",
        title: "Onion",
      },
      {
        emoji: "π",
        title: "Mushroom",
      },
      {
        emoji: "π₯",
        title: "Peanuts",
      },
      {
        emoji: "π°",
        title: "Chestnut",
      },
      {
        emoji: "π",
        title: "Bread",
      },
      {
        emoji: "π₯",
        title: "Croissant",
      },
      {
        emoji: "π₯",
        title: "Baguette Bread",
      },
      {
        emoji: "π«",
        title: "Flatbread",
      },
      {
        emoji: "π₯¨",
        title: "Pretzel",
      },
      {
        emoji: "π₯―",
        title: "Bagel",
      },
      {
        emoji: "π₯",
        title: "Pancakes",
      },
      {
        emoji: "π§",
        title: "Waffle",
      },
      {
        emoji: "π§",
        title: "Cheese Wedge",
      },
      {
        emoji: "π",
        title: "Meat on Bone",
      },
      {
        emoji: "π",
        title: "Poultry Leg",
      },
      {
        emoji: "π₯©",
        title: "Cut of Meat",
      },
      {
        emoji: "π₯",
        title: "Bacon",
      },
      {
        emoji: "π",
        title: "Hamburger",
      },
      {
        emoji: "π",
        title: "French Fries",
      },
      {
        emoji: "π",
        title: "Pizza",
      },
      {
        emoji: "π­",
        title: "Hot Dog",
      },
      {
        emoji: "π₯ͺ",
        title: "Sandwich",
      },
      {
        emoji: "π?",
        title: "Taco",
      },
      {
        emoji: "π―",
        title: "Burrito",
      },
      {
        emoji: "π«",
        title: "Tamale",
      },
      {
        emoji: "π₯",
        title: "Stuffed Flatbread",
      },
      {
        emoji: "π§",
        title: "Falafel",
      },
      {
        emoji: "π₯",
        title: "Egg",
      },
      {
        emoji: "π³",
        title: "Cooking",
      },
      {
        emoji: "π₯",
        title: "Shallow Pan of Food",
      },
      {
        emoji: "π²",
        title: "Pot of Food",
      },
      {
        emoji: "π«",
        title: "Fondue",
      },
      {
        emoji: "π₯£",
        title: "Bowl with Spoon",
      },
      {
        emoji: "π₯",
        title: "Green Salad",
      },
      {
        emoji: "πΏ",
        title: "Popcorn",
      },
      {
        emoji: "π§",
        title: "Butter",
      },
      {
        emoji: "π§",
        title: "Salt",
      },
      {
        emoji: "π₯«",
        title: "Canned Food",
      },
      {
        emoji: "π±",
        title: "Bento Box",
      },
      {
        emoji: "π",
        title: "Rice Cracker",
      },
      {
        emoji: "π",
        title: "Rice Ball",
      },
      {
        emoji: "π",
        title: "Cooked Rice",
      },
      {
        emoji: "π",
        title: "Curry Rice",
      },
      {
        emoji: "π",
        title: "Steaming Bowl",
      },
      {
        emoji: "π",
        title: "Spaghetti",
      },
      {
        emoji: "π ",
        title: "Roasted Sweet Potato",
      },
      {
        emoji: "π’",
        title: "Oden",
      },
      {
        emoji: "π£",
        title: "Sushi",
      },
      {
        emoji: "π€",
        title: "Fried Shrimp",
      },
      {
        emoji: "π₯",
        title: "Fish Cake with Swirl",
      },
      {
        emoji: "π₯?",
        title: "Moon Cake",
      },
      {
        emoji: "π‘",
        title: "Dango",
      },
      {
        emoji: "π₯",
        title: "Dumpling",
      },
      {
        emoji: "π₯ ",
        title: "Fortune Cookie",
      },
      {
        emoji: "π₯‘",
        title: "Takeout Box",
      },
      {
        emoji: "π¦ͺ",
        title: "Oyster",
      },
      {
        emoji: "π¦",
        title: "Soft Ice Cream",
      },
      {
        emoji: "π§",
        title: "Shaved Ice",
      },
      {
        emoji: "π¨",
        title: "Ice Cream",
      },
      {
        emoji: "π©",
        title: "Doughnut",
      },
      {
        emoji: "πͺ",
        title: "Cookie",
      },
      {
        emoji: "π",
        title: "Birthday Cake",
      },
      {
        emoji: "π°",
        title: "Shortcake",
      },
      {
        emoji: "π§",
        title: "Cupcake",
      },
      {
        emoji: "π₯§",
        title: "Pie",
      },
      {
        emoji: "π«",
        title: "Chocolate Bar",
      },
      {
        emoji: "π¬",
        title: "Candy",
      },
      {
        emoji: "π­",
        title: "Lollipop",
      },
      {
        emoji: "π?",
        title: "Custard",
      },
      {
        emoji: "π―",
        title: "Honey Pot",
      },
      {
        emoji: "πΌ",
        title: "Baby Bottle",
      },
      {
        emoji: "π₯",
        title: "Glass of Milk",
      },
      {
        emoji: "β",
        title: "Hot Beverage",
      },
      {
        emoji: "π«",
        title: "Teapot",
      },
      {
        emoji: "π΅",
        title: "Teacup Without Handle",
      },
      {
        emoji: "πΆ",
        title: "Sake",
      },
      {
        emoji: "πΎ",
        title: "Bottle with Popping Cork",
      },
      {
        emoji: "π·",
        title: "Wine Glass",
      },
      {
        emoji: "πΈ",
        title: "Cocktail Glass",
      },
      {
        emoji: "πΉ",
        title: "Tropical Drink",
      },
      {
        emoji: "πΊ",
        title: "Beer Mug",
      },
      {
        emoji: "π»",
        title: "Clinking Beer Mugs",
      },
      {
        emoji: "π₯",
        title: "Clinking Glasses",
      },
      {
        emoji: "π₯",
        title: "Tumbler Glass",
      },
      {
        emoji: "π₯€",
        title: "Cup with Straw",
      },
      {
        emoji: "π§",
        title: "Bubble Tea",
      },
      {
        emoji: "π§",
        title: "Beverage Box",
      },
      {
        emoji: "π§",
        title: "Mate",
      },
      {
        emoji: "π§",
        title: "Ice",
      },
      {
        emoji: "π₯’",
        title: "Chopsticks",
      },
      {
        emoji: "π½οΈ",
        title: "Fork and Knife with Plate",
      },
      {
        emoji: "π΄",
        title: "Fork and Knife",
      },
      {
        emoji: "π₯",
        title: "Spoon",
      },
    ],
    activity: [
      {
        emoji: "π΄οΈ",
        title: "Person in Suit Levitating",
      },
      {
        emoji: "π§",
        title: "Person Climbing",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man Climbing",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman Climbing",
      },
      {
        emoji: "π€Ί",
        title: "Person Fencing",
      },
      {
        emoji: "π",
        title: "Horse Racing",
      },
      {
        emoji: "β·οΈ",
        title: "Skier",
      },
      {
        emoji: "π",
        title: "Snowboarder",
      },
      {
        emoji: "ποΈ",
        title: "Person Golfing",
      },
      {
        emoji: "ποΈββοΈ",
        title: "Man Golfing",
      },
      {
        emoji: "ποΈββοΈ",
        title: "Woman Golfing",
      },
      {
        emoji: "π",
        title: "Person Surfing",
      },
      {
        emoji: "πββοΈ",
        title: "Man Surfing",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Surfing",
      },
      {
        emoji: "π£",
        title: "Person Rowing Boat",
      },
      {
        emoji: "π£ββοΈ",
        title: "Man Rowing Boat",
      },
      {
        emoji: "π£ββοΈ",
        title: "Woman Rowing Boat",
      },
      {
        emoji: "π",
        title: "Person Swimming",
      },
      {
        emoji: "πββοΈ",
        title: "Man Swimming",
      },
      {
        emoji: "πββοΈ",
        title: "Woman Swimming",
      },
      {
        emoji: "βΉοΈ",
        title: "Person Bouncing Ball",
      },
      {
        emoji: "βΉοΈββοΈ",
        title: "Man Bouncing Ball",
      },
      {
        emoji: "βΉοΈββοΈ",
        title: "Woman Bouncing Ball",
      },
      {
        emoji: "ποΈ",
        title: "Person Lifting Weights",
      },
      {
        emoji: "ποΈββοΈ",
        title: "Man Lifting Weights",
      },
      {
        emoji: "ποΈββοΈ",
        title: "Woman Lifting Weights",
      },
      {
        emoji: "π΄",
        title: "Person Biking",
      },
      {
        emoji: "π΄ββοΈ",
        title: "Man Biking",
      },
      {
        emoji: "π΄ββοΈ",
        title: "Woman Biking",
      },
      {
        emoji: "π΅",
        title: "Person Mountain Biking",
      },
      {
        emoji: "π΅ββοΈ",
        title: "Man Mountain Biking",
      },
      {
        emoji: "π΅ββοΈ",
        title: "Woman Mountain Biking",
      },
      {
        emoji: "π€Έ",
        title: "Person Cartwheeling",
      },
      {
        emoji: "π€ΈββοΈ",
        title: "Man Cartwheeling",
      },
      {
        emoji: "π€ΈββοΈ",
        title: "Woman Cartwheeling",
      },
      {
        emoji: "π€Ό",
        title: "People Wrestling",
      },
      {
        emoji: "π€ΌββοΈ",
        title: "Men Wrestling",
      },
      {
        emoji: "π€ΌββοΈ",
        title: "Women Wrestling",
      },
      {
        emoji: "π€½",
        title: "Person Playing Water Polo",
      },
      {
        emoji: "π€½ββοΈ",
        title: "Man Playing Water Polo",
      },
      {
        emoji: "π€½ββοΈ",
        title: "Woman Playing Water Polo",
      },
      {
        emoji: "π€Ύ",
        title: "Person Playing Handball",
      },
      {
        emoji: "π€ΎββοΈ",
        title: "Man Playing Handball",
      },
      {
        emoji: "π€ΎββοΈ",
        title: "Woman Playing Handball",
      },
      {
        emoji: "π€Ή",
        title: "Person Juggling",
      },
      {
        emoji: "π€ΉββοΈ",
        title: "Man Juggling",
      },
      {
        emoji: "π€ΉββοΈ",
        title: "Woman Juggling",
      },
      {
        emoji: "π§",
        title: "Person in Lotus Position",
      },
      {
        emoji: "π§ββοΈ",
        title: "Man in Lotus Position",
      },
      {
        emoji: "π§ββοΈ",
        title: "Woman in Lotus Position",
      },
      {
        emoji: "πͺ",
        title: "Circus Tent",
      },
      {
        emoji: "πΉ",
        title: "Skateboard",
      },
      {
        emoji: "πΌ",
        title: "Roller Skate",
      },
      {
        emoji: "πΆ",
        title: "Canoe",
      },
      {
        emoji: "ποΈ",
        title: "Reminder Ribbon",
      },
      {
        emoji: "ποΈ",
        title: "Admission Tickets",
      },
      {
        emoji: "π«",
        title: "Ticket",
      },
      {
        emoji: "ποΈ",
        title: "Military Medal",
      },
      {
        emoji: "π",
        title: "Trophy",
      },
      {
        emoji: "π",
        title: "Sports Medal",
      },
      {
        emoji: "π₯",
        title: "1st Place Medal",
      },
      {
        emoji: "π₯",
        title: "2nd Place Medal",
      },
      {
        emoji: "π₯",
        title: "3rd Place Medal",
      },
      {
        emoji: "β½",
        title: "Soccer Ball",
      },
      {
        emoji: "βΎ",
        title: "Baseball",
      },
      {
        emoji: "π₯",
        title: "Softball",
      },
      {
        emoji: "π",
        title: "Basketball",
      },
      {
        emoji: "π",
        title: "Volleyball",
      },
      {
        emoji: "π",
        title: "American Football",
      },
      {
        emoji: "π",
        title: "Rugby Football",
      },
      {
        emoji: "πΎ",
        title: "Tennis",
      },
      {
        emoji: "π₯",
        title: "Flying Disc",
      },
      {
        emoji: "π³",
        title: "Bowling",
      },
      {
        emoji: "π",
        title: "Cricket Game",
      },
      {
        emoji: "π",
        title: "Field Hockey",
      },
      {
        emoji: "π",
        title: "Ice Hockey",
      },
      {
        emoji: "π₯",
        title: "Lacrosse",
      },
      {
        emoji: "π",
        title: "Ping Pong",
      },
      {
        emoji: "πΈ",
        title: "Badminton",
      },
      {
        emoji: "π₯",
        title: "Boxing Glove",
      },
      {
        emoji: "π₯",
        title: "Martial Arts Uniform",
      },
      {
        emoji: "π₯",
        title: "Goal Net",
      },
      {
        emoji: "β³",
        title: "Flag in Hole",
      },
      {
        emoji: "βΈοΈ",
        title: "Ice Skate",
      },
      {
        emoji: "π£",
        title: "Fishing Pole",
      },
      {
        emoji: "π½",
        title: "Running Shirt",
      },
      {
        emoji: "πΏ",
        title: "Skis",
      },
      {
        emoji: "π·",
        title: "Sled",
      },
      {
        emoji: "π₯",
        title: "Curling Stone",
      },
      {
        emoji: "π―",
        title: "Bullseye",
      },
      {
        emoji: "π±",
        title: "Pool 8 Ball",
      },
      {
        emoji: "π?",
        title: "Video Game",
      },
      {
        emoji: "π°",
        title: "Slot Machine",
      },
      {
        emoji: "π²",
        title: "Game Die",
      },
      {
        emoji: "π§©",
        title: "Puzzle Piece",
      },
      {
        emoji: "βοΈ",
        title: "Chess Pawn",
      },
      {
        emoji: "π­",
        title: "Performing Arts",
      },
      {
        emoji: "π¨",
        title: "Artist Palette",
      },
      {
        emoji: "π§΅",
        title: "Thread",
      },
      {
        emoji: "π§Ά",
        title: "Yarn",
      },
      {
        emoji: "πΌ",
        title: "Musical Score",
      },
      {
        emoji: "π€",
        title: "Microphone",
      },
      {
        emoji: "π§",
        title: "Headphone",
      },
      {
        emoji: "π·",
        title: "Saxophone",
      },
      {
        emoji: "πͺ",
        title: "Accordion",
      },
      {
        emoji: "πΈ",
        title: "Guitar",
      },
      {
        emoji: "πΉ",
        title: "Musical Keyboard",
      },
      {
        emoji: "πΊ",
        title: "Trumpet",
      },
      {
        emoji: "π»",
        title: "Violin",
      },
      {
        emoji: "π₯",
        title: "Drum",
      },
      {
        emoji: "πͺ",
        title: "Long Drum",
      },
      {
        emoji: "π¬",
        title: "Clapper Board",
      },
      {
        emoji: "πΉ",
        title: "Bow and Arrow",
      },
    ],
    "travel-places": [
      {
        emoji: "π£",
        title: "Person Rowing Boat",
      },
      {
        emoji: "πΎ",
        title: "Map of Japan",
      },
      {
        emoji: "ποΈ",
        title: "Snow-Capped Mountain",
      },
      {
        emoji: "β°οΈ",
        title: "Mountain",
      },
      {
        emoji: "π",
        title: "Volcano",
      },
      {
        emoji: "π»",
        title: "Mount Fuji",
      },
      {
        emoji: "ποΈ",
        title: "Camping",
      },
      {
        emoji: "ποΈ",
        title: "Beach with Umbrella",
      },
      {
        emoji: "ποΈ",
        title: "Desert",
      },
      {
        emoji: "ποΈ",
        title: "Desert Island",
      },
      {
        emoji: "ποΈ",
        title: "National Park",
      },
      {
        emoji: "ποΈ",
        title: "Stadium",
      },
      {
        emoji: "ποΈ",
        title: "Classical Building",
      },
      {
        emoji: "ποΈ",
        title: "Building Construction",
      },
      {
        emoji: "π",
        title: "Hut",
      },
      {
        emoji: "ποΈ",
        title: "Houses",
      },
      {
        emoji: "ποΈ",
        title: "Derelict House",
      },
      {
        emoji: "π ",
        title: "House",
      },
      {
        emoji: "π‘",
        title: "House with Garden",
      },
      {
        emoji: "π’",
        title: "Office Building",
      },
      {
        emoji: "π£",
        title: "Japanese Post Office",
      },
      {
        emoji: "π€",
        title: "Post Office",
      },
      {
        emoji: "π₯",
        title: "Hospital",
      },
      {
        emoji: "π¦",
        title: "Bank",
      },
      {
        emoji: "π¨",
        title: "Hotel",
      },
      {
        emoji: "π©",
        title: "Love Hotel",
      },
      {
        emoji: "πͺ",
        title: "Convenience Store",
      },
      {
        emoji: "π«",
        title: "School",
      },
      {
        emoji: "π¬",
        title: "Department Store",
      },
      {
        emoji: "π­",
        title: "Factory",
      },
      {
        emoji: "π―",
        title: "Japanese Castle",
      },
      {
        emoji: "π°",
        title: "Castle",
      },
      {
        emoji: "π",
        title: "Wedding",
      },
      {
        emoji: "πΌ",
        title: "Tokyo Tower",
      },
      {
        emoji: "π½",
        title: "Statue of Liberty",
      },
      {
        emoji: "βͺ",
        title: "Church",
      },
      {
        emoji: "π",
        title: "Mosque",
      },
      {
        emoji: "π",
        title: "Hindu Temple",
      },
      {
        emoji: "π",
        title: "Synagogue",
      },
      {
        emoji: "β©οΈ",
        title: "Shinto Shrine",
      },
      {
        emoji: "π",
        title: "Kaaba",
      },
      {
        emoji: "β²",
        title: "Fountain",
      },
      {
        emoji: "βΊ",
        title: "Tent",
      },
      {
        emoji: "π",
        title: "Foggy",
      },
      {
        emoji: "π",
        title: "Night with Stars",
      },
      {
        emoji: "ποΈ",
        title: "Cityscape",
      },
      {
        emoji: "π",
        title: "Sunrise Over Mountains",
      },
      {
        emoji: "π",
        title: "Sunrise",
      },
      {
        emoji: "π",
        title: "Cityscape at Dusk",
      },
      {
        emoji: "π",
        title: "Sunset",
      },
      {
        emoji: "π",
        title: "Bridge at Night",
      },
      {
        emoji: "π ",
        title: "Carousel Horse",
      },
      {
        emoji: "π‘",
        title: "Ferris Wheel",
      },
      {
        emoji: "π’",
        title: "Roller Coaster",
      },
      {
        emoji: "π",
        title: "Locomotive",
      },
      {
        emoji: "π",
        title: "Railway Car",
      },
      {
        emoji: "π",
        title: "High-Speed Train",
      },
      {
        emoji: "π",
        title: "Bullet Train",
      },
      {
        emoji: "π",
        title: "Train",
      },
      {
        emoji: "π",
        title: "Metro",
      },
      {
        emoji: "π",
        title: "Light Rail",
      },
      {
        emoji: "π",
        title: "Station",
      },
      {
        emoji: "π",
        title: "Tram",
      },
      {
        emoji: "π",
        title: "Monorail",
      },
      {
        emoji: "π",
        title: "Mountain Railway",
      },
      {
        emoji: "π",
        title: "Tram Car",
      },
      {
        emoji: "π",
        title: "Bus",
      },
      {
        emoji: "π",
        title: "Oncoming Bus",
      },
      {
        emoji: "π",
        title: "Trolleybus",
      },
      {
        emoji: "π",
        title: "Minibus",
      },
      {
        emoji: "π",
        title: "Ambulance",
      },
      {
        emoji: "π",
        title: "Fire Engine",
      },
      {
        emoji: "π",
        title: "Police Car",
      },
      {
        emoji: "π",
        title: "Oncoming Police Car",
      },
      {
        emoji: "π",
        title: "Taxi",
      },
      {
        emoji: "π",
        title: "Oncoming Taxi",
      },
      {
        emoji: "π",
        title: "Automobile",
      },
      {
        emoji: "π",
        title: "Oncoming Automobile",
      },
      {
        emoji: "π",
        title: "Sport Utility Vehicle",
      },
      {
        emoji: "π»",
        title: "Pickup Truck",
      },
      {
        emoji: "π",
        title: "Delivery Truck",
      },
      {
        emoji: "π",
        title: "Articulated Lorry",
      },
      {
        emoji: "π",
        title: "Tractor",
      },
      {
        emoji: "ποΈ",
        title: "Racing Car",
      },
      {
        emoji: "ποΈ",
        title: "Motorcycle",
      },
      {
        emoji: "π΅",
        title: "Motor Scooter",
      },
      {
        emoji: "πΊ",
        title: "Auto Rickshaw",
      },
      {
        emoji: "π²",
        title: "Bicycle",
      },
      {
        emoji: "π΄",
        title: "Kick Scooter",
      },
      {
        emoji: "π",
        title: "Bus Stop",
      },
      {
        emoji: "π£οΈ",
        title: "Motorway",
      },
      {
        emoji: "π€οΈ",
        title: "Railway Track",
      },
      {
        emoji: "β½",
        title: "Fuel Pump",
      },
      {
        emoji: "π¨",
        title: "Police Car Light",
      },
      {
        emoji: "π₯",
        title: "Horizontal Traffic Light",
      },
      {
        emoji: "π¦",
        title: "Vertical Traffic Light",
      },
      {
        emoji: "π§",
        title: "Construction",
      },
      {
        emoji: "β",
        title: "Anchor",
      },
      {
        emoji: "β΅",
        title: "Sailboat",
      },
      {
        emoji: "π€",
        title: "Speedboat",
      },
      {
        emoji: "π³οΈ",
        title: "Passenger Ship",
      },
      {
        emoji: "β΄οΈ",
        title: "Ferry",
      },
      {
        emoji: "π₯οΈ",
        title: "Motor Boat",
      },
      {
        emoji: "π’",
        title: "Ship",
      },
      {
        emoji: "βοΈ",
        title: "Airplane",
      },
      {
        emoji: "π©οΈ",
        title: "Small Airplane",
      },
      {
        emoji: "π«",
        title: "Airplane Departure",
      },
      {
        emoji: "π¬",
        title: "Airplane Arrival",
      },
      {
        emoji: "πͺ",
        title: "Parachute",
      },
      {
        emoji: "πΊ",
        title: "Seat",
      },
      {
        emoji: "π",
        title: "Helicopter",
      },
      {
        emoji: "π",
        title: "Suspension Railway",
      },
      {
        emoji: "π ",
        title: "Mountain Cableway",
      },
      {
        emoji: "π‘",
        title: "Aerial Tramway",
      },
      {
        emoji: "π°οΈ",
        title: "Satellite",
      },
      {
        emoji: "π",
        title: "Rocket",
      },
      {
        emoji: "πΈ",
        title: "Flying Saucer",
      },
      {
        emoji: "πͺ",
        title: "Ringed Planet",
      },
      {
        emoji: "π ",
        title: "Shooting Star",
      },
      {
        emoji: "π",
        title: "Milky Way",
      },
      {
        emoji: "β±οΈ",
        title: "Umbrella on Ground",
      },
      {
        emoji: "π",
        title: "Fireworks",
      },
      {
        emoji: "π",
        title: "Sparkler",
      },
      {
        emoji: "π",
        title: "Moon Viewing Ceremony",
      },
      {
        emoji: "π΄",
        title: "Yen Banknote",
      },
      {
        emoji: "π΅",
        title: "Dollar Banknote",
      },
      {
        emoji: "πΆ",
        title: "Euro Banknote",
      },
      {
        emoji: "π·",
        title: "Pound Banknote",
      },
      {
        emoji: "πΏ",
        title: "Moai",
      },
      {
        emoji: "π",
        title: "Passport Control",
      },
      {
        emoji: "π",
        title: "Customs",
      },
      {
        emoji: "π",
        title: "Baggage Claim",
      },
      {
        emoji: "π",
        title: "Left Luggage",
      },
    ],
    objects: [
      {
        emoji: "π",
        title: "Love Letter",
      },
      {
        emoji: "π³οΈ",
        title: "Hole",
      },
      {
        emoji: "π£",
        title: "Bomb",
      },
      {
        emoji: "π",
        title: "Person Taking Bath",
      },
      {
        emoji: "π",
        title: "Person in Bed",
      },
      {
        emoji: "πͺ",
        title: "Kitchen Knife",
      },
      {
        emoji: "πΊ",
        title: "Amphora",
      },
      {
        emoji: "πΊοΈ",
        title: "World Map",
      },
      {
        emoji: "π§­",
        title: "Compass",
      },
      {
        emoji: "π§±",
        title: "Brick",
      },
      {
        emoji: "π",
        title: "Barber Pole",
      },
      {
        emoji: "π¦½",
        title: "Manual Wheelchair",
      },
      {
        emoji: "π¦Ό",
        title: "Motorized Wheelchair",
      },
      {
        emoji: "π’οΈ",
        title: "Oil Drum",
      },
      {
        emoji: "ποΈ",
        title: "Bellhop Bell",
      },
      {
        emoji: "π§³",
        title: "Luggage",
      },
      {
        emoji: "β",
        title: "Hourglass Done",
      },
      {
        emoji: "β³",
        title: "Hourglass Not Done",
      },
      {
        emoji: "β",
        title: "Watch",
      },
      {
        emoji: "β°",
        title: "Alarm Clock",
      },
      {
        emoji: "β±οΈ",
        title: "Stopwatch",
      },
      {
        emoji: "β²οΈ",
        title: "Timer Clock",
      },
      {
        emoji: "π°οΈ",
        title: "Mantelpiece Clock",
      },
      {
        emoji: "π‘οΈ",
        title: "Thermometer",
      },
      {
        emoji: "β±οΈ",
        title: "Umbrella on Ground",
      },
      {
        emoji: "π§¨",
        title: "Firecracker",
      },
      {
        emoji: "π",
        title: "Balloon",
      },
      {
        emoji: "π",
        title: "Party Popper",
      },
      {
        emoji: "π",
        title: "Confetti Ball",
      },
      {
        emoji: "π",
        title: "Japanese Dolls",
      },
      {
        emoji: "π",
        title: "Carp Streamer",
      },
      {
        emoji: "π",
        title: "Wind Chime",
      },
      {
        emoji: "π§§",
        title: "Red Envelope",
      },
      {
        emoji: "π",
        title: "Ribbon",
      },
      {
        emoji: "π",
        title: "Wrapped Gift",
      },
      {
        emoji: "π€Ώ",
        title: "Diving Mask",
      },
      {
        emoji: "πͺ",
        title: "Yo-Yo",
      },
      {
        emoji: "πͺ",
        title: "Kite",
      },
      {
        emoji: "π?",
        title: "Crystal Ball",
      },
      {
        emoji: "πͺ",
        title: "Magic Wand",
      },
      {
        emoji: "π§Ώ",
        title: "Nazar Amulet",
      },
      {
        emoji: "πΉοΈ",
        title: "Joystick",
      },
      {
        emoji: "π§Έ",
        title: "Teddy Bear",
      },
      {
        emoji: "πͺ",
        title: "PiΓ±ata",
      },
      {
        emoji: "πͺ",
        title: "Nesting Dolls",
      },
      {
        emoji: "πΌοΈ",
        title: "Framed Picture",
      },
      {
        emoji: "π§΅",
        title: "Thread",
      },
      {
        emoji: "πͺ‘",
        title: "Sewing Needle",
      },
      {
        emoji: "π§Ά",
        title: "Yarn",
      },
      {
        emoji: "πͺ’",
        title: "Knot",
      },
      {
        emoji: "ποΈ",
        title: "Shopping Bags",
      },
      {
        emoji: "πΏ",
        title: "Prayer Beads",
      },
      {
        emoji: "π",
        title: "Gem Stone",
      },
      {
        emoji: "π―",
        title: "Postal Horn",
      },
      {
        emoji: "ποΈ",
        title: "Studio Microphone",
      },
      {
        emoji: "ποΈ",
        title: "Level Slider",
      },
      {
        emoji: "ποΈ",
        title: "Control Knobs",
      },
      {
        emoji: "π»",
        title: "Radio",
      },
      {
        emoji: "πͺ",
        title: "Banjo",
      },
      {
        emoji: "π±",
        title: "Mobile Phone",
      },
      {
        emoji: "π²",
        title: "Mobile Phone with Arrow",
      },
      {
        emoji: "βοΈ",
        title: "Telephone",
      },
      {
        emoji: "π",
        title: "Telephone Receiver",
      },
      {
        emoji: "π",
        title: "Pager",
      },
      {
        emoji: "π ",
        title: "Fax Machine",
      },
      {
        emoji: "π",
        title: "Battery",
      },
      {
        emoji: "π",
        title: "Electric Plug",
      },
      {
        emoji: "π»",
        title: "Laptop",
      },
      {
        emoji: "π₯οΈ",
        title: "Desktop Computer",
      },
      {
        emoji: "π¨οΈ",
        title: "Printer",
      },
      {
        emoji: "β¨οΈ",
        title: "Keyboard",
      },
      {
        emoji: "π±οΈ",
        title: "Computer Mouse",
      },
      {
        emoji: "π²οΈ",
        title: "Trackball",
      },
      {
        emoji: "π½",
        title: "Computer Disk",
      },
      {
        emoji: "πΎ",
        title: "Floppy Disk",
      },
      {
        emoji: "πΏ",
        title: "Optical Disk",
      },
      {
        emoji: "π",
        title: "DVD",
      },
      {
        emoji: "π§?",
        title: "Abacus",
      },
      {
        emoji: "π₯",
        title: "Movie Camera",
      },
      {
        emoji: "ποΈ",
        title: "Film Frames",
      },
      {
        emoji: "π½οΈ",
        title: "Film Projector",
      },
      {
        emoji: "πΊ",
        title: "Television",
      },
      {
        emoji: "π·",
        title: "Camera",
      },
      {
        emoji: "πΈ",
        title: "Camera with Flash",
      },
      {
        emoji: "πΉ",
        title: "Video Camera",
      },
      {
        emoji: "πΌ",
        title: "Videocassette",
      },
      {
        emoji: "π",
        title: "Magnifying Glass Tilted Left",
      },
      {
        emoji: "π",
        title: "Magnifying Glass Tilted Right",
      },
      {
        emoji: "π―οΈ",
        title: "Candle",
      },
      {
        emoji: "π‘",
        title: "Light Bulb",
      },
      {
        emoji: "π¦",
        title: "Flashlight",
      },
      {
        emoji: "π?",
        title: "Red Paper Lantern",
      },
      {
        emoji: "πͺ",
        title: "Diya Lamp",
      },
      {
        emoji: "π",
        title: "Notebook with Decorative Cover",
      },
      {
        emoji: "π",
        title: "Closed Book",
      },
      {
        emoji: "π",
        title: "Open Book",
      },
      {
        emoji: "π",
        title: "Green Book",
      },
      {
        emoji: "π",
        title: "Blue Book",
      },
      {
        emoji: "π",
        title: "Orange Book",
      },
      {
        emoji: "π",
        title: "Books",
      },
      {
        emoji: "π",
        title: "Notebook",
      },
      {
        emoji: "π",
        title: "Ledger",
      },
      {
        emoji: "π",
        title: "Page with Curl",
      },
      {
        emoji: "π",
        title: "Scroll",
      },
      {
        emoji: "π",
        title: "Page Facing Up",
      },
      {
        emoji: "π°",
        title: "Newspaper",
      },
      {
        emoji: "ποΈ",
        title: "Rolled-Up Newspaper",
      },
      {
        emoji: "π",
        title: "Bookmark Tabs",
      },
      {
        emoji: "π",
        title: "Bookmark",
      },
      {
        emoji: "π·οΈ",
        title: "Label",
      },
      {
        emoji: "π°",
        title: "Money Bag",
      },
      {
        emoji: "πͺ",
        title: "Coin",
      },
      {
        emoji: "π΄",
        title: "Yen Banknote",
      },
      {
        emoji: "π΅",
        title: "Dollar Banknote",
      },
      {
        emoji: "πΆ",
        title: "Euro Banknote",
      },
      {
        emoji: "π·",
        title: "Pound Banknote",
      },
      {
        emoji: "πΈ",
        title: "Money with Wings",
      },
      {
        emoji: "π³",
        title: "Credit Card",
      },
      {
        emoji: "π§Ύ",
        title: "Receipt",
      },
      {
        emoji: "βοΈ",
        title: "Envelope",
      },
      {
        emoji: "π§",
        title: "E-Mail",
      },
      {
        emoji: "π¨",
        title: "Incoming Envelope",
      },
      {
        emoji: "π©",
        title: "Envelope with Arrow",
      },
      {
        emoji: "π€",
        title: "Outbox Tray",
      },
      {
        emoji: "π₯",
        title: "Inbox Tray",
      },
      {
        emoji: "π¦",
        title: "Package",
      },
      {
        emoji: "π«",
        title: "Closed Mailbox with Raised Flag",
      },
      {
        emoji: "πͺ",
        title: "Closed Mailbox with Lowered Flag",
      },
      {
        emoji: "π¬",
        title: "Open Mailbox with Raised Flag",
      },
      {
        emoji: "π­",
        title: "Open Mailbox with Lowered Flag",
      },
      {
        emoji: "π?",
        title: "Postbox",
      },
      {
        emoji: "π³οΈ",
        title: "Ballot Box with Ballot",
      },
      {
        emoji: "βοΈ",
        title: "Pencil",
      },
      {
        emoji: "βοΈ",
        title: "Black Nib",
      },
      {
        emoji: "ποΈ",
        title: "Fountain Pen",
      },
      {
        emoji: "ποΈ",
        title: "Pen",
      },
      {
        emoji: "ποΈ",
        title: "Paintbrush",
      },
      {
        emoji: "ποΈ",
        title: "Crayon",
      },
      {
        emoji: "π",
        title: "Memo",
      },
      {
        emoji: "π",
        title: "File Folder",
      },
      {
        emoji: "π",
        title: "Open File Folder",
      },
      {
        emoji: "ποΈ",
        title: "Card Index Dividers",
      },
      {
        emoji: "π",
        title: "Calendar",
      },
      {
        emoji: "π",
        title: "Tear-Off Calendar",
      },
      {
        emoji: "ποΈ",
        title: "Spiral Notepad",
      },
      {
        emoji: "ποΈ",
        title: "Spiral Calendar",
      },
      {
        emoji: "π",
        title: "Card Index",
      },
      {
        emoji: "π",
        title: "Chart Increasing",
      },
      {
        emoji: "π",
        title: "Chart Decreasing",
      },
      {
        emoji: "π",
        title: "Bar Chart",
      },
      {
        emoji: "π",
        title: "Clipboard",
      },
      {
        emoji: "π",
        title: "Pushpin",
      },
      {
        emoji: "π",
        title: "Round Pushpin",
      },
      {
        emoji: "π",
        title: "Paperclip",
      },
      {
        emoji: "ποΈ",
        title: "Linked Paperclips",
      },
      {
        emoji: "π",
        title: "Straight Ruler",
      },
      {
        emoji: "π",
        title: "Triangular Ruler",
      },
      {
        emoji: "βοΈ",
        title: "Scissors",
      },
      {
        emoji: "ποΈ",
        title: "Card File Box",
      },
      {
        emoji: "ποΈ",
        title: "File Cabinet",
      },
      {
        emoji: "ποΈ",
        title: "Wastebasket",
      },
      {
        emoji: "π",
        title: "Locked",
      },
      {
        emoji: "π",
        title: "Unlocked",
      },
      {
        emoji: "π",
        title: "Locked with Pen",
      },
      {
        emoji: "π",
        title: "Locked with Key",
      },
      {
        emoji: "π",
        title: "Key",
      },
      {
        emoji: "ποΈ",
        title: "Old Key",
      },
      {
        emoji: "π¨",
        title: "Hammer",
      },
      {
        emoji: "πͺ",
        title: "Axe",
      },
      {
        emoji: "βοΈ",
        title: "Pick",
      },
      {
        emoji: "βοΈ",
        title: "Hammer and Pick",
      },
      {
        emoji: "π οΈ",
        title: "Hammer and Wrench",
      },
      {
        emoji: "π‘οΈ",
        title: "Dagger",
      },
      {
        emoji: "βοΈ",
        title: "Crossed Swords",
      },
      {
        emoji: "π«",
        title: "Water Pistol",
      },
      {
        emoji: "πͺ",
        title: "Boomerang",
      },
      {
        emoji: "π‘οΈ",
        title: "Shield",
      },
      {
        emoji: "πͺ",
        title: "Carpentry Saw",
      },
      {
        emoji: "π§",
        title: "Wrench",
      },
      {
        emoji: "πͺ",
        title: "Screwdriver",
      },
      {
        emoji: "π©",
        title: "Nut and Bolt",
      },
      {
        emoji: "βοΈ",
        title: "Gear",
      },
      {
        emoji: "ποΈ",
        title: "Clamp",
      },
      {
        emoji: "βοΈ",
        title: "Balance Scale",
      },
      {
        emoji: "π¦―",
        title: "White Cane",
      },
      {
        emoji: "π",
        title: "Link",
      },
      {
        emoji: "βοΈ",
        title: "Chains",
      },
      {
        emoji: "πͺ",
        title: "Hook",
      },
      {
        emoji: "π§°",
        title: "Toolbox",
      },
      {
        emoji: "π§²",
        title: "Magnet",
      },
      {
        emoji: "πͺ",
        title: "Ladder",
      },
      {
        emoji: "βοΈ",
        title: "Alembic",
      },
      {
        emoji: "π§ͺ",
        title: "Test Tube",
      },
      {
        emoji: "π§«",
        title: "Petri Dish",
      },
      {
        emoji: "π§¬",
        title: "DNA",
      },
      {
        emoji: "π¬",
        title: "Microscope",
      },
      {
        emoji: "π­",
        title: "Telescope",
      },
      {
        emoji: "π‘",
        title: "Satellite Antenna",
      },
      {
        emoji: "π",
        title: "Syringe",
      },
      {
        emoji: "π©Έ",
        title: "Drop of Blood",
      },
      {
        emoji: "π",
        title: "Pill",
      },
      {
        emoji: "π©Ή",
        title: "Adhesive Bandage",
      },
      {
        emoji: "π©Ί",
        title: "Stethoscope",
      },
      {
        emoji: "πͺ",
        title: "Door",
      },
      {
        emoji: "πͺ",
        title: "Mirror",
      },
      {
        emoji: "πͺ",
        title: "Window",
      },
      {
        emoji: "ποΈ",
        title: "Bed",
      },
      {
        emoji: "ποΈ",
        title: "Couch and Lamp",
      },
      {
        emoji: "πͺ",
        title: "Chair",
      },
      {
        emoji: "π½",
        title: "Toilet",
      },
      {
        emoji: "πͺ ",
        title: "Plunger",
      },
      {
        emoji: "πΏ",
        title: "Shower",
      },
      {
        emoji: "π",
        title: "Bathtub",
      },
      {
        emoji: "πͺ€",
        title: "Mouse Trap",
      },
      {
        emoji: "πͺ",
        title: "Razor",
      },
      {
        emoji: "π§΄",
        title: "Lotion Bottle",
      },
      {
        emoji: "π§·",
        title: "Safety Pin",
      },
      {
        emoji: "π§Ή",
        title: "Broom",
      },
      {
        emoji: "π§Ί",
        title: "Basket",
      },
      {
        emoji: "π§»",
        title: "Roll of Paper",
      },
      {
        emoji: "πͺ£",
        title: "Bucket",
      },
      {
        emoji: "π§Ό",
        title: "Soap",
      },
      {
        emoji: "πͺ₯",
        title: "Toothbrush",
      },
      {
        emoji: "π§½",
        title: "Sponge",
      },
      {
        emoji: "π§―",
        title: "Fire Extinguisher",
      },
      {
        emoji: "π",
        title: "Shopping Cart",
      },
      {
        emoji: "π¬",
        title: "Cigarette",
      },
      {
        emoji: "β°οΈ",
        title: "Coffin",
      },
      {
        emoji: "πͺ¦",
        title: "Headstone",
      },
      {
        emoji: "β±οΈ",
        title: "Funeral Urn",
      },
      {
        emoji: "πΏ",
        title: "Moai",
      },
      {
        emoji: "πͺ§",
        title: "Placard",
      },
      {
        emoji: "π°",
        title: "Potable Water",
      },
    ],
    symbols: [
      {
        emoji: "π",
        title: "Heart with Arrow",
      },
      {
        emoji: "π",
        title: "Heart with Ribbon",
      },
      {
        emoji: "π",
        title: "Sparkling Heart",
      },
      {
        emoji: "π",
        title: "Growing Heart",
      },
      {
        emoji: "π",
        title: "Beating Heart",
      },
      {
        emoji: "π",
        title: "Revolving Hearts",
      },
      {
        emoji: "π",
        title: "Two Hearts",
      },
      {
        emoji: "π",
        title: "Heart Decoration",
      },
      {
        emoji: "β£οΈ",
        title: "Heart Exclamation",
      },
      {
        emoji: "π",
        title: "Broken Heart",
      },
      {
        emoji: "β€οΈβπ₯",
        title: "Heart on Fire",
      },
      {
        emoji: "β€οΈβπ©Ή",
        title: "Mending Heart",
      },
      {
        emoji: "β€οΈ",
        title: "Red Heart",
      },
      {
        emoji: "π§‘",
        title: "Orange Heart",
      },
      {
        emoji: "π",
        title: "Yellow Heart",
      },
      {
        emoji: "π",
        title: "Green Heart",
      },
      {
        emoji: "π",
        title: "Blue Heart",
      },
      {
        emoji: "π",
        title: "Purple Heart",
      },
      {
        emoji: "π€",
        title: "Brown Heart",
      },
      {
        emoji: "π€",
        title: "Black Heart",
      },
      {
        emoji: "π€",
        title: "White Heart",
      },
      {
        emoji: "π―",
        title: "Hundred Points",
      },
      {
        emoji: "π’",
        title: "Anger Symbol",
      },
      {
        emoji: "π¬",
        title: "Speech Balloon",
      },
      {
        emoji: "ποΈβπ¨οΈ",
        title: "Eye in Speech Bubble",
      },
      {
        emoji: "π¨οΈ",
        title: "Left Speech Bubble",
      },
      {
        emoji: "π―οΈ",
        title: "Right Anger Bubble",
      },
      {
        emoji: "π­",
        title: "Thought Balloon",
      },
      {
        emoji: "π€",
        title: "Zzz",
      },
      {
        emoji: "π?",
        title: "White Flower",
      },
      {
        emoji: "β¨οΈ",
        title: "Hot Springs",
      },
      {
        emoji: "π",
        title: "Barber Pole",
      },
      {
        emoji: "π",
        title: "Stop Sign",
      },
      {
        emoji: "π",
        title: "Twelve OβClock",
      },
      {
        emoji: "π§",
        title: "Twelve-Thirty",
      },
      {
        emoji: "π",
        title: "One OβClock",
      },
      {
        emoji: "π",
        title: "One-Thirty",
      },
      {
        emoji: "π",
        title: "Two OβClock",
      },
      {
        emoji: "π",
        title: "Two-Thirty",
      },
      {
        emoji: "π",
        title: "Three OβClock",
      },
      {
        emoji: "π",
        title: "Three-Thirty",
      },
      {
        emoji: "π",
        title: "Four OβClock",
      },
      {
        emoji: "π",
        title: "Four-Thirty",
      },
      {
        emoji: "π",
        title: "Five OβClock",
      },
      {
        emoji: "π ",
        title: "Five-Thirty",
      },
      {
        emoji: "π",
        title: "Six OβClock",
      },
      {
        emoji: "π‘",
        title: "Six-Thirty",
      },
      {
        emoji: "π",
        title: "Seven OβClock",
      },
      {
        emoji: "π’",
        title: "Seven-Thirty",
      },
      {
        emoji: "π",
        title: "Eight OβClock",
      },
      {
        emoji: "π£",
        title: "Eight-Thirty",
      },
      {
        emoji: "π",
        title: "Nine OβClock",
      },
      {
        emoji: "π€",
        title: "Nine-Thirty",
      },
      {
        emoji: "π",
        title: "Ten OβClock",
      },
      {
        emoji: "π₯",
        title: "Ten-Thirty",
      },
      {
        emoji: "π",
        title: "Eleven OβClock",
      },
      {
        emoji: "π¦",
        title: "Eleven-Thirty",
      },
      {
        emoji: "π",
        title: "Cyclone",
      },
      {
        emoji: "β οΈ",
        title: "Spade Suit",
      },
      {
        emoji: "β₯οΈ",
        title: "Heart Suit",
      },
      {
        emoji: "β¦οΈ",
        title: "Diamond Suit",
      },
      {
        emoji: "β£οΈ",
        title: "Club Suit",
      },
      {
        emoji: "π",
        title: "Joker",
      },
      {
        emoji: "π",
        title: "Mahjong Red Dragon",
      },
      {
        emoji: "π΄",
        title: "Flower Playing Cards",
      },
      {
        emoji: "π",
        title: "Muted Speaker",
      },
      {
        emoji: "π",
        title: "Speaker Low Volume",
      },
      {
        emoji: "π",
        title: "Speaker Medium Volume",
      },
      {
        emoji: "π",
        title: "Speaker High Volume",
      },
      {
        emoji: "π’",
        title: "Loudspeaker",
      },
      {
        emoji: "π£",
        title: "Megaphone",
      },
      {
        emoji: "π―",
        title: "Postal Horn",
      },
      {
        emoji: "π",
        title: "Bell",
      },
      {
        emoji: "π",
        title: "Bell with Slash",
      },
      {
        emoji: "π΅",
        title: "Musical Note",
      },
      {
        emoji: "πΆ",
        title: "Musical Notes",
      },
      {
        emoji: "πΉ",
        title: "Chart Increasing with Yen",
      },
      {
        emoji: "π",
        title: "Elevator",
      },
      {
        emoji: "π§",
        title: "ATM Sign",
      },
      {
        emoji: "π?",
        title: "Litter in Bin Sign",
      },
      {
        emoji: "π°",
        title: "Potable Water",
      },
      {
        emoji: "βΏ",
        title: "Wheelchair Symbol",
      },
      {
        emoji: "πΉ",
        title: "Menβs Room",
      },
      {
        emoji: "πΊ",
        title: "Womenβs Room",
      },
      {
        emoji: "π»",
        title: "Restroom",
      },
      {
        emoji: "πΌ",
        title: "Baby Symbol",
      },
      {
        emoji: "πΎ",
        title: "Water Closet",
      },
      {
        emoji: "β οΈ",
        title: "Warning",
      },
      {
        emoji: "πΈ",
        title: "Children Crossing",
      },
      {
        emoji: "β",
        title: "No Entry",
      },
      {
        emoji: "π«",
        title: "Prohibited",
      },
      {
        emoji: "π³",
        title: "No Bicycles",
      },
      {
        emoji: "π­",
        title: "No Smoking",
      },
      {
        emoji: "π―",
        title: "No Littering",
      },
      {
        emoji: "π±",
        title: "Non-Potable Water",
      },
      {
        emoji: "π·",
        title: "No Pedestrians",
      },
      {
        emoji: "π΅",
        title: "No Mobile Phones",
      },
      {
        emoji: "π",
        title: "No One Under Eighteen",
      },
      {
        emoji: "β’οΈ",
        title: "Radioactive",
      },
      {
        emoji: "β£οΈ",
        title: "Biohazard",
      },
      {
        emoji: "β¬οΈ",
        title: "Up Arrow",
      },
      {
        emoji: "βοΈ",
        title: "Up-Right Arrow",
      },
      {
        emoji: "β‘οΈ",
        title: "Right Arrow",
      },
      {
        emoji: "βοΈ",
        title: "Down-Right Arrow",
      },
      {
        emoji: "β¬οΈ",
        title: "Down Arrow",
      },
      {
        emoji: "βοΈ",
        title: "Down-Left Arrow",
      },
      {
        emoji: "β¬οΈ",
        title: "Left Arrow",
      },
      {
        emoji: "βοΈ",
        title: "Up-Left Arrow",
      },
      {
        emoji: "βοΈ",
        title: "Up-Down Arrow",
      },
      {
        emoji: "βοΈ",
        title: "Left-Right Arrow",
      },
      {
        emoji: "β©οΈ",
        title: "Right Arrow Curving Left",
      },
      {
        emoji: "βͺοΈ",
        title: "Left Arrow Curving Right",
      },
      {
        emoji: "β€΄οΈ",
        title: "Right Arrow Curving Up",
      },
      {
        emoji: "β€΅οΈ",
        title: "Right Arrow Curving Down",
      },
      {
        emoji: "π",
        title: "Clockwise Vertical Arrows",
      },
      {
        emoji: "π",
        title: "Counterclockwise Arrows Button",
      },
      {
        emoji: "π",
        title: "Back Arrow",
      },
      {
        emoji: "π",
        title: "End Arrow",
      },
      {
        emoji: "π",
        title: "On! Arrow",
      },
      {
        emoji: "π",
        title: "Soon Arrow",
      },
      {
        emoji: "π",
        title: "Top Arrow",
      },
      {
        emoji: "π",
        title: "Place of Worship",
      },
      {
        emoji: "βοΈ",
        title: "Atom Symbol",
      },
      {
        emoji: "ποΈ",
        title: "Om",
      },
      {
        emoji: "β‘οΈ",
        title: "Star of David",
      },
      {
        emoji: "βΈοΈ",
        title: "Wheel of Dharma",
      },
      {
        emoji: "β―οΈ",
        title: "Yin Yang",
      },
      {
        emoji: "βοΈ",
        title: "Latin Cross",
      },
      {
        emoji: "β¦οΈ",
        title: "Orthodox Cross",
      },
      {
        emoji: "βͺοΈ",
        title: "Star and Crescent",
      },
      {
        emoji: "β?οΈ",
        title: "Peace Symbol",
      },
      {
        emoji: "π",
        title: "Menorah",
      },
      {
        emoji: "π―",
        title: "Dotted Six-Pointed Star",
      },
      {
        emoji: "β",
        title: "Aries",
      },
      {
        emoji: "β",
        title: "Taurus",
      },
      {
        emoji: "β",
        title: "Gemini",
      },
      {
        emoji: "β",
        title: "Cancer",
      },
      {
        emoji: "β",
        title: "Leo",
      },
      {
        emoji: "β",
        title: "Virgo",
      },
      {
        emoji: "β",
        title: "Libra",
      },
      {
        emoji: "β",
        title: "Scorpio",
      },
      {
        emoji: "β",
        title: "Sagittarius",
      },
      {
        emoji: "β",
        title: "Capricorn",
      },
      {
        emoji: "β",
        title: "Aquarius",
      },
      {
        emoji: "β",
        title: "Pisces",
      },
      {
        emoji: "β",
        title: "Ophiuchus",
      },
      {
        emoji: "π",
        title: "Shuffle Tracks Button",
      },
      {
        emoji: "π",
        title: "Repeat Button",
      },
      {
        emoji: "π",
        title: "Repeat Single Button",
      },
      {
        emoji: "βΆοΈ",
        title: "Play Button",
      },
      {
        emoji: "β©",
        title: "Fast-Forward Button",
      },
      {
        emoji: "β­οΈ",
        title: "Next Track Button",
      },
      {
        emoji: "β―οΈ",
        title: "Play or Pause Button",
      },
      {
        emoji: "βοΈ",
        title: "Reverse Button",
      },
      {
        emoji: "βͺ",
        title: "Fast Reverse Button",
      },
      {
        emoji: "β?οΈ",
        title: "Last Track Button",
      },
      {
        emoji: "πΌ",
        title: "Upwards Button",
      },
      {
        emoji: "β«",
        title: "Fast Up Button",
      },
      {
        emoji: "π½",
        title: "Downwards Button",
      },
      {
        emoji: "β¬",
        title: "Fast Down Button",
      },
      {
        emoji: "βΈοΈ",
        title: "Pause Button",
      },
      {
        emoji: "βΉοΈ",
        title: "Stop Button",
      },
      {
        emoji: "βΊοΈ",
        title: "Record Button",
      },
      {
        emoji: "βοΈ",
        title: "Eject Button",
      },
      {
        emoji: "π¦",
        title: "Cinema",
      },
      {
        emoji: "π",
        title: "Dim Button",
      },
      {
        emoji: "π",
        title: "Bright Button",
      },
      {
        emoji: "πΆ",
        title: "Antenna Bars",
      },
      {
        emoji: "π³",
        title: "Vibration Mode",
      },
      {
        emoji: "π΄",
        title: "Mobile Phone Off",
      },
      {
        emoji: "βοΈ",
        title: "Female Sign",
      },
      {
        emoji: "βοΈ",
        title: "Male Sign",
      },
      {
        emoji: "βοΈ",
        title: "Multiply",
      },
      {
        emoji: "β",
        title: "Plus",
      },
      {
        emoji: "β",
        title: "Minus",
      },
      {
        emoji: "β",
        title: "Divide",
      },
      {
        emoji: "βΎοΈ",
        title: "Infinity",
      },
      {
        emoji: "βΌοΈ",
        title: "βΌ Double Exclamation Mark",
      },
      {
        emoji: "βοΈ",
        title: "β Exclamation Question Mark",
      },
      {
        emoji: "β",
        title: "Red Question Mark",
      },
      {
        emoji: "β",
        title: "White Question Mark",
      },
      {
        emoji: "β",
        title: "White Exclamation Mark",
      },
      {
        emoji: "β",
        title: "Red Exclamation Mark",
      },
      {
        emoji: "γ°οΈ",
        title: "γ° Wavy Dash",
      },
      {
        emoji: "π±",
        title: "Currency Exchange",
      },
      {
        emoji: "π²",
        title: "Heavy Dollar Sign",
      },
      {
        emoji: "βοΈ",
        title: "Medical Symbol",
      },
      {
        emoji: "β»οΈ",
        title: "Recycling Symbol",
      },
      {
        emoji: "βοΈ",
        title: "Fleur-de-lis",
      },
      {
        emoji: "π±",
        title: "Trident Emblem",
      },
      {
        emoji: "π",
        title: "Name Badge",
      },
      {
        emoji: "π°",
        title: "Japanese Symbol for Beginner",
      },
      {
        emoji: "β­",
        title: "Hollow Red Circle",
      },
      {
        emoji: "β",
        title: "Check Mark Button",
      },
      {
        emoji: "βοΈ",
        title: "Check Box with Check",
      },
      {
        emoji: "βοΈ",
        title: "Check Mark",
      },
      {
        emoji: "β",
        title: "Cross Mark",
      },
      {
        emoji: "β",
        title: "Cross Mark Button",
      },
      {
        emoji: "β°",
        title: "Curly Loop",
      },
      {
        emoji: "βΏ",
        title: "Double Curly Loop",
      },
      {
        emoji: "γ½οΈ",
        title: "γ½ Part Alternation Mark",
      },
      {
        emoji: "β³οΈ",
        title: "Eight-Spoked Asterisk",
      },
      {
        emoji: "β΄οΈ",
        title: "Eight-Pointed Star",
      },
      {
        emoji: "βοΈ",
        title: "Sparkle",
      },
      {
        emoji: "Β©οΈ",
        title: "Copyright",
      },
      {
        emoji: "Β?οΈ",
        title: "Registered",
      },
      {
        emoji: "β’οΈ",
        title: "Trade Mark",
      },
      {
        emoji: "#οΈβ£",
        title: "# Keycap Number Sign",
      },
      {
        emoji: "*οΈβ£",
        title: "* Keycap Asterisk",
      },
      {
        emoji: "0οΈβ£",
        title: "0 Keycap Digit Zero",
      },
      {
        emoji: "1οΈβ£",
        title: "1 Keycap Digit One",
      },
      {
        emoji: "2οΈβ£",
        title: "2 Keycap Digit Two",
      },
      {
        emoji: "3οΈβ£",
        title: "3 Keycap Digit Three",
      },
      {
        emoji: "4οΈβ£",
        title: "4 Keycap Digit Four",
      },
      {
        emoji: "5οΈβ£",
        title: "5 Keycap Digit Five",
      },
      {
        emoji: "6οΈβ£",
        title: "6 Keycap Digit Six",
      },
      {
        emoji: "7οΈβ£",
        title: "7 Keycap Digit Seven",
      },
      {
        emoji: "8οΈβ£",
        title: "8 Keycap Digit Eight",
      },
      {
        emoji: "9οΈβ£",
        title: "9 Keycap Digit Nine",
      },
      {
        emoji: "π",
        title: "Keycap: 10",
      },
      {
        emoji: "π ",
        title: "Input Latin Uppercase",
      },
      {
        emoji: "π‘",
        title: "Input Latin Lowercase",
      },
      {
        emoji: "π’",
        title: "Input Numbers",
      },
      {
        emoji: "π£",
        title: "Input Symbols",
      },
      {
        emoji: "π€",
        title: "Input Latin Letters",
      },
      {
        emoji: "π°οΈ",
        title: "A Button (Blood Type)",
      },
      {
        emoji: "π",
        title: "AB Button (Blood Type)",
      },
      {
        emoji: "π±οΈ",
        title: "B Button (Blood Type)",
      },
      {
        emoji: "π",
        title: "CL Button",
      },
      {
        emoji: "π",
        title: "Cool Button",
      },
      {
        emoji: "π",
        title: "Free Button",
      },
      {
        emoji: "βΉοΈ",
        title: "βΉ Information",
      },
      {
        emoji: "π",
        title: "ID Button",
      },
      {
        emoji: "βοΈ",
        title: "Circled M",
      },
      {
        emoji: "π",
        title: "New Button",
      },
      {
        emoji: "π",
        title: "NG Button",
      },
      {
        emoji: "πΎοΈ",
        title: "O Button (Blood Type)",
      },
      {
        emoji: "π",
        title: "OK Button",
      },
      {
        emoji: "πΏοΈ",
        title: "P Button",
      },
      {
        emoji: "π",
        title: "SOS Button",
      },
      {
        emoji: "π",
        title: "Up! Button",
      },
      {
        emoji: "π",
        title: "Vs Button",
      },
      {
        emoji: "π",
        title: "Japanese βHereβ Button",
      },
      {
        emoji: "ποΈ",
        title: "Japanese βService Chargeβ Button",
      },
      {
        emoji: "π·οΈ",
        title: "Japanese βMonthly Amountβ Button",
      },
      {
        emoji: "πΆ",
        title: "Japanese βNot Free of Chargeβ Button",
      },
      {
        emoji: "π―",
        title: "Japanese βReservedβ Button",
      },
      {
        emoji: "π",
        title: "Japanese βBargainβ Button",
      },
      {
        emoji: "πΉ",
        title: "Japanese βDiscountβ Button",
      },
      {
        emoji: "π",
        title: "Japanese βFree of Chargeβ Button",
      },
      {
        emoji: "π²",
        title: "Japanese βProhibitedβ Button",
      },
      {
        emoji: "π",
        title: "Japanese βAcceptableβ Button",
      },
      {
        emoji: "πΈ",
        title: "Japanese βApplicationβ Button",
      },
      {
        emoji: "π΄",
        title: "Japanese βPassing Gradeβ Button",
      },
      {
        emoji: "π³",
        title: "Japanese βVacancyβ Button",
      },
      {
        emoji: "γοΈ",
        title: "Japanese βCongratulationsβ Button",
      },
      {
        emoji: "γοΈ",
        title: "Japanese βSecretβ Button",
      },
      {
        emoji: "πΊ",
        title: "Japanese βOpen for Businessβ Button",
      },
      {
        emoji: "π΅",
        title: "Japanese βNo Vacancyβ Button",
      },
      {
        emoji: "π΄",
        title: "Red Circle",
      },
      {
        emoji: "π ",
        title: "Orange Circle",
      },
      {
        emoji: "π‘",
        title: "Yellow Circle",
      },
      {
        emoji: "π’",
        title: "Green Circle",
      },
      {
        emoji: "π΅",
        title: "Blue Circle",
      },
      {
        emoji: "π£",
        title: "Purple Circle",
      },
      {
        emoji: "π€",
        title: "Brown Circle",
      },
      {
        emoji: "β«",
        title: "Black Circle",
      },
      {
        emoji: "βͺ",
        title: "White Circle",
      },
      {
        emoji: "π₯",
        title: "Red Square",
      },
      {
        emoji: "π§",
        title: "Orange Square",
      },
      {
        emoji: "π¨",
        title: "Yellow Square",
      },
      {
        emoji: "π©",
        title: "Green Square",
      },
      {
        emoji: "π¦",
        title: "Blue Square",
      },
      {
        emoji: "πͺ",
        title: "Purple Square",
      },
      {
        emoji: "π«",
        title: "Brown Square",
      },
      {
        emoji: "β¬",
        title: "Black Large Square",
      },
      {
        emoji: "β¬",
        title: "White Large Square",
      },
      {
        emoji: "βΌοΈ",
        title: "Black Medium Square",
      },
      {
        emoji: "β»οΈ",
        title: "White Medium Square",
      },
      {
        emoji: "βΎ",
        title: "Black Medium-Small Square",
      },
      {
        emoji: "β½",
        title: "White Medium-Small Square",
      },
      {
        emoji: "βͺοΈ",
        title: "Black Small Square",
      },
      {
        emoji: "β«οΈ",
        title: "White Small Square",
      },
      {
        emoji: "πΆ",
        title: "Large Orange Diamond",
      },
      {
        emoji: "π·",
        title: "Large Blue Diamond",
      },
      {
        emoji: "πΈ",
        title: "Small Orange Diamond",
      },
      {
        emoji: "πΉ",
        title: "Small Blue Diamond",
      },
      {
        emoji: "πΊ",
        title: "Red Triangle Pointed Up",
      },
      {
        emoji: "π»",
        title: "Red Triangle Pointed Down",
      },
      {
        emoji: "π ",
        title: "Diamond with a Dot",
      },
      {
        emoji: "π",
        title: "Radio Button",
      },
      {
        emoji: "π³",
        title: "White Square Button",
      },
      {
        emoji: "π²",
        title: "Black Square Button",
      },
    ],
    flags: [
      {
        emoji: "π",
        title: "Chequered Flag",
      },
      {
        emoji: "π©",
        title: "Triangular Flag",
      },
      {
        emoji: "π",
        title: "Crossed Flags",
      },
      {
        emoji: "π΄",
        title: "Black Flag",
      },
      {
        emoji: "π³οΈ",
        title: "White Flag",
      },
      {
        emoji: "π³οΈβπ",
        title: "Rainbow Flag",
      },
      {
        emoji: "π³οΈββ§οΈ",
        title: "Transgender Flag",
      },
      {
        emoji: "π΄ββ οΈ",
        title: "Pirate Flag",
      },
      {
        emoji: "π¦π¨",
        title: "Flag: Ascension Island",
      },
      {
        emoji: "π¦π©",
        title: "Flag: Andorra",
      },
      {
        emoji: "π¦πͺ",
        title: "Flag: United Arab Emirates",
      },
      {
        emoji: "π¦π«",
        title: "Flag: Afghanistan",
      },
      {
        emoji: "π¦π¬",
        title: "Flag: Antigua & Barbuda",
      },
      {
        emoji: "π¦π?",
        title: "Flag: Anguilla",
      },
      {
        emoji: "π¦π±",
        title: "Flag: Albania",
      },
      {
        emoji: "π¦π²",
        title: "Flag: Armenia",
      },
      {
        emoji: "π¦π΄",
        title: "Flag: Angola",
      },
      {
        emoji: "π¦πΆ",
        title: "Flag: Antarctica",
      },
      {
        emoji: "π¦π·",
        title: "Flag: Argentina",
      },
      {
        emoji: "π¦πΈ",
        title: "Flag: American Samoa",
      },
      {
        emoji: "π¦πΉ",
        title: "Flag: Austria",
      },
      {
        emoji: "π¦πΊ",
        title: "Flag: Australia",
      },
      {
        emoji: "π¦πΌ",
        title: "Flag: Aruba",
      },
      {
        emoji: "π¦π½",
        title: "Flag: Γland Islands",
      },
      {
        emoji: "π¦πΏ",
        title: "Flag: Azerbaijan",
      },
      {
        emoji: "π§π¦",
        title: "Flag: Bosnia & Herzegovina",
      },
      {
        emoji: "π§π§",
        title: "Flag: Barbados",
      },
      {
        emoji: "π§π©",
        title: "Flag: Bangladesh",
      },
      {
        emoji: "π§πͺ",
        title: "Flag: Belgium",
      },
      {
        emoji: "π§π«",
        title: "Flag: Burkina Faso",
      },
      {
        emoji: "π§π¬",
        title: "Flag: Bulgaria",
      },
      {
        emoji: "π§π­",
        title: "Flag: Bahrain",
      },
      {
        emoji: "π§π?",
        title: "Flag: Burundi",
      },
      {
        emoji: "π§π―",
        title: "Flag: Benin",
      },
      {
        emoji: "π§π±",
        title: "Flag: St. BarthΓ©lemy",
      },
      {
        emoji: "π§π²",
        title: "Flag: Bermuda",
      },
      {
        emoji: "π§π³",
        title: "Flag: Brunei",
      },
      {
        emoji: "π§π΄",
        title: "Flag: Bolivia",
      },
      {
        emoji: "π§πΆ",
        title: "Flag: Caribbean Netherlands",
      },
      {
        emoji: "π§π·",
        title: "Flag: Brazil",
      },
      {
        emoji: "π§πΈ",
        title: "Flag: Bahamas",
      },
      {
        emoji: "π§πΉ",
        title: "Flag: Bhutan",
      },
      {
        emoji: "π§π»",
        title: "Flag: Bouvet Island",
      },
      {
        emoji: "π§πΌ",
        title: "Flag: Botswana",
      },
      {
        emoji: "π§πΎ",
        title: "Flag: Belarus",
      },
      {
        emoji: "π§πΏ",
        title: "Flag: Belize",
      },
      {
        emoji: "π¨π¦",
        title: "Flag: Canada",
      },
      {
        emoji: "π¨π¨",
        title: "Flag: Cocos (Keeling) Islands",
      },
      {
        emoji: "π¨π©",
        title: "Flag: Congo - Kinshasa",
      },
      {
        emoji: "π¨π«",
        title: "Flag: Central African Republic",
      },
      {
        emoji: "π¨π¬",
        title: "Flag: Congo - Brazzaville",
      },
      {
        emoji: "π¨π­",
        title: "Flag: Switzerland",
      },
      {
        emoji: "π¨π?",
        title: "Flag: CΓ΄te dβIvoire",
      },
      {
        emoji: "π¨π°",
        title: "Flag: Cook Islands",
      },
      {
        emoji: "π¨π±",
        title: "Flag: Chile",
      },
      {
        emoji: "π¨π²",
        title: "Flag: Cameroon",
      },
      {
        emoji: "π¨π³",
        title: "Flag: China",
      },
      {
        emoji: "π¨π΄",
        title: "Flag: Colombia",
      },
      {
        emoji: "π¨π΅",
        title: "Flag: Clipperton Island",
      },
      {
        emoji: "π¨π·",
        title: "Flag: Costa Rica",
      },
      {
        emoji: "π¨πΊ",
        title: "Flag: Cuba",
      },
      {
        emoji: "π¨π»",
        title: "Flag: Cape Verde",
      },
      {
        emoji: "π¨πΌ",
        title: "Flag: CuraΓ§ao",
      },
      {
        emoji: "π¨π½",
        title: "Flag: Christmas Island",
      },
      {
        emoji: "π¨πΎ",
        title: "Flag: Cyprus",
      },
      {
        emoji: "π¨πΏ",
        title: "Flag: Czechia",
      },
      {
        emoji: "π©πͺ",
        title: "Flag: Germany",
      },
      {
        emoji: "π©π¬",
        title: "Flag: Diego Garcia",
      },
      {
        emoji: "π©π―",
        title: "Flag: Djibouti",
      },
      {
        emoji: "π©π°",
        title: "Flag: Denmark",
      },
      {
        emoji: "π©π²",
        title: "Flag: Dominica",
      },
      {
        emoji: "π©π΄",
        title: "Flag: Dominican Republic",
      },
      {
        emoji: "π©πΏ",
        title: "Flag: Algeria",
      },
      {
        emoji: "πͺπ¦",
        title: "Flag: Ceuta & Melilla",
      },
      {
        emoji: "πͺπ¨",
        title: "Flag: Ecuador",
      },
      {
        emoji: "πͺπͺ",
        title: "Flag: Estonia",
      },
      {
        emoji: "πͺπ¬",
        title: "Flag: Egypt",
      },
      {
        emoji: "πͺπ­",
        title: "Flag: Western Sahara",
      },
      {
        emoji: "πͺπ·",
        title: "Flag: Eritrea",
      },
      {
        emoji: "πͺπΈ",
        title: "Flag: Spain",
      },
      {
        emoji: "πͺπΉ",
        title: "Flag: Ethiopia",
      },
      {
        emoji: "πͺπΊ",
        title: "Flag: European Union",
      },
      {
        emoji: "π«π?",
        title: "Flag: Finland",
      },
      {
        emoji: "π«π―",
        title: "Flag: Fiji",
      },
      {
        emoji: "π«π°",
        title: "Flag: Falkland Islands",
      },
      {
        emoji: "π«π²",
        title: "Flag: Micronesia",
      },
      {
        emoji: "π«π΄",
        title: "Flag: Faroe Islands",
      },
      {
        emoji: "π«π·",
        title: "Flag: France",
      },
      {
        emoji: "π¬π¦",
        title: "Flag: Gabon",
      },
      {
        emoji: "π¬π§",
        title: "Flag: United Kingdom",
      },
      {
        emoji: "π¬π©",
        title: "Flag: Grenada",
      },
      {
        emoji: "π¬πͺ",
        title: "Flag: Georgia",
      },
      {
        emoji: "π¬π«",
        title: "Flag: French Guiana",
      },
      {
        emoji: "π¬π¬",
        title: "Flag: Guernsey",
      },
      {
        emoji: "π¬π­",
        title: "Flag: Ghana",
      },
      {
        emoji: "π¬π?",
        title: "Flag: Gibraltar",
      },
      {
        emoji: "π¬π±",
        title: "Flag: Greenland",
      },
      {
        emoji: "π¬π²",
        title: "Flag: Gambia",
      },
      {
        emoji: "π¬π³",
        title: "Flag: Guinea",
      },
      {
        emoji: "π¬π΅",
        title: "Flag: Guadeloupe",
      },
      {
        emoji: "π¬πΆ",
        title: "Flag: Equatorial Guinea",
      },
      {
        emoji: "π¬π·",
        title: "Flag: Greece",
      },
      {
        emoji: "π¬πΈ",
        title: "Flag: South Georgia & South Sandwich Islands",
      },
      {
        emoji: "π¬πΉ",
        title: "Flag: Guatemala",
      },
      {
        emoji: "π¬πΊ",
        title: "Flag: Guam",
      },
      {
        emoji: "π¬πΌ",
        title: "Flag: Guinea-Bissau",
      },
      {
        emoji: "π¬πΎ",
        title: "Flag: Guyana",
      },
      {
        emoji: "π­π°",
        title: "Flag: Hong Kong SAR China",
      },
      {
        emoji: "π­π²",
        title: "Flag: Heard & McDonald Islands",
      },
      {
        emoji: "π­π³",
        title: "Flag: Honduras",
      },
      {
        emoji: "π­π·",
        title: "Flag: Croatia",
      },
      {
        emoji: "π­πΉ",
        title: "Flag: Haiti",
      },
      {
        emoji: "π­πΊ",
        title: "Flag: Hungary",
      },
      {
        emoji: "π?π¨",
        title: "Flag: Canary Islands",
      },
      {
        emoji: "π?π©",
        title: "Flag: Indonesia",
      },
      {
        emoji: "π?πͺ",
        title: "Flag: Ireland",
      },
      {
        emoji: "π?π±",
        title: "Flag: Israel",
      },
      {
        emoji: "π?π²",
        title: "Flag: Isle of Man",
      },
      {
        emoji: "π?π³",
        title: "Flag: India",
      },
      {
        emoji: "π?π΄",
        title: "Flag: British Indian Ocean Territory",
      },
      {
        emoji: "π?πΆ",
        title: "Flag: Iraq",
      },
      {
        emoji: "π?π·",
        title: "Flag: Iran",
      },
      {
        emoji: "π?πΈ",
        title: "Flag: Iceland",
      },
      {
        emoji: "π?πΉ",
        title: "Flag: Italy",
      },
      {
        emoji: "π―πͺ",
        title: "Flag: Jersey",
      },
      {
        emoji: "π―π²",
        title: "Flag: Jamaica",
      },
      {
        emoji: "π―π΄",
        title: "Flag: Jordan",
      },
      {
        emoji: "π―π΅",
        title: "Flag: Japan",
      },
      {
        emoji: "π°πͺ",
        title: "Flag: Kenya",
      },
      {
        emoji: "π°π¬",
        title: "Flag: Kyrgyzstan",
      },
      {
        emoji: "π°π­",
        title: "Flag: Cambodia",
      },
      {
        emoji: "π°π?",
        title: "Flag: Kiribati",
      },
      {
        emoji: "π°π²",
        title: "Flag: Comoros",
      },
      {
        emoji: "π°π³",
        title: "Flag: St. Kitts & Nevis",
      },
      {
        emoji: "π°π΅",
        title: "Flag: North Korea",
      },
      {
        emoji: "π°π·",
        title: "Flag: South Korea",
      },
      {
        emoji: "π°πΌ",
        title: "Flag: Kuwait",
      },
      {
        emoji: "π°πΎ",
        title: "Flag: Cayman Islands",
      },
      {
        emoji: "π°πΏ",
        title: "Flag: Kazakhstan",
      },
      {
        emoji: "π±π¦",
        title: "Flag: Laos",
      },
      {
        emoji: "π±π§",
        title: "Flag: Lebanon",
      },
      {
        emoji: "π±π¨",
        title: "Flag: St. Lucia",
      },
      {
        emoji: "π±π?",
        title: "Flag: Liechtenstein",
      },
      {
        emoji: "π±π°",
        title: "Flag: Sri Lanka",
      },
      {
        emoji: "π±π·",
        title: "Flag: Liberia",
      },
      {
        emoji: "π±πΈ",
        title: "Flag: Lesotho",
      },
      {
        emoji: "π±πΉ",
        title: "Flag: Lithuania",
      },
      {
        emoji: "π±πΊ",
        title: "Flag: Luxembourg",
      },
      {
        emoji: "π±π»",
        title: "Flag: Latvia",
      },
      {
        emoji: "π±πΎ",
        title: "Flag: Libya",
      },
      {
        emoji: "π²π¦",
        title: "Flag: Morocco",
      },
      {
        emoji: "π²π¨",
        title: "Flag: Monaco",
      },
      {
        emoji: "π²π©",
        title: "Flag: Moldova",
      },
      {
        emoji: "π²πͺ",
        title: "Flag: Montenegro",
      },
      {
        emoji: "π²π«",
        title: "Flag: St. Martin",
      },
      {
        emoji: "π²π¬",
        title: "Flag: Madagascar",
      },
      {
        emoji: "π²π­",
        title: "Flag: Marshall Islands",
      },
      {
        emoji: "π²π°",
        title: "Flag: North Macedonia",
      },
      {
        emoji: "π²π±",
        title: "Flag: Mali",
      },
      {
        emoji: "π²π²",
        title: "Flag: Myanmar (Burma)",
      },
      {
        emoji: "π²π³",
        title: "Flag: Mongolia",
      },
      {
        emoji: "π²π΄",
        title: "Flag: Macao Sar China",
      },
      {
        emoji: "π²π΅",
        title: "Flag: Northern Mariana Islands",
      },
      {
        emoji: "π²πΆ",
        title: "Flag: Martinique",
      },
      {
        emoji: "π²π·",
        title: "Flag: Mauritania",
      },
      {
        emoji: "π²πΈ",
        title: "Flag: Montserrat",
      },
      {
        emoji: "π²πΉ",
        title: "Flag: Malta",
      },
      {
        emoji: "π²πΊ",
        title: "Flag: Mauritius",
      },
      {
        emoji: "π²π»",
        title: "Flag: Maldives",
      },
      {
        emoji: "π²πΌ",
        title: "Flag: Malawi",
      },
      {
        emoji: "π²π½",
        title: "Flag: Mexico",
      },
      {
        emoji: "π²πΎ",
        title: "Flag: Malaysia",
      },
      {
        emoji: "π²πΏ",
        title: "Flag: Mozambique",
      },
      {
        emoji: "π³π¦",
        title: "Flag: Namibia",
      },
      {
        emoji: "π³π¨",
        title: "Flag: New Caledonia",
      },
      {
        emoji: "π³πͺ",
        title: "Flag: Niger",
      },
      {
        emoji: "π³π«",
        title: "Flag: Norfolk Island",
      },
      {
        emoji: "π³π¬",
        title: "Flag: Nigeria",
      },
      {
        emoji: "π³π?",
        title: "Flag: Nicaragua",
      },
      {
        emoji: "π³π±",
        title: "Flag: Netherlands",
      },
      {
        emoji: "π³π΄",
        title: "Flag: Norway",
      },
      {
        emoji: "π³π΅",
        title: "Flag: Nepal",
      },
      {
        emoji: "π³π·",
        title: "Flag: Nauru",
      },
      {
        emoji: "π³πΊ",
        title: "Flag: Niue",
      },
      {
        emoji: "π³πΏ",
        title: "Flag: New Zealand",
      },
      {
        emoji: "π΄π²",
        title: "Flag: Oman",
      },
      {
        emoji: "π΅π¦",
        title: "Flag: Panama",
      },
      {
        emoji: "π΅πͺ",
        title: "Flag: Peru",
      },
      {
        emoji: "π΅π«",
        title: "Flag: French Polynesia",
      },
      {
        emoji: "π΅π¬",
        title: "Flag: Papua New Guinea",
      },
      {
        emoji: "π΅π­",
        title: "Flag: Philippines",
      },
      {
        emoji: "π΅π°",
        title: "Flag: Pakistan",
      },
      {
        emoji: "π΅π±",
        title: "Flag: Poland",
      },
      {
        emoji: "π΅π²",
        title: "Flag: St. Pierre & Miquelon",
      },
      {
        emoji: "π΅π³",
        title: "Flag: Pitcairn Islands",
      },
      {
        emoji: "π΅π·",
        title: "Flag: Puerto Rico",
      },
      {
        emoji: "π΅πΈ",
        title: "Flag: Palestinian Territories",
      },
      {
        emoji: "π΅πΉ",
        title: "Flag: Portugal",
      },
      {
        emoji: "π΅πΌ",
        title: "Flag: Palau",
      },
      {
        emoji: "π΅πΎ",
        title: "Flag: Paraguay",
      },
      {
        emoji: "πΆπ¦",
        title: "Flag: Qatar",
      },
      {
        emoji: "π·πͺ",
        title: "Flag: RΓ©union",
      },
      {
        emoji: "π·π΄",
        title: "Flag: Romania",
      },
      {
        emoji: "π·πΈ",
        title: "Flag: Serbia",
      },
      {
        emoji: "π·πΊ",
        title: "Flag: Russia",
      },
      {
        emoji: "π·πΌ",
        title: "Flag: Rwanda",
      },
      {
        emoji: "πΈπ¦",
        title: "Flag: Saudi Arabia",
      },
      {
        emoji: "πΈπ§",
        title: "Flag: Solomon Islands",
      },
      {
        emoji: "πΈπ¨",
        title: "Flag: Seychelles",
      },
      {
        emoji: "πΈπ©",
        title: "Flag: Sudan",
      },
      {
        emoji: "πΈπͺ",
        title: "Flag: Sweden",
      },
      {
        emoji: "πΈπ¬",
        title: "Flag: Singapore",
      },
      {
        emoji: "πΈπ­",
        title: "Flag: St. Helena",
      },
      {
        emoji: "πΈπ?",
        title: "Flag: Slovenia",
      },
      {
        emoji: "πΈπ―",
        title: "Flag: Svalbard & Jan Mayen",
      },
      {
        emoji: "πΈπ°",
        title: "Flag: Slovakia",
      },
      {
        emoji: "πΈπ±",
        title: "Flag: Sierra Leone",
      },
      {
        emoji: "πΈπ²",
        title: "Flag: San Marino",
      },
      {
        emoji: "πΈπ³",
        title: "Flag: Senegal",
      },
      {
        emoji: "πΈπ΄",
        title: "Flag: Somalia",
      },
      {
        emoji: "πΈπ·",
        title: "Flag: Suriname",
      },
      {
        emoji: "πΈπΈ",
        title: "Flag: South Sudan",
      },
      {
        emoji: "πΈπΉ",
        title: "Flag: SΓ£o TomΓ© & PrΓ­ncipe",
      },
      {
        emoji: "πΈπ»",
        title: "Flag: El Salvador",
      },
      {
        emoji: "πΈπ½",
        title: "Flag: Sint Maarten",
      },
      {
        emoji: "πΈπΎ",
        title: "Flag: Syria",
      },
      {
        emoji: "πΈπΏ",
        title: "Flag: Eswatini",
      },
      {
        emoji: "πΉπ¦",
        title: "Flag: Tristan Da Cunha",
      },
      {
        emoji: "πΉπ¨",
        title: "Flag: Turks & Caicos Islands",
      },
      {
        emoji: "πΉπ©",
        title: "Flag: Chad",
      },
      {
        emoji: "πΉπ«",
        title: "Flag: French Southern Territories",
      },
      {
        emoji: "πΉπ¬",
        title: "Flag: Togo",
      },
      {
        emoji: "πΉπ­",
        title: "Flag: Thailand",
      },
      {
        emoji: "πΉπ―",
        title: "Flag: Tajikistan",
      },
      {
        emoji: "πΉπ°",
        title: "Flag: Tokelau",
      },
      {
        emoji: "πΉπ±",
        title: "Flag: Timor-Leste",
      },
      {
        emoji: "πΉπ²",
        title: "Flag: Turkmenistan",
      },
      {
        emoji: "πΉπ³",
        title: "Flag: Tunisia",
      },
      {
        emoji: "πΉπ΄",
        title: "Flag: Tonga",
      },
      {
        emoji: "πΉπ·",
        title: "Flag: Turkey",
      },
      {
        emoji: "πΉπΉ",
        title: "Flag: Trinidad & Tobago",
      },
      {
        emoji: "πΉπ»",
        title: "Flag: Tuvalu",
      },
      {
        emoji: "πΉπΌ",
        title: "Flag: Taiwan",
      },
      {
        emoji: "πΉπΏ",
        title: "Flag: Tanzania",
      },
      {
        emoji: "πΊπ¦",
        title: "Flag: Ukraine",
      },
      {
        emoji: "πΊπ¬",
        title: "Flag: Uganda",
      },
      {
        emoji: "πΊπ²",
        title: "Flag: U.S. Outlying Islands",
      },
      {
        emoji: "πΊπ³",
        title: "Flag: United Nations",
      },
      {
        emoji: "πΊπΈ",
        title: "Flag: United States",
      },
      {
        emoji: "πΊπΎ",
        title: "Flag: Uruguay",
      },
      {
        emoji: "πΊπΏ",
        title: "Flag: Uzbekistan",
      },
      {
        emoji: "π»π¦",
        title: "Flag: Vatican City",
      },
      {
        emoji: "π»π¨",
        title: "Flag: St. Vincent & Grenadines",
      },
      {
        emoji: "π»πͺ",
        title: "Flag: Venezuela",
      },
      {
        emoji: "π»π¬",
        title: "Flag: British Virgin Islands",
      },
      {
        emoji: "π»π?",
        title: "Flag: U.S. Virgin Islands",
      },
      {
        emoji: "π»π³",
        title: "Flag: Vietnam",
      },
      {
        emoji: "π»πΊ",
        title: "Flag: Vanuatu",
      },
      {
        emoji: "πΌπ«",
        title: "Flag: Wallis & Futuna",
      },
      {
        emoji: "πΌπΈ",
        title: "Flag: Samoa",
      },
      {
        emoji: "π½π°",
        title: "Flag: Kosovo",
      },
      {
        emoji: "πΎπͺ",
        title: "Flag: Yemen",
      },
      {
        emoji: "πΎπΉ",
        title: "Flag: Mayotte",
      },
      {
        emoji: "πΏπ¦",
        title: "Flag: South Africa",
      },
      {
        emoji: "πΏπ²",
        title: "Flag: Zambia",
      },
      {
        emoji: "πΏπΌ",
        title: "Flag: Zimbabwe",
      },
      {
        emoji: "π΄σ §σ ’σ ₯σ ?σ §σ Ώ",
        title: "Flag: England",
      },
      {
        emoji: "π΄σ §σ ’σ ³σ £σ ΄σ Ώ",
        title: "Flag: Scotland",
      },
      {
        emoji: "π΄σ §σ ’σ ·σ ¬σ ³σ Ώ",
        title: "Flag: Wales",
      },
      {
        emoji: "π΄σ ΅σ ³σ ΄σ Έσ Ώ",
        title: "Flag for Texas (US-TX)",
      },
    ],
  };

  const categoryFlags = {
    people: "π",
    nature: "πΏ",
    "food-drink": "π",
    activity: "π",
    "travel-places": "π ",
    objects: "π§­",
    symbols: "π",
    flags: "π³οΈ",
  };

  var textInput = document.getElementById("text-input");

  var emojis = document.getElementById("emojis");
  var emojisButton = document.getElementById("emojis-button");
  var categories = document.getElementById("emojis-categories");
  var content = document.getElementById("emojis-content");

  emojisButton.addEventListener("click", () => {
    emojis.classList.toggle("visible");
  });

  var entries = Object.entries(emojiObject);
  entries.forEach((entry) => {
    var link = document.createElement("button");
    link.textContent = categoryFlags[entry[0]];
    link.addEventListener("click", () => {
      var selected = categories.querySelector(".selected");
      if (selected) {
        selected.classList.remove("selected");
      }
      link.classList.add("selected");

      content.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    });
    categories.appendChild(link);

    var element = document.createElement("div");
    element.classList.add("emojis-group");
    content.appendChild(element);

    content.addEventListener("wheel", () => {
      if (content.scrollTop >= element.offsetTop) {
        var selected = categories.querySelector(".selected");
        if (selected) {
          selected.classList.remove("selected");
        }
        link.classList.add("selected");
      }
    });

    var header = document.createElement("header");
    header.dataset.l10nId = "emojis-" + entry[0];
    element.appendChild(header);

    var list = document.createElement("ul");
    element.appendChild(list);

    entry[1].forEach((emoji) => {
      var key = document.createElement("li");
      key.addEventListener("click", () => {
        textInput.value += emoji.emoji;
      });
      list.appendChild(key);

      var icon = document.createElement("span");
      icon.textContent = emoji.emoji;
      key.appendChild(icon);

      var title = document.createElement("div");
      title.setAttribute("role", "title");
      title.classList.add("bottom");
      title.textContent = emoji.title;
      key.appendChild(title);
    });
  });
})(window);
