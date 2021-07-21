import React,{ useState } from 'react'
import data from "./data"
import "./styles.css"

const App = () => {
         const [paragraphs, setParagraphs] = useState([])
         const [numCount, setNumCount] = useState(0)
         
        
         const handleSubmit = (e)=>{
                  e.preventDefault()
                  let newNumCount = parseInt(numCount)
                  if (numCount <= 0){
                           newNumCount = 1
                  }

                  if(numCount>= 8){
                           newNumCount = 8
                  }
                  setParagraphs(data.slice(0,newNumCount))
         }
         return (
                  <main>
                           <section>
                                    <form onSubmit={handleSubmit}>
                                             <h1>Lorem Ipsum Paragraph Generator</h1>
                                             <div className="form-items">
                                                      <label htmlFor="counter">Paragraph</label>
                                                      <input type="number" 
                                                      id="counter"
                                                      name="counter" 
                                                      value={numCount}
                                                      onChange={(e)=>setNumCount(e.target.value)}/>
                                                      <button type="submit">Get Lorem Text</button>
                                              </div>
                                    </form>
                                    <article>
                                             {paragraphs.map((paragraph,index)=>{
                                                      return(
                                                               <p key={index}>
                                                                        {paragraph}
                                                               </p>
                                                      )
                                             })}
                                    </article>

                           </section>
                           
                           
                  </main>
         )
}

export default App
