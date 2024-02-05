import type { Agent } from '@forestadmin/cloud-toolkit';

import { Schema } from '../typings';

/*
You can find the documentation of the agent here: https://docs.forestadmin.com/developer-guide-agents-nodejs/.
The documentation will help you to understand how to use the agent and how to customize your project.
*/
export default function customizeAgent(agent: Agent<Schema>) {
  agent.customizeCollection('users', (collection) => {
    collection.addField('HelloWorld', {
      columnType: 'String',
      defaultValue: 'Hello World',
      getValues(records) {
        return records.map(() => 'Hello World');
      }
    })
  });
}
