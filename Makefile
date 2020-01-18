server:
	python3 -m http.server

open_brawser:
	google-chrome http://0.0.0.0:8000/index.html 


run:
	make open_brawser && make server
