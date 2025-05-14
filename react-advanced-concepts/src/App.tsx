import './App.css'
import { products } from './data';
import Row from './Row';
import List from './List';
import useList from './useList';

function App() {
  const [selected, onNext] = useList(products);
  return (
    <div className="List">
      {products.map(product => 
        <Row
              key={product.id}
              title={product.title}
              isHighlighted={selected === product}
            >
            </Row>
      )}
      <hr />
      <button onClick={onNext}>
        Next
      </button>
    </div>
  );
}

export default App
