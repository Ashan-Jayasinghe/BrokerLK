import React from 'react';
import './contact.scss';
import Nav from "../../components/navbar/Navbar";

export default function Contact() {
  return (
    <div className='contactPage'>
        <div className='cTextContainer'>
            <div className='cWrapper'>
                <h1 className='cTitle'>
                    Send Your Feedback:
                </h1>
                <p>
                    Welcome to BrokerLK - your go-to destination for hassle-free house
                    rentals. Browse our extensive listings with ease and find the
                    perfect home that fits your lifestyle. Start your search now and
                    discover your next rental adventure!
                </p>
                <form className='cForm'>
                    <input name="username" type="text" required placeholder="Username" />
                    <input name="email" type="text" required placeholder="Email" />
                    <textarea name="message" rows="5" required placeholder="Feed-Back" ></textarea>
                    <button >Submit</button>
                </form>
            </div>

        </div>
        <div className='cImageContainer'>
            <img src="/c1.jpeg" alt="" />
        </div>
    </div>
  )
}
