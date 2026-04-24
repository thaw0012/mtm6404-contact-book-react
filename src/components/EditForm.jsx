import { useState, useEffect } from "react";

export const EditForm = ({contact, onUpdate }) => {
    const [formData, setFormData] = useState ({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData((prevData) => {
        return {
            ...prevData,
            [e.target.name]: e.target.value
        };
    }); 

    }

    useEffect(() => {
        if (contact) {
            setFormData({
                firstName: student?.firstName || '',
                lastName: student?.lastName || '',
                email: student?.email || ''
            });
        }
}, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input required type="text" name="firstName" placeholder="first name" value={formData.firstName} onChange={handleChange}/>
                </div>
                <div>
                    <input required type="text" name="lastName" placeholder="last name" value={formData.lastName} onChange={handleChange}/>
                </div>
                <div>
                    <input required type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange}/>
                </div>
                <button type="submit">Update Contact</button>
            </form>
        </div>
    );

}

export default EditForm;
