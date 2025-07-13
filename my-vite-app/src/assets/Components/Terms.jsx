import React from 'react'
import { Link } from 'react-router-dom';
import Services from "./Services.jsx";

const Terms = () => {
    
    const h1="Terms & Conditions"
    const p1="When you visit the Dynamic Event Management website or book any of their services, you are agreeing to follow their terms and conditions. These terms are a set of rules and guidelines that explain your rights and responsibilities while using their services. By continuing to use the website or proceed with a booking, you are accepting these rules, whether or not you have read them. That is why the company advises you to read the terms and conditions carefully, as they are legally binding and important for understanding how their services work."
    const h2="Bookings & Confirmations"
    const p2="To book an event with Dynamic Event Management, you must make your reservation ahead of time using their official website, WhatsApp, or by visiting in person. In order to confirm your booking, you are required to pay at least 30% of the total cost in advance. Until this advance payment is received and officially acknowledged by the company, your booking will not be considered confirmed, and the services will not be guaranteed."
    const h3="Payments"
    const p3="All remaining payments for your event must be fully cleared at least 48 hours before the scheduled event day. You can make payments through bank transfer, cash, or any other method officially approved by Dynamic Event Management. If payments are delayed or incomplete, the company reserves the right to delay or cancel the services, and in such cases, no refunds will be provided. It is important to ensure timely and complete payment to avoid any issues with your event arrangements."
    const h4="Cancellation & Refund Policy"
    const p4="If you need to cancel your event, doing so at least 7 days in advance will make you eligible for a partial refund—however, the service fee will be deducted from your advance payment. Cancellations made within 7 days of the event will not be refunded. If a refund is applicable, it will be processed within 7 to 10 business days. In situations beyond control, such as extreme weather, political issues, or emergencies, the event may be rescheduled, but no refunds will be issued in such cases."
    const h5="Client Responsibilities"
    const p5="Clients are responsible for providing accurate event details, ensuring timely access to the venue, and cooperating fully with the Dynamic Event Management team. The company is not responsible for any delays caused by the venue, third-party vendors, or event guests. Additionally, if any items provided by the client—such as decorations, clothing, or other materials—are damaged, incomplete, or delayed, the company will not be held liable for any negative impact on the services."
    const h6="Service Customization & Delivery"
    const p6="All services offered by Dynamic Event Management, such as decoration, catering, and photography, are tailored according to prior discussions and written confirmations with the client. While small changes may be accepted up to three days before the event, they are subject to availability and feasibility. Clients should also understand that the final results may slightly differ from the provided samples or mock-ups due to factors like venue conditions, weather, or lighting, which are sometimes beyond the company’s control"
    const h7="Use of Photos & Videos"
    const p7="Dynamic Event Management may use photos or videos from your event for their portfolio or social media promotion, unless you specifically request otherwise in writing. However, the company is committed to respecting your privacy—any content shared publicly will be handled with care, and personal identities or private ceremonies will always be treated with discretion and respect."
    const h8="Liability"
    const p8="Dynamic Event Management may use photos or videos from your event for their portfolio or social media promotion, unless you specifically request otherwise in writing. However, the company is committed to respecting your privacy—any content shared publicly will be handled with care, and personal identities or private ceremonies will always be treated with discretion and respect."
    const h9="Changes to Terms"
    const p9="Dynamic Event Management reserves the right to update or modify its terms and conditions at any time. In the case of major changes, clients will be informed through email, phone call, or WhatsApp to ensure they are aware of the updates. It is the client’s responsibility to stay informed about any modifications."
  return (
    <div>
      <Services h1={h1} h2={h2} h3={h3} h4={h4} p1={p1} p2={p2} p3={p3} p4={p4} />
<Services h2={h5} h3={h6} h4={h7}  p2={p5} p3={p6} p4={p7}  />
<Services h2={h8} h3={h9}  p2={p8} p3={p9} />
    </div>
  )
}

export default Terms
