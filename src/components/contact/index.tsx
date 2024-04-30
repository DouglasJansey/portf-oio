import style from './contact.module.sass'
import { Button } from '../buttons/button'
import { ChangeEvent, FormEvent, useState } from 'react'
import { loading } from '../../../imports/componentsimport'
import { setTimeout } from 'timers';

interface formProps {
    name: string;
    email: string;
    subject: string;
    mensage: string;
}

export default function Contact() {
    const [isLoading, setIsloading] = useState(false)
    const [status, setStatus] = useState(0)
    const [formData, setFormData] = useState<formProps>({
        name: '',
        email: '',
        subject: '',
        mensage: ''
    })
    const formHandler = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target

        setFormData({ ...formData, [name]: value })
    }
    const ClearMensage = () => {
        setTimeout(() => {
            setStatus(0)
            setFormData({
                name: '',
                email: '',
                subject: '',
                mensage: ''
            })
        }, 5000)

    }
    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        try {
            setIsloading(true)
            fetch(`/api/send`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            }).then(response => {
                const { status } = response
                setStatus(status)
                setIsloading(false)
                ClearMensage()
            })
        } catch (err) {
            throw Error("Falha no envio!")
        }

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
                            onChange={(e) => formHandler(e)} value={formData.name} />
                    </label>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='email' name='email' placeholder='Endereço de email válido'
                            onChange={(e) => formHandler(e)} value={formData.email} />
                    </label>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='text' name='subject' placeholder='Assunto'
                            onChange={(e) => formHandler(e)} value={formData.subject} />
                    </label>
                    <label className={style.containerLabel}>
                        <textarea className={style.textArea} name='mensage' placeholder='Sua mensagem'
                            onChange={(e) => formHandler(e)} value={formData.mensage} />
                    </label>
                    <Button type='submit' style={{ width: '250px', height: '45px' }}>
                        <div className={style.flex}>
                            {!isLoading && <p>Enviar</p> || <div className={style.containerLoading}>{loading}</div>}
                        </div>
                    </Button>
                    <div style={{ display: status ? 'block' : 'none' }}>
                        {status === 200 && <p>Mensagem enviada com sucesso!</p>}
                        {status !== 200 && <p>Falha no envio da mensagem</p>}
                    </div>
                </form>
            </div>

        </div>
    )
}