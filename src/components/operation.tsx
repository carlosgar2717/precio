type props = {
  operation: string;
  total: number;
  cantidad: number;
  costo: number;
  iva: number;
};
function operation({ operation, total, cantidad, costo, iva }: props) {
  const estilos = {
    data: {
      textAlign: "center",
      marginTop: "15px",
    },
    p: {
      marginTop: "35px",
      marginBottom: "45px",
    },
  };
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <h1>Producto : {operation}</h1>
      <h2>
        Operación <p style={estilos.p}>Cantidad de Producto : {cantidad}</p>
        <p style={estilos.p}>Costo de Compra: {costo}</p>
        <p style={estilos.p}>+ Iva : {iva}</p>
      </h2>
      <h1 style={{ background: "yellow", color: "black" }}>
        Costo para Venta : {total}$
      </h1>
    </div>
  );
}

export default operation;
