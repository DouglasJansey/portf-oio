import style from './contact.module.sass'
export default function Contact () {
    return (
        <div className={style.container}>
            <div className={style.containerContact}>
                <form className={style.containerForm}>
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
                    Escreva sobre o qual é o seu assunto:
                    <textarea />
                </label>
                </form>
            </div>

        </div>
    )
}