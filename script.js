 const newquotes=document.getElementById("quotes");
     const author_1=document.getElementById("author_1");
    const btn=document.getElementById("btn");

let main_data="";
    const new_quotes=()=>{
     let random_number=Math.floor(Math.random()*main_data.quotes.length);

     newquotes.innerText=`${main_data.quotes[random_number].quote}`;
    if(main_data.quotes[random_number].author==null){
       author_1.innerText="unknown";
      }
     else{
        author_1.innerText=`${main_data.quotes[random_number].author}`;
     }
   };


const quotes = async () => {
    const api = "https://dummyjson.com/quotes";
    try {
        let data = await fetch(api);
         main_data = await data.json();
        new_quotes(); 
    }
    catch (error) {
    }
};
btn.addEventListener("click",new_quotes);
quotes();
   
