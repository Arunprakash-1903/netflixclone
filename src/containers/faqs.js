import FaqData from "../fixtures/faqs.json";
import React from "react"
import {Accordion, OPtForm} from "../Components";
import OptForm from "../Components/opt-form";

export function FaqsContainer(){
return (<Accordion>

    <Accordion.Title>Frequently Asked Question</Accordion.Title>
    {FaqData.map(item=>(
        <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
    ))}
<OPtForm.Break/>

<OptForm>
<OPtForm.Text>Ready to watch? Enter your email to create or restart your membership.</OPtForm.Text>
<OPtForm.Input placeholder="Email Address"/>
<OPtForm.Button><b>Get Started</b></OPtForm.Button>
<OPtForm.Break/>



</OptForm>


</Accordion>)
}