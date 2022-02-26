import React from "react";
import './App.css'
import Logo from "./Image/logo.svg"
import Babe from "./Image/img.png"
import Man from "./Image/man.png"
import Arrow from "./Image/arrow.png"
import Push from "./Image/push.png"
import Forward from "./Image/forward.png"
import Graphic from "./Image/graphic.png"
import Meter from "./Image/meter.png"
import Dollar from "./Image/dollar.png"
import Pearson from "./Image/pearson.png"
import Brewdog from "./Image/brewdog.png"
import Bridgestone from "./Image/bridgestone.png"
import Travix from "./Image/travix.png"
import Klarna from "./Image/klarna.png"
import Vice from "./Image/vice.png"
import Deich from "./Image/deichmann.png"
import Waterstone from "./Image/waterstone.png"
import Fiver from "./Image/fiver.png"
import Exa from "./Image/exabyte.png"
import Sch from "./Image/scholar albert.png"
import Multi from "./Image/multichoice.png"
import Blue from "./Image/blue nile.png"
import Train from "./Image/trainline.png"
import Volker from "./Image/engel-volkers.png"
import itv from "./Image/itv.png"
import Hero from "./Image/delivery-hero.png"
import Katz from "./Image/katz-media.png"
import Content from "./Image/content.png"
import Upquote from "./Image/up-quote.png"
import Downquote from "./Image/down-quote.png"
import Dot from "./Image/dot.png"
import Man2 from "./Image/man2.jpg"
import Friends from "./Image/friends.png"
import Woman from "./Image/woman.jpg"
import Two from "./Image/two.jpg"
import Banner from "./Image/banner.png"
import Fb from "./Image/fb-1.png"
import Twitter from "./Image/twitter.png"
import You from "./Image/yuotube.jpg"
import Din from "./Image/linkdin.jpg"
import Glass from "./Image/glassdoor.png"
import lo from "./Image/lo.svg"
import Envolope from "./Image/envolope.png"

// import Globe from "./Image/globe-icon.jpg"




function App (){
  return(
    <div className="Container">
      <div className="Header">
        <div className="HeaderWrapper">
          <div><img src={Logo} className="Logo" /></div>
          <div className="Nav">

            <p>Products</p>
            <p>Plaform</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>
            {/* <p>{Globe}</p> */}

          </div>
        </div>
      </div>


      <div className="HeroHolder">
        <div className="HeroWrapper">
          <div className="Left">
        <h1 className="Heads">Delight made <br/>easy </h1>

          <p className="PMan">We make it fast and easy for your business to
            delight customers and employees.
          </p>
          <div className="but">
          <button className='but1'>Free Trials</button><span></span>
          <button className='but2'>Contact Sales</button>
          </div>

          </div>
          <div>
            <img src={Babe} className="Baby"/>
          </div>
        </div>
      </div>
      <div className="contain">
        <div className="wrap-contain">
          <div className="img-left">
            <img src={Man} className="man-pix"/>
          </div><span></span>

          <div className="text-right">
            <h1>Try the business software used by over <br/>50,000 companies across 
            the globe to <br/>exceed customer and employee<br/> expectations.</h1>

            <div className="btn-holder">
              <button className="button">Customer Service<img src={Arrow} 
              className="arrow-icon"/></button>
              <button className="button" id="span">IT Service Management
              <img src={Arrow} className="arrow-icon"/></button><br/>
              <button className="button" >HR Management
              <img src={Arrow} className="arrow-icon"/></button>
              <button className="button"id="span">Sales Automation
              <img src={Arrow} className="arrow-icon"/></button><br/>
              <button className="button">Marketing Automaton
              <img src={Arrow} className="arrow-icon"/></button>
              <button className="button" id="span">All Products & Trials
              <img src={Arrow} className="arrow-icon"/></button> 
            </div>
          </div>
        </div>
      </div>
      <div className="holder">
        <div className="text-spec">
          <div className="top-text-holder">
            <h1 className="just-h1">Frictionless, simple, easy</h1><br/>
            <p className="text-holder">Freshworks makes it fast and easy for businesses to delight 
              their customers and employees.</p><br/>
            <p className="text-holder">We take a fresh approach to how businesses discover, engage with, and realize value 
              from software throughout their journey.</p>
          </div>
          <div className="icons-container">
              <div className="left">
                <div><img className="push" src={Push}/>
              <h1>Get up and running with no barriers</h1><br/>
              <p className="margin">Try or purchase our software directly from our website,<br/> and 
                onboard in a matter of days, not months.</p>
              <p className="color">Start free trial<span></span>
              <img className="forward" src={Forward}/></p>            
              </div>

              <div><img className="graphic" src={Graphic}/>
              <h1>Build and customize as you go</h1><br/>
              <p className="margin">Extend and tailor experiences to meet your unique<br/> 
                business needs, with low-code development and over 1,100 <br/>
                custom apps made available on our marketplace.</p>
              <p className="color">Visit marketplace<span></span>
              <img className="forward" src={Forward}/></p>            
              </div>
              </div>
              <div className="right">
                <div className="dollar-cont"><img className="doller" src={Dollar}/>
              <h1>Choose your pricing plan</h1><br/>
              <p className="margin-right">Our pricing plans are designed for modern business use<br/> 
                cases and affordable for organizations of all sizes.</p>
              <p className="color">See pricing<span></span>
              <img className="forward" src={Forward}/></p>            
              </div>

              <div className="dollar-cont"><img className="doller" src={Meter}/>
              <h1>Create value, fast</h1><br/>
              <p className="margin-right">Accelerate your team’s productivity and efficiency with<br/> 
                modern automation and collaboration tools, to get tangible <br/>
                results in no time.</p>
              <p className="color">Learn how<span></span>
              <img className="forward" src={Forward}/></p>            
              </div>
              </div>
          </div>
        </div>        
      </div>
      <div className="wrap-contain">
        <div className="wrap-folder">
          <div className="wrap">
          <h1>Trusted by 50K+ customers big and small</h1><br/>
          <p className="font">We are a leading provider of modern SaaS solutions that solve multiple, 
            complex business problems to companies of all sizes. Businesses from</p><br/>
          <p className="font">more than 120 countries around the world use Freshworks’ 
            products to delight their customers and employees every day.</p>
        </div>
        <div >
          <img src={Pearson}/>
          <img src={Brewdog}/>
          <img src={Bridgestone}/>
          <img src={Travix}/>
          <img src={Klarna}/>
          <img src={Vice}/>
          <img src={Deich}/>
          <img src={Waterstone}/>
          <img src={Fiver}/>
          <img src={Exa}/>
          <img src={Sch}/>
          <img src={Multi}/>
          <img src={Blue}/>
          <img src={Train}/>
          <img src={Volker}/>
          <img src={itv}/>
          <img src={Hero}/>
          <img src={Katz}/>          
        </div>
        </div>
      </div>
      <div className="waterstone-contain">
        <div className="water-holder">
            <div className="image">
              <img className="up-quote" src={Upquote}/>
              <img className="content" src={Content}/>
              <img className="down-quote" src={Downquote}/>            
            </div>

        <div className="text">
          <p>“The Freshworks team was a great asset during implementation
            and continue to be a key partner</p><br/>
          <p>for Waterstons as we look to further mature and improve our services
            to customers, tailored to</p><br/>
          <p>their specific needs.”</p><br/><br/>
          <h2>Alex Bookless, Head of Managed Services, Waterstons</h2>
        </div>

        <div className="dot-content">
          <img className="dot" src={Dot}/>
        </div>
      </div>
        </div>
      <div className="company">
        <div className="company-holder">
          <h1 className="h1-tag">We aspire to be one of the most loved companies in the world</h1>
          <div className="company-img">
              <div className="save"><img className="class-imgs" src={Man2}/>
              <h1>Culture</h1>
              <p className="reduce-text">A culture that supports high<br/>-quality work, joy and pride in that work, 
                speed to execution, and intense customer focus.</p></div>

                <div className="save"><img className="class-imgs" src={Friends}/>
              <h1>Diversity</h1>
              <p className="reduce-text">Full-spectrum diversity, equity, and inclusion are key priorities 
                for us.</p></div>
              
              <div className="save"><img className="class-imgs" src={Woman}/>
              <h1>Experience</h1>
              <p className="reduce-text">Focus on enhancing the team experience by strengthening our managers’ 
                leadership capabilities</p></div>
              
              <div className="save"><img className="class-imgs" src={Two}/>
              <h1>Team</h1>
              <p className="reduce-text">4,000 employees and growing in offices across India, US, 
                Europe, and Australia.</p></div>
              
          </div>
          <div className="c-btn">
            <buttton className="btn">SEE LIFE AT FRESHWORKS</buttton>
          </div>
        </div>
      </div>
      <div className="banner"><img className="b-img" src={Banner}/>
        <div className="banner-holder">
          
          <h1 className="h1-banner">Ready to get started?</h1>
          <p className="p-banner">Join our community of 50,000+ companies of all sizes who use 
            Freshworks’ modern SaaS products to make it fast and easy to<br/>
            delight their customers and employees.</p>
        </div>
        <div className="banner-btn">
          <button className="banner-btn2">CONTACT SALES</button>
        </div>

      </div>
      <div className="last-comtainer">
        <div className="last-holder">
          <div className="list-container">
            
            <ul className="first-list">
             <li> <img className="list-img" src={lo}/></li>
              <li>Freshdesk</li>
              <li>Freshsales</li>
              <li>Freshmarketer</li>
              <li>Freshservice</li>
              <li>Freshteam</li>
            </ul><br/>
            <ul className="second-list">
              <li><th>Company</th></li>
              <li>About</li>
              <li>Leadership</li>
              <li>Board of Directors</li>
              <li>Investors</li>
              <li>Customers</li>
              <li>Affiliates</li>
              <li>Partners</li>
              <li>Philanthropy</li>
              <li>Careers</li>
              <li>News room</li>
              <li>GDPR</li>
              <li>Tax FAQs</li>
              <li>Contact us</li>                            
            </ul>
            <ol className="img-list">
              <th>CONNECT WITH US</th>
              <img className="resize" src={Fb}/>
              <img className="resize" src={Twitter}/>
              <img className="resize" src={You}/><br/>
              <img className="resize" src={Din}/>
              <img className="resize" src={Glass}/>                            
            </ol>
          </div>
        </div>

      </div>
      <div className="footer">
        <ul className="footer-content">
          <li className="left">Terms of service -</li>
          <li className="left"> Privacy Notice - </li>
          <li className="left"> Takedown Policy - </li>
          <li className="left"> GDPR - </li>
          <li className="left">Security-</li>
          <li className="left"> CSR Policy-</li>
          <li className="left">Tax FAQs - </li>
          <li className="left"> Unsubscribe</li> 
        </ul>
        <div className="right">Copyright © Freshworks Inc. All Rights Reserved</div>           
      </div>
      {/* <div className="envolope-content">
          <button className="envolope-button" ><img className="env-img"  src={Envolope}/>CONTACT SALES</button>
        </div> */}
    </div>
  )
}

export default App
 