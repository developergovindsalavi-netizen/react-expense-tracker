import { useState, useEffect } from "react";
import Button from "./Button";

function AddTransaction({ onAddTransaction, transaction, onUpdateTransaction, onEditComplete }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState({
        title: "",
        amount: "",
        type: "",
        date: "",
        category: ""
    });
    const [touched, setTouched] = useState({
        title: false,
        amount: false,
        type: false,
        date: false,
        category: false
    });
    const maxLength = 50;
    const isEditMode = transaction != null;


    useEffect(() => {
        if (transaction) {
            setTitle(transaction.title);
            setAmount(String(transaction.amount));
            setType(transaction.type);
            setDate(transaction.date);
            setCategory(transaction.category);
        } else {
            setTitle("");
            setAmount("");
            setType("");
            setDate("");
            setCategory("");
        }

        setErrors({
            title: "",
            amount: "",
            type: "",
            date: "",
            category: ""
        });

        setTouched({
            title: false,
            amount: false,
            type: false,
            date: false,
            category: false
        });
    }, [transaction]);

    function changeTitle(e) {
        setTitle(e.target.value);

        setErrors(previousErrors => ({
            ...previousErrors,
            title: ""
        }));
    }
    function changeDate(e) {
        setDate(e.target.value);

        setErrors(previousErrors => ({
            ...previousErrors,
            date: ""
        }));
    }
    function changeCategory(e) {
        setCategory(e.target.value);

        setErrors(previousErrors => ({
            ...previousErrors,
            category: ""
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
            type: getTypeError(),
            date: getDateError(),
            category: getCategoryError()
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
        else if (field === "date") {
            errors.date = getDateError();
        }
        else if (field === "category") {
            errors.category = getCategoryError();
        }

        setErrors(previousErrors => ({
            ...previousErrors,
            ...errors
        }));
    }

    async function submitForm(e) {
        e.preventDefault();

        setTouched({
            title: true,
            amount: true,
            type: true,
            date: true,
            category: true
        });

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (
            validationErrors.title ||
            validationErrors.amount ||
            validationErrors.type ||
            validationErrors.category ||
            validationErrors.date
        ) {
            return;
        }

        if (isEditMode) {
            await onUpdateTransaction({
                id: transaction.id,
                title: title.trim(),
                amount: Number(amount),
                type: type,
                category : category,
                date : date
            });

            onEditComplete();
        } else {

            await onAddTransaction({
                id: Date.now(),
                title: title.trim(),
                amount: Number(amount),
                type: type,
                category : category,
                date : date
            });
        }

        setErrors({
            title: "",
            amount: "",
            type: "",
            date: "",
            category: ""
        });

        setTouched({
            title: false,
            amount: false,
            type: false,
            category: false,
            date: false
        });

        setTitle("");
        setAmount("");
        setType("");
        setCategory("");
        setDate("");
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

    function getCategoryError() {
        if (category === "") return "Category is mandatory.";

        return "";
    }

    function getDateError() {
        if (date === "") return "Date is mandatory.";

        return "";
    }


    return <>
        <h3>{isEditMode ? "Edit Transaction" : "Add Transaction"}</h3>
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
            <input type="date" placeholder="Date" value={date} onChange={changeDate} onBlur={() => validateField("date")} />
            {touched.date && errors.date && (
                <p className="field-error">{errors.date}</p>
            )}
            <select value={type} onChange={changeType} onBlur={() => validateField("type")}>
                <option value="">Select Type</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            {touched.type && errors.type && (
                <p className="field-error">{errors.type}</p>
            )}
            <select value={category} onChange={changeCategory} onBlur={() => validateField("category")}>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Fuel">Fuel</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Rent">Rent</option>
                <option value="Salary">Salary</option>
                <option value="Other">Other</option>
            </select>
            {touched.category && errors.category && (
                <p className="field-error">{errors.category}</p>
            )}
            <Button type="submit">
                {isEditMode ? "Update Transaction" : "Add Transaction"}
            </Button>
        </form>
    </>
}

export default AddTransaction;