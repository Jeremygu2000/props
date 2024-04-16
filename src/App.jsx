import Article from './Article' // Import the Article component
import Button from './Button' // Import the Button component

const App = () => {

  const handleClick = () => {
    alert('The world is for you Jeremy');
  };

  return (
    <>
      <h1> Comprendre les PROPS</h1>
      <Button isLoading onClick={handleClick} id='Hello' type='reset'> Click Here</Button>
      <Article id={1} title="Hello earth" truc="machin" >
        <p>
          <strong>EARTH</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Article>

      <Article id={2} title="Hello moon" bidule="fuck" >
        <p>
          <strong>MOON</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Article >

    </>
  )
}

export default App ;