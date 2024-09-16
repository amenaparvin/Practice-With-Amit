function dataLoaded(){
    let tableBody = document.querySelector('#body')

    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
    {
        console.log(res.data);
        let posts = res.data

        posts.slice(0, 10).map((post) => {
            tableBody.innerHTML = tableBody.innerHTML + `
            <div class="col-4">
                <div class="card">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
            
            `

        })

        
    })

    
}