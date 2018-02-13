


#  Dotnet core commands


`Create and modify your dotnet core projects with ease.`

Run dotnet from VSCode command panel with default logging. By selecting the right category, you can easily manage NuGet packages, use dotnet core commands and try out EntityFrameworkCore migrations. 
[Learn more](https://github.com/matijarmk/dotnet-core-commands/wiki)



[![VS Marketplace Installs](https://vsmarketplacebadge.apphb.com/installs/matijarmk.dotnet-core-commands.svg)](https://marketplace.visualstudio.com/items?itemName=matijarmk.dotnet-core-commands)
[![VS Marketplace Installs](https://vsmarketplacebadge.apphb.com/rating-short/matijarmk.dotnet-core-commands.svg)](https://marketplace.visualstudio.com/items?itemName=matijarmk.dotnet-core-commands)
[![GitHub issues](https://img.shields.io/github/issues/matijarmk/dotnet-core-commands.svg)](https://github.com/matijarmk/dotnet-core-commands/issues)
[![GitHub license](https://img.shields.io/github/license/matijarmk/dotnet-core-commands.svg)](https://github.com/matijarmk/dotnet-core-commands/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/matijarmk/dotnet-core-commands.svg)](https://github.com/matijarmk/dotnet-core-commands.svg/releases) [![VS Marketplace Version](https://vsmarketplacebadge.apphb.com/version-short/matijarmk.dotnet-core-commands.svg)](https://vsmarketplacebadge.apphb.com/version-short/matijarmk.dotnet-core-commands.svg) 

</h4>

### Usage

* Simply hit CMD/CTRL + Shift + P or Press F1
* type dotnet

## Features

### Specific feature descriptions.

* By writing dotnet, all command categories become displayed.

![categories](images/category.gif)

* Commands for creating, running and building dotnet core projects plus so much more.

![categories](images/SDKcommands.gif)

* NuGet package management. Removing and adding latest NuGet packages has never been easier.

![categories](images/packages.gif)


* We also support EntityFrameworkCore migrations, so you don't have to bother with remembering commands anymore.

![categories](images/migrations.gif)

---

## Requirements

1. `.NET Core SDK` installation on your system from [microsoft](https://www.microsoft.com/net/download)

2. Added DotNetCliToolReference on \*.cproj

```xml
<DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="2.0.0" /> current version
```

---

## Known Issues

* None so far

## Release Notes

### [1.0.0] - 2018-02-11

* Initial release of dotnet core commands

<!-- ### 1.0.1

Fixed issue #.
 
### 1.1.0

Added features X, Y, and Z. -->

---

`Author: Matija Ramšak`

**Enjoy!**
