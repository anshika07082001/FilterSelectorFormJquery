import { FormControlLabel, TextField, Checkbox, Button } from "@mui/material";
import React from "react";
import { studentProps } from "../Type/type";

const StudentForm = (props: studentProps) => {
  const stringInpHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    obj: any
  ) => {
    var val = e.currentTarget.value;
    props.formArr.map((item, i) => {
      if (item.label === obj.label) {
        if (val.match(/^[a-zA-Z ]{2,30}$/)) {
          props.formArr[i].value = val;
          props.formArr[i].error = false;
        }
        if (
          !e.currentTarget.value.match(
            /^[A-Z][a-z]{0,19}[\s,][A-Z][a-z]{0,19}$/
          )
        ) {
          props.formArr[i].error = true;
        }
      }
      if (item.label === "Age") {
        if (val.match(/^[0-9]*$/)) {
          props.formArr[i].value = val;
        } else {
          val.slice(-1);
        }
      }
    });
    props.setFormArr([...props.formArr]);
    // if(obj.name=='Name'){

    // }
  };
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

  const fileHandler = (e: any,obj:any,index:number) => {
    var size = e.currentTarget.files[0].size;
    size = parseInt((size / 1000).toString());
    props.file.map((item)=>{
      if(size>item.min && size<item.max){
        item.error=false;
      }
      else{
        item.error=true;
      }
    })
    props.setFile([...props.file])

  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };
  return (
    <div className="form">
      <h2>Student Registration Form</h2>
      <form onSubmit={(e) => submitHandler(e)}>
        {props.formArr.map((item, index) => {
          return (
            <TextField
              key={index}
              error={item.error}
              helperText={
                item.error
                  ? "*first letter of first and lastname should be capital"
                  : ""
              }
              label={item.label}
              variant="outlined"
              fullWidth
              type={item.type}
              onChange={(e) => stringInpHandler(e, item)}
            />
          );
        })}
        <div>
          {props.qualification.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
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
        {props.file.map((item, index) => {
          return (
            <TextField
              key={index}
              type={item.type}
              helperText={item.label}
              fullWidth
              error={item.error}
              onChange={(e) => fileHandler(e,item,index)}
            />
          );
        })}
        <Button variant="contained" fullWidth type="submit">
          Submit Form
        </Button>
      </form>
    </div>
  );
};

export default StudentForm;
