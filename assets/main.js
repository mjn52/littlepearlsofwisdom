// Orders go out via mailto (no form backend).
const ORDER_EMAIL = "Annie@littlepearlsofwisdom.com";
const d=document.getElementById('story');
document.getElementById('storyBtn').onclick=()=>d.showModal();
document.getElementById('closeStory').onclick=()=>d.close();
document.getElementById('orderForm').addEventListener('submit',e=>{
  e.preventDefault();const f=new FormData(e.target);
  const body=`Name on bottle: ${f.get('bottleName')}\nBottle color: ${f.get('color')}\nPearl of Wisdom: ${f.get('pearl')}\nParent email: ${f.get('parentEmail')}\nNotes: ${f.get('notes')}`;
  location.href=`mailto:${ORDER_EMAIL}?subject=${encodeURIComponent('New order: '+f.get('bottleName'))}&body=${encodeURIComponent(body)}`;
});
