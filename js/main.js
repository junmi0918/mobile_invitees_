// main.js

$(function(){

    // gnb 열기
    $('.btn_toggle').on('click', function(){
      $('#gnb').addClass('show');
      console.log('click');
    });
  
    // gnb 닫기
    $('.btn_close').on('click', function(){
      $('#gnb').removeClass('show');
    });
  
    $('#gnb a[href*="synop"]').on('click', function(e){
      // e.preventDefault();
      // $('#synop').addClass('show');
      // location.href = './index.html?synop=1';
      console.log('synop');
    });
    
    console.log(location.href);
  
    // url 파라미터 값 확인 (synop = 1 ?)
    var val = location.href.substr(
      location.href.lastIndexOf('=') + 1
    );
    // 시놉시스 페이지면 팝업창 출력 active
    if(val == 1) {
      $('#synop_popup').addClass('show');
      $('#gnb ul li').removeClass('active');
      $('#gnb ul li').eq(2).addClass('active');
      $('.header_box').css('display', 'none');
      $('title').text('시놉시스 | 극장판 귀멸의 칼날: 무한열차편');
    } else {
      $('#synop_popup').removeClass('show');
    }  
  
    // 갤러리 이미지 클릭 시 변경하기
    $('#main > .thumb > li').on('click', function(){
      // 이미지 주소값 읽기
      let getUrl = $(this).find('img').attr('src');
      console.log(getUrl);
      // 이미지 쓰기
      $('#main > figure > img').attr('src', getUrl );
    })
  
  });

  //Swiper Slider
$(function() {
  const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal', //가로, 세로 (horizontal, vertical)
      loop: true,
      // autoplay: true, //자동재생
    
      // 필요시 사용(pager)
      pagination: {
        el: '.swiper-pagination',
      },
    
      // 방향키 (Navigation arrows)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // 스크롤바 (scrollbar)
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
})