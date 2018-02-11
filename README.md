# dotnet core commands

Extension allows you to run dotnet commands from VSCode command panel with default logging. Commands are sorted into categorys and include NuGet package manager, SKD commands and migrations and are run in terminal if continous.


### Usage
* Simply hit  CMD/CTRL + Shift + P or Press F1
* type dotnet

## Features

### Specific feature descriptions.

* Easily display all command categories, by writing dotnet.

![categories](images/category.gif)

* Commands for creating, running and building dotnet core projects and much more.

![categories](images/SDKcommands.gif)

* NuGet package management. Removing and adding latest NuGet packages was never done easier.

![categories](images/packages.gif)

* You won't have to bother remembering commands anytime soon. Because we also support EntityFrameworkCore migrations.

![categories](images/migrations.gif)

-------------------------------------------------------------
## Requirements
1. `.NET Core SDK` instalation on your system from [microsoft](https://www.microsoft.com/net/download)

2. Added DotNetCliToolReference on *.cproj
```xml
<DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="2.0.0" /> current version
```
-------------------------------------------------------------

## Known Issues

* None so far

## Release Notes

### [1.0.0] - 2018-02-11

- Initial release of dotnet core commands

<!-- ### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z. -->

-------------------------------------------------------------

`Author: Matija Ramšak`

**Enjoy!**


