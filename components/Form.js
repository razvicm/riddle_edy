import React from 'react'
import styles from '../styles/Home.module.scss'


function Form({ children, challenge }) {
  const [value, setValue] = React.useState('')
  const [correctAnswer, setCorrectAnswer] = React.useState('')
  const [wrongAnswer, setWrongAnswer] = React.useState('')

  const checkResponse = async () => {
    if (!value) {

      return
    }

    // console.log(process.env.NEXT_PUBLIC_challenge1);
    const chall = `NEXT_PUBLIC_${challenge}`
    console.log(process.env[chall]);
    if (process.env.NEXT_PUBLIC_challenge1 === value.toLowerCase()) {

      setCorrectAnswer(true)
      setWrongAnswer(false)
    }

    else {
      setWrongAnswer(true)
      setCorrectAnswer(false)
    }

    return;

    const res = await fetch("/api/hello", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ challenge, value })
    }).then(res => res.json())
    console.log(res);
    if (res.status === "correct") {

      setCorrectAnswer(true)
      setWrongAnswer(false)
    }

    else {
      setWrongAnswer(true)
      setCorrectAnswer(false)
    }
  }


  return <form className={styles.form} onSubmit={e => e.preventDefault()}>
    <input required type="text" value={value} onChange={e => setValue(e.target.value)} />
    <button type="submit" onClick={checkResponse}>Trimite</button>
    {correctAnswer ? children : <p />}
    {wrongAnswer ? <h3>Raspuns gresit</h3> : <p />}
  </form>
}

export default Form