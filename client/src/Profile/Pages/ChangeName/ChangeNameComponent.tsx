import { useState } from 'react';
import AppBarComponent from "../../../Shared/Components/AppBar";
import { UserStore, UserStoreState } from '../../UserStore';
import User from '../../Entities/User';
import { useNavigate } from 'react-router-dom';
import { useSnackbar, VariantType } from 'notistack';
import { SaveButton } from '../../../Shared/Components/SaveButton';
import { InputLabelComponent } from '../../../Shared/Components/InputLabel';

function ChangeNameComponent() {
    var user: User | undefined = UserStore((state: UserStoreState) => state.user)
    const ChangeName = UserStore(state => state.ChangeName);
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();

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

    const validateUserName = (): boolean => {
        if (!formData.firstName || !formData.lastName) {
            showSnackbar("Por favor, completa todos los campos", "warning");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (validateUserName()) {
            await ChangeName(formData.firstName!, formData.lastName!);
            showSnackbar("Operacion Exitosa", "success");
            navigate("/")
        }

    };

    const showSnackbar = (message: string, variant: VariantType): void => {
        enqueueSnackbar(message, { autoHideDuration: 2000, anchorOrigin: { horizontal: "right", vertical: "top" }, variant });
    };

    return (
        <form onSubmit={handleSubmit}>
            <AppBarComponent title='Name' backUrl="/"></AppBarComponent>
            
            <InputLabelComponent
                label="First Name"
                name="firstName"
                value={formData.firstName!}
                onChange={handleInputChange}
            />
            <InputLabelComponent
                label="Last Name"
                name="lastName"
                value={formData.lastName!}
                onChange={handleInputChange}
            />
            <SaveButton></SaveButton>
        </form>
    );
}

export default ChangeNameComponent;