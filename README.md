VizSec web site
===============

All source files are in the root directory to comply with [Github Pages](https://pages.github.com). The VizSec website uses [Jekyll](http://jekyllrb.com) to generate the raw html and resources.

# Prerequisites

- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com) - `npm install -g grunt-cli`
- [Bower](http://bower.io) - `npm install -g bower`
- [Ruby](https://www.ruby-lang.org/en/) - Required by Jekyll; OSX already has Ruby, Linux and Windows don't. On Linux at least you'll need `apt-get instal ruby-dev` too for the headers
- [Bundler](http://bundler.io/#getting-started) `gem install bundler`
- [Jekyll](http://jekyllrb.com) - `gem install jekyll`

	cd src
	npm install
	bower install
	bundle install

# Deploying

At the moment, an additional step is required for SASS updates (see below), but everything else is now managed by Jekyll. 

	bundle install
	jekyll build

Will build the site into `_site`, as per Jekyll defaults. 

Pushing the whole thing to a Github Pages-compliant repository will host the site there. 

# Building SASS

	cd src/
	grunt

