import React from 'react';
import "./index.css";

const Home = () => {
  return (
    <>
      <section>
        <main>
          <div className="section-photo">
            <div className="grid-two-cols">
              <div className="myphoto">
              <img src='/images/self2.jpg'
                  alt="selfphoto" 
                  width="600" 
                  height="600" /> 
              </div>
              <div className="info">
                <br></br>
               <div className="check">
               <h1>Web <span className='dev-text'> Developer </span></h1>
               </div>  
                
               <div className="dark">
               <div>Name : Vyas Priyank Tejasbhai</div>
               <tr></tr>
               <div>Age : 21</div>
               <div>Gender : Male</div>
               <div>E-mail : priyanktejas.vyas@gmail.com</div>
               <div>Contact No. : 9712609341</div>
               </div>
               
                <br>
                </br>
                <br>
                </br>

                <button className="btn"> Contact Me</button>
                
              </div>
              
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Home;
