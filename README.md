## Overview

Overview
The Chrome Extension Leads Tracker is a simple yet powerful tool designed to help you keep track of your leads' URLs directly from your browser. This extension allows you to save URLs, which can be useful for tracking websites of interest, leads for business, or any other purposes that require collecting and managing web links efficiently.

##
## Features

Features
- **Save Leads**: Quickly save URLs with a single click.
- **View Leads**: View saved leads in an organized list.
- **Delete Leads**: Easily delete individual leads or clear all saved leads.

##
## Installation Instructions

Installation Instructions
To install and set up the Chrome Extension Leads Tracker, follow these steps:

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/JamesSimel/chromeExtension.git
    ```

2. **Open Chrome Extension Management Page**:
    - Open Google Chrome.
    - Navigate to `chrome://extensions/`.

3. **Enable Developer Mode**:
    - Toggle the switch located in the top right corner to "Developer mode".

4. **Load the Extension**:
    - Click on the "Load unpacked" button.
    - Select the cloned repository folder.

5. **Verify Installation**:
    - The extension should now appear in your list of installed extensions.
    - You can start using it by clicking the extension icon in the browser bar.

##
## Usage Examples

Usage Examples
Here are some examples of how to use the Chrome Extension Leads Tracker:

1. **Saving a URL**:
    - Enter the URL in the input field.
    - Click the "Save" button.
    - The URL will be added to the list below.

2. **Viewing Saved URLs**:
    - All saved URLs will appear in a list under the input field.
    - You can click on any URL to visit the website.

3. **Deleting URLs**:
    - You can delete individual URLs by clicking the delete button next to each URL.
    - To clear all saved URLs at once, click the "Delete All" button.

##
## Code Summary

Code Summary


### Key Code Elements:
- **Leads Array**: 
    ```javascript
    let myLeads = [];
    ```

- **DOM Elements**:
    ```javascript
    const inputEl = document.getElementById("input-el");
    const inputBtn = document.getElementById("input-btn");
    const ulEl = document.getElementById("ul-el");
    const deleteBtn = document.getElementById("delete-btn");
    ```

- **Event Listeners**:
    - To handle saving and deleting leads.

This setup ensures that the extension captures the necessary user interactions and manipulates the DOM to update the list of leads dynamically.

##
## License

License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software in any manner you see fit, provided this license information is included with any distribution.

---

We hope you find the Chrome Extension Leads Tracker useful for your needs! Feel free to contribute to the project or report any issues on the [GitHub repository](https://github.com/JamesSimel/chromeExtension.git).
```
