# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...




Notes:

How to integrate boostrap template on rails

There are 2 ways:

1. Easy but limited - download a theme that already has a coded Ruby on Rails Gem like this one: Get Shit Done Rails Version* or Drunken Parrot (this is limited to the number of developers who create gems for their themes) 

2. Hard but unlimited - download the theme and then:
manually move all the css/scss files in app/assets/stylesheets and then edit application.css to add all the css files that the theme has (don't include bootstrap.css because you probably will use the bootstrap gem)
*= require_self
*= require bootstrap
*= require other_css_files

manually move all the js files in app/assets/javascripts and then edit application.js to add all the js files that the theme has
//= require jquery
//= require bootstrap
//= require other_js_files

if there is a folder with "fonts" (can be regular fonts or icon fonts), go to app/assets/stylesheets and create another folder called “fonts”, 
move there all the fonts from the theme and inside the "font.css" change the source files with this type of 
locations: "src:url(<%= asset_path 'fonts/font_name.eot' %>);” In this way you make rails point to the right folder.
Then the design of the new theme should appear on your website.
