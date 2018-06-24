# denkstrap 3.0 
denkstrap 3.0 is a frontend boilerplate. It provides a very basic setup of an project structure to help you get started, without worrying too much about build tasks and JS architecture.  


## UNDER CONSTRUCTION - NOT USEABLE YET!
***WARNING:*** Version 3 is ****NOT****compatible with modules from previous versions.

## Prerequisites
* Node.js v8 LTS with npm 
* Recommended *nvm* (Node Version Manager) 
	* Mac/Linux [nvm](https://github.com/creationix/nvm)
	* Windows [nvm-windows](/https://github.com/coreybutler/nvm-windows/)

We recommend the installation of nvm or nvm-windows. With nvm you can change your Node.js version easily without having to reinstall Node.js completely. Especially if you have to run several projects with different Node versions, nvm can be a real blessing.  

Please check first if you have the current Node.js version 8 LTS installed. You can check which version of Node is installed by typing `node --version` in the console of your choice. If the version shown is >= 8.9 your good to go.

See our [Troubleshooting Guide](https://github.com/denkstrap/denkstrap/wiki/Troubleshooting) for more help with Node.js and the Node Version Manager (nvm)

## Quickstart
To start a new project based on the denkstrap, proceed as follows:  

1. check out the GitHub repository and delete the `.git` folder or download the denkstrap as a zip.
2. navigate to your project with the console and run `npm install` in the root directory to install all dependencies.
3. Start development with `grunt` or `grunt default`.

If errors occur during installation or development, please check our [Troubleshooting Guide](https://github.com/denkstrap/denkstrap/wiki/Troubleshooting) to see if there is already a solution. If your problem is not listed, just set a new [Issue](https://github.com/denkstrap/denkstrap/issues) and we will look together how we can fix it. 

## Updates 
When someone changed or updates package.json or package-lock.json, you should run the command `npm update`.

## Build
When you have all requirements installed, run the following grunt tasks to build the frontend:

`grunt development` or `grunt dev` for a development build with uncompressed sources. 

`grunt production` or `grunt prod` for a production build with compressed sources. 

The generated output will be located at `./dist`

### Lint
Additionally you can run the `grunt lint` task to ensure all sources are bug-free and follow the coding guidelines. 

