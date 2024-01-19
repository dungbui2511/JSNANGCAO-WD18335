// Lab 2.1
const gameEvents = [
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
  ];
  
  // 1. Tạo mảng các sự kiện 
  const events = [];
  for (let [min,event] of gameEvents) {
    if (!events.includes(event)) {
      events.push(event);
    }
  }
  console.log(events);
  // 2. Xóa sự kiện sai ở phút 64
  const index = gameEvents.findIndex(ev => ev[0] === 64);
  gameEvents.splice(index, 1);
  // 3. In thống kê 
  const totalEvents = gameEvents.length+1;
  const avg = 90 / totalEvents;
  console.log(`${totalEvents} events. On average 1 event every ${avg} minutes`);
  
  // 4. In ra sự kiện kèm hiệp 
  for (let [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`${half} ${min}: ${event}`); 
  }
//   Lab 2.2
  document.body.innerHTML = `
<textarea id="input"></textarea>
<button id="button">Convert</button>
<div id="output"></div>
`;

document.querySelector('#button').addEventListener('click', function() {
  // Lấy danh sách biến từ vùng văn bản
  const inputText = document.querySelector('#input').value;

  // Chia danh sách thành các biến
  const variables = inputText.split('\n');
  // Chuyển đổi hàm underscore sang camelCase
  function underscoreToCamelCase(variable) {
    const words = variable.split('_');
    const camelCaseWords = words.map((word, index) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return camelCaseWords.join('');
  }

  // Hiển thị kết quả
  const outputElement = document.querySelector('#output');
  outputElement.innerHTML = ''; // Xóa nội dung trước đó (nếu có)
  variables.forEach(variable => {
    const camelCase = underscoreToCamelCase(variable);
    outputElement.innerHTML += `<p>${camelCase}</p>`;
  });
});
// Lab 2.3
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
// Lab 2.4
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function() {
      header.style.color = 'blue'; 
    });
  })();
  
  // Giải thích:
  
  // - Biến header được khai báo bên trong IIFE nên vẫn có thể truy cập được bên ngoài.
  // - Khi click vào body, hàm callback được gọi và thay đổi màu của header.
  // - Mặc dù không trực tiếp select header nhưng vẫn thay đổi được vì biến header vẫn có scope.
