import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {
    const [newsData,setNewsData] = useState([]);
    const [author,setAuthor] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState(false);

useEffect(()=>{
    getData();


})
const handleSubmit = ((e)=>{
e.preventDefault();
if(message.length<140){
setError(true);
}
else{
    axios.post("http://localhost:3003/articles",{
        author:author,
        content:message,
        date :Date.now(),
})
        .then(()=>{
            setError(false);
            setAuthor("");
            setMessage("");
        })
   
        }
        
}

)
    const getData = () => {
axios.get("http://localhost:3003/articles")
     .then((res)=>setNewsData(res.data))
    }

   
    return (
   <div className="news-container">
  <Navigation />
            <Logo />
            <h1>News</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
<input type="text" placeholder="Name" onChange={(e)=>setAuthor(e.target.value)} value = {author}></input>
<textarea 
placeholder="Message"  
onChange={(e)=>setMessage(e.target.value)} 
value = {message}
style={{border : error ?"1px solid red" : "1px solid #61dafb" }}></textarea>
{error &&<p>Veuillez saisir un minimum de 140 caractères</p>}
<input type="submit" value="Send" />
            </form>
        <ul>
           { newsData
           
           .sort((a,b)=>b.date - a.date)
           .map((article)=>(
              <Article key = {article.id} article={article}/>

           ))}</ul>
              
       
           
   </div>
    );
};

export default News;