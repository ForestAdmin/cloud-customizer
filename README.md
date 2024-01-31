# Usage

Once you created a new (cloud) project on forest admin,
you can use this package to add code customizations to it.

The workflow to add code customizations is the following:

1. [Bootstrap the code customization template](#bootstrap-the-code-customization-template), to be able to write your customizations.
2. [Generate typings](#generate-typings) for typescript to know your project types.
3. [Write your cutomizations](#write-your-customizations)
4. [Push your customizations to your project](#push-your-customizations-to-your-project)

# Bootstrap the code customization template

`npx @forestadmin/cloud-toolkit bootstrap`

then go to the generated folder

`cd cloud-customizer`

and install the dependencies

`yarn` or `npm install`

# Generate typings

`yarn update-typings` or `npm run update-typings`

This command will request you to login to your project.
It will then generate typings according to the structure of your
database and your current code customizations.

You can execute this command on a regular basis, to keep your linter
updated with your database structure and customizations.

# Write your customizations

Read the developer guide: https://docs.forestadmin.com/developer-guide-agents-nodejs/agent-customization/agent-customization

# Push your customizations to your project

TODO

