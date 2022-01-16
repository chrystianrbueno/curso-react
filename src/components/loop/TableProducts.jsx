import "./TableProducts.css"
import products from "../../data/products";
import React from "react";

export default (props) => {

    function getLines() {
        return products.map((product, index) => {
            return (
                <tr key={product.id} className={index % 2 === 0 ? "Even" : "Odd"}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price.toFixed(2).replace(".", ",")}</td>
                </tr>
            );
        });
    }

    return (
        <div className="TableProducts">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    );
}