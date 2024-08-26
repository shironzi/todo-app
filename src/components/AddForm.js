function AddForm() {
    return(
        <form className="add-note-form">
            <input type="text" placeholder="Enter your note...."/>
            <div className="add-note-button">
                <button type="submit">APPLY</button>
                <button type="btn">CANCEL</button>
            </div>
        </form>
    )
}

export default AddForm;