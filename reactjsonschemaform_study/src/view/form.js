import React,{Component} from 'react';
import Form from "react-jsonschema-form";

class MyForm extends Component{

    onSubmit(e){
      console.log(e)
    }

    onChange(e){
        console.log(e.formData)
    }

    render(){
        let data1 = {
            type: 'object',
            required: ["percent"],
            properties: {
                topText: {
                    type: 'string',
                    title: '顶部文案'
                },
                topImage: {
                    type: 'string',
                    title: '顶部图片',
                },
                middleBg: {
                    type: 'string',
                    title: '中间1px高度背景图片'
                },
                bottomImage: {
                    type: 'string',
                    title: '底部图片'
                },
                percent: {
                    type: 'array',
                    title: '返现比例阶梯',
                    items: {
                        type: 'object',
                        properties: {
                            min: {
                                type: 'number',
                                title: '最低限额【万元】(包含)',
                            },
                            max: {
                                type: 'number',
                                title: '上限【万元】(不包含)',
                            },
                            ratio: {
                                type: 'number',
                                title: '返现比例，不含%'
                            },
                            desc: {
                                type: 'string',
                                title: '范围描述，比如"2万元≤金额＜5万元"'
                            }
                        }
                    }
                }
            }
        };
        return <Form schema={data1} onSubmit={this.onSubmit} onChange={this.onChange}></Form>
    }
}

export default MyForm;