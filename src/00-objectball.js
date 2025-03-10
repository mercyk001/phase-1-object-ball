//PART ONE.


function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  


  //PART TWO.
  // numPointsScored
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
  }
  
  // shoeSize
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
  }
  
  // teamColours
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  
  // teamNames
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // playerNumbers
  function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (let team in game) {
      if (game[team].teamName === teamName) {
        for (let player in game[team].players) {
          numbers.push(game[team].players[player].number);
        }
      }
    }
    return numbers;
  }
  
  // playerStats
  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
  }
  
  // bigShoeRounds
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        const shoeSize = game[team].players[player].shoe;
        if (shoeSize > largestShoeSize) {
          largestShoeSize = shoeSize;
          rebounds = game[team].players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // BONUS
  //mostPointsScored
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        const points = game[team].players[player].points;
        if (points > maxPoints) {
          maxPoints = points;
          playerName = player;
        }
      }
    }
    return playerName;
  }
  
  // winningTeam
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  // playerWithLongestName
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  // SUPER BONUS
  //doesLongNmaeStealATon
  function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    const game = gameObject();
    let mostSteals = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player === longestName) {
          mostSteals = game[team].players[player].steals;
        }
      }
    }
  
    return mostSteals > 0; 
  }
  


  // TESTING
  //part 1
  console.log(gameObject());

  //part 2
  console.log(numPointsScored("Alan Anderson")); 
  console.log(shoeSize("Alan Anderson")); 
  console.log(teamColors("Brooklyn Nets"));
  console.log(teamNames());
  console.log(playerNumbers("Brooklyn Nets")); 
  console.log(playerStats("Alan Anderson")); 
  console.log(bigShoeRebounds()); 

  //bonus
  console.log(mostPointsScored());
  console.log(winningTeam()); 
  console.log(playerWithLongestName()); 

  //superbonus
  console.log(doesLongNameStealATon()); 