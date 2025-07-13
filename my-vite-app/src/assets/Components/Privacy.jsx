
import React from 'react'
import { Link } from 'react-router-dom';

import Services from "./Services.jsx";
const Privacy = () => {

  
  const h1="Our Privacy Policy"
  const p1="The opening statement of our Privacy Policy reflects our commitment to respecting and protecting the personal information of our users and clients. By stating, At Dynamic Event Management, we value your trust and are committed to protecting your personal information, we emphasize that user privacy is a top priority. This sets a tone of transparency and accountability. The policy goes on to clarify that it will outline how we collect, use, store, and protect data. This includes explaining what types of information we gather—such as names, contact details, or preferences—why we collect it, how it is securely stored, and the ways in which it may be used to improve services or fulfill bookings. Ultimately, this introduction assures users that their data is in safe hands and that we are committed to handling it responsibly and in accordance with applicable privacy standards."
  const h2="Information We Collect"
  const p2="We collect certain types of personal information to provide our services effectively and ensure a smooth user experience. This includes basic contact information such as your name, phone number, email address, and home address, which are necessary for processing bookings and maintaining communication. We also gather specific event-related details like the type of event you're planning, the date, location, estimated guest count, and your personal preferences — all of which help us customize and coordinate your event seamlessly. For payments, we use secure third-party gateways, and we do not store any credit or debit card information ourselves. Additionally, when you browse our website, we may collect technical data such as your IP address, browser type, device information, cookies, and pages you visit. This website usage data is used purely for analytics purposes to help us improve our site and services."
  const h3="How We Use Your Information"
  const p3="We use the personal information you provide to deliver our services efficiently and with a personalized touch. This includes confirming your bookings, communicating important event details, and tailoring our services to match your specific preferences. We also use your contact information to send booking confirmations, updates, and invoices, as well as to respond to any inquiries or support requests you may have. Additionally, we analyze website usage data to improve our site’s performance and enhance the overall customer experience. If you have opted in, we may occasionally send you promotional offers or updates about our services."
  const h4="Information Sharing"
  const p4="We want to assure you that we do not sell, rent, or trade your personal information with any third party. Your data is shared only when necessary to deliver our services or comply with legal obligations. This may include trusted service partners such as photographers, decorators, and caterers who are directly involved in planning or executing your event. In some cases, we may be required to share information with government authorities to meet legal or regulatory requirements. Additionally, we may share data with our IT and security providers to help maintain the safety and functionality of our website and digital systems."
  const h5="Data Security"
  const p5="We take the security of your personal information seriously and use industry-standard protocols to protect it. This includes encrypting sensitive data, securing our website and customer databases, and implementing safeguards to prevent unauthorized access, alteration, or disclosure. Our systems are designed to keep your information safe throughout your interaction with our services. However, while we do our best to maintain strong security measures, no system can be guaranteed to be completely secure. For this reason, we also encourage you to take precautions on your end by protecting your login credentials and personal details."
  const h6="Cookies & Analytics"
  const p6="Our website uses cookies to enhance performance and better understand how visitors interact with our content. These small data files help us analyze user behavior, improve site design and functionality, and tailor the browsing experience. The insights gained through cookies allow us to make informed updates to layout, content, and overall usability. You have the option to manage your cookie preferences at any time by adjusting your browser settings to accept or block cookies as you see fit."
  const h7="Your Rights"
  const p7="You have full control over your personal data and the right to manage how it is used. This includes the right to request access to the information we hold about you, ask for corrections or deletion of your data, and withdraw consent for receiving marketing communications at any time. You may also contact us to update your preferences or request complete removal of your information from our records. To exercise any of these rights, please reach out to us at: [your email here]"

  return (
    <div>
      
<Services h1={h1} h2={h2} h3={h3} h4={h4} p1={p1} p2={p2} p3={p3} p4={p4} />
<Services  h2={h5} h3={h6} h4={h7} p2={p5} p3={p6} p4={p7} />
    </div>
  )
}

export default Privacy
