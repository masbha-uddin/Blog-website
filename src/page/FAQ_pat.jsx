import React from 'react'
import './FAQ_pat.css'

function FAQ_pat() {

function click(e) {
    const answer = e.currentTarget.nextElementSibling;
    const arr = e.currentTarget.querySelector('.arrow');

    if (answer.style.display === "none") {
      answer.style.display = "block";
      answer.style.marginBottom= "60px";
      arr.innerHTMl = '▼'

    } else {
      answer.style.display = "none";
      arr.innerHTMl = '▶'

    }
  }


  
  return (
    <div>
       
      <div className='FAQ_pat_1'>

        <div className='FAQ_left_pat'>
            <img src='img/img_9.png' className='img_9'/>

        </div>

        <div className='FAQ_right_pat'>
            <h5>FAQ</h5>
            <div className='line_11'></div>
            <h1>Frequently Asked Questions</h1>


          {/* Section pat   */}
          <section className="faq-section">
            
              <div className="faq-item">
                <button className="faq-question" onClick={click} >
                   Do you work with businesses of all sizes?
                  <span className="arrow">▶</span>
                </button>

                <div className="faq-answer">
                  <p>
                    Yes, we work with startups, small businesses,
                    and large enterprises, tailoring our services
                    to meet each client's unique requirements.
                  </p>
                </div>
                <div className='line_13'></div>
              </div>

            <div className="faq-item">
                <button className="faq-question" onClick={click}>
                  How do I get started with your services?
                    <span className="arrow">▶</span>
                </button>

              <div className="faq-answer">
                <p>
                    Contact us through our website and tell us
                    about your business needs. We will guide you
                    through the next steps.
                </p>
              </div>
                <div className='line_13'></div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={click}>
                What industries do you serve?
                <span className="arrow">▶</span>
              </button>

                <div className="faq-answer">
                  <p>
                    We serve technology, healthcare, education,
                    retail, and many other industries.
                  </p>
                </div>
                <div className='line_13'></div>
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={click}>
                How long does it take to see results?
                <span className="arrow">▶</span>
              </button>

                <div className="faq-answer">
                  <p>
                    The timeline depends on your goals,
                    project requirements, and business needs.
                  </p>
                </div>
                <div className='line_13'></div>
            </div>

          </section> 

        </div>

      </div> 








    </div>
  )
}

export default FAQ_pat