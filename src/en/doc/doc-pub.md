---
contributors:
- 'ZhouYixun'
---

# Public steps
Public step management for projects.

## Add public steps

1. Go to the home page and click the target item.
2. Click the [Test Data Management] option.
3. Click the [Public Step] option.
4. Click the [Add Common Step] button.
5. Enter the common step name and select the platform.
6. Click the [Save] button to save the basic information of the public steps.
7. Click the [Step List] tab.
8. Click the [Add Step] button.
9. Select the type of step to add and the related information.
10. Click the [Submit] button to complete the step addition.
11. Click the "plus" button in the step list to add the selected step.
12. Click the [Save] button again.
13. Public steps are added!

## Logical processing associated with steps
It means the logic processing associated with the test step, including the following four types of logic.

- if: When there is no exception in this step, the sub-step will be executed;

- eles if: If there is an exception in the previous if conditional step, enter the logical judgment, and execute the sub-step if there is no exception;

- else: If all the above conditions fail, execute the sub-step;

- while: Repeat the substep if the condition is ok.

## Exception handling associated with steps
It means the processing plan when an exception occurs in this test step, including the following three types of exceptions.

- Ignore: Ignore the exception and continue execution (exception is not thrown during logic processing);

- Warning: mark the warning and get the exception screenshot and exception stack, and then continue to execute (no exception is thrown during logic processing);

- Interruption: mark failures and get exception screenshots, exception stacks and test recordings, and then interrupt execution (exceptions are thrown during logic processing).

## View public step details

1. Go to the home page and click the target item.
2. Click the [Test Data Management] option.
3. Click the [Public Step] option.
4. Click the [View Step] button of the target step.
5. You can view the details of the public steps.

## Edit public steps

1. Go to the home page and click the target item.
2. Click the [Test Data Management] option.
3. Click the [Public Step] option.
4. Click the [Edit] button of the target step.
5. Edit the information you need to change.
6. Click the [Save] button.
7. Public steps are edited!

## Delete public steps

1. Go to the home page and click the target item.
2. Click the [Test Data Management] option.
3. Click the [Public Step] option.
4. Click the [Delete] button of the target step.
5. Click the [OK] button again.
6. The public steps are deleted!
