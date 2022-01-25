import "./Mega.css"
import React, {useState} from 'react';

export default props => {
    function generateUniqueNumbers(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(random) ?
            generateUniqueNumbers(min, max, array) :
            random;
    }

    function generateNumbers(amount) {
        const numbers = Array(amount)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateUniqueNumbers(1, 60, nums);
                return [...nums, newNumber];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numbers;
    }

    const [amount, setAmount] = useState(props.amount || 6);
    const initialNumbers = generateNumbers(amount);
    const [numbers, setNumbers] = useState(initialNumbers);

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input 
                    type="number"
                    min={6}
                    max={15}
                    value={amount} 
                    onChange={
                        (e) => {
                            setAmount(+e.target.value)
                            setNumbers(generateNumbers(amount))
                        }
                    } 
                /> 
            </div>
            <button onClick={_ => setNumbers(generateNumbers(amount))}>Gerar Números</button>
        </div>
    );
}

