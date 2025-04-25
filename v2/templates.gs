/**
 * Email Template Data Structure
 * Hierarchical object containing all email templates and categories
 */

const topics = {
  "Account Issues": {
    "Login Problems": {
      "Forgot Password": {
        resolution: {
          tasks: [
            "Verify user identity",
            "Check account status",
            "Send password reset link"
          ],
          backend_note: "Check if user has active lockout in backend. If locked, must be manually unlocked before reset.",
          email_subject: "Password Reset Information",
          email_body: "Hello,\n\nThank you for contacting support. I understand you're having trouble accessing your account.\n\nI've sent a password reset link to your registered email address. The link will expire in 24 hours.\n\nIf you don't receive the email, please check your spam folder before contacting us again.\n\nBest regards,\n{{agent_name}}"
        }
      },
      "Account Locked": {
        resolution: {
          tasks: [
            "Verify user identity with security questions",
            "Check lockout reason in admin panel",
            "Reset lockout if appropriate"
          ],
          backend_note: "Use admin tool > security > lockouts to check reason code. Only reset if reason code is 1-3.",
          email_subject: "Account Access Restored",
          email_body: "Hello,\n\nThank you for contacting us about your locked account.\n\nI've verified your identity and unlocked your account. You should now be able to log in successfully.\n\nFor security purposes, please update your password upon logging in.\n\nIf you continue to experience issues, please don't hesitate to contact us.\n\nBest regards,\n{{agent_name}}"
        }
      }
    },
    "Billing Issues": {
      "Update Payment Method": {
        resolution: {
          tasks: [
            "Verify user identity",
            "Confirm billing information",
            "Guide through payment update process"
          ],
          backend_note: "Do not access or view full payment details. Only confirm last 4 digits for verification.",
          email_subject: "Payment Method Update Instructions",
          email_body: "Hello,\n\nThank you for contacting us about updating your payment method.\n\nTo update your payment information, please follow these steps:\n\n1. Log in to your account\n2. Go to Settings > Billing\n3. Select 'Payment Methods'\n4. Click 'Add New Method' or 'Edit' on an existing method\n\nIf you encounter any issues during this process, please take a screenshot (without sensitive information) and reply to this email.\n\nBest regards,\n{{agent_name}}"
        }
      },
      "Disputed Charge": {
        resolution: {
          tasks: [
            "Verify user identity",
            "Locate transaction in billing system",
            "Confirm transaction details",
            "Explain or escalate as needed"
          ],
          backend_note: "Check transaction log in Billing > Transactions > Search by ID. Look for error codes or notes.",
          email_subject: "Regarding Your Billing Inquiry",
          email_body: "Hello,\n\nThank you for bringing this billing concern to our attention.\n\nI've investigated the charge of xXAMOUNTXx from xXDATEXx and found that this was for xXREASONXx.\n\nIf you believe this charge is incorrect, please provide any additional information that might help us further investigate this matter.\n\nWe appreciate your patience while we work to resolve this issue.\n\nBest regards,\n{{agent_name}}"
        }
      }
    }
  },
  "Technical Support": {
    "Installation Issues": {
      "Error Messages": {
        resolution: {
          tasks: [
            "Ask for exact error message",
            "Check error database for known solutions",
            "Verify software version",
            "Provide specific fix or escalate"
          ],
          backend_note: "Common errors: ERR-102 (permission), ERR-305 (network), ERR-418 (compatibility). Check KB for solutions.",
          email_subject: "Solution for Your Installation Error",
          email_body: "Hello,\n\nThank you for contacting technical support about the error message you encountered during installation.\n\nBased on the information you provided, the error xXERROR_CODEXx typically occurs because xXREASONXx.\n\nTo resolve this issue, please try the following steps:\n\n1. xXSTEP_1Xx\n2. xXSTEP_2Xx\n3. xXSTEP_3Xx\n\nIf these steps don't resolve the issue, please reply with any new error messages that appear.\n\nBest regards,\n{{agent_name}}"
        }
      },
      "Compatibility Issues": {
        resolution: {
          tasks: [
            "Verify system specifications",
            "Check compatibility requirements",
            "Offer alternatives if needed"
          ],
          backend_note: "Minimum requirements: Windows 10/macOS 10.14, 4GB RAM, 2GHz processor. Check for known issues with specific hardware.",
          email_subject: "Compatibility Information for Your System",
          email_body: "Hello,\n\nThank you for contacting us about compatibility concerns.\n\nAfter reviewing your system specifications, I can confirm that xXCOMPATIBILITY_STATUSXx.\n\nMinimum system requirements:\n- Operating System: Windows 10/macOS 10.14 or newer\n- RAM: 4GB minimum (8GB recommended)\n- Processor: 2GHz dual-core or better\n- Storage: 500MB available space\n\nxXADDITIONAL_INFOXx\n\nPlease let me know if you have any other questions.\n\nBest regards,\n{{agent_name}}"
        }
      }
    },
    "Performance Issues": {
      "Slow Operation": {
        resolution: {
          tasks: [
            "Gather specific performance metrics",
            "Check for known performance issues",
            "Verify system meets recommended specs",
            "Provide optimization steps"
          ],
          backend_note: "Check recent performance tickets. Known issues with v2.3 on older systems. Suggest cache clearing first.",
          email_subject: "Improving Application Performance",
          email_body: "Hello,\n\nThank you for reporting the performance issues you're experiencing.\n\nBased on your description, here are some steps that should help improve performance:\n\n1. Clear application cache: Settings > Advanced > Clear Cache\n2. Update to the latest version (currently xXVERSIONXx)\n3. Close other resource-intensive applications while using our software\n4. xXADDITIONAL_STEPXx\n\nMany users find that the first step alone significantly improves performance.\n\nPlease let me know if these steps help or if you need further assistance.\n\nBest regards,\n{{agent_name}}"
        }
      }
    }
  },
  "Feature Requests": {
    "New Feature": {
      resolution: {
        tasks: [
          "Document request details",
          "Check if already on roadmap",
          "Submit to product team",
          "Set expectations with customer"
        ],
        backend_note: "Submit all feature requests via the Feature Request Tool. Search first to avoid duplicates.",
        email_subject: "Regarding Your Feature Request",
        email_body: "Hello,\n\nThank you for your suggestion about adding xXFEATUREXx to our product.\n\nWe appreciate customers like you who take the time to share ideas for improving our services. I've documented your request and forwarded it to our product team for consideration.\n\nWhile I can't promise when or if this specific feature will be implemented, customer feedback is a crucial part of our development process.\n\nWe'll be announcing new features in our monthly newsletter, so please keep an eye out for updates.\n\nThank you again for your valuable input.\n\nBest regards,\n{{agent_name}}"
      }
    },
    "Feature Enhancement": {
      resolution: {
        tasks: [
          "Document current behavior",
          "Document requested enhancement",
          "Check if already on roadmap",
          "Submit to product team"
        ],
        backend_note: "Use Enhancement Request form in agent portal. Include current behavior and desired behavior clearly.",
        email_subject: "Regarding Your Enhancement Suggestion",
        email_body: "Hello,\n\nThank you for suggesting an enhancement to our xXFEATURE_NAMEXx feature.\n\nI understand you'd like to see xXENHANCEMENT_DETAILSXx, which would improve your workflow.\n\nI've documented this suggestion and submitted it to our product team. They regularly review customer feedback when planning future updates.\n\nThough I can't provide a specific timeline for implementation, I want you to know your feedback is valuable and appreciated.\n\nThank you for helping us improve our product.\n\nBest regards,\n{{agent_name}}"
      }
    }
  }
};