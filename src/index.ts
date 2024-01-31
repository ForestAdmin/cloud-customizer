
/* 
import type { Agent } from '@forestadmin/cloud-toolkit/dist/types';

import { Schema } from '../typings';

export default function customizeAgent(agent: Agent<Schema>) {
  // Add customizations here.
  // The Schema type contains your database schema so that your IDE will autocomplete as you type.
  // As your project grows, you might need to split it into multiple files
  // For instance, you can code custom actions, charts,
  //   create new fields or relationships, load plugins.
  // refer to the documentation for more details: https://docs.forestadmin.com/developer-guide-agents-nodejs/agent-customization/agent-customization
  //
  // Here is some code examples to get your started
  
  agent.customizeCollection("user", (userCollection) => {
    userCollection.addAction("Anonymize", {
      scope: "Bulk", // This action can be triggered product on one or more products
      execute: async (context, resultBuilder) => {
        const selectedUsers = await context.getRecords([]);

        try {
          await context.collection.update(context.filter, {
            email: `anonymized@test.com`,
            firstName: "anonymized firstName",
            lastName: "anonymized lastName",
          });

          return resultBuilder.success(
            `${selectedUsers.length} user(s) successfully anonymized`
          );
        } catch (e) {
          return resultBuilder.error(
            `An error occured while anonymizing: ${(e as Error).message}`
          );
        }
      },
    });
  });

  agent.customizeCollection("product", (productCollection) => {
    productCollection.replaceSearch((searchString) => {
      // user has typed a product id, let's search only in that column
      if (searchString.match(/^prdid[\d]{8}/$))
        return { field: "id", operator: "Equal", value: searchString };
      // Otherwise assume that user wants to search for a product by name
      return { field: "name", operator: "Contains", value: searchString };
    });
  });
}
*/
