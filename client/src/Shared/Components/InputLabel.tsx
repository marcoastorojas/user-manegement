import { ChangeEvent } from 'react';
import { FormControl, FormLabel, Input } from '@mui/joy';

export const InputLabelComponent = ({ label, name, value, onChange }:{label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void}) => (
    <FormControl sx={{ width: '70%', mx: 'auto', mt: 3 }}>
        <FormLabel>{label}</FormLabel>
        <Input type="text" name={name} value={value} onChange={onChange} />
    </FormControl>
);
