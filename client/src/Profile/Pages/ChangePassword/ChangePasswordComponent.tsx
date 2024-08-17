import { useState, ChangeEvent, FormEvent } from 'react';
import { FormControl, FormLabel, Input } from '@mui/joy';
import { useSnackbar, VariantType } from 'notistack';
import { useNavigate } from 'react-router-dom';
import AppBarComponent from "../../../Shared/Components/AppBar";
import { ResposeErrorApi, UserStore } from '../../UserStore';
import { SaveButton } from '../../../Shared/Components/SaveButton';
import { AxiosError } from 'axios';

function ChangePasswordComponent(): JSX.Element {
    const ChangePassword = UserStore(state => state.ChangePassword);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ Current:"", Password: "", RePassword: "" });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validatePassword = (): boolean => {
        if (!formData.Current || !formData.Password || !formData.RePassword) {
            showSnackbar("Todos los campos son obligatorios", "warning");
            return false;
        }
        if (formData.Password !== formData.RePassword) {
            showSnackbar("La contraseña no coincide", "warning");
            return false;
        }
        if (formData.Password.length < 5) {
            showSnackbar("La contraseña debe tener al menos 5 caracteres", "warning");
            return false;
        }
        return true;
    };

    const showSnackbar = (message: string, variant: VariantType): void => {
        enqueueSnackbar(message, { autoHideDuration: 2000, anchorOrigin: { horizontal: "right", vertical: "top" }, variant });
    };

    const handleSubmit = async(e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (validatePassword()) {
            try {
                await ChangePassword(formData.Current, formData.Password);
                showSnackbar("Operación Exitosa", "success");
                navigate("/");
            } catch (error: any) {
                if(error.response?.status !== 400) return;
                var responseData = error.response.data as ResposeErrorApi;
                showSnackbar(responseData.messageError, "warning");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <AppBarComponent title='Change Password' backUrl="/" />
            <PasswordInput
                label="Current Password"
                name="Current"
                value={formData.Current}
                onChange={handleInputChange}
            />
            <PasswordInput
                label="New Password"
                name="Password"
                value={formData.Password}
                onChange={handleInputChange}
            />
            <PasswordInput
                label="Repeat Password"
                name="RePassword"
                value={formData.RePassword}
                onChange={handleInputChange}
            />
            <SaveButton />
        </form>
    );
}


const PasswordInput = ({ label, name, value, onChange }:{label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void;}) => (
    <FormControl sx={{ width: '70%', mx: 'auto', mt: 3 }}>
        <FormLabel>{label}</FormLabel>
        <Input type="password" name={name} value={value} onChange={onChange} />
    </FormControl>
);



export default ChangePasswordComponent;