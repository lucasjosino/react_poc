import React, {useEffect, useState} from 'react';
import './Form.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,

}

const PromotionForm = ({ id }) => {

    const [form, setForm] = useState(initialValue);
    const history = useHistory();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/promotions/${id}`)
            .then((response) => {
                setForm(response.data);
                console.log(response.data);
            })
        }
    }, []);

    function onChange(ev) {
        const {name, value} = ev.target;
        setForm({...form,[name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id
        ? `http://localhost:5000/promotions/${id}`
        : `http://localhost:5000/promotions`

        axios[method](url,form)
            .then((Response) => {
                history.push('/');
            })
    }

    if (!form) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className="promotion-form__group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onChange} value={form.title} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="text" onChange={onChange} value={form.url} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="imageUrl">Imagem (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={form.imageUrl} />
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onChange} value={form.price} /> 
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm;