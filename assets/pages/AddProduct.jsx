import React, {useState} from 'react';
import Axios from "axios"
import {Link, useNavigate} from 'react-router-dom'
import Field from '../components/Field'
import Textarea from '../components/Textarea';

const AddProduct = (props) => {
    const navigate = useNavigate()

    const [info, setInfo] = useState({
        name:"",
        description:"",
        price: "",
        image: null
    })

    const [errors, setErrors] = useState({
       name:"",
       description:"",
       price:"",
       image:"" 
    })

    const handleChange = (event) => {
        const {name, value} = event.currentTarget 
        setInfo({...info, [name]:value})
    }

    const handleFileChange = (event) => {
        const name = event.currentTarget.name 
        const myFile = event.currentTarget.files[0]
        console.log(myFile)
        setInfo({...info, [name]:myFile})
        console.log(info)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    
    return ( 
        <>
            <div className="container">
                <h1>Ajouter un produit</h1>
                <form onSubmit={handleSubmit}>
                    <Field 
                        name="name"
                        label="Nom du produit"
                        placeholder='Nom du produit'
                        value={info.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <Textarea 
                        name="description"
                        label="Description"
                        placeholder='Description du produit'
                        value={info.description}
                        error={errors.description}
                        onChange={handleChange}
                    />
                    <div className="my-3">
                        <label htmlFor="image">Image: </label>
                        <input type="file" name="image" id="image" className='form-control' onChange={handleFileChange} />
                    </div>
                    <Field 
                        name="price"
                        type="number"
                        label="Prix"
                        placeholder='Prix du produit'
                        value={info.price}
                        error={errors.price}
                        onChange={handleChange}
                    />
                    <div className="my-3">
                        <button type="submit" className='btn btn-success'>Enregistrer</button>
                        <Link to="/" className='btn btn-secondary'>Retour</Link>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default AddProduct;