const topics = {
  "account_reactivation": {
    "review": {
      resolution: {
        tasks: [
          "confirm eligibility status",
          "confirm employer notes",
          "review gross earnings reports",
          "reactivate account"
        ],
        backend_note: "Ticket: xXTicketNumberXx - account reactivation, review, eligibility confirmed",
        email_subject: "Support ticket - Account reactivation",
        email_body: "Hello,\n\nThis is {{agent_name}} from the support team. We’ve reviewed your account and confirmed eligibility. Please find your account reactivated.\n\nBest regards,\n{{agent_name}}"
      }
    }
  },
  "contact_information_update": {}
};
