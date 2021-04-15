import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleSumbit = () => {
    e.preventDefault()
    console.log('hello World ')
  }

  return (
    <section className='section-center'>
      <h3>Tired of Boring Lorem Ipusm?</h3>
      <form action='' className='lorem-form' form={onsubmit()}>
        <label htmlFor='amount'>Paragraphs: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          officia?
        </p>
      </article>
    </section>
  )
}

export default App
