# Usage

Once you created a new (cloud) project on forest admin,
you can use this package to add code customizations to it.

The workflow to add code customizations is the following:

1. [Bootstrap the code customization template](#bootstrap-the-code-customization-template) to be able to write your customizations.
2. [Write your cutomizations](#write-your-customizations)
3. [Push your customizations to your project](#push-your-customizations-to-your-project)
4. [Update typings](#update-typings) to update typings in your IDE

# Bootstrap the code customization template

`npx @forestadmin/cloud-toolkit bootstrap`

then go to the generated folder

`cd cloud-customizer`

and install the dependencies

`yarn` or `npm install`

# Write your customizations

Read the developer guide: https://docs.forestadmin.com/developer-guide-agents-nodejs/agent-customization/agent-customization

# Push your customizations to your project

TODO

# Update typings

`yarn update-typings` or `npm run update-typings`

This command will update typings according to the structure of your database and your current code customizations.
The typings are here to provide autocompletion in your IDE to help you write faster and less error prone code.

You should execute this command on a regular basis, to keep your IDE
updated with your database structure and customizations.

# Refresh authentication token

`yarn signin`

This command triggers an authentication workflow and refresh the authentication token.