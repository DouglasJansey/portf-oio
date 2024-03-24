import style from './contact.module.sass'
import { Button } from '../buttons/button'

export default function Contact () {
    return (
        <div className={style.container}>
            <div className={style.containerContact}>
                <figure className={style.containerImage}>
                    <img src='/images/e-mail-team.png' alt=''/>
                </figure>
                <form className={style.containerForm}>
                    <h1 style={{color: '#fff'}}>Contato</h1>
                <label className={style.containerLabel}>
                    <input className={style.inputText} type='text' placeholder='Seu nome'/>
                </label>
                <label className={style.containerLabel}>
                    <input className={style.inputText} type='email' name='email' placeholder='Endereço de email' />
                </label>
                <label className={style.containerLabel}>
                    <input className={style.inputText} type='text' placeholder='Assunto'/>
                </label>
                <label className={style.containerLabel}>
                    <textarea className={style.textArea} placeholder='Sua mensagem' />
                </label>
                <Button type='submit' style={{width: '250px', height: '45px'}}>Enviar</Button>
                </form>
            </div>

        </div>
    )
}