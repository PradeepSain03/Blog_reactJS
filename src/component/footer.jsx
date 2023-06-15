import React from 'react'
import '../style/footer.css'
import In from '../assets/in.jpg';
import L from '../assets/l.png';
import F from '../assets/f.png';
import T from '../assets/t.png';
function footer() {
  return (
    <>
    <div className='foo'>
     <div class=" flex-container ">
        <div class="sarvamatre ">

            <h2>Sarvamatra</h2>
            All trademarks, service marks, trade names and logos

            <br/> <br/>Email us at support@tofler.in<br/>

            <img src={In} className='fo' />
            <img src={L}  className='fo'/>
            <img src={T}    className='fo'/> 
            <img src={F}       className='fo'/>
        </div>
        <div class="company ">
            <h2>COMPANY</h2>
            <h4>HOME</h4>
            <h4>ABOUT US</h4>
            <h4>BLOGS</h4>
        </div>
        <div class="platform ">
            <h2>PRODLEY PLATFORM</h2>
            <h4>OVERVIEW</h4>
            <h4>ABOUT PRODLEY</h4>
            <h4>JOIN PRODELY</h4>
        </div>
        <div class="support ">
            <h2>SUPPORT</h2>
            <h4>HELP CENTER</h4>
            <h4>FAQ' S</h4>
            <h4>CHAT WITH US</h4>
            <h4>CONTACT US</h4>
        </div>
        <div class="policies ">
            <h2>POLICIES</h2>
            <h4>TREMS & CONDITIONS</h4>
            <h4>PRIVACY POLICY</h4>
            <h4>DISCLAIMIER</h4>

        </div>



    </div>
    <div class="get">
        <h2>GET OUR APP</h2>
    </div>
    <footer class="footer">
        <hr/>
        <p>Copyright@ 2023SIPL|All Rights Reserved|terms and conditions|privacy policy</p>
    </footer>
    </div>

    </>
  )
}

export default footer