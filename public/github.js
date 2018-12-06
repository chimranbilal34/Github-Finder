class Github{
    constructor(){
        this.client_id='69d39af96b459802596d';
        this.client_secret='4c94608260b4b455ae719e72d0f93cfaddaae21e';
        this.repo_count=5;
        this.repos_sort='created asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const Profile=await profileResponse.json();
        const repos=await reposResponse.json();

        return{
            Profile,
            repos
        }
    }
}