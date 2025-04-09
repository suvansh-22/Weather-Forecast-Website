document.addEventListener('DOMContentLoaded',()=>{
    const API_KEY = "10b054d84f99c2f29645d37003237ceb"
    let nameinp = document.getElementById("name-inp")
    let get = document.getElementById("get-btn")
    let weatherinfo = document.getElementById("box2")
    const namedisp = document.getElementById("name")
    let temp = document.getElementById("temp")
    let des = document.getElementById("des")
    let errormsg = document.getElementById("error")

   
    get.addEventListener('click',async ()=>{

        
    
       let city = nameinp.value.trim()

       if(city === "") alert("enter city name")

        try {
            const weatherdata = await fetchdata(city);
            displaydata(weatherdata);
        } catch (error) {
            
        }

        nameinp.value = "";

    })


    async function fetchdata(cityname){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${API_KEY}`
        const response = await fetch(url);

        if(!response.ok){
            errordisplay()
        }else{
            responseok()
            const data = await response.json()
            return data;
        }

    }


    function displaydata(weatherdata){
        console.log(weatherdata)
        
        namedisp.innerHTML= weatherdata.name;
        temp.innerHTML = `Temperature: ${weatherdata.main.temp}`;
        des.innerHTML = `Weather: ${weatherdata.weather[0].description}`


    }

    function errordisplay(){
        weatherinfo.classList.add("hidden");
        errormsg.classList.remove("hidden");
    }
    function responseok(){
        weatherinfo.classList.remove("hidden");
        errormsg.classList.add("hidden");
    }





})



