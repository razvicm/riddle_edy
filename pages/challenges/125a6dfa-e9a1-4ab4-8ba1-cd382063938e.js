import Form from "../../components/Form";

function Challenge1() {
  return <>
    <div>Indiciul 1</div>
    <Form challenge={"challenge1"}>
      {/* raspuns corect */}
      <h2>Raspunsul este corect</h2>
      <iframe src="https://www.youtube.com/embed/mNNfZuIA1GQ" title="YouTube video player" frameBorder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
    </Form>
  </>
    ;
}

export default Challenge1