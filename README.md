# Usage

Once you created a new (cloud) project on forest admin,
you can use this package to add code customizations to it.

The workflow to add code customizations is the following:

1. [Bootstrap](#bootstrap) the project (not needed if the project is already bootstrapped)
2. [Setup](#setup) the project
3. [Write your customizations](#write-your-customizations)
4. [Publish your customizations](#publish-your-customizations) to your project
5. [Update typings](#update-typings) to update typings in your IDE
6. [Refresh authentication token](#refresh-authentication-token)
7. [Display logs](#display-logs)

# Bootstrap

**Not needed if the project is already bootstrapped !**
**Go to the next step if the project is already bootstrapped.**

`npx @forestadmin/forest-cloud@latest bootstrap your-project-name --env-secret your-env-secret`

# Setup

**Not needed if the project has already a .env file !**

If there is no `.env` file at the root of the project you need to create one with the following content:

```
FOREST_ENV_SECRET=your-env-secret
```

You can found the `FOREST_ENV_SECRET` in the forestadmin interface, in the `Project Settings` > `Environment` section
or ask it to an administrator of the project.

# Install dependencies and build

`yarn install` or `npm install`

then build the project

`yarn build` or `npm run build`

**You can found in your `package.json` some scripts to help you to develop customizations.
You can replace them with your own scripts, by using directly the `forest-cloud` command.**

# Write your customizations

Open the `src` folder and start writing your customizations in the `index.ts` file.

**[Read the developer guide](https://docs.forestadmin.com/developer-guide-agents-nodejs/agent-customization/agent-customization)** to learn how to write customizations.

# Publish your customizations

To publish your customizations, you need to `build`, `package` and `publish` your customizations.
The build command will compile your customizations, the package command will create a package and the publish command will publish your package to your project.

```bash
npx forest-cloud build
npx forest-cloud package
npx forest-cloud publish
```

You can also use `yarn` or `npm` and run `forestadmin:build:package:publish` script.

# Update typings

**_`build` and `build:watch` scripts will update typings automatically._**

But if you want to update typings manually, you can run:

`npx forest-cloud update-typings`

You can also use `yarn` or `npm` and run `forestadmin:update-typings` script.

This command will update typings according to the structure of your database and your current code customizations.
The typings are here to provide autocompletion in your IDE to help you write faster and avoid errors in your code.

You should execute this command on a regular basis, to keep your IDE
updated with your database structure and customizations.

# Refresh authentication token

`npx forest-cloud login`

You can also use `yarn` or `npm` and run `forestadmin:login` script.

This command triggers an authentication workflow and refresh the authentication token.

An alternative, is to add the `FOREST_AUTH_TOKEN` token in your `.env` file.
You can create one by [going to your account settings](https://app.development.forestadmin.com/user-settings/application-tokens/generate).

Then add the following line in your `.env` file:
```
FOREST_AUTH_TOKEN=your-token
```

# Display logs

`npx forest-cloud logs`

You can also use `yarn` or `npm` and run `forestadmin:logs` script.

This command will display the logs of your project. It's useful to debug your customizations.
By default, it will display the last 30 logs of the current month.