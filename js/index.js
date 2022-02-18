// getting the html part
let newsAccordian = document.getElementById("newsAccordian");


// initialising ajax get request to fetch form api
const xhr = new XMLHttpRequest();
let method = "GET";

let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5abd17a1f07f443e9854b6dda904c254";
xhr.open(method, url, true);
xhr.onload = function(){
    if(this.status === 200){
        let result = JSON.parse(this.responseText);
        result = result.articles;
        let news = "";
        for (var i = 0; i < result.length; i++){
            news += `<div class="accordion-item bg-dark text-white">
                            <h2 class="accordion-header" id="heading${i}">
                                <button class="accordion-button collapsed bg-danger" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                                   <h6> <span class="badge bg-success mx-2">Breaking News : ${i+1}</span><span class="badge bg-secondary">${result[i].title}</span></h6>
                                </button>
                            </h2>
                            <div id="collapse${i}" class="accordion-collapse collapse hide" aria-labelledby="heading${i}"
                                data-bs-parent="#newsAccordian">
                                <div class="accordion-body">
                                    <strong>${result[i].publishedAt}.</strong> ${result[i].content}. <a href="${result[i].url}" target = "_blank">Read more at</a>
                                </div>
                            </div>
                        </div>`
        }
        newsAccordian.innerHTML = news;
    }
    else{
        console.log("there is something error in this");
    }
}

// sending the request
xhr.send();

