import { Link } from 'react-router-dom';
import './smallcard.scss';

const smallCard = ({ item }) => {
    return (
        <div className="smallcard">

            <Link to={`/${item.id}`} className='imgContainer' >
                <img src={item.images[0]} alt="" />
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