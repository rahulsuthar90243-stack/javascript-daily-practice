const parent = document.querySelector("#first");


async function github() {
    try{

        const MyProfile = await fetch("https://api.github.com/users/rahulsuthar90243-stack");
        const myData = await MyProfile.json();
        createUserCard(myData);
        const Profile2 = await fetch("https://api.github.com/users/senorhitesh");
        const Data2 = await Profile2.json();
        createUserCard(Data2);
        
        
        const response = await fetch("https://api.github.com/users");

        if(!response.ok){
            throw new Error("Data is not persent");
        }
        const data = await response.json();

        for(let user of data){
        createUserCard(user)
            
        }
    }catch(error){
       console.log("Error: ", error);
    }
}





function createUserCard(user){
            const element = document.createElement("div");
            element.classList.add("user");

            const image = document.createElement("img");
            image.src = user.avatar_url;

            const userName = document.createElement("h2");
            userName.textContent = user.login;

            const visit = document.createElement("a");
            visit.href = user.html_url;
            visit.textContent = "Visit Profile"

            element.append(image, userName, visit);
            parent.append(element);
}
github();