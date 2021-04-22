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

<OptForm>
<OPtForm.Input placeholder="Enter your Email"/>
<OPtForm.Button>Try now</OPtForm.Button>
<OPtForm.Break/>
<OPtForm.Text>Ready to watch? Enter your email to create or restart your membership.</OPtForm.Text>



</OptForm>


</Accordion>)
}