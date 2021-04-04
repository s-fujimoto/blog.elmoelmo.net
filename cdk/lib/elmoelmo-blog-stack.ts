import * as cdk from '@aws-cdk/core';
import * as amplify from '@aws-cdk/aws-amplify';

export class ElmoelmoBlogStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const amplifyApp = new amplify.App(this, "elmoelmo-blog-app", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "s-fujimoto",
        repository: "blog.elmoelmo.net",
        oauthToken: cdk.SecretValue.secretsManager("prod/blog.elmoelmo.net/amplify", {
          jsonField: "GITHUB_OAUTH_TOKEN",
        }),
      }),
    });
    const masterBranch = amplifyApp.addBranch("master");

    amplifyApp.addDomain("elmoelmo.net", {
      subDomains: [
        {
          branch: masterBranch,
          prefix: "blog"
        }
      ]
    })
  }
}
