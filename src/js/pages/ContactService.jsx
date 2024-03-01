import React from "react";
import { InlineWidget } from "react-calendly";

const ContactService = () => {
  return (
    <div>
      <InlineWidget
        url="https://calendly.com/vinaarizadavid"
        prefill={{
          smsReminderNumber: "+1234567890",
          guests: ["COO@yourealtor.co", "CEO@yourealtor.co"]
        }}
      />
    </div>
  );
};

export default ContactService;
