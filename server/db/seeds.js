use mapps;
db.dropDatabase();

db.countries.insertMany([

  {
    name: "France",
    easy: [
      {
        question: "Which of these is the flag of France?",
        answers: [ "../assets/images/france.png", "../assets/images/brazil.png", "../assets/images/japan.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/france.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of France?",
        answers: [ "Paris", "Glasgow", "London", "Milan" ],
        correct_answer: "Paris",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in France?",
        answers: [ "English", "French", "Italian", "Spanish" ],
        correct_answer: "French",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in France?",
        answers: [ "London Bridge", "The Empire State Building", "The White House", "The Eiffel Tower" ],
        correct_answer: "The Eiffel Tower",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous French food?",
        answers: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer: "Baguette",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of France?",
        answers: [ "../assets/images/france.png", "../assets/images/brazil.png", "../assets/images/japan.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/france.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of France?",
        answers: [ "Football", "Tennis", "Cycling", "Rugby" ],
        correct_answer: "Football",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of France in millions?",
        answers: [ "75", "59", "81", "67" ],
        correct_answer: "67",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of France?",
        answers: [ "Toulouse", "Lyon", "Paris", "Marseille" ],
        correct_answer: "Paris",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of France?",
        answers: [ "The Dog", "The Rooster", "The Cat", "The Pigeon" ],
        correct_answer: "The Rooster",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of France?",
        answers: [ "../assets/images/france.png", "../assets/images/brazil.png", "../assets/images/japan.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/france.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through France?",
        answers: [ "The Rhine", "The Loire", "The Rhone", "The Seine" ],
        correct_answer: "The Rhine",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in France?",
        answers: [ "Grande Casse", "Mont Pourri", "Mont Pelvoux", "Mont Blanc" ],
        correct_answer: "Mont Blanc",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in France?",
        answers: [ "Christianity", "Islam", "Judaism", "Hinduism" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of France?",
        answers: [ "200", "138", "104", "89" ],
        correct_answer: "104",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
    lat_long: [47.064034, 2.497441],
    zooms: [2.2, 3.1, 3.9, 4.8, 5.7],
    flag: ""
  },

  {
    name: "Japan",
    easy: [
      {
        question: "Which of these is the flag of Japan?",
        answers: [ "../assets/images/russia.png", "../assets/images/japan.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/japan.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Japan?",
        answers: [ "Paris", "Tokyo", "London", "Milan" ],
        correct_answer: "Tokyo",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Japan?",
        answers: [ "English", "French", "Japanese", "Spanish" ],
        correct_answer: "Japanese",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Japan?",
        answers: [ "London Bridge", "The Empire State Building", "Mount Fuji", "The Eiffel Tower" ],
        correct_answer: "Mount Fuji",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous Japanese food?",
        answers: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer: "Sushi",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of Japan?",
        answers: [ "../assets/images/russia.png", "../assets/images/japan.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/japan.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of Japan?",
        answers: [ "Judo", "Tennis", "Sumo Wrestling", "Baseball" ],
        correct_answer: "Sumo Wrestling",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Japan in millions?",
        answers: [ "126", "79", "81", "65" ],
        correct_answer: "126",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Japan?",
        answers: [ "Tokyo", "Osaka", "Sapporo", "Kyoto" ],
        correct_answer: "Tokyo",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Japan?",
        answers: [ "The Dog", "The Monkey", "The Wild Boar", "None!" ],
        correct_answer: "None!",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of Japan?",
        answers: [ "../assets/images/russia.png", "../assets/images/japan.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/japan.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through Japan?",
        answers: [ "The Mu", "The Tukoro", "The Teshio", "The Ishikari" ],
        correct_answer: "The Ishikari",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Japan?",
        answers: [ "Mount Yari", "Mount Aino", "Mount Kita", "Mount Fuji" ],
        correct_answer: "Mount Fuji",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Japan?",
        answers: [ "Christianity", "Shinto", "Buddhism", "Hinduism" ],
        correct_answer: "Shinto",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Japan?",
        answers: [ "245", "138", "110", "334" ],
        correct_answer: "334",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
    lat_long: [39.067580, 138.046949],
    zooms: [2.2, 3.1, 3.9, 4.4, 5.1],
    flag: ""
  },

  {
    name: "USA",
    easy: [
      {
        question: "Which of these is the flag of the USA?",
        answers: [ "../assets/images/russia.png", "../assets/images/scotland.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/usa.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of the USA?",
        answers: [ "Washington DC", "New York", "London", "Milan" ],
        correct_answer: "Washington DC",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in the USA?",
        answers: [ "English", "French", "German", "Spanish" ],
        correct_answer: "English",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in the USA?",
        answers: [ "London Bridge", "The Empire State Building", "Mount Fuji", "The Eiffel Tower" ],
        correct_answer: "The Empire State Building",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from the USA?",
        answers: [ "Pizza", "Sushi", "Baguette", "Hamburgers" ],
        correct_answer: "Hamburgers",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of the USA?",
        answers: [ "../assets/images/russia.png", "../assets/images/scotland.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/usa.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of the USA?",
        answers: [ "American Football", "Tennis", "Golf", "Baseball" ],
        correct_answer: "Baseball",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of the USA in millions?",
        answers: [ "327", "279", "181", "405" ],
        correct_answer: "327",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of the USA?",
        answers: [ "Los Angeles", "Houston", "Chicago", "New York City" ],
        correct_answer: "New York City",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of the USA?",
        answers: [ "The Dog", "The Bison", "The Bald Eagle", "The Bear" ],
        correct_answer: "The Bison",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of the USA?",
        answers: [ "../assets/images/russia.png", "../assets/images/scotland.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/usa.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through the USA?",
        answers: [ "The Colorado", "The Ohio", "The Mississippi", "The Missouri" ],
        correct_answer: "The Missouri",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in the USA?",
        answers: [ "The Denali", "Mount Massive", "Mount Sanford", "Mount Blackburn" ],
        correct_answer: "The Denali",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in the USA?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of the USA?",
        answers: [ "245", "85", "110", "234" ],
        correct_answer: "85",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
    lat_long: [40.849452, -97.834994],
    zooms: [1.9, 2.4, 2.9, 3.4, 3.9],
    flag: ""
  },

  {
    name: "Russia",
    easy: [
      {
        question: "Which of these is the flag of Russia?",
        answers: [ "../assets/images/brazil.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/russia.png" ],
        correct_answer: "../assets/images/russia.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Russia?",
        answers: [ "Paris", "New York", "London", "Moscow" ],
        correct_answer: "Moscow",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Russia?",
        answers: [ "English", "French", "German", "Russian" ],
        correct_answer: "Russian",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Russia?",
        answers: [ "London Bridge", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "The Moscow Kremlin",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Russia?",
        answers: [ "Borscht", "Sushi", "Baguette", "Hamburgers" ],
        correct_answer: "Borscht",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of Russia?",
        answers: [ "../assets/images/brazil.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/russia.png" ],
        correct_answer: "../assets/images/russia.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of Russia?",
        answers: [ "Football", "Tennis", "Wrestling", "Bandy" ],
        correct_answer: "Bandy",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Russia in millions?",
        answers: [ "147", "279", "191", "305" ],
        correct_answer: "147",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Russia?",
        answers: [ "St. Petersberg", "Moscow", "Samara", "Kazan" ],
        correct_answer: "Moscow",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Russia?",
        answers: [ "The Dog", "The Siberian Tiger", "The Eagle", "The Brown Bear" ],
        correct_answer: "The Brown Bear",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of Russia?",
        answers: [ "../assets/images/brazil.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/russia.png" ],
        correct_answer: "../assets/images/russia.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through Russia?",
        answers: [ "The Volga", "The Lena", "The Ob-Irtysh", "The Yenisei-Angara-Selenge" ],
        correct_answer: "The Yenisei-Angara-Selenge",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Russia?",
        answers: [ "Mount Jimara", "Mount Kazbek", "Mount Pushkin", "Mount Elbrus" ],
        correct_answer: "Mount Elbrus",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Russia?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Russia?",
        answers: [ "9", "85", "43", "62" ],
        correct_answer: "9",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [64.093769, 106.478228],
      zooms: [1.6, 1.8, 2.0, 2.2, 2.5],
      flag: ""
  },

  {
    name: "China",
    easy: [
      {
        question: "Which of these is the flag of China?",
        answers: [ "../assets/images/china.png", "../assets/images/india.png", "../assets/images/france.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/china.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of China?",
        answers: [ "Paris", "Beijing", "Tokyo", "Moscow" ],
        correct_answer: "Beijing",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in China?",
        answers: [ "English", "French", "Chinese", "Russian" ],
        correct_answer: "Chinese",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in China?",
        answers: [ "The Great Wall", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "The Great Wall",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from China?",
        answers: [ "Borscht", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer: "Chow Mein",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of China?",
        answers: [ "../assets/images/china.png", "../assets/images/india.png", "../assets/images/france.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/china.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of China?",
        answers: [ "Football", "Ping-Pong", "Wrestling", "Kung Fu" ],
        correct_answer: "Ping-Pong",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of China in millions?",
        answers: [ "991", "1109", "591", "1386" ],
        correct_answer: "1386",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of China?",
        answers: [ "Shanghai", "Beijing", "Tianjin", "Shenzhen" ],
        correct_answer: "Shanghai",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of China?",
        answers: [ "The Dog", "The Giant Panda", "The Monkey", "The Cat" ],
        correct_answer: "The Giant Panda",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of China?",
        answers: [ "../assets/images/china.png", "../assets/images/india.png", "../assets/images/france.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/china.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through China?",
        answers: [ "The Yangtze", "The Yarlung", "The Yellow", "The Heilongjiang" ],
        correct_answer: "The Yangtze",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in China?",
        answers: [ "K2", "Mount Lhotse", "Mount Makalu", "Mount Everest" ],
        correct_answer: "Mount Everest",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in China?",
        answers: [ "Christianity", "Chinese Folklore", "Buddhism", "Islam" ],
        correct_answer: "Buddhism",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of China?",
        answers: [ "145", "285", "83", "71" ],
        correct_answer: "145",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [36.103825, 102.501833],
      zooms: [1.9, 2.4, 2.9, 3.4, 3.9],
      flag: ""
  },

  {
    name: "Brazil",
    easy: [
      {
        question: "Which of these is the flag of Brazil?",
        answers: [ "../assets/images/russia.png", "../assets/images/brazil.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/brazil.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Brazil?",
        answers: [ "Brasilia", "New York", "Tokyo", "Moscow" ],
        correct_answer: "Brasilia",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Brazil?",
        answers: [ "English", "French", "Chinese", "Portuguese" ],
        correct_answer: "Portuguese",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Brazil?",
        answers: [ "Sugarloaf Mountain", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "Sugarloaf Mountain",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Brazil?",
        answers: [ "Picanha", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer: "Picanha",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of Brazil?",
        answers: [ "../assets/images/russia.png", "../assets/images/brazil.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/brazil.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of Brazil?",
        answers: [ "Football", "Golf", "Tennis", "Volleyball" ],
        correct_answer: "Football",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Brazil in millions?",
        answers: [ "178", "301", "191", "210" ],
        correct_answer: "210",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Brazil?",
        answers: [ "Salvador", "Brasilia", "Sao Paulo", "Rio De Janeiro" ],
        correct_answer: "Sao Paulo",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Brazil?",
        answers: [ "The Dog", "The Jaguar", "The Monkey", "The Cat" ],
        correct_answer: "The Jaguar",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of Brazil?",
        answers: [ "../assets/images/russia.png", "../assets/images/brazil.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/brazil.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through Brazil?",
        answers: [ "The Rio Negro", "The Purus", "The Parana", "The Amazon" ],
        correct_answer: "The Amazon",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Brazil?",
        answers: [ "Pedra Da Mina", "Mount Roraima", "Pico Da Bandeira", "Pico Da Neblina" ],
        correct_answer: "Pico Da Neblina",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Brazil?",
        answers: [ "Roman Catholicism", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Roman Catholicism",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Brazil?",
        answers: [ "65", "25", "183", "91" ],
        correct_answer: "25",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [-13.181802, -52.468510],
      zooms: [1.9, 2.4, 2.9, 3.4, 4.0],
      flag: ""
  },

  {
    name: "Australia",
    easy: [
      {
        question: "Which of these is the flag of Australia?",
        answers: [ "../assets/images/france.png", "../assets/images/china.png", "../assets/images/australia.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/australia.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Australia?",
        answers: [ "Brasilia", "New York", "Tokyo", "Canberra" ],
        correct_answer: "Canberra",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Australia?",
        answers: [ "English", "French", "Chinese", "Portuguese" ],
        correct_answer: "English",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Australia?",
        answers: [ "Sydney Opera House", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "Sydney Opera House",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Australia?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer: "Vegemite",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of Australia?",
        answers: [ "../assets/images/france.png", "../assets/images/china.png", "../assets/images/australia.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/australia.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of Australia?",
        answers: [ "Football", "Rugby", "Tennis", "Cricket" ],
        correct_answer: "Cricket",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Australia in millions?",
        answers: [ "25", "39", "9", "49" ],
        correct_answer: "25",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Australia?",
        answers: [ "Sydney", "Perth", "Brisbane", "Melbourne" ],
        correct_answer: "Sydney",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Australia?",
        answers: [ "The Kangaroo", "The Dingo", "The Koala", "The Wombat" ],
        correct_answer: "The Kangaroo",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of Australia?",
        answers: [ "../assets/images/france.png", "../assets/images/china.png", "../assets/images/australia.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/australia.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through Australia?",
        answers: [ "The Darling", "Cooper Creek", "The Murray", "The Lachlan" ],
        correct_answer: "The Murray",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Australia?",
        answers: [ "Mount Townsend", "Mount Kosciuszko", "Rams Head", "Alice Rawson Peak" ],
        correct_answer: "Mount Kosciuszko",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Australia?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Australia?",
        answers: [ "16", "3", "37", "41" ],
        correct_answer: "3",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [-22.863754, 133.081807],
      zooms: [1.9, 2.4, 2.9, 3.5, 4.1],
      flag: ""
  },

  {
    name: "India",
    easy: [
      {
        question: "Which of these is the flag of India?",
        answers: [ "../assets/images/india.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/south-africa.png" ],
        correct_answer: "../assets/images/india.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of India?",
        answers: [ "London", "New Delhi", "Tokyo", "Canberra" ],
        correct_answer: "New Delhi",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in India?",
        answers: [ "English", "Hindi", "Chinese", "Portuguese" ],
        correct_answer: "Hindi",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in India?",
        answers: [ "Sydney Opera House", "The Empire State Building", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer: "Taj Mahal",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from India?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Naan Bread" ],
        correct_answer: "Naan Bread",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of India?",
        answers: [ "../assets/images/india.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/south-africa.png" ],
        correct_answer: "../assets/images/india.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of India?",
        answers: [ "Hockey", "Kabaddi", "None!", "Cricket" ],
        correct_answer: "None!",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of India in millions?",
        answers: [ "1102", "894", "909", "1350" ],
        correct_answer: "1350",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of India?",
        answers: [ "Mumbai", "Bangalore", "Kolkata", "New Delhi" ],
        correct_answer: "Mumbai",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of India?",
        answers: [ "The Monkey", "The Bengal Tiger", "The Cow", "The Dog" ],
        correct_answer: "The Bengal Tiger",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of India?",
        answers: [ "../assets/images/india.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/south-africa.png" ],
        correct_answer: "../assets/images/india.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through India?",
        answers: [ "The Ganges", "The Krishna", "The Brahmaputra", "The Indus" ],
        correct_answer: "The Indus",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in India?",
        answers: [ "Mount Kamet", "Mount Nanda Devi", "K12", "Mount Kanchenjunga" ],
        correct_answer: "Mount Kanchenjunga",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in India?",
        answers: [ "Hinduism", "Sikhism", "Buddhism", "Islam" ],
        correct_answer: "Hinduism",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of India?",
        answers: [ "415", "302", "289", "350" ],
        correct_answer: "415",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [20.012176, 78.003143],
      zooms: [2.0, 2.6, 3.2, 3.8, 4.5],
      flag: ""
  },

  {
    name: "South Africa",
    easy: [
      {
        question: "Which of these is the flag of South Africa?",
        answers: [ "../assets/images/scotland.png", "../assets/images/south-africa.png", "../assets/images/usa.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/south-africa.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of South Africa?",
        answers: [ "London", "New Delhi", "Tokyo", "Pretoria" ],
        correct_answer: "Pretoria",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in South Africa?",
        answers: [ "English", "Zulu", "French", "Portuguese" ],
        correct_answer: "Zulu",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in South Africa?",
        answers: [ "Sydney Opera House", "Table Mountain", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer: "Table Mountain",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from South Africa?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Biltong" ],
        correct_answer: "Biltong",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of South Africa?",
        answers: [ "../assets/images/scotland.png", "../assets/images/south-africa.png", "../assets/images/usa.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/south-africa.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of South Africa?",
        answers: [ "Rugby", "Football", "None!", "Cricket" ],
        correct_answer: "None!",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of South Africa in millions?",
        answers: [ "58", "102", "39", "65" ],
        correct_answer: "58",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of South Africa?",
        answers: [ "Cape Town", "Johannesburg", "Pretoria", "Durban" ],
        correct_answer: "Cape Town",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of South Africa?",
        answers: [ "The Springbok", "The Lion", "The Elephant", "The Leopard" ],
        correct_answer: "The Springbok",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of South Africa?",
        answers: [ "../assets/images/scotland.png", "../assets/images/south-africa.png", "../assets/images/usa.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/south-africa.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through South Africa?",
        answers: [ "The Vaal", "The Limpopo", "The Great Fish", "The Orange" ],
        correct_answer: "The Orange",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in South Africa?",
        answers: [ "Mount Thabana Ntlenyana", "Red Wall Peak", "Mount Mafadi", "Mount Makheka" ],
        correct_answer: "Mount Thabana Ntlenyana",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in South Africa?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of South Africa?",
        answers: [ "28", "42", "89", "97" ],
        correct_answer: "42",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [-29.131173, 23.816596],
      zooms: [2.1, 2.9, 3.7, 4.5, 5.3],
      flag: ""
  },

  {
    name: "Scotland",
    easy: [
      {
        question: "Which of these is the flag of Scotland?",
        answers: [ "../assets/images/scotland.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/india.png" ],
        correct_answer: "../assets/images/scotland.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Scotland?",
        answers: [ "London", "New Delhi", "Tokyo", "Edinburgh" ],
        correct_answer: "Edinburgh",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Scotland?",
        answers: [ "English", "Spanish", "French", "Portuguese" ],
        correct_answer: "English",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Scotland?",
        answers: [ "Sydney Opera House", "Edinburgh Castle", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer: "Edinburgh Castle",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Scotland?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Haggis" ],
        correct_answer: "Haggis",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is the flag of Scotland?",
        answers: [ "../assets/images/scotland.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/india.png" ],
        correct_answer: "../assets/images/scotland.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the national sport of Scotland?",
        answers: [ "Rugby", "Football", "None!", "Darts" ],
        correct_answer: "Football",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Scotland in millions?",
        answers: [ "5.5", "10.2", "6.7", "2.3" ],
        correct_answer: "5.5",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Scotland?",
        answers: [ "Aberdeen", "Edinburgh", "Dundee", "Glasgow" ],
        correct_answer: "Glasgow",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Scotland?",
        answers: [ "The Deer", "The Lion", "The Golden Eagle", "The Unicorn" ],
        correct_answer: "The Unicorn",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the flag of Scotland?",
        answers: [ "../assets/images/scotland.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/india.png" ],
        correct_answer: "../assets/images/scotland.png",
        question_shorthand: "Flag"
      },
      {
        question: "Which is the longest river that runs through Scotland?",
        answers: [ "The Spey", "The Clyde", "The Tay", "The Dee" ],
        correct_answer: "The Tay",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Scotland?",
        answers: [ "Ben Nevis", "Ben Macdui", "Cairn Gorm", "Cairn Toul" ],
        correct_answer: "Ben Nevis",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Scotland?",
        answers: [ "Christianity", "Hinduism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Scotland?",
        answers: [ "33", "68", "49", "91" ],
        correct_answer: "68",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [56.866107, -4.149746],
      zooms: [2.3, 3.2, 4.2, 5.2, 6.2],
      flag: ""
  }

])

db.maps.insertMany(
  [{
    name: "National Geography",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "Earth At Night",
    url: "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{23:00}/{GoogleMapsCompatible_Level}{9}/{z}/{y}/{x}.jpg?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "Wild West Map",
    url: "https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "Ocean Base",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "World Street Map",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  }

])
