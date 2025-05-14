import './App.css'
import { products } from './data';
import Row from './Row';
import List from './List';

function App() {
  return (
    <List
        items={products}
        renderItem={(product: any) => {
          return (
            <Row
              key={product.id}
              title={product.title}
            >
            </Row>
          )
        }}
    />
  );
}

export default App
