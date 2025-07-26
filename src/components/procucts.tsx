type props = {
  nombreprodut: string;
  setnombreprodut: string;
  inputvalue: string;
  setinputvalue: string;
  cantidad: number;
  setcantidad: number;
  costo: number;
  setcosto: number;
  iva: number;
  setiva: number;
  ganancia: number;
  setganancia: number;
  total: number;
  setTotal: number;
  setcantridadpro: number;
  cantidadpro: number;
  cambio: number;
  setcambio: number;
  ivapro: number;
  setivapro: number;
};

function procucts({
  nombreprodut,
  setnombreprodut,
  inputvalue,
  setinputvalue,
  cantidad,
  setcantidad,
  costo,
  setcosto,
  iva,
  setiva,
  ganancia,
  setganancia,
  total,
  setTotal,
  cantidadpro,
  setcantridadpro,
  cambio,
  setcambio,
  ivapro,
  setivapro,
}: props) {
  const estilo = {
    casilla: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "25px",
    },
    input: {
      width: "100px",
      height: "60px",
      borderRadius: "15px",
      textAlign: "center",
      background: "yellow",
    },
    box: {
      display: "flex",
      justifyContent: "center",
    },
  };

  const operar = (e) => {
    e.preventDefault();
    setnombreprodut(inputvalue);
    setinputvalue("");
    setcantidad(0);
    setcosto(0);
    setiva(0);
    setganancia(0);
    console.log(inputvalue);
    let step1 = costo / cantidad;
    let step2 = step1 + iva;
    let step3 = step2 * (ganancia / 100);
    let yu = step3 + step2;
    setTotal(yu.toFixed(2));
    setcantridadpro(cantidad);
    setcambio(costo);
    setivapro(iva);
  };

  return (
    <div>
      <form onSubmit={operar}>
        <div style={estilo.casilla}>
          <h2>Producto</h2>
          <input
            value={inputvalue}
            onChange={(e) => setinputvalue(e.target.value)}
            type="text"
            placeholder="Nombre del Producto....."
          />
        </div>
        <div style={estilo.casilla}>
          <h2>Cantidad</h2>
          <input
            value={cantidad}
            onChange={(e) => setcantidad(Number(e.target.value))}
            style={estilo.input}
            type="number"
          />
        </div>
        <div style={estilo.casilla}>
          <h2>Costo</h2>
          <input
            value={costo}
            onChange={(e) => setcosto(Number(e.target.value) || 0)}
            style={estilo.input}
            type="number"
          />
        </div>
        <div style={estilo.casilla}>
          <h2>IVA</h2>
          <input
            value={iva}
            onChange={(e) => setiva(Number(e.target.value) || 0)}
            style={estilo.input}
            type="number"
          />
        </div>
        <div style={estilo.casilla}>
          <h2>Ganancia</h2>
          <input
            value={ganancia}
            onChange={(e) => setganancia(Number(e.target.value) || 0)}
            style={estilo.input}
            type="number"
          />
        </div>
        <button
          style={{
            position: "absolute",
            left: "37%",
            top: "86%",
            fontSize: "30px",
            transition: "ease-in-out 0.3s",
            fontFamily: "monospace",
            background: "darkolivegreen",
            cursor: "pointer",
          }}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default procucts;
