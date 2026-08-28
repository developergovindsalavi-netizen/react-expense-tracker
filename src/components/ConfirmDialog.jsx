import Button from "./Button";

function ConfirmDialog({ children, onConfirm, onCancel }) {
    return (
        <div className="confirm-dialog">
            {children}
            <Button type={"button"} onClick={onConfirm}>Confirm</Button>
            <Button type={"button"} onClick={onCancel}>Cancel</Button>
        </div>



    );
}

export default ConfirmDialog;