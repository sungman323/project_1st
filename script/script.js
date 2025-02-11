// 콘텐츠1 - 제품라인업 페이지 전환

let c1_now = document.querySelector('#c1_01');
let c1_nav = document.querySelectorAll('.c1_n');
let c1_page = document.querySelectorAll('.c1')

for(let i=0;i<c1_nav.length;i++){
  c1_nav[i].addEventListener('click', changePage);
}

function changePage(){
  let newPageID = this.id + '_c';
  let newPage = document.getElementById(newPageID);

  for(let j=0;j<c1_nav.length;j++){
    c1_nav[j].style.border='2px dotted #eee';
    c1_page[j].classList.remove('c_act');
  }
  this.style.border="2px solid #C8102E";
  newPage.classList.add('c_act');
}

// 푸터 TOP 버튼 상단 숨김 영역

let scrollTop;
const t_act = document.getElementById('t_act');

window.addEventListener('scroll',function(){
  scrollTop = this.window.scrollY;
  if(scrollTop>=50){
    t_act.classList.add('act');
  }else{
    t_act.classList.remove('act');
  }
});
