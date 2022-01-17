import React from 'react'
import ContactArea from '../components/Elements/Contact/ContactArea'
import ContactMap from '../components/Elements/Contact/ContactMap'
import ContactSupport from '../components/Elements/Contact/ContactSupport'
import ContactTitle from '../components/Elements/Contact/ContactTitle'
import Layout2 from '../components/Layout/Layout2'

export default function contact() {
    return (
        <Layout2>
            <ContactTitle/>
            <ContactArea/>
            <ContactSupport/>
            <ContactMap/>
        </Layout2>
    
    )
}
