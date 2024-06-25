import React from "react";

export default function Privacypolicy(props) {
  return (
    <div className="m-8 container">
      <h1>{props.heading}</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Additionally, Pinterest also states that it collects user location
              data from mobile devices, and if someone makes a purchase on
              Pinterest, payment and contact information - including an address
              and phone number - will be collected. If users buy products or
              services for others, Pinterest gathers their contact information
              and shipping details, too. Users may also give Pinterest
              permission to access information that is shared with other
              websites like Facebook and Twitter by linking their Pinterest
              account with them. This information would also include information
              about their friends and followers. The account settings have
              information about how much access Pinterest has to their users'
              data. In sum, a Privacy Policy is where you let your users know
              all about how you make sure their privacy is respected by your
              business practices.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Additionally, Pinterest also states that it collects user location
              data from mobile devices, and if someone makes a purchase on
              Pinterest, payment and contact information - including an address
              and phone number - will be collected. If users buy products or
              services for others, Pinterest gathers their contact information
              and shipping details, too. Users may also give Pinterest
              permission to access information that is shared with other
              websites like Facebook and Twitter by linking their Pinterest
              account with them. This information would also include information
              about their friends and followers. The account settings have
              information about how much access Pinterest has to their users'
              data. In sum, a Privacy Policy is where you let your users know
              all about how you make sure their privacy is respected by your
              business practices.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Additionally, Pinterest also states that it collects user location
              data from mobile devices, and if someone makes a purchase on
              Pinterest, payment and contact information - including an address
              and phone number - will be collected. If users buy products or
              services for others, Pinterest gathers their contact information
              and shipping details, too. Users may also give Pinterest
              permission to access information that is shared with other
              websites like Facebook and Twitter by linking their Pinterest
              account with them. This information would also include information
              about their friends and followers. The account settings have
              information about how much access Pinterest has to their users'
              data. In sum, a Privacy Policy is where you let your users know
              all about how you make sure their privacy is respected by your
              business practices.
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
}
