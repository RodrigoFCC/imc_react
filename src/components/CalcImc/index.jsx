import { useState } from "react";

import styles from './CalcImc.module.css';

const ReposList = ({ peso, altura }) => {
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState("");
    const [imc, setImc] = useState(0);

    const calculaIMC = () => {
        let imcValue = peso / ((altura/100) * (altura/100));

        if (imcValue < 18.5) {
            setSelectedId("result_calc_0");
            setBackgroundColor("#ffe8e8");
        } else if (imcValue < 25) {
            setSelectedId("result_calc_1");
            setBackgroundColor("#f0f0f0");
        } else if (imcValue < 30) {
            setSelectedId("result_calc_2");
            setBackgroundColor("#ffeab3");
        } else if (imcValue < 40) {
            setSelectedId("result_calc_3");
            setBackgroundColor("#ffc2b3");
        } else {
            setSelectedId("result_calc_4");
            setBackgroundColor("#ff8080");
        }

        setImc(imcValue);
    };

    const handleButtonClick = () => {
        setEstaCarregando(true);
        setTimeout(() => {
                            setEstaCarregando(false);
                            calculaIMC();
                        }, 3000);  
    };

    return (
        <div className="container">
                <button onClick={handleButtonClick}>Calcular IMC</button>
                <table >

                    <thead >
                        <tr>
                            <td className={styles.cabecalho} colSpan="3">Veja a interpretação do IMC</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr style={selectedId === "result_calc_0" ? { backgroundColor } : {}}>
                            <td>Menor que 18,5</td>
                            <td>Magreza</td>
                            <td>0</td>
                        </tr>
                        <tr  style={selectedId === "result_calc_1" ? { backgroundColor } : {}}>
                            <td>Entre 18,5 e 24,9</td>
                            <td>Normal</td>
                            <td>0</td>
                        </tr>
                        <tr style={selectedId === "result_calc_2" ? { backgroundColor } : {}}>
                            <td>Entre 25,0 e 29,9</td>
                            <td>Sobrepeso</td>
                            <td>I</td>
                        </tr>
                        <tr style={selectedId === "result_calc_3" ? { backgroundColor } : {}}>
                            <td>Entre 30,0 e 39,9</td>
                            <td>Obesidade</td>
                            <td>II</td>
                        </tr>
                        <tr style={selectedId === "result_calc_4" ? { backgroundColor } : {}}>
                            <td>Maior que 40,0</td>
                            <td>Obesidade Grave</td>
                            <td>III</td>
                        </tr>
                    </tbody>

                </table>
            {estaCarregando ? (
                <div className={styles.imc}>
                    <h2>Carregando...</h2>
                </div>
            ) : (
                <div className={styles.imc}>
                    <h2>Seu IMC é de {imc.toFixed(2)}</h2>
                </div>
            )}
        </div>

    )
}

export default ReposList;