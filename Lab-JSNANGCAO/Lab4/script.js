// Lab 4.1
// Khai báo biến toàn cục để lưu tài khoản đăng nhập
let currentAccount;

// Xử lý sự kiện click nút Login
btnLogin.addEventListener('click', function(e) {

  // Ngăn form submit
  e.preventDefault();

  // Tìm tài khoản trùng username
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  // Kiểm tra mật khẩu
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    
    // Hiển thị UI, chào mừng
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`; 
    containerApp.style.opacity = 100;
    
    // Xóa input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    // Cập nhật UI
    updateUI(currentAccount);
  }

});
// Lab 4.2 - Xử lý sự kiện Transfer:
btnTransfer.addEventListener('click', function(e) {

    // Ngăn form submit
    e.preventDefault();
  
    // Lấy thông tin
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  
    // Xóa input
    inputTransferAmount.value = inputTransferTo.value = '';
  
    // Kiểm tra điều kiện chuyển tiền
    if(amount > 0 && receiverAcc && 
       currentAccount.balance >= amount &&
       receiverAcc.username !== currentAccount.username) {
        
      // Thực hiện chuyển tiền   
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
    
      // Cập nhật UI
      updateUI(currentAccount);
    }
  
  });
//   Lab 4.3
// 1. Tổng tiền gửi
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

// 2. Số lượng gửi >= 1000  
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// 3. Tổng tiền gửi và rút
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  }, {deposits: 0, withdrawals: 0});

// 4. Chuyển chữ hoa  
const convertTitleCase = function(title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in','with'];

  return title
    .toLowerCase()
    .split(' ') 
    .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
    .join(' '); 
};