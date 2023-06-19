import React from 'react'
import './style.scss'
import Header from '../header/header';

const mainpage = "https://library-it.com/wp-content/uploads/2020/12/ilja_kantor_sovremennyj_uchebnik-1chast.jpg"

const CardBook = () => {
    return ( 
        <>
            <Header />

            <div className="card">
                
                <div className="card__left">
                    <div className="card__name">Язык Javascript</div>
                    <div className="card__author">Илья Контор</div>
                    <div className="card__categories">computer</div>
                    <div className="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad explicabo laboriosam omnis, modi atque dignissimos a aliquid vitae temporibus quis deserunt dolor, quos, nemo itaque libero mollitia nihil enim!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quibusdam illo nam cupiditate fuga, consequuntur expedita ipsum nisi. Modi aspernatur nam neque, accusantium necessitatibus id repudiandae quod reprehenderit porro natus.
                        Porro nam optio provident saepe aliquid cum eius magni eveniet. Consequatur odio quaerat at modi tenetur accusantium cum quasi aperiam ad, voluptates, quae accusamus dolore, aut nemo adipisci ea quidem?
                        Eveniet nesciunt repellendus autem facilis quas, minima rem sed rerum commodi, adipisci corporis. Temporibus, modi maiores quo accusantium unde vel possimus dignissimos nihil totam. Obcaecati aperiam delectus perferendis dolore odio.
                        </div>
                </div>
                <div className="card__right">
                    <img src={mainpage} alt="Book image" />
                </div>
            </div>
        </>
    );
}
 
export default CardBook;