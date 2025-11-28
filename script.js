(function(){
  const sidebar = document.getElementById('sidebar');
  const open = document.getElementById('openSidebar');
  const close = document.getElementById('closeSidebar');

  if(open){
    open.addEventListener('click', ()=>{
      sidebar.classList.add('open');
    });
  }
  if(close){
    close.addEventListener('click', ()=>{
      sidebar.classList.remove('open');
    });
  }

  // Close sidebar on outside click (mobile)
  document.addEventListener('click', (e)=>{
    if(!sidebar.contains(e.target) && !open.contains(e.target) && sidebar.classList.contains('open')){
      sidebar.classList.remove('open');
    }
  })
})();
