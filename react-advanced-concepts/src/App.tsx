import './App.css'
import { products } from './data';
import Row from './Row';
import List from './List';

function App() {
  return (
    <List>
        {products.map(product => 
            <Row
                key={product.id}
                title={product.title}
            ></Row>
        )}
    </List>
  );
}

export default App
