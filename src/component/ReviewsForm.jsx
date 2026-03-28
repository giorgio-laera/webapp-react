import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function reviewsForm() {
    const {id} =useParams()
    console.log( "questo e id",id)
    const initialValuesForm = { name: "Autore", vote: 1, text: "testo lungo" }
    const [formValues, setFormValues] = useState(initialValuesForm);
console.log("valori form",formValues)
    const apiUrl = `http://localhost:3000/api/movies/${id}/reviews`
    function HandleSubmit(e) {
        e.preventDefault();
        
            axios.post(apiUrl, formValues).then(response=>{
                if(response.data.id){
                    console.log("recenzione caricata")
                }
            }).catch(error => { console.error(error.message) });
        
     }

    function setValue(e) {

        const filedName = e.target.name;
        const filedValue = e.target.value;

        let newFormValues = {
            ...formValues
        };

        newFormValues[filedName] = filedValue;
        setFormValues(newFormValues);
    }
    
    return (
        <form onSubmit={HandleSubmit}>
            <div>
                <h4>Autore</h4>
                <input type="text" name="name" value={formValues.name} onChange={setValue} placeholder="inserisci il nome" />
            </div>
            <div>
                <h4>Voto</h4>
                <input type="number" name="vote" value={formValues.vote} onChange={setValue} placeholder="inserisci il voto" />
            </div>
            <div>
                <h4>Testo</h4>
                <input type="text" name="text" value={formValues.text} onChange={setValue} placeholder="inserisci il testo" />
            </div>
            <button type="submit">invia</button>
        </form>)
}
export default reviewsForm