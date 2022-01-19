import React from 'react'
import ContactArea from '../components/Elements/Contact/ContactArea'
// import ContactMap from '../components/Elements/Contact/ContactMap'
import ContactSupport from '../components/Elements/Contact/ContactSupport'
import ContactTitle from '../components/Elements/Contact/ContactTitle'
import Layout5 from '../components/Layout/Layout5'

export default function contact() {
    return (
        <Layout5>
            <ContactTitle/>
            <ContactArea/>
            <ContactSupport/>
            {/* <ContactMap/> */}
        </Layout5>
    
    )
}
