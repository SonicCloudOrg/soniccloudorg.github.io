---
contributors:
- 'ZhouYixun'
---

# Global parameters
Global parameter management for the project.

## Usage and built-in parameters

In addition to the user-defined global parameters, Sonic also has some built-in parameters for random data construction.
::: tip
During the test process, the results of test steps such as [Get Text] can also be stored in temporary parameters, and can be referenced in the same way later to achieve the effect of parameter passing.
:::

::: v-pre
| name | function | example | result | 
|-------------------------------------|---------------------------------------------|-------------------------------|---------------------|
| random | random two-digit number | John has {{random}} children. | John has 32 children. |
| timestamp | current timestamp (13 digits) | current timestamp: {{timestamp}} | current timestamp: 1675172119000 |
| random[number] | Random number with [number] digits (**available after v2.3.0**) | This is a random five-digit number: {{random[5]}} | This is a random five-digit number: 32354 |
| random[Number-Number] | Randomly draw a digit between [Number] and [Number] (**v2.3.0 version available**) | She spent {{random[100-200]}} yuan| She spent 156 yuan |
| random[string&#124;string&#124;string...] | Randomly extract a string from the string separated by &#124; in [] (**v2.3.0 version available* *) | {{random[hello&#124;123&#124;???]}} | hello or 123 or??? |
| The parameter name of the global parameter | Replace the text corresponding to the parameter name with the parameter value | hello, {{name}} | hello, sonic |
:::

## Special usage

Generally, global parameters can be assigned to multiple runtime devices with the same parameter name.
::: v-pre
Example: The parameter value of the Hello global parameter is 12|13|14. A use case step is 【Input Text】, and the text value is `abc{{Hello}}`.
:::

Then, when executing the suite, if device coverage is selected, and the execution machines are Android machine A and Android machine B.

When step [Enter text] is executed, Android A will input `abc12`, and Android B will input `abc13`.

## Add global parameters

1. Go to the home page and click the target item.
2. Click the [Test Data Management] option.
3. Click the [Global Parameters] option.
4. Click the [Add Global Parameter] button.
5. Enter the parameter name and parameter value. If there are multiple parameter values, they can be separated by |.
6. Click the [OK] button.
7. The global parameters are added!

## Edit global parameters

1. Go to the home page and click the target item.
2. Click the [Test Data Management] option.
3. Click the [Global Parameters] option.
4. Click the [Edit] button of the target parameter.
5. Edit the information you need to change.
6. Click the [OK] button.
7. The global parameters are edited!

## Delete global parameters

1. Go to the home page and click the target item.
2. Click the [Test Data Management] option.
3. Click the [Global Parameters] option.
4. Click the [Delete] button of the target parameter.
5. Click the [OK] button again.
6. Global parameters are deleted!
