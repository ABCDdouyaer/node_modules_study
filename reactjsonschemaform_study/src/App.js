import React, { Component } from 'react';
import './App.css';
import Form from "react-jsonschema-form";
class App extends Component {
  render() {
    const schema = {
      type: "object",
      properties: {
        a1: {type: "boolean",title:'radio,checkbox,select'},
        a2: {type: "string",title:'format,input'},
        a3: {type: "string",title:'alt-datetime'},
        a4: {type: 'string',title:'隐藏和只可读'},
        a5: {type: 'string',title:'禁止操作'},
        a7: {type: "number",
            enum: [1, 2, 3],
            enumNames: ["one", "two", "three"]
          },
        a6: {
          type: 'array',
          items : {
            type: "object",
            properties : {
              description:{
                type: "string"
              }
            }
          }
        }
      }
    };
    
    const uiSchema = {
      a1: {"ui:widget": "radio"},
      a2: {"ui:widget": "password"},
      a3: {"ui:widget": "alt-datetime"},
      a4: {"ui:readonly": true},
      a5: {"ui:disabled": true},
      "ui:order":['a3','a2','a1','a5','a4','a6']
    };

   const schema1 = {
     type: "string",
     format: "data-url"
   };
   
   const schema2 = {
    type: "array",
    items: {
      type: "string",
    }
  };
    
    const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
    return (
      <div className="App">
       <Form schema={schema}  uiSchema={uiSchema} onSubmit={onSubmit} />
       <Form schema={schema1}  onSubmit={onSubmit} />
       <Form schema={schema2}  onSubmit={onSubmit} />
      </div>
    );
  }
}

export default App;
