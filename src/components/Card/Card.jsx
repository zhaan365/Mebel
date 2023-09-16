
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {CustomContext} from "../../config/context/context";



const Card = ({item}) => {

    const {favorites, favoritesHandler, addCarts, user, addCartsCountPlus, removeCartsCountMinus} = useContext(CustomContext)

    const navigate = useNavigate()

    return (
        <div className='card'>
            <span className="card__fav" onClick={() => favoritesHandler(item)}>
                {
                    favorites.some(el => el.id === item.id) ? <AiFillHeart color={'red'}/> : <AiOutlineHeart/>
                }
            </span>
            <Link to={`/product/${item.id}`}>
                <img src={`/${item.image}`} alt="" className="card__image"/>
            </Link>
            <h3 className="card__title">
                {item.title}
            </h3>
            <p className="card__category">
                {item.category}
            </p>
            <p className="card__price">
                {item.price}₽
            </p>

            <div className="card__sizes">
                <h4 className="card__sizes-title">
                    Размеры
                </h4>
                <div className="card__sizes-info">
                    <p className="card__sizes-size">
                        <span>ШИРИНА</span>
                        {item.width} СМ
                    </p>
                    x
                    <p className="card__sizes-size">
                        <span>ГЛУБИНА</span>
                        {item.deep} СМ
                    </p>
                    x
                    <p className="card__sizes-size">
                        <span>ВЫСОТА</span>
                        {item.height} СМ
                    </p>
                </div>

                {
                    user.carts?.some(el => el.id === item.id) ?
                        <div className="card__sizes-count">
                        <button style={{background: 'red'}} type='button' onClick={() => removeCartsCountMinus(item.id)}>-</button>
                        <span>{
                            user.carts.find(el => el.id === item.id).count
                        }</span>
                        <button style={{background: 'green'}} type='button' onClick={() => addCartsCountPlus(item.id)}>+</button>
                    </div>
                        : <button type='button' className="card__sizes-btn" onClick={() => {
                        if ('id' in user){
                            addCarts(item)
                        } else {
                            navigate('/login')
                        }
                    }}>
                            Добавить в корзину
                    </button>
                }
            </div>
        </div>
    );
};

export default Card;









