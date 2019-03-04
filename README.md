## **WEBPACK 4 Basic Frontend configuration**
Basic Frontend starter kit with **HTML, Sass/CSS, jQuery, Bootstrap DevServer and BrowserSync**. Using dev mode sync on multiple device, vendor split for external libraries and custom bootstrap components imports. 

<br/> 

## **Separation of Webpack config environments**
```"start" ``` = dev mode with hot reloading and Browsery-Sync    
```"build:dev"``` = buildpack without minifing   
```"build:prod"``` =  final prod buildpack


<br/>

## **Using Browsery-Sync**
This is useful to sync the dev mode with other browsers or device if the Wi-Fi is the same for all device. Type the ip address shown in the terminal after running the dev mode.   
Example: ```External: http://192.168.1.34:8100 ```  
In the config of this plugins you can set the port and the files under watch for live reloading (html, pug...).  

<br/>

## **Custom Bootstrap components imports**
You can import a single Bootstrap component in js file when needed: ```import "bootstrap/js/dist/carousel";``` In this way there is no need to include the whole Bootstrap js and have a lighter vendor.js.  <br/>
In ```_bootstrap.scss```  you can import only the style components you need. This files are scss framgents imported directly from the node modules folder. This can be useful when are needed only some features from Bootstrap (example the layout/grid classes) without needing th include all the css rules.

<br/>


## **ESLINT**
To disable line : ``` // eslint-disable-line```<br>
To disable the entire file console : ``` // eslint-disable no-console ```<br>
To disable a single line : ```// eslint-disable-line no-console```

<br/>

## **ISSUES**
Webpack 4 causes issues with **Extract Text Plugin**. Use instead **mini-css-extract-plugin**
