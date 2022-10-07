import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const [numero, setNumero] = useState(0);

    function inputNumero(valor) {
        setNumero(numero + valor.target.value);
    }

    function clear() {
        setNumero(0);
    }

    function mudaSinal() {
        setNumero(numero * (-1));
    }
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={12}/>
                    <h1 className="resultado">{numero}</h1>

                    <button onClick={clear}>AC</button>
                    <button onClick={mudaSinal}>+/-</button>
                    <button>%</button>
                    <button className="buttons-orange">/</button>

                    <button className="buttons-gray" onClick={inputNumero} value={7}>7</button>
                    <button className="buttons-gray" onClick={inputNumero} value={8}>8</button>
                    <button className="buttons-gray" onClick={inputNumero} value={9}>9</button>
                    <button className="buttons-orange">*</button>

                    <button className="buttons-gray" onClick={inputNumero} value={4}>4</button>
                    <button className="buttons-gray" onClick={inputNumero} value={5}>5</button>
                    <button className="buttons-gray" onClick={inputNumero} value={6}>6</button>
                    <button className="buttons-orange">-</button>

                    <button className="buttons-gray" onClick={inputNumero} value={1}>1</button>
                    <button className="buttons-gray" onClick={inputNumero} value={2}>2</button>
                    <button className="buttons-gray" onClick={inputNumero} value={3}>3</button>
                    <button className="buttons-orange">+</button>

                    <button className="buttons-gray" onClick={inputNumero} value={0}>0</button>
                    <button className="buttons-gray">,</button>
                    <button className="buttons-gray"style={{ visibility: "hidden" }}>,</button>
                    <button className="buttons-orange">=</button>
                </div>
            </Container>
        </div>
    );
}
