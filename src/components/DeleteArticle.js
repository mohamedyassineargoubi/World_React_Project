import React from 'react';
import axios from 'axios';

const DeleteArticle = (props) => {
    const {id} = props;
    const handleDelete = ()=> {
    axios.delete("http://localhost:3003/articles/"+id);


    }
    return (
     <button onClick = {()=>{
         
         if(window.confirm("Veuillez bien supprimer cet article")){

          handleDelete();

         }
          
         
         
        }
        }>Delete</button>
    );
};

export default DeleteArticle;