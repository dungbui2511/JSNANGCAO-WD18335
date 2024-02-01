// Lab 5.2
'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    );
    section1.scrollIntoView({ behavior: 'smooth' });
  });
//   Đây là một đoạn code Javascript để thực hiện một số chức năng trên trang web:

// Khai báo các biến để lưu trữ các phần tử DOM: modal, overlay, btnCloseModal, btnsOpenModal, btnScrollTo, section1, nav, tabs, tabsContainer, tabsContent.

// Thêm sự kiện click cho nút btnScrollTo để scroll tới section1.

// Trong hàm xử lý sự kiện click của btnScrollTo:

// Lấy thông tin tọa độ của section1 thông qua section1.getBoundingClientRect()
// In ra tọa độ scroll hiện tại của trang web bằng cách lấy window.pageXOffset và window.pageYOffset
// In ra chiều cao và chiều rộng của viewport bằng document.documentElement.clientHeight và document.documentElement.clientWidth
// Cuối cùng scroll tới section1 bằng cách gọi section1.scrollIntoView() với option {behavior: 'smooth'} để scroll mượt hơn.
// Như vậy, đoạn code trên thực hiện chức năng scroll tới một section cụ thể trên trang web khi click vào button. Các lệnh console.log để in ra một số thông tin để debugging.
//-------------------------------------------------------------------------------------
// Lab 5.3
// Event Propagation in Practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
// Đoạn code trên đang thêm các sự kiện click vào các phần tử DOM là .nav__link, .nav__links và .nav.

// Khi click vào mỗi phần tử, nó sẽ:

// Tạo một màu ngẫu nhiên bằng hàm randomColor()
// Gán màu đó vào thuộc tính backgroundColor của phần tử đó
// In ra thông tin về e.target và e.currentTarget
// Trong đó:

// e.target là phần tử bên trong nhận được sự kiện click.
// e.currentTarget là phần tử mà chúng ta đã gắn sự kiện click.
// Ví dụ khi click vào .nav__link thì:

// e.target là chính .nav__link
// e.currentTarget là .nav__links (vì chúng ta gắn sự kiện cho .nav__links)
//-------------------------------------------------------------------------------
// Lab 5.4
// Page navigation
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
//Lấy giá trị của các thẻ a rồi dùng document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); id của thẻ a và scroll tới id tương ứng trong page