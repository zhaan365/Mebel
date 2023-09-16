import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"

import registerImg from '../../assets/register.png'
import api from "../../config/api/api";
import {CustomContext} from "../../config/context/context";


const Form = () => {


    const [passwordView, setPasswordView] = useState(false)

    const {registerUser, loginUser} = useContext(CustomContext)

    const password = useRef()

    const location = useLocation()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    })

    password.current = watch("password");



    const submitForm = (data) => {
        let {confirmPwd, ...user} = data

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            registerUser(user)
        }
    }

    return (
        <div className='form'>
                <div className="form__left">
                    <p className='form__logo' ref={password}>Your Logo</p>
                    <form noValidate action="" className="form__content" onSubmit={handleSubmit(submitForm)}>

                        <h2 className="form__content-title">

                            {
                                location.pathname === '/login' ? 'Sign in' : ' Sign up'
                            }
                        </h2>
                        <p className="form__content-text">
                            {
                                location.pathname === '/login' ? 'If you don’t have an account register' : 'If you already have an account register'
                            }
                            <br/>
                            You can
                            {
                                location.pathname === '/login' ? <Link to='/register'><span className="form__span">Register here !</span></Link> : <Link to='/login'><span className="form__span">Login here !</span></Link>
                            }

                        </p>

                            <label className="form__label">
                                <span className="form__label-text">Email</span>
                                <div className="form__label-field">
                            <span className="form__label-icon">
                                <AiOutlineMail/>
                            </span>
                                    <input {...register('email', {
                                        required: {
                                            message: 'Email обязательно к заполнению',
                                            value: true
                                        },
                                        minLength: {
                                            message: 'Минимум 10 символа',
                                            value: 10
                                        },
                                        pattern: {
                                            message: 'Напишите правильно свой email',
                                            value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                        }
                                    })} type="email" className="form__label-input" placeholder='Enter your email address'/>
                                </div>
                                <p className='register__label-error'>
                                    {errors.email && errors.email?.message}
                                </p>
                            </label>
                            {
                                location.pathname === '/register' &&  <label className="form__label">

                                    <span className="form__label-text">Name</span>
                                    <div className="form__label-field">
                            <span className="form__label-icon">
                                <BiUser/>
                            </span>
                                        <input {...register('name', {
                                            required: {
                                                message: 'Имя обязательно к заполнению',
                                                value: true
                                            },
                                            minLength: {
                                                message: 'Минимум 10 символа',
                                                value: 2
                                            },
                                            pattern: {
                                                message: 'Напишите правильно свой email',
                                                value:  /^[а-яА-ЯёЁa-zA-Z]+$/
                                            }
                                        })} type="text" className="form__label-input" placeholder='Enter your name'/>
                                    </div>
                                    <p className='register__label-error'>
                                        {errors.name && errors.name?.message}
                                    </p>
                                </label>
                            }
                            {
                                location.pathname === '/register' &&  <label className="form__label">
                                    <span className="form__label-text">Surname</span>
                                    <div className="form__label-field">
                            <span className="form__label-icon">
                                <FaUserAlt/>
                            </span>
                                        <input {...register('surname', {
                                            required: {
                                                message: 'Фамилие обязательно к заполнению',
                                                value: true
                                            },
                                            minLength: {
                                                message: 'Минимум 10 символа',
                                                value: 2
                                            },
                                            pattern: {
                                                message: 'Напишите правильно свою фамилию',
                                                value:  /^[а-яА-ЯёЁa-zA-Z]+$/
                                            }
                                        })} type="text" className="form__label-input" placeholder='Enter your surname'/>
                                    </div>
                                    <p className='register__label-error'>
                                        {errors.surname && errors.surname?.message}
                                    </p>
                                </label>
                            }
                            {
                                location.pathname === '/register' &&  <label className="form__label">
                                    <span className="form__label-text">Phone</span>
                                    <div className="form__label-field">
                            <span className="form__label-icon">
                                <AiFillPhone/>
                            </span>
                                        <InputMask mask={`+\\9\\96(999)99-99-99`} {...register('phone', {
                                            required: {
                                                value: true,
                                                message: 'Это поле обязательное'
                                            },
                                            pattern: {
                                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                                message: 'Заполните номер телефона'
                                            }
                                        })} type="tel" className="form__label-input" placeholder='Enter your phone'/>
                                    </div>
                                    <p className='register__label-error'>
                                        {errors.phone && errors.phone?.message}
                                    </p>
                                </label>
                            }
                            <label className="form__label">
                                <span className="form__label-text">Password</span>
                                <div className="form__label-field">
                            <span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>
                                {
                                    passwordView ? <BsFillEyeSlashFill/> :  <BsFillEyeFill/>
                                }
                            </span>
                                    <input {...register('password', {
                                        required: {
                                            message: "Пароль обязателен к заполнению",
                                            value: true
                                        },
                                        pattern: {
                                            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                            message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                        }
                                    })} type={passwordView ? 'text' : 'password'} className="form__label-input" placeholder='Enter your password'/>
                                </div>
                                <p className='register__label-error'>
                                    {errors.password && errors.password?.message}
                                </p>
                            </label>
                            {
                                location.pathname === '/register' &&  <label className="form__label">
                                    <span className="form__label-text">Confirm password</span>
                                    <div className="form__label-field">
                                        {/*<span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>*/}
                                        {/*    {*/}
                                        {/*        passwordView ? <BsFillEyeSlashFill/> :  <BsFillEyeFill/>*/}
                                        {/*    }*/}
                                        {/*</span>*/}
                                        <input {...register('confirmPwd', {
                                            validate: value =>
                                                value === password.current || "The password do not match"
                                        })} type={passwordView ? 'text' : 'password'} className="form__label-input" placeholder='Enter your password again'/>
                                    </div>
                                    <p className='register__label-error'>
                                        {errors.confirmPwd && errors.confirmPwd?.message}
                                    </p>
                                </label>
                            }



                        <button className="form__btn" type='submit'>Login</button>

                    </form>
                </div>


                <div className="form__right">
                    <img src={registerImg} alt=""/>

                    <div className="form__right-nav">
                        <h3 className="form__right-title">
                            Sign Up to name
                        </h3>
                        <p className="form__right-text">
                            Lorem Ipsum is simply
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default Form;