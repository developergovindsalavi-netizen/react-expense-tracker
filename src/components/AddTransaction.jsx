import { useState } from "react";

function AddTransaction({ onAddTransaction }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    function changeTitle(e) {
        setTitle(e.target.value);
    }
    function changeAmount(e) {
        setAmount(e.target.value);
    }
    function changeType(e) {
        setType(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault();

        let validationText = "";

        if (title.trim() === "") validationText += "Title is mandatory. ";

        if (amount.trim() === "" || Number(amount) <= 0) validationText += "Valid amount is mandatory. ";

        if (type === "") validationText += "Type is mandatory. ";

        if (validationText !== "") {
            setValidationMessage(validationText);
            return;
        }

        onAddTransaction({ id: Date.now(), title: title.trim(), amount: Number(amount), type: type });

        setTitle("");
        setAmount("");
        setType("");
        setValidationMessage("");

    }



    return <>
        <h3>Add Transaction</h3>
        <form className="transaction-form" onSubmit={submitForm}>
            <input type="text" placeholder="Title" value={title} onChange={changeTitle} />
            <input type="number" placeholder="Amount" value={amount} onChange={changeAmount} />
            <select value={type} onChange={changeType}>
                <option value="">Select</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <button type="submit">Add Transaction</button>
            <p className="validation-summary">{validationMessage}</p>
        </form>
    </>
}

export default AddTransaction;