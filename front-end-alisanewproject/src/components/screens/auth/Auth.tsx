import { useActions } from "@/hooks/useActions"
import { useAuth } from "@/hooks/useAuth"
import { IEmailPassword } from "@/store/user/user.interface"
import Meta from "@/ui/Meta"
import Field from "@/ui/input/Field"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { validEmail } from "./valid-email"
import Loader from "@/ui/Loader"
import { useAuthRedirect } from "./useAuthRedirect"

const Auth: FC = () => {
    

    useAuthRedirect()



    const {isLoading} = useAuth()
    const {login, register} = useActions()
    const [type, setType] = useState<'login' | 'register'>('login')
    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: "onChange"
    })
    const onSubmit: SubmitHandler<IEmailPassword> = data => {
        if (type === 'login') login(data)
        else register(data)

        reset()
    }

    return(
        <Meta title='Авторизация'>
            <section className="container_auth">
            <form className="container_form" onSubmit={handleSubmit(onSubmit)}>
            <p style={{display: 'flex', justifyContent: 'center', fontSize: '30px'}}>Авторизация</p>

                {isLoading ? <Loader /> : (<>

                <Field className="field"
                    {...formRegister('email', {
                        required: 'Требуется электронная почта',
                        pattern: {
                            value: validEmail,
                            message: 'Пожалуйста, введите действительный адрес электронной почты'
                        }
                    })}
                    placeholder="Почта"
                    error={errors.email?.message}
                />
                <Field className="field"
                    {...formRegister('password', {
                        required: 'Требуется пароль',
                        minLength: {
                            value: 6,
                            message: 'Минимальная длина должна превышать 6 символов'
                        }
                    })}
                    type='password'
                    placeholder="Пароль"
                    error={errors.password?.message}
                />
                <button type='submit' className="button1">Продолжить</button> {''}

                <button type='button' className="button1" onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                    {type === 'login' ? 'Регистрация' : 'Вход'}
                </button>
                </>
                
                )}
            </form>
            </section>
            
        
    </Meta>
    ) 
}

export default Auth