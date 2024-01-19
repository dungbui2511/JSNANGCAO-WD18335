const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard', 
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25, 
      team2: 6.5
    }
  };
  
  // Lab1.1 
  
  // 1. Tạo mảng cho mỗi đội
  const [players1, players2] = game.players; 
  
  // 2. Tách thủ môn và các cầu thủ khác
  const gk1 = players1[0];
  const fieldPlayers1 = players1.slice(1);
  
  const gk2 = players2[0];
  const fieldPlayers2 = players2.slice(1);
  
  // 3. Tạo mảng chung cho cả 2 đội
  const allPlayers = [...players1, ...players2];
  
  // 4. Thay đổi đội hình
//   Sử dụng spread operator để thêm anh sách cầu thủ dự bị
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // 5. Tỷ lệ kết quả
//   Sử dụng destructuring
  const {team1, x: draw, team2} = game.odds; 
  
  // 6. In ra các cầu thủ ghi bàn 
  const printGoals = (...players) => {
    console.log(`${players.length} cầu thủ đã  ghi bàn:`); 
    players.forEach(p => console.log(p));
  }
  
  // 7. Xác định đội chiến thắng
  const winner = team1 < team2 ? game.team1 : game.team2;
  
  printGoals(...game.scored);
  console.log(winner);
//   Lab1.2
  // 1. In ra các cầu thủ ghi bàn
for(let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i+1}: ${game.scored[i]}`)
  }
  
  // 2. Tính tỉ lệ bình quân
  let oddsSum = 0;
  for(let odd of Object.values(game.odds)) {
    oddsSum += odd;
  }
  const avgOdd = oddsSum / Object.keys(game.odds).length;
  console.log(`Avg odd: ${avgOdd}`); 
  // 3. In ra tỉ lệ cược đội bóng
  const {team1: team1Name, team2: team2Name} = game;
//   const {team1, x: draw, team2} = game.odds;
  console.log(`Tỉ lệ thắng của ${team1Name}: ${team1}`);
  console.log(`Tỉ lệ hòa: ${draw}`); 
  console.log(`Tỉ lệ thắng của ${team2Name}: ${team2}`);
  // Thêm: tạo đối tượng ghi bàn 
  const scorers = {};
  for(let player of game.scored) {
    scorers[player] = scorers[player] || 0;
    scorers[player]++;
  }