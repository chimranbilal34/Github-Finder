const github=new Github;
const ui=new UI;
var searchuser=document.getElementById('Searchuser')
searchuser.addEventListener('keyup',(e)=>{
    console.log(e)
    console.log(e.type)
    var usertext=e.target.value;
    if(usertext !== ''){
       github.getUser(usertext)
       .then(data=>{
           if(data.Profile.message === 'Not Found'){
            ui.showAlert('User Not Found','alert alert-danger');
           }
           else{
            ui.showProfile(data.Profile);
            ui.showRepos(data.repos)
           }
       })
    }
    else{
        //Clear When no input
        ui.clearProfile()
    }
})