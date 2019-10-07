# webpack-tape-react
A started template for react and webpack with tape testing framework

## Prerequisites

* node
* yarn

## Usage

### run the build
> yarn build, use mode = development

### Testing
> yarn test

Runs the build before running tests. Should create a bundle file  
in dist directory.  
Uses the webpack test configuration and Babel configuration.  

invokes tape to run tests.  

### dependencies

tape
tape-run
browserify

### Configuration

#### handle babel transformation

<pre>
 .babelrc
 
 {  
  "presets": [  
    "@babel/preset-env",  
    "@babel/preset-react"  
  ],  
  "plugins": [  
    ["@babel/transform-runtime"]  
  ]  
}  
</pre>

## errors
