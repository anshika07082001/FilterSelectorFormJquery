import {
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import { studentProps } from "../Type/type";

const StudentForm = (props: studentProps) => {
  const stringInpHandler=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>,obj:any)=>{
    props.formArr.map((item,i)=>{
      if(item.label==='Name'){
        if(e.currentTarget.value.match( /^[a-zA-Z ]{2,30}$/)){
          props.formArr[i].value=e.currentTarget.value
        }
        if(!(e.currentTarget.value.match( /^[a-zA-Z ]{2,30}$/))){
          props.formArr[i].error=true
        }
      }
      if(item.label==='Age'){
        if(e.currentTarget.value.match(/^[0-9]*$/)){
          
        }
      }
    })
    if(obj.name=='Name'){
      
    }
  }
  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.currentTarget.checked) {
      props.qualification[index].check = true;
    } else {
      props.qualification[index].check = false;
    }
    props.setQualification([...props.qualification]);
  };
  return (
    <div className="form">
      <h2>Student Registration Form</h2>
      {props.formArr.map((item) => {
        return <TextField label={item.label} variant="outlined" fullWidth type={item.type} onChange={(e)=>stringInpHandler(e,item)}/>;
      })}
      <div>
        {props.qualification.map((item, index) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.check}
                  onChange={(e) => checkHandler(e, index)}
                />
              }
              label={item.label}
            />
          );
        })}
      </div>
      {props.file.map((item) => {
        return <TextField type={item.type} helperText={item.label} fullWidth />;
      })}
      <Button variant="contained" fullWidth>
        Submit Form
      </Button>
    </div>
  );
};

export default StudentForm;
