import React, { useState } from 'react';
import { Container, Button } from 'react-floating-action-button';
import AddForm from './AddForm';

function AddButton() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);  // Toggle form visibility
    };

    return (
        <div>
            <Container>
                <Button
                    tooltip="The big plus button!"
                    icon="fas fa-plus"
                    rotate={true}
                    onClick={handleClick} 
                />
            </Container>
            {showForm && <AddForm />}  {/* Conditionally render the form */}
        </div>
    );
}

export default AddButton;