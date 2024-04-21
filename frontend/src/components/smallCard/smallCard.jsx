import { Link } from 'react-router-dom';
import './smallcard.scss';

const smallCard = ({ item ,animation}) => {
    return (
        <div className="smallcard" aos-data={animation}>

            <Link to={`/${item.id}`} className='imgContainer' >
                <img src={item.images[0]} alt="" />
                <div className="city">
                    <img src="/pin.png" alt="" />
                    <span> {item.address}</span>
                </div>
            </Link>
            <div className="textContainer">
                <h2 className='title'>
                    <Link to={`/${item.id}`} >{item.title}</Link>
                </h2>
                <div className="icons">
                    <p className='price'>
                        $ {item.price}
                    </p>
                    <div className='displayicons'>
                    <div className="icon">
                        <img src="/save.png" alt="" />
                    </div>
                    <div className="icon">
                        <img src="/chat.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default smallCard;