import { Encabezado } from './Encabezado';
import { CuerpoPosteo } from './CuerpoPosteo';
import { PieDePosteo } from './PieDePosteo';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <Encabezado />
      <CuerpoPosteo />
      <PieDePosteo />
    </div>
  );
}

export default App;