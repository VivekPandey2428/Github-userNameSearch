let baseUrl="https://api.github.com/users/";
let inputValue=document.getElementById('value');
const SubmitButton=document.getElementById('button');
const userDetails=document.getElementById('user-details');

let user='';
SubmitButton.addEventListener('click',()=>{
  user=inputValue.value;
  getData();
  
});
function getData(){
  console.log(user);
 fetch(baseUrl+user).then(res=>res.json()).then(data=>{
   let user_data=`<div class="image-section">
    <img  class="img-profile" src=${data.avatar_url} alt="">
  </div>
  <div class="profile-desc">
    <h3 class="name">Name: ${data.name}</h3>
    <h4 class="username">UserName:${data.login}</h4>
    <p class="followers">Followers:${data.followers}</p>
    <p class="following">Following:${data.following}</p>
    <p class="repo">Repo:<a href="#">${data.repos_url}</a></p>
  </div>`;
   userDetails.innerHTML=user_data;
   userDetails.style.display="block";
 }); 
}