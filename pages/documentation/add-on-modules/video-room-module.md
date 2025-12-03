---
title: "Video Room Module – Virtual Classrooms with GegoK12"
description: "Enable live video lectures, student-teacher interactions, and remote learning via GegoK12’s Video Room integration."
og:title: "Video Room Module – Virtual Classrooms with GegoK12"
og:description: "Enable live video lectures, student-teacher interactions, and remote learning via GegoK12’s Video Room integration."
---
# Video room Module (Pro)

The Video Room Module (Pro) enables schools to conduct live virtual classes, meetings, and webinars directly within the platform. It integrates with video conferencing tools and offers real-time interaction, attendance, and session control features designed for remote and hybrid learning environments.

---

## Installation

To install the Video Module, run:

```bash
php artisan module:install-videoroom
```

---

## GitHub Authentication

Since this module is stored in a **private GitHub repository**, you'll need a **GitHub username and personal access token** after purchasing the module.

When prompted:

```bash
Username for 'https://github.com': your-github-username
Password for 'https://github.com': your-github-token
```

>  **Note**: The token should have at least `read:packages` and `repo` scopes.

---

##  What’s Included

- Create and schedule live video rooms (classes/meetings)
- Secure room access 

---

##  Twilio Setup Required

This module requires integration with **[Twilio Video API](https://www.twilio.com/video)** to enable secure and scalable live sessions.

###  What you need:
- A valid Twilio account
- Twilio Account SID
- Twilio API Key and Secret
- A verified domain or secure deployment environment

Once Twilio is configured, teachers can:
- Start instant or scheduled virtual classes
- Share join links with students
- Monitor participation and maintain session logs

---

##  Additional Notes

- Rooms auto-expire after inactivity (as per Twilio’s policy).
- Supports browser-based and mobile access (WebRTC enabled).

---

## Creating and Managing Video Rooms

Learn how to create, schedule, and manage virtual classrooms using the Video Room Module.
  
 [Open the VideoRoom Management Guide](/documentation/add-on-modules/videoroom-management)

 ---

## Troubleshooting

- **403 error on GitHub?**  
  Double-check your token scope or expiration.

- **Module not found?**  
  Ensure your license is active and GitHub access has been granted.

---

##  Support

If you purchased the module and are facing issues, contact:

support@gegok12.com  
Include your license key and GitHub username for faster resolution.
