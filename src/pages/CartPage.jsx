import React from "react";

export const CartPage = () => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>

      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">
          Comprar
        </button>
       
      </div>
    </>
  );
};
