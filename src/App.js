import { useState } from 'react';
import './App.css';

function App() {

  const quotes = [
    {
      quote: 'Lo peor que hacen los malos es obligarnos a dudar de los buenos.',
      author: 'Jacinto Benavente'
    },
    {
      quote: 'Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera.',
      author: 'Albert Einstein'
    },
    {
      quote: 'Vale más actuar exponiéndose a arrepentirse de ello, que arrepentirse de no haber hecho nada.',
      author: 'Giovanni Boccaccio'
    },
    {
      quote: 'Ningún hombre es lo bastante bueno para gobernar a otros sin su consentimiento.',
      author: 'Abraham Lincoln'
    },
    {
      quote: 'Estar preparado es importante, saber esperarlo es aún más, pero aprovechar el momento adecuado es la clave de la vida.',
      author: 'Arthur Schnitzler'
    },
    {
      quote: 'El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice.',
      author: 'Aristóteles'
    },
    {
      quote: 'Lo que importa verdaderamente en la vida no son los objetivos que nos marcamos, sino los caminos que seguimos para lograrlos.',
      author: 'Peter Bamm'
    },
    {
      quote: 'De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir.',
      author: 'John Steinbeck'
    },
    {
      quote: 'De humanos es errar y de necios permanecer en el error.',
      author: 'Marco Tulio Cicerón'
    },
    {
      quote: 'La verdadera sabiduría está en reconocer la propia ignorancia.',
      author: 'Sócrates'
    },
    {
      quote: 'El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.',
      author: 'William George Ward'
    },
    {
      quote: 'Es mejor permanecer callado y parecer tonto que hablar y despejar cualquier duda.',
      author: 'Groucho Marx'
    },
    {
      quote: 'La inspiración existe, pero tiene que encontrarte trabajando.',
      author: 'Picasso'
    },
    {
      quote: 'Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle.',
      author: 'Stephen Hawking'
    },
    {
      quote: 'La mejor manera de librarse de la tentación es caer en ella.',
      author: 'Oscar Wilde'
    },
    {
      quote: 'Uno llega a ser grande por lo que lee y no por lo que escribe.',
      author: 'Jorge Luis Borges'
    },
    {
      quote: 'El único hombre que no se equivoca es el que nunca hace nada.',
      author: 'Goethe'
    },
    {
      quote: 'Se necesita poco para hacer las cosas bien, pero menos aún para hacerlas mal.',
      author: 'Paul Bocuse'
    },
    {
      quote: 'La historia se repite, ese es uno de los errores de la historia.',
      author: 'Charles Darwin'
    },
    {
      quote: 'Trabaja en algo, para que el diablo te encuentre siempre ocupado.',
      author: 'San Jerónimo'
    },
    {
      quote: 'El hombre se complace en enumerar sus pesares, pero no de enumerar sus alegrías.',
      author: 'Fiodor Dostoievski'
    },
    {
      quote: 'Es sencillo hacer que las cosas sean complicadas, pero es difícil hacer que sean sencillas.',
      author: 'Friedrich Nietzsche'
    },
    {
      quote: 'La felicidad no brota de la razón, sino de la imaginación.',
      author: 'Immanuel Kant'
    },
    {
      quote: 'La experiencia no es lo que te ocurre, es lo que haces con lo que te ocurre.',
      author: 'Aldous Huxley'
    },
    {
      quote: 'Si la oportunidad no llama, construye una puerta.',
      author: 'Milton Berle'
    },
    {
      quote: 'El mundo pertenece a los optimistas; los pesimistas son meros espectadores.',
      author: 'D. Einsnhower'
    },
    {
      quote: 'La inteligencia es la habilidad de adaptarse al cambio.',
      author: 'Stephen Hawking'
    },
    {
      quote: 'No tengo talentos especiales. Solo soy apasionadamente curioso.',
      author: 'Albert Einstein'
    },
    {
      quote: 'No te tomes la vida demasiado en serio; de todas maneras, no saldrás vivos de esta.',
      author: 'Bernard Fontenelle'
    },
    {
      quote: 'La creatividad requiere el coraje de prescindir de las certezas.',
      author: 'Erich Fromm'
    },
    {
      quote: 'La inteligencia sin ambición es un pájaro sin alas.',
      author: 'Salvador Dalí'
    },
    {
      quote: 'Hay una fuerza más poderosa que el vapor, la electricidad y la energía atómica: la voluntad.',
      author: 'Albert Einstein'
    },
    {
      quote: 'Nunca moriría por mis creencias, porque podría estar equivocado.',
      author: 'Bertrand Russell'
    },
    {
      quote: 'La vida es un diez por ciento como la hacemos y un noventa por ciento como la tomamos.',
      author: 'Irving Berlín'
    },
    {
      quote: 'Hay dos clases de hombres: quienes hacen la historia y quienes la padecen.',
      author: 'Camilo José Cela'
    }
  ]

  const colors = [
    '#16a085',
    '#27ae60',
    '#4d7296',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#442d59',
    '#7a4c51',
    '#adac8c',
    '#77B1A9',
    '#73A857'
  ]

  function getRandomElement(arr) {
    return (
      arr[Math.floor(Math.random() * arr.length)]
    )
  }

  function getAnotherElement(element, arr) {
    let newElement = arr[Math.floor(Math.random() * arr.length)];
    return (
      element !== newElement ? newElement : getAnotherElement(element, arr)
    )
  }

  function cambiar() {
    setQuote(getAnotherElement(rndQuote, quotes));
    setColor(getAnotherElement(rndColor, colors));
  }

  const [rndQuote, setQuote] = useState(getRandomElement(quotes));
  const [rndColor, setColor] = useState(getRandomElement(colors));

  return (
    <div id='wrapper' className="d-flex align-items-center vh-100" style={{ backgroundColor: rndColor }}>
      <div id='quote-box' className='card container' style={{ width: '30rem', height: 'auto' }}>
        <div id='qoute-text' className='m-4'>
          <i><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill={rndColor} d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" /></svg></i>
          <span id='text' style={{ color: rndColor }}> {rndQuote.quote} </span>
        </div>
        <div className="row m-2" style={{ height: 'auto' }}>
          <div>
            <span id='author' style={{ color: rndColor }}>- {rndQuote.author}</span>
          </div>
        </div>
        <div className="row m-4" style={{ height: 'auto' }}>
          <div className="col-3">
            <a href="twitter.com/intent/tweet" id="tweet-quote" title="Tweetear esta cita!" style={{ backgroundColor: rndColor }}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 30 24"><path fill="white" d="M29.55 2.85a12.813 12.813 0 0 1-3.004 3.106l-.036.025q.018.262.018.787a17.203 17.203 0 0 1-.745 4.987l.032-.122a17.56 17.56 0 0 1-2.206 4.724l.04-.065a18.49 18.49 0 0 1-3.435 3.927l-.024.02a15.333 15.333 0 0 1-4.73 2.704l-.108.033c-1.765.648-3.803 1.022-5.928 1.022H9.29h.007h-.127c-3.41 0-6.584-1.015-9.234-2.76l.063.039c.419.048.904.075 1.396.075h.07h-.004l.126.001c2.807 0 5.386-.975 7.417-2.606l-.023.018a6.073 6.073 0 0 1-5.65-4.157l-.012-.043c.342.057.738.091 1.141.094h.003a6.26 6.26 0 0 0 1.637-.216l-.044.01a5.98 5.98 0 0 1-3.47-2.08l-.008-.011a5.816 5.816 0 0 1-1.379-3.773l.001-.084v.004v-.075a5.922 5.922 0 0 0 2.727.768h.011a6.094 6.094 0 0 1-1.953-2.129l-.016-.031a6 6 0 0 1-.731-2.889c0-1.126.306-2.18.84-3.084l-.015.028a17.29 17.29 0 0 0 5.425 4.427l.095.045c2.022 1.067 4.402 1.743 6.927 1.864l.038.001a6.548 6.548 0 0 1-.149-1.382v-.001a6.062 6.062 0 0 1 10.477-4.147l.003.003A11.857 11.857 0 0 0 28.772.415l-.053.03a5.913 5.913 0 0 1-2.635 3.323l-.028.015a12.045 12.045 0 0 0 3.569-.967l-.077.031z" /></svg></i>
            </a>
          </div>
          <div className="col"></div>
          <div className="col-4">
            <button id="new-quote" className="float-end" onClick={cambiar} style={{ backgroundColor: rndColor }}>Nueva Cita</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
