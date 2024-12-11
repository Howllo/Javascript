function fetchInformation(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            if(!response.ok){
                throw new Error("Failure!")
            }
            return response.json();
        }).then(data =>{
            console.log(data.length);
            data.map(user =>{
                console.log(`New User ${user.name}`);

                let info = 
                `
                    <div id="div-${user.name}">
                        <h1 id='ul-${user.name}'>${user.name}</h1>
                        <ul id='ul-${user.name}'>
                            <li id="li-company-name">Company Name: ${user.company.name}</li>
                            <li id="li-website">Company Website: ${user.website}</li>
                            <li id="li-address">Comapny Address:${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</li>
                        </ul>
                    </div>
                `;
                
                document.getElementById('fetch-container').innerHTML += info;
            });
        }).catch(error =>{
        })
}
