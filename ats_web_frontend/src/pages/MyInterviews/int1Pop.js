
import {
    InputAdornment,
    Stack,
    Checkbox,
    FormControlLabel,
    FormControl,
    InputLabel,
    OutlinedInput,
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TodayIcon from '@mui/icons-material/Today';
import React from 'react'
 
const int1Pop = () => {
    return (
        <>
            <Stack direction={'row'} spacing={2}>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel >Job Title</InputLabel>
                    <OutlinedInput sx={{ borderRadius: 50 }} label="Job Title" />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel >Job Role</InputLabel>
                    <OutlinedInput sx={{ borderRadius: 50 }} label="Job Role" />
                </FormControl>
            </Stack>
            <FormControlLabel control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlinedIcon />} />} label="Online" sx={{ mb: 2 }} />
            <FormControlLabel control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlinedIcon />} />} label="Offline" sx={{ mb: 2 }} />
            <Stack direction={'row'} spacing={2} mb={2}>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel >Platform</InputLabel>
                    <OutlinedInput sx={{ borderRadius: 50 }} label="Platform" />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel >Interview ID</InputLabel>
                    <OutlinedInput sx={{ borderRadius: 50 }} label="Interview ID" />
                </FormControl>
            </Stack>
            <Stack direction={'row'} spacing={2} mb={2}>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Date
                    </InputLabel>
                    <OutlinedInput sx={{ borderRadius: 50 }}
                        endAdornment={
                            <InputAdornment>
                                <TodayIcon />
                            </InputAdornment>
                        }
                        label="Date"
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Time Slot
                    </InputLabel>
                    <OutlinedInput sx={{ borderRadius: 50 }}
                        endAdornment={
                            <InputAdornment>
                                <AccessAlarmIcon />
                            </InputAdornment>
                        }
                        label="Time Slot"
                    />
                </FormControl>
            </Stack>
            <FormControl sx={{ m: 1 }} variant="outlined">
                <InputLabel >Host Name</InputLabel>
                <OutlinedInput sx={{ borderRadius: 50 }} label="Host Name" />
            </FormControl>
        </>
    )
}
 
export default int1Pop