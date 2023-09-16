

import {useContext} from "react";
import {CustomContext} from "../../config/context/context";
import {useForm} from "react-hook-form";


const Checkout = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()

    const {user, addOrder} = useContext(CustomContext)

    const submitForm = (data) => {
        let order = {
            ...data,
            order: user.carts,
            totalPrice: user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)
        }
        addOrder(order)
    }


    return (
        <section className="checkout">
            <div className="container">
                <h2 className="cart__title">
                    Оформление заказа
                </h2>
                <form className="checkout__form" onSubmit={handleSubmit(submitForm)}>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Данные покупателя
                        </h3>
                        <div className="checkout__form-fields">
                            <input {...register('name')} defaultValue={user.name} type="text" className="checkout__form-field" placeholder="Имя"/>
                            <input {...register('email')} defaultValue={user.email} type="email" className="checkout__form-field" placeholder="E-mail"/>
                            <input {...register('phone')} defaultValue={user.phone} type="tel" className="checkout__form-field" placeholder="Телефон"/>
                        </div>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Ваш заказ
                        </h3>
                        <ul className="checkout__form-list">
                            <li className="checkout__form-item">
                                <p className="checkout__form-product">
                                    Товар
                                </p>
                                <p className="checkout__form-price">
                                    Всего
                                </p>
                            </li>
                            {
                                user.carts?.map((item) => (
                                    <li key={item.id} className="checkout__form-item">
                                        <p className="checkout__form-product">
                                            {item.title}
                                        </p>
                                        <p className="checkout__form-price">
                                            {item.count} / {item.price * item.count} ₽
                                        </p>
                                    </li>
                                ))
                            }
                            <li className="checkout__form-item checkout__form-item_count">
                                <p className="checkout__form-product">
                                    Итого:
                                </p>
                                <p className="checkout__form-price">
                                    {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)}₽
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Адрес получателя
                        </h3>
                        <div className="checkout__form-fields">
                            <input {...register('country')} type="text" className="checkout__form-field" placeholder="Страна"/>
                            <input {...register('city')} type="text" className="checkout__form-field" placeholder="Город"/>
                            <input {...register('street')} type="text" className="checkout__form-field" placeholder="Улица"/>
                            <input {...register('home')} type="text" className="checkout__form-field" placeholder="Дом"/>
                            <input {...register('flat')} type="text" className="checkout__form-field" placeholder="Квартира"/>
                        </div>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Способы оплаты
                        </h3>
                        <div className="checkout__form-list">
                            <label className="checkout__form-label">
                                <input type="checkbox"/>
                                Оплата наличными
                            </label>
                            <button className="checkout__form-btn">
                                Разместить заказ
                            </button>
                        </div>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Комментарии
                        </h3>
                        <textarea {...register('info')} className="checkout__form-commit" placeholder="Дополнительная информация">

                        </textarea>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;