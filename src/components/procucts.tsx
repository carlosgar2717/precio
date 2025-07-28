type props = {
  nombreprodut: string;
  setnombreprodut: (value: string) => void;
  inputvalue: string;
  setinputvalue: (value: string) => void;
  cantidad: number;
  setcantidad: (value: number) => void;
  costo: number;
  setcosto: (value: number) => void;
  iva: number;
  setiva: (value: number) => void;
  ganancia: number;
  setganancia: (value: number) => void;
  total: number;
  setTotal: (value: number) => void;
  setcantridadpro: (value: number) => void;
  cantidadpro: number;
  cambio: number;
  setcambio: (value: number) => void;
  ivapro: number;
  setivapro: (value: number) => void;
};

function procucts({
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

  setTotal,

  setcantridadpro,

  setcambio,

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

  const operar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setnombreprodut(inputvalue);
    setinputvalue("");
    setcantidad(0);
    setcosto(0);
    setiva(0);
    setganancia(0);
    console.log(inputvalue);

    if (cantidad > 0) {
      let step1 = costo / cantidad;
      let step2 = step1 + iva;
      let step3 = step2 * (ganancia / 100);
      let yu = step3 + step2;
      setTotal(yu);
      setcantridadpro(cantidad);
      setcambio(costo);
      setivapro(iva);
    } else {
      console.error("La cantidad debe ser mayor que 0");
    }
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
            style={{
              width: "100px",
              height: "60px",
              borderRadius: "15px",
              textAlign: "center",
              background: "yellow",
            }}
            value={cantidad}
            onChange={(e) => setcantidad(Number(e.target.value))}
            type="number"
          />
        </div>
        <div style={estilo.casilla}>
          <h2>Costo</h2>
          <input
            style={{
              width: "100px",
              height: "60px",
              borderRadius: "15px",
              textAlign: "center",
              background: "yellow",
            }}
            value={costo}
            onChange={(e) => setcosto(Number(e.target.value) || 0)}
            type="number"
          />
        </div>
        <div style={estilo.casilla}>
          <h2>IVA</h2>
          <input
            style={{
              width: "100px",
              height: "60px",
              borderRadius: "15px",
              textAlign: "center",
              background: "yellow",
            }}
            value={iva}
            onChange={(e) => setiva(Number(e.target.value) || 0)}
            type="number"
          />
        </div>
        <div style={estilo.casilla}>
          <h2>Ganancia</h2>
          <input
            style={{
              width: "100px",
              height: "60px",
              borderRadius: "15px",
              textAlign: "center",
              background: "yellow",
            }}
            value={ganancia}
            onChange={(e) => setganancia(Number(e.target.value) || 0)}
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
