import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs'

export class TodoAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloWorldFunction = new lambdaNodejs.NodejsFunction(this, 'HelloWorld', {
      entry: "lambda/hello-world.ts",
      handler: "handler",
      memorySize: 256,
      timeout: Duration.seconds(10)
    });
  }
}
