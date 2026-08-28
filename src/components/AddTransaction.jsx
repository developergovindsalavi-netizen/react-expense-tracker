import { useState } from "react";
import Button from "./Button";

function AddTransaction({ onAddTransaction }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [errors, setErrors] = useState({
        title: "",
        amount: "",
        type: ""
    });
    const [touched, setTouched] = useState({
        title: false,
        amount: false,
        type: false
    });
    const maxLength = 50;

    function changeTitle(e) {
        setTitle(e.target.value);

        setErrors(previousErrors => ({
            ...previousErrors,
            title: ""
        }));
    }
    function changeAmount(e) {
        setAmount(e.target.value);
        setErrors(previousErrors => ({
            ...previousErrors,
            amount: ""
        }));
    }
    function changeType(e) {
        setType(e.target.value);

        setErrors(previousErrors => ({
            ...previousErrors,
            type: ""
        }));
    }
    function validateForm() {
        return {
            title: getTitleError(),
            amount: getAmountError(),
            type: getTypeError()
        };
    }

    function validateField(field) {

        setTouched(previousTouched => ({
            ...previousTouched,
            [field]: true
        }));

        let errors = {};

        if (field === "title") {
            errors.title = getTitleError();
        }
        else if (field === "amount") {
            errors.amount = getAmountError();
        }
        else if (field === "type") {
            errors.type = getTypeError();
        }

        setErrors(previousErrors => ({
            ...previousErrors,
            ...errors
        }));
    }

    function submitForm(e) {
        e.preventDefault();

        setTouched({
            title: true,
            amount: true,
            type: true
        });

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (
            validationErrors.title ||
            validationErrors.amount ||
            validationErrors.type) {
            return;
        }

        onAddTransaction({
            id: Date.now(),
            title: title.trim(),
            amount: Number(amount),
            type: type
        });

        setErrors({
            title: "",
            amount: "",
            type: ""
        });

        setTouched({
            title: false,
            amount: false,
            type: false
        });

        setTitle("");
        setAmount("");
        setType("");
    }

    function getTitleError() {
        if (title.trim() === "") {
            return "Title is mandatory.";
        }

        if (title.trim().length < 3) {
            return "Title must be at least 3 characters.";
        }

        return "";
    }

    function getAmountError() {
        if (amount.trim() === "" || Number(amount) <= 0) return "Valid amount is mandatory.";

        return "";
    }

    function getTypeError() {
        if (type === "") return "Type is mandatory.";

        return "";
    }



    return <>
        <h3>Add Transaction</h3>
        <form className="transaction-form" onSubmit={submitForm}>
            <input type="text" maxLength={maxLength} placeholder="Title" value={title} onChange={changeTitle}
                onBlur={() => validateField("title")} />
            <span>{title.length}/{maxLength}</span>
            {touched.title && errors.title && (
                <p className="field-error">{errors.title}</p>
            )}
            <input type="number" placeholder="Amount" value={amount} onChange={changeAmount} onBlur={() => validateField("amount")} />
            {touched.amount && errors.amount && (
                <p className="field-error">{errors.amount}</p>
            )}
            <select value={type} onChange={changeType} onBlur={() => validateField("type")}>
                <option value="">Select</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            {touched.type && errors.type && (
                <p className="field-error">{errors.type}</p>
            )}
            <Button type="submit">Add Transaction</Button>
        </form>
    </>
}

export default AddTransaction;