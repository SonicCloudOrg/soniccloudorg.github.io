---
contributors:
- 'ZhouYixun'
---

# Test suite

This page is a tutorial on configuring a test suite.

## Device Coverage and Use Case Coverage

Use case coverage means that only one device is assigned to each use case, and device coverage means that each device will execute all use cases.

Example: Use case A and use case B are selected, and equipment 1, equipment 2, and equipment 3 are selected.

Use case coverage --> A random device runs use case A and use case B, and runs a total of 2 times.

Device Coverage --> Both use cases were run for all devices, a total of 6 runs.

## Use case configuration

Select the use case you need to run in the use case list, and then drag and drop the order in the list, and the test will be performed in this order during runtime.

::: warning note
When a test case in the list is deleted on the test case page, it will be automatically removed from the list.
:::

## Device Configuration

Select the device to run.

::: tip triggers the control runtime
1. When no device is idle, the suite skips execution
2. When the use case list is empty, the suite skips execution
3. When the device list is empty, the suite skips execution
   :::

## Performance collection

Set the switch and interval of performance collection.

### iOS
::: tip
This feature is only available after v2.1.0
:::
iOS uses [sib perfmon](https://soniccloudorg.github.io/sib/sib-perf.html) for performance collection.

### android
::: tip
This feature is only available after v2.2.0
:::
Android uses [sas perfmon](https://soniccloudorg.github.io/sas/re-sas.html) for performance collection.

## Robot Notifications

When the project has been configured to notify the robot, the execution result of the suite will be notified by the robot.
