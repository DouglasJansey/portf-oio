'use client'
import style from './contact.module.sass'
import { Button } from '../buttons/button'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { loading } from '../../../imports/componentsimport'

interface formProps {
    name: string;
    email: string;
    subject: string;
    mensage: string;
}

const initialState: formProps = {
    name: '',
    email: '',
    subject: '',
    mensage: ''
}

type Status = 'idle' | 'success' | 'error'

export default function Contact() {
    const [isLoading, setIsloading] = useState(false)
    const [checkInput, setCheckInput] = useState<string[]>([])
    const [status, setStatus] = useState<Status>('idle')
    const [formData, setFormData] = useState<formProps>(initialState)
    const timer = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => () => clearTimeout(timer.current), [])

    const inputError = (inputName: string) =>
        checkInput.includes(inputName) ? '2px solid red' : ''

    const formHandler = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target
        setFormData((current) => ({ ...current, [name]: value }))
        setCheckInput((current) => current.filter((field) => field !== name))
    }

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault()

        const empty = (Object.keys(formData) as (keyof formProps)[])
            .filter((field) => !formData[field].trim())

        setCheckInput(empty)
        if (empty.length) return

        setIsloading(true)
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            })
            if (response.ok) {
                setStatus('success')
                setFormData(initialState)
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        } finally {
            setIsloading(false)
            timer.current = setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.containerContact}>
                <div className={style.containerImage}>
                    <figure>
                        <img src='/images/e-mail-team.png' alt='Ilustração de envio de e-mail' />
                    </figure>
                </div>
                <form className={style.containerForm} onSubmit={handleSubmit} noValidate>
                    <h3 style={{ color: '#fff' }}>ENTRAR EM CONTATO</h3>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='text' style={{ border: inputError('name') }} name='name' placeholder='Seu nome'
                            aria-label='Seu nome' onChange={formHandler} value={formData.name} />
                    </label>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='email' style={{ border: inputError('email') }} name='email' placeholder='Endereço de email válido'
                            aria-label='Endereço de email' onChange={formHandler} value={formData.email} />
                    </label>
                    <label className={style.containerLabel}>
                        <input className={style.inputText} type='text' style={{ border: inputError('subject') }} name='subject' placeholder='Assunto'
                            aria-label='Assunto' onChange={formHandler} value={formData.subject} />
                    </label>
                    <label className={style.containerLabel}>
                        <textarea className={style.textArea} style={{ border: inputError('mensage') }} name='mensage' placeholder='Sua mensagem'
                            aria-label='Sua mensagem' onChange={formHandler} value={formData.mensage} />
                    </label>
                    <Button type='submit' disabled={isLoading} style={{ width: '250px', height: '45px' }}>
                        <div className={style.flex}>
                            {isLoading ? <div className={style.containerLoading}>{loading}</div> : <p>Enviar</p>}
                        </div>
                    </Button>
                    <div role='status' aria-live='polite' style={{ display: status === 'idle' ? 'none' : 'block' }}>
                        {status === 'success' && <p>Mensagem enviada com sucesso!</p>}
                        {status === 'error' && <p>Falha no envio da mensagem</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}
