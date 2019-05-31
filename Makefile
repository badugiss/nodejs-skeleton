
all:
	@echo Do nothing...

run:
	@node src/index.js

run-stage:
	@NODE_ENV=stage \
		node src/index.js

run-production:
	@NODE_ENV=production \
		node src/index.js

run-production2:
	@NODE_ENV=production \
		SERVER_PORT=88 \
		SERVER_HOST=new.domain.com \
		node src/index.js
