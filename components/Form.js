import React from 'react'


function Form({ children, challenge }) {
  const [value, setValue] = React.useState('')
  const [correctAnswer, setCorrectAnswer] = React.useState('')
  const [wrongAnswer, setWrongAnswer] = React.useState('')

  const checkResponse = async () => {
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


  return <div>
    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    <button type="submit" onClick={checkResponse}>Submit</button>
    {correctAnswer && children}
    {wrongAnswer && <h4>Raspuns gresit</h4>}
  </div>
}

export default Form