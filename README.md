VizSec web site
===============

All source files are in the `src/jekyll` directory. The VizSec website uses [Jekyll](http://jekyllrb.com) to generate the raw html and resources, and Grunt is used to run Jekyll and watch for filesystem changes for easy development.

Changes will be forthcoming soon for deployment functionality.

# 1) Non-managed Prerequisites

- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com) - `npm install -g grunt-cli`
- [Bower](http://bower.io) - `npm install -g bower`
- [Ruby](https://www.ruby-lang.org/en/) - Required by Jekyll; OSX already has Ruby, Linux and Windows don't. On Linux at least you'll need `apt-get instal ruby-dev` too for the headers
- [Bundler](http://bundler.io/#getting-started) `gem install bundler`
- [Jekyll](http://jekyllrb.com) - `gem install jekyll`

# 2) Setting up node/bower dependencies

	cd src
	npm install
	bower install
	bundle install
        
# 3) Generate & Run website

	cd jekyll
	grunt


## Notes

- Debian requires a symlink for node due to a silly executable name issue `ln -s /usr/bin/nodejs /usr/bin/node`
