import  { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import AppBarComponent from "../../../Shared/Components/AppBar";
import { Button, Box } from '@mui/joy';
import { UserStore, UserStoreState } from '../../UserStore';
import User from '../../Entities/User';

function ChangeNameComponent() {
    var user: User | undefined = UserStore((state:UserStoreState) => state.user)
    const ChangeName = UserStore(state => state.ChangeName);

    const [formData, setFormData] = useState({
        firstName: user?.FirstName,
        lastName: user?.LastName
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName) {
            alert('Por favor, completa todos los campos');
            return;
        }

        ChangeName(formData.firstName, formData.lastName);
    };

    return (
        <form onSubmit={handleSubmit}>
            <AppBarComponent title='Name' backUrl="/"></AppBarComponent>
            <FormControl sx={{ width: '70%', mx: 'auto' }}>
                <FormLabel>First Name</FormLabel>
                <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl sx={{ width: '70%', mx: 'auto', mt: 3 }}>
                <FormLabel>Last Name</FormLabel>
                <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </FormControl>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70%',
                }}
            >
                <Button
                    type="submit"
                    color="success"
                    variant="soft"
                    fullWidth
                >
                    Save
                </Button>
            </Box>
        </form>
    );
}

export default ChangeNameComponent;