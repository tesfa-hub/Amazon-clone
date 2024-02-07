  import React from 'react'
  // import "./Header.css";
  import { BsSearch } from "react-icons/bs";
  import { SlLocationPin } from "react-icons/sl";
  import { BiCart } from "react-icons/bi";
  import LowerHeader from './LowerHeader.js'
  import classes from './Header.module.css'



function Header() {
  return (
    
      <div className={classes.fixed}>
        <section>

       

      <div  className={classes.header__container}>
      
        
      <div className={classes.logo__container}>
      * <a href="">
                  <img 
                   src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
 alt="amazon logo"/>
       </a> 
            <div  className={classes.delivery}>
              <span>
                <SlLocationPin/>
              </span>
              <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
              </div>
              </div>
      </div>

      
       <div className={classes.search}> 
            <select name="" id="">
              <option value="">All</option>
              </select> 
              <input type="text" name="" id="" placeholder='search product'/> 
            <BsSearch Size={25}/>
        </div>

        <div className={classes.order__container}>
          <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="" >
            
                  
                  
                 
                  
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  
              
            </a>
            <a href="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            <a to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
      </div>
      </div>
      <LowerHeader/>
      </section>

       </div>
  

  )
}

export default Header


