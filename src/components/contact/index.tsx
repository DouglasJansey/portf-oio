import style from './contact.module.sass'
import { Button } from '../buttons/button'
import { ChangeEvent, FormEvent, useState } from 'react'
import { loading } from '../../../imports/componentsimport'

interface formProps {
    name: string;
    email: string;
    subject: string;
    mensage: string;
}

export default function Contact() {
    const [isLoading, setIsloading] = useState(false)
    const [formData, setFormData] = useState<formProps>({
        name: '',
        email: '',
        subject: '',
        mensage: ''
    })
    const formHandler = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target
        console.log(name)
        setFormData({ ...formData, [name]: value })
    }
    console.log(formData)
    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        try {
            setIsloading(true)
            fetch('http://localhost:3000/api/send', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response)
                setIsloading(false)
            })
        } catch (err) {

        }
        console.log(ev.target)
    }
    return (
        <div className={style.container}>
            <div className={style.containerContact}>
                <div className={style.containerImage}>
                    <figure>
                        <img src='/images/e-mail-team.png' alt='' />
                    </figure>
                </div>
                <form className={style.containerForm} onSubmit={(ev) => handleSubmit(ev)}>
                    <h3 style={{ color: '#fff' }}>ENTRAR EM CONTATO</h3>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='text' name='name' placeholder='Seu nome'
                            onChange={(e) => formHandler(e)} />
                    </label>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='email' name='email' placeholder='Endereço de email'
                            onChange={(e) => formHandler(e)} />
                    </label>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='text' name='subject' placeholder='Assunto'
                            onChange={(e) => formHandler(e)} />
                    </label>
                    <label className={style.containerLabel}>
                        <textarea className={style.textArea} name='mensage' placeholder='Sua mensagem'
                            onChange={(e) => formHandler(e)} />
                    </label>
                    <Button type='submit' style={{ width: '250px', height: '45px' }}>
                        <div className={style.flex}>
                            {!isLoading && <p>Enviar</p> || <div className={style.containerLoading}>{loading}</div>}
                        </div>
                    </Button>
                </form>
            </div>

        </div>
    )
}