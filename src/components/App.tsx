import "../styles/App.css";
import Vid from "../../public/rain-drops-on-window.1920x1080.mp4";
import Products from "../components/procucts";
import Operation from "../components/operation";
import { useState } from "react";

function App() {
  const [nombreproduct, setNombreprodut] = useState("");
  const [inputvalue, setInputvalue] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [costo, setCosto] = useState(0);
  const [iva, setIva] = useState(0);
  const [ganancia, setGanancia] = useState(0);
  const [total, setTotal] = useState(0);

  const [cantidadpro, setcantidadpro] = useState(0);
  const [costopro, setcostopro] = useState(0);
  const [ivapro, setivapro] = useState(0);

  return (
    <div className="main-box">
      <video className="vidfondo" autoPlay loop muted src={Vid}></video>
      <div className="products">
        <h1>Producto</h1>
        <div className="productdata">
          <Products
            nombreprodut={nombreproduct}
            setnombreprodut={setNombreprodut}
            inputvalue={inputvalue}
            setinputvalue={setInputvalue}
            costo={costo}
            setcosto={setCosto}
            cantidad={cantidad}
            setcantidad={setCantidad}
            iva={iva}
            setiva={setIva}
            ganancia={ganancia}
            setganancia={setGanancia}
            total={total}
            setTotal={setTotal}
            cantidadpro={cantidadpro}
            setcantridadpro={setcantidadpro}
            cambio={costopro}
            setcambio={setcostopro}
            ivapro={ivapro}
            setivapro={setivapro}
          />
        </div>
      </div>
      <div className="productsvent">
        <h1>Precio Venta</h1>
        <div className="productdata">
          <Operation
            operation={nombreproduct}
            total={total}
            cantidad={cantidadpro}
            costo={costopro}
            iva={ivapro}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
