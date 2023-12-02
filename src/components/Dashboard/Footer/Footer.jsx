import React from "react";
import "./Footer.css";
import { footer } from "../../Dashboard/data"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box-layout'>
            <div className='logo'>
              <div className="n-name" >MyMaids</div>
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Send</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box-layout itemlist'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer