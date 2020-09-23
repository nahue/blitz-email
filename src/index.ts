import {join} from "path"

import { RecipeBuilder } from '@blitzjs/installer';
export default RecipeBuilder()
  .setName('Blitz Email Recipe')
  .setDescription(
    'Provide a out-of-the box solution for email delivery.'
  )
  .setOwner('Fake Author <blitz@blitzjs.com>')
  .setRepoLink('https://github.com/fake-author/my-recipe')
  .addAddDependenciesStep({
    stepId: "addDeps",
    stepName: "Add npm dependencies",
    explanation: `Add email drivers dependencies`,
    packages: [
      {name: "@sendgrid/mail", version: "7.2.6"},
      {name: "nodemailer", version: "6.4.11"}
    ],
  })
  .addNewFilesStep({
    stepId: "addMailLogic",
    stepName: "Add files that handle email delivery",
    explanation: `We provide the minimum to get you started, but you are free to modify the templates, the logic, and the drivers!`,
    targetDirectory: ".",
    templatePath: join(__dirname, "templates"),
    templateValues: {},
  })
  .build();
