---
contributors:
- 'ZhouYixun'
---

# Get started quickly

This page takes **Note App** as an example to introduce how to use the UI automation function.

::: tip
If you only use the remote control function, you can skip this page.
:::

## Create project

Create a project for your app under test.

![use-p](./images/use-p.png)

## Start remote control

::: tip note
If you don't know how to access the device, you can go to [deployment document](https://sonic-cloud.cn/deploy/android-deploy.html)
:::

After accessing the device, click to use it immediately

![use-1](./images/use-1.png)

## Binding project creation use case

1. Click the [UI Automation] tab
2. After selecting a project, click [Add Use Case]

   ![use-2](./images/use-2.png)

3. Click the created use case, the binding is complete

   ![use-3](./images/use-3.png)

## Get App package name

1. Click the [Application List] tab

   ![use-4](./images/use-4.png)

2. Find the package name of the app under test and click to copy it

   ![use-5](./images/use-5.png)

3. Go back to the 【UI Automation】tab
4. Click [New Step] to create the [Open Application] step, paste the package name, and click Save

## Get element

1. Click the [Element] tab, click [Get Element]

   ![use-6](./images/use-6.png)

2. Click the Quick Add element button

   ![use-7](./images/use-7.png)

3. Save the input element name

   ![use-8](./images/use-8.png)

4. Go back to the 【UI Automation】tab
5. Click [New Step] to create a [Click element] step, select the element you just added, and click Save

## start debugging

1. Check the newly added steps and click to start running

   ![use-9](./images/use-9.png)

2. Check the log to ensure stable operation

   ![use-10](./images/use-10.png)

## Add test suite

1. Exit the remote control and enter the project of the app under test
2. Go to the Test Suite tab and click the Add Test Suite button

   ![use-11](./images/use-11.png)

3. Fill in the relevant information and select the corresponding device

   ![use-12](./images/use-12.png)

4. Select the test case that has just been debugged and add it to it

   ![use-13](./images/use-13.png)

5. Check that the information is correct and click Submit

   ![use-14](./images/use-14.png)

## Run the test suite

1. Select the test suite just created and click Run

   ![use-15](./images/use-15.png)

2. Click the test report page to view the execution results

   ![use-16](./images/use-16.png)

At this point, a simple UI automation process ends here.
