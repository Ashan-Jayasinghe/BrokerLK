import "./footer.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer>
            <div className="top">
                <div className="description">
                    <a  href="/"className="logo">
                        <img src="/logo.png" alt="" />
                        <span>BrokerLK</span>
                    </a>

                    <p>
                        Welcome to Broker.lk , your one -stop shop  for boarding accommodations.
                        Whether you are a university student or a working person, we are here to
                        make your stay unforgettable.
                    </p>
                </div>
                <div className="col">
                    <h5>Usefull Links</h5>

                    <a href="#">Your Account</a>
                    <a href="/add">Post New Add</a>
                    <a href="/">Help</a>

                </div>
                <div className="contact-links">
                    <h5>Contact Informations</h5>

                    <p>
                        <i class="bi bi-house-door"></i> No 10, Matara, Sri Lanka.
                    </p>
                    <p>
                        <i class="bi bi-envelope"></i> broker2024@gmail.com
                    </p>
                    <p>
                        <i class="bi bi-telephone-fill"></i> +94 77 677 5454
                    </p>
                    <p>
                        <i class="bi bi-whatsapp"></i> +94 11 456 4556
                    </p>
                </div>
            </div>

            <div className="bottom">
                    <hr/>
                    <p>2024 BrokerLK All Right Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;